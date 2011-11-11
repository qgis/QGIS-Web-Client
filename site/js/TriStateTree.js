/* --------------- TriStateTree Node UI -------------------- */

Ext.tree.TriStateNodeUI = Ext.extend(Ext.tree.TreeNodeUI, {
	onCheckChange :function(){
		Ext.tree.TriStateNodeUI.superclass.onCheckChange.apply(this, arguments);
		var p = this.node;
		while((p = p.parentNode) && p.getUI().updateParent && p.getUI().checkbox && !p.getUI().isUpdating) {
			p.getUI().updateParent();
		}
	},
	toggleCheck :function(){
		var checked = Ext.tree.TriStateNodeUI.superclass.toggleCheck.apply(this, arguments);
		this.updateChild(checked);
		return checked;
	},
	renderElements :function(n, a, targetNode, bulkRender){
		Ext.tree.TriStateNodeUI.superclass.renderElements.apply(this, arguments);
		this.updateChild(this.node.attributes.checked);
	},
	updateParent :function(){
		var checked;
		this.node.eachChild(function(n){
			if(checked === undefined){
				checked = n.attributes.checked;
			}else if (checked !== n.attributes.checked) {
				checked = this.grayedValue;
				return false;
			}
		}, this);
		this.toggleCheck(checked);
	},
	updateChild:function(checked){
		if(typeof checked == 'boolean'){
			this.isUpdating = true;
			this.node.eachChild(function(n){
				n.getUI().toggleCheck(checked);
			}, this);
			delete this.isUpdating;
		}
	}
});
Ext.tree.AsynchTriStateNodeUI = Ext.extend(Ext.tree.TriStateNodeUI, {
	updateChild:function(checked){
		if(this.checkbox){
			if(checked === true){
				Ext.fly(this.ctNode).replaceClass('x-tree-branch-unchecked', 'x-tree-branch-checked');
			} else if(checked === false){
				Ext.fly(this.ctNode).replaceClass('x-tree-branch-checked', 'x-tree-branch-unchecked');
			} else {
				Ext.fly(this.ctNode).removeClass(['x-tree-branch-checked', 'x-tree-branch-unchecked']);
			}
		}
	},
	getChecked: function() {
		var checked = this.node.parentNode ? this.node.parentNode.ui.getChecked() : this.grayedValue;
		return typeof checked == 'boolean' ? checked : Ext.tree.TriStateNodeUI.superclass.getChecked.call(this);
	}
});


/* --------------- TreeCheckox -------------------- */

Ext.override(Ext.tree.TreeNodeUI, {
	grayedValue:null,
	onDisableChange :function(node, state){
		this.disabled = state;
		this[state ? 'addClass' :'removeClass']("x-tree-node-disabled");
	},
	initEvents :function(){
		this.node.on("move", this.onMove, this);
		if(this.node.disabled){
			this.disabled = true;
			this.addClass("x-tree-node-disabled");
		}
		if(this.node.hidden){
			this.hide();
		}
		var ot = this.node.getOwnerTree();
		var dd = ot.enableDD || ot.enableDrag || ot.enableDrop;
		if(dd && (!this.node.isRoot || ot.rootVisible)){
			Ext.dd.Registry.register(this.elNode, {
				node:this.node,
				handles:this.getDDHandles(),
				isHandle:false
			});
		}
	},
	onDblClick :function(e){
		e.preventDefault();
		if(this.disabled){
			return;
		}
		if(!this.animating && this.node.isExpandable() && !e.getTarget('.x-tree-checkbox', 1)){
			this.node.toggle();
		}
		this.fireEvent("dblclick", this.node, e);
	},
	onCheckChange :function(){
		var checked = this.isChecked();
		if(checked !== this.node.attributes.checked){
			this.node.attributes.checked = checked;
			this.fireEvent('checkchange', this.node, checked);
		}
	},
	toggleCheck :function(checked){
		var cb = this.checkbox;
		if(!cb){
			return false;
		}
		if(checked === undefined){
			checked = this.isChecked() === false;
		}
		if(checked === true){
			Ext.fly(cb).replaceClass('x-tree-node-grayed', 'x-tree-node-checked');
		} else if(checked !== false){
			Ext.fly(cb).replaceClass('x-tree-node-checked', 'x-tree-node-grayed');
		} else {
			Ext.fly(cb).removeClass(['x-tree-node-checked', 'x-tree-node-grayed']);
		}
		this.onCheckChange();
		return checked;
	},
	onCheckboxClick:function() {
		if(!this.disabled){
			this.toggleCheck();
		}
		// Modified code, AN
		var isChecked = this.node.attributes.checked == null ? false : !this.node.attributes.checked;
		var isParent  = !this.node.isLeaf();

		if(isParent) {
		    if(isChecked && !this.node.isExpanded()) {
			this.node.expand(true, false, function(node) {
			    node.ownerTree.fireEvent('leafschange', this);
			});
			this.node.collapse(true,false);
		    }
		    else {
			var i = 0;
			this.node.cascade(function(node) {
			    if(i == this.node.childNodes.length) this.node.ownerTree.fireEvent('leafschange');
			    i++;
			}, this);
		    }
		}
		else {
		    isChecked ? this.node.ownerTree.checkedLeafs.push(this.node) : this.node.ownerTree.checkedLeafs.remove(this.node);
		    this.node.ownerTree.fireEvent('leafschange');
		}
		// End of Modified code, AN
	},
	onCheckboxOver:function() {
		this.addClass('x-tree-checkbox-over');
	},
	onCheckboxOut:function() {
		this.removeClass('x-tree-checkbox-over');
	},
	onCheckboxDown:function() {
		this.addClass('x-tree-checkbox-down');
	},
	onCheckboxUp:function() {
		this.removeClass('x-tree-checkbox-down');
	},
	renderElements :function(n, a, targetNode, bulkRender){
		this.indentMarkup = n.parentNode ? n.parentNode.ui.getChildIndent() :'';
		var cb = a.checked !== undefined;
		var href = a.href ? a.href :Ext.isGecko ? "" :"#";
		var buf = ['<li class="x-tree-node"><div ext:tree-node-id="',n.id,'" class="x-tree-node-el x-tree-node-leaf x-unselectable ', a.cls,'" unselectable="on">',
			'<span class="x-tree-node-indent">',this.indentMarkup,"</span>",
			'<img src="', this.emptyIcon, '" class="x-tree-ec-icon x-tree-elbow" />',
			'<img src="', a.icon || this.emptyIcon, '" class="x-tree-node-icon',(a.icon ? " x-tree-node-inline-icon" :""),(a.iconCls ? " "+a.iconCls :""),'" unselectable="on" />',
			cb ? ('<img src="'+this.emptyIcon+'" class="x-tree-checkbox'+(a.checked === true ? ' x-tree-node-checked' :(a.checked !== false ? ' x-tree-node-grayed' :''))+'" />') :'',
			'<a hidefocus="on" class="x-tree-node-anchor" tabIndex="1" ',
			a.hrefTarget ? ' target="'+a.hrefTarget+'"' :"", '><span unselectable="on">',n.text,"</span></a></div>",
			'<ul class="x-tree-node-ct" style="display:none;"></ul>',
			"</li>"].join('');
		var nel;
		if(bulkRender !== true && n.nextSibling && (nel = n.nextSibling.ui.getEl())){
			this.wrap = Ext.DomHelper.insertHtml("beforeBegin", nel, buf);
		}else{
			this.wrap = Ext.DomHelper.insertHtml("beforeEnd", targetNode, buf);
		}
		this.elNode = this.wrap.childNodes[0];
		this.ctNode = this.wrap.childNodes[1];
		var cs = this.elNode.childNodes;
		this.indentNode = cs[0];
		this.ecNode = cs[1];
		this.iconNode = cs[2];
		var index = 3;
		if(cb){
			this.checkbox = cs[3];
			index++;
		}
		this.anchor = cs[index];
		this.textNode = cs[index].firstChild;
	},
	isChecked :function(){
		return this.checkbox
			? (Ext.fly(this.checkbox).hasClass('x-tree-node-checked')
				? true
				:Ext.fly(this.checkbox).hasClass('x-tree-node-grayed')
					? this.grayedValue
					:false)
			:false;
	},
	getChecked: function() {
		return this.node.attributes.checked;
	}
});
Ext.override(Ext.tree.TreeEventModel, {
	initEvents :function(){
		var el = this.tree.getTreeEl();
		el.on('click', this.delegateClick, this);
		if(this.tree.trackMouseOver !== false){
			el.on('mouseover', this.delegateOver, this);
			el.on('mouseout', this.delegateOut, this);
		}
		el.on('mousedown', this.delegateDown, this);
		el.on('mouseup', this.delegateUp, this);
		el.on('dblclick', this.delegateDblClick, this);
		el.on('contextmenu', this.delegateContextMenu, this);
	},
	delegateOver :function(e, t){
		if(!this.beforeEvent(e)){
			return;
		}
		if(this.lastEcOver){
			this.onIconOut(e, this.lastEcOver);
			delete this.lastEcOver;
		}
		if(this.lastCbOver){
			this.onCheckboxOut(e, this.lastCbOver);
			delete this.lastCbOver;
		}
		if(e.getTarget('.x-tree-ec-icon', 1)){
			this.lastEcOver = this.getNode(e);
			this.onIconOver(e, this.lastEcOver);
		}
		else if(e.getTarget('.x-tree-checkbox', 1)){
			this.lastCbOver = this.getNode(e);
			this.onCheckboxOver(e, this.lastCbOver);
		}
		if(this.getNodeTarget(e)){
			this.onNodeOver(e, this.getNode(e));
		}
	},
	delegateOut :function(e, t){
		if(!this.beforeEvent(e)){
			return;
		}
		var n;
		if(e.getTarget('.x-tree-ec-icon', 1)){
			n = this.getNode(e);
			this.onIconOut(e, n);
			if(n == this.lastEcOver){
				delete this.lastEcOver;
			}
		}
		else if(e.getTarget('.x-tree-checkbox', 1)){
			n = this.getNode(e);
			this.onCheckboxOut(e, n);
			if(n == this.lastCbOver){
				delete this.lastCbOver;
			}
		}
		t = this.getNodeTarget(e);
		if(t && !e.within(t, true)){
			this.onNodeOut(e, this.getNode(e));
		}
	},
	delegateDown :function(e, t){
		if(!this.beforeEvent(e)){
			return;
		}
		if(e.getTarget('.x-tree-checkbox', 1)){
			this.onCheckboxDown(e, this.getNode(e));
		}
	},
	delegateUp :function(e, t){
		if(!this.beforeEvent(e)){
			return;
		}
		if(e.getTarget('.x-tree-checkbox', 1)){
			this.onCheckboxUp(e, this.getNode(e));
		}
	},
	delegateClick :function(e, t){
		if(!this.beforeEvent(e)){
			return;
		}
		if(e.getTarget('.x-tree-checkbox', 1)){
			this.onCheckboxClick(e, this.getNode(e));
		}
		else if(e.getTarget('.x-tree-ec-icon', 1)){
			this.onIconClick(e, this.getNode(e));
		}
		else if(this.getNodeTarget(e)){
			this.onNodeClick(e, this.getNode(e));
		}
	},
	onCheckboxClick :function(e, node){
		node.ui.onCheckboxClick();
	},
	onCheckboxOver :function(e, node){
		node.ui.onCheckboxOver();
	},
	onCheckboxOut :function(e, node){
		node.ui.onCheckboxOut();
	},
	onCheckboxDown :function(e, node){
		node.ui.onCheckboxDown();
	},
	onCheckboxUp :function(e, node){
		node.ui.onCheckboxUp();
	}
});
Ext.override(Ext.tree.TreePanel, {
	getChecked : function(a, startNode){
		startNode = startNode || this.root;
		var r = [];
		var f = function(){
			if(this.ui.getChecked()){
				r.push(!a ? this : (a == 'id' ? this.id : this.attributes[a]));
			}
		};
		startNode.cascade(f);
		return r;
	}
});
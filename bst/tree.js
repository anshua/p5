
function Tree() {
	this.root = null;
}

Tree.prototype.addValue = function(val) {
	var n = new Node(val);
	if(this.root == null){
		this.root = n;
		this.root.x = width / 2;
		this.root.y = 30;
	}
	else{
		this.root.addNode(n);
	}
};

Tree.prototype.traverse = function() {
	this.root.visit();
};

Tree.prototype.search = function(val) {
	var found = this.root.search(val);
	return found;
	if(found == null){
		console.log("not found ");
	}
};

function Node(val, x, y) {
	this.value = val;
	this.left = null;
	this.right = null;
	this.x = x;
	this.y = y;
}

Node.prototype.addNode = function(n) {
	if(n.value < this.value){
		if(this.left == null){
			this.left = n;
			this.left.x = this.x - 50;
			this.left.y = this.y + 20;
			line(this.x, this.y, this.left.x, this.left.y);
			ellipse(this.left.x, this.left.y, 30);
		}
		else{
			this.left.addNode(n);
		}
	}
	else{
		if(this.right == null){
			this.right = n;
			this.right.x = this.x + 50;
			this.right.y = this.y + 20;
			line(this.x, this.y, this.right.x, this.right.y);
			ellipse(this.right.x, this.right.y, 30);
		}
		else{
			this.right.addNode(n);
		}
	}
};

Node.prototype.visit = function() {
	if(this.left != null){
		this.left.visit();
	}
	console.log(this.value)
	fill(10);
	noStroke();
	textAlign(CENTER);
	text(this.value, this.x, this.y);
	if(this.right != null){
		this.right.visit();
	}
};

Node.prototype.search = function(val) {
	if(this.value == val){
		return this;
	}
	else if(this.value > val && this.left != null){
		return this.left.search(val);
	}
	else if(this.right != null){
		return this.right.search(val);
	}
	return null;
};


function Cell(i, j, w) {
	this.i = i;
	this.j = j;
	this.x = i * w;
	this.y = j * w;
	this.w = w;
	this.bee = false;
	this.neighborCount = 0;

	this.revealed = false;

}

Cell.prototype.show = function() {
	stroke(255);
	noFill();
	rect(this.x, this.y, this.w, this.w);

	if(this.revealed){
		if(this.bee){
			fill(220);
			rect(this.x, this.y, this.w, this.w);
			fill(100);
			ellipse(this.x + this.w * 0.5, this.y + this.w * 0.5, this.w * 0.5);
		}
		else{
			fill(220);
			rect(this.x, this.y, this.w, this.w);
			
			if(this.neighborCount > 0){
				textAlign(CENTER);
				fill(0);
				text(this.neighborCount, this.x + this.w * 0.5, this.y + this.w * 0.5 + 5);
			}
		}
	}
};

Cell.prototype.countBees = function() {
	if(this.bee){
		return -1;
	}
	var total = 0;
	for(var i = -1; i <= 1; i++){
		for(var j = -1; j <= 1; j++){
			var x = this.i + i;
			var y = this.j + j;
			if(x > -1 && x < cols && y > -1 && y < rows){
				var neighbor = grid[x][y];
				if(neighbor.bee){
					total += 1;
				}
			}
		}
	}
	this.neighborCount = total
};

Cell.prototype.contains = function(x, y) {
	return (x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.w)
};

Cell.prototype.reveal = function() {
	this.revealed = true
	if(this.neighborCount == 0 && !this.bee){
		this.floodFill();
	}
};

Cell.prototype.floodFill = function() {
	for(var i = -1; i <= 1; i++){
		for(var j = -1; j <= 1; j++){
			var x = this.i + i;
			var y = this.j + j;
			if(x > -1 && x < cols && y > -1 && y < rows){
				var neighbor = grid[x][y];
				if(!neighbor.bee && !neighbor.revealed){
					neighbor.reveal();
				}
			}
		}
	}
};


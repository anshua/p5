var rows, cols;
var w = 20;
var grid = [];

var current;
var stack = [];

function setup() {
	createCanvas(600, 600);
	cols = floor(width/w);
	rows = floor(height/w);

	for(var j = 0; j < rows; j++){
		for(var i = 0; i < cols; i++){
			var cell = new Cell(i, j);
			grid.push(cell);
		}
	}

	current = grid[floor(random(0, grid.length))];
	stack.push(current);
}

function draw() {
	background(51);
	for(var i = 0; i < grid.length; i++){
		grid[i].show();
	}
	// frameRate(5);
	var next;
	if(current != undefined){
		current.visited = true;
		current.highlighted();
		next = current.checkNeighbors();
	}
	if(next){
		next.visited = true;
		removeWalls(current, next);
		current = next;
		stack.push(current);
	}
	else if(stack.length > 0){
		stack.pop();
		current = stack[stack.length - 1];
	}
}

function removeWalls(a, b) {

	if(b.i - a.i === 1){
		a.walls[1] = false;
		b.walls[3] = false;
	}
	else if(b.i - a.i === -1){
		a.walls[3] = false;
		b.walls[1] = false;
	}
	else if(b.j - a.j === 1){
		a.walls[2] = false;
		b.walls[0] = false;
	}
	else if(b.j - a.j === -1){
		a.walls[0] = false;
		b.walls[2] = false;
	}
}

function index(i, j) {
	if(i < 0 || j < 0 || i > cols - 1 || j > rows - 1){
		return -1;
	}
	return  i + j*cols;
}


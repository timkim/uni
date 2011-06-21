x$(window).on('load',function(){
	this._nodes = [];
	this._unis = [];
	this._width = 400;
	this._height = 400;	
	this._pickUp = false;
	// make game board
	for(var i=0;i<16;i++){
			this._nodes[i] = new node('node_'+i,(i%4)*60,Math.floor(i/4)*60,Math.floor(Math.random()*10),'red');
			x$('#container')[0].innerHTML += '<div id="node_'+i+'" class ="node"><div class="number">'+this._nodes[i].num+'</div></div>';
	}
	var self = this;
	x$('body').on('mousedown',function(e){
		// figure out which node is at mouse down
		
	});
	

	drawBoard();
});

function node(id,x,y,num,colour){
	this.id = id;
	this.x = x;
	this.y = y;
	this.num = num;
	this.colour = colour;
}

function drawBoard(){
	for(var i=0;i<this._nodes.length;i++){
		x$('#'+this._nodes[i].id).setStyle("-webkit-transform","translate("+this._nodes[i].x+"px, "+this._nodes[i].y+"px)");
	}
}

function getMouseDownNode(x,y){
	for(var i=0;i<this._nodes.length;i++){
		
	}
}
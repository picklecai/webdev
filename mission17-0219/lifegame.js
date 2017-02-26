window.onload = function lifegame()
{
	var context = canvas.getContext("2d");
	drawLine(context);	
	setInterval("updateCanvas()", 500);
}

var canvas = document.getElementById("lifegame");
var step = 50;
var wn = canvas.offsetWidth/step, hn = canvas.offsetHeight/step;

function drawLine(context)
{
	context.beginPath();
	context.lineWidth = 1;
	for(i=0; i<wn; i++)
	{
		context.moveTo(i*step,0);
		context.lineTo(i*step, canvas.offsetHeight);
	}	
	for(j=0; j<hn; j++)
	{
		context.moveTo(0, j*step);
		context.lineTo(canvas.offsetWidth, j*step);
	}
	context.closePath();
	context.stroke();
}

function updateCanvas(context, cellMatrix)
{
	updateCellMatrix(cellMatrix);
	drawCanvas(context);
}

function updateCellMatrix(cellMatrix)
{
	for(i=0; i<wn; i++)
		for(j=0; j<hn; j++)
		{
			console.log("cell i,j is drawed");
		}
}

function drawCanvas(context)
{
	console.log("Draw Canvas");
}


/*

//定义单元格对象
var cells = {};

var n = wn * hn;



function draw()
{
	if(canvas.getContext)
	{

		//context.save(); //删掉一点影响都没有。
		context.clearRect(0,0,width, height);	
		var w = 50;	
		//var w = Math.floor(Math.random()*40);
		var x = Math.floor(Math.random() * canvas.width);
		if (x<w) x=w;
		else if((width-x)<w) x=width-w;
		var y = Math.floor(Math.random() * canvas.height);
		if (y<w) y=w;
		else if((height-y)<w) y=height-w;	
		context.fillStyle = "lightblue";
		context.fillRect(x, y, w, w);
		setTimeout("draw()", 500);
	}
}			

window.onload = function move()
{
	//setInterval("draw()", 500);
	setTimeout("draw()", 500);
}
*/
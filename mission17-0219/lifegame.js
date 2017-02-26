window.onload = function lifegame()
{
	var context = canvas.getContext("2d");
	var rn = 30;	
	drawLine(context);
	drawRandom(context, rn);
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

function drawRandom(context, rn)
{
	for(i=0; i<rn; i++)
	{
		var x = step * (Math.floor(Math.random() * wn));
		var y = step * (Math.floor(Math.random() * hn));
		context.fillRect(x, y, step, step);		
	}

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
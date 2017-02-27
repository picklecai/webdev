window.onload = function lifegame()
{
	var context = canvas.getContext('2d');
	var rn = 20;	
	drawLine(context);
	drawRandom(context, rn);
	updateCanvas();
	//setInterval("updateCanvas()", 500);
}

var canvas = document.getElementById("lifegame");
var step = 50;
var wn = canvas.offsetWidth/step, hn = canvas.offsetHeight/step, n = wn * hn;
var cells = [];
for(i=0; i<wn; i++)
	for(j=0; j<hn; j++)
	{
		cells[i][j] = {"x":i*step, "y":j*step, "flag":0, "ctxCells":0};
	}	

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
		fillCell(context, x, y);		
	}
}

function updateCanvas(context, cell)
{
	updateCellMatrix(cell);
	context.fillStyle = '#'+Math.floor(Math.random()*16777215).toString(16);	
	drawCanvas(context);
}

function updateCellMatrix(cell)
{
	for(i=0; i<wn; i++)
		for(j=0; j<hn; j++)
		{
			console.log("cell i,j is drawed");
		}
}

function fillCell(context, i, j)
{
	x = i * step;
	y = j *step;
	context.fillRect(x, y, step, step);	
}

function discolorCell(context, i, j)
{
	x = i * step;
	y = j *step;	
	context.fillStyle = "white";
	context.fillRect(x, y, step, step);		
}

function drawCanvas(context, i, j)
{
	x = i * step;
	y = j *step;		
	if (cell[i][j].ctxCells == 3)
	{
		fillCell(context, x, y);
	}
	else if (cell[i][j].ctxCells <2 || cell[i][j].ctxCells >3)
	{
		discolorCell(context, x, y);
	}
	else if (cell[i][j].ctxCells ==2)
	{
		return;
	}
}

function getCtxCells(i, j)
{
	var ctxCells = cell[i-1][j-1].flag + cell[i][j-1].flag + cell[i+1][j-1].flag  + cell[i-1][j].flag + cell[i+1][j].flag + cell[i-1][j+1].flag + cell[i][j+1].flag + cell[i+1][j+1].flag;   
	return ctxCells;
}
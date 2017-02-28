window.onload = function lifegame()
{
	var context = canvas.getContext('2d');
	var rn = 35;	
	//drawLine(context);
	drawRandom(context, rn);
	/*for(i=0;i<wn-1;i++)
	{
		for(j=0;j<hn-1;j++)
		{
			//console.log(getCtxCells(cells, i, j));
			console.log(cells[i][j].flag);
		}
	}*/
	//updateCanvas();
	setInterval("updateCanvas()", 500);
	//context.fillStyle = "black";
	//drawLine(context);
}

var canvas = document.getElementById("lifegame");
var step = 50;
var wn = canvas.offsetWidth/step, hn = canvas.offsetHeight/step, n = wn * hn;
var cells = [];
var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
//console.log(wn, hn);//浮点数
for(i=0; i<wn; i++)
	{
		if(!cells[i])cells[i] = [];
		for(j=0; j<hn; j++)
		{
			cells[i][j] = {"x":i*step, "y":j*step, "flag":0, "ctxCells":0};
		}
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
		fillCell(context, x/step, y/step);
	}
}

function updateCanvas(context)
{
	for(i=0; i<wn-1; i++)
	{
		for(j=0; j<hn-1; j++)
		{
			drawCanvas(context, i, j);			
		}
	}
}

function fillCell(context, i, j)
{
	x = i * step;
	y = j *step;
	context.fillStyle = randomColor;	
	context.fillRect(x, y, step, step);
	cells[i][j].flag = 1;
}

function discolorCell(context, i, j)
{
	x = i * step;
	y = j *step;	
	context.fillStyle = "white";
	context.fillRect(x, y, step, step);	
	cells[i][j].flag = 0;	
}

function getCtxCells(cells, i, j)
{
	if(i==0 && j==0)
	{
		cells[i][j].ctxCells = cells[i+1][j].flag + cells[i][j+1].flag + cells[i+1][j+1].flag;
	}
	else if(i==0 && j!=0 && j!=hn)
	{
		cells[i][j].ctxCells = cells[i][j-1].flag + cells[i+1][j-1].flag  + cells[i+1][j].flag + cells[i][j+1].flag + cells[i+1][j+1].flag;
	}
	else if(i==0 && j==hn)
	{
		cells[i][j].ctxCells = cells[i][j-1].flag + cells[i+1][j-1].flag + cells[i+1][j].flag;
	}
	else if(i!=0 && i!=wn && j==0)
	{
		cells[i][j].ctxCells = cells[i-1][j].flag + cells[i+1][j].flag + cells[i-1][j+1].flag + cells[i][j+1].flag + cells[i+1][j+1].flag;
	}	
	else if(i!=0 && i!=wn && j==hn)
	{
		cells[i][j].ctxCells = cells[i-1][j-1].flag + cells[i][j-1].flag + cells[i+1][j-1].flag  + cells[i-1][j].flag + cells[i+1][j].flag;
	}
	else if(i==wn && j==0)
	{
		cells[i][j].ctxCells = cells[i-1][j].flag + cells[i-1][j+1].flag + cells[i][j+1].flag;
	}
	else if(i==wn && j!=0 && j!=hn)
	{
		cells[i][j].ctxCells = cells[i-1][j-1].flag + cells[i][j-1].flag + cells[i-1][j].flag + cells[i-1][j+1].flag + cells[i][j+1].flag;
	}
	else if(i==wn && j==hn)
	{
		cells[i][j].ctxCells = cells[i-1][j-1].flag + cells[i][j-1].flag + cells[i-1][j].flag;
	}	
	else if((i!=0||wn) && (j!=0||hn))
	{
		cells[i][j].ctxCells = cells[i-1][j-1].flag + cells[i][j-1].flag + cells[i+1][j-1].flag  + cells[i-1][j].flag + cells[i+1][j].flag + cells[i-1][j+1].flag + cells[i][j+1].flag + cells[i+1][j+1].flag;
	}  
	return cells[i][j].ctxCells;
}

function drawCanvas(context, i, j)
{
	var context = canvas.getContext('2d');
	cells[i][j].ctxCells = getCtxCells(cells, i, j);
	if (cells[i][j].ctxCells == 3)
	{
		fillCell(context, i, j);
	}
	else if (cells[i][j].ctxCells <2 || cells[i][j].ctxCells >3)
	{
		discolorCell(context, i, j);
	}
	else if (cells[i][j].ctxCells ==2)
	{
		return;
	}
}
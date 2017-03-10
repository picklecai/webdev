//全局变量定义
var canvas = document.getElementById("lifegame");
var step = 50;
var wn = canvas.offsetWidth/step, hn = canvas.offsetHeight/step;
var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
//全局变量定义：cell对象定义
var cells = [];
for(i=0; i<wn; i++)
	{
		if(!cells[i]) cells[i] = [];
		for(j=0; j<hn; j++) cells[i][j] = {"flag":0};
	}

window.onload = function()
{
	var button = document.getElementById("startButton");
	var context = canvas.getContext('2d');	
	drawCellsBorder(context); //画cells的边框
	button.onclick = function()
	{
		var selectObj = document.getElementById("randomCellNum");
		var index = selectObj.selectedIndex;
		var rn = selectObj[index].value;
		initialCell(context, rn); //初始化：随机确定活着的cell
		//updateCanvas(); //单步调试时用
		setInterval(_updateCanvas(context), 500); //自动按规则执行	
	}
}

//画cells的边框
function drawCellsBorder(context)
{
	context.beginPath();
	context.lineWidth = 1;
	for(i=1; i<wn; i++)
	{
		context.moveTo(i*step,step);
		context.lineTo(i*step, (hn-1)*step);
	}	
	for(j=1; j<hn; j++)
	{
		context.moveTo(step, j*step);
		context.lineTo((wn-1)*step, j*step);
	}
	context.closePath();
	context.stroke();
}

//初始化：随机确定活着的cell
function initialCell(context, rn)
{
	for(i=0; i<rn; i++)
	{
		var x = step * Math.floor(Math.random() * (wn-2)+1);
		var y = step * Math.floor(Math.random() * (hn-2)+1);
		surviveCell(context, x/step, y/step);		
	}
}

//执行规则
function _updateCanvas(context)
{
	return function()
	{
		updateCanvas(context);
	}
}
function updateCanvas(context)
{
	for(i=1; i<wn-2; i++)
	{
		for(j=1; j<hn-2; j++)
		{
			survivalOrDeath(context, i, j); //这里把四边去掉；			
		}
	}
}

//复活cell
function surviveCell(context, i, j)
{
	x = i * step;
	y = j *step;
	context.fillStyle = randomColor;	
	context.fillRect(x, y, step, step);
	context.strokeStyle = "black";
	context.strokeRect(x, y, step, step);	
	cells[i][j].flag = 1;
}

//杀死cell
function deadCell(context, i, j)
{
	x = i * step;
	y = j *step;	
	context.fillStyle = "white";
	context.fillRect(x, y, step, step);
	context.strokeStyle = "black";
	context.strokeRect(x, y, step, step);
	cells[i][j].flag = 0;	
}

//计算周边活着的cells数量
function neighborCellsNum(cells, i, j)
{
	var ctxCells = cells[i-1][j-1].flag + cells[i][j-1].flag + cells[i+1][j-1].flag  + cells[i-1][j].flag + cells[i+1][j].flag + cells[i-1][j+1].flag + cells[i][j+1].flag + cells[i+1][j+1].flag;
	return ctxCells;
}

//确定生死规则
function survivalOrDeath(context, i, j)
{
	cells[i][j].ctxCells = neighborCellsNum(cells, i, j);
	if (cells[i][j].ctxCells == 3) surviveCell(context, i, j);
	else if (cells[i][j].ctxCells <2 || cells[i][j].ctxCells >3) deadCell(context, i, j);
	else if (cells[i][j].ctxCells ==2) return;
}
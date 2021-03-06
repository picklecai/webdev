function draw()
{
	var canvas = document.getElementById("draw-in-me");
	if(canvas.getContext)
	{
		var ctx = canvas.getContext("2d");
		ctx.beginPath();
		ctx.moveTo(120.0, 32.0);
		ctx.bezierCurveTo(120.0, 36.4, 116.4, 40.0, 112.0, 40.0);
		ctx.lineTo(8.0, 40.0);
		ctx.bezierCurveTo(3.6, 40.0, 0.0, 36.4, 0.0, 32.0);
		ctx.lineTo(0.0, 8.0);
		/*ctx.bezierCurveTo(0.0, 3.6, 3.6, 0.0, 8.0, 0.0);
		ctx.lineTo(112.0, 0.0);	
		ctx.bezierCurveTo(116.4, 0.0, 120.0, 3.6, 120.0, 8.0);			
		ctx.lineTo(120.0, 32.0);*/
		ctx.closePath();
		ctx.fill();
		ctx.lineWidth = 10.0;
		ctx.strokeStyle = "rgb(35, 150, 255)";
		ctx.stroke();
	}
}

function tshirt()
{
	var canvas = document.getElementById("tshirtCanvas");
	if(canvas.getContext)
	{
		/*var context = canvas.getContext("2d");
		context.fillRect(10, 50, 500, 100);	*/
		var selectObj = document.getElementById("backgroundColor");
		var index = selectObj.selectedIndex;
		var bgColor = selectObj[index].value;

		var selectObj = document.getElementById("foregroundColor");
		var index = selectObj.selectedIndex;
		var fgColor = selectObj[index].value;	
	}
}

window.onload = function()
{
	var button = document.getElementById("previewButton");
	button.onclick = previewHandler;
}

function previewHandler()
{
	var canvas = document.getElementById("tshirtCanvas");
	if(canvas.getContext)
	{
		var context = canvas.getContext("2d");
		var selectObj = document.getElementById("shape");
		var index = selectObj.selectedIndex;
		var shape = selectObj[index].value;	
		fillBackgroundColor(canvas, context);	//写在for里面，每次就只画一个方块了。			
		if (shape=="squares")
		{
			for (var squares = 0; squares < 20; squares++)
			{
				drawSquare(canvas, context);
			}
		}
		else if(shape=="circles")
		{
			for (var circles = 0; circles < 20; circles++)
			{
				drawCircle(canvas, context);
			}
		}
	}
}

function fillBackgroundColor(canvas, context)
{
	var selectObj = document.getElementById("backgroundColor");
	var index = selectObj.selectedIndex;
	var bgColor = selectObj[index].value;
	context.fillStyle = bgColor;
	context.fillRect(0, 0, canvas.width, canvas.height);
}

function drawSquare(canvas, context)
{
	var w = Math.floor(Math.random()*40);
	var x = Math.floor(Math.random() * canvas.width);
	var y = Math.floor(Math.random() * canvas.height);
	context.fillStyle = "lightblue";
	context.fillRect(x, y, w, w);	
}

function drawCircle(canvas, context)
{
	var radius = Math.floor(Math.random()*40);
	var x = Math.floor(Math.random() * canvas.width);
	var y = Math.floor(Math.random() * canvas.height);
	context.beginPath();
	context.arc(x, y, radius, 0, degreeToRadians(360), true);
	context.fillStyle = "lightblue";
	context.fill();
}

function degreeToRadians(degree)
{
	var Radian = degree / (2*Math.PI);
	return Radian;
}

//window.onload = draw;
//window.onload = tshirt;

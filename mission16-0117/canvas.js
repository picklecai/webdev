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
		var context = canvas.getContext("2d");
		context.fillRect(10, 50, 500, 100);		
	}
	else
	{
		
	}

}

//window.onload = draw;
window.onload = tshirt;
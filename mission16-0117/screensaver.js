window.onload = function move()
{
	setInterval("draw()", 500);
}

function draw()
{
	var canvas = document.getElementById("screensaver");
	if(canvas.getContext)
	{
		var context = canvas.getContext("2d");
		context.save();
		context.clearRect(0,0,1300, 550);	
		var w = 50;	
		//var w = Math.floor(Math.random()*40);
		var x = Math.floor(Math.random() * canvas.width);
		var y = Math.floor(Math.random() * canvas.height);
		context.fillStyle = "lightblue";
		context.fillRect(x, y, w, w);
	}
}			
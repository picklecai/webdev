window.onload = function move()
{
	while(true)
	{
		setTimeout("draw()", 500);
	}
}

function draw()
{
	var canvas = document.getElementById("screensaver");
	if(canvas.getContext)
	{
		var context = canvas.getContext("2d");
		var w = Math.floor(Math.random()*40);
		var x = Math.floor(Math.random() * canvas.width);
		var y = Math.floor(Math.random() * canvas.height);
		context.fillStyle = "lightblue";
		context.fillRect(x, y, w, w);
	}
}			
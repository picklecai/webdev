window.onload = function move()
{
	setInterval("draw()", 500);
}

function draw()
{
	var canvas = document.getElementById("screensaver");
	width = 1300;
	height = 550;
	if(canvas.getContext)
	{
		var context = canvas.getContext("2d");
		context.save();
		context.clearRect(0,0,width, height);	
		var w = 50;	
		//var w = Math.floor(Math.random()*40);
		var x = Math.floor(Math.random() * canvas.width);
		if (x<w) 
			{
				x=w;
			}
		else if((width-x)<w) 
			{
				x=width-w;
			}
		var y = Math.floor(Math.random() * canvas.height);
		if (y<w) 
			{
				y=w;
			}
		else if((height-y)<w) 
			{
				y=height-w;
			}		
		context.fillStyle = "lightblue";
		context.fillRect(x, y, w, w);
	}
}			
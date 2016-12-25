function showPic(whichpic)
{
	//替换图片
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src", source);

	//替换标题
	var text = whichpic.getAttribute("title");	
	var description = document.getElementById("description");
	description.firstChild.nodeValue = text;  
}

window.onload = function()
{
	if (!document.getElementsByTagName) return false;
	var links = document.getElementsByTagName("a");
	for(var i=0; i<links.length; i++)
	{
		if(links[i].getAttribute("class")=="showpic")
		{
			links[i].onclick = function()
			{
				showPic(this);
				return false;
			}
		}
	}	
}

function popUp(winURL)
{
	window.open(winURL, "I'm a new window", "width=320, height=480");
}

window.onload = function()
{
	if (!document.getElementsByTagName) return false;
	var links = document.getElementsByTagName("a");
	for(var i=0; i<links.length; i++)
	{
		if(links[i].getAttribute("class")=="popup")
		{
			links[i].onclick = function()
			{
				popUp(this.getAttribute("href"));
				return false;
			}
		}
	}	
}

//html中用了一个不存在的url地址（即example），现在看不出自己设置的title有没有作用了。换成一个不存在的html文件也一样。

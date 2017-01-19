function getNewContent()
{
	var request = getHTTPObject();
	if (request)
	{
		request.open("GET", "example.txt", true);
		request.onreadystatechange = function()
		{
			if (request.readyState == 4)
			{
				var para = document.createElement("p");
				var txt = document.createTextNode(request.responseText);
				para.appendChild(txt);
				document.getElementById('new').appendChild(para);
			}
		};
		request.send(null);
	}
	else
	{
		alert('Sorry, your browser doesn\'t support XMLHttpRequest');
	}
	alert("Function Done"); //加了之后，chrome可以跳出这句提示。firefox也是跳出这句提示，之后才页面显示结果。
}
addLoadEvent(getNewContent);

//chrome：浏览器限制ajax请求使用的协议。Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https, chrome-extension-resource.
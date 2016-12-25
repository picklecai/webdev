function showPic(whichpic)
{
	//替换图片
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src", source);

	//替换标题
	//var para = document.createElement("p");
	//para.appendChild(text);
	var text = whichpic.getAttribute("title");	
	var description = document.getElementById("description");
	description.firstChild.nodeValue = text;  // 如果html文件里的p标签没有写内容，这里就不执行？！

/*
	function countBodyChildren()
	{
		var body_element = document.getElementsByTagName("body")[0];
		//alert(body_element.childNodes.length);
		alert(body_element.nodeType);
		//alert(description.childNodes[0].nodeValue);
	}

	window.onload = countBodyChildren();  //书上这里不写括号，即不写参数。在这个浏览器下不执行。只有加了括号才执行这个函数。
*/
}
function showPic(whichpic)
{
	var source = whichpic.getAttribute("href");
	var text = whichpic.getAttribute("title");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src", source);
	//var para = document.createElement("p");
	//para.appendChild(text);

	function countBodyChildren()
	{
		var body_element = document.getElementsByTagName("body")[0];
		alert(body_element.childNodes.length);
	}

	window.onload = countBodyChildren();  //书上这里不写括号，即不写参数。在这个浏览器下不执行。只有加了括号才执行这个函数。
}
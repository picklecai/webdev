//定义对象和数组
var book_list = new Array();
function Book(name, author, score)
{
	this.Name = name;
	this.Author = author;
	this.Score = score;
}

/*
//No.1
//定义均值计算函数
function average_score(list_num)
{
	var sum_score = 0;
	//var list_num =3;
	for(var i=0; i<list_num; i++)  //这里是分号，不是逗号
	{
		book_list[i] = new Book(prompt("name"), prompt("author"), prompt("score"));
		sum_score += parseFloat(book_list[i].Score); //不转为float就会变成字符串连接
	}
	alert(sum_score/list_num);
	//console.log("%d", book_list[0].Score); //这个没有成功
}
//调用均值计算函数
var avg_score = average_score(3);	
*/

//No.2
var sum_score = 0;
var list_num = 3;
window.onload = function () //一定要包在这个函数里，才会在窗口打开时执行
{
	var table = document.getElementById("book_info");
	for (var i=0; i<list_num; i++)	
	{	
		book_list[i] = new Book(prompt("name"), prompt("author"), prompt("score"));
		sum_score += parseFloat(book_list[i].Score); //不转为float就会变成字符串连接	

		var txt1 = document.createTextNode(i);
		var txt2 = document.createTextNode(book_list[i].Name);
		var txt3 = document.createTextNode(book_list[i].Author);	
		var txt4 = document.createTextNode(book_list[i].Score);

		var tr = document.createElement("tr");
		var td1 = document.createElement("td");
		var td2 = document.createElement("td");
		var td3 = document.createElement("td");
		var td4 = document.createElement("td");
		var para1 = document.createElement("p");
		var para2 = document.createElement("p");
		var para3 = document.createElement("p");
		var para4 = document.createElement("p");
		table.appendChild(tr).appendChild(td1).appendChild(para1);
		table.appendChild(tr).appendChild(td2).appendChild(para2);
		table.appendChild(tr).appendChild(td3).appendChild(para3);
		table.appendChild(tr).appendChild(td4).appendChild(para4);

		para1.appendChild(txt1);
		para2.appendChild(txt2);
		para3.appendChild(txt3);
		para4.appendChild(txt4);
	}
	alert(sum_score/list_num);	
}
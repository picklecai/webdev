//No.1

//定义对象和数组
var book_list = new Array();
function Book(name, author, score)
{
	this.Name = name;
	this.Author = author;
	this.Score = score;
}

//定义均值计算函数
function average_score(list_num)
{
	var sum_score = 0;
	for(var i=0; i<list_num; i++)  //这里是分号，不是逗号
	{
		book_list[i] = new Book(prompt("name"), prompt("author"), prompt("score"));
		sum_score += parseFloat(book_list[i].Score);
	}

	alert(sum_score/list_num);
	//console.log("%d", book_list[0].Score);
}

//调用均值计算函数
average_score(3);

//No.2

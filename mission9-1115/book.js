//No.1

function favbook(list_length)
{
	var Book = Object();
	for (i=0, i<list_length, i++)
	{
		var book = new Book;
		book = {name: prompt("请输入书名："), author: prompt("请输入该书的作者："), score: prompt("请输入该书的豆瓣评分：")};
	}
}

favbook(2);
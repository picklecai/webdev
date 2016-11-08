//No.1
var wel = "你好， 世界！";
alert(wel);

//No.2
var name = prompt("请输入你的姓名：");
var message ="早上好！";
message += name;
alert(message);

//No.3
if(confirm("你确定要关闭当前页面吗？"))
{
	window.opener = null;
	window.close();
}
else
{

}

//No.4

var birth = prompt("请输入你的出生年份：");
var my_year = new Date();
while(isNaN(birth) || birth < 1897 || birth > my_year.getFullYear()) //根据之前报道，把活得最长寿的人确定为1897。
{
	var birth = prompt("输入错误！请重新输入你的出生年份：");
}
var age = my_year.getFullYear() - birth;
info_age = "你的年龄是：" + age;
alert(info_age);

//No.5
// 对象
var member1 = {name: prompt("Name:"), birth: prompt("Birth:"), tall: prompt("Tall:")};
alert(member1.name + ", " + member1.birth + ", " + member1.tall);
//数组
var member2 = Array();
member2.name = prompt("Name:");
member2.birth = prompt("Birth:");
member2.tall = prompt("Tall:");
alert(member2.name + ", " + member2.birth + ", " + member2.tall);
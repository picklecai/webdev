//No.1
var wel = "你好， 世界！";
alert(wel);

//No.2
var name = prompt();
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
var question = "你是哪一年出生的？" 
var birth = prompt();
question += birth;
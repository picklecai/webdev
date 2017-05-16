// test1:显示输入的参数
/*console.log(process.argv);*/

// test2:包在函数体内，则不显示。
/*function hello()
{
	console.log("hello");
}*/

// test3:来自http://wiki.jikexueyuan.com/project/nodejs/synopsis.html
// 在本地8124端口上架设了一个服务器。在http://127.0.0.1:8124/上显示'Hello World
/*var http = require('http');

http.createServer(function (request, response){
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Hello World\n');
}).listen(8124);

console.log('Server running at http://127.0.0.1:8124');*/

//test4:包在函数体内，需要调用函数，才能显示结果。
function hello()
{
	console.log("hello");
}

hello();
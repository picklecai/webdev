function Cat(name, color)
{
	this.name = name;
	this.color = color;
	this.type = "猫科动物";
	this.eat = function()
	{
		alert("吃老鼠");
	}
}

var cat1 = new Cat("大毛","黄色");
var cat2 = new Cat("二毛","黑色");

alert(cat1.name);
alert(cat1.color);
// 成功运行

alert(cat1.constructor == Cat);
alert(cat2.constructor == Cat);
// 成功运行

alert(cat1 instanceof Cat);
alert(cat2 instanceof Cat);
// 成功运行

alert(cat1.type);
cat1.eat();
// 成功运行

function Cat_improve(name,color)
{
	this.name = name;
	this.color = color;
}
Cat_improve.prototype.type = "猫科动物";
Cat_improve.prototype.eat = function()
{
	alert("吃老鼠");
}

var cat3 = new Cat_improve("大毛","黄色");
var cat4 = new Cat_improve("二毛","黑色");
alert(cat3.type);
cat3.eat();
// 成功运行

alert( cat1.eat == cat2.eat); //结果false
alert( cat3.eat == cat4.eat); //结果true
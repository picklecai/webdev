## html 中文显示  
要在head中添加`<meta charset="">`的代码。  
charset选择utf8.

## 语义化  
> 语义化的含义就是用正确的标签做正确的事情，html语义化就是让页面的内容结构化，便于对浏览器、搜索引擎解析；在没有样式CCS情况下也以一种文档格式显示，并且是容易阅读的。

——[HTML语义化 | 前端工程师手册](https://leohxj.gitbooks.io/front-end-database/content/html-and-css-basic/semantic-html.html)



——[Web语义化 - Samaritans - 博客园](http://www.cnblogs.com/dolphinX/p/3311588.html)

根据语义来区别使用标签。例如上面的网址中提到的表格：如果给表格标题行加上特殊的标签`<ttitle>`，就是用标签来区分了表格标题和内容。如果不是语义化的表达方式，其实本质上来说，表格标题和内容并没有什么不同。

具体到一个页面来说：`<head>`、`<body>`这一类，就是指明其中的内容意义。在html5中还发现了对页眉、页脚的定义：`<header>`、`<footer>`，我认为这也属于语义化。虽然原本我可以在页面中人为划出三个区块，上下分别为页眉页脚，中间为正文。但有了这两个标签后，意义更明晰了。
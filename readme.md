/**
 * 输入 node app.js ，即可启动node项目
 * 浏览器输入一下路径就可以访问：
 * http://localhost:3888/test002/
 * http://localhost:3888/test002/routerObj
 * 
 * 
 */

app.use(path,callback) 其中callback既可以是router对象又可以是函数
app.get(paht,callback) 中的callback只能是函数
const express=require('express')
const app=express()
const port=3888


app.get('/test001',(req,res)=>res.send('Hello World'))

const indexRouter=require('./routes/index')

app.use('/test002',indexRouter)


app.get('/test003',indexRouter)


app.listen(port,()=>{
    console.log(`开始喽`)
})

/**
 * 输入 node app.js ，即可启动node项目
 * 浏览器输入一下路径就可以访问：
 * http://localhost:3888/test002/
 * http://localhost:3888/test002/routerObj
 * 
 * 
 */
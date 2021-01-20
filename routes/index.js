/****
 * 服务端路由配置
 */
const express=require('express')
const router=express.Router()
router.get('/routerObj',(req,res,next)=>{
    //res.send('来自路由对象的信息')
    res.json({res:'来自路由对象的信息'})
})
module.exports=router
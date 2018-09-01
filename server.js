const Koa =require('koa');
const app = new Koa();
const log  =require("./koaLog");
const Router = require("koa-router");
// function delay(word){
// 	return new Promise((resolve,reject)=>{
// 		setTimeout(()=>{
// 			resolve();
// 		},3000)
// 	})
// }
// app.use(log);
// app.use(async(ctx,next)=>{
// 	ctx.body='<div>1</div>';
	
// 	await next();
// 	ctx.body+='<div>2</div>';
// })
// app.use(async(ctx,next)=>{
// 	ctx.body+='<div>3</div>';
// 	await delay()
// 	await next();
// 	ctx.body+='<div>4</div>';
// })
// app.use(async(ctx,next)=>{
// 	ctx.body+='<div>5</div>';
// 	await next();
// 	ctx.body+='<div>6</div>';
// })

//router
const router = new Router();
router.get("/",(ctx,next)=>{
	ctx.body='1'
})
router.get("/22",(ctx,next)=>{
	ctx.body='22'
})
router.get("/33",(ctx,next)=>{
	ctx.body='33'
})
app
	.use(router.routes())
	.use(router.allowedMethods())
app.listen(3000)
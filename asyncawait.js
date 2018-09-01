function delay(word){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(word)
		},2000)
	})
}

// delay("maozipeng1").then((call)=>{
// 	console.log(call);
// 	return delay("maozipeng2");
// }).then((call)=>{
// 	console.log(call)
// })

async function aa(){
	const aaa=await delay("maozipeng1");
	console.log(aaa);
	const bbb=await delay("maozipeng2");
	console.log(bbb)
	const ccc=await delay("maozipeng3");
	console.log(ccc)
}
aa();
var check = (a,b) => {
return new Promise((resolve,reject) =>{
	setTimeout(() => {
		if((typeof a === 'number') && (typeof b === 'number')){
			//console.log("promise : " ,a+b)
			resolve(a+b);
		}
		else
			reject("not of same type ");
	},1500
);
}
	);
}

check(4,5).then((message) => {
	console.log("success:" , message);
	return check(3,message);
	console.log(typeof(message))
}	).then((res) =>{
	console.log("res",res);
}).catch((err) => {
	console.log("some error occured");
})



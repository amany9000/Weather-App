var users = function (id, func){
	
	var user = {
		id : id,
		name : "Chatak" 
	};
	var z =0;
	for(i=0;i<10000;i++){
		for(j=0;j<10000;j++){
			for(k=0;k<1000;k++){
				z++;
			}
		}
	}
	console.log(z)
	func(user);
};

users(23,function(userd){
	console.log(userd)
});
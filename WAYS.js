var WAYS  = {
	
	/* Loop object/array, callback key and value in function */
	loop : function(obj,func){
		for(var val in obj){			
			func(val,obj[val])
		}
	},
	
	/* Save anything in localStorage with key */
	save : function(obj,key){
		localStorage[key] = JSON.parse(obj);
	},
	
	load : function(key){
		return JSON.parse(localStorage[key])
	},
	
	clear : function(key){
		delete localStorage[key];
	}
	
}


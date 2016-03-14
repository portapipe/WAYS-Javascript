var WAYS  = {
	
	/* Loop object/array, callback key and value in function */
	loop : function(obj,func){
		for(var val in obj){			
			func(val,obj[val])
		}
	},
	
	/* Save anything in localStorage with key */
	save : function(key,obj){
		localStorage.setItem(""+key,JSON.stringify(obj));
	},
	
	load : function(key){
		if(localStorage[key]===undefined) return undefined;
		return JSON.parse(localStorage.getItem(key));
	},
	
	clear : function(key){
		delete localStorage.removeItem(key);
	}
	
}

var WAYS  = {

/*
BASICS
*/	
	/* Loop object/array, callback key and value in function */
	loop : function(obj,func){
		for(var val in obj){			
			func(val,obj[val])
		}
	},
/*
END BASICS
*/
/*
LOCALSTORAGE
*/
	/* Save anything in localStorage with key. Return the passed object */
	save : function(key,obj){
		localStorage.setItem(""+key,JSON.stringify(obj));
		return obj;
	},
	load : function(key){
		if(localStorage[key]===undefined) return undefined;
		return JSON.parse(localStorage.getItem(key));
	},
	clear : function(key){
		delete localStorage.removeItem(key);
	},
	remove: function(key){ // ALIAS of clear
		this.clear(key);
	},
/*
END LOCALSTORAGE
*/
/*
DATE
*/
	timeToDate: function(timestamp){
		var date = new Date(timestamp);
		var completeDate = {
			"timestamp" : timestamp,
			"milliseconds" : date.getMilliseconds(),
			"seconds" : date.getSeconds(),
			"minutes" : date.getMinutes(),
			"day" : date.getDate(),
			"dayString" : this.dayString[date.getDay()],
			"dayOfWeek" : date.getDay(),
			"month" : date.getMonth()+1,
			"monthString" : this.monthString[date.getMonth()+1],
			"year" : date.getFullYear()
		}
		return completeDate;
	},
	dateToTime: function(date){
		return this.timeToDate(Date.parse(date));
	},
	date: function(){
		var date = new Date();
		var completeDate = {
			"timestamp" : Date.now(),
			"milliseconds" : date.getMilliseconds(),
			"seconds" : date.getSeconds(),
			"minutes" : date.getMinutes(),
			"day" : date.getDate(),
			"dayString" : this.dayString[date.getDay()],
			"dayOfWeek" : date.getDay(),
			"month" : date.getMonth()+1,
			"monthString" : this.monthString[date.getMonth()+1],
			"year" : date.getFullYear()
		}
		return completeDate;
	},
	
	dayString : { 1:"Monday", 2:"Tuesday", 3:"Wendsday", 4:"Thursday", 5:"Friday", 6:"Saturday", 7:"Sunday" },
	setDayString: function(newValues){
		this.dayString = newValues;
	},
	
	monthString : { 1:"January", 2:"February", 3:"March", 4:"April", 5:"May", 6:"June", 7:"July", 8:"August", 9:"September", 10:"October", 11:"November", 12:"December" },
	setMonthString: function(newValues){
		this.monthString = newValues;
	},
	
/*
END DATE
*/
/*
SORTING
*/


/*
END SORTING
*/
	
}

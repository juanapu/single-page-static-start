 const util = {
 	validate : function(value,type){
		var value =value.toString().trim();
		//check whether it is empty
		if('require' === type){
			return !!value; // return true if value exist
		};
		//phone varification
		if('phone' === type){
			return /^\d{10}$/.test(value);
		};
		//email varification
		if('email' === type){
			return /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3})){1,3}$/.test(value);
		};
		//password varification
		if('password' === type){
			return  /^[A-Za-z0-9~!@#$%^&*()_+<>?:"{},.\/;']{6,14}$/.test(value);
		};
		//username varification
		if('username' === type){
			return /^[a-zA-Z0-9_-]{4,16}$/.test(value); 
		};
	},
	 getImgUrl(pet,type) {
	 	console.log("--type--"+type);
	 	if(type!=='absol'){
		    var images = require.context('../../../assets/', false, /\.png$/);
			    return images('./' + pet + ".png")
	 	}else{
	 		var images = require.context(pet);
			return images();
		}

	  },
   setCookie: function(cname, cvalue, exdays){
	   	var d = new Date();
	    d.setTime(d.getTime() + (exdays*24*60*60*1000));
	    var expires = "expires="+ d.toUTCString();
	    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	},
	getCookie: function(cname){
		    var name = cname + "=";
		    var decodedCookie = decodeURIComponent(document.cookie);
		    var ca = decodedCookie.split(';');
		    for(var i = 0; i <ca.length; i++) {
		        var c = ca[i];
		        while (c.charAt(0) == ' ') {
		            c = c.substring(1);
		        }
		        if (c.indexOf(name) == 0) {
		            return c.substring(name.length, c.length);
		        }
		    }
		    return "";
	}

};



module.exports = util;


if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
    	return fn.apply(obj);
    },

    alterObjects : function(constructor, greeting) {
    	constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
    	var r = [];
      	for(p in obj) {
        	if(obj.hasOwnProperty(p))
          	r[r.length] = p + ': ' + obj[p];
      	}
      return r;
    }
  };
});

if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
    	return new function () {
    		this.cancel = function () {
    			clearInterval(intervalId);
    		};

    		console.log(start);
    		var intervalId = setInterval(function () {
    			start++;
    			console.log(start);
    			if(start >= end)
    				clearInterval(intervalId);
    		},100);
    	};
    }
  };
});
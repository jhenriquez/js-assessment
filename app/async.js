if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
    	var cb = function () { };
    	setTimeout(function () {
    		cb(value);
    	}, 5);

    	return {
    		then: function (callback) {
    			cb = callback;
    		}
    	};
    },

    manipulateRemoteData : function(url) {
    	var cb = function() { };

    	$.getJSON(url).done(function (data) {
    		cb(_.map(data.people, function (person) {
    			return person.name;
    		}).sort());
    	});
    	return {
    		then: function (callback) {
    			cb = callback;
    		}
    	};
    }
  };
});

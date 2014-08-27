if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
    	var filesOnly = [];
    	
    	function processDir (dir) {
    		if (!dir) return;
    		dir.files.forEach(function(value) {
	    		if (value.files)
					return processDir(value, true);

	    		if (filesOnly.indexOf(value) <= -1)
	    			filesOnly[filesOnly.length] = value;
    		});
    	};
    	
    	function locateDir (dir) {
    		if(dir.dir === dirName)
    			return dir;
    		for (var i = 0; i < dir.files.length; i++)
    			if (dir.files[i].files) return locateDir (dir.files[i]);
    	};

    	processDir(dirName ? locateDir(data) : data);

    	return filesOnly;
    },

    permute: function(arr) {

    }
  };
});

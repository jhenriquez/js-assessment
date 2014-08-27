if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
        return (/\d/).test(str);
    },

    containsRepeatingLetter : function(str) {
        return (/([A-Za-z])\1/).test(str);
    },

    endsWithVowel : function(str) {
        return (/a$|e$|i$|o$|u$/i).test(str);
    },

    captureThreeNumbers : function(str) {
        var match = str.match(/\d{3}/);
        if(match) return match[0];
        return false;
    },

    matchesPattern : function(str) {
        return (/^(\d{3})-(\d{3})-(\d{4})$/).test(str);
    },
    isUSD : function(str) {
        return (/^\$\d{1,3}(,\d{3})*(\.\d{2})*$/).test(str);
    }
  };
});

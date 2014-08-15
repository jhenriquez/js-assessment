if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(a, item) {
        for(var i = 0; i < a.length; i++)
            if(a[i] === item)
                return i;
        return -1;
    },

    sum : function(a) {
        var acc = 0;
        for(var i = 0; i < a.length; i++)
            acc += a[i];
        return acc;
    },

    remove : function(a, item) {
        var cp = [];
        for(var i = 0; i < a.length; i++) {
            if(a[i] !== item)
                cp.push(a[i]);
        }
        return cp;
    },

    removeWithoutCopy : function(a, item) {
        for(var i = a.length-1; i >= 0; i--) {
            if (a[i] === item)
                a.splice(i,1);
        }
        return a;
    },

    append : function(arr, item) {
        arr[arr.length] = item;
        return arr;
    },

    truncate : function(a) {
        var cp = [];
        for(var i = 0; i < a.length-1; i++)
            cp.push(a[i]);
        return cp;
    },

    prepend : function(a, item) {
        var cp = [item];
        for(var i = 0; i < a.length; i++)
            cp.push(a);
        return cp;
    },

    curtail : function(a) {
        var cp = [];
        for(var i = 1; i < a.length; i++)
            cp.push(a[i]);
        return cp;
    },

    concat : function(a, b) {
        for(var i = 0; i < b.length; i++)
            a.push(b[i]);
        return a;
    },  

    insert : function(a, item, index) {
        var cp = [];
        for(var i = 0; i < a.length; i++) {
            if(cp.length === index)
        cp.push(item);
        cp.push(a[i]);
      }
      return cp;
    },

    count : function(a, item) {
        var count = 0;
        for(var i = 0; i < a.length; i++) {
            if(a[i] === item) ++count;
        }
        return count;
    },

    duplicates : function(arr) {
        var dups = [];
        for (var i = 0; i < arr.length; i++) {
            if(this.count(arr,arr[i]) > 1 && this.count(dups,arr[i]) === 0)
                dups[dups.length] = arr[i];
        }
        return dups;
    },

    square : function(a) {
        var sqrt = [];
        for(var i = 0; i < a.length; i++) {
            sqrt.push(a[i]*a[i]);
        }
        return sqrt;
    },

    findAllOccurrences : function(a, target) {
        var occ = [];
        for(var i = 0; i < a.length; i++) {
            if(a[i] === target)
                occ.push(i);
        }
        return occ;
    }
  };
});

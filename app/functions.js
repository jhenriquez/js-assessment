if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn(arr[0],arr[1],arr[2]);
    },

    speak : function(fn, obj) {
        return fn.apply(obj);
    },

    functionFunction : function(str) {
        return function (str2) {
            return str + ', ' + str2;
        }
    },

    makeClosures : function(arr, fn) {
      var rs = [];
      arr.forEach(function (value) {
        rs[rs.length] = function () { return fn(value); };
      });
      return rs;
    },

    partial : function(fn, str1, str2) {
        return function (str) { return fn (str1, str2, str) };
    },

    useArguments : function() {
        var acc = 0;
        for(var i = 0; i < arguments.length; i++)
            acc += arguments[i];
        return acc;
    },

    callIt : function(fn) {
        var args = [];
        for(var i = 1; i < arguments.length; i++)
            args[args.length] = arguments[i];
        return fn.apply(null, args);
    },

    partialUsingArguments : function(fn) {
        var preSet = [];
        for(var i = 1; i < arguments.length; i++)
            preSet[preSet.length] = arguments[i];
        return function () {
            var args = [];
            for(var i = 0; i < arguments.length; i++)
                args[args.length] = arguments[i];
            return fn.apply(this, preSet.concat(args));
        };
    },

    curryIt : function(fn) {
        var acc = Array.prototype.slice(arguments,1,arguments.length);

        function tryApply (fn, parameters) {
            if (parameters.length >= fn.length)
                return fn.apply(null, parameters);
            return getAccumulator(fn, parameters);
        };
        
        function getAccumulator (fn, provided) {
           return function (arg) {
                var all = provided.concat(Array.prototype.slice.apply(arguments));
                return tryApply(fn,all);
            }
        };

        return getAccumulator(fn, acc);
    }
  };
});

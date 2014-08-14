/*jshint expr:true*/
/*globals describe:true, it:true, expect:true, beforeEach:true */
if (typeof define !== 'function') { var define = require('amdefine')(module); }
if (typeof expect !== 'function') { var expect = require('expect.js'); }

define([
  'app/bestPractices'
], function(answers) {

  answers.globals = function () {
    window.myObject = false;
  };

  answers.functions = function (dontUnderstandThisParameter) {
    return 'a';
  };

  answers.parseInt = function (str) {
    return parseInt(str,10);
  };

  answers.identity = function (val1, val2) {
    return val1 === val2;
  };

  describe('best practices', function(){
    it('you should avoid global variables', function() {
      answers.globals();
      expect(window.myObject).not.to.be.ok;
    });

    it('you should declare functions safely', function() {
      var val = answers.functions(true);
      expect(val).to.eql('a');
    });

    it('you should use parseInt correctly', function() {
      expect(answers.parseInt('12')).to.eql(12);
      expect(answers.parseInt('12px')).to.eql(12);
      expect(answers.parseInt('0x12')).to.eql(0);
    });

    it('you should understand strict comparison', function() {
      expect(answers.identity(1, '1')).to.eql(false);
      expect(answers.identity(1, 1)).to.eql(true);
      expect(answers.identity(0, false)).to.eql(false);
    });

  });
});

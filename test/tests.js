"use strict";
var expect = require('chai').expect;
var util = require('util');
var lib = require('../index');

describe('partial', function() {
  it('works for 2 arguments', function() {
    var greet = function(greeting, name) {
      return util.format('%s says %s', name, greeting);
    };
    var hi = lib.partial(greet, 'Hi');
    var result = hi('Whitney');
    expect(result).to.eql('Whitney says Hi');
  });

  it('works for 3 arguments', function() {
    var greet = function(greeting, firstName, lastName) {
      return util.format('%s %s says %s',
        firstName, lastName, greeting);
    };
    var fullNameHi = lib.partial(greet, 'Hi');
    var result = fullNameHi('Whitney', 'Young');
    expect(result).to.eql('Whitney Young says Hi');
  });

  it('works for 3 arguments the other way', function() {
    var greet = function(greeting, firstName, lastName) {
      return util.format('%s %s says %s',
        firstName, lastName, greeting);
    };
    var hiWhitney = lib.partial(greet, 'Hi', 'Whitney');
    var result = hiWhitney('Nunn');
    expect(result).to.eql('Whitney Nunn says Hi');
  });
});




describe('partialRight', function() {
  it('works for 2 arguments', function() {
    var greet = function(greeting, name) {
      return util.format('%s says %s', name, greeting);
    };
    var greetLeslie = lib.partialRight(greet, 'Leslie');
    var result = greetLeslie('Hola');
    expect(result).to.eql('Leslie says Hola');
  });

  it('works for 2 arguments (again)', function() {
    var greet = function(name, greeting) {
      return util.format('%s says %s', name, greeting);
    };
    var hi = lib.partialRight(greet, 'Hi');
    var result = hi('Kali');
    expect(result).to.eql('Kali says Hi');
  });
});




describe('questions', function() {

  it('helps steve answer questions', function() {
    var statement = lib.steve('Steve', 'run', 1);
    expect(statement).to.eql('Steve likes to run every 1 days');
  });

  it('helps steve answer questions', function() {
    var whitGaveYouThisArray = ['Steve', 'run', 1];
    var statement = lib.steve.apply(undefined, whitGaveYouThisArray);
    expect(statement).to.eql('Steve likes to run every 1 days');
  });

});

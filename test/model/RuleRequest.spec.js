/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1 (v1)
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.bimdata);
  }
}(this, function(expect, bimdata) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new bimdata.RuleRequest();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('RuleRequest', function() {
    it('should create an instance of RuleRequest', function() {
      // uncomment below and update the code to test RuleRequest
      //var instane = new bimdata.RuleRequest();
      //expect(instance).to.be.a(bimdata.RuleRequest);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new bimdata.RuleRequest();
      //expect(instance).to.be();
    });

    it('should have the property condition (base name: "condition")', function() {
      // uncomment below and update the code to test the property condition
      //var instane = new bimdata.RuleRequest();
      //expect(instance).to.be();
    });

    it('should have the property ruleComponents (base name: "rule_components")', function() {
      // uncomment below and update the code to test the property ruleComponents
      //var instane = new bimdata.RuleRequest();
      //expect(instance).to.be();
    });

    it('should have the property on (base name: "on")', function() {
      // uncomment below and update the code to test the property on
      //var instane = new bimdata.RuleRequest();
      //expect(instance).to.be();
    });

  });

}));

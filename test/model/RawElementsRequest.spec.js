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
    instance = new bimdata.RawElementsRequest();
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

  describe('RawElementsRequest', function() {
    it('should create an instance of RawElementsRequest', function() {
      // uncomment below and update the code to test RawElementsRequest
      //var instance = new bimdata.RawElementsRequest();
      //expect(instance).to.be.a(bimdata.RawElementsRequest);
    });

    it('should have the property units (base name: "units")', function() {
      // uncomment below and update the code to test the property units
      //var instance = new bimdata.RawElementsRequest();
      //expect(instance).to.be();
    });

    it('should have the property definitions (base name: "definitions")', function() {
      // uncomment below and update the code to test the property definitions
      //var instance = new bimdata.RawElementsRequest();
      //expect(instance).to.be();
    });

    it('should have the property propertySets (base name: "property_sets")', function() {
      // uncomment below and update the code to test the property propertySets
      //var instance = new bimdata.RawElementsRequest();
      //expect(instance).to.be();
    });

    it('should have the property classifications (base name: "classifications")', function() {
      // uncomment below and update the code to test the property classifications
      //var instance = new bimdata.RawElementsRequest();
      //expect(instance).to.be();
    });

    it('should have the property layers (base name: "layers")', function() {
      // uncomment below and update the code to test the property layers
      //var instance = new bimdata.RawElementsRequest();
      //expect(instance).to.be();
    });

    it('should have the property systems (base name: "systems")', function() {
      // uncomment below and update the code to test the property systems
      //var instance = new bimdata.RawElementsRequest();
      //expect(instance).to.be();
    });

    it('should have the property materials (base name: "materials")', function() {
      // uncomment below and update the code to test the property materials
      //var instance = new bimdata.RawElementsRequest();
      //expect(instance).to.be();
    });

    it('should have the property elements (base name: "elements")', function() {
      // uncomment below and update the code to test the property elements
      //var instance = new bimdata.RawElementsRequest();
      //expect(instance).to.be();
    });

  });

}));

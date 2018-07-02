/**
 * BIMData API
 * BIMData API documentation
 *
 * OpenAPI spec version: v1
 * Contact: contact@bimdata.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.bimdata);
  }
}(this, function(expect, bimdata) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new bimdata.RawElements();
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

  describe('RawElements', function() {
    it('should create an instance of RawElements', function() {
      // uncomment below and update the code to test RawElements
      //var instance = new bimdata.RawElements();
      //expect(instance).to.be.a(bimdata.RawElements);
    });

    it('should have the property units (base name: "units")', function() {
      // uncomment below and update the code to test the property units
      //var instance = new bimdata.RawElements();
      //expect(instance).to.be();
    });

    it('should have the property definitions (base name: "definitions")', function() {
      // uncomment below and update the code to test the property definitions
      //var instance = new bimdata.RawElements();
      //expect(instance).to.be();
    });

    it('should have the property propertySets (base name: "property_sets")', function() {
      // uncomment below and update the code to test the property propertySets
      //var instance = new bimdata.RawElements();
      //expect(instance).to.be();
    });

    it('should have the property classifications (base name: "classifications")', function() {
      // uncomment below and update the code to test the property classifications
      //var instance = new bimdata.RawElements();
      //expect(instance).to.be();
    });

    it('should have the property elements (base name: "elements")', function() {
      // uncomment below and update the code to test the property elements
      //var instance = new bimdata.RawElements();
      //expect(instance).to.be();
    });

  });

}));

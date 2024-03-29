/**
 * BIMData API
 * BIMData API is a tool to interact with your models stored on BIMData’s servers.     Through the API, you can manage your projects, the clouds, upload your IFC files and manage them through endpoints.
 *
 * The version of the OpenAPI document: v1 (v1)
 * Contact: support@bimdata.io
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
    instance = new bimdata.RawUnit();
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

  describe('RawUnit', function() {
    it('should create an instance of RawUnit', function() {
      // uncomment below and update the code to test RawUnit
      //var instance = new bimdata.RawUnit();
      //expect(instance).to.be.a(bimdata.RawUnit);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new bimdata.RawUnit();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new bimdata.RawUnit();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new bimdata.RawUnit();
      //expect(instance).to.be();
    });

    it('should have the property unitType (base name: "unit_type")', function() {
      // uncomment below and update the code to test the property unitType
      //var instance = new bimdata.RawUnit();
      //expect(instance).to.be();
    });

    it('should have the property prefix (base name: "prefix")', function() {
      // uncomment below and update the code to test the property prefix
      //var instance = new bimdata.RawUnit();
      //expect(instance).to.be();
    });

    it('should have the property elements (base name: "elements")', function() {
      // uncomment below and update the code to test the property elements
      //var instance = new bimdata.RawUnit();
      //expect(instance).to.be();
    });

    it('should have the property conversionFactor (base name: "conversion_factor")', function() {
      // uncomment below and update the code to test the property conversionFactor
      //var instance = new bimdata.RawUnit();
      //expect(instance).to.be();
    });

    it('should have the property dimensions (base name: "dimensions")', function() {
      // uncomment below and update the code to test the property dimensions
      //var instance = new bimdata.RawUnit();
      //expect(instance).to.be();
    });

    it('should have the property conversionBaseunitIndex (base name: "conversion_baseunit_index")', function() {
      // uncomment below and update the code to test the property conversionBaseunitIndex
      //var instance = new bimdata.RawUnit();
      //expect(instance).to.be();
    });

    it('should have the property isDefault (base name: "is_default")', function() {
      // uncomment below and update the code to test the property isDefault
      //var instance = new bimdata.RawUnit();
      //expect(instance).to.be();
    });

  });

}));

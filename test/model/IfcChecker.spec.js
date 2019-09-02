/**
 * BIMData API
 * BIMData API is a tool to interact with your models stored on BIMData’s servers.     Through the API, you can manage your projects, the clouds, upload your IFC files and manage them through endpoints.
 *
 * The version of the OpenAPI document: v1
 * Contact: contact@bimdata.io
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
    factory(root.expect, root.BimDataApi);
  }
}(this, function(expect, BimDataApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new BimDataApi.IfcChecker();
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

  describe('IfcChecker', function() {
    it('should create an instance of IfcChecker', function() {
      // uncomment below and update the code to test IfcChecker
      //var instane = new BimDataApi.IfcChecker();
      //expect(instance).to.be.a(BimDataApi.IfcChecker);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new BimDataApi.IfcChecker();
      //expect(instance).to.be();
    });

    it('should have the property ifc (base name: "ifc")', function() {
      // uncomment below and update the code to test the property ifc
      //var instane = new BimDataApi.IfcChecker();
      //expect(instance).to.be();
    });

    it('should have the property creator (base name: "creator")', function() {
      // uncomment below and update the code to test the property creator
      //var instane = new BimDataApi.IfcChecker();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new BimDataApi.IfcChecker();
      //expect(instance).to.be();
    });

    it('should have the property checkplanId (base name: "checkplan_id")', function() {
      // uncomment below and update the code to test the property checkplanId
      //var instane = new BimDataApi.IfcChecker();
      //expect(instance).to.be();
    });

    it('should have the property results (base name: "results")', function() {
      // uncomment below and update the code to test the property results
      //var instane = new BimDataApi.IfcChecker();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instane = new BimDataApi.IfcChecker();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instane = new BimDataApi.IfcChecker();
      //expect(instance).to.be();
    });

    it('should have the property checkplan (base name: "checkplan")', function() {
      // uncomment below and update the code to test the property checkplan
      //var instane = new BimDataApi.IfcChecker();
      //expect(instance).to.be();
    });

  });

}));

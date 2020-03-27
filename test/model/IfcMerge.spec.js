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
    factory(root.expect, root.bimdata);
  }
}(this, function(expect, bimdata) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new bimdata.IfcMerge();
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

  describe('IfcMerge', function() {
    it('should create an instance of IfcMerge', function() {
      // uncomment below and update the code to test IfcMerge
      //var instane = new bimdata.IfcMerge();
      //expect(instance).to.be.a(bimdata.IfcMerge);
    });

    it('should have the property ifcIds (base name: "ifc_ids")', function() {
      // uncomment below and update the code to test the property ifcIds
      //var instane = new bimdata.IfcMerge();
      //expect(instance).to.be();
    });

    it('should have the property floatingPointReduction (base name: "floating_point_reduction")', function() {
      // uncomment below and update the code to test the property floatingPointReduction
      //var instane = new bimdata.IfcMerge();
      //expect(instance).to.be();
    });

    it('should have the property exportName (base name: "export_name")', function() {
      // uncomment below and update the code to test the property exportName
      //var instane = new bimdata.IfcMerge();
      //expect(instance).to.be();
    });

  });

}));

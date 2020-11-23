/**
 * BIMData API
 * BIMData API is a tool to interact with your models stored on BIMData’s servers.     Through the API, you can manage your projects, the clouds, upload your IFC files and manage them through endpoints.
 *
 * The version of the OpenAPI document: v1
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
    instance = new bimdata.Visibility();
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

  describe('Visibility', function() {
    it('should create an instance of Visibility', function() {
      // uncomment below and update the code to test Visibility
      //var instane = new bimdata.Visibility();
      //expect(instance).to.be.a(bimdata.Visibility);
    });

    it('should have the property defaultVisibility (base name: "default_visibility")', function() {
      // uncomment below and update the code to test the property defaultVisibility
      //var instane = new bimdata.Visibility();
      //expect(instance).to.be();
    });

    it('should have the property exceptions (base name: "exceptions")', function() {
      // uncomment below and update the code to test the property exceptions
      //var instane = new bimdata.Visibility();
      //expect(instance).to.be();
    });

    it('should have the property viewSetupHints (base name: "view_setup_hints")', function() {
      // uncomment below and update the code to test the property viewSetupHints
      //var instane = new bimdata.Visibility();
      //expect(instance).to.be();
    });

  });

}));

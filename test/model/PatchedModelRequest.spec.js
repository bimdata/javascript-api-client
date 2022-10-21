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
    instance = new bimdata.PatchedModelRequest();
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

  describe('PatchedModelRequest', function() {
    it('should create an instance of PatchedModelRequest', function() {
      // uncomment below and update the code to test PatchedModelRequest
      //var instance = new bimdata.PatchedModelRequest();
      //expect(instance).to.be.a(bimdata.PatchedModelRequest);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new bimdata.PatchedModelRequest();
      //expect(instance).to.be();
    });

    it('should have the property source (base name: "source")', function() {
      // uncomment below and update the code to test the property source
      //var instance = new bimdata.PatchedModelRequest();
      //expect(instance).to.be();
    });

    it('should have the property viewer360File (base name: "viewer_360_file")', function() {
      // uncomment below and update the code to test the property viewer360File
      //var instance = new bimdata.PatchedModelRequest();
      //expect(instance).to.be();
    });

    it('should have the property worldPosition (base name: "world_position")', function() {
      // uncomment below and update the code to test the property worldPosition
      //var instance = new bimdata.PatchedModelRequest();
      //expect(instance).to.be();
    });

    it('should have the property sizeRatio (base name: "size_ratio")', function() {
      // uncomment below and update the code to test the property sizeRatio
      //var instance = new bimdata.PatchedModelRequest();
      //expect(instance).to.be();
    });

    it('should have the property archived (base name: "archived")', function() {
      // uncomment below and update the code to test the property archived
      //var instance = new bimdata.PatchedModelRequest();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instance = new bimdata.PatchedModelRequest();
      //expect(instance).to.be();
    });

    it('should have the property northVector (base name: "north_vector")', function() {
      // uncomment below and update the code to test the property northVector
      //var instance = new bimdata.PatchedModelRequest();
      //expect(instance).to.be();
    });

    it('should have the property recommanded2dAngle (base name: "recommanded_2d_angle")', function() {
      // uncomment below and update the code to test the property recommanded2dAngle
      //var instance = new bimdata.PatchedModelRequest();
      //expect(instance).to.be();
    });

  });

}));

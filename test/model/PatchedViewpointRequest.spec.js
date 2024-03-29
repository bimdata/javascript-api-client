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
    instance = new bimdata.PatchedViewpointRequest();
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

  describe('PatchedViewpointRequest', function() {
    it('should create an instance of PatchedViewpointRequest', function() {
      // uncomment below and update the code to test PatchedViewpointRequest
      //var instance = new bimdata.PatchedViewpointRequest();
      //expect(instance).to.be.a(bimdata.PatchedViewpointRequest);
    });

    it('should have the property index (base name: "index")', function() {
      // uncomment below and update the code to test the property index
      //var instance = new bimdata.PatchedViewpointRequest();
      //expect(instance).to.be();
    });

    it('should have the property guid (base name: "guid")', function() {
      // uncomment below and update the code to test the property guid
      //var instance = new bimdata.PatchedViewpointRequest();
      //expect(instance).to.be();
    });

    it('should have the property originatingSystem (base name: "originating_system")', function() {
      // uncomment below and update the code to test the property originatingSystem
      //var instance = new bimdata.PatchedViewpointRequest();
      //expect(instance).to.be();
    });

    it('should have the property authoringToolId (base name: "authoring_tool_id")', function() {
      // uncomment below and update the code to test the property authoringToolId
      //var instance = new bimdata.PatchedViewpointRequest();
      //expect(instance).to.be();
    });

    it('should have the property orthogonalCamera (base name: "orthogonal_camera")', function() {
      // uncomment below and update the code to test the property orthogonalCamera
      //var instance = new bimdata.PatchedViewpointRequest();
      //expect(instance).to.be();
    });

    it('should have the property perspectiveCamera (base name: "perspective_camera")', function() {
      // uncomment below and update the code to test the property perspectiveCamera
      //var instance = new bimdata.PatchedViewpointRequest();
      //expect(instance).to.be();
    });

    it('should have the property lines (base name: "lines")', function() {
      // uncomment below and update the code to test the property lines
      //var instance = new bimdata.PatchedViewpointRequest();
      //expect(instance).to.be();
    });

    it('should have the property clippingPlanes (base name: "clipping_planes")', function() {
      // uncomment below and update the code to test the property clippingPlanes
      //var instance = new bimdata.PatchedViewpointRequest();
      //expect(instance).to.be();
    });

    it('should have the property snapshot (base name: "snapshot")', function() {
      // uncomment below and update the code to test the property snapshot
      //var instance = new bimdata.PatchedViewpointRequest();
      //expect(instance).to.be();
    });

    it('should have the property components (base name: "components")', function() {
      // uncomment below and update the code to test the property components
      //var instance = new bimdata.PatchedViewpointRequest();
      //expect(instance).to.be();
    });

    it('should have the property pins (base name: "pins")', function() {
      // uncomment below and update the code to test the property pins
      //var instance = new bimdata.PatchedViewpointRequest();
      //expect(instance).to.be();
    });

    it('should have the property tempId (base name: "temp_id")', function() {
      // uncomment below and update the code to test the property tempId
      //var instance = new bimdata.PatchedViewpointRequest();
      //expect(instance).to.be();
    });

    it('should have the property models (base name: "models")', function() {
      // uncomment below and update the code to test the property models
      //var instance = new bimdata.PatchedViewpointRequest();
      //expect(instance).to.be();
    });

  });

}));

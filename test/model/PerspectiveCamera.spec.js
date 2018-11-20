/**
 * BIMData API
 * BIMData API documentation
 *
 * OpenAPI spec version: v1
 * Contact: contact@bimdata.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 3.3.3
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
    instance = new bimdata.PerspectiveCamera();
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

  describe('PerspectiveCamera', function() {
    it('should create an instance of PerspectiveCamera', function() {
      // uncomment below and update the code to test PerspectiveCamera
      //var instance = new bimdata.PerspectiveCamera();
      //expect(instance).to.be.a(bimdata.PerspectiveCamera);
    });

    it('should have the property fieldOfView (base name: "field_of_view")', function() {
      // uncomment below and update the code to test the property fieldOfView
      //var instance = new bimdata.PerspectiveCamera();
      //expect(instance).to.be();
    });

    it('should have the property cameraDirection (base name: "camera_direction")', function() {
      // uncomment below and update the code to test the property cameraDirection
      //var instance = new bimdata.PerspectiveCamera();
      //expect(instance).to.be();
    });

    it('should have the property cameraUpVector (base name: "camera_up_vector")', function() {
      // uncomment below and update the code to test the property cameraUpVector
      //var instance = new bimdata.PerspectiveCamera();
      //expect(instance).to.be();
    });

    it('should have the property cameraViewPoint (base name: "camera_view_point")', function() {
      // uncomment below and update the code to test the property cameraViewPoint
      //var instance = new bimdata.PerspectiveCamera();
      //expect(instance).to.be();
    });

  });

}));

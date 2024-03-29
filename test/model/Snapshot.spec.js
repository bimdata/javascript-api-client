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
    instance = new bimdata.Snapshot();
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

  describe('Snapshot', function() {
    it('should create an instance of Snapshot', function() {
      // uncomment below and update the code to test Snapshot
      //var instance = new bimdata.Snapshot();
      //expect(instance).to.be.a(bimdata.Snapshot);
    });

    it('should have the property snapshotType (base name: "snapshot_type")', function() {
      // uncomment below and update the code to test the property snapshotType
      //var instance = new bimdata.Snapshot();
      //expect(instance).to.be();
    });

    it('should have the property snapshotData (base name: "snapshot_data")', function() {
      // uncomment below and update the code to test the property snapshotData
      //var instance = new bimdata.Snapshot();
      //expect(instance).to.be();
    });

  });

}));

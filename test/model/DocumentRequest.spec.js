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
    instance = new bimdata.DocumentRequest();
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

  describe('DocumentRequest', function() {
    it('should create an instance of DocumentRequest', function() {
      // uncomment below and update the code to test DocumentRequest
      //var instance = new bimdata.DocumentRequest();
      //expect(instance).to.be.a(bimdata.DocumentRequest);
    });

    it('should have the property parentId (base name: "parent_id")', function() {
      // uncomment below and update the code to test the property parentId
      //var instance = new bimdata.DocumentRequest();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new bimdata.DocumentRequest();
      //expect(instance).to.be();
    });

    it('should have the property fileName (base name: "file_name")', function() {
      // uncomment below and update the code to test the property fileName
      //var instance = new bimdata.DocumentRequest();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new bimdata.DocumentRequest();
      //expect(instance).to.be();
    });

    it('should have the property file (base name: "file")', function() {
      // uncomment below and update the code to test the property file
      //var instance = new bimdata.DocumentRequest();
      //expect(instance).to.be();
    });

    it('should have the property size (base name: "size")', function() {
      // uncomment below and update the code to test the property size
      //var instance = new bimdata.DocumentRequest();
      //expect(instance).to.be();
    });

    it('should have the property modelSource (base name: "model_source")', function() {
      // uncomment below and update the code to test the property modelSource
      //var instance = new bimdata.DocumentRequest();
      //expect(instance).to.be();
    });

    it('should have the property ifcSource (base name: "ifc_source")', function() {
      // uncomment below and update the code to test the property ifcSource
      //var instance = new bimdata.DocumentRequest();
      //expect(instance).to.be();
    });

    it('should have the property successorOf (base name: "successor_of")', function() {
      // uncomment below and update the code to test the property successorOf
      //var instance = new bimdata.DocumentRequest();
      //expect(instance).to.be();
    });

  });

}));

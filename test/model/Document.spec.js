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
    instance = new bimdata.Document();
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

  describe('Document', function() {
    it('should create an instance of Document', function() {
      // uncomment below and update the code to test Document
      //var instance = new bimdata.Document();
      //expect(instance).to.be.a(bimdata.Document);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new bimdata.Document();
      //expect(instance).to.be();
    });

    it('should have the property parent (base name: "parent")', function() {
      // uncomment below and update the code to test the property parent
      //var instance = new bimdata.Document();
      //expect(instance).to.be();
    });

    it('should have the property parentId (base name: "parent_id")', function() {
      // uncomment below and update the code to test the property parentId
      //var instance = new bimdata.Document();
      //expect(instance).to.be();
    });

    it('should have the property creator (base name: "creator")', function() {
      // uncomment below and update the code to test the property creator
      //var instance = new bimdata.Document();
      //expect(instance).to.be();
    });

    it('should have the property project (base name: "project")', function() {
      // uncomment below and update the code to test the property project
      //var instance = new bimdata.Document();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new bimdata.Document();
      //expect(instance).to.be();
    });

    it('should have the property fileName (base name: "file_name")', function() {
      // uncomment below and update the code to test the property fileName
      //var instance = new bimdata.Document();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new bimdata.Document();
      //expect(instance).to.be();
    });

    it('should have the property file (base name: "file")', function() {
      // uncomment below and update the code to test the property file
      //var instance = new bimdata.Document();
      //expect(instance).to.be();
    });

    it('should have the property size (base name: "size")', function() {
      // uncomment below and update the code to test the property size
      //var instance = new bimdata.Document();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new bimdata.Document();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new bimdata.Document();
      //expect(instance).to.be();
    });

    it('should have the property modelId (base name: "model_id")', function() {
      // uncomment below and update the code to test the property modelId
      //var instance = new bimdata.Document();
      //expect(instance).to.be();
    });

    it('should have the property ifcId (base name: "ifc_id")', function() {
      // uncomment below and update the code to test the property ifcId
      //var instance = new bimdata.Document();
      //expect(instance).to.be();
    });

    it('should have the property userPermission (base name: "user_permission")', function() {
      // uncomment below and update the code to test the property userPermission
      //var instance = new bimdata.Document();
      //expect(instance).to.be();
    });

  });

}));

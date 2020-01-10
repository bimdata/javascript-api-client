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
    instance = new bimdata.Ifc();
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

  describe('Ifc', function() {
    it('should create an instance of Ifc', function() {
      // uncomment below and update the code to test Ifc
      //var instane = new bimdata.Ifc();
      //expect(instance).to.be.a(bimdata.Ifc);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new bimdata.Ifc();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new bimdata.Ifc();
      //expect(instance).to.be();
    });

    it('should have the property creator (base name: "creator")', function() {
      // uncomment below and update the code to test the property creator
      //var instane = new bimdata.Ifc();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new bimdata.Ifc();
      //expect(instance).to.be();
    });

    it('should have the property source (base name: "source")', function() {
      // uncomment below and update the code to test the property source
      //var instane = new bimdata.Ifc();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instane = new bimdata.Ifc();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instane = new bimdata.Ifc();
      //expect(instance).to.be();
    });

    it('should have the property documentId (base name: "document_id")', function() {
      // uncomment below and update the code to test the property documentId
      //var instane = new bimdata.Ifc();
      //expect(instance).to.be();
    });

    it('should have the property document (base name: "document")', function() {
      // uncomment below and update the code to test the property document
      //var instane = new bimdata.Ifc();
      //expect(instance).to.be();
    });

    it('should have the property structureFile (base name: "structure_file")', function() {
      // uncomment below and update the code to test the property structureFile
      //var instane = new bimdata.Ifc();
      //expect(instance).to.be();
    });

    it('should have the property systemsFile (base name: "systems_file")', function() {
      // uncomment below and update the code to test the property systemsFile
      //var instane = new bimdata.Ifc();
      //expect(instance).to.be();
    });

    it('should have the property mapFile (base name: "map_file")', function() {
      // uncomment below and update the code to test the property mapFile
      //var instane = new bimdata.Ifc();
      //expect(instance).to.be();
    });

    it('should have the property gltfFile (base name: "gltf_file")', function() {
      // uncomment below and update the code to test the property gltfFile
      //var instane = new bimdata.Ifc();
      //expect(instance).to.be();
    });

    it('should have the property bvhTreeFile (base name: "bvh_tree_file")', function() {
      // uncomment below and update the code to test the property bvhTreeFile
      //var instane = new bimdata.Ifc();
      //expect(instance).to.be();
    });

    it('should have the property viewer360File (base name: "viewer_360_file")', function() {
      // uncomment below and update the code to test the property viewer360File
      //var instane = new bimdata.Ifc();
      //expect(instance).to.be();
    });

    it('should have the property xktFile (base name: "xkt_file")', function() {
      // uncomment below and update the code to test the property xktFile
      //var instane = new bimdata.Ifc();
      //expect(instance).to.be();
    });

    it('should have the property projectId (base name: "project_id")', function() {
      // uncomment below and update the code to test the property projectId
      //var instane = new bimdata.Ifc();
      //expect(instance).to.be();
    });

    it('should have the property worldPosition (base name: "world_position")', function() {
      // uncomment below and update the code to test the property worldPosition
      //var instane = new bimdata.Ifc();
      //expect(instance).to.be();
    });

    it('should have the property errors (base name: "errors")', function() {
      // uncomment below and update the code to test the property errors
      //var instane = new bimdata.Ifc();
      //expect(instance).to.be();
    });

    it('should have the property warnings (base name: "warnings")', function() {
      // uncomment below and update the code to test the property warnings
      //var instane = new bimdata.Ifc();
      //expect(instance).to.be();
    });

  });

}));

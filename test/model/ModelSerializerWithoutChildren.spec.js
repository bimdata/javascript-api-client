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
    instance = new bimdata.ModelSerializerWithoutChildren();
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

  describe('ModelSerializerWithoutChildren', function() {
    it('should create an instance of ModelSerializerWithoutChildren', function() {
      // uncomment below and update the code to test ModelSerializerWithoutChildren
      //var instance = new bimdata.ModelSerializerWithoutChildren();
      //expect(instance).to.be.a(bimdata.ModelSerializerWithoutChildren);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new bimdata.ModelSerializerWithoutChildren();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new bimdata.ModelSerializerWithoutChildren();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new bimdata.ModelSerializerWithoutChildren();
      //expect(instance).to.be();
    });

    it('should have the property creator (base name: "creator")', function() {
      // uncomment below and update the code to test the property creator
      //var instance = new bimdata.ModelSerializerWithoutChildren();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new bimdata.ModelSerializerWithoutChildren();
      //expect(instance).to.be();
    });

    it('should have the property source (base name: "source")', function() {
      // uncomment below and update the code to test the property source
      //var instance = new bimdata.ModelSerializerWithoutChildren();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new bimdata.ModelSerializerWithoutChildren();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new bimdata.ModelSerializerWithoutChildren();
      //expect(instance).to.be();
    });

    it('should have the property documentId (base name: "document_id")', function() {
      // uncomment below and update the code to test the property documentId
      //var instance = new bimdata.ModelSerializerWithoutChildren();
      //expect(instance).to.be();
    });

    it('should have the property document (base name: "document")', function() {
      // uncomment below and update the code to test the property document
      //var instance = new bimdata.ModelSerializerWithoutChildren();
      //expect(instance).to.be();
    });

    it('should have the property structureFile (base name: "structure_file")', function() {
      // uncomment below and update the code to test the property structureFile
      //var instance = new bimdata.ModelSerializerWithoutChildren();
      //expect(instance).to.be();
    });

    it('should have the property systemsFile (base name: "systems_file")', function() {
      // uncomment below and update the code to test the property systemsFile
      //var instance = new bimdata.ModelSerializerWithoutChildren();
      //expect(instance).to.be();
    });

    it('should have the property mapFile (base name: "map_file")', function() {
      // uncomment below and update the code to test the property mapFile
      //var instance = new bimdata.ModelSerializerWithoutChildren();
      //expect(instance).to.be();
    });

    it('should have the property gltfFile (base name: "gltf_file")', function() {
      // uncomment below and update the code to test the property gltfFile
      //var instance = new bimdata.ModelSerializerWithoutChildren();
      //expect(instance).to.be();
    });

    it('should have the property previewFile (base name: "preview_file")', function() {
      // uncomment below and update the code to test the property previewFile
      //var instance = new bimdata.ModelSerializerWithoutChildren();
      //expect(instance).to.be();
    });

    it('should have the property viewer360File (base name: "viewer_360_file")', function() {
      // uncomment below and update the code to test the property viewer360File
      //var instance = new bimdata.ModelSerializerWithoutChildren();
      //expect(instance).to.be();
    });

    it('should have the property xktFile (base name: "xkt_file")', function() {
      // uncomment below and update the code to test the property xktFile
      //var instance = new bimdata.ModelSerializerWithoutChildren();
      //expect(instance).to.be();
    });

    it('should have the property xktFiles (base name: "xkt_files")', function() {
      // uncomment below and update the code to test the property xktFiles
      //var instance = new bimdata.ModelSerializerWithoutChildren();
      //expect(instance).to.be();
    });

    it('should have the property binary2dFile (base name: "binary_2d_file")', function() {
      // uncomment below and update the code to test the property binary2dFile
      //var instance = new bimdata.ModelSerializerWithoutChildren();
      //expect(instance).to.be();
    });

    it('should have the property projectId (base name: "project_id")', function() {
      // uncomment below and update the code to test the property projectId
      //var instance = new bimdata.ModelSerializerWithoutChildren();
      //expect(instance).to.be();
    });

    it('should have the property worldPosition (base name: "world_position")', function() {
      // uncomment below and update the code to test the property worldPosition
      //var instance = new bimdata.ModelSerializerWithoutChildren();
      //expect(instance).to.be();
    });

    it('should have the property sizeRatio (base name: "size_ratio")', function() {
      // uncomment below and update the code to test the property sizeRatio
      //var instance = new bimdata.ModelSerializerWithoutChildren();
      //expect(instance).to.be();
    });

    it('should have the property errors (base name: "errors")', function() {
      // uncomment below and update the code to test the property errors
      //var instance = new bimdata.ModelSerializerWithoutChildren();
      //expect(instance).to.be();
    });

    it('should have the property warnings (base name: "warnings")', function() {
      // uncomment below and update the code to test the property warnings
      //var instance = new bimdata.ModelSerializerWithoutChildren();
      //expect(instance).to.be();
    });

    it('should have the property archived (base name: "archived")', function() {
      // uncomment below and update the code to test the property archived
      //var instance = new bimdata.ModelSerializerWithoutChildren();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instance = new bimdata.ModelSerializerWithoutChildren();
      //expect(instance).to.be();
    });

    it('should have the property northVector (base name: "north_vector")', function() {
      // uncomment below and update the code to test the property northVector
      //var instance = new bimdata.ModelSerializerWithoutChildren();
      //expect(instance).to.be();
    });

    it('should have the property recommanded2dAngle (base name: "recommanded_2d_angle")', function() {
      // uncomment below and update the code to test the property recommanded2dAngle
      //var instance = new bimdata.ModelSerializerWithoutChildren();
      //expect(instance).to.be();
    });

    it('should have the property parentId (base name: "parent_id")', function() {
      // uncomment below and update the code to test the property parentId
      //var instance = new bimdata.ModelSerializerWithoutChildren();
      //expect(instance).to.be();
    });

    it('should have the property pageNumber (base name: "page_number")', function() {
      // uncomment below and update the code to test the property pageNumber
      //var instance = new bimdata.ModelSerializerWithoutChildren();
      //expect(instance).to.be();
    });

    it('should have the property layoutName (base name: "layout_name")', function() {
      // uncomment below and update the code to test the property layoutName
      //var instance = new bimdata.ModelSerializerWithoutChildren();
      //expect(instance).to.be();
    });

  });

}));

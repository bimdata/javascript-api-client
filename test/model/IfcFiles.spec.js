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
    instance = new bimdata.IfcFiles();
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

  describe('IfcFiles', function() {
    it('should create an instance of IfcFiles', function() {
      // uncomment below and update the code to test IfcFiles
      //var instane = new bimdata.IfcFiles();
      //expect(instance).to.be.a(bimdata.IfcFiles);
    });

    it('should have the property structureFile (base name: "structure_file")', function() {
      // uncomment below and update the code to test the property structureFile
      //var instane = new bimdata.IfcFiles();
      //expect(instance).to.be();
    });

    it('should have the property systemsFile (base name: "systems_file")', function() {
      // uncomment below and update the code to test the property systemsFile
      //var instane = new bimdata.IfcFiles();
      //expect(instance).to.be();
    });

    it('should have the property mapFile (base name: "map_file")', function() {
      // uncomment below and update the code to test the property mapFile
      //var instane = new bimdata.IfcFiles();
      //expect(instance).to.be();
    });

    it('should have the property gltfFile (base name: "gltf_file")', function() {
      // uncomment below and update the code to test the property gltfFile
      //var instane = new bimdata.IfcFiles();
      //expect(instance).to.be();
    });

    it('should have the property bvhTreeFile (base name: "bvh_tree_file")', function() {
      // uncomment below and update the code to test the property bvhTreeFile
      //var instane = new bimdata.IfcFiles();
      //expect(instance).to.be();
    });

    it('should have the property viewer360File (base name: "viewer_360_file")', function() {
      // uncomment below and update the code to test the property viewer360File
      //var instane = new bimdata.IfcFiles();
      //expect(instance).to.be();
    });

    it('should have the property xktFile (base name: "xkt_file")', function() {
      // uncomment below and update the code to test the property xktFile
      //var instane = new bimdata.IfcFiles();
      //expect(instance).to.be();
    });

  });

}));

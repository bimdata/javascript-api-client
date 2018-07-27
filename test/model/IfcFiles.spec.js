/**
 * BIMData API
 * BIMData API documentation
 *
 * OpenAPI spec version: v1
 * Contact: contact@bimdata.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.0-SNAPSHOT
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
      //var instance = new bimdata.IfcFiles();
      //expect(instance).to.be.a(bimdata.IfcFiles);
    });

    it('should have the property structureFile (base name: "structure_file")', function() {
      // uncomment below and update the code to test the property structureFile
      //var instance = new bimdata.IfcFiles();
      //expect(instance).to.be();
    });

    it('should have the property systemsFile (base name: "systems_file")', function() {
      // uncomment below and update the code to test the property systemsFile
      //var instance = new bimdata.IfcFiles();
      //expect(instance).to.be();
    });

    it('should have the property mapFile (base name: "map_file")', function() {
      // uncomment below and update the code to test the property mapFile
      //var instance = new bimdata.IfcFiles();
      //expect(instance).to.be();
    });

    it('should have the property gltfFile (base name: "gltf_file")', function() {
      // uncomment below and update the code to test the property gltfFile
      //var instance = new bimdata.IfcFiles();
      //expect(instance).to.be();
    });

    it('should have the property bvhTreeFile (base name: "bvh_tree_file")', function() {
      // uncomment below and update the code to test the property bvhTreeFile
      //var instance = new bimdata.IfcFiles();
      //expect(instance).to.be();
    });

  });

}));

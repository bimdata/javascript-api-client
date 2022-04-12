/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1 (v1)
 * 
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
    instance = new bimdata.PatchedFolderWithoutChildrenRequest();
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

  describe('PatchedFolderWithoutChildrenRequest', function() {
    it('should create an instance of PatchedFolderWithoutChildrenRequest', function() {
      // uncomment below and update the code to test PatchedFolderWithoutChildrenRequest
      //var instane = new bimdata.PatchedFolderWithoutChildrenRequest();
      //expect(instance).to.be.a(bimdata.PatchedFolderWithoutChildrenRequest);
    });

    it('should have the property parentId (base name: "parent_id")', function() {
      // uncomment below and update the code to test the property parentId
      //var instane = new bimdata.PatchedFolderWithoutChildrenRequest();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new bimdata.PatchedFolderWithoutChildrenRequest();
      //expect(instance).to.be();
    });

    it('should have the property defaultPermission (base name: "default_permission")', function() {
      // uncomment below and update the code to test the property defaultPermission
      //var instane = new bimdata.PatchedFolderWithoutChildrenRequest();
      //expect(instance).to.be();
    });

  });

}));

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
    instance = new bimdata.SelfUser();
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

  describe('SelfUser', function() {
    it('should create an instance of SelfUser', function() {
      // uncomment below and update the code to test SelfUser
      //var instance = new bimdata.SelfUser();
      //expect(instance).to.be.a(bimdata.SelfUser);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new bimdata.SelfUser();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instance = new bimdata.SelfUser();
      //expect(instance).to.be();
    });

    it('should have the property company (base name: "company")', function() {
      // uncomment below and update the code to test the property company
      //var instance = new bimdata.SelfUser();
      //expect(instance).to.be();
    });

    it('should have the property firstname (base name: "firstname")', function() {
      // uncomment below and update the code to test the property firstname
      //var instance = new bimdata.SelfUser();
      //expect(instance).to.be();
    });

    it('should have the property lastname (base name: "lastname")', function() {
      // uncomment below and update the code to test the property lastname
      //var instance = new bimdata.SelfUser();
      //expect(instance).to.be();
    });

    it('should have the property password (base name: "password")', function() {
      // uncomment below and update the code to test the property password
      //var instance = new bimdata.SelfUser();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new bimdata.SelfUser();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new bimdata.SelfUser();
      //expect(instance).to.be();
    });

    it('should have the property clouds (base name: "clouds")', function() {
      // uncomment below and update the code to test the property clouds
      //var instance = new bimdata.SelfUser();
      //expect(instance).to.be();
    });

    it('should have the property projects (base name: "projects")', function() {
      // uncomment below and update the code to test the property projects
      //var instance = new bimdata.SelfUser();
      //expect(instance).to.be();
    });

    it('should have the property lastLogin (base name: "last_login")', function() {
      // uncomment below and update the code to test the property lastLogin
      //var instance = new bimdata.SelfUser();
      //expect(instance).to.be();
    });

    it('should have the property defaultCloudId (base name: "default_cloud_id")', function() {
      // uncomment below and update the code to test the property defaultCloudId
      //var instance = new bimdata.SelfUser();
      //expect(instance).to.be();
    });

    it('should have the property defaultProjectId (base name: "default_project_id")', function() {
      // uncomment below and update the code to test the property defaultProjectId
      //var instance = new bimdata.SelfUser();
      //expect(instance).to.be();
    });

    it('should have the property oidcSub (base name: "oidc_sub")', function() {
      // uncomment below and update the code to test the property oidcSub
      //var instance = new bimdata.SelfUser();
      //expect(instance).to.be();
    });

  });

}));

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
    instance = new bimdata.VisaValidation();
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

  describe('VisaValidation', function() {
    it('should create an instance of VisaValidation', function() {
      // uncomment below and update the code to test VisaValidation
      //var instane = new bimdata.VisaValidation();
      //expect(instance).to.be.a(bimdata.VisaValidation);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new bimdata.VisaValidation();
      //expect(instance).to.be();
    });

    it('should have the property visaId (base name: "visa_id")', function() {
      // uncomment below and update the code to test the property visaId
      //var instane = new bimdata.VisaValidation();
      //expect(instance).to.be();
    });

    it('should have the property validator (base name: "validator")', function() {
      // uncomment below and update the code to test the property validator
      //var instane = new bimdata.VisaValidation();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new bimdata.VisaValidation();
      //expect(instance).to.be();
    });

    it('should have the property hasCommented (base name: "has_commented")', function() {
      // uncomment below and update the code to test the property hasCommented
      //var instane = new bimdata.VisaValidation();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instane = new bimdata.VisaValidation();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instane = new bimdata.VisaValidation();
      //expect(instance).to.be();
    });

  });

}));

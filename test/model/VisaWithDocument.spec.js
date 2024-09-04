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
    instance = new bimdata.VisaWithDocument();
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

  describe('VisaWithDocument', function() {
    it('should create an instance of VisaWithDocument', function() {
      // uncomment below and update the code to test VisaWithDocument
      //var instance = new bimdata.VisaWithDocument();
      //expect(instance).to.be.a(bimdata.VisaWithDocument);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new bimdata.VisaWithDocument();
      //expect(instance).to.be();
    });

    it('should have the property validations (base name: "validations")', function() {
      // uncomment below and update the code to test the property validations
      //var instance = new bimdata.VisaWithDocument();
      //expect(instance).to.be();
    });

    it('should have the property validationsInError (base name: "validations_in_error")', function() {
      // uncomment below and update the code to test the property validationsInError
      //var instance = new bimdata.VisaWithDocument();
      //expect(instance).to.be();
    });

    it('should have the property creator (base name: "creator")', function() {
      // uncomment below and update the code to test the property creator
      //var instance = new bimdata.VisaWithDocument();
      //expect(instance).to.be();
    });

    it('should have the property documentId (base name: "document_id")', function() {
      // uncomment below and update the code to test the property documentId
      //var instance = new bimdata.VisaWithDocument();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new bimdata.VisaWithDocument();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new bimdata.VisaWithDocument();
      //expect(instance).to.be();
    });

    it('should have the property comments (base name: "comments")', function() {
      // uncomment below and update the code to test the property comments
      //var instance = new bimdata.VisaWithDocument();
      //expect(instance).to.be();
    });

    it('should have the property deadline (base name: "deadline")', function() {
      // uncomment below and update the code to test the property deadline
      //var instance = new bimdata.VisaWithDocument();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new bimdata.VisaWithDocument();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new bimdata.VisaWithDocument();
      //expect(instance).to.be();
    });

    it('should have the property document (base name: "document")', function() {
      // uncomment below and update the code to test the property document
      //var instance = new bimdata.VisaWithDocument();
      //expect(instance).to.be();
    });

  });

}));

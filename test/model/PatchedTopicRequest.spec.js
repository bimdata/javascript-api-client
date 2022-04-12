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
    instance = new bimdata.PatchedTopicRequest();
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

  describe('PatchedTopicRequest', function() {
    it('should create an instance of PatchedTopicRequest', function() {
      // uncomment below and update the code to test PatchedTopicRequest
      //var instance = new bimdata.PatchedTopicRequest();
      //expect(instance).to.be.a(bimdata.PatchedTopicRequest);
    });

    it('should have the property guid (base name: "guid")', function() {
      // uncomment below and update the code to test the property guid
      //var instance = new bimdata.PatchedTopicRequest();
      //expect(instance).to.be();
    });

    it('should have the property topicType (base name: "topic_type")', function() {
      // uncomment below and update the code to test the property topicType
      //var instance = new bimdata.PatchedTopicRequest();
      //expect(instance).to.be();
    });

    it('should have the property topicStatus (base name: "topic_status")', function() {
      // uncomment below and update the code to test the property topicStatus
      //var instance = new bimdata.PatchedTopicRequest();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new bimdata.PatchedTopicRequest();
      //expect(instance).to.be();
    });

    it('should have the property priority (base name: "priority")', function() {
      // uncomment below and update the code to test the property priority
      //var instance = new bimdata.PatchedTopicRequest();
      //expect(instance).to.be();
    });

    it('should have the property labels (base name: "labels")', function() {
      // uncomment below and update the code to test the property labels
      //var instance = new bimdata.PatchedTopicRequest();
      //expect(instance).to.be();
    });

    it('should have the property creationDate (base name: "creation_date")', function() {
      // uncomment below and update the code to test the property creationDate
      //var instance = new bimdata.PatchedTopicRequest();
      //expect(instance).to.be();
    });

    it('should have the property creationAuthor (base name: "creation_author")', function() {
      // uncomment below and update the code to test the property creationAuthor
      //var instance = new bimdata.PatchedTopicRequest();
      //expect(instance).to.be();
    });

    it('should have the property modifiedAuthor (base name: "modified_author")', function() {
      // uncomment below and update the code to test the property modifiedAuthor
      //var instance = new bimdata.PatchedTopicRequest();
      //expect(instance).to.be();
    });

    it('should have the property assignedTo (base name: "assigned_to")', function() {
      // uncomment below and update the code to test the property assignedTo
      //var instance = new bimdata.PatchedTopicRequest();
      //expect(instance).to.be();
    });

    it('should have the property referenceLinks (base name: "reference_links")', function() {
      // uncomment below and update the code to test the property referenceLinks
      //var instance = new bimdata.PatchedTopicRequest();
      //expect(instance).to.be();
    });

    it('should have the property stage (base name: "stage")', function() {
      // uncomment below and update the code to test the property stage
      //var instance = new bimdata.PatchedTopicRequest();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new bimdata.PatchedTopicRequest();
      //expect(instance).to.be();
    });

    it('should have the property dueDate (base name: "due_date")', function() {
      // uncomment below and update the code to test the property dueDate
      //var instance = new bimdata.PatchedTopicRequest();
      //expect(instance).to.be();
    });

    it('should have the property ifcs (base name: "ifcs")', function() {
      // uncomment below and update the code to test the property ifcs
      //var instance = new bimdata.PatchedTopicRequest();
      //expect(instance).to.be();
    });

    it('should have the property models (base name: "models")', function() {
      // uncomment below and update the code to test the property models
      //var instance = new bimdata.PatchedTopicRequest();
      //expect(instance).to.be();
    });

    it('should have the property format (base name: "format")', function() {
      // uncomment below and update the code to test the property format
      //var instance = new bimdata.PatchedTopicRequest();
      //expect(instance).to.be();
    });

    it('should have the property index (base name: "index")', function() {
      // uncomment below and update the code to test the property index
      //var instance = new bimdata.PatchedTopicRequest();
      //expect(instance).to.be();
    });

    it('should have the property project (base name: "project")', function() {
      // uncomment below and update the code to test the property project
      //var instance = new bimdata.PatchedTopicRequest();
      //expect(instance).to.be();
    });

  });

}));

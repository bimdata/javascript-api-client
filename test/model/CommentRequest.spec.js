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
    instance = new bimdata.CommentRequest();
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

  describe('CommentRequest', function() {
    it('should create an instance of CommentRequest', function() {
      // uncomment below and update the code to test CommentRequest
      //var instane = new bimdata.CommentRequest();
      //expect(instance).to.be.a(bimdata.CommentRequest);
    });

    it('should have the property guid (base name: "guid")', function() {
      // uncomment below and update the code to test the property guid
      //var instane = new bimdata.CommentRequest();
      //expect(instance).to.be();
    });

    it('should have the property _date (base name: "date")', function() {
      // uncomment below and update the code to test the property _date
      //var instane = new bimdata.CommentRequest();
      //expect(instance).to.be();
    });

    it('should have the property author (base name: "author")', function() {
      // uncomment below and update the code to test the property author
      //var instane = new bimdata.CommentRequest();
      //expect(instance).to.be();
    });

    it('should have the property comment (base name: "comment")', function() {
      // uncomment below and update the code to test the property comment
      //var instane = new bimdata.CommentRequest();
      //expect(instance).to.be();
    });

    it('should have the property viewpointGuid (base name: "viewpoint_guid")', function() {
      // uncomment below and update the code to test the property viewpointGuid
      //var instane = new bimdata.CommentRequest();
      //expect(instance).to.be();
    });

    it('should have the property replyToCommentGuid (base name: "reply_to_comment_guid")', function() {
      // uncomment below and update the code to test the property replyToCommentGuid
      //var instane = new bimdata.CommentRequest();
      //expect(instance).to.be();
    });

    it('should have the property modifiedAuthor (base name: "modified_author")', function() {
      // uncomment below and update the code to test the property modifiedAuthor
      //var instane = new bimdata.CommentRequest();
      //expect(instance).to.be();
    });

    it('should have the property viewpointTempId (base name: "viewpoint_temp_id")', function() {
      // uncomment below and update the code to test the property viewpointTempId
      //var instane = new bimdata.CommentRequest();
      //expect(instance).to.be();
    });

  });

}));

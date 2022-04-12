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
    instance = new bimdata.DetailedExtensions();
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

  describe('DetailedExtensions', function() {
    it('should create an instance of DetailedExtensions', function() {
      // uncomment below and update the code to test DetailedExtensions
      //var instance = new bimdata.DetailedExtensions();
      //expect(instance).to.be.a(bimdata.DetailedExtensions);
    });

    it('should have the property topicLabels (base name: "topic_labels")', function() {
      // uncomment below and update the code to test the property topicLabels
      //var instance = new bimdata.DetailedExtensions();
      //expect(instance).to.be();
    });

    it('should have the property topicTypes (base name: "topic_types")', function() {
      // uncomment below and update the code to test the property topicTypes
      //var instance = new bimdata.DetailedExtensions();
      //expect(instance).to.be();
    });

    it('should have the property topicStatuses (base name: "topic_statuses")', function() {
      // uncomment below and update the code to test the property topicStatuses
      //var instance = new bimdata.DetailedExtensions();
      //expect(instance).to.be();
    });

    it('should have the property priorities (base name: "priorities")', function() {
      // uncomment below and update the code to test the property priorities
      //var instance = new bimdata.DetailedExtensions();
      //expect(instance).to.be();
    });

    it('should have the property stages (base name: "stages")', function() {
      // uncomment below and update the code to test the property stages
      //var instance = new bimdata.DetailedExtensions();
      //expect(instance).to.be();
    });

  });

}));

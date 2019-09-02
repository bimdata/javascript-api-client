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
    factory(root.expect, root.BimDataApi);
  }
}(this, function(expect, BimDataApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new BimDataApi.ProcessorHandler();
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

  describe('ProcessorHandler', function() {
    it('should create an instance of ProcessorHandler', function() {
      // uncomment below and update the code to test ProcessorHandler
      //var instane = new BimDataApi.ProcessorHandler();
      //expect(instance).to.be.a(BimDataApi.ProcessorHandler);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new BimDataApi.ProcessorHandler();
      //expect(instance).to.be();
    });

    it('should have the property processor (base name: "processor")', function() {
      // uncomment below and update the code to test the property processor
      //var instane = new BimDataApi.ProcessorHandler();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new BimDataApi.ProcessorHandler();
      //expect(instance).to.be();
    });

    it('should have the property detailMessage (base name: "detail_message")', function() {
      // uncomment below and update the code to test the property detailMessage
      //var instane = new BimDataApi.ProcessorHandler();
      //expect(instance).to.be();
    });

  });

}));

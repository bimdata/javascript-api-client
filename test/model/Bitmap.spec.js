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
 * OpenAPI Generator version: 3.0.2
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
    instance = new bimdata.Bitmap();
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

  describe('Bitmap', function() {
    it('should create an instance of Bitmap', function() {
      // uncomment below and update the code to test Bitmap
      //var instance = new bimdata.Bitmap();
      //expect(instance).to.be.a(bimdata.Bitmap);
    });

    it('should have the property guid (base name: "guid")', function() {
      // uncomment below and update the code to test the property guid
      //var instance = new bimdata.Bitmap();
      //expect(instance).to.be();
    });

    it('should have the property bitmapType (base name: "bitmap_type")', function() {
      // uncomment below and update the code to test the property bitmapType
      //var instance = new bimdata.Bitmap();
      //expect(instance).to.be();
    });

    it('should have the property location (base name: "location")', function() {
      // uncomment below and update the code to test the property location
      //var instance = new bimdata.Bitmap();
      //expect(instance).to.be();
    });

    it('should have the property normal (base name: "normal")', function() {
      // uncomment below and update the code to test the property normal
      //var instance = new bimdata.Bitmap();
      //expect(instance).to.be();
    });

    it('should have the property up (base name: "up")', function() {
      // uncomment below and update the code to test the property up
      //var instance = new bimdata.Bitmap();
      //expect(instance).to.be();
    });

    it('should have the property height (base name: "height")', function() {
      // uncomment below and update the code to test the property height
      //var instance = new bimdata.Bitmap();
      //expect(instance).to.be();
    });

    it('should have the property bitmapData (base name: "bitmap_data")', function() {
      // uncomment below and update the code to test the property bitmapData
      //var instance = new bimdata.Bitmap();
      //expect(instance).to.be();
    });

  });

}));
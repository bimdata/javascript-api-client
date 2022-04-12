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
    instance = new bimdata.MarketplaceApp();
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

  describe('MarketplaceApp', function() {
    it('should create an instance of MarketplaceApp', function() {
      // uncomment below and update the code to test MarketplaceApp
      //var instane = new bimdata.MarketplaceApp();
      //expect(instance).to.be.a(bimdata.MarketplaceApp);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new bimdata.MarketplaceApp();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new bimdata.MarketplaceApp();
      //expect(instance).to.be();
    });

    it('should have the property shortDescription (base name: "short_description")', function() {
      // uncomment below and update the code to test the property shortDescription
      //var instane = new bimdata.MarketplaceApp();
      //expect(instance).to.be();
    });

    it('should have the property longDescription (base name: "long_description")', function() {
      // uncomment below and update the code to test the property longDescription
      //var instane = new bimdata.MarketplaceApp();
      //expect(instance).to.be();
    });

    it('should have the property activationWebhookUrl (base name: "activation_webhook_url")', function() {
      // uncomment below and update the code to test the property activationWebhookUrl
      //var instane = new bimdata.MarketplaceApp();
      //expect(instance).to.be();
    });

    it('should have the property postActivationRedirectUri (base name: "post_activation_redirect_uri")', function() {
      // uncomment below and update the code to test the property postActivationRedirectUri
      //var instane = new bimdata.MarketplaceApp();
      //expect(instance).to.be();
    });

    it('should have the property viewerPluginsUrls (base name: "viewer_plugins_urls")', function() {
      // uncomment below and update the code to test the property viewerPluginsUrls
      //var instane = new bimdata.MarketplaceApp();
      //expect(instance).to.be();
    });

    it('should have the property creator (base name: "creator")', function() {
      // uncomment below and update the code to test the property creator
      //var instane = new bimdata.MarketplaceApp();
      //expect(instance).to.be();
    });

    it('should have the property scopes (base name: "scopes")', function() {
      // uncomment below and update the code to test the property scopes
      //var instane = new bimdata.MarketplaceApp();
      //expect(instance).to.be();
    });

    it('should have the property settingsUrl (base name: "settings_url")', function() {
      // uncomment below and update the code to test the property settingsUrl
      //var instane = new bimdata.MarketplaceApp();
      //expect(instance).to.be();
    });

    it('should have the property isPublic (base name: "is_public")', function() {
      // uncomment below and update the code to test the property isPublic
      //var instane = new bimdata.MarketplaceApp();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instane = new bimdata.MarketplaceApp();
      //expect(instance).to.be();
    });

    it('should have the property logo (base name: "logo")', function() {
      // uncomment below and update the code to test the property logo
      //var instane = new bimdata.MarketplaceApp();
      //expect(instance).to.be();
    });

    it('should have the property images (base name: "images")', function() {
      // uncomment below and update the code to test the property images
      //var instane = new bimdata.MarketplaceApp();
      //expect(instance).to.be();
    });

    it('should have the property organization (base name: "organization")', function() {
      // uncomment below and update the code to test the property organization
      //var instane = new bimdata.MarketplaceApp();
      //expect(instance).to.be();
    });

  });

}));

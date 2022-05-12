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
    instance = new bimdata.MarketplaceAppRequest();
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

  describe('MarketplaceAppRequest', function() {
    it('should create an instance of MarketplaceAppRequest', function() {
      // uncomment below and update the code to test MarketplaceAppRequest
      //var instance = new bimdata.MarketplaceAppRequest();
      //expect(instance).to.be.a(bimdata.MarketplaceAppRequest);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new bimdata.MarketplaceAppRequest();
      //expect(instance).to.be();
    });

    it('should have the property shortDescription (base name: "short_description")', function() {
      // uncomment below and update the code to test the property shortDescription
      //var instance = new bimdata.MarketplaceAppRequest();
      //expect(instance).to.be();
    });

    it('should have the property longDescription (base name: "long_description")', function() {
      // uncomment below and update the code to test the property longDescription
      //var instance = new bimdata.MarketplaceAppRequest();
      //expect(instance).to.be();
    });

    it('should have the property activationWebhookUrl (base name: "activation_webhook_url")', function() {
      // uncomment below and update the code to test the property activationWebhookUrl
      //var instance = new bimdata.MarketplaceAppRequest();
      //expect(instance).to.be();
    });

    it('should have the property postActivationRedirectUri (base name: "post_activation_redirect_uri")', function() {
      // uncomment below and update the code to test the property postActivationRedirectUri
      //var instance = new bimdata.MarketplaceAppRequest();
      //expect(instance).to.be();
    });

    it('should have the property viewerPluginsUrls (base name: "viewer_plugins_urls")', function() {
      // uncomment below and update the code to test the property viewerPluginsUrls
      //var instance = new bimdata.MarketplaceAppRequest();
      //expect(instance).to.be();
    });

    it('should have the property webhookSecret (base name: "webhook_secret")', function() {
      // uncomment below and update the code to test the property webhookSecret
      //var instance = new bimdata.MarketplaceAppRequest();
      //expect(instance).to.be();
    });

    it('should have the property settingsUrl (base name: "settings_url")', function() {
      // uncomment below and update the code to test the property settingsUrl
      //var instance = new bimdata.MarketplaceAppRequest();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instance = new bimdata.MarketplaceAppRequest();
      //expect(instance).to.be();
    });

    it('should have the property logo (base name: "logo")', function() {
      // uncomment below and update the code to test the property logo
      //var instance = new bimdata.MarketplaceAppRequest();
      //expect(instance).to.be();
    });

    it('should have the property file (base name: "file")', function() {
      // uncomment below and update the code to test the property file
      //var instance = new bimdata.MarketplaceAppRequest();
      //expect(instance).to.be();
    });

  });

}));

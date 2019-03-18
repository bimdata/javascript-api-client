/**
 * BIMData API
 * BIMData API is a tool to interact with your models stored on BIMData’s servers.     Through the API, you can manage your projects, the clouds, upload your IFC files and manage them through endpoints.
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
    instance = new bimdata.CloudApi();
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

  describe('CloudApi', function() {
    describe('cancelCloudUserInvitation', function() {
      it('should call cancelCloudUserInvitation successfully', function(done) {
        //uncomment below and update the code to test cancelCloudUserInvitation
        //instance.cancelCloudUserInvitation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createCloud', function() {
      it('should call createCloud successfully', function(done) {
        //uncomment below and update the code to test createCloud
        //instance.createCloud(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createDemo', function() {
      it('should call createDemo successfully', function(done) {
        //uncomment below and update the code to test createDemo
        //instance.createDemo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCloud', function() {
      it('should call deleteCloud successfully', function(done) {
        //uncomment below and update the code to test deleteCloud
        //instance.deleteCloud(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCloudUser', function() {
      it('should call deleteCloudUser successfully', function(done) {
        //uncomment below and update the code to test deleteCloudUser
        //instance.deleteCloudUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fullUpdateCloud', function() {
      it('should call fullUpdateCloud successfully', function(done) {
        //uncomment below and update the code to test fullUpdateCloud
        //instance.fullUpdateCloud(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fullUpdateCloudUser', function() {
      it('should call fullUpdateCloudUser successfully', function(done) {
        //uncomment below and update the code to test fullUpdateCloudUser
        //instance.fullUpdateCloudUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCloud', function() {
      it('should call getCloud successfully', function(done) {
        //uncomment below and update the code to test getCloud
        //instance.getCloud(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCloudInvitations', function() {
      it('should call getCloudInvitations successfully', function(done) {
        //uncomment below and update the code to test getCloudInvitations
        //instance.getCloudInvitations(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCloudSize', function() {
      it('should call getCloudSize successfully', function(done) {
        //uncomment below and update the code to test getCloudSize
        //instance.getCloudSize(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCloudUser', function() {
      it('should call getCloudUser successfully', function(done) {
        //uncomment below and update the code to test getCloudUser
        //instance.getCloudUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCloudUsers', function() {
      it('should call getCloudUsers successfully', function(done) {
        //uncomment below and update the code to test getCloudUsers
        //instance.getCloudUsers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getClouds', function() {
      it('should call getClouds successfully', function(done) {
        //uncomment below and update the code to test getClouds
        //instance.getClouds(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('inviteCloudUser', function() {
      it('should call inviteCloudUser successfully', function(done) {
        //uncomment below and update the code to test inviteCloudUser
        //instance.inviteCloudUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateCloud', function() {
      it('should call updateCloud successfully', function(done) {
        //uncomment below and update the code to test updateCloud
        //instance.updateCloud(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateCloudUser', function() {
      it('should call updateCloudUser successfully', function(done) {
        //uncomment below and update the code to test updateCloudUser
        //instance.updateCloudUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));

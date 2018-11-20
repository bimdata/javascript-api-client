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
    instance = new bimdata.UserApi();
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

  describe('UserApi', function() {
    describe('askResetPasswordToken', function() {
      it('should call askResetPasswordToken successfully', function(done) {
        //uncomment below and update the code to test askResetPasswordToken
        //instance.askResetPasswordToken(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fullUpdateNotification', function() {
      it('should call fullUpdateNotification successfully', function(done) {
        //uncomment below and update the code to test fullUpdateNotification
        //instance.fullUpdateNotification(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getNotification', function() {
      it('should call getNotification successfully', function(done) {
        //uncomment below and update the code to test getNotification
        //instance.getNotification(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSelfNotifications', function() {
      it('should call getSelfNotifications successfully', function(done) {
        //uncomment below and update the code to test getSelfNotifications
        //instance.getSelfNotifications(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSelfProjects', function() {
      it('should call getSelfProjects successfully', function(done) {
        //uncomment below and update the code to test getSelfProjects
        //instance.getSelfProjects(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSelfUser', function() {
      it('should call getSelfUser successfully', function(done) {
        //uncomment below and update the code to test getSelfUser
        //instance.getSelfUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('resetPassword', function() {
      it('should call resetPassword successfully', function(done) {
        //uncomment below and update the code to test resetPassword
        //instance.resetPassword(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('signUp', function() {
      it('should call signUp successfully', function(done) {
        //uncomment below and update the code to test signUp
        //instance.signUp(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('signUpWithInvitationToken', function() {
      it('should call signUpWithInvitationToken successfully', function(done) {
        //uncomment below and update the code to test signUpWithInvitationToken
        //instance.signUpWithInvitationToken(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateNotification', function() {
      it('should call updateNotification successfully', function(done) {
        //uncomment below and update the code to test updateNotification
        //instance.updateNotification(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateSelfUser', function() {
      it('should call updateSelfUser successfully', function(done) {
        //uncomment below and update the code to test updateSelfUser
        //instance.updateSelfUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));

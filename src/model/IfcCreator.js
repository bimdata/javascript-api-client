/**
 * BIMData API
 * BIMData API documentation
 *
 * OpenAPI spec version: v1
 * Contact: contact@bimdata.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: unset
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.bimdata) {
      root.bimdata = {};
    }
    root.bimdata.IfcCreator = factory(root.bimdata.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The IfcCreator model module.
   * @module model/IfcCreator
   * @version 1.0.9
   */

  /**
   * Constructs a new <code>IfcCreator</code>.
   * @alias module:model/IfcCreator
   * @class
   * @param email {String} 
   */
  var exports = function(email) {
    var _this = this;


    _this['email'] = email;













  };

  /**
   * Constructs a <code>IfcCreator</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IfcCreator} obj Optional instance to populate.
   * @return {module:model/IfcCreator} The populated <code>IfcCreator</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('enabled')) {
        obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
      }
      if (data.hasOwnProperty('salt')) {
        obj['salt'] = ApiClient.convertToType(data['salt'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('firstname')) {
        obj['firstname'] = ApiClient.convertToType(data['firstname'], 'String');
      }
      if (data.hasOwnProperty('lastname')) {
        obj['lastname'] = ApiClient.convertToType(data['lastname'], 'String');
      }
      if (data.hasOwnProperty('company')) {
        obj['company'] = ApiClient.convertToType(data['company'], 'String');
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
      }
      if (data.hasOwnProperty('updated_at')) {
        obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
      }
      if (data.hasOwnProperty('confirmation_token')) {
        obj['confirmation_token'] = ApiClient.convertToType(data['confirmation_token'], 'String');
      }
      if (data.hasOwnProperty('password_requested_at')) {
        obj['password_requested_at'] = ApiClient.convertToType(data['password_requested_at'], 'Date');
      }
      if (data.hasOwnProperty('invitation_token')) {
        obj['invitation_token'] = ApiClient.convertToType(data['invitation_token'], 'String');
      }
      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'Boolean');
      }
      if (data.hasOwnProperty('user')) {
        obj['user'] = ApiClient.convertToType(data['user'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {Boolean} enabled
   */
  exports.prototype['enabled'] = undefined;
  /**
   * @member {String} salt
   */
  exports.prototype['salt'] = undefined;
  /**
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * @member {String} firstname
   */
  exports.prototype['firstname'] = undefined;
  /**
   * @member {String} lastname
   */
  exports.prototype['lastname'] = undefined;
  /**
   * @member {String} company
   */
  exports.prototype['company'] = undefined;
  /**
   * @member {Date} created_at
   */
  exports.prototype['created_at'] = undefined;
  /**
   * @member {Date} updated_at
   */
  exports.prototype['updated_at'] = undefined;
  /**
   * @member {String} confirmation_token
   */
  exports.prototype['confirmation_token'] = undefined;
  /**
   * @member {Date} password_requested_at
   */
  exports.prototype['password_requested_at'] = undefined;
  /**
   * @member {String} invitation_token
   */
  exports.prototype['invitation_token'] = undefined;
  /**
   * @member {Boolean} created
   */
  exports.prototype['created'] = undefined;
  /**
   * @member {Number} user
   */
  exports.prototype['user'] = undefined;



  return exports;
}));



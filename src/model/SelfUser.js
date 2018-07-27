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
 * Swagger Codegen version: 2.4.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CloudRole', 'model/ProjectRole'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CloudRole'), require('./ProjectRole'));
  } else {
    // Browser globals (root is window)
    if (!root.bimdata) {
      root.bimdata = {};
    }
    root.bimdata.SelfUser = factory(root.bimdata.ApiClient, root.bimdata.CloudRole, root.bimdata.ProjectRole);
  }
}(this, function(ApiClient, CloudRole, ProjectRole) {
  'use strict';




  /**
   * The SelfUser model module.
   * @module model/SelfUser
   * @version 0.0.0
   */

  /**
   * Constructs a new <code>SelfUser</code>.
   * @alias module:model/SelfUser
   * @class
   * @param email {String} 
   * @param firstname {String} 
   * @param lastname {String} 
   * @param password {String} 
   */
  var exports = function(email, firstname, lastname, password) {
    var _this = this;


    _this['email'] = email;

    _this['firstname'] = firstname;
    _this['lastname'] = lastname;
    _this['password'] = password;







  };

  /**
   * Constructs a <code>SelfUser</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SelfUser} obj Optional instance to populate.
   * @return {module:model/SelfUser} The populated <code>SelfUser</code> instance.
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
      if (data.hasOwnProperty('company')) {
        obj['company'] = ApiClient.convertToType(data['company'], 'String');
      }
      if (data.hasOwnProperty('firstname')) {
        obj['firstname'] = ApiClient.convertToType(data['firstname'], 'String');
      }
      if (data.hasOwnProperty('lastname')) {
        obj['lastname'] = ApiClient.convertToType(data['lastname'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
      }
      if (data.hasOwnProperty('updated_at')) {
        obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
      }
      if (data.hasOwnProperty('clouds')) {
        obj['clouds'] = ApiClient.convertToType(data['clouds'], [CloudRole]);
      }
      if (data.hasOwnProperty('projects')) {
        obj['projects'] = ApiClient.convertToType(data['projects'], [ProjectRole]);
      }
      if (data.hasOwnProperty('last_login')) {
        obj['last_login'] = ApiClient.convertToType(data['last_login'], 'Date');
      }
      if (data.hasOwnProperty('default_cloud_id')) {
        obj['default_cloud_id'] = ApiClient.convertToType(data['default_cloud_id'], 'String');
      }
      if (data.hasOwnProperty('default_project_id')) {
        obj['default_project_id'] = ApiClient.convertToType(data['default_project_id'], 'String');
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
   * @member {String} company
   */
  exports.prototype['company'] = undefined;
  /**
   * @member {String} firstname
   */
  exports.prototype['firstname'] = undefined;
  /**
   * @member {String} lastname
   */
  exports.prototype['lastname'] = undefined;
  /**
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * @member {Date} created_at
   */
  exports.prototype['created_at'] = undefined;
  /**
   * @member {Date} updated_at
   */
  exports.prototype['updated_at'] = undefined;
  /**
   * @member {Array.<module:model/CloudRole>} clouds
   */
  exports.prototype['clouds'] = undefined;
  /**
   * @member {Array.<module:model/ProjectRole>} projects
   */
  exports.prototype['projects'] = undefined;
  /**
   * @member {Date} last_login
   */
  exports.prototype['last_login'] = undefined;
  /**
   * @member {String} default_cloud_id
   */
  exports.prototype['default_cloud_id'] = undefined;
  /**
   * @member {String} default_project_id
   */
  exports.prototype['default_project_id'] = undefined;



  return exports;
}));



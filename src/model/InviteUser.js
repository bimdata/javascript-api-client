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
    root.bimdata.InviteUser = factory(root.bimdata.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The InviteUser model module.
   * @module model/InviteUser
   * @version 0.0.0
   */

  /**
   * Constructs a new <code>InviteUser</code>.
   * @alias module:model/InviteUser
   * @class
   * @param email {String} 
   */
  var exports = function(email) {
    var _this = this;

    _this['email'] = email;
  };

  /**
   * Constructs a <code>InviteUser</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InviteUser} obj Optional instance to populate.
   * @return {module:model/InviteUser} The populated <code>InviteUser</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('company')) {
        obj['company'] = ApiClient.convertToType(data['company'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('firstname')) {
        obj['firstname'] = ApiClient.convertToType(data['firstname'], 'String');
      }
      if (data.hasOwnProperty('lastname')) {
        obj['lastname'] = ApiClient.convertToType(data['lastname'], 'String');
      }
      if (data.hasOwnProperty('project_role')) {
        obj['project_role'] = ApiClient.convertToType(data['project_role'], 'String');
      }
      if (data.hasOwnProperty('cloud_role')) {
        obj['cloud_role'] = ApiClient.convertToType(data['cloud_role'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} company
   */
  exports.prototype['company'] = undefined;
  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {String} firstname
   */
  exports.prototype['firstname'] = undefined;
  /**
   * @member {String} lastname
   */
  exports.prototype['lastname'] = undefined;
  /**
   * @member {module:model/InviteUser.ProjectRoleEnum} project_role
   */
  exports.prototype['project_role'] = undefined;
  /**
   * @member {module:model/InviteUser.CloudRoleEnum} cloud_role
   */
  exports.prototype['cloud_role'] = undefined;


  /**
   * Allowed values for the <code>project_role</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ProjectRoleEnum = {
    /**
     * value: "100"
     * @const
     */
    "100": "100",
    /**
     * value: "50"
     * @const
     */
    "50": "50",
    /**
     * value: "25"
     * @const
     */
    "25": "25"  };

  /**
   * Allowed values for the <code>cloud_role</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CloudRoleEnum = {
    /**
     * value: "100"
     * @const
     */
    "100": "100",
    /**
     * value: "50"
     * @const
     */
    "50": "50"  };


  return exports;
}));



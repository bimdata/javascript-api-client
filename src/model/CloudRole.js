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
    root.bimdata.CloudRole = factory(root.bimdata.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The CloudRole model module.
   * @module model/CloudRole
   * @version 0.0.0
   */

  /**
   * Constructs a new <code>CloudRole</code>.
   * @alias module:model/CloudRole
   * @class
   * @param cloud {Number} 
   */
  var exports = function(cloud) {
    var _this = this;

    _this['cloud'] = cloud;
  };

  /**
   * Constructs a <code>CloudRole</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CloudRole} obj Optional instance to populate.
   * @return {module:model/CloudRole} The populated <code>CloudRole</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('cloud')) {
        obj['cloud'] = ApiClient.convertToType(data['cloud'], 'Number');
      }
      if (data.hasOwnProperty('role')) {
        obj['role'] = ApiClient.convertToType(data['role'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} cloud
   */
  exports.prototype['cloud'] = undefined;
  /**
   * Role of the user in the cloud
   * @member {Number} role
   */
  exports.prototype['role'] = undefined;



  return exports;
}));



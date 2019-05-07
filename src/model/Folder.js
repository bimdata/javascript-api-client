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
    define(['ApiClient', 'model/Folder', 'model/User'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Folder'), require('./User'));
  } else {
    // Browser globals (root is window)
    if (!root.bimdata) {
      root.bimdata = {};
    }
    root.bimdata.Folder = factory(root.bimdata.ApiClient, root.bimdata.Folder, root.bimdata.User);
  }
}(this, function(ApiClient, Folder, User) {
  'use strict';



  /**
   * The Folder model module.
   * @module model/Folder
   * @version 0.0.0
   */

  /**
   * Constructs a new <code>Folder</code>.
   * @alias module:model/Folder
   * @class
   * @param name {String} Name of the folder
   */
  var exports = function(name) {
    var _this = this;

    _this['name'] = name;
  };

  /**
   * Constructs a <code>Folder</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Folder} obj Optional instance to populate.
   * @return {module:model/Folder} The populated <code>Folder</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('parent_id')) {
        obj['parent_id'] = ApiClient.convertToType(data['parent_id'], 'Number');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
      }
      if (data.hasOwnProperty('updated_at')) {
        obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
      }
      if (data.hasOwnProperty('children')) {
        obj['children'] = ApiClient.convertToType(data['children'], [Folder]);
      }
      if (data.hasOwnProperty('created_by')) {
        obj['created_by'] = User.constructFromObject(data['created_by']);
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Number} parent_id
   */
  exports.prototype['parent_id'] = undefined;
  /**
   * Value is \"Folder\". It is usefull to parse the tree and discriminate folders and files
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * Name of the folder
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Creation date
   * @member {Date} created_at
   */
  exports.prototype['created_at'] = undefined;
  /**
   * Date of the last update
   * @member {Date} updated_at
   */
  exports.prototype['updated_at'] = undefined;
  /**
   * @member {Array.<module:model/Folder>} children
   */
  exports.prototype['children'] = undefined;
  /**
   * @member {module:model/User} created_by
   */
  exports.prototype['created_by'] = undefined;



  return exports;
}));



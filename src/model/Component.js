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
    root.bimdata.Component = factory(root.bimdata.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Component model module.
   * @module model/Component
   * @version 1.0.9
   */

  /**
   * Constructs a new <code>Component</code>.
   * @alias module:model/Component
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>Component</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Component} obj Optional instance to populate.
   * @return {module:model/Component} The populated <code>Component</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ifc_guid')) {
        obj['ifc_guid'] = ApiClient.convertToType(data['ifc_guid'], 'String');
      }
      if (data.hasOwnProperty('originating_system')) {
        obj['originating_system'] = ApiClient.convertToType(data['originating_system'], 'String');
      }
      if (data.hasOwnProperty('authoring_tool_id')) {
        obj['authoring_tool_id'] = ApiClient.convertToType(data['authoring_tool_id'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} ifc_guid
   */
  exports.prototype['ifc_guid'] = undefined;
  /**
   * @member {String} originating_system
   */
  exports.prototype['originating_system'] = undefined;
  /**
   * @member {String} authoring_tool_id
   */
  exports.prototype['authoring_tool_id'] = undefined;



  return exports;
}));



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
    root.bimdata.IfcExport = factory(root.bimdata.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The IfcExport model module.
   * @module model/IfcExport
   * @version 0.0.0
   */

  /**
   * Constructs a new <code>IfcExport</code>.
   * @alias module:model/IfcExport
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>IfcExport</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IfcExport} obj Optional instance to populate.
   * @return {module:model/IfcExport} The populated <code>IfcExport</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('classifications')) {
        obj['classifications'] = ApiClient.convertToType(data['classifications'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Exported Ifc will include API classifications updates
   * @member {Boolean} classifications
   */
  exports.prototype['classifications'] = undefined;



  return exports;
}));


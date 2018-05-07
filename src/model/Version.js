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
    root.bimdata.Version = factory(root.bimdata.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Version model module.
   * @module model/Version
   * @version 1.0.9
   */

  /**
   * Constructs a new <code>Version</code>.
   * @alias module:model/Version
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Version</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Version} obj Optional instance to populate.
   * @return {module:model/Version} The populated <code>Version</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('version_id')) {
        obj['version_id'] = ApiClient.convertToType(data['version_id'], 'String');
      }
      if (data.hasOwnProperty('detailed_version')) {
        obj['detailed_version'] = ApiClient.convertToType(data['detailed_version'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} version_id
   */
  exports.prototype['version_id'] = undefined;
  /**
   * @member {String} detailed_version
   */
  exports.prototype['detailed_version'] = undefined;



  return exports;
}));



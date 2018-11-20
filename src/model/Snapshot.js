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
    root.bimdata.Snapshot = factory(root.bimdata.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The Snapshot model module.
   * @module model/Snapshot
   * @version 0.0.0
   */

  /**
   * Constructs a new <code>Snapshot</code>.
   * @alias module:model/Snapshot
   * @class
   * @param snapshotType {String} 
   */
  var exports = function(snapshotType) {
    var _this = this;

    _this['snapshot_type'] = snapshotType;
  };

  /**
   * Constructs a <code>Snapshot</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Snapshot} obj Optional instance to populate.
   * @return {module:model/Snapshot} The populated <code>Snapshot</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('snapshot_type')) {
        obj['snapshot_type'] = ApiClient.convertToType(data['snapshot_type'], 'String');
      }
      if (data.hasOwnProperty('snapshot_data')) {
        obj['snapshot_data'] = ApiClient.convertToType(data['snapshot_data'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} snapshot_type
   */
  exports.prototype['snapshot_type'] = undefined;
  /**
   * @member {String} snapshot_data
   */
  exports.prototype['snapshot_data'] = undefined;



  return exports;
}));



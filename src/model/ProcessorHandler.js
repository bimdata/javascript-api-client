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
    root.bimdata.ProcessorHandler = factory(root.bimdata.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The ProcessorHandler model module.
   * @module model/ProcessorHandler
   * @version 0.0.0
   */

  /**
   * Constructs a new <code>ProcessorHandler</code>.
   * @alias module:model/ProcessorHandler
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ProcessorHandler</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProcessorHandler} obj Optional instance to populate.
   * @return {module:model/ProcessorHandler} The populated <code>ProcessorHandler</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('processor')) {
        obj['processor'] = ApiClient.convertToType(data['processor'], 'Number');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('detail_message')) {
        obj['detail_message'] = ApiClient.convertToType(data['detail_message'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Number} processor
   */
  exports.prototype['processor'] = undefined;
  /**
   * @member {module:model/ProcessorHandler.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {String} detail_message
   */
  exports.prototype['detail_message'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "C"
     * @const
     */
    "C": "C",
    /**
     * value: "D"
     * @const
     */
    "D": "D",
    /**
     * value: "P"
     * @const
     */
    "P": "P",
    /**
     * value: "W"
     * @const
     */
    "W": "W",
    /**
     * value: "I"
     * @const
     */
    "I": "I",
    /**
     * value: "E"
     * @const
     */
    "E": "E",
    /**
     * value: "U"
     * @const
     */
    "U": "U"  };


  return exports;
}));



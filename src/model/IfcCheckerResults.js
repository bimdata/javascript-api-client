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
    root.bimdata.IfcCheckerResults = factory(root.bimdata.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The IfcCheckerResults model module.
   * @module model/IfcCheckerResults
   * @version 1.0.2
   */

  /**
   * Constructs a new <code>IfcCheckerResults</code>.
   * @alias module:model/IfcCheckerResults
   * @class
   * @param checker {Number} 
   */
  var exports = function(checker) {
    var _this = this;








    _this['checker'] = checker;
  };

  /**
   * Constructs a <code>IfcCheckerResults</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IfcCheckerResults} obj Optional instance to populate.
   * @return {module:model/IfcCheckerResults} The populated <code>IfcCheckerResults</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('error_detail')) {
        obj['error_detail'] = ApiClient.convertToType(data['error_detail'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('result')) {
        obj['result'] = ApiClient.convertToType(data['result'], 'String');
      }
      if (data.hasOwnProperty('collisions')) {
        obj['collisions'] = ApiClient.convertToType(data['collisions'], 'String');
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
      }
      if (data.hasOwnProperty('updated_at')) {
        obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
      }
      if (data.hasOwnProperty('checker')) {
        obj['checker'] = ApiClient.convertToType(data['checker'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} error_detail
   */
  exports.prototype['error_detail'] = undefined;
  /**
   * @member {module:model/IfcCheckerResults.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {String} result
   */
  exports.prototype['result'] = undefined;
  /**
   * @member {String} collisions
   */
  exports.prototype['collisions'] = undefined;
  /**
   * @member {Date} created_at
   */
  exports.prototype['created_at'] = undefined;
  /**
   * @member {Date} updated_at
   */
  exports.prototype['updated_at'] = undefined;
  /**
   * @member {Number} checker
   */
  exports.prototype['checker'] = undefined;


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
     * value: "P"
     * @const
     */
    "P": "P",
    /**
     * value: "E"
     * @const
     */
    "E": "E"  };


  return exports;
}));



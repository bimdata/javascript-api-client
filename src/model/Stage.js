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
    root.bimdata.Stage = factory(root.bimdata.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Stage model module.
   * @module model/Stage
   * @version 1.0.2
   */

  /**
   * Constructs a new <code>Stage</code>.
   * @alias module:model/Stage
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Stage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Stage} obj Optional instance to populate.
   * @return {module:model/Stage} The populated <code>Stage</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('stage')) {
        obj['stage'] = ApiClient.convertToType(data['stage'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} stage
   */
  exports.prototype['stage'] = undefined;



  return exports;
}));



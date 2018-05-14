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
 * Swagger Codegen version: 2.3.1
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
    root.bimdata.ViewSetupHints = factory(root.bimdata.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ViewSetupHints model module.
   * @module model/ViewSetupHints
   * @version 1.0.13
   */

  /**
   * Constructs a new <code>ViewSetupHints</code>.
   * @alias module:model/ViewSetupHints
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ViewSetupHints</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ViewSetupHints} obj Optional instance to populate.
   * @return {module:model/ViewSetupHints} The populated <code>ViewSetupHints</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('spaces_visible')) {
        obj['spaces_visible'] = ApiClient.convertToType(data['spaces_visible'], 'Boolean');
      }
      if (data.hasOwnProperty('space_boundaries_visible')) {
        obj['space_boundaries_visible'] = ApiClient.convertToType(data['space_boundaries_visible'], 'Boolean');
      }
      if (data.hasOwnProperty('openings_visible')) {
        obj['openings_visible'] = ApiClient.convertToType(data['openings_visible'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} spaces_visible
   */
  exports.prototype['spaces_visible'] = undefined;
  /**
   * @member {Boolean} space_boundaries_visible
   */
  exports.prototype['space_boundaries_visible'] = undefined;
  /**
   * @member {Boolean} openings_visible
   */
  exports.prototype['openings_visible'] = undefined;



  return exports;
}));



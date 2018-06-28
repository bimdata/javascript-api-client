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
 * OpenAPI Generator version: 3.0.2
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
    root.bimdata.CommentAction = factory(root.bimdata.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CommentAction model module.
   * @module model/CommentAction
   * @version 0.0.0
   */

  /**
   * Constructs a new <code>CommentAction</code>.
   * @alias module:model/CommentAction
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>CommentAction</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CommentAction} obj Optional instance to populate.
   * @return {module:model/CommentAction} The populated <code>CommentAction</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('comment_action')) {
        obj['comment_action'] = ApiClient.convertToType(data['comment_action'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/CommentAction.CommentActionEnum} comment_action
   */
  exports.prototype['comment_action'] = undefined;


  /**
   * Allowed values for the <code>comment_action</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CommentActionEnum = {
    /**
     * value: "update"
     * @const
     */
    "update": "update"  };


  return exports;
}));


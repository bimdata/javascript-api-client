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
    root.bimdata.TopicType = factory(root.bimdata.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TopicType model module.
   * @module model/TopicType
   * @version 1.0.2
   */

  /**
   * Constructs a new <code>TopicType</code>.
   * @alias module:model/TopicType
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>TopicType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TopicType} obj Optional instance to populate.
   * @return {module:model/TopicType} The populated <code>TopicType</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('topic_type')) {
        obj['topic_type'] = ApiClient.convertToType(data['topic_type'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} topic_type
   */
  exports.prototype['topic_type'] = undefined;



  return exports;
}));



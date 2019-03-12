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
    root.bimdata.Extensions = factory(root.bimdata.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The Extensions model module.
   * @module model/Extensions
   * @version 0.0.0
   */

  /**
   * Constructs a new <code>Extensions</code>.
   * @alias module:model/Extensions
   * @class
   * @param topicType {Array.<String>} 
   * @param topicStatus {Array.<String>} 
   * @param topicLabel {Array.<String>} 
   * @param priority {Array.<String>} 
   * @param stage {Array.<String>} 
   */
  var exports = function(topicType, topicStatus, topicLabel, priority, stage) {
    var _this = this;

    _this['topic_type'] = topicType;
    _this['topic_status'] = topicStatus;
    _this['topic_label'] = topicLabel;
    _this['priority'] = priority;
    _this['stage'] = stage;
  };

  /**
   * Constructs a <code>Extensions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Extensions} obj Optional instance to populate.
   * @return {module:model/Extensions} The populated <code>Extensions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('topic_type')) {
        obj['topic_type'] = ApiClient.convertToType(data['topic_type'], ['String']);
      }
      if (data.hasOwnProperty('topic_status')) {
        obj['topic_status'] = ApiClient.convertToType(data['topic_status'], ['String']);
      }
      if (data.hasOwnProperty('topic_label')) {
        obj['topic_label'] = ApiClient.convertToType(data['topic_label'], ['String']);
      }
      if (data.hasOwnProperty('priority')) {
        obj['priority'] = ApiClient.convertToType(data['priority'], ['String']);
      }
      if (data.hasOwnProperty('user_id_type')) {
        obj['user_id_type'] = ApiClient.convertToType(data['user_id_type'], ['String']);
      }
      if (data.hasOwnProperty('stage')) {
        obj['stage'] = ApiClient.convertToType(data['stage'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<String>} topic_type
   */
  exports.prototype['topic_type'] = undefined;
  /**
   * @member {Array.<String>} topic_status
   */
  exports.prototype['topic_status'] = undefined;
  /**
   * @member {Array.<String>} topic_label
   */
  exports.prototype['topic_label'] = undefined;
  /**
   * @member {Array.<String>} priority
   */
  exports.prototype['priority'] = undefined;
  /**
   * @member {Array.<String>} user_id_type
   */
  exports.prototype['user_id_type'] = undefined;
  /**
   * @member {Array.<String>} stage
   */
  exports.prototype['stage'] = undefined;



  return exports;
}));



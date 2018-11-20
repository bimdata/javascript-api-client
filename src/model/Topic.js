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
    root.bimdata.Topic = factory(root.bimdata.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The Topic model module.
   * @module model/Topic
   * @version 0.0.0
   */

  /**
   * Constructs a new <code>Topic</code>.
   * @alias module:model/Topic
   * @class
   * @param title {String} 
   */
  var exports = function(title) {
    var _this = this;

    _this['title'] = title;
  };

  /**
   * Constructs a <code>Topic</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Topic} obj Optional instance to populate.
   * @return {module:model/Topic} The populated <code>Topic</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('guid')) {
        obj['guid'] = ApiClient.convertToType(data['guid'], 'String');
      }
      if (data.hasOwnProperty('topic_type')) {
        obj['topic_type'] = ApiClient.convertToType(data['topic_type'], 'String');
      }
      if (data.hasOwnProperty('topic_status')) {
        obj['topic_status'] = ApiClient.convertToType(data['topic_status'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('priority')) {
        obj['priority'] = ApiClient.convertToType(data['priority'], 'String');
      }
      if (data.hasOwnProperty('labels')) {
        obj['labels'] = ApiClient.convertToType(data['labels'], ['String']);
      }
      if (data.hasOwnProperty('creation_date')) {
        obj['creation_date'] = ApiClient.convertToType(data['creation_date'], 'Date');
      }
      if (data.hasOwnProperty('creation_author')) {
        obj['creation_author'] = ApiClient.convertToType(data['creation_author'], 'String');
      }
      if (data.hasOwnProperty('modified_date')) {
        obj['modified_date'] = ApiClient.convertToType(data['modified_date'], 'Date');
      }
      if (data.hasOwnProperty('modified_author')) {
        obj['modified_author'] = ApiClient.convertToType(data['modified_author'], 'String');
      }
      if (data.hasOwnProperty('assigned_to')) {
        obj['assigned_to'] = ApiClient.convertToType(data['assigned_to'], 'String');
      }
      if (data.hasOwnProperty('reference_links')) {
        obj['reference_links'] = ApiClient.convertToType(data['reference_links'], ['String']);
      }
      if (data.hasOwnProperty('stage')) {
        obj['stage'] = ApiClient.convertToType(data['stage'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('due_date')) {
        obj['due_date'] = ApiClient.convertToType(data['due_date'], 'Date');
      }
      if (data.hasOwnProperty('ifcs')) {
        obj['ifcs'] = ApiClient.convertToType(data['ifcs'], ['Number']);
      }
      if (data.hasOwnProperty('format')) {
        obj['format'] = ApiClient.convertToType(data['format'], 'String');
      }
      if (data.hasOwnProperty('index')) {
        obj['index'] = ApiClient.convertToType(data['index'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} guid
   */
  exports.prototype['guid'] = undefined;
  /**
   * @member {String} topic_type
   */
  exports.prototype['topic_type'] = undefined;
  /**
   * @member {String} topic_status
   */
  exports.prototype['topic_status'] = undefined;
  /**
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * @member {String} priority
   */
  exports.prototype['priority'] = undefined;
  /**
   * @member {Array.<String>} labels
   */
  exports.prototype['labels'] = undefined;
  /**
   * @member {Date} creation_date
   */
  exports.prototype['creation_date'] = undefined;
  /**
   * @member {String} creation_author
   */
  exports.prototype['creation_author'] = undefined;
  /**
   * @member {Date} modified_date
   */
  exports.prototype['modified_date'] = undefined;
  /**
   * @member {String} modified_author
   */
  exports.prototype['modified_author'] = undefined;
  /**
   * @member {String} assigned_to
   */
  exports.prototype['assigned_to'] = undefined;
  /**
   * @member {Array.<String>} reference_links
   */
  exports.prototype['reference_links'] = undefined;
  /**
   * @member {String} stage
   */
  exports.prototype['stage'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {Date} due_date
   */
  exports.prototype['due_date'] = undefined;
  /**
   * @member {Array.<Number>} ifcs
   */
  exports.prototype['ifcs'] = undefined;
  /**
   * @member {String} format
   */
  exports.prototype['format'] = undefined;
  /**
   * @member {Number} index
   */
  exports.prototype['index'] = undefined;



  return exports;
}));



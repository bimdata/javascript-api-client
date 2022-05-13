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
    define(['ApiClient', 'model/Comment', 'model/Viewpoint'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Comment'), require('./Viewpoint'));
  } else {
    // Browser globals (root is window)
    if (!root.bimdata) {
      root.bimdata = {};
    }
    root.bimdata.SingleJsonTopic = factory(root.bimdata.ApiClient, root.bimdata.Comment, root.bimdata.Viewpoint);
  }
}(this, function(ApiClient, Comment, Viewpoint) {
  'use strict';



  /**
   * The SingleJsonTopic model module.
   * @module model/SingleJsonTopic
   * @version 0.0.0
   */

  /**
   * Constructs a new <code>SingleJsonTopic</code>.
   * @alias module:model/SingleJsonTopic
   * @class
   * @param title {String} 
   */
  var exports = function(title) {
    var _this = this;

    _this['title'] = title;
  };

  /**
   * Constructs a <code>SingleJsonTopic</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SingleJsonTopic} obj Optional instance to populate.
   * @return {module:model/SingleJsonTopic} The populated <code>SingleJsonTopic</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('guid')) {
        obj['guid'] = ApiClient.convertToType(data['guid'], 'String');
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
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('reference_links')) {
        obj['reference_links'] = ApiClient.convertToType(data['reference_links'], ['String']);
      }
      if (data.hasOwnProperty('ifcs')) {
        obj['ifcs'] = ApiClient.convertToType(data['ifcs'], ['Number']);
      }
      if (data.hasOwnProperty('labels')) {
        obj['labels'] = ApiClient.convertToType(data['labels'], ['String']);
      }
      if (data.hasOwnProperty('topic_type')) {
        obj['topic_type'] = ApiClient.convertToType(data['topic_type'], 'String');
      }
      if (data.hasOwnProperty('topic_status')) {
        obj['topic_status'] = ApiClient.convertToType(data['topic_status'], 'String');
      }
      if (data.hasOwnProperty('stage')) {
        obj['stage'] = ApiClient.convertToType(data['stage'], 'String');
      }
      if (data.hasOwnProperty('priority')) {
        obj['priority'] = ApiClient.convertToType(data['priority'], 'String');
      }
      if (data.hasOwnProperty('index')) {
        obj['index'] = ApiClient.convertToType(data['index'], 'Number');
      }
      if (data.hasOwnProperty('assigned_to')) {
        obj['assigned_to'] = ApiClient.convertToType(data['assigned_to'], 'String');
      }
      if (data.hasOwnProperty('format')) {
        obj['format'] = ApiClient.convertToType(data['format'], 'String');
      }
      if (data.hasOwnProperty('due_date')) {
        obj['due_date'] = ApiClient.convertToType(data['due_date'], 'Date');
      }
      if (data.hasOwnProperty('comments')) {
        obj['comments'] = ApiClient.convertToType(data['comments'], [Comment]);
      }
      if (data.hasOwnProperty('viewpoints')) {
        obj['viewpoints'] = ApiClient.convertToType(data['viewpoints'], [Viewpoint]);
      }
    }
    return obj;
  }

  /**
   * @member {String} guid
   */
  exports.prototype['guid'] = undefined;
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
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {Array.<String>} reference_links
   */
  exports.prototype['reference_links'] = undefined;
  /**
   * @member {Array.<Number>} ifcs
   */
  exports.prototype['ifcs'] = undefined;
  /**
   * @member {Array.<String>} labels
   */
  exports.prototype['labels'] = undefined;
  /**
   * @member {String} topic_type
   */
  exports.prototype['topic_type'] = undefined;
  /**
   * @member {String} topic_status
   */
  exports.prototype['topic_status'] = undefined;
  /**
   * @member {String} stage
   */
  exports.prototype['stage'] = undefined;
  /**
   * @member {String} priority
   */
  exports.prototype['priority'] = undefined;
  /**
   * @member {Number} index
   */
  exports.prototype['index'] = undefined;
  /**
   * @member {String} assigned_to
   */
  exports.prototype['assigned_to'] = undefined;
  /**
   * @member {String} format
   */
  exports.prototype['format'] = undefined;
  /**
   * @member {Date} due_date
   */
  exports.prototype['due_date'] = undefined;
  /**
   * @member {Array.<module:model/Comment>} comments
   */
  exports.prototype['comments'] = undefined;
  /**
   * @member {Array.<module:model/Viewpoint>} viewpoints
   */
  exports.prototype['viewpoints'] = undefined;



  return exports;
}));


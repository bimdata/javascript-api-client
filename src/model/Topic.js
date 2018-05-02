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
    define(['ApiClient', 'model/BimSnippet', 'model/Label', 'model/Priority', 'model/ReferenceLink', 'model/Stage', 'model/TopicAction', 'model/TopicStatus', 'model/TopicType', 'model/User'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BimSnippet'), require('./Label'), require('./Priority'), require('./ReferenceLink'), require('./Stage'), require('./TopicAction'), require('./TopicStatus'), require('./TopicType'), require('./User'));
  } else {
    // Browser globals (root is window)
    if (!root.bimdata) {
      root.bimdata = {};
    }
    root.bimdata.Topic = factory(root.bimdata.ApiClient, root.bimdata.BimSnippet, root.bimdata.Label, root.bimdata.Priority, root.bimdata.ReferenceLink, root.bimdata.Stage, root.bimdata.TopicAction, root.bimdata.TopicStatus, root.bimdata.TopicType, root.bimdata.User);
  }
}(this, function(ApiClient, BimSnippet, Label, Priority, ReferenceLink, Stage, TopicAction, TopicStatus, TopicType, User) {
  'use strict';




  /**
   * The Topic model module.
   * @module model/Topic
   * @version 1.0.2
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
        obj['topic_type'] = TopicType.constructFromObject(data['topic_type']);
      }
      if (data.hasOwnProperty('topic_status')) {
        obj['topic_status'] = TopicStatus.constructFromObject(data['topic_status']);
      }
      if (data.hasOwnProperty('reference_links')) {
        obj['reference_links'] = ApiClient.convertToType(data['reference_links'], [ReferenceLink]);
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('priority')) {
        obj['priority'] = Priority.constructFromObject(data['priority']);
      }
      if (data.hasOwnProperty('index')) {
        obj['index'] = ApiClient.convertToType(data['index'], 'Number');
      }
      if (data.hasOwnProperty('labels')) {
        obj['labels'] = ApiClient.convertToType(data['labels'], [Label]);
      }
      if (data.hasOwnProperty('creation_date')) {
        obj['creation_date'] = ApiClient.convertToType(data['creation_date'], 'Date');
      }
      if (data.hasOwnProperty('creation_author')) {
        obj['creation_author'] = User.constructFromObject(data['creation_author']);
      }
      if (data.hasOwnProperty('modified_date')) {
        obj['modified_date'] = ApiClient.convertToType(data['modified_date'], 'Date');
      }
      if (data.hasOwnProperty('modified_author')) {
        obj['modified_author'] = User.constructFromObject(data['modified_author']);
      }
      if (data.hasOwnProperty('assigned_to')) {
        obj['assigned_to'] = User.constructFromObject(data['assigned_to']);
      }
      if (data.hasOwnProperty('stage')) {
        obj['stage'] = Stage.constructFromObject(data['stage']);
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('bim_snippet')) {
        obj['bim_snippet'] = BimSnippet.constructFromObject(data['bim_snippet']);
      }
      if (data.hasOwnProperty('due_date')) {
        obj['due_date'] = ApiClient.convertToType(data['due_date'], 'Date');
      }
      if (data.hasOwnProperty('autorization_topic_actions')) {
        obj['autorization_topic_actions'] = ApiClient.convertToType(data['autorization_topic_actions'], [TopicAction]);
      }
      if (data.hasOwnProperty('autorization_topic_status')) {
        obj['autorization_topic_status'] = ApiClient.convertToType(data['autorization_topic_status'], [TopicStatus]);
      }
      if (data.hasOwnProperty('bcf_project_id')) {
        obj['bcf_project_id'] = ApiClient.convertToType(data['bcf_project_id'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} guid
   */
  exports.prototype['guid'] = undefined;
  /**
   * @member {module:model/TopicType} topic_type
   */
  exports.prototype['topic_type'] = undefined;
  /**
   * @member {module:model/TopicStatus} topic_status
   */
  exports.prototype['topic_status'] = undefined;
  /**
   * @member {Array.<module:model/ReferenceLink>} reference_links
   */
  exports.prototype['reference_links'] = undefined;
  /**
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * @member {module:model/Priority} priority
   */
  exports.prototype['priority'] = undefined;
  /**
   * @member {Number} index
   */
  exports.prototype['index'] = undefined;
  /**
   * @member {Array.<module:model/Label>} labels
   */
  exports.prototype['labels'] = undefined;
  /**
   * @member {Date} creation_date
   */
  exports.prototype['creation_date'] = undefined;
  /**
   * @member {module:model/User} creation_author
   */
  exports.prototype['creation_author'] = undefined;
  /**
   * @member {Date} modified_date
   */
  exports.prototype['modified_date'] = undefined;
  /**
   * @member {module:model/User} modified_author
   */
  exports.prototype['modified_author'] = undefined;
  /**
   * @member {module:model/User} assigned_to
   */
  exports.prototype['assigned_to'] = undefined;
  /**
   * @member {module:model/Stage} stage
   */
  exports.prototype['stage'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {module:model/BimSnippet} bim_snippet
   */
  exports.prototype['bim_snippet'] = undefined;
  /**
   * @member {Date} due_date
   */
  exports.prototype['due_date'] = undefined;
  /**
   * @member {Array.<module:model/TopicAction>} autorization_topic_actions
   */
  exports.prototype['autorization_topic_actions'] = undefined;
  /**
   * @member {Array.<module:model/TopicStatus>} autorization_topic_status
   */
  exports.prototype['autorization_topic_status'] = undefined;
  /**
   * @member {Number} bcf_project_id
   */
  exports.prototype['bcf_project_id'] = undefined;



  return exports;
}));



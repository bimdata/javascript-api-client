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
    define(['ApiClient', 'model/EventAction', 'model/User'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EventAction'), require('./User'));
  } else {
    // Browser globals (root is window)
    if (!root.bimdata) {
      root.bimdata = {};
    }
    root.bimdata.CommentEvent = factory(root.bimdata.ApiClient, root.bimdata.EventAction, root.bimdata.User);
  }
}(this, function(ApiClient, EventAction, User) {
  'use strict';




  /**
   * The CommentEvent model module.
   * @module model/CommentEvent
   * @version 1.0.9
   */

  /**
   * Constructs a new <code>CommentEvent</code>.
   * @alias module:model/CommentEvent
   * @class
   * @param commentGuid {String} 
   * @param topicGuid {String} 
   * @param author {module:model/User} 
   * @param actions {Array.<module:model/EventAction>} 
   */
  var exports = function(commentGuid, topicGuid, author, actions) {
    var _this = this;

    _this['comment_guid'] = commentGuid;
    _this['topic_guid'] = topicGuid;

    _this['author'] = author;
    _this['actions'] = actions;
  };

  /**
   * Constructs a <code>CommentEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CommentEvent} obj Optional instance to populate.
   * @return {module:model/CommentEvent} The populated <code>CommentEvent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('comment_guid')) {
        obj['comment_guid'] = ApiClient.convertToType(data['comment_guid'], 'String');
      }
      if (data.hasOwnProperty('topic_guid')) {
        obj['topic_guid'] = ApiClient.convertToType(data['topic_guid'], 'String');
      }
      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'Date');
      }
      if (data.hasOwnProperty('author')) {
        obj['author'] = User.constructFromObject(data['author']);
      }
      if (data.hasOwnProperty('actions')) {
        obj['actions'] = ApiClient.convertToType(data['actions'], [EventAction]);
      }
    }
    return obj;
  }

  /**
   * @member {String} comment_guid
   */
  exports.prototype['comment_guid'] = undefined;
  /**
   * @member {String} topic_guid
   */
  exports.prototype['topic_guid'] = undefined;
  /**
   * @member {Date} date
   */
  exports.prototype['date'] = undefined;
  /**
   * @member {module:model/User} author
   */
  exports.prototype['author'] = undefined;
  /**
   * @member {Array.<module:model/EventAction>} actions
   */
  exports.prototype['actions'] = undefined;



  return exports;
}));



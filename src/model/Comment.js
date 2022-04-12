/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1 (v1)
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Comment model module.
 * @module model/Comment
 * @version 0.0.0
 */
class Comment {
    /**
     * Constructs a new <code>Comment</code>.
     * @alias module:model/Comment
     * @param topicGuid {String} 
     * @param modifiedDate {Date} 
     */
    constructor(topicGuid, modifiedDate) { 
        
        Comment.initialize(this, topicGuid, modifiedDate);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, topicGuid, modifiedDate) { 
        obj['topic_guid'] = topicGuid;
        obj['modified_date'] = modifiedDate;
    }

    /**
     * Constructs a <code>Comment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Comment} obj Optional instance to populate.
     * @return {module:model/Comment} The populated <code>Comment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Comment();

            if (data.hasOwnProperty('guid')) {
                obj['guid'] = ApiClient.convertToType(data['guid'], 'String');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('author')) {
                obj['author'] = ApiClient.convertToType(data['author'], 'String');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('viewpoint_guid')) {
                obj['viewpoint_guid'] = ApiClient.convertToType(data['viewpoint_guid'], 'String');
            }
            if (data.hasOwnProperty('reply_to_comment_guid')) {
                obj['reply_to_comment_guid'] = ApiClient.convertToType(data['reply_to_comment_guid'], 'String');
            }
            if (data.hasOwnProperty('topic_guid')) {
                obj['topic_guid'] = ApiClient.convertToType(data['topic_guid'], 'String');
            }
            if (data.hasOwnProperty('modified_author')) {
                obj['modified_author'] = ApiClient.convertToType(data['modified_author'], 'String');
            }
            if (data.hasOwnProperty('modified_date')) {
                obj['modified_date'] = ApiClient.convertToType(data['modified_date'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {String} guid
 */
Comment.prototype['guid'] = undefined;

/**
 * @member {Date} date
 */
Comment.prototype['date'] = undefined;

/**
 * @member {String} author
 */
Comment.prototype['author'] = undefined;

/**
 * @member {String} comment
 */
Comment.prototype['comment'] = undefined;

/**
 * @member {String} viewpoint_guid
 */
Comment.prototype['viewpoint_guid'] = undefined;

/**
 * @member {String} reply_to_comment_guid
 */
Comment.prototype['reply_to_comment_guid'] = undefined;

/**
 * @member {String} topic_guid
 */
Comment.prototype['topic_guid'] = undefined;

/**
 * @member {String} modified_author
 */
Comment.prototype['modified_author'] = undefined;

/**
 * @member {Date} modified_date
 */
Comment.prototype['modified_date'] = undefined;






export default Comment;


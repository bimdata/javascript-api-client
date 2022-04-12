/**
 * BIMData API
 * BIMData API is a tool to interact with your models stored on BIMData’s servers.     Through the API, you can manage your projects, the clouds, upload your IFC files and manage them through endpoints.
 *
 * The version of the OpenAPI document: v1 (v1)
 * Contact: support@bimdata.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Comment from './Comment';
import Viewpoint from './Viewpoint';

/**
 * The FullTopic model module.
 * @module model/FullTopic
 * @version 0.0.0
 */
class FullTopic {
    /**
     * Constructs a new <code>FullTopic</code>.
     * @alias module:model/FullTopic
     * @param modifiedDate {Date} 
     * @param title {String} 
     * @param project {Number} 
     */
    constructor(modifiedDate, title, project) { 
        
        FullTopic.initialize(this, modifiedDate, title, project);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, modifiedDate, title, project) { 
        obj['modified_date'] = modifiedDate;
        obj['title'] = title;
        obj['project'] = project;
    }

    /**
     * Constructs a <code>FullTopic</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FullTopic} obj Optional instance to populate.
     * @return {module:model/FullTopic} The populated <code>FullTopic</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FullTopic();

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
            if (data.hasOwnProperty('models')) {
                obj['models'] = ApiClient.convertToType(data['models'], ['Number']);
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
            if (data.hasOwnProperty('project')) {
                obj['project'] = ApiClient.convertToType(data['project'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} guid
 */
FullTopic.prototype['guid'] = undefined;

/**
 * @member {Date} creation_date
 */
FullTopic.prototype['creation_date'] = undefined;

/**
 * @member {String} creation_author
 */
FullTopic.prototype['creation_author'] = undefined;

/**
 * @member {Date} modified_date
 */
FullTopic.prototype['modified_date'] = undefined;

/**
 * @member {String} modified_author
 */
FullTopic.prototype['modified_author'] = undefined;

/**
 * @member {String} title
 */
FullTopic.prototype['title'] = undefined;

/**
 * @member {String} description
 */
FullTopic.prototype['description'] = undefined;

/**
 * @member {Array.<String>} reference_links
 */
FullTopic.prototype['reference_links'] = undefined;

/**
 * DEPRECATED: Use 'models' instead
 * @member {Array.<Number>} ifcs
 */
FullTopic.prototype['ifcs'] = undefined;

/**
 * @member {Array.<Number>} models
 */
FullTopic.prototype['models'] = undefined;

/**
 * @member {Array.<String>} labels
 */
FullTopic.prototype['labels'] = undefined;

/**
 * @member {String} topic_type
 */
FullTopic.prototype['topic_type'] = undefined;

/**
 * @member {String} topic_status
 */
FullTopic.prototype['topic_status'] = undefined;

/**
 * @member {String} stage
 */
FullTopic.prototype['stage'] = undefined;

/**
 * @member {String} priority
 */
FullTopic.prototype['priority'] = undefined;

/**
 * @member {Number} index
 */
FullTopic.prototype['index'] = undefined;

/**
 * @member {String} assigned_to
 */
FullTopic.prototype['assigned_to'] = undefined;

/**
 * @member {String} format
 */
FullTopic.prototype['format'] = undefined;

/**
 * @member {Date} due_date
 */
FullTopic.prototype['due_date'] = undefined;

/**
 * @member {Array.<module:model/Comment>} comments
 */
FullTopic.prototype['comments'] = undefined;

/**
 * @member {Array.<module:model/Viewpoint>} viewpoints
 */
FullTopic.prototype['viewpoints'] = undefined;

/**
 * @member {Number} project
 */
FullTopic.prototype['project'] = undefined;






export default FullTopic;


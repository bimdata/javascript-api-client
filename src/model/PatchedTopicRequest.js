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

/**
 * The PatchedTopicRequest model module.
 * @module model/PatchedTopicRequest
 * @version 0.0.0
 */
class PatchedTopicRequest {
    /**
     * Constructs a new <code>PatchedTopicRequest</code>.
     * @alias module:model/PatchedTopicRequest
     */
    constructor() { 
        
        PatchedTopicRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PatchedTopicRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PatchedTopicRequest} obj Optional instance to populate.
     * @return {module:model/PatchedTopicRequest} The populated <code>PatchedTopicRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PatchedTopicRequest();

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
            if (data.hasOwnProperty('models')) {
                obj['models'] = ApiClient.convertToType(data['models'], ['Number']);
            }
            if (data.hasOwnProperty('format')) {
                obj['format'] = ApiClient.convertToType(data['format'], 'String');
            }
            if (data.hasOwnProperty('index')) {
                obj['index'] = ApiClient.convertToType(data['index'], 'Number');
            }
            if (data.hasOwnProperty('bimdata_viewer_layout')) {
                obj['bimdata_viewer_layout'] = ApiClient.convertToType(data['bimdata_viewer_layout'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {String} guid
 */
PatchedTopicRequest.prototype['guid'] = undefined;

/**
 * @member {String} topic_type
 */
PatchedTopicRequest.prototype['topic_type'] = undefined;

/**
 * @member {String} topic_status
 */
PatchedTopicRequest.prototype['topic_status'] = undefined;

/**
 * @member {String} title
 */
PatchedTopicRequest.prototype['title'] = undefined;

/**
 * @member {String} priority
 */
PatchedTopicRequest.prototype['priority'] = undefined;

/**
 * @member {Array.<String>} labels
 */
PatchedTopicRequest.prototype['labels'] = undefined;

/**
 * @member {Date} creation_date
 */
PatchedTopicRequest.prototype['creation_date'] = undefined;

/**
 * @member {String} creation_author
 */
PatchedTopicRequest.prototype['creation_author'] = undefined;

/**
 * @member {String} modified_author
 */
PatchedTopicRequest.prototype['modified_author'] = undefined;

/**
 * @member {String} assigned_to
 */
PatchedTopicRequest.prototype['assigned_to'] = undefined;

/**
 * @member {Array.<String>} reference_links
 */
PatchedTopicRequest.prototype['reference_links'] = undefined;

/**
 * @member {String} stage
 */
PatchedTopicRequest.prototype['stage'] = undefined;

/**
 * @member {String} description
 */
PatchedTopicRequest.prototype['description'] = undefined;

/**
 * @member {Date} due_date
 */
PatchedTopicRequest.prototype['due_date'] = undefined;

/**
 * DEPRECATED: Use 'models' instead
 * @member {Array.<Number>} ifcs
 */
PatchedTopicRequest.prototype['ifcs'] = undefined;

/**
 * @member {Array.<Number>} models
 */
PatchedTopicRequest.prototype['models'] = undefined;

/**
 *          The BCF data structure may be used for other purposes than BCF Topics. (Storing coordinates, a viewpoint, a list of objecs, etc)         The default value is \"standard\".         If you want to use the BCF routes to store custom data not related to a BCF Topic, you must set this value to something else.         You must add a query string filter if you want to fetch topics with a non \"standard\" format.         
 * @member {String} format
 */
PatchedTopicRequest.prototype['format'] = undefined;

/**
 * @member {Number} index
 */
PatchedTopicRequest.prototype['index'] = undefined;

/**
 * Non standard field. JSON describing bimdataViewerLayout.
 * @member {Object} bimdata_viewer_layout
 */
PatchedTopicRequest.prototype['bimdata_viewer_layout'] = undefined;






export default PatchedTopicRequest;


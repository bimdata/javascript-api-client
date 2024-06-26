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
 * The TopicType model module.
 * @module model/TopicType
 * @version 0.0.0
 */
class TopicType {
    /**
     * Constructs a new <code>TopicType</code>.
     * @alias module:model/TopicType
     * @param id {Number} 
     * @param topicType {String} 
     */
    constructor(id, topicType) { 
        
        TopicType.initialize(this, id, topicType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, topicType) { 
        obj['id'] = id;
        obj['topic_type'] = topicType;
    }

    /**
     * Constructs a <code>TopicType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TopicType} obj Optional instance to populate.
     * @return {module:model/TopicType} The populated <code>TopicType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TopicType();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('topic_type')) {
                obj['topic_type'] = ApiClient.convertToType(data['topic_type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
TopicType.prototype['id'] = undefined;

/**
 * @member {String} topic_type
 */
TopicType.prototype['topic_type'] = undefined;






export default TopicType;


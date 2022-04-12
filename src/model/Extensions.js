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
 * The Extensions model module.
 * @module model/Extensions
 * @version 0.0.0
 */
class Extensions {
    /**
     * Constructs a new <code>Extensions</code>.
     * @alias module:model/Extensions
     * @param topicType {Array.<String>} 
     * @param topicStatus {Array.<String>} 
     * @param topicLabel {Array.<String>} 
     * @param priority {Array.<String>} 
     * @param stage {Array.<String>} 
     * @param userIdType {Array.<String>} 
     * @param priorityColors {Array.<String>} Non standard field. Arrays of priorities and this array are in the same order.
     * @param topicStatusColors {Array.<String>} Non standard field. Arrays of statuses and this array are in the same order.
     */
    constructor(topicType, topicStatus, topicLabel, priority, stage, userIdType, priorityColors, topicStatusColors) { 
        
        Extensions.initialize(this, topicType, topicStatus, topicLabel, priority, stage, userIdType, priorityColors, topicStatusColors);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, topicType, topicStatus, topicLabel, priority, stage, userIdType, priorityColors, topicStatusColors) { 
        obj['topic_type'] = topicType;
        obj['topic_status'] = topicStatus;
        obj['topic_label'] = topicLabel;
        obj['priority'] = priority;
        obj['stage'] = stage;
        obj['user_id_type'] = userIdType;
        obj['priority_colors'] = priorityColors;
        obj['topic_status_colors'] = topicStatusColors;
    }

    /**
     * Constructs a <code>Extensions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Extensions} obj Optional instance to populate.
     * @return {module:model/Extensions} The populated <code>Extensions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Extensions();

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
            if (data.hasOwnProperty('stage')) {
                obj['stage'] = ApiClient.convertToType(data['stage'], ['String']);
            }
            if (data.hasOwnProperty('user_id_type')) {
                obj['user_id_type'] = ApiClient.convertToType(data['user_id_type'], ['String']);
            }
            if (data.hasOwnProperty('priority_colors')) {
                obj['priority_colors'] = ApiClient.convertToType(data['priority_colors'], ['String']);
            }
            if (data.hasOwnProperty('topic_status_colors')) {
                obj['topic_status_colors'] = ApiClient.convertToType(data['topic_status_colors'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} topic_type
 */
Extensions.prototype['topic_type'] = undefined;

/**
 * @member {Array.<String>} topic_status
 */
Extensions.prototype['topic_status'] = undefined;

/**
 * @member {Array.<String>} topic_label
 */
Extensions.prototype['topic_label'] = undefined;

/**
 * @member {Array.<String>} priority
 */
Extensions.prototype['priority'] = undefined;

/**
 * @member {Array.<String>} stage
 */
Extensions.prototype['stage'] = undefined;

/**
 * @member {Array.<String>} user_id_type
 */
Extensions.prototype['user_id_type'] = undefined;

/**
 * Non standard field. Arrays of priorities and this array are in the same order.
 * @member {Array.<String>} priority_colors
 */
Extensions.prototype['priority_colors'] = undefined;

/**
 * Non standard field. Arrays of statuses and this array are in the same order.
 * @member {Array.<String>} topic_status_colors
 */
Extensions.prototype['topic_status_colors'] = undefined;






export default Extensions;


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
import Label from './Label';
import Priority from './Priority';
import Stage from './Stage';
import TopicStatus from './TopicStatus';
import TopicType from './TopicType';

/**
 * The DetailedExtensions model module.
 * @module model/DetailedExtensions
 * @version 0.0.0
 */
class DetailedExtensions {
    /**
     * Constructs a new <code>DetailedExtensions</code>.
     * @alias module:model/DetailedExtensions
     */
    constructor() { 
        
        DetailedExtensions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DetailedExtensions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DetailedExtensions} obj Optional instance to populate.
     * @return {module:model/DetailedExtensions} The populated <code>DetailedExtensions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DetailedExtensions();

            if (data.hasOwnProperty('topic_labels')) {
                obj['topic_labels'] = ApiClient.convertToType(data['topic_labels'], [Label]);
            }
            if (data.hasOwnProperty('topic_types')) {
                obj['topic_types'] = ApiClient.convertToType(data['topic_types'], [TopicType]);
            }
            if (data.hasOwnProperty('topic_statuses')) {
                obj['topic_statuses'] = ApiClient.convertToType(data['topic_statuses'], [TopicStatus]);
            }
            if (data.hasOwnProperty('priorities')) {
                obj['priorities'] = ApiClient.convertToType(data['priorities'], [Priority]);
            }
            if (data.hasOwnProperty('stages')) {
                obj['stages'] = ApiClient.convertToType(data['stages'], [Stage]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/Label>} topic_labels
 */
DetailedExtensions.prototype['topic_labels'] = undefined;

/**
 * @member {Array.<module:model/TopicType>} topic_types
 */
DetailedExtensions.prototype['topic_types'] = undefined;

/**
 * @member {Array.<module:model/TopicStatus>} topic_statuses
 */
DetailedExtensions.prototype['topic_statuses'] = undefined;

/**
 * @member {Array.<module:model/Priority>} priorities
 */
DetailedExtensions.prototype['priorities'] = undefined;

/**
 * @member {Array.<module:model/Stage>} stages
 */
DetailedExtensions.prototype['stages'] = undefined;






export default DetailedExtensions;


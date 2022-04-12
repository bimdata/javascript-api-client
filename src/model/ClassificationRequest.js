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
 * The ClassificationRequest model module.
 * @module model/ClassificationRequest
 * @version 0.0.0
 */
class ClassificationRequest {
    /**
     * Constructs a new <code>ClassificationRequest</code>.
     * @alias module:model/ClassificationRequest
     */
    constructor() { 
        
        ClassificationRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ClassificationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ClassificationRequest} obj Optional instance to populate.
     * @return {module:model/ClassificationRequest} The populated <code>ClassificationRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ClassificationRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('notation')) {
                obj['notation'] = ApiClient.convertToType(data['notation'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Name of the classification (uniformat, Untec, custom, etc)
 * @member {String} name
 */
ClassificationRequest.prototype['name'] = undefined;

/**
 * Code of the classification
 * @member {String} notation
 */
ClassificationRequest.prototype['notation'] = undefined;

/**
 * Full title of the classification
 * @member {String} title
 */
ClassificationRequest.prototype['title'] = undefined;






export default ClassificationRequest;


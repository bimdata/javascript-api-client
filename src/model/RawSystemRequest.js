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
 * The RawSystemRequest model module.
 * @module model/RawSystemRequest
 * @version 0.0.0
 */
class RawSystemRequest {
    /**
     * Constructs a new <code>RawSystemRequest</code>.
     * @alias module:model/RawSystemRequest
     * @param uuid {String} 
     */
    constructor(uuid) { 
        
        RawSystemRequest.initialize(this, uuid);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, uuid) { 
        obj['uuid'] = uuid;
    }

    /**
     * Constructs a <code>RawSystemRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RawSystemRequest} obj Optional instance to populate.
     * @return {module:model/RawSystemRequest} The populated <code>RawSystemRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RawSystemRequest();

            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('object_type')) {
                obj['object_type'] = ApiClient.convertToType(data['object_type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} uuid
 */
RawSystemRequest.prototype['uuid'] = undefined;

/**
 * @member {String} name
 */
RawSystemRequest.prototype['name'] = undefined;

/**
 * @member {String} description
 */
RawSystemRequest.prototype['description'] = undefined;

/**
 * @member {String} object_type
 */
RawSystemRequest.prototype['object_type'] = undefined;






export default RawSystemRequest;

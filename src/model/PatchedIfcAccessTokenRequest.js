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
 * The PatchedIfcAccessTokenRequest model module.
 * @module model/PatchedIfcAccessTokenRequest
 * @version 0.0.0
 */
class PatchedIfcAccessTokenRequest {
    /**
     * Constructs a new <code>PatchedIfcAccessTokenRequest</code>.
     * @alias module:model/PatchedIfcAccessTokenRequest
     */
    constructor() { 
        
        PatchedIfcAccessTokenRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PatchedIfcAccessTokenRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PatchedIfcAccessTokenRequest} obj Optional instance to populate.
     * @return {module:model/PatchedIfcAccessTokenRequest} The populated <code>PatchedIfcAccessTokenRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PatchedIfcAccessTokenRequest();

            if (data.hasOwnProperty('read_only')) {
                obj['read_only'] = ApiClient.convertToType(data['read_only'], 'Boolean');
            }
            if (data.hasOwnProperty('expires_at')) {
                obj['expires_at'] = ApiClient.convertToType(data['expires_at'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} read_only
 */
PatchedIfcAccessTokenRequest.prototype['read_only'] = undefined;

/**
 * @member {Date} expires_at
 */
PatchedIfcAccessTokenRequest.prototype['expires_at'] = undefined;






export default PatchedIfcAccessTokenRequest;


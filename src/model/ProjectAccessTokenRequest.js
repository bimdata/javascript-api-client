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
 * The ProjectAccessTokenRequest model module.
 * @module model/ProjectAccessTokenRequest
 * @version 0.0.0
 */
class ProjectAccessTokenRequest {
    /**
     * Constructs a new <code>ProjectAccessTokenRequest</code>.
     * @alias module:model/ProjectAccessTokenRequest
     * @param scopes {Array.<String>} 
     */
    constructor(scopes) { 
        
        ProjectAccessTokenRequest.initialize(this, scopes);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, scopes) { 
        obj['scopes'] = scopes;
    }

    /**
     * Constructs a <code>ProjectAccessTokenRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectAccessTokenRequest} obj Optional instance to populate.
     * @return {module:model/ProjectAccessTokenRequest} The populated <code>ProjectAccessTokenRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProjectAccessTokenRequest();

            if (data.hasOwnProperty('scopes')) {
                obj['scopes'] = ApiClient.convertToType(data['scopes'], ['String']);
            }
            if (data.hasOwnProperty('expires_at')) {
                obj['expires_at'] = ApiClient.convertToType(data['expires_at'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} scopes
 */
ProjectAccessTokenRequest.prototype['scopes'] = undefined;

/**
 * @member {Date} expires_at
 */
ProjectAccessTokenRequest.prototype['expires_at'] = undefined;






export default ProjectAccessTokenRequest;

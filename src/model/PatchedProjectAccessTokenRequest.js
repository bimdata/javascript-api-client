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
 * The PatchedProjectAccessTokenRequest model module.
 * @module model/PatchedProjectAccessTokenRequest
 * @version 0.0.0
 */
class PatchedProjectAccessTokenRequest {
    /**
     * Constructs a new <code>PatchedProjectAccessTokenRequest</code>.
     * @alias module:model/PatchedProjectAccessTokenRequest
     */
    constructor() { 
        
        PatchedProjectAccessTokenRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PatchedProjectAccessTokenRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PatchedProjectAccessTokenRequest} obj Optional instance to populate.
     * @return {module:model/PatchedProjectAccessTokenRequest} The populated <code>PatchedProjectAccessTokenRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PatchedProjectAccessTokenRequest();

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
PatchedProjectAccessTokenRequest.prototype['scopes'] = undefined;

/**
 * @member {Date} expires_at
 */
PatchedProjectAccessTokenRequest.prototype['expires_at'] = undefined;






export default PatchedProjectAccessTokenRequest;


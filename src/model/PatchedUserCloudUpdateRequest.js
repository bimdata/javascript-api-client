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
 * The PatchedUserCloudUpdateRequest model module.
 * @module model/PatchedUserCloudUpdateRequest
 * @version 0.0.0
 */
class PatchedUserCloudUpdateRequest {
    /**
     * Constructs a new <code>PatchedUserCloudUpdateRequest</code>.
     * @alias module:model/PatchedUserCloudUpdateRequest
     */
    constructor() { 
        
        PatchedUserCloudUpdateRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PatchedUserCloudUpdateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PatchedUserCloudUpdateRequest} obj Optional instance to populate.
     * @return {module:model/PatchedUserCloudUpdateRequest} The populated <code>PatchedUserCloudUpdateRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PatchedUserCloudUpdateRequest();

            if (data.hasOwnProperty('cloud_role')) {
                obj['cloud_role'] = ApiClient.convertToType(data['cloud_role'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PatchedUserCloudUpdateRequest.CloudRoleEnum} cloud_role
 */
PatchedUserCloudUpdateRequest.prototype['cloud_role'] = undefined;





/**
 * Allowed values for the <code>cloud_role</code> property.
 * @enum {Number}
 * @readonly
 */
PatchedUserCloudUpdateRequest['CloudRoleEnum'] = {

    /**
     * value: 100
     * @const
     */
    "100": 100,

    /**
     * value: 50
     * @const
     */
    "50": 50
};



export default PatchedUserCloudUpdateRequest;

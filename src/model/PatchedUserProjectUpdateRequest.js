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
 * The PatchedUserProjectUpdateRequest model module.
 * @module model/PatchedUserProjectUpdateRequest
 * @version 0.0.0
 */
class PatchedUserProjectUpdateRequest {
    /**
     * Constructs a new <code>PatchedUserProjectUpdateRequest</code>.
     * @alias module:model/PatchedUserProjectUpdateRequest
     */
    constructor() { 
        
        PatchedUserProjectUpdateRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PatchedUserProjectUpdateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PatchedUserProjectUpdateRequest} obj Optional instance to populate.
     * @return {module:model/PatchedUserProjectUpdateRequest} The populated <code>PatchedUserProjectUpdateRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PatchedUserProjectUpdateRequest();

            if (data.hasOwnProperty('role')) {
                obj['role'] = ApiClient.convertToType(data['role'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * User's role in the project  * `100` - admin * `50` - user * `25` - guest
 * @member {module:model/PatchedUserProjectUpdateRequest.RoleEnum} role
 */
PatchedUserProjectUpdateRequest.prototype['role'] = undefined;





/**
 * Allowed values for the <code>role</code> property.
 * @enum {Number}
 * @readonly
 */
PatchedUserProjectUpdateRequest['RoleEnum'] = {

    /**
     * value: 100
     * @const
     */
    "100": 100,

    /**
     * value: 50
     * @const
     */
    "50": 50,

    /**
     * value: 25
     * @const
     */
    "25": 25
};



export default PatchedUserProjectUpdateRequest;


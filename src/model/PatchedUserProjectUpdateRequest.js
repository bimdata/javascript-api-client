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
import ProjectRoleEnum from './ProjectRoleEnum';

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
                obj['role'] = ApiClient.convertToType(data['role'], ProjectRoleEnum);
            }
        }
        return obj;
    }


}

/**
 * User's role in the project
 * @member {module:model/ProjectRoleEnum} role
 */
PatchedUserProjectUpdateRequest.prototype['role'] = undefined;






export default PatchedUserProjectUpdateRequest;

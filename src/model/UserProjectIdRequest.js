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
 * The UserProjectIdRequest model module.
 * @module model/UserProjectIdRequest
 * @version 0.0.0
 */
class UserProjectIdRequest {
    /**
     * Constructs a new <code>UserProjectIdRequest</code>.
     * @alias module:model/UserProjectIdRequest
     * @param userprojectId {Number} 
     */
    constructor(userprojectId) { 
        
        UserProjectIdRequest.initialize(this, userprojectId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, userprojectId) { 
        obj['userproject_id'] = userprojectId;
    }

    /**
     * Constructs a <code>UserProjectIdRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserProjectIdRequest} obj Optional instance to populate.
     * @return {module:model/UserProjectIdRequest} The populated <code>UserProjectIdRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserProjectIdRequest();

            if (data.hasOwnProperty('userproject_id')) {
                obj['userproject_id'] = ApiClient.convertToType(data['userproject_id'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} userproject_id
 */
UserProjectIdRequest.prototype['userproject_id'] = undefined;






export default UserProjectIdRequest;


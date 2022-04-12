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
import CloudRoleEnum from './CloudRoleEnum';

/**
 * The CloudRole model module.
 * @module model/CloudRole
 * @version 0.0.0
 */
class CloudRole {
    /**
     * Constructs a new <code>CloudRole</code>.
     * @alias module:model/CloudRole
     * @param cloud {Number} 
     */
    constructor(cloud) { 
        
        CloudRole.initialize(this, cloud);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, cloud) { 
        obj['cloud'] = cloud;
    }

    /**
     * Constructs a <code>CloudRole</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CloudRole} obj Optional instance to populate.
     * @return {module:model/CloudRole} The populated <code>CloudRole</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CloudRole();

            if (data.hasOwnProperty('cloud')) {
                obj['cloud'] = ApiClient.convertToType(data['cloud'], 'Number');
            }
            if (data.hasOwnProperty('role')) {
                obj['role'] = ApiClient.convertToType(data['role'], CloudRoleEnum);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} cloud
 */
CloudRole.prototype['cloud'] = undefined;

/**
 * Role of the user in the cloud
 * @member {module:model/CloudRoleEnum} role
 */
CloudRole.prototype['role'] = undefined;






export default CloudRole;


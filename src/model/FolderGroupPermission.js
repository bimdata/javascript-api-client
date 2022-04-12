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
import FolderPermissionEnum from './FolderPermissionEnum';
import Group from './Group';

/**
 * The FolderGroupPermission model module.
 * @module model/FolderGroupPermission
 * @version 0.0.0
 */
class FolderGroupPermission {
    /**
     * Constructs a new <code>FolderGroupPermission</code>.
     * @alias module:model/FolderGroupPermission
     * @param group {module:model/Group} 
     */
    constructor(group) { 
        
        FolderGroupPermission.initialize(this, group);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, group) { 
        obj['group'] = group;
    }

    /**
     * Constructs a <code>FolderGroupPermission</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FolderGroupPermission} obj Optional instance to populate.
     * @return {module:model/FolderGroupPermission} The populated <code>FolderGroupPermission</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FolderGroupPermission();

            if (data.hasOwnProperty('group')) {
                obj['group'] = Group.constructFromObject(data['group']);
            }
            if (data.hasOwnProperty('permission')) {
                obj['permission'] = ApiClient.convertToType(data['permission'], FolderPermissionEnum);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Group} group
 */
FolderGroupPermission.prototype['group'] = undefined;

/**
 * Group's permission for a folder
 * @member {module:model/FolderPermissionEnum} permission
 */
FolderGroupPermission.prototype['permission'] = undefined;






export default FolderGroupPermission;


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

/**
 * The PatchedGroupFolderRequest model module.
 * @module model/PatchedGroupFolderRequest
 * @version 0.0.0
 */
class PatchedGroupFolderRequest {
    /**
     * Constructs a new <code>PatchedGroupFolderRequest</code>.
     * @alias module:model/PatchedGroupFolderRequest
     */
    constructor() { 
        
        PatchedGroupFolderRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PatchedGroupFolderRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PatchedGroupFolderRequest} obj Optional instance to populate.
     * @return {module:model/PatchedGroupFolderRequest} The populated <code>PatchedGroupFolderRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PatchedGroupFolderRequest();

            if (data.hasOwnProperty('permission')) {
                obj['permission'] = ApiClient.convertToType(data['permission'], FolderPermissionEnum);
            }
        }
        return obj;
    }


}

/**
 * Group's permission for a folder
 * @member {module:model/FolderPermissionEnum} permission
 */
PatchedGroupFolderRequest.prototype['permission'] = undefined;






export default PatchedGroupFolderRequest;


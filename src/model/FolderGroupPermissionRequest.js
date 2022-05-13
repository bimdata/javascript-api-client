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
import GroupRequest from './GroupRequest';

/**
 * The FolderGroupPermissionRequest model module.
 * @module model/FolderGroupPermissionRequest
 * @version 0.0.0
 */
class FolderGroupPermissionRequest {
    /**
     * Constructs a new <code>FolderGroupPermissionRequest</code>.
     * @alias module:model/FolderGroupPermissionRequest
     * @param group {module:model/GroupRequest} 
     */
    constructor(group) { 
        
        FolderGroupPermissionRequest.initialize(this, group);
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
     * Constructs a <code>FolderGroupPermissionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FolderGroupPermissionRequest} obj Optional instance to populate.
     * @return {module:model/FolderGroupPermissionRequest} The populated <code>FolderGroupPermissionRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FolderGroupPermissionRequest();

            if (data.hasOwnProperty('group')) {
                obj['group'] = GroupRequest.constructFromObject(data['group']);
            }
            if (data.hasOwnProperty('permission')) {
                obj['permission'] = ApiClient.convertToType(data['permission'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/GroupRequest} group
 */
FolderGroupPermissionRequest.prototype['group'] = undefined;

/**
 * Group's permission for a folder
 * @member {module:model/FolderGroupPermissionRequest.PermissionEnum} permission
 */
FolderGroupPermissionRequest.prototype['permission'] = undefined;





/**
 * Allowed values for the <code>permission</code> property.
 * @enum {Number}
 * @readonly
 */
FolderGroupPermissionRequest['PermissionEnum'] = {

    /**
     * value: 1
     * @const
     */
    "1": 1,

    /**
     * value: 50
     * @const
     */
    "50": 50,

    /**
     * value: 100
     * @const
     */
    "100": 100
};



export default FolderGroupPermissionRequest;

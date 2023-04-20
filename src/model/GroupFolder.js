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
import FolderWithoutChildren from './FolderWithoutChildren';
import Group from './Group';

/**
 * The GroupFolder model module.
 * @module model/GroupFolder
 * @version 0.0.0
 */
class GroupFolder {
    /**
     * Constructs a new <code>GroupFolder</code>.
     * @alias module:model/GroupFolder
     * @param folder {module:model/FolderWithoutChildren} 
     * @param group {module:model/Group} 
     * @param permission {module:model/GroupFolder.PermissionEnum} 
     */
    constructor(folder, group, permission) { 
        
        GroupFolder.initialize(this, folder, group, permission);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, folder, group, permission) { 
        obj['folder'] = folder;
        obj['group'] = group;
        obj['permission'] = permission;
    }

    /**
     * Constructs a <code>GroupFolder</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GroupFolder} obj Optional instance to populate.
     * @return {module:model/GroupFolder} The populated <code>GroupFolder</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GroupFolder();

            if (data.hasOwnProperty('folder')) {
                obj['folder'] = ApiClient.convertToType(data['folder'], FolderWithoutChildren);
            }
            if (data.hasOwnProperty('group')) {
                obj['group'] = ApiClient.convertToType(data['group'], Group);
            }
            if (data.hasOwnProperty('permission')) {
                obj['permission'] = ApiClient.convertToType(data['permission'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/FolderWithoutChildren} folder
 */
GroupFolder.prototype['folder'] = undefined;

/**
 * @member {module:model/Group} group
 */
GroupFolder.prototype['group'] = undefined;

/**
 * @member {module:model/GroupFolder.PermissionEnum} permission
 */
GroupFolder.prototype['permission'] = undefined;





/**
 * Allowed values for the <code>permission</code> property.
 * @enum {Number}
 * @readonly
 */
GroupFolder['PermissionEnum'] = {

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
    "100": 100,

    /**
     * value: null
     * @const
     */
    "null": null
};



export default GroupFolder;


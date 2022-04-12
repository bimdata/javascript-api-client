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
import FolderGroupPermission from './FolderGroupPermission';
import User from './User';

/**
 * The FolderWithoutChildren model module.
 * @module model/FolderWithoutChildren
 * @version 0.0.0
 */
class FolderWithoutChildren {
    /**
     * Constructs a new <code>FolderWithoutChildren</code>.
     * @alias module:model/FolderWithoutChildren
     * @param id {Number} 
     * @param type {String} DEPRECATED: Use 'nature' instead. Value is \"Folder\". It is usefull to parse the tree and discriminate folders and files
     * @param nature {String} Value is \"Folder\". It is usefull to parse the tree and discriminate folders and files
     * @param name {String} Name of the folder
     * @param createdAt {Date} Creation date
     * @param updatedAt {Date} Date of the last update
     * @param createdBy {module:model/User} 
     * @param groupsPermissions {Array.<module:model/FolderGroupPermission>} 
     * @param userPermission {module:model/FolderWithoutChildren.UserPermissionEnum} Aggregate of group user permissions and folder default permission
     */
    constructor(id, type, nature, name, createdAt, updatedAt, createdBy, groupsPermissions, userPermission) { 
        
        FolderWithoutChildren.initialize(this, id, type, nature, name, createdAt, updatedAt, createdBy, groupsPermissions, userPermission);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, type, nature, name, createdAt, updatedAt, createdBy, groupsPermissions, userPermission) { 
        obj['id'] = id;
        obj['type'] = type;
        obj['nature'] = nature;
        obj['name'] = name;
        obj['created_at'] = createdAt;
        obj['updated_at'] = updatedAt;
        obj['created_by'] = createdBy;
        obj['groups_permissions'] = groupsPermissions;
        obj['user_permission'] = userPermission;
    }

    /**
     * Constructs a <code>FolderWithoutChildren</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FolderWithoutChildren} obj Optional instance to populate.
     * @return {module:model/FolderWithoutChildren} The populated <code>FolderWithoutChildren</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FolderWithoutChildren();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('parent_id')) {
                obj['parent_id'] = ApiClient.convertToType(data['parent_id'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('nature')) {
                obj['nature'] = ApiClient.convertToType(data['nature'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('created_by')) {
                obj['created_by'] = ApiClient.convertToType(data['created_by'], User);
            }
            if (data.hasOwnProperty('groups_permissions')) {
                obj['groups_permissions'] = ApiClient.convertToType(data['groups_permissions'], [FolderGroupPermission]);
            }
            if (data.hasOwnProperty('default_permission')) {
                obj['default_permission'] = ApiClient.convertToType(data['default_permission'], 'Number');
            }
            if (data.hasOwnProperty('user_permission')) {
                obj['user_permission'] = ApiClient.convertToType(data['user_permission'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
FolderWithoutChildren.prototype['id'] = undefined;

/**
 * @member {Number} parent_id
 */
FolderWithoutChildren.prototype['parent_id'] = undefined;

/**
 * DEPRECATED: Use 'nature' instead. Value is \"Folder\". It is usefull to parse the tree and discriminate folders and files
 * @member {String} type
 */
FolderWithoutChildren.prototype['type'] = undefined;

/**
 * Value is \"Folder\". It is usefull to parse the tree and discriminate folders and files
 * @member {String} nature
 */
FolderWithoutChildren.prototype['nature'] = undefined;

/**
 * Name of the folder
 * @member {String} name
 */
FolderWithoutChildren.prototype['name'] = undefined;

/**
 * Creation date
 * @member {Date} created_at
 */
FolderWithoutChildren.prototype['created_at'] = undefined;

/**
 * Date of the last update
 * @member {Date} updated_at
 */
FolderWithoutChildren.prototype['updated_at'] = undefined;

/**
 * @member {module:model/User} created_by
 */
FolderWithoutChildren.prototype['created_by'] = undefined;

/**
 * @member {Array.<module:model/FolderGroupPermission>} groups_permissions
 */
FolderWithoutChildren.prototype['groups_permissions'] = undefined;

/**
 * Permission for a Folder
 * @member {module:model/FolderWithoutChildren.DefaultPermissionEnum} default_permission
 */
FolderWithoutChildren.prototype['default_permission'] = undefined;

/**
 * Aggregate of group user permissions and folder default permission
 * @member {module:model/FolderWithoutChildren.UserPermissionEnum} user_permission
 */
FolderWithoutChildren.prototype['user_permission'] = undefined;





/**
 * Allowed values for the <code>default_permission</code> property.
 * @enum {Number}
 * @readonly
 */
FolderWithoutChildren['DefaultPermissionEnum'] = {

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


/**
 * Allowed values for the <code>user_permission</code> property.
 * @enum {Number}
 * @readonly
 */
FolderWithoutChildren['UserPermissionEnum'] = {

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



export default FolderWithoutChildren;


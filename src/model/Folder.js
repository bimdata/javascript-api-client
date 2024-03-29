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
import GroupFolderRead from './GroupFolderRead';
import RecursiveFolderChildren from './RecursiveFolderChildren';
import ShortUser from './ShortUser';

/**
 * The Folder model module.
 * @module model/Folder
 * @version 0.0.0
 */
class Folder {
    /**
     * Constructs a new <code>Folder</code>.
     * @alias module:model/Folder
     * @param id {Number} 
     * @param type {String} DEPRECATED: Use 'nature' instead. Value is \"Folder\". It is usefull to parse the tree and discriminate folders and files
     * @param nature {String} Value is \"Folder\". It is usefull to parse the tree and discriminate folders and files
     * @param name {String} Name of the folder
     * @param createdAt {Date} Creation date
     * @param updatedAt {Date} Date of the last update
     * @param createdBy {module:model/ShortUser} 
     * @param groupsPermissions {Array.<module:model/GroupFolderRead>} List of group permissions
     * @param userPermission {module:model/Folder.UserPermissionEnum} Aggregate of group user permissions and folder default permission
     * @param children {Array.<module:model/RecursiveFolderChildren>} 
     */
    constructor(id, type, nature, name, createdAt, updatedAt, createdBy, groupsPermissions, userPermission, children) { 
        
        Folder.initialize(this, id, type, nature, name, createdAt, updatedAt, createdBy, groupsPermissions, userPermission, children);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, type, nature, name, createdAt, updatedAt, createdBy, groupsPermissions, userPermission, children) { 
        obj['id'] = id;
        obj['type'] = type;
        obj['nature'] = nature;
        obj['name'] = name;
        obj['created_at'] = createdAt;
        obj['updated_at'] = updatedAt;
        obj['created_by'] = createdBy;
        obj['groups_permissions'] = groupsPermissions;
        obj['user_permission'] = userPermission;
        obj['children'] = children;
    }

    /**
     * Constructs a <code>Folder</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Folder} obj Optional instance to populate.
     * @return {module:model/Folder} The populated <code>Folder</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Folder();

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
                obj['created_by'] = ApiClient.convertToType(data['created_by'], ShortUser);
            }
            if (data.hasOwnProperty('groups_permissions')) {
                obj['groups_permissions'] = ApiClient.convertToType(data['groups_permissions'], [GroupFolderRead]);
            }
            if (data.hasOwnProperty('default_permission')) {
                obj['default_permission'] = ApiClient.convertToType(data['default_permission'], 'Number');
            }
            if (data.hasOwnProperty('user_permission')) {
                obj['user_permission'] = ApiClient.convertToType(data['user_permission'], 'Number');
            }
            if (data.hasOwnProperty('children')) {
                obj['children'] = ApiClient.convertToType(data['children'], [RecursiveFolderChildren]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
Folder.prototype['id'] = undefined;

/**
 * @member {Number} parent_id
 */
Folder.prototype['parent_id'] = undefined;

/**
 * DEPRECATED: Use 'nature' instead. Value is \"Folder\". It is usefull to parse the tree and discriminate folders and files
 * @member {String} type
 */
Folder.prototype['type'] = undefined;

/**
 * Value is \"Folder\". It is usefull to parse the tree and discriminate folders and files
 * @member {String} nature
 */
Folder.prototype['nature'] = undefined;

/**
 * Name of the folder
 * @member {String} name
 */
Folder.prototype['name'] = undefined;

/**
 * Creation date
 * @member {Date} created_at
 */
Folder.prototype['created_at'] = undefined;

/**
 * Date of the last update
 * @member {Date} updated_at
 */
Folder.prototype['updated_at'] = undefined;

/**
 * @member {module:model/ShortUser} created_by
 */
Folder.prototype['created_by'] = undefined;

/**
 * List of group permissions
 * @member {Array.<module:model/GroupFolderRead>} groups_permissions
 */
Folder.prototype['groups_permissions'] = undefined;

/**
 * Permission for a Folder  * `1` - denied * `50` - read_only * `100` - read_write
 * @member {module:model/Folder.DefaultPermissionEnum} default_permission
 */
Folder.prototype['default_permission'] = undefined;

/**
 * Aggregate of group user permissions and folder default permission
 * @member {module:model/Folder.UserPermissionEnum} user_permission
 */
Folder.prototype['user_permission'] = undefined;

/**
 * @member {Array.<module:model/RecursiveFolderChildren>} children
 */
Folder.prototype['children'] = undefined;





/**
 * Allowed values for the <code>default_permission</code> property.
 * @enum {Number}
 * @readonly
 */
Folder['DefaultPermissionEnum'] = {

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
Folder['UserPermissionEnum'] = {

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



export default Folder;


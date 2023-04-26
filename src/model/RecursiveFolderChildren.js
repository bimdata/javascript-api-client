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
import ShortUser from './ShortUser';
import Tag from './Tag';

/**
 * The RecursiveFolderChildren model module.
 * @module model/RecursiveFolderChildren
 * @version 0.0.0
 */
class RecursiveFolderChildren {
    /**
     * Constructs a new <code>RecursiveFolderChildren</code>.
     * @alias module:model/RecursiveFolderChildren
     * @param id {Number} 
     * @param parentId {Number} 
     * @param type {module:model/RecursiveFolderChildren.TypeEnum} DEPRECATED: Use 'nature' instead. Values can be 'Folder', 'Document' or 'Ifc'. It is usefull to parse the tree and discriminate folders and files
     * @param nature {module:model/RecursiveFolderChildren.NatureEnum} Values can be 'Folder', 'Document' or 'Model'. It is usefull to parse the tree and discriminate folders and files
     * @param modelType {module:model/RecursiveFolderChildren.ModelTypeEnum} Model's type. Values can be IFC, DWG, DXF, GLTF, PDF, JPEG, PNG, OBJ, POINT_CLOUD
     * @param name {String} 
     * @param createdAt {Date} 
     * @param updatedAt {Date} 
     * @param modelId {Number} 
     * @param ifcId {Number} DEPRECATED: Use 'model_id' instead
     * @param groupsPermissions {Boolean} DEPRECATED: This field must be present because of legacy constraints but will always be empty. If you want to see group permissions of a folder, see `getFolder`
     * @param defaultPermission {module:model/RecursiveFolderChildren.DefaultPermissionEnum} Default permissions of folder
     * @param userPermission {module:model/RecursiveFolderChildren.UserPermissionEnum} Aggregate of group user permissions and folder default permission
     * @param historyCount {Number} Number of previous versions
     * @param tags {Array.<module:model/Tag>} Tags of a document
     */
    constructor(id, parentId, type, nature, modelType, name, createdAt, updatedAt, modelId, ifcId, groupsPermissions, defaultPermission, userPermission, historyCount, tags) { 
        
        RecursiveFolderChildren.initialize(this, id, parentId, type, nature, modelType, name, createdAt, updatedAt, modelId, ifcId, groupsPermissions, defaultPermission, userPermission, historyCount, tags);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, parentId, type, nature, modelType, name, createdAt, updatedAt, modelId, ifcId, groupsPermissions, defaultPermission, userPermission, historyCount, tags) { 
        obj['id'] = id;
        obj['parent_id'] = parentId;
        obj['type'] = type;
        obj['nature'] = nature;
        obj['model_type'] = modelType;
        obj['name'] = name;
        obj['created_at'] = createdAt;
        obj['updated_at'] = updatedAt;
        obj['model_id'] = modelId;
        obj['ifc_id'] = ifcId;
        obj['groups_permissions'] = groupsPermissions;
        obj['default_permission'] = defaultPermission;
        obj['user_permission'] = userPermission;
        obj['history_count'] = historyCount;
        obj['tags'] = tags;
    }

    /**
     * Constructs a <code>RecursiveFolderChildren</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RecursiveFolderChildren} obj Optional instance to populate.
     * @return {module:model/RecursiveFolderChildren} The populated <code>RecursiveFolderChildren</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RecursiveFolderChildren();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('parent_id')) {
                obj['parent_id'] = ApiClient.convertToType(data['parent_id'], 'Number');
            }
            if (data.hasOwnProperty('created_by')) {
                obj['created_by'] = ApiClient.convertToType(data['created_by'], ShortUser);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('nature')) {
                obj['nature'] = ApiClient.convertToType(data['nature'], 'String');
            }
            if (data.hasOwnProperty('model_type')) {
                obj['model_type'] = ApiClient.convertToType(data['model_type'], 'String');
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
            if (data.hasOwnProperty('file_name')) {
                obj['file_name'] = ApiClient.convertToType(data['file_name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('model_id')) {
                obj['model_id'] = ApiClient.convertToType(data['model_id'], 'Number');
            }
            if (data.hasOwnProperty('ifc_id')) {
                obj['ifc_id'] = ApiClient.convertToType(data['ifc_id'], 'Number');
            }
            if (data.hasOwnProperty('file')) {
                obj['file'] = ApiClient.convertToType(data['file'], 'String');
            }
            if (data.hasOwnProperty('office_preview')) {
                obj['office_preview'] = ApiClient.convertToType(data['office_preview'], 'String');
            }
            if (data.hasOwnProperty('groups_permissions')) {
                obj['groups_permissions'] = ApiClient.convertToType(data['groups_permissions'], 'Boolean');
            }
            if (data.hasOwnProperty('default_permission')) {
                obj['default_permission'] = ApiClient.convertToType(data['default_permission'], 'Number');
            }
            if (data.hasOwnProperty('user_permission')) {
                obj['user_permission'] = ApiClient.convertToType(data['user_permission'], 'Number');
            }
            if (data.hasOwnProperty('history_count')) {
                obj['history_count'] = ApiClient.convertToType(data['history_count'], 'Number');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], [Tag]);
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
RecursiveFolderChildren.prototype['id'] = undefined;

/**
 * @member {Number} parent_id
 */
RecursiveFolderChildren.prototype['parent_id'] = undefined;

/**
 * @member {module:model/ShortUser} created_by
 */
RecursiveFolderChildren.prototype['created_by'] = undefined;

/**
 * DEPRECATED: Use 'nature' instead. Values can be 'Folder', 'Document' or 'Ifc'. It is usefull to parse the tree and discriminate folders and files
 * @member {module:model/RecursiveFolderChildren.TypeEnum} type
 */
RecursiveFolderChildren.prototype['type'] = undefined;

/**
 * Values can be 'Folder', 'Document' or 'Model'. It is usefull to parse the tree and discriminate folders and files
 * @member {module:model/RecursiveFolderChildren.NatureEnum} nature
 */
RecursiveFolderChildren.prototype['nature'] = undefined;

/**
 * Model's type. Values can be IFC, DWG, DXF, GLTF, PDF, JPEG, PNG, OBJ, POINT_CLOUD
 * @member {module:model/RecursiveFolderChildren.ModelTypeEnum} model_type
 */
RecursiveFolderChildren.prototype['model_type'] = undefined;

/**
 * @member {String} name
 */
RecursiveFolderChildren.prototype['name'] = undefined;

/**
 * @member {Date} created_at
 */
RecursiveFolderChildren.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
RecursiveFolderChildren.prototype['updated_at'] = undefined;

/**
 * @member {String} file_name
 */
RecursiveFolderChildren.prototype['file_name'] = undefined;

/**
 * @member {String} description
 */
RecursiveFolderChildren.prototype['description'] = undefined;

/**
 * @member {Number} size
 */
RecursiveFolderChildren.prototype['size'] = undefined;

/**
 * @member {Number} model_id
 */
RecursiveFolderChildren.prototype['model_id'] = undefined;

/**
 * DEPRECATED: Use 'model_id' instead
 * @member {Number} ifc_id
 */
RecursiveFolderChildren.prototype['ifc_id'] = undefined;

/**
 * @member {String} file
 */
RecursiveFolderChildren.prototype['file'] = undefined;

/**
 * @member {String} office_preview
 */
RecursiveFolderChildren.prototype['office_preview'] = undefined;

/**
 * DEPRECATED: This field must be present because of legacy constraints but will always be empty. If you want to see group permissions of a folder, see `getFolder`
 * @member {Boolean} groups_permissions
 */
RecursiveFolderChildren.prototype['groups_permissions'] = undefined;

/**
 * Default permissions of folder
 * @member {module:model/RecursiveFolderChildren.DefaultPermissionEnum} default_permission
 */
RecursiveFolderChildren.prototype['default_permission'] = undefined;

/**
 * Aggregate of group user permissions and folder default permission
 * @member {module:model/RecursiveFolderChildren.UserPermissionEnum} user_permission
 */
RecursiveFolderChildren.prototype['user_permission'] = undefined;

/**
 * Number of previous versions
 * @member {Number} history_count
 */
RecursiveFolderChildren.prototype['history_count'] = undefined;

/**
 * Tags of a document
 * @member {Array.<module:model/Tag>} tags
 */
RecursiveFolderChildren.prototype['tags'] = undefined;

/**
 * @member {Array.<module:model/RecursiveFolderChildren>} children
 */
RecursiveFolderChildren.prototype['children'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
RecursiveFolderChildren['TypeEnum'] = {

    /**
     * value: "Folder"
     * @const
     */
    "Folder": "Folder",

    /**
     * value: "Document"
     * @const
     */
    "Document": "Document",

    /**
     * value: "Ifc"
     * @const
     */
    "Ifc": "Ifc"
};


/**
 * Allowed values for the <code>nature</code> property.
 * @enum {String}
 * @readonly
 */
RecursiveFolderChildren['NatureEnum'] = {

    /**
     * value: "Folder"
     * @const
     */
    "Folder": "Folder",

    /**
     * value: "Document"
     * @const
     */
    "Document": "Document",

    /**
     * value: "Model"
     * @const
     */
    "Model": "Model"
};


/**
 * Allowed values for the <code>model_type</code> property.
 * @enum {String}
 * @readonly
 */
RecursiveFolderChildren['ModelTypeEnum'] = {

    /**
     * value: "IFC"
     * @const
     */
    "IFC": "IFC",

    /**
     * value: "DWG"
     * @const
     */
    "DWG": "DWG",

    /**
     * value: "DXF"
     * @const
     */
    "DXF": "DXF",

    /**
     * value: "GLTF"
     * @const
     */
    "GLTF": "GLTF",

    /**
     * value: "PDF"
     * @const
     */
    "PDF": "PDF",

    /**
     * value: "JPEG"
     * @const
     */
    "JPEG": "JPEG",

    /**
     * value: "PNG"
     * @const
     */
    "PNG": "PNG",

    /**
     * value: "OBJ"
     * @const
     */
    "OBJ": "OBJ",

    /**
     * value: "POINT_CLOUD"
     * @const
     */
    "POINT_CLOUD": "POINT_CLOUD",

    /**
     * value: "null"
     * @const
     */
    "null": "null"
};


/**
 * Allowed values for the <code>default_permission</code> property.
 * @enum {Number}
 * @readonly
 */
RecursiveFolderChildren['DefaultPermissionEnum'] = {

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
RecursiveFolderChildren['UserPermissionEnum'] = {

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



export default RecursiveFolderChildren;


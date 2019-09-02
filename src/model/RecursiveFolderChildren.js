/**
 * BIMData API
 * BIMData API is a tool to interact with your models stored on BIMData’s servers.     Through the API, you can manage your projects, the clouds, upload your IFC files and manage them through endpoints.
 *
 * The version of the OpenAPI document: v1
 * Contact: contact@bimdata.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import User from './User';

/**
 * The RecursiveFolderChildren model module.
 * @module model/RecursiveFolderChildren
 * @version v1
 */
class RecursiveFolderChildren {
    /**
     * Constructs a new <code>RecursiveFolderChildren</code>.
     * @alias module:model/RecursiveFolderChildren
     * @param id {Number} 
     * @param parentId {Number} 
     * @param createdBy {module:model/User} 
     * @param creator {module:model/User} 
     * @param name {String} 
     * @param createdAt {Date} 
     * @param updatedAt {Date} 
     * @param children {Array.<module:model/RecursiveFolderChildren>} 
     */
    constructor(id, parentId, createdBy, creator, name, createdAt, updatedAt, children) { 
        
        RecursiveFolderChildren.initialize(this, id, parentId, createdBy, creator, name, createdAt, updatedAt, children);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, parentId, createdBy, creator, name, createdAt, updatedAt, children) { 
        obj['id'] = id;
        obj['parent_id'] = parentId;
        obj['created_by'] = createdBy;
        obj['creator'] = creator;
        obj['name'] = name;
        obj['created_at'] = createdAt;
        obj['updated_at'] = updatedAt;
        obj['children'] = children;
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
                obj['created_by'] = User.constructFromObject(data['created_by']);
            }
            if (data.hasOwnProperty('creator')) {
                obj['creator'] = User.constructFromObject(data['creator']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
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
            if (data.hasOwnProperty('ifc_id')) {
                obj['ifc_id'] = ApiClient.convertToType(data['ifc_id'], 'Number');
            }
            if (data.hasOwnProperty('file')) {
                obj['file'] = ApiClient.convertToType(data['file'], 'String');
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
 * @member {module:model/User} created_by
 */
RecursiveFolderChildren.prototype['created_by'] = undefined;

/**
 * @member {module:model/User} creator
 */
RecursiveFolderChildren.prototype['creator'] = undefined;

/**
 * Values can be 'Folder', 'Document' or 'Ifc'. It is usefull to parse the tree and discriminate folders and files
 * @member {module:model/RecursiveFolderChildren.TypeEnum} type
 */
RecursiveFolderChildren.prototype['type'] = undefined;

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
 * @member {Number} ifc_id
 */
RecursiveFolderChildren.prototype['ifc_id'] = undefined;

/**
 * @member {String} file
 */
RecursiveFolderChildren.prototype['file'] = undefined;

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



export default RecursiveFolderChildren;


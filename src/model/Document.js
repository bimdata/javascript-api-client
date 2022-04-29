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
import Folder from './Folder';
import Tag from './Tag';

/**
 * The Document model module.
 * @module model/Document
 * @version 0.0.0
 */
class Document {
    /**
     * Constructs a new <code>Document</code>.
     * @alias module:model/Document
     * @param id {Number} 
     * @param parent {module:model/Folder} 
     * @param project {Number} 
     * @param name {String} Shown name of the file
     * @param file {String} 
     * @param tags {Array.<module:model/Tag>} 
     * @param createdAt {Date} Creation date
     * @param updatedAt {Date} Date of the last update
     * @param modelId {Number} 
     * @param ifcId {Number} DEPRECATED: Use 'model_id' instead.
     * @param userPermission {module:model/Document.UserPermissionEnum} Aggregate of group user permissions and folder default permission
     */
    constructor(id, parent, project, name, file, tags, createdAt, updatedAt, modelId, ifcId, userPermission) { 
        
        Document.initialize(this, id, parent, project, name, file, tags, createdAt, updatedAt, modelId, ifcId, userPermission);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, parent, project, name, file, tags, createdAt, updatedAt, modelId, ifcId, userPermission) { 
        obj['id'] = id;
        obj['parent'] = parent;
        obj['project'] = project;
        obj['name'] = name;
        obj['file'] = file;
        obj['tags'] = tags;
        obj['created_at'] = createdAt;
        obj['updated_at'] = updatedAt;
        obj['model_id'] = modelId;
        obj['ifc_id'] = ifcId;
        obj['user_permission'] = userPermission;
    }

    /**
     * Constructs a <code>Document</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Document} obj Optional instance to populate.
     * @return {module:model/Document} The populated <code>Document</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Document();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('parent')) {
                obj['parent'] = ApiClient.convertToType(data['parent'], Folder);
            }
            if (data.hasOwnProperty('parent_id')) {
                obj['parent_id'] = ApiClient.convertToType(data['parent_id'], 'Number');
            }
            if (data.hasOwnProperty('creator')) {
                obj['creator'] = ApiClient.convertToType(data['creator'], 'Number');
            }
            if (data.hasOwnProperty('project')) {
                obj['project'] = ApiClient.convertToType(data['project'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('file_name')) {
                obj['file_name'] = ApiClient.convertToType(data['file_name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('file')) {
                obj['file'] = ApiClient.convertToType(data['file'], 'String');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], [Tag]);
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('model_id')) {
                obj['model_id'] = ApiClient.convertToType(data['model_id'], 'Number');
            }
            if (data.hasOwnProperty('ifc_id')) {
                obj['ifc_id'] = ApiClient.convertToType(data['ifc_id'], 'Number');
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
Document.prototype['id'] = undefined;

/**
 * @member {module:model/Folder} parent
 */
Document.prototype['parent'] = undefined;

/**
 * @member {Number} parent_id
 */
Document.prototype['parent_id'] = undefined;

/**
 * @member {Number} creator
 */
Document.prototype['creator'] = undefined;

/**
 * @member {Number} project
 */
Document.prototype['project'] = undefined;

/**
 * Shown name of the file
 * @member {String} name
 */
Document.prototype['name'] = undefined;

/**
 * Full name of the file
 * @member {String} file_name
 */
Document.prototype['file_name'] = undefined;

/**
 * Description of the file
 * @member {String} description
 */
Document.prototype['description'] = undefined;

/**
 * @member {String} file
 */
Document.prototype['file'] = undefined;

/**
 * Size of the file.
 * @member {Number} size
 */
Document.prototype['size'] = undefined;

/**
 * @member {Array.<module:model/Tag>} tags
 */
Document.prototype['tags'] = undefined;

/**
 * Creation date
 * @member {Date} created_at
 */
Document.prototype['created_at'] = undefined;

/**
 * Date of the last update
 * @member {Date} updated_at
 */
Document.prototype['updated_at'] = undefined;

/**
 * @member {Number} model_id
 */
Document.prototype['model_id'] = undefined;

/**
 * DEPRECATED: Use 'model_id' instead.
 * @member {Number} ifc_id
 */
Document.prototype['ifc_id'] = undefined;

/**
 * Aggregate of group user permissions and folder default permission
 * @member {module:model/Document.UserPermissionEnum} user_permission
 */
Document.prototype['user_permission'] = undefined;





/**
 * Allowed values for the <code>user_permission</code> property.
 * @enum {Number}
 * @readonly
 */
Document['UserPermissionEnum'] = {

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



export default Document;


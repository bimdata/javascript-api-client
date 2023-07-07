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
import Tag from './Tag';
import User from './User';
import Visa from './Visa';

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
     * @param createdBy {module:model/User} 
     * @param project {Number} 
     * @param name {String} Shown name of the file
     * @param file {String} 
     * @param size {Number} Size of the file.
     * @param tags {Array.<module:model/Tag>} 
     * @param visas {Array.<module:model/Visa>} 
     * @param createdAt {Date} Creation date
     * @param updatedAt {Date} Date of the last update
     * @param modelId {Number} 
     * @param modelType {module:model/Document.ModelTypeEnum} Model's type. Values can be IFC, DWG, DXF, GLTF, PDF, JPEG, PNG, OBJ, POINT_CLOUD
     * @param ifcId {Number} DEPRECATED: Use 'model_id' instead.
     * @param headId {Number} Document id of head version
     * @param isHeadVersion {Boolean} Document is a head of version or is owned by another document
     * @param userPermission {module:model/Document.UserPermissionEnum} Aggregate of group user permissions and folder default permission
     * @param officePreview {String} Office files will be converted as pdf to provide a web preview. Supported extensions are .ppt, .pptx, .odp, .xls, .xlsx, .ods, .doc, .docx, .odt
     */
    constructor(id, createdBy, project, name, file, size, tags, visas, createdAt, updatedAt, modelId, modelType, ifcId, headId, isHeadVersion, userPermission, officePreview) { 
        
        Document.initialize(this, id, createdBy, project, name, file, size, tags, visas, createdAt, updatedAt, modelId, modelType, ifcId, headId, isHeadVersion, userPermission, officePreview);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, createdBy, project, name, file, size, tags, visas, createdAt, updatedAt, modelId, modelType, ifcId, headId, isHeadVersion, userPermission, officePreview) { 
        obj['id'] = id;
        obj['created_by'] = createdBy;
        obj['project'] = project;
        obj['name'] = name;
        obj['file'] = file;
        obj['size'] = size;
        obj['tags'] = tags;
        obj['visas'] = visas;
        obj['created_at'] = createdAt;
        obj['updated_at'] = updatedAt;
        obj['model_id'] = modelId;
        obj['model_type'] = modelType;
        obj['ifc_id'] = ifcId;
        obj['head_id'] = headId;
        obj['is_head_version'] = isHeadVersion;
        obj['user_permission'] = userPermission;
        obj['office_preview'] = officePreview;
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
            if (data.hasOwnProperty('parent_id')) {
                obj['parent_id'] = ApiClient.convertToType(data['parent_id'], 'Number');
            }
            if (data.hasOwnProperty('created_by')) {
                obj['created_by'] = ApiClient.convertToType(data['created_by'], User);
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
            if (data.hasOwnProperty('visas')) {
                obj['visas'] = ApiClient.convertToType(data['visas'], [Visa]);
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
            if (data.hasOwnProperty('model_type')) {
                obj['model_type'] = ApiClient.convertToType(data['model_type'], 'String');
            }
            if (data.hasOwnProperty('ifc_id')) {
                obj['ifc_id'] = ApiClient.convertToType(data['ifc_id'], 'Number');
            }
            if (data.hasOwnProperty('head_id')) {
                obj['head_id'] = ApiClient.convertToType(data['head_id'], 'Number');
            }
            if (data.hasOwnProperty('is_head_version')) {
                obj['is_head_version'] = ApiClient.convertToType(data['is_head_version'], 'Boolean');
            }
            if (data.hasOwnProperty('user_permission')) {
                obj['user_permission'] = ApiClient.convertToType(data['user_permission'], 'Number');
            }
            if (data.hasOwnProperty('office_preview')) {
                obj['office_preview'] = ApiClient.convertToType(data['office_preview'], 'String');
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
 * @member {Number} parent_id
 */
Document.prototype['parent_id'] = undefined;

/**
 * @member {module:model/User} created_by
 */
Document.prototype['created_by'] = undefined;

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
 * @member {Array.<module:model/Visa>} visas
 */
Document.prototype['visas'] = undefined;

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
 * Model's type. Values can be IFC, DWG, DXF, GLTF, PDF, JPEG, PNG, OBJ, POINT_CLOUD
 * @member {module:model/Document.ModelTypeEnum} model_type
 */
Document.prototype['model_type'] = undefined;

/**
 * DEPRECATED: Use 'model_id' instead.
 * @member {Number} ifc_id
 */
Document.prototype['ifc_id'] = undefined;

/**
 * Document id of head version
 * @member {Number} head_id
 */
Document.prototype['head_id'] = undefined;

/**
 * Document is a head of version or is owned by another document
 * @member {Boolean} is_head_version
 */
Document.prototype['is_head_version'] = undefined;

/**
 * Aggregate of group user permissions and folder default permission
 * @member {module:model/Document.UserPermissionEnum} user_permission
 */
Document.prototype['user_permission'] = undefined;

/**
 * Office files will be converted as pdf to provide a web preview. Supported extensions are .ppt, .pptx, .odp, .xls, .xlsx, .ods, .doc, .docx, .odt
 * @member {String} office_preview
 */
Document.prototype['office_preview'] = undefined;





/**
 * Allowed values for the <code>model_type</code> property.
 * @enum {String}
 * @readonly
 */
Document['ModelTypeEnum'] = {

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


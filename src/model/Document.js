/**
 * BIMData API
 * BIMData API is a tool to interact with your models stored on BIMData’s servers.     Through the API, you can manage your projects, the clouds, upload your IFC files and manage them through endpoints.
 *
 * The version of the OpenAPI document: v1
 * Contact: support@bimdata.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Document model module.
 * @module model/Document
 * @version 0.0.0
 */
class Document {
    /**
     * Constructs a new <code>Document</code>.
     * @alias module:model/Document
     * @param name {String} Shown name of the file
     */
    constructor(name) { 
        
        Document.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
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
                obj['parent'] = ApiClient.convertToType(data['parent'], 'Number');
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
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('ifc_source')) {
                obj['ifc_source'] = ApiClient.convertToType(data['ifc_source'], 'String');
            }
            if (data.hasOwnProperty('ifc_id')) {
                obj['ifc_id'] = ApiClient.convertToType(data['ifc_id'], 'String');
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
 * @member {Number} parent
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
 * Define the ifc.source field if the upload is an IFC
 * @member {module:model/Document.IfcSourceEnum} ifc_source
 */
Document.prototype['ifc_source'] = undefined;

/**
 * @member {String} ifc_id
 */
Document.prototype['ifc_id'] = undefined;

/**
 * Aggregate of group user permissions and folder default permission
 * @member {Number} user_permission
 */
Document.prototype['user_permission'] = undefined;





/**
 * Allowed values for the <code>ifc_source</code> property.
 * @enum {String}
 * @readonly
 */
Document['IfcSourceEnum'] = {

    /**
     * value: "UPLOAD"
     * @const
     */
    "UPLOAD": "UPLOAD",

    /**
     * value: "SPLIT"
     * @const
     */
    "SPLIT": "SPLIT",

    /**
     * value: "MERGE"
     * @const
     */
    "MERGE": "MERGE",

    /**
     * value: "EXPORT"
     * @const
     */
    "EXPORT": "EXPORT",

    /**
     * value: "OPTIMIZED"
     * @const
     */
    "OPTIMIZED": "OPTIMIZED"
};



export default Document;


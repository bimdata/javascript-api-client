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
import ModelSourceEnum from './ModelSourceEnum';

/**
 * The DocumentRequest model module.
 * @module model/DocumentRequest
 * @version 0.0.0
 */
class DocumentRequest {
    /**
     * Constructs a new <code>DocumentRequest</code>.
     * @alias module:model/DocumentRequest
     * @param name {String} Shown name of the file
     * @param file {File} 
     */
    constructor(name, file) { 
        
        DocumentRequest.initialize(this, name, file);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, file) { 
        obj['name'] = name;
        obj['file'] = file;
    }

    /**
     * Constructs a <code>DocumentRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DocumentRequest} obj Optional instance to populate.
     * @return {module:model/DocumentRequest} The populated <code>DocumentRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DocumentRequest();

            if (data.hasOwnProperty('parent')) {
                obj['parent'] = ApiClient.convertToType(data['parent'], 'Number');
            }
            if (data.hasOwnProperty('parent_id')) {
                obj['parent_id'] = ApiClient.convertToType(data['parent_id'], 'Number');
            }
            if (data.hasOwnProperty('creator')) {
                obj['creator'] = ApiClient.convertToType(data['creator'], 'Number');
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
                obj['file'] = ApiClient.convertToType(data['file'], File);
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('model_source')) {
                obj['model_source'] = ApiClient.convertToType(data['model_source'], ModelSourceEnum);
            }
            if (data.hasOwnProperty('ifc_source')) {
                obj['ifc_source'] = ApiClient.convertToType(data['ifc_source'], ModelSourceEnum);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} parent
 */
DocumentRequest.prototype['parent'] = undefined;

/**
 * @member {Number} parent_id
 */
DocumentRequest.prototype['parent_id'] = undefined;

/**
 * @member {Number} creator
 */
DocumentRequest.prototype['creator'] = undefined;

/**
 * Shown name of the file
 * @member {String} name
 */
DocumentRequest.prototype['name'] = undefined;

/**
 * Full name of the file
 * @member {String} file_name
 */
DocumentRequest.prototype['file_name'] = undefined;

/**
 * Description of the file
 * @member {String} description
 */
DocumentRequest.prototype['description'] = undefined;

/**
 * @member {File} file
 */
DocumentRequest.prototype['file'] = undefined;

/**
 * Size of the file.
 * @member {Number} size
 */
DocumentRequest.prototype['size'] = undefined;

/**
 * Define the model.source field if the upload is a Model (IFC, PDF, DWG...)
 * @member {module:model/ModelSourceEnum} model_source
 */
DocumentRequest.prototype['model_source'] = undefined;

/**
 * DEPRECATED: Use 'model_source' instead. Define the model.source field if the upload is a Model (IFC, PDF, DWG...)
 * @member {module:model/ModelSourceEnum} ifc_source
 */
DocumentRequest.prototype['ifc_source'] = undefined;






export default DocumentRequest;


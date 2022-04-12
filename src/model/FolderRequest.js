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
import FolderPermissionEnum from './FolderPermissionEnum';

/**
 * The FolderRequest model module.
 * @module model/FolderRequest
 * @version 0.0.0
 */
class FolderRequest {
    /**
     * Constructs a new <code>FolderRequest</code>.
     * @alias module:model/FolderRequest
     * @param name {String} Name of the folder
     */
    constructor(name) { 
        
        FolderRequest.initialize(this, name);
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
     * Constructs a <code>FolderRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FolderRequest} obj Optional instance to populate.
     * @return {module:model/FolderRequest} The populated <code>FolderRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FolderRequest();

            if (data.hasOwnProperty('parent_id')) {
                obj['parent_id'] = ApiClient.convertToType(data['parent_id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('default_permission')) {
                obj['default_permission'] = ApiClient.convertToType(data['default_permission'], FolderPermissionEnum);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} parent_id
 */
FolderRequest.prototype['parent_id'] = undefined;

/**
 * Name of the folder
 * @member {String} name
 */
FolderRequest.prototype['name'] = undefined;

/**
 * Permission for a Folder
 * @member {module:model/FolderPermissionEnum} default_permission
 */
FolderRequest.prototype['default_permission'] = undefined;






export default FolderRequest;

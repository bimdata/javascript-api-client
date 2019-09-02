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
import RecursiveFolderChildren from './RecursiveFolderChildren';
import User from './User';

/**
 * The Folder model module.
 * @module model/Folder
 * @version v1
 */
class Folder {
    /**
     * Constructs a new <code>Folder</code>.
     * @alias module:model/Folder
     * @param name {String} Name of the folder
     */
    constructor(name) { 
        
        Folder.initialize(this, name);
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
                obj['created_by'] = User.constructFromObject(data['created_by']);
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
 * Value is \"Folder\". It is usefull to parse the tree and discriminate folders and files
 * @member {String} type
 */
Folder.prototype['type'] = undefined;

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
 * @member {module:model/User} created_by
 */
Folder.prototype['created_by'] = undefined;

/**
 * @member {Array.<module:model/RecursiveFolderChildren>} children
 */
Folder.prototype['children'] = undefined;






export default Folder;


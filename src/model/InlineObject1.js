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
import FolderGroupPermission from './FolderGroupPermission';
import User from './User';

/**
 * The InlineObject1 model module.
 * @module model/InlineObject1
 * @version 0.0.0
 */
class InlineObject1 {
    /**
     * Constructs a new <code>InlineObject1</code>.
     * @alias module:model/InlineObject1
     * @param name {String} Name of the folder
     */
    constructor(name) { 
        
        InlineObject1.initialize(this, name);
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
     * Constructs a <code>InlineObject1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject1} obj Optional instance to populate.
     * @return {module:model/InlineObject1} The populated <code>InlineObject1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject1();

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
                obj['created_by'] = User.constructFromObject(data['created_by']);
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
InlineObject1.prototype['id'] = undefined;

/**
 * @member {Number} parent_id
 */
InlineObject1.prototype['parent_id'] = undefined;

/**
 * DEPRECATED: Use 'nature' instead. Value is \"Folder\". It is usefull to parse the tree and discriminate folders and files
 * @member {String} type
 */
InlineObject1.prototype['type'] = undefined;

/**
 * Value is \"Folder\". It is usefull to parse the tree and discriminate folders and files
 * @member {String} nature
 */
InlineObject1.prototype['nature'] = undefined;

/**
 * Name of the folder
 * @member {String} name
 */
InlineObject1.prototype['name'] = undefined;

/**
 * Creation date
 * @member {Date} created_at
 */
InlineObject1.prototype['created_at'] = undefined;

/**
 * Date of the last update
 * @member {Date} updated_at
 */
InlineObject1.prototype['updated_at'] = undefined;

/**
 * @member {module:model/User} created_by
 */
InlineObject1.prototype['created_by'] = undefined;

/**
 * @member {Array.<module:model/FolderGroupPermission>} groups_permissions
 */
InlineObject1.prototype['groups_permissions'] = undefined;

/**
 * Permission for a Folder
 * @member {Number} default_permission
 */
InlineObject1.prototype['default_permission'] = undefined;

/**
 * Aggregate of group user permissions and folder default permission
 * @member {Number} user_permission
 */
InlineObject1.prototype['user_permission'] = undefined;






export default InlineObject1;


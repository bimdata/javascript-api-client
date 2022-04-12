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
import ProjectStatusEnum from './ProjectStatusEnum';

/**
 * The ProjectWithChildren model module.
 * @module model/ProjectWithChildren
 * @version 0.0.0
 */
class ProjectWithChildren {
    /**
     * Constructs a new <code>ProjectWithChildren</code>.
     * @alias module:model/ProjectWithChildren
     * @param id {Number} 
     * @param name {String} Name of the project
     * @param createdAt {Date} Creation date
     * @param updatedAt {Date} Date of the last update
     * @param children {Array.<module:model/ProjectWithChildren>} 
     * @param rootFolderId {Number} 
     */
    constructor(id, name, createdAt, updatedAt, children, rootFolderId) { 
        
        ProjectWithChildren.initialize(this, id, name, createdAt, updatedAt, children, rootFolderId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name, createdAt, updatedAt, children, rootFolderId) { 
        obj['id'] = id;
        obj['name'] = name;
        obj['created_at'] = createdAt;
        obj['updated_at'] = updatedAt;
        obj['children'] = children;
        obj['root_folder_id'] = rootFolderId;
    }

    /**
     * Constructs a <code>ProjectWithChildren</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectWithChildren} obj Optional instance to populate.
     * @return {module:model/ProjectWithChildren} The populated <code>ProjectWithChildren</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProjectWithChildren();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ProjectStatusEnum.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('parent_id')) {
                obj['parent_id'] = ApiClient.convertToType(data['parent_id'], 'Number');
            }
            if (data.hasOwnProperty('children')) {
                obj['children'] = ApiClient.convertToType(data['children'], [ProjectWithChildren]);
            }
            if (data.hasOwnProperty('root_folder_id')) {
                obj['root_folder_id'] = ApiClient.convertToType(data['root_folder_id'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
ProjectWithChildren.prototype['id'] = undefined;

/**
 * @member {String} logo
 */
ProjectWithChildren.prototype['logo'] = undefined;

/**
 * Name of the project
 * @member {String} name
 */
ProjectWithChildren.prototype['name'] = undefined;

/**
 * @member {module:model/ProjectStatusEnum} status
 */
ProjectWithChildren.prototype['status'] = undefined;

/**
 * Creation date
 * @member {Date} created_at
 */
ProjectWithChildren.prototype['created_at'] = undefined;

/**
 * Date of the last update
 * @member {Date} updated_at
 */
ProjectWithChildren.prototype['updated_at'] = undefined;

/**
 * @member {Number} parent_id
 */
ProjectWithChildren.prototype['parent_id'] = undefined;

/**
 * @member {Array.<module:model/ProjectWithChildren>} children
 */
ProjectWithChildren.prototype['children'] = undefined;

/**
 * @member {Number} root_folder_id
 */
ProjectWithChildren.prototype['root_folder_id'] = undefined;






export default ProjectWithChildren;


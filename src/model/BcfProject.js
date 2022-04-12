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

/**
 * The BcfProject model module.
 * @module model/BcfProject
 * @version 0.0.0
 */
class BcfProject {
    /**
     * Constructs a new <code>BcfProject</code>.
     * @alias module:model/BcfProject
     * @param id {Number} 
     * @param projectId {String} 
     * @param name {String} Name of the project
     */
    constructor(id, projectId, name) { 
        
        BcfProject.initialize(this, id, projectId, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, projectId, name) { 
        obj['id'] = id;
        obj['project_id'] = projectId;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>BcfProject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BcfProject} obj Optional instance to populate.
     * @return {module:model/BcfProject} The populated <code>BcfProject</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BcfProject();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('project_id')) {
                obj['project_id'] = ApiClient.convertToType(data['project_id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
BcfProject.prototype['id'] = undefined;

/**
 * @member {String} project_id
 */
BcfProject.prototype['project_id'] = undefined;

/**
 * Name of the project
 * @member {String} name
 */
BcfProject.prototype['name'] = undefined;






export default BcfProject;


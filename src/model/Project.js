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
import Cloud from './Cloud';

/**
 * The Project model module.
 * @module model/Project
 * @version v1
 */
class Project {
    /**
     * Constructs a new <code>Project</code>.
     * @alias module:model/Project
     * @param name {String} Name of the project
     */
    constructor(name) { 
        
        Project.initialize(this, name);
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
     * Constructs a <code>Project</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Project} obj Optional instance to populate.
     * @return {module:model/Project} The populated <code>Project</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Project();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('cloud')) {
                obj['cloud'] = Cloud.constructFromObject(data['cloud']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
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
            if (data.hasOwnProperty('root_folder_id')) {
                obj['root_folder_id'] = ApiClient.convertToType(data['root_folder_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
Project.prototype['id'] = undefined;

/**
 * @member {String} logo
 */
Project.prototype['logo'] = undefined;

/**
 * Name of the project
 * @member {String} name
 */
Project.prototype['name'] = undefined;

/**
 * @member {module:model/Cloud} cloud
 */
Project.prototype['cloud'] = undefined;

/**
 * @member {module:model/Project.StatusEnum} status
 */
Project.prototype['status'] = undefined;

/**
 * Creation date
 * @member {Date} created_at
 */
Project.prototype['created_at'] = undefined;

/**
 * Date of the last update
 * @member {Date} updated_at
 */
Project.prototype['updated_at'] = undefined;

/**
 * @member {Number} parent_id
 */
Project.prototype['parent_id'] = undefined;

/**
 * @member {String} root_folder_id
 */
Project.prototype['root_folder_id'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
Project['StatusEnum'] = {

    /**
     * value: "A"
     * @const
     */
    "A": "A",

    /**
     * value: "D"
     * @const
     */
    "D": "D"
};



export default Project;


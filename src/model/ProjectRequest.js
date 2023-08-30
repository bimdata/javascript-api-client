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

/**
 * The ProjectRequest model module.
 * @module model/ProjectRequest
 * @version 0.0.0
 */
class ProjectRequest {
    /**
     * Constructs a new <code>ProjectRequest</code>.
     * @alias module:model/ProjectRequest
     * @param name {String} Name of the project
     */
    constructor(name) { 
        
        ProjectRequest.initialize(this, name);
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
     * Constructs a <code>ProjectRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectRequest} obj Optional instance to populate.
     * @return {module:model/ProjectRequest} The populated <code>ProjectRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProjectRequest();

            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], File);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('parent_id')) {
                obj['parent_id'] = ApiClient.convertToType(data['parent_id'], 'Number');
            }
            if (data.hasOwnProperty('main_model_id')) {
                obj['main_model_id'] = ApiClient.convertToType(data['main_model_id'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {File} logo
 */
ProjectRequest.prototype['logo'] = undefined;

/**
 * Name of the project
 * @member {String} name
 */
ProjectRequest.prototype['name'] = undefined;

/**
 * @member {String} description
 */
ProjectRequest.prototype['description'] = undefined;

/**
 * * `A` - active * `D` - deleted
 * @member {module:model/ProjectRequest.StatusEnum} status
 */
ProjectRequest.prototype['status'] = undefined;

/**
 * @member {Number} parent_id
 */
ProjectRequest.prototype['parent_id'] = undefined;

/**
 * @member {Number} main_model_id
 */
ProjectRequest.prototype['main_model_id'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
ProjectRequest['StatusEnum'] = {

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



export default ProjectRequest;


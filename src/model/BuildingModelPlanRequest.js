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
 * The BuildingModelPlanRequest model module.
 * @module model/BuildingModelPlanRequest
 * @version 0.0.0
 */
class BuildingModelPlanRequest {
    /**
     * Constructs a new <code>BuildingModelPlanRequest</code>.
     * @alias module:model/BuildingModelPlanRequest
     * @param id {Number} 
     */
    constructor(id) { 
        
        BuildingModelPlanRequest.initialize(this, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id) { 
        obj['id'] = id;
    }

    /**
     * Constructs a <code>BuildingModelPlanRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BuildingModelPlanRequest} obj Optional instance to populate.
     * @return {module:model/BuildingModelPlanRequest} The populated <code>BuildingModelPlanRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BuildingModelPlanRequest();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
BuildingModelPlanRequest.prototype['id'] = undefined;






export default BuildingModelPlanRequest;


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
 * The RawMaterialOptionsRequest model module.
 * @module model/RawMaterialOptionsRequest
 * @version 0.0.0
 */
class RawMaterialOptionsRequest {
    /**
     * Constructs a new <code>RawMaterialOptionsRequest</code>.
     * @alias module:model/RawMaterialOptionsRequest
     */
    constructor() { 
        
        RawMaterialOptionsRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RawMaterialOptionsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RawMaterialOptionsRequest} obj Optional instance to populate.
     * @return {module:model/RawMaterialOptionsRequest} The populated <code>RawMaterialOptionsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RawMaterialOptionsRequest();

            if (data.hasOwnProperty('thickness')) {
                obj['thickness'] = ApiClient.convertToType(data['thickness'], 'Number');
            }
            if (data.hasOwnProperty('material_list')) {
                obj['material_list'] = ApiClient.convertToType(data['material_list'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} thickness
 */
RawMaterialOptionsRequest.prototype['thickness'] = undefined;

/**
 * @member {Array.<Number>} material_list
 */
RawMaterialOptionsRequest.prototype['material_list'] = undefined;






export default RawMaterialOptionsRequest;


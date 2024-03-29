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
 * The RawMaterialListComponents model module.
 * @module model/RawMaterialListComponents
 * @version 0.0.0
 */
class RawMaterialListComponents {
    /**
     * Constructs a new <code>RawMaterialListComponents</code>.
     * @alias module:model/RawMaterialListComponents
     * @param id {Number} 
     */
    constructor(id) { 
        
        RawMaterialListComponents.initialize(this, id);
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
     * Constructs a <code>RawMaterialListComponents</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RawMaterialListComponents} obj Optional instance to populate.
     * @return {module:model/RawMaterialListComponents} The populated <code>RawMaterialListComponents</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RawMaterialListComponents();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('material')) {
                obj['material'] = ApiClient.convertToType(data['material'], 'Number');
            }
            if (data.hasOwnProperty('material_option')) {
                obj['material_option'] = ApiClient.convertToType(data['material_option'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
RawMaterialListComponents.prototype['id'] = undefined;

/**
 * @member {Number} material
 */
RawMaterialListComponents.prototype['material'] = undefined;

/**
 * @member {Number} material_option
 */
RawMaterialListComponents.prototype['material_option'] = undefined;






export default RawMaterialListComponents;


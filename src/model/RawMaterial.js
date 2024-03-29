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
 * The RawMaterial model module.
 * @module model/RawMaterial
 * @version 0.0.0
 */
class RawMaterial {
    /**
     * Constructs a new <code>RawMaterial</code>.
     * @alias module:model/RawMaterial
     * @param id {Number} 
     * @param stepId {Number} 
     * @param name {String} 
     */
    constructor(id, stepId, name) { 
        
        RawMaterial.initialize(this, id, stepId, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, stepId, name) { 
        obj['id'] = id;
        obj['step_id'] = stepId;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>RawMaterial</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RawMaterial} obj Optional instance to populate.
     * @return {module:model/RawMaterial} The populated <code>RawMaterial</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RawMaterial();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('step_id')) {
                obj['step_id'] = ApiClient.convertToType(data['step_id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('category')) {
                obj['category'] = ApiClient.convertToType(data['category'], 'String');
            }
            if (data.hasOwnProperty('psets')) {
                obj['psets'] = ApiClient.convertToType(data['psets'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
RawMaterial.prototype['id'] = undefined;

/**
 * @member {Number} step_id
 */
RawMaterial.prototype['step_id'] = undefined;

/**
 * @member {String} name
 */
RawMaterial.prototype['name'] = undefined;

/**
 * @member {String} description
 */
RawMaterial.prototype['description'] = undefined;

/**
 * @member {String} category
 */
RawMaterial.prototype['category'] = undefined;

/**
 * @member {Array.<Number>} psets
 */
RawMaterial.prototype['psets'] = undefined;






export default RawMaterial;


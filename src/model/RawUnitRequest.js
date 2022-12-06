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
 * The RawUnitRequest model module.
 * @module model/RawUnitRequest
 * @version 0.0.0
 */
class RawUnitRequest {
    /**
     * Constructs a new <code>RawUnitRequest</code>.
     * @alias module:model/RawUnitRequest
     * @param type {String} 
     */
    constructor(type) { 
        
        RawUnitRequest.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
        obj['type'] = type;
    }

    /**
     * Constructs a <code>RawUnitRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RawUnitRequest} obj Optional instance to populate.
     * @return {module:model/RawUnitRequest} The populated <code>RawUnitRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RawUnitRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('unit_type')) {
                obj['unit_type'] = ApiClient.convertToType(data['unit_type'], 'String');
            }
            if (data.hasOwnProperty('prefix')) {
                obj['prefix'] = ApiClient.convertToType(data['prefix'], 'String');
            }
            if (data.hasOwnProperty('elements')) {
                obj['elements'] = ApiClient.convertToType(data['elements'], {'String': Object});
            }
            if (data.hasOwnProperty('conversion_factor')) {
                obj['conversion_factor'] = ApiClient.convertToType(data['conversion_factor'], 'Number');
            }
            if (data.hasOwnProperty('dimensions')) {
                obj['dimensions'] = ApiClient.convertToType(data['dimensions'], ['Number']);
            }
            if (data.hasOwnProperty('conversion_baseunit_index')) {
                obj['conversion_baseunit_index'] = ApiClient.convertToType(data['conversion_baseunit_index'], 'Number');
            }
            if (data.hasOwnProperty('is_default')) {
                obj['is_default'] = ApiClient.convertToType(data['is_default'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
RawUnitRequest.prototype['name'] = undefined;

/**
 * @member {String} type
 */
RawUnitRequest.prototype['type'] = undefined;

/**
 * @member {String} unit_type
 */
RawUnitRequest.prototype['unit_type'] = undefined;

/**
 * @member {String} prefix
 */
RawUnitRequest.prototype['prefix'] = undefined;

/**
 * @member {Object.<String, Object>} elements
 */
RawUnitRequest.prototype['elements'] = undefined;

/**
 * @member {Number} conversion_factor
 */
RawUnitRequest.prototype['conversion_factor'] = undefined;

/**
 * @member {Array.<Number>} dimensions
 */
RawUnitRequest.prototype['dimensions'] = undefined;

/**
 * @member {Number} conversion_baseunit_index
 */
RawUnitRequest.prototype['conversion_baseunit_index'] = undefined;

/**
 * @member {Boolean} is_default
 */
RawUnitRequest.prototype['is_default'] = undefined;






export default RawUnitRequest;

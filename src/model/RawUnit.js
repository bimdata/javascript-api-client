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

/**
 * The RawUnit model module.
 * @module model/RawUnit
 * @version v1
 */
class RawUnit {
    /**
     * Constructs a new <code>RawUnit</code>.
     * @alias module:model/RawUnit
     * @param type {String} 
     */
    constructor(type) { 
        
        RawUnit.initialize(this, type);
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
     * Constructs a <code>RawUnit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RawUnit} obj Optional instance to populate.
     * @return {module:model/RawUnit} The populated <code>RawUnit</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RawUnit();

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
                obj['elements'] = ApiClient.convertToType(data['elements'], 'String');
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
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
RawUnit.prototype['name'] = undefined;

/**
 * @member {String} type
 */
RawUnit.prototype['type'] = undefined;

/**
 * @member {String} unit_type
 */
RawUnit.prototype['unit_type'] = undefined;

/**
 * @member {String} prefix
 */
RawUnit.prototype['prefix'] = undefined;

/**
 * @member {String} elements
 */
RawUnit.prototype['elements'] = undefined;

/**
 * @member {Number} conversion_factor
 */
RawUnit.prototype['conversion_factor'] = undefined;

/**
 * @member {Array.<Number>} dimensions
 */
RawUnit.prototype['dimensions'] = undefined;

/**
 * @member {Number} conversion_baseunit_index
 */
RawUnit.prototype['conversion_baseunit_index'] = undefined;






export default RawUnit;


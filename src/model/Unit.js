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
 * The Unit model module.
 * @module model/Unit
 * @version 0.0.0
 */
class Unit {
    /**
     * Constructs a new <code>Unit</code>.
     * Adds nested create feature
     * @alias module:model/Unit
     * @param id {Number} 
     * @param type {String} IfcDerivedUnit, IfcContextDependentUnit, IfcConversionBasedUnit, IfcSIUnit or IfcMonetaryUnit
     */
    constructor(id, type) { 
        
        Unit.initialize(this, id, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, type) { 
        obj['id'] = id;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>Unit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Unit} obj Optional instance to populate.
     * @return {module:model/Unit} The populated <code>Unit</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Unit();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('unit_type')) {
                obj['unit_type'] = ApiClient.convertToType(data['unit_type'], 'String');
            }
            if (data.hasOwnProperty('prefix')) {
                obj['prefix'] = ApiClient.convertToType(data['prefix'], 'String');
            }
            if (data.hasOwnProperty('dimensions')) {
                obj['dimensions'] = ApiClient.convertToType(data['dimensions'], ['Number']);
            }
            if (data.hasOwnProperty('conversion_factor')) {
                obj['conversion_factor'] = ApiClient.convertToType(data['conversion_factor'], 'Number');
            }
            if (data.hasOwnProperty('conversion_baseunit')) {
                obj['conversion_baseunit'] = Unit.constructFromObject(data['conversion_baseunit']);
            }
            if (data.hasOwnProperty('elements')) {
                obj['elements'] = ApiClient.convertToType(data['elements'], Object);
            }
            if (data.hasOwnProperty('is_default')) {
                obj['is_default'] = ApiClient.convertToType(data['is_default'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
Unit.prototype['id'] = undefined;

/**
 * IfcDerivedUnit, IfcContextDependentUnit, IfcConversionBasedUnit, IfcSIUnit or IfcMonetaryUnit
 * @member {String} type
 */
Unit.prototype['type'] = undefined;

/**
 * Name of the unit (ex: DEGREE)
 * @member {String} name
 */
Unit.prototype['name'] = undefined;

/**
 * IFC type of the unit or user defined type (ex: PLANEANGLEUNIT for DEGREE and RADIAN)
 * @member {String} unit_type
 */
Unit.prototype['unit_type'] = undefined;

/**
 * Litteral prefix for scale (ex: MILLI, KILO, etc..)
 * @member {String} prefix
 */
Unit.prototype['prefix'] = undefined;

/**
 * List of 7 units dimensions
 * @member {Array.<Number>} dimensions
 */
Unit.prototype['dimensions'] = undefined;

/**
 * Factor of conversion and base unit id (ex: DEGREE from RADIAN with factor 0.0174532925199433)
 * @member {Number} conversion_factor
 */
Unit.prototype['conversion_factor'] = undefined;

/**
 * @member {module:model/Unit} conversion_baseunit
 */
Unit.prototype['conversion_baseunit'] = undefined;

/**
 * List of constitutive unit elements by id with corresponding exponent (ex: [meterID/1, secondID/-1] for velocity)
 * @member {Object} elements
 */
Unit.prototype['elements'] = undefined;

/**
 * @member {Boolean} is_default
 */
Unit.prototype['is_default'] = undefined;






export default Unit;


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
import UnitRequest from './UnitRequest';

/**
 * The PropertyDefinitionRequest model module.
 * @module model/PropertyDefinitionRequest
 * @version 0.0.0
 */
class PropertyDefinitionRequest {
    /**
     * Constructs a new <code>PropertyDefinitionRequest</code>.
     * Adds nested create feature
     * @alias module:model/PropertyDefinitionRequest
     */
    constructor() { 
        
        PropertyDefinitionRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PropertyDefinitionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PropertyDefinitionRequest} obj Optional instance to populate.
     * @return {module:model/PropertyDefinitionRequest} The populated <code>PropertyDefinitionRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PropertyDefinitionRequest();

            if (data.hasOwnProperty('unit')) {
                obj['unit'] = ApiClient.convertToType(data['unit'], UnitRequest);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('value_type')) {
                obj['value_type'] = ApiClient.convertToType(data['value_type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/UnitRequest} unit
 */
PropertyDefinitionRequest.prototype['unit'] = undefined;

/**
 * @member {String} name
 */
PropertyDefinitionRequest.prototype['name'] = undefined;

/**
 * @member {String} description
 */
PropertyDefinitionRequest.prototype['description'] = undefined;

/**
 * IfcProperty*, Ifc*Properties, IfcComplexProperty, IfcQuantity*, IfcComplexQuantity, Attribute
 * @member {String} type
 */
PropertyDefinitionRequest.prototype['type'] = undefined;

/**
 * Type of the corresponding value (Boolean, integer, float, string, IfcRange, ...)
 * @member {String} value_type
 */
PropertyDefinitionRequest.prototype['value_type'] = undefined;






export default PropertyDefinitionRequest;


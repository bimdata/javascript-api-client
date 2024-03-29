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
import UnitRequest from './UnitRequest';

/**
 * The PatchedPropertyDefinitionRequest model module.
 * @module model/PatchedPropertyDefinitionRequest
 * @version 0.0.0
 */
class PatchedPropertyDefinitionRequest {
    /**
     * Constructs a new <code>PatchedPropertyDefinitionRequest</code>.
     * Adds nested create feature
     * @alias module:model/PatchedPropertyDefinitionRequest
     */
    constructor() { 
        
        PatchedPropertyDefinitionRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PatchedPropertyDefinitionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PatchedPropertyDefinitionRequest} obj Optional instance to populate.
     * @return {module:model/PatchedPropertyDefinitionRequest} The populated <code>PatchedPropertyDefinitionRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PatchedPropertyDefinitionRequest();

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
PatchedPropertyDefinitionRequest.prototype['unit'] = undefined;

/**
 * @member {String} name
 */
PatchedPropertyDefinitionRequest.prototype['name'] = undefined;

/**
 * @member {String} description
 */
PatchedPropertyDefinitionRequest.prototype['description'] = undefined;

/**
 * IfcProperty*, Ifc*Properties, IfcComplexProperty, IfcQuantity*, IfcComplexQuantity, Attribute
 * @member {String} type
 */
PatchedPropertyDefinitionRequest.prototype['type'] = undefined;

/**
 * Type of the corresponding value (Boolean, integer, float, string, IfcRange, ...)
 * @member {String} value_type
 */
PatchedPropertyDefinitionRequest.prototype['value_type'] = undefined;






export default PatchedPropertyDefinitionRequest;


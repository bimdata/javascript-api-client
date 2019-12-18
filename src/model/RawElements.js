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
import RawClassification from './RawClassification';
import RawDefinition from './RawDefinition';
import RawElement from './RawElement';
import RawLayer from './RawLayer';
import RawPropertySet from './RawPropertySet';
import RawSystem from './RawSystem';
import RawUnit from './RawUnit';

/**
 * The RawElements model module.
 * @module model/RawElements
 * @version 0.0.0
 */
class RawElements {
    /**
     * Constructs a new <code>RawElements</code>.
     * @alias module:model/RawElements
     * @param elements {Array.<module:model/RawElement>} 
     */
    constructor(elements) { 
        
        RawElements.initialize(this, elements);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, elements) { 
        obj['elements'] = elements;
    }

    /**
     * Constructs a <code>RawElements</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RawElements} obj Optional instance to populate.
     * @return {module:model/RawElements} The populated <code>RawElements</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RawElements();

            if (data.hasOwnProperty('units')) {
                obj['units'] = ApiClient.convertToType(data['units'], [RawUnit]);
            }
            if (data.hasOwnProperty('definitions')) {
                obj['definitions'] = ApiClient.convertToType(data['definitions'], [RawDefinition]);
            }
            if (data.hasOwnProperty('property_sets')) {
                obj['property_sets'] = ApiClient.convertToType(data['property_sets'], [RawPropertySet]);
            }
            if (data.hasOwnProperty('classifications')) {
                obj['classifications'] = ApiClient.convertToType(data['classifications'], [RawClassification]);
            }
            if (data.hasOwnProperty('layers')) {
                obj['layers'] = ApiClient.convertToType(data['layers'], [RawLayer]);
            }
            if (data.hasOwnProperty('systems')) {
                obj['systems'] = ApiClient.convertToType(data['systems'], [RawSystem]);
            }
            if (data.hasOwnProperty('elements')) {
                obj['elements'] = ApiClient.convertToType(data['elements'], [RawElement]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/RawUnit>} units
 */
RawElements.prototype['units'] = undefined;

/**
 * @member {Array.<module:model/RawDefinition>} definitions
 */
RawElements.prototype['definitions'] = undefined;

/**
 * @member {Array.<module:model/RawPropertySet>} property_sets
 */
RawElements.prototype['property_sets'] = undefined;

/**
 * @member {Array.<module:model/RawClassification>} classifications
 */
RawElements.prototype['classifications'] = undefined;

/**
 * @member {Array.<module:model/RawLayer>} layers
 */
RawElements.prototype['layers'] = undefined;

/**
 * @member {Array.<module:model/RawSystem>} systems
 */
RawElements.prototype['systems'] = undefined;

/**
 * @member {Array.<module:model/RawElement>} elements
 */
RawElements.prototype['elements'] = undefined;






export default RawElements;


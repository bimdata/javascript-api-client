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
import PropertyDefinition from './PropertyDefinition';

/**
 * The Property model module.
 * @module model/Property
 * @version 0.0.0
 */
class Property {
    /**
     * Constructs a new <code>Property</code>.
     * @alias module:model/Property
     * @param definition {module:model/PropertyDefinition} 
     */
    constructor(definition) { 
        
        Property.initialize(this, definition);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, definition) { 
        obj['definition'] = definition;
    }

    /**
     * Constructs a <code>Property</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Property} obj Optional instance to populate.
     * @return {module:model/Property} The populated <code>Property</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Property();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('definition')) {
                obj['definition'] = PropertyDefinition.constructFromObject(data['definition']);
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], Object);
            }
            if (data.hasOwnProperty('property_set_id')) {
                obj['property_set_id'] = ApiClient.convertToType(data['property_set_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
Property.prototype['id'] = undefined;

/**
 * @member {module:model/PropertyDefinition} definition
 */
Property.prototype['definition'] = undefined;

/**
 * @member {Object} value
 */
Property.prototype['value'] = undefined;

/**
 * This field is useful when you update a property and the  API is rebuilding a new property set to avoid an update on many elements. It gives you the new pset id
 * @member {String} property_set_id
 */
Property.prototype['property_set_id'] = undefined;






export default Property;


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
import Classification from './Classification';
import PropertySet from './PropertySet';

/**
 * The Element model module.
 * @module model/Element
 * @version v1
 */
class Element {
    /**
     * Constructs a new <code>Element</code>.
     * @alias module:model/Element
     * @param type {String} IFC type for the element
     */
    constructor(type) { 
        
        Element.initialize(this, type);
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
     * Constructs a <code>Element</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Element} obj Optional instance to populate.
     * @return {module:model/Element} The populated <code>Element</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Element();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = PropertySet.constructFromObject(data['attributes']);
            }
            if (data.hasOwnProperty('property_sets')) {
                obj['property_sets'] = ApiClient.convertToType(data['property_sets'], [PropertySet]);
            }
            if (data.hasOwnProperty('classifications')) {
                obj['classifications'] = ApiClient.convertToType(data['classifications'], [Classification]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
Element.prototype['id'] = undefined;

/**
 * @member {String} uuid
 */
Element.prototype['uuid'] = undefined;

/**
 * IFC type for the element
 * @member {String} type
 */
Element.prototype['type'] = undefined;

/**
 * @member {module:model/PropertySet} attributes
 */
Element.prototype['attributes'] = undefined;

/**
 * @member {Array.<module:model/PropertySet>} property_sets
 */
Element.prototype['property_sets'] = undefined;

/**
 * @member {Array.<module:model/Classification>} classifications
 */
Element.prototype['classifications'] = undefined;






export default Element;


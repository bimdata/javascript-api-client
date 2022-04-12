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

/**
 * The Layer model module.
 * @module model/Layer
 * @version 0.0.0
 */
class Layer {
    /**
     * Constructs a new <code>Layer</code>.
     * @alias module:model/Layer
     * @param id {Number} 
     * @param name {String} Name of the layer
     * @param elements {Array.<String>} 
     */
    constructor(id, name, elements) { 
        
        Layer.initialize(this, id, name, elements);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name, elements) { 
        obj['id'] = id;
        obj['name'] = name;
        obj['elements'] = elements;
    }

    /**
     * Constructs a <code>Layer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Layer} obj Optional instance to populate.
     * @return {module:model/Layer} The populated <code>Layer</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Layer();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('identifier')) {
                obj['identifier'] = ApiClient.convertToType(data['identifier'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('elements')) {
                obj['elements'] = ApiClient.convertToType(data['elements'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
Layer.prototype['id'] = undefined;

/**
 * Name of the layer
 * @member {String} name
 */
Layer.prototype['name'] = undefined;

/**
 * @member {String} identifier
 */
Layer.prototype['identifier'] = undefined;

/**
 * @member {String} description
 */
Layer.prototype['description'] = undefined;

/**
 * @member {Array.<String>} elements
 */
Layer.prototype['elements'] = undefined;






export default Layer;

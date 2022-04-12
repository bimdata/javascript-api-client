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
 * The LayerElementRequest model module.
 * @module model/LayerElementRequest
 * @version 0.0.0
 */
class LayerElementRequest {
    /**
     * Constructs a new <code>LayerElementRequest</code>.
     * @alias module:model/LayerElementRequest
     * @param name {String} Name of the layer
     */
    constructor(name) { 
        
        LayerElementRequest.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>LayerElementRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LayerElementRequest} obj Optional instance to populate.
     * @return {module:model/LayerElementRequest} The populated <code>LayerElementRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LayerElementRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('identifier')) {
                obj['identifier'] = ApiClient.convertToType(data['identifier'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Name of the layer
 * @member {String} name
 */
LayerElementRequest.prototype['name'] = undefined;

/**
 * @member {String} identifier
 */
LayerElementRequest.prototype['identifier'] = undefined;

/**
 * @member {String} description
 */
LayerElementRequest.prototype['description'] = undefined;






export default LayerElementRequest;


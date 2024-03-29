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
 * The LayerRequest model module.
 * @module model/LayerRequest
 * @version 0.0.0
 */
class LayerRequest {
    /**
     * Constructs a new <code>LayerRequest</code>.
     * @alias module:model/LayerRequest
     * @param name {String} Name of the layer
     * @param elements {Array.<String>} 
     */
    constructor(name, elements) { 
        
        LayerRequest.initialize(this, name, elements);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, elements) { 
        obj['name'] = name;
        obj['elements'] = elements;
    }

    /**
     * Constructs a <code>LayerRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LayerRequest} obj Optional instance to populate.
     * @return {module:model/LayerRequest} The populated <code>LayerRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LayerRequest();

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
 * Name of the layer
 * @member {String} name
 */
LayerRequest.prototype['name'] = undefined;

/**
 * @member {String} identifier
 */
LayerRequest.prototype['identifier'] = undefined;

/**
 * @member {String} description
 */
LayerRequest.prototype['description'] = undefined;

/**
 * @member {Array.<String>} elements
 */
LayerRequest.prototype['elements'] = undefined;






export default LayerRequest;


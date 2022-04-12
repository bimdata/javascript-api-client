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
 * The PatchedLayerRequest model module.
 * @module model/PatchedLayerRequest
 * @version 0.0.0
 */
class PatchedLayerRequest {
    /**
     * Constructs a new <code>PatchedLayerRequest</code>.
     * @alias module:model/PatchedLayerRequest
     */
    constructor() { 
        
        PatchedLayerRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PatchedLayerRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PatchedLayerRequest} obj Optional instance to populate.
     * @return {module:model/PatchedLayerRequest} The populated <code>PatchedLayerRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PatchedLayerRequest();

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
PatchedLayerRequest.prototype['name'] = undefined;

/**
 * @member {String} identifier
 */
PatchedLayerRequest.prototype['identifier'] = undefined;

/**
 * @member {String} description
 */
PatchedLayerRequest.prototype['description'] = undefined;

/**
 * @member {Array.<String>} elements
 */
PatchedLayerRequest.prototype['elements'] = undefined;






export default PatchedLayerRequest;


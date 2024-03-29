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
import ClassificationRequest from './ClassificationRequest';
import LayerElementRequest from './LayerElementRequest';
import PropertySetRequest from './PropertySetRequest';

/**
 * The PatchedElementRequest model module.
 * @module model/PatchedElementRequest
 * @version 0.0.0
 */
class PatchedElementRequest {
    /**
     * Constructs a new <code>PatchedElementRequest</code>.
     * Adds nested create feature
     * @alias module:model/PatchedElementRequest
     */
    constructor() { 
        
        PatchedElementRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PatchedElementRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PatchedElementRequest} obj Optional instance to populate.
     * @return {module:model/PatchedElementRequest} The populated <code>PatchedElementRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PatchedElementRequest();

            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = PropertySetRequest.constructFromObject(data['attributes']);
            }
            if (data.hasOwnProperty('property_sets')) {
                obj['property_sets'] = ApiClient.convertToType(data['property_sets'], [PropertySetRequest]);
            }
            if (data.hasOwnProperty('classifications')) {
                obj['classifications'] = ApiClient.convertToType(data['classifications'], [ClassificationRequest]);
            }
            if (data.hasOwnProperty('layers')) {
                obj['layers'] = ApiClient.convertToType(data['layers'], [LayerElementRequest]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} uuid
 */
PatchedElementRequest.prototype['uuid'] = undefined;

/**
 * IFC type for the element
 * @member {String} type
 */
PatchedElementRequest.prototype['type'] = undefined;

/**
 * @member {module:model/PropertySetRequest} attributes
 */
PatchedElementRequest.prototype['attributes'] = undefined;

/**
 * @member {Array.<module:model/PropertySetRequest>} property_sets
 */
PatchedElementRequest.prototype['property_sets'] = undefined;

/**
 * @member {Array.<module:model/ClassificationRequest>} classifications
 */
PatchedElementRequest.prototype['classifications'] = undefined;

/**
 * @member {Array.<module:model/LayerElementRequest>} layers
 */
PatchedElementRequest.prototype['layers'] = undefined;






export default PatchedElementRequest;


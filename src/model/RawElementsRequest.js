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
import RawClassificationRequest from './RawClassificationRequest';
import RawDefinitionRequest from './RawDefinitionRequest';
import RawElementRequest from './RawElementRequest';
import RawLayerRequest from './RawLayerRequest';
import RawMaterialListRequest from './RawMaterialListRequest';
import RawPropertySetRequest from './RawPropertySetRequest';
import RawSystemRequest from './RawSystemRequest';
import RawUnitRequest from './RawUnitRequest';

/**
 * The RawElementsRequest model module.
 * @module model/RawElementsRequest
 * @version 0.0.0
 */
class RawElementsRequest {
    /**
     * Constructs a new <code>RawElementsRequest</code>.
     * @alias module:model/RawElementsRequest
     * @param elements {Array.<module:model/RawElementRequest>} 
     */
    constructor(elements) { 
        
        RawElementsRequest.initialize(this, elements);
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
     * Constructs a <code>RawElementsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RawElementsRequest} obj Optional instance to populate.
     * @return {module:model/RawElementsRequest} The populated <code>RawElementsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RawElementsRequest();

            if (data.hasOwnProperty('units')) {
                obj['units'] = ApiClient.convertToType(data['units'], [RawUnitRequest]);
            }
            if (data.hasOwnProperty('definitions')) {
                obj['definitions'] = ApiClient.convertToType(data['definitions'], [RawDefinitionRequest]);
            }
            if (data.hasOwnProperty('property_sets')) {
                obj['property_sets'] = ApiClient.convertToType(data['property_sets'], [RawPropertySetRequest]);
            }
            if (data.hasOwnProperty('classifications')) {
                obj['classifications'] = ApiClient.convertToType(data['classifications'], [RawClassificationRequest]);
            }
            if (data.hasOwnProperty('layers')) {
                obj['layers'] = ApiClient.convertToType(data['layers'], [RawLayerRequest]);
            }
            if (data.hasOwnProperty('systems')) {
                obj['systems'] = ApiClient.convertToType(data['systems'], [RawSystemRequest]);
            }
            if (data.hasOwnProperty('materials')) {
                obj['materials'] = ApiClient.convertToType(data['materials'], RawMaterialListRequest);
            }
            if (data.hasOwnProperty('elements')) {
                obj['elements'] = ApiClient.convertToType(data['elements'], [RawElementRequest]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/RawUnitRequest>} units
 */
RawElementsRequest.prototype['units'] = undefined;

/**
 * @member {Array.<module:model/RawDefinitionRequest>} definitions
 */
RawElementsRequest.prototype['definitions'] = undefined;

/**
 * @member {Array.<module:model/RawPropertySetRequest>} property_sets
 */
RawElementsRequest.prototype['property_sets'] = undefined;

/**
 * @member {Array.<module:model/RawClassificationRequest>} classifications
 */
RawElementsRequest.prototype['classifications'] = undefined;

/**
 * @member {Array.<module:model/RawLayerRequest>} layers
 */
RawElementsRequest.prototype['layers'] = undefined;

/**
 * @member {Array.<module:model/RawSystemRequest>} systems
 */
RawElementsRequest.prototype['systems'] = undefined;

/**
 * @member {module:model/RawMaterialListRequest} materials
 */
RawElementsRequest.prototype['materials'] = undefined;

/**
 * @member {Array.<module:model/RawElementRequest>} elements
 */
RawElementsRequest.prototype['elements'] = undefined;






export default RawElementsRequest;


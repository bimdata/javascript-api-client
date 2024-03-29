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
 * The RawElementRequest model module.
 * @module model/RawElementRequest
 * @version 0.0.0
 */
class RawElementRequest {
    /**
     * Constructs a new <code>RawElementRequest</code>.
     * @alias module:model/RawElementRequest
     * @param uuid {String} 
     * @param type {String} 
     */
    constructor(uuid, type) { 
        
        RawElementRequest.initialize(this, uuid, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, uuid, type) { 
        obj['uuid'] = uuid;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>RawElementRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RawElementRequest} obj Optional instance to populate.
     * @return {module:model/RawElementRequest} The populated <code>RawElementRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RawElementRequest();

            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], 'Number');
            }
            if (data.hasOwnProperty('material_list')) {
                obj['material_list'] = ApiClient.convertToType(data['material_list'], ['Number']);
            }
            if (data.hasOwnProperty('psets')) {
                obj['psets'] = ApiClient.convertToType(data['psets'], ['Number']);
            }
            if (data.hasOwnProperty('classifications')) {
                obj['classifications'] = ApiClient.convertToType(data['classifications'], ['Number']);
            }
            if (data.hasOwnProperty('layers')) {
                obj['layers'] = ApiClient.convertToType(data['layers'], ['Number']);
            }
            if (data.hasOwnProperty('systems')) {
                obj['systems'] = ApiClient.convertToType(data['systems'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} uuid
 */
RawElementRequest.prototype['uuid'] = undefined;

/**
 * @member {String} type
 */
RawElementRequest.prototype['type'] = undefined;

/**
 * @member {Number} attributes
 */
RawElementRequest.prototype['attributes'] = undefined;

/**
 * @member {Array.<Number>} material_list
 */
RawElementRequest.prototype['material_list'] = undefined;

/**
 * @member {Array.<Number>} psets
 */
RawElementRequest.prototype['psets'] = undefined;

/**
 * @member {Array.<Number>} classifications
 */
RawElementRequest.prototype['classifications'] = undefined;

/**
 * @member {Array.<Number>} layers
 */
RawElementRequest.prototype['layers'] = undefined;

/**
 * @member {Array.<Number>} systems
 */
RawElementRequest.prototype['systems'] = undefined;






export default RawElementRequest;


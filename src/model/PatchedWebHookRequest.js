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
 * The PatchedWebHookRequest model module.
 * @module model/PatchedWebHookRequest
 * @version 0.0.0
 */
class PatchedWebHookRequest {
    /**
     * Constructs a new <code>PatchedWebHookRequest</code>.
     * @alias module:model/PatchedWebHookRequest
     */
    constructor() { 
        
        PatchedWebHookRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PatchedWebHookRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PatchedWebHookRequest} obj Optional instance to populate.
     * @return {module:model/PatchedWebHookRequest} The populated <code>PatchedWebHookRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PatchedWebHookRequest();

            if (data.hasOwnProperty('events')) {
                obj['events'] = ApiClient.convertToType(data['events'], ['String']);
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('secret')) {
                obj['secret'] = ApiClient.convertToType(data['secret'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} events
 */
PatchedWebHookRequest.prototype['events'] = undefined;

/**
 * @member {String} url
 */
PatchedWebHookRequest.prototype['url'] = undefined;

/**
 * @member {String} secret
 */
PatchedWebHookRequest.prototype['secret'] = undefined;






export default PatchedWebHookRequest;


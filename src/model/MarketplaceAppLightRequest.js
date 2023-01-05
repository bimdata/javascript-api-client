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
 * The MarketplaceAppLightRequest model module.
 * @module model/MarketplaceAppLightRequest
 * @version 0.0.0
 */
class MarketplaceAppLightRequest {
    /**
     * Constructs a new <code>MarketplaceAppLightRequest</code>.
     * @alias module:model/MarketplaceAppLightRequest
     * @param name {String} 
     */
    constructor(name) { 
        
        MarketplaceAppLightRequest.initialize(this, name);
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
     * Constructs a <code>MarketplaceAppLightRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MarketplaceAppLightRequest} obj Optional instance to populate.
     * @return {module:model/MarketplaceAppLightRequest} The populated <code>MarketplaceAppLightRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MarketplaceAppLightRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('viewer_plugins_urls')) {
                obj['viewer_plugins_urls'] = ApiClient.convertToType(data['viewer_plugins_urls'], ['String']);
            }
            if (data.hasOwnProperty('file')) {
                obj['file'] = ApiClient.convertToType(data['file'], File);
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
MarketplaceAppLightRequest.prototype['name'] = undefined;

/**
 * @member {Array.<String>} viewer_plugins_urls
 */
MarketplaceAppLightRequest.prototype['viewer_plugins_urls'] = undefined;

/**
 * @member {File} file
 */
MarketplaceAppLightRequest.prototype['file'] = undefined;






export default MarketplaceAppLightRequest;


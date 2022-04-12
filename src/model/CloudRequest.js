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
 * The CloudRequest model module.
 * @module model/CloudRequest
 * @version 0.0.0
 */
class CloudRequest {
    /**
     * Constructs a new <code>CloudRequest</code>.
     * @alias module:model/CloudRequest
     * @param name {String} Name of the cloud
     */
    constructor(name) { 
        
        CloudRequest.initialize(this, name);
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
     * Constructs a <code>CloudRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CloudRequest} obj Optional instance to populate.
     * @return {module:model/CloudRequest} The populated <code>CloudRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CloudRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('organization_id')) {
                obj['organization_id'] = ApiClient.convertToType(data['organization_id'], 'Number');
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = ApiClient.convertToType(data['image'], File);
            }
        }
        return obj;
    }


}

/**
 * Name of the cloud
 * @member {String} name
 */
CloudRequest.prototype['name'] = undefined;

/**
 * @member {Number} organization_id
 */
CloudRequest.prototype['organization_id'] = undefined;

/**
 * @member {File} image
 */
CloudRequest.prototype['image'] = undefined;






export default CloudRequest;


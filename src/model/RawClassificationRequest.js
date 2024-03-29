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
 * The RawClassificationRequest model module.
 * @module model/RawClassificationRequest
 * @version 0.0.0
 */
class RawClassificationRequest {
    /**
     * Constructs a new <code>RawClassificationRequest</code>.
     * @alias module:model/RawClassificationRequest
     */
    constructor() { 
        
        RawClassificationRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RawClassificationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RawClassificationRequest} obj Optional instance to populate.
     * @return {module:model/RawClassificationRequest} The populated <code>RawClassificationRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RawClassificationRequest();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('notation')) {
                obj['notation'] = ApiClient.convertToType(data['notation'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} type
 */
RawClassificationRequest.prototype['type'] = undefined;

/**
 * @member {String} notation
 */
RawClassificationRequest.prototype['notation'] = undefined;

/**
 * @member {String} description
 */
RawClassificationRequest.prototype['description'] = undefined;






export default RawClassificationRequest;


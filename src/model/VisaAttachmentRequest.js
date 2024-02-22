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
 * The VisaAttachmentRequest model module.
 * @module model/VisaAttachmentRequest
 * @version 0.0.0
 */
class VisaAttachmentRequest {
    /**
     * Constructs a new <code>VisaAttachmentRequest</code>.
     * @alias module:model/VisaAttachmentRequest
     */
    constructor() { 
        
        VisaAttachmentRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VisaAttachmentRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VisaAttachmentRequest} obj Optional instance to populate.
     * @return {module:model/VisaAttachmentRequest} The populated <code>VisaAttachmentRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VisaAttachmentRequest();

            if (data.hasOwnProperty('attachment')) {
                obj['attachment'] = ApiClient.convertToType(data['attachment'], File);
            }
        }
        return obj;
    }


}

/**
 * @member {File} attachment
 */
VisaAttachmentRequest.prototype['attachment'] = undefined;






export default VisaAttachmentRequest;


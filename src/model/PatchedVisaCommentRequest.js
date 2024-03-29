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
 * The PatchedVisaCommentRequest model module.
 * @module model/PatchedVisaCommentRequest
 * @version 0.0.0
 */
class PatchedVisaCommentRequest {
    /**
     * Constructs a new <code>PatchedVisaCommentRequest</code>.
     * @alias module:model/PatchedVisaCommentRequest
     */
    constructor() { 
        
        PatchedVisaCommentRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PatchedVisaCommentRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PatchedVisaCommentRequest} obj Optional instance to populate.
     * @return {module:model/PatchedVisaCommentRequest} The populated <code>PatchedVisaCommentRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PatchedVisaCommentRequest();

            if (data.hasOwnProperty('author_id')) {
                obj['author_id'] = ApiClient.convertToType(data['author_id'], 'Number');
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'String');
            }
        }
        return obj;
    }


}

/**
 * This is the userproject_id. This field is only used if the call is made from an App
 * @member {Number} author_id
 */
PatchedVisaCommentRequest.prototype['author_id'] = undefined;

/**
 * @member {String} content
 */
PatchedVisaCommentRequest.prototype['content'] = undefined;






export default PatchedVisaCommentRequest;


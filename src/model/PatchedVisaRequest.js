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
 * The PatchedVisaRequest model module.
 * @module model/PatchedVisaRequest
 * @version 0.0.0
 */
class PatchedVisaRequest {
    /**
     * Constructs a new <code>PatchedVisaRequest</code>.
     * @alias module:model/PatchedVisaRequest
     */
    constructor() { 
        
        PatchedVisaRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PatchedVisaRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PatchedVisaRequest} obj Optional instance to populate.
     * @return {module:model/PatchedVisaRequest} The populated <code>PatchedVisaRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PatchedVisaRequest();

            if (data.hasOwnProperty('creator_id')) {
                obj['creator_id'] = ApiClient.convertToType(data['creator_id'], 'Number');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('deadline')) {
                obj['deadline'] = ApiClient.convertToType(data['deadline'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * This is the userproject_id. This field is only used if the call is made from an App
 * @member {Number} creator_id
 */
PatchedVisaRequest.prototype['creator_id'] = undefined;

/**
 * Description of the visa
 * @member {String} description
 */
PatchedVisaRequest.prototype['description'] = undefined;

/**
 * @member {Date} deadline
 */
PatchedVisaRequest.prototype['deadline'] = undefined;






export default PatchedVisaRequest;


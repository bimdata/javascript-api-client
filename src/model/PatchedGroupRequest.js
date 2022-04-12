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
 * The PatchedGroupRequest model module.
 * @module model/PatchedGroupRequest
 * @version 0.0.0
 */
class PatchedGroupRequest {
    /**
     * Constructs a new <code>PatchedGroupRequest</code>.
     * @alias module:model/PatchedGroupRequest
     */
    constructor() { 
        
        PatchedGroupRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PatchedGroupRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PatchedGroupRequest} obj Optional instance to populate.
     * @return {module:model/PatchedGroupRequest} The populated <code>PatchedGroupRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PatchedGroupRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Full name of the group
 * @member {String} name
 */
PatchedGroupRequest.prototype['name'] = undefined;

/**
 * @member {String} color
 */
PatchedGroupRequest.prototype['color'] = undefined;






export default PatchedGroupRequest;


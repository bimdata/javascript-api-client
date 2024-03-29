/**
 * BIMData API
 * BIMData API is a tool to interact with your models stored on BIMData’s servers.     Through the API, you can manage your projects, the clouds, upload your IFC files and manage them through endpoints.
 *
 * The version of the OpenAPI document: v1
 * Contact: support@bimdata.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The FosUserId model module.
 * @module model/FosUserId
 * @version 0.0.0
 */
class FosUserId {
    /**
     * Constructs a new <code>FosUserId</code>.
     * @alias module:model/FosUserId
     * @param userId {Number} 
     */
    constructor(userId) { 
        
        FosUserId.initialize(this, userId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, userId) { 
        obj['user_id'] = userId;
    }

    /**
     * Constructs a <code>FosUserId</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FosUserId} obj Optional instance to populate.
     * @return {module:model/FosUserId} The populated <code>FosUserId</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FosUserId();

            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} user_id
 */
FosUserId.prototype['user_id'] = undefined;






export default FosUserId;


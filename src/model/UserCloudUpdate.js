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
 * The UserCloudUpdate model module.
 * @module model/UserCloudUpdate
 * @version 0.0.0
 */
class UserCloudUpdate {
    /**
     * Constructs a new <code>UserCloudUpdate</code>.
     * @alias module:model/UserCloudUpdate
     */
    constructor() { 
        
        UserCloudUpdate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserCloudUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserCloudUpdate} obj Optional instance to populate.
     * @return {module:model/UserCloudUpdate} The populated <code>UserCloudUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserCloudUpdate();

            if (data.hasOwnProperty('role')) {
                obj['role'] = ApiClient.convertToType(data['role'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Role of the user in the cloud
 * @member {Number} role
 */
UserCloudUpdate.prototype['role'] = undefined;






export default UserCloudUpdate;


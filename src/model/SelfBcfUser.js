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
 * The SelfBcfUser model module.
 * @module model/SelfBcfUser
 * @version 0.0.0
 */
class SelfBcfUser {
    /**
     * Constructs a new <code>SelfBcfUser</code>.
     * @alias module:model/SelfBcfUser
     * @param id {String} 
     * @param email {String} 
     */
    constructor(id, email) { 
        
        SelfBcfUser.initialize(this, id, email);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, email) { 
        obj['id'] = id;
        obj['email'] = email;
    }

    /**
     * Constructs a <code>SelfBcfUser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SelfBcfUser} obj Optional instance to populate.
     * @return {module:model/SelfBcfUser} The populated <code>SelfBcfUser</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SelfBcfUser();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
SelfBcfUser.prototype['id'] = undefined;

/**
 * @member {String} name
 */
SelfBcfUser.prototype['name'] = undefined;

/**
 * @member {String} email
 */
SelfBcfUser.prototype['email'] = undefined;






export default SelfBcfUser;


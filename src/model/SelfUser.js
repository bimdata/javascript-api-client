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
import CloudRole from './CloudRole';
import Organization from './Organization';
import ProjectRole from './ProjectRole';

/**
 * The SelfUser model module.
 * @module model/SelfUser
 * @version 0.0.0
 */
class SelfUser {
    /**
     * Constructs a new <code>SelfUser</code>.
     * @alias module:model/SelfUser
     * @param email {String} 
     * @param firstname {String} 
     * @param lastname {String} 
     */
    constructor(email, firstname, lastname) { 
        
        SelfUser.initialize(this, email, firstname, lastname);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, email, firstname, lastname) { 
        obj['email'] = email;
        obj['firstname'] = firstname;
        obj['lastname'] = lastname;
    }

    /**
     * Constructs a <code>SelfUser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SelfUser} obj Optional instance to populate.
     * @return {module:model/SelfUser} The populated <code>SelfUser</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SelfUser();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('firstname')) {
                obj['firstname'] = ApiClient.convertToType(data['firstname'], 'String');
            }
            if (data.hasOwnProperty('lastname')) {
                obj['lastname'] = ApiClient.convertToType(data['lastname'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('organizations')) {
                obj['organizations'] = ApiClient.convertToType(data['organizations'], [Organization]);
            }
            if (data.hasOwnProperty('clouds')) {
                obj['clouds'] = ApiClient.convertToType(data['clouds'], [CloudRole]);
            }
            if (data.hasOwnProperty('projects')) {
                obj['projects'] = ApiClient.convertToType(data['projects'], [ProjectRole]);
            }
            if (data.hasOwnProperty('provider')) {
                obj['provider'] = ApiClient.convertToType(data['provider'], 'String');
            }
            if (data.hasOwnProperty('provider_sub')) {
                obj['provider_sub'] = ApiClient.convertToType(data['provider_sub'], 'String');
            }
            if (data.hasOwnProperty('sub')) {
                obj['sub'] = ApiClient.convertToType(data['sub'], 'String');
            }
            if (data.hasOwnProperty('profile_picture')) {
                obj['profile_picture'] = ApiClient.convertToType(data['profile_picture'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
SelfUser.prototype['id'] = undefined;

/**
 * @member {String} email
 */
SelfUser.prototype['email'] = undefined;

/**
 * @member {String} firstname
 */
SelfUser.prototype['firstname'] = undefined;

/**
 * @member {String} lastname
 */
SelfUser.prototype['lastname'] = undefined;

/**
 * @member {Date} created_at
 */
SelfUser.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
SelfUser.prototype['updated_at'] = undefined;

/**
 * @member {Array.<module:model/Organization>} organizations
 */
SelfUser.prototype['organizations'] = undefined;

/**
 * @member {Array.<module:model/CloudRole>} clouds
 */
SelfUser.prototype['clouds'] = undefined;

/**
 * @member {Array.<module:model/ProjectRole>} projects
 */
SelfUser.prototype['projects'] = undefined;

/**
 * @member {String} provider
 */
SelfUser.prototype['provider'] = undefined;

/**
 * sub from original identity provider
 * @member {String} provider_sub
 */
SelfUser.prototype['provider_sub'] = undefined;

/**
 * sub from Keycloak
 * @member {String} sub
 */
SelfUser.prototype['sub'] = undefined;

/**
 * @member {String} profile_picture
 */
SelfUser.prototype['profile_picture'] = undefined;






export default SelfUser;


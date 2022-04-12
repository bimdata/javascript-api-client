/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1 (v1)
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CloudRoleEnum from './CloudRoleEnum';

/**
 * The CloudInvitation model module.
 * @module model/CloudInvitation
 * @version 0.0.0
 */
class CloudInvitation {
    /**
     * Constructs a new <code>CloudInvitation</code>.
     * @alias module:model/CloudInvitation
     * @param id {Number} 
     * @param email {String} email of the user to invite
     * @param redirectUri {String} User will be redirected to this uri when they accept the invitation
     * @param role {module:model/CloudRoleEnum} 
     */
    constructor(id, email, redirectUri, role) { 
        
        CloudInvitation.initialize(this, id, email, redirectUri, role);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, email, redirectUri, role) { 
        obj['id'] = id;
        obj['email'] = email;
        obj['redirect_uri'] = redirectUri;
        obj['role'] = role;
    }

    /**
     * Constructs a <code>CloudInvitation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CloudInvitation} obj Optional instance to populate.
     * @return {module:model/CloudInvitation} The populated <code>CloudInvitation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CloudInvitation();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('redirect_uri')) {
                obj['redirect_uri'] = ApiClient.convertToType(data['redirect_uri'], 'String');
            }
            if (data.hasOwnProperty('role')) {
                obj['role'] = ApiClient.convertToType(data['role'], CloudRoleEnum);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
CloudInvitation.prototype['id'] = undefined;

/**
 * email of the user to invite
 * @member {String} email
 */
CloudInvitation.prototype['email'] = undefined;

/**
 * User will be redirected to this uri when they accept the invitation
 * @member {String} redirect_uri
 */
CloudInvitation.prototype['redirect_uri'] = undefined;

/**
 * @member {module:model/CloudRoleEnum} role
 */
CloudInvitation.prototype['role'] = undefined;






export default CloudInvitation;


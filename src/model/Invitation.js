/**
 * BIMData API
 * BIMData API is a tool to interact with your models stored on BIMData’s servers.     Through the API, you can manage your projects, the clouds, upload your IFC files and manage them through endpoints.
 *
 * The version of the OpenAPI document: v1
 * Contact: contact@bimdata.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Invitation model module.
 * @module model/Invitation
 * @version 0.0.0
 */
class Invitation {
    /**
     * Constructs a new <code>Invitation</code>.
     * @alias module:model/Invitation
     * @param redirectUri {String} User will be redirected to this uri when they accept the invitation
     * @param cloudName {String} 
     * @param cloudRole {Number} Role the user will have when they accept the invitation
     * @param email {String} email of the user to invite
     */
    constructor(redirectUri, cloudName, cloudRole, email) { 
        
        Invitation.initialize(this, redirectUri, cloudName, cloudRole, email);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, redirectUri, cloudName, cloudRole, email) { 
        obj['redirect_uri'] = redirectUri;
        obj['cloud_name'] = cloudName;
        obj['cloud_role'] = cloudRole;
        obj['email'] = email;
    }

    /**
     * Constructs a <code>Invitation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Invitation} obj Optional instance to populate.
     * @return {module:model/Invitation} The populated <code>Invitation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Invitation();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('client_id')) {
                obj['client_id'] = ApiClient.convertToType(data['client_id'], 'String');
            }
            if (data.hasOwnProperty('redirect_uri')) {
                obj['redirect_uri'] = ApiClient.convertToType(data['redirect_uri'], 'String');
            }
            if (data.hasOwnProperty('cloud_name')) {
                obj['cloud_name'] = ApiClient.convertToType(data['cloud_name'], 'String');
            }
            if (data.hasOwnProperty('cloud_role')) {
                obj['cloud_role'] = ApiClient.convertToType(data['cloud_role'], 'Number');
            }
            if (data.hasOwnProperty('project_name')) {
                obj['project_name'] = ApiClient.convertToType(data['project_name'], 'String');
            }
            if (data.hasOwnProperty('project_role')) {
                obj['project_role'] = ApiClient.convertToType(data['project_role'], 'Number');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('sender_provider_sub')) {
                obj['sender_provider_sub'] = ApiClient.convertToType(data['sender_provider_sub'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
Invitation.prototype['id'] = undefined;

/**
 * @member {String} client_id
 */
Invitation.prototype['client_id'] = undefined;

/**
 * User will be redirected to this uri when they accept the invitation
 * @member {String} redirect_uri
 */
Invitation.prototype['redirect_uri'] = undefined;

/**
 * @member {String} cloud_name
 */
Invitation.prototype['cloud_name'] = undefined;

/**
 * Role the user will have when they accept the invitation
 * @member {Number} cloud_role
 */
Invitation.prototype['cloud_role'] = undefined;

/**
 * @member {String} project_name
 */
Invitation.prototype['project_name'] = undefined;

/**
 * Role the user will have when they accept the invitation
 * @member {Number} project_role
 */
Invitation.prototype['project_role'] = undefined;

/**
 * email of the user to invite
 * @member {String} email
 */
Invitation.prototype['email'] = undefined;

/**
 *          A: Accepted         D: Denied         P: Pending         W: Accepted but waiting for user first login to finish the process         
 * @member {module:model/Invitation.StatusEnum} status
 */
Invitation.prototype['status'] = undefined;

/**
 * OIDC sub of the sender. The original sub from the provider is used instead of the broker sub
 * @member {String} sender_provider_sub
 */
Invitation.prototype['sender_provider_sub'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
Invitation['StatusEnum'] = {

    /**
     * value: "A"
     * @const
     */
    "A": "A",

    /**
     * value: "D"
     * @const
     */
    "D": "D",

    /**
     * value: "P"
     * @const
     */
    "P": "P",

    /**
     * value: "W"
     * @const
     */
    "W": "W"
};



export default Invitation;

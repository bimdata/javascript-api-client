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
 * The ProjectInvitation model module.
 * @module model/ProjectInvitation
 * @version 0.0.0
 */
class ProjectInvitation {
    /**
     * Constructs a new <code>ProjectInvitation</code>.
     * Invitation(id, sender, client, email, redirect_uri, cloud, cloud_role, project, project_role, provider, status)
     * @alias module:model/ProjectInvitation
     * @param email {String} email of the user to invite
     * @param redirectUri {String} User will be redirected to this uri when they accept the invitation
     * @param role {Number} 
     */
    constructor(email, redirectUri, role) { 
        
        ProjectInvitation.initialize(this, email, redirectUri, role);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, email, redirectUri, role) { 
        obj['email'] = email;
        obj['redirect_uri'] = redirectUri;
        obj['role'] = role;
    }

    /**
     * Constructs a <code>ProjectInvitation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectInvitation} obj Optional instance to populate.
     * @return {module:model/ProjectInvitation} The populated <code>ProjectInvitation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProjectInvitation();

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
                obj['role'] = ApiClient.convertToType(data['role'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
ProjectInvitation.prototype['id'] = undefined;

/**
 * email of the user to invite
 * @member {String} email
 */
ProjectInvitation.prototype['email'] = undefined;

/**
 * User will be redirected to this uri when they accept the invitation
 * @member {String} redirect_uri
 */
ProjectInvitation.prototype['redirect_uri'] = undefined;

/**
 * @member {Number} role
 */
ProjectInvitation.prototype['role'] = undefined;






export default ProjectInvitation;


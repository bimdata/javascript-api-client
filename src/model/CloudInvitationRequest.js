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
 * The CloudInvitationRequest model module.
 * @module model/CloudInvitationRequest
 * @version 0.0.0
 */
class CloudInvitationRequest {
    /**
     * Constructs a new <code>CloudInvitationRequest</code>.
     * @alias module:model/CloudInvitationRequest
     * @param email {String} email of the user to invite
     * @param redirectUri {String} User will be redirected to this uri when they accept the invitation
     */
    constructor(email, redirectUri) { 
        
        CloudInvitationRequest.initialize(this, email, redirectUri);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, email, redirectUri) { 
        obj['email'] = email;
        obj['redirect_uri'] = redirectUri;
    }

    /**
     * Constructs a <code>CloudInvitationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CloudInvitationRequest} obj Optional instance to populate.
     * @return {module:model/CloudInvitationRequest} The populated <code>CloudInvitationRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CloudInvitationRequest();

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('redirect_uri')) {
                obj['redirect_uri'] = ApiClient.convertToType(data['redirect_uri'], 'String');
            }
        }
        return obj;
    }


}

/**
 * email of the user to invite
 * @member {String} email
 */
CloudInvitationRequest.prototype['email'] = undefined;

/**
 * User will be redirected to this uri when they accept the invitation
 * @member {String} redirect_uri
 */
CloudInvitationRequest.prototype['redirect_uri'] = undefined;






export default CloudInvitationRequest;


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
     */
    constructor(id, email, redirectUri) { 
        
        CloudInvitation.initialize(this, id, email, redirectUri);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, email, redirectUri) { 
        obj['id'] = id;
        obj['email'] = email;
        obj['redirect_uri'] = redirectUri;
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
                obj['role'] = ApiClient.convertToType(data['role'], 'Number');
            }
            if (data.hasOwnProperty('project_role')) {
                obj['project_role'] = ApiClient.convertToType(data['project_role'], 'Number');
            }
            if (data.hasOwnProperty('in_all_projects')) {
                obj['in_all_projects'] = ApiClient.convertToType(data['in_all_projects'], 'Boolean');
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
 * * `100` - admin * `50` - user
 * @member {module:model/CloudInvitation.RoleEnum} role
 * @default RoleEnum.100
 */
CloudInvitation.prototype['role'] = RoleEnum.100;

/**
 * * `100` - admin * `50` - user * `25` - guest
 * @member {module:model/CloudInvitation.ProjectRoleEnum} project_role
 */
CloudInvitation.prototype['project_role'] = undefined;

/**
 * When inviting non-admin cloud user, specify if the user will be invited in all existing projects. project_role needs to be specified.
 * @member {Boolean} in_all_projects
 * @default false
 */
CloudInvitation.prototype['in_all_projects'] = false;





/**
 * Allowed values for the <code>role</code> property.
 * @enum {Number}
 * @readonly
 */
CloudInvitation['RoleEnum'] = {

    /**
     * value: 100
     * @const
     */
    "100": 100,

    /**
     * value: 50
     * @const
     */
    "50": 50
};


/**
 * Allowed values for the <code>project_role</code> property.
 * @enum {Number}
 * @readonly
 */
CloudInvitation['ProjectRoleEnum'] = {

    /**
     * value: 100
     * @const
     */
    "100": 100,

    /**
     * value: 50
     * @const
     */
    "50": 50,

    /**
     * value: 25
     * @const
     */
    "25": 25
};



export default CloudInvitation;


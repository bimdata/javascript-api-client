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
 * The FolderUserProject model module.
 * @module model/FolderUserProject
 * @version 0.0.0
 */
class FolderUserProject {
    /**
     * Constructs a new <code>FolderUserProject</code>.
     * This is a flattened nested represetation of FosUser and Invitation models in this serializer.
     * @alias module:model/FolderUserProject
     * @param id {Number} 
     * @param userId {Number} 
     * @param invitationId {Number} 
     * @param email {String} 
     * @param firstname {String} 
     * @param lastname {String} 
     * @param profilePicture {String} 
     * @param role {module:model/FolderUserProject.RoleEnum} 
     * @param permission {module:model/FolderUserProject.PermissionEnum} 
     */
    constructor(id, userId, invitationId, email, firstname, lastname, profilePicture, role, permission) { 
        
        FolderUserProject.initialize(this, id, userId, invitationId, email, firstname, lastname, profilePicture, role, permission);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, userId, invitationId, email, firstname, lastname, profilePicture, role, permission) { 
        obj['id'] = id;
        obj['user_id'] = userId;
        obj['invitation_id'] = invitationId;
        obj['email'] = email;
        obj['firstname'] = firstname;
        obj['lastname'] = lastname;
        obj['profile_picture'] = profilePicture;
        obj['role'] = role;
        obj['permission'] = permission;
    }

    /**
     * Constructs a <code>FolderUserProject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FolderUserProject} obj Optional instance to populate.
     * @return {module:model/FolderUserProject} The populated <code>FolderUserProject</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FolderUserProject();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Number');
            }
            if (data.hasOwnProperty('invitation_id')) {
                obj['invitation_id'] = ApiClient.convertToType(data['invitation_id'], 'Number');
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
            if (data.hasOwnProperty('profile_picture')) {
                obj['profile_picture'] = ApiClient.convertToType(data['profile_picture'], 'String');
            }
            if (data.hasOwnProperty('role')) {
                obj['role'] = ApiClient.convertToType(data['role'], 'Number');
            }
            if (data.hasOwnProperty('permission')) {
                obj['permission'] = ApiClient.convertToType(data['permission'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
FolderUserProject.prototype['id'] = undefined;

/**
 * @member {Number} user_id
 */
FolderUserProject.prototype['user_id'] = undefined;

/**
 * @member {Number} invitation_id
 */
FolderUserProject.prototype['invitation_id'] = undefined;

/**
 * @member {String} email
 */
FolderUserProject.prototype['email'] = undefined;

/**
 * @member {String} firstname
 */
FolderUserProject.prototype['firstname'] = undefined;

/**
 * @member {String} lastname
 */
FolderUserProject.prototype['lastname'] = undefined;

/**
 * @member {String} profile_picture
 */
FolderUserProject.prototype['profile_picture'] = undefined;

/**
 * @member {module:model/FolderUserProject.RoleEnum} role
 */
FolderUserProject.prototype['role'] = undefined;

/**
 * @member {module:model/FolderUserProject.PermissionEnum} permission
 */
FolderUserProject.prototype['permission'] = undefined;





/**
 * Allowed values for the <code>role</code> property.
 * @enum {Number}
 * @readonly
 */
FolderUserProject['RoleEnum'] = {

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


/**
 * Allowed values for the <code>permission</code> property.
 * @enum {Number}
 * @readonly
 */
FolderUserProject['PermissionEnum'] = {

    /**
     * value: 1
     * @const
     */
    "1": 1,

    /**
     * value: 50
     * @const
     */
    "50": 50,

    /**
     * value: 100
     * @const
     */
    "100": 100
};



export default FolderUserProject;


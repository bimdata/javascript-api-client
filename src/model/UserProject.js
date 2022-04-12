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
import ProjectRoleEnum from './ProjectRoleEnum';

/**
 * The UserProject model module.
 * @module model/UserProject
 * @version 0.0.0
 */
class UserProject {
    /**
     * Constructs a new <code>UserProject</code>.
     * This is a flattened nested represetation of FosUser and Invitation models in this serializer.
     * @alias module:model/UserProject
     * @param id {Number} 
     * @param userId {Number} 
     * @param invitationId {Number} 
     * @param email {String} 
     * @param firstname {String} 
     * @param lastname {String} 
     * @param profilePicture {String} 
     * @param role {module:model/ProjectRoleEnum} 
     */
    constructor(id, userId, invitationId, email, firstname, lastname, profilePicture, role) { 
        
        UserProject.initialize(this, id, userId, invitationId, email, firstname, lastname, profilePicture, role);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, userId, invitationId, email, firstname, lastname, profilePicture, role) { 
        obj['id'] = id;
        obj['user_id'] = userId;
        obj['invitation_id'] = invitationId;
        obj['email'] = email;
        obj['firstname'] = firstname;
        obj['lastname'] = lastname;
        obj['profile_picture'] = profilePicture;
        obj['role'] = role;
    }

    /**
     * Constructs a <code>UserProject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserProject} obj Optional instance to populate.
     * @return {module:model/UserProject} The populated <code>UserProject</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserProject();

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
                obj['role'] = ApiClient.convertToType(data['role'], ProjectRoleEnum);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
UserProject.prototype['id'] = undefined;

/**
 * @member {Number} user_id
 */
UserProject.prototype['user_id'] = undefined;

/**
 * @member {Number} invitation_id
 */
UserProject.prototype['invitation_id'] = undefined;

/**
 * @member {String} email
 */
UserProject.prototype['email'] = undefined;

/**
 * @member {String} firstname
 */
UserProject.prototype['firstname'] = undefined;

/**
 * @member {String} lastname
 */
UserProject.prototype['lastname'] = undefined;

/**
 * @member {String} profile_picture
 */
UserProject.prototype['profile_picture'] = undefined;

/**
 * @member {module:model/ProjectRoleEnum} role
 */
UserProject.prototype['role'] = undefined;






export default UserProject;


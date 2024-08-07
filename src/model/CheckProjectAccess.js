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
import User from './User';

/**
 * The CheckProjectAccess model module.
 * @module model/CheckProjectAccess
 * @version 0.0.0
 */
class CheckProjectAccess {
    /**
     * Constructs a new <code>CheckProjectAccess</code>.
     * @alias module:model/CheckProjectAccess
     * @param hasReadPermission {Boolean} 
     * @param hasWritePermission {Boolean} 
     * @param hasAdminPermission {Boolean} 
     * @param tokenScopes {Array.<String>} 
     * @param usableScopes {Array.<String>} Some tokens may have write scopes (eg: model:write) but the user of the token is a guest in the project so they can't use the scopes.
     */
    constructor(hasReadPermission, hasWritePermission, hasAdminPermission, tokenScopes, usableScopes) { 
        
        CheckProjectAccess.initialize(this, hasReadPermission, hasWritePermission, hasAdminPermission, tokenScopes, usableScopes);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, hasReadPermission, hasWritePermission, hasAdminPermission, tokenScopes, usableScopes) { 
        obj['has_read_permission'] = hasReadPermission;
        obj['has_write_permission'] = hasWritePermission;
        obj['has_admin_permission'] = hasAdminPermission;
        obj['token_scopes'] = tokenScopes;
        obj['usable_scopes'] = usableScopes;
    }

    /**
     * Constructs a <code>CheckProjectAccess</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CheckProjectAccess} obj Optional instance to populate.
     * @return {module:model/CheckProjectAccess} The populated <code>CheckProjectAccess</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CheckProjectAccess();

            if (data.hasOwnProperty('has_read_permission')) {
                obj['has_read_permission'] = ApiClient.convertToType(data['has_read_permission'], 'Boolean');
            }
            if (data.hasOwnProperty('has_write_permission')) {
                obj['has_write_permission'] = ApiClient.convertToType(data['has_write_permission'], 'Boolean');
            }
            if (data.hasOwnProperty('has_admin_permission')) {
                obj['has_admin_permission'] = ApiClient.convertToType(data['has_admin_permission'], 'Boolean');
            }
            if (data.hasOwnProperty('token_scopes')) {
                obj['token_scopes'] = ApiClient.convertToType(data['token_scopes'], ['String']);
            }
            if (data.hasOwnProperty('usable_scopes')) {
                obj['usable_scopes'] = ApiClient.convertToType(data['usable_scopes'], ['String']);
            }
            if (data.hasOwnProperty('user_role')) {
                obj['user_role'] = ApiClient.convertToType(data['user_role'], 'Number');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], User);
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} has_read_permission
 */
CheckProjectAccess.prototype['has_read_permission'] = undefined;

/**
 * @member {Boolean} has_write_permission
 */
CheckProjectAccess.prototype['has_write_permission'] = undefined;

/**
 * @member {Boolean} has_admin_permission
 */
CheckProjectAccess.prototype['has_admin_permission'] = undefined;

/**
 * @member {Array.<String>} token_scopes
 */
CheckProjectAccess.prototype['token_scopes'] = undefined;

/**
 * Some tokens may have write scopes (eg: model:write) but the user of the token is a guest in the project so they can't use the scopes.
 * @member {Array.<String>} usable_scopes
 */
CheckProjectAccess.prototype['usable_scopes'] = undefined;

/**
 * * `100` - admin * `50` - user * `25` - guest
 * @member {module:model/CheckProjectAccess.UserRoleEnum} user_role
 */
CheckProjectAccess.prototype['user_role'] = undefined;

/**
 * @member {module:model/User} user
 */
CheckProjectAccess.prototype['user'] = undefined;





/**
 * Allowed values for the <code>user_role</code> property.
 * @enum {Number}
 * @readonly
 */
CheckProjectAccess['UserRoleEnum'] = {

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
    "25": 25,

    /**
     * value: null
     * @const
     */
    "null": null
};



export default CheckProjectAccess;


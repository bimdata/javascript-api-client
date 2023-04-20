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
 * The PatchedGroupFolderRequest model module.
 * @module model/PatchedGroupFolderRequest
 * @version 0.0.0
 */
class PatchedGroupFolderRequest {
    /**
     * Constructs a new <code>PatchedGroupFolderRequest</code>.
     * @alias module:model/PatchedGroupFolderRequest
     */
    constructor() { 
        
        PatchedGroupFolderRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PatchedGroupFolderRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PatchedGroupFolderRequest} obj Optional instance to populate.
     * @return {module:model/PatchedGroupFolderRequest} The populated <code>PatchedGroupFolderRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PatchedGroupFolderRequest();

            if (data.hasOwnProperty('permission')) {
                obj['permission'] = ApiClient.convertToType(data['permission'], 'Number');
            }
            if (data.hasOwnProperty('propagate')) {
                obj['propagate'] = ApiClient.convertToType(data['propagate'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PatchedGroupFolderRequest.PermissionEnum} permission
 */
PatchedGroupFolderRequest.prototype['permission'] = undefined;

/**
 * @member {Boolean} propagate
 * @default false
 */
PatchedGroupFolderRequest.prototype['propagate'] = false;





/**
 * Allowed values for the <code>permission</code> property.
 * @enum {Number}
 * @readonly
 */
PatchedGroupFolderRequest['PermissionEnum'] = {

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
    "100": 100,

    /**
     * value: null
     * @const
     */
    "null": null
};



export default PatchedGroupFolderRequest;


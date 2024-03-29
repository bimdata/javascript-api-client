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
 * The ProjectImportRequest model module.
 * @module model/ProjectImportRequest
 * @version 0.0.0
 */
class ProjectImportRequest {
    /**
     * Constructs a new <code>ProjectImportRequest</code>.
     * @alias module:model/ProjectImportRequest
     * @param projectId {Number} The source project_id
     */
    constructor(projectId) { 
        
        ProjectImportRequest.initialize(this, projectId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, projectId) { 
        obj['project_id'] = projectId;
    }

    /**
     * Constructs a <code>ProjectImportRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectImportRequest} obj Optional instance to populate.
     * @return {module:model/ProjectImportRequest} The populated <code>ProjectImportRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProjectImportRequest();

            if (data.hasOwnProperty('project_id')) {
                obj['project_id'] = ApiClient.convertToType(data['project_id'], 'Number');
            }
            if (data.hasOwnProperty('import_dms')) {
                obj['import_dms'] = ApiClient.convertToType(data['import_dms'], 'Boolean');
            }
            if (data.hasOwnProperty('import_users')) {
                obj['import_users'] = ApiClient.convertToType(data['import_users'], 'Boolean');
            }
            if (data.hasOwnProperty('import_groups')) {
                obj['import_groups'] = ApiClient.convertToType(data['import_groups'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * The source project_id
 * @member {Number} project_id
 */
ProjectImportRequest.prototype['project_id'] = undefined;

/**
 * @member {Boolean} import_dms
 * @default true
 */
ProjectImportRequest.prototype['import_dms'] = true;

/**
 * @member {Boolean} import_users
 * @default true
 */
ProjectImportRequest.prototype['import_users'] = true;

/**
 * @member {Boolean} import_groups
 * @default true
 */
ProjectImportRequest.prototype['import_groups'] = true;






export default ProjectImportRequest;


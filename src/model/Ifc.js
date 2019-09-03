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
import Document from './Document';
import User from './User';

/**
 * The Ifc model module.
 * @module model/Ifc
 * @version 0.0.0
 */
class Ifc {
    /**
     * Constructs a new <code>Ifc</code>.
     * @alias module:model/Ifc
     */
    constructor() { 
        
        Ifc.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Ifc</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Ifc} obj Optional instance to populate.
     * @return {module:model/Ifc} The populated <code>Ifc</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Ifc();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('creator')) {
                obj['creator'] = User.constructFromObject(data['creator']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('document_id')) {
                obj['document_id'] = ApiClient.convertToType(data['document_id'], 'String');
            }
            if (data.hasOwnProperty('document')) {
                obj['document'] = Document.constructFromObject(data['document']);
            }
            if (data.hasOwnProperty('structure_file')) {
                obj['structure_file'] = ApiClient.convertToType(data['structure_file'], 'String');
            }
            if (data.hasOwnProperty('systems_file')) {
                obj['systems_file'] = ApiClient.convertToType(data['systems_file'], 'String');
            }
            if (data.hasOwnProperty('map_file')) {
                obj['map_file'] = ApiClient.convertToType(data['map_file'], 'String');
            }
            if (data.hasOwnProperty('gltf_file')) {
                obj['gltf_file'] = ApiClient.convertToType(data['gltf_file'], 'String');
            }
            if (data.hasOwnProperty('bvh_tree_file')) {
                obj['bvh_tree_file'] = ApiClient.convertToType(data['bvh_tree_file'], 'String');
            }
            if (data.hasOwnProperty('viewer_360_file')) {
                obj['viewer_360_file'] = ApiClient.convertToType(data['viewer_360_file'], 'String');
            }
            if (data.hasOwnProperty('project_id')) {
                obj['project_id'] = ApiClient.convertToType(data['project_id'], 'String');
            }
            if (data.hasOwnProperty('world_position')) {
                obj['world_position'] = ApiClient.convertToType(data['world_position'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
Ifc.prototype['id'] = undefined;

/**
 * @member {String} name
 */
Ifc.prototype['name'] = undefined;

/**
 * @member {module:model/User} creator
 */
Ifc.prototype['creator'] = undefined;

/**
 * @member {String} status
 */
Ifc.prototype['status'] = undefined;

/**
 * @member {Date} created_at
 */
Ifc.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
Ifc.prototype['updated_at'] = undefined;

/**
 * @member {String} document_id
 */
Ifc.prototype['document_id'] = undefined;

/**
 * @member {module:model/Document} document
 */
Ifc.prototype['document'] = undefined;

/**
 * @member {String} structure_file
 */
Ifc.prototype['structure_file'] = undefined;

/**
 * @member {String} systems_file
 */
Ifc.prototype['systems_file'] = undefined;

/**
 * @member {String} map_file
 */
Ifc.prototype['map_file'] = undefined;

/**
 * @member {String} gltf_file
 */
Ifc.prototype['gltf_file'] = undefined;

/**
 * @member {String} bvh_tree_file
 */
Ifc.prototype['bvh_tree_file'] = undefined;

/**
 * @member {String} viewer_360_file
 */
Ifc.prototype['viewer_360_file'] = undefined;

/**
 * @member {String} project_id
 */
Ifc.prototype['project_id'] = undefined;

/**
 * [x,y,z] array of the position of the local_placement in world coordinates
 * @member {Array.<Number>} world_position
 */
Ifc.prototype['world_position'] = undefined;






export default Ifc;


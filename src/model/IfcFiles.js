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
 * The IfcFiles model module.
 * @module model/IfcFiles
 * @version 0.0.0
 */
class IfcFiles {
    /**
     * Constructs a new <code>IfcFiles</code>.
     * Ifc(id, creator, document, project, created_at, updated_at, structure_file, systems_file, zones_file, map_file, gltf_file, gltf_with_openings_file, bvh_tree_file, viewer_360_file, xkt_file, world_position, is_demo, errors, warnings, source, update_check_needed, archived)
     * @alias module:model/IfcFiles
     */
    constructor() { 
        
        IfcFiles.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IfcFiles</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IfcFiles} obj Optional instance to populate.
     * @return {module:model/IfcFiles} The populated <code>IfcFiles</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IfcFiles();

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
            if (data.hasOwnProperty('gltf_with_openings_file')) {
                obj['gltf_with_openings_file'] = ApiClient.convertToType(data['gltf_with_openings_file'], 'String');
            }
            if (data.hasOwnProperty('bvh_tree_file')) {
                obj['bvh_tree_file'] = ApiClient.convertToType(data['bvh_tree_file'], 'String');
            }
            if (data.hasOwnProperty('viewer_360_file')) {
                obj['viewer_360_file'] = ApiClient.convertToType(data['viewer_360_file'], 'String');
            }
            if (data.hasOwnProperty('xkt_file')) {
                obj['xkt_file'] = ApiClient.convertToType(data['xkt_file'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} structure_file
 */
IfcFiles.prototype['structure_file'] = undefined;

/**
 * @member {String} systems_file
 */
IfcFiles.prototype['systems_file'] = undefined;

/**
 * @member {String} map_file
 */
IfcFiles.prototype['map_file'] = undefined;

/**
 * @member {String} gltf_file
 */
IfcFiles.prototype['gltf_file'] = undefined;

/**
 * @member {String} gltf_with_openings_file
 */
IfcFiles.prototype['gltf_with_openings_file'] = undefined;

/**
 * @member {String} bvh_tree_file
 */
IfcFiles.prototype['bvh_tree_file'] = undefined;

/**
 * @member {String} viewer_360_file
 */
IfcFiles.prototype['viewer_360_file'] = undefined;

/**
 * @member {String} xkt_file
 */
IfcFiles.prototype['xkt_file'] = undefined;






export default IfcFiles;


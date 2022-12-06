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

/**
 * The PatchedModelFilesRequest model module.
 * @module model/PatchedModelFilesRequest
 * @version 0.0.0
 */
class PatchedModelFilesRequest {
    /**
     * Constructs a new <code>PatchedModelFilesRequest</code>.
     * @alias module:model/PatchedModelFilesRequest
     */
    constructor() { 
        
        PatchedModelFilesRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PatchedModelFilesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PatchedModelFilesRequest} obj Optional instance to populate.
     * @return {module:model/PatchedModelFilesRequest} The populated <code>PatchedModelFilesRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PatchedModelFilesRequest();

            if (data.hasOwnProperty('structure_file')) {
                obj['structure_file'] = ApiClient.convertToType(data['structure_file'], File);
            }
            if (data.hasOwnProperty('systems_file')) {
                obj['systems_file'] = ApiClient.convertToType(data['systems_file'], File);
            }
            if (data.hasOwnProperty('map_file')) {
                obj['map_file'] = ApiClient.convertToType(data['map_file'], File);
            }
            if (data.hasOwnProperty('gltf_file')) {
                obj['gltf_file'] = ApiClient.convertToType(data['gltf_file'], File);
            }
            if (data.hasOwnProperty('gltf_with_openings_file')) {
                obj['gltf_with_openings_file'] = ApiClient.convertToType(data['gltf_with_openings_file'], File);
            }
            if (data.hasOwnProperty('bvh_tree_file')) {
                obj['bvh_tree_file'] = ApiClient.convertToType(data['bvh_tree_file'], File);
            }
            if (data.hasOwnProperty('viewer_360_file')) {
                obj['viewer_360_file'] = ApiClient.convertToType(data['viewer_360_file'], File);
            }
            if (data.hasOwnProperty('xkt_file')) {
                obj['xkt_file'] = ApiClient.convertToType(data['xkt_file'], File);
            }
        }
        return obj;
    }


}

/**
 * @member {File} structure_file
 */
PatchedModelFilesRequest.prototype['structure_file'] = undefined;

/**
 * @member {File} systems_file
 */
PatchedModelFilesRequest.prototype['systems_file'] = undefined;

/**
 * @member {File} map_file
 */
PatchedModelFilesRequest.prototype['map_file'] = undefined;

/**
 * @member {File} gltf_file
 */
PatchedModelFilesRequest.prototype['gltf_file'] = undefined;

/**
 * @member {File} gltf_with_openings_file
 */
PatchedModelFilesRequest.prototype['gltf_with_openings_file'] = undefined;

/**
 * @member {File} bvh_tree_file
 */
PatchedModelFilesRequest.prototype['bvh_tree_file'] = undefined;

/**
 * @member {File} viewer_360_file
 */
PatchedModelFilesRequest.prototype['viewer_360_file'] = undefined;

/**
 * @member {File} xkt_file
 */
PatchedModelFilesRequest.prototype['xkt_file'] = undefined;






export default PatchedModelFilesRequest;

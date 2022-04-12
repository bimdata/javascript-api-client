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
import ModelSourceEnum from './ModelSourceEnum';

/**
 * The PatchedModelRequest model module.
 * @module model/PatchedModelRequest
 * @version 0.0.0
 */
class PatchedModelRequest {
    /**
     * Constructs a new <code>PatchedModelRequest</code>.
     * @alias module:model/PatchedModelRequest
     */
    constructor() { 
        
        PatchedModelRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PatchedModelRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PatchedModelRequest} obj Optional instance to populate.
     * @return {module:model/PatchedModelRequest} The populated <code>PatchedModelRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PatchedModelRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = ModelSourceEnum.constructFromObject(data['source']);
            }
            if (data.hasOwnProperty('world_position')) {
                obj['world_position'] = ApiClient.convertToType(data['world_position'], ['Number']);
            }
            if (data.hasOwnProperty('size_ratio')) {
                obj['size_ratio'] = ApiClient.convertToType(data['size_ratio'], 'Number');
            }
            if (data.hasOwnProperty('archived')) {
                obj['archived'] = ApiClient.convertToType(data['archived'], 'Boolean');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
            if (data.hasOwnProperty('north_vector')) {
                obj['north_vector'] = ApiClient.convertToType(data['north_vector'], [['Number']]);
            }
            if (data.hasOwnProperty('recommanded_2d_angle')) {
                obj['recommanded_2d_angle'] = ApiClient.convertToType(data['recommanded_2d_angle'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
PatchedModelRequest.prototype['name'] = undefined;

/**
 * @member {String} status
 */
PatchedModelRequest.prototype['status'] = undefined;

/**
 * @member {module:model/ModelSourceEnum} source
 */
PatchedModelRequest.prototype['source'] = undefined;

/**
 * [x,y,z] array of the position of the local_placement in world coordinates
 * @member {Array.<Number>} world_position
 */
PatchedModelRequest.prototype['world_position'] = undefined;

/**
 * How many meters a unit represents
 * @member {Number} size_ratio
 */
PatchedModelRequest.prototype['size_ratio'] = undefined;

/**
 * @member {Boolean} archived
 */
PatchedModelRequest.prototype['archived'] = undefined;

/**
 * This field is only for information. Updating it won't impact the export.
 * @member {String} version
 */
PatchedModelRequest.prototype['version'] = undefined;

/**
 * This field is only for information. Updating it won't impact the export.
 * @member {Array.<Array.<Number>>} north_vector
 */
PatchedModelRequest.prototype['north_vector'] = undefined;

/**
 * This is the angle in clockwise degree to apply on the 2D to optimise the horizontality of objects. This field is only for information. Updating it won't impact the export.
 * @member {Number} recommanded_2d_angle
 */
PatchedModelRequest.prototype['recommanded_2d_angle'] = undefined;






export default PatchedModelRequest;


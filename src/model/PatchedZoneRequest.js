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
import SpaceRequest from './SpaceRequest';
import ZoneRequest from './ZoneRequest';

/**
 * The PatchedZoneRequest model module.
 * @module model/PatchedZoneRequest
 * @version 0.0.0
 */
class PatchedZoneRequest {
    /**
     * Constructs a new <code>PatchedZoneRequest</code>.
     * Adds nested create feature
     * @alias module:model/PatchedZoneRequest
     */
    constructor() { 
        
        PatchedZoneRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PatchedZoneRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PatchedZoneRequest} obj Optional instance to populate.
     * @return {module:model/PatchedZoneRequest} The populated <code>PatchedZoneRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PatchedZoneRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('zones')) {
                obj['zones'] = ApiClient.convertToType(data['zones'], [ZoneRequest]);
            }
            if (data.hasOwnProperty('parent_id')) {
                obj['parent_id'] = ApiClient.convertToType(data['parent_id'], 'Number');
            }
            if (data.hasOwnProperty('spaces')) {
                obj['spaces'] = ApiClient.convertToType(data['spaces'], [SpaceRequest]);
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
PatchedZoneRequest.prototype['name'] = undefined;

/**
 * @member {String} uuid
 */
PatchedZoneRequest.prototype['uuid'] = undefined;

/**
 * @member {Array.<module:model/ZoneRequest>} zones
 */
PatchedZoneRequest.prototype['zones'] = undefined;

/**
 * @member {Number} parent_id
 */
PatchedZoneRequest.prototype['parent_id'] = undefined;

/**
 * @member {Array.<module:model/SpaceRequest>} spaces
 */
PatchedZoneRequest.prototype['spaces'] = undefined;

/**
 * @member {String} color
 */
PatchedZoneRequest.prototype['color'] = undefined;






export default PatchedZoneRequest;

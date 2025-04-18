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
import Zone from './Zone';
import ZoneSpaceRequest from './ZoneSpaceRequest';

/**
 * The ZoneRequest model module.
 * @module model/ZoneRequest
 * @version 0.0.0
 */
class ZoneRequest {
    /**
     * Constructs a new <code>ZoneRequest</code>.
     * Adds nested create feature
     * @alias module:model/ZoneRequest
     * @param uuid {String} 
     */
    constructor(uuid) { 
        
        ZoneRequest.initialize(this, uuid);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, uuid) { 
        obj['uuid'] = uuid;
    }

    /**
     * Constructs a <code>ZoneRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ZoneRequest} obj Optional instance to populate.
     * @return {module:model/ZoneRequest} The populated <code>ZoneRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ZoneRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('zones')) {
                obj['zones'] = ApiClient.convertToType(data['zones'], [Zone]);
            }
            if (data.hasOwnProperty('parent_id')) {
                obj['parent_id'] = ApiClient.convertToType(data['parent_id'], 'Number');
            }
            if (data.hasOwnProperty('spaces')) {
                obj['spaces'] = ApiClient.convertToType(data['spaces'], [ZoneSpaceRequest]);
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'String');
            }
            if (data.hasOwnProperty('order')) {
                obj['order'] = ApiClient.convertToType(data['order'], 'Number');
            }
            if (data.hasOwnProperty('storey_uuid')) {
                obj['storey_uuid'] = ApiClient.convertToType(data['storey_uuid'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
ZoneRequest.prototype['name'] = undefined;

/**
 * @member {String} uuid
 */
ZoneRequest.prototype['uuid'] = undefined;

/**
 * @member {Array.<module:model/Zone>} zones
 */
ZoneRequest.prototype['zones'] = undefined;

/**
 * @member {Number} parent_id
 */
ZoneRequest.prototype['parent_id'] = undefined;

/**
 * @member {Array.<module:model/ZoneSpaceRequest>} spaces
 */
ZoneRequest.prototype['spaces'] = undefined;

/**
 * @member {String} color
 */
ZoneRequest.prototype['color'] = undefined;

/**
 * @member {Number} order
 */
ZoneRequest.prototype['order'] = undefined;

/**
 * IFC element or element type UUID
 * @member {String} storey_uuid
 */
ZoneRequest.prototype['storey_uuid'] = undefined;






export default ZoneRequest;


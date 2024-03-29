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
import GeometryPointRequest from './GeometryPointRequest';

/**
 * The ZoneSpaceRequest model module.
 * @module model/ZoneSpaceRequest
 * @version 0.0.0
 */
class ZoneSpaceRequest {
    /**
     * Constructs a new <code>ZoneSpaceRequest</code>.
     * @alias module:model/ZoneSpaceRequest
     * @param uuid {String} 
     */
    constructor(uuid) { 
        
        ZoneSpaceRequest.initialize(this, uuid);
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
     * Constructs a <code>ZoneSpaceRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ZoneSpaceRequest} obj Optional instance to populate.
     * @return {module:model/ZoneSpaceRequest} The populated <code>ZoneSpaceRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ZoneSpaceRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('longname')) {
                obj['longname'] = ApiClient.convertToType(data['longname'], 'String');
            }
            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('geometry')) {
                obj['geometry'] = ApiClient.convertToType(data['geometry'], [GeometryPointRequest]);
            }
            if (data.hasOwnProperty('order')) {
                obj['order'] = ApiClient.convertToType(data['order'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
ZoneSpaceRequest.prototype['name'] = undefined;

/**
 * @member {String} longname
 */
ZoneSpaceRequest.prototype['longname'] = undefined;

/**
 * @member {String} uuid
 */
ZoneSpaceRequest.prototype['uuid'] = undefined;

/**
 * @member {Array.<module:model/GeometryPointRequest>} geometry
 */
ZoneSpaceRequest.prototype['geometry'] = undefined;

/**
 * @member {Number} order
 */
ZoneSpaceRequest.prototype['order'] = undefined;






export default ZoneSpaceRequest;


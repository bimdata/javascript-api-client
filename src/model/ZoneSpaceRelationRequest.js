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
 * The ZoneSpaceRelationRequest model module.
 * @module model/ZoneSpaceRelationRequest
 * @version 0.0.0
 */
class ZoneSpaceRelationRequest {
    /**
     * Constructs a new <code>ZoneSpaceRelationRequest</code>.
     * @alias module:model/ZoneSpaceRelationRequest
     * @param id {Number} 
     */
    constructor(id) { 
        
        ZoneSpaceRelationRequest.initialize(this, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id) { 
        obj['id'] = id;
    }

    /**
     * Constructs a <code>ZoneSpaceRelationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ZoneSpaceRelationRequest} obj Optional instance to populate.
     * @return {module:model/ZoneSpaceRelationRequest} The populated <code>ZoneSpaceRelationRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ZoneSpaceRelationRequest();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('order')) {
                obj['order'] = ApiClient.convertToType(data['order'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
ZoneSpaceRelationRequest.prototype['id'] = undefined;

/**
 * @member {Number} order
 */
ZoneSpaceRelationRequest.prototype['order'] = undefined;






export default ZoneSpaceRelationRequest;


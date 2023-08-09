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
 * The PinRequest model module.
 * @module model/PinRequest
 * @version 0.0.0
 */
class PinRequest {
    /**
     * Constructs a new <code>PinRequest</code>.
     * @alias module:model/PinRequest
     * @param point {module:model/GeometryPointRequest} 
     */
    constructor(point) { 
        
        PinRequest.initialize(this, point);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, point) { 
        obj['point'] = point;
    }

    /**
     * Constructs a <code>PinRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PinRequest} obj Optional instance to populate.
     * @return {module:model/PinRequest} The populated <code>PinRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PinRequest();

            if (data.hasOwnProperty('guid')) {
                obj['guid'] = ApiClient.convertToType(data['guid'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'String');
            }
            if (data.hasOwnProperty('point')) {
                obj['point'] = GeometryPointRequest.constructFromObject(data['point']);
            }
            if (data.hasOwnProperty('index')) {
                obj['index'] = ApiClient.convertToType(data['index'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} guid
 */
PinRequest.prototype['guid'] = undefined;

/**
 * @member {String} name
 */
PinRequest.prototype['name'] = undefined;

/**
 * @member {String} color
 */
PinRequest.prototype['color'] = undefined;

/**
 * @member {module:model/GeometryPointRequest} point
 */
PinRequest.prototype['point'] = undefined;

/**
 * @member {Number} index
 */
PinRequest.prototype['index'] = undefined;






export default PinRequest;


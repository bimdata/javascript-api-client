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
 * The PointRequest model module.
 * @module model/PointRequest
 * @version 0.0.0
 */
class PointRequest {
    /**
     * Constructs a new <code>PointRequest</code>.
     * Adds nested create feature
     * @alias module:model/PointRequest
     * @param x {Number} 
     * @param y {Number} 
     * @param z {Number} 
     */
    constructor(x, y, z) { 
        
        PointRequest.initialize(this, x, y, z);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, x, y, z) { 
        obj['x'] = x;
        obj['y'] = y;
        obj['z'] = z;
    }

    /**
     * Constructs a <code>PointRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PointRequest} obj Optional instance to populate.
     * @return {module:model/PointRequest} The populated <code>PointRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PointRequest();

            if (data.hasOwnProperty('x')) {
                obj['x'] = ApiClient.convertToType(data['x'], 'Number');
            }
            if (data.hasOwnProperty('y')) {
                obj['y'] = ApiClient.convertToType(data['y'], 'Number');
            }
            if (data.hasOwnProperty('z')) {
                obj['z'] = ApiClient.convertToType(data['z'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} x
 */
PointRequest.prototype['x'] = undefined;

/**
 * @member {Number} y
 */
PointRequest.prototype['y'] = undefined;

/**
 * @member {Number} z
 */
PointRequest.prototype['z'] = undefined;






export default PointRequest;


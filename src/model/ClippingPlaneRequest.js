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
import DirectionRequest from './DirectionRequest';
import PointRequest from './PointRequest';

/**
 * The ClippingPlaneRequest model module.
 * @module model/ClippingPlaneRequest
 * @version 0.0.0
 */
class ClippingPlaneRequest {
    /**
     * Constructs a new <code>ClippingPlaneRequest</code>.
     * Adds nested create feature
     * @alias module:model/ClippingPlaneRequest
     * @param location {module:model/PointRequest} 
     * @param direction {module:model/DirectionRequest} 
     */
    constructor(location, direction) { 
        
        ClippingPlaneRequest.initialize(this, location, direction);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, location, direction) { 
        obj['location'] = location;
        obj['direction'] = direction;
    }

    /**
     * Constructs a <code>ClippingPlaneRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ClippingPlaneRequest} obj Optional instance to populate.
     * @return {module:model/ClippingPlaneRequest} The populated <code>ClippingPlaneRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ClippingPlaneRequest();

            if (data.hasOwnProperty('location')) {
                obj['location'] = PointRequest.constructFromObject(data['location']);
            }
            if (data.hasOwnProperty('direction')) {
                obj['direction'] = DirectionRequest.constructFromObject(data['direction']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PointRequest} location
 */
ClippingPlaneRequest.prototype['location'] = undefined;

/**
 * @member {module:model/DirectionRequest} direction
 */
ClippingPlaneRequest.prototype['direction'] = undefined;






export default ClippingPlaneRequest;


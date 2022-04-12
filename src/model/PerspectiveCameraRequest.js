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
 * The PerspectiveCameraRequest model module.
 * @module model/PerspectiveCameraRequest
 * @version 0.0.0
 */
class PerspectiveCameraRequest {
    /**
     * Constructs a new <code>PerspectiveCameraRequest</code>.
     * Adds nested create feature
     * @alias module:model/PerspectiveCameraRequest
     * @param fieldOfView {Number} 
     * @param cameraDirection {module:model/DirectionRequest} 
     * @param cameraUpVector {module:model/DirectionRequest} 
     * @param cameraViewPoint {module:model/PointRequest} 
     */
    constructor(fieldOfView, cameraDirection, cameraUpVector, cameraViewPoint) { 
        
        PerspectiveCameraRequest.initialize(this, fieldOfView, cameraDirection, cameraUpVector, cameraViewPoint);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fieldOfView, cameraDirection, cameraUpVector, cameraViewPoint) { 
        obj['field_of_view'] = fieldOfView;
        obj['camera_direction'] = cameraDirection;
        obj['camera_up_vector'] = cameraUpVector;
        obj['camera_view_point'] = cameraViewPoint;
    }

    /**
     * Constructs a <code>PerspectiveCameraRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PerspectiveCameraRequest} obj Optional instance to populate.
     * @return {module:model/PerspectiveCameraRequest} The populated <code>PerspectiveCameraRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PerspectiveCameraRequest();

            if (data.hasOwnProperty('field_of_view')) {
                obj['field_of_view'] = ApiClient.convertToType(data['field_of_view'], 'Number');
            }
            if (data.hasOwnProperty('camera_direction')) {
                obj['camera_direction'] = DirectionRequest.constructFromObject(data['camera_direction']);
            }
            if (data.hasOwnProperty('camera_up_vector')) {
                obj['camera_up_vector'] = DirectionRequest.constructFromObject(data['camera_up_vector']);
            }
            if (data.hasOwnProperty('camera_view_point')) {
                obj['camera_view_point'] = PointRequest.constructFromObject(data['camera_view_point']);
            }
            if (data.hasOwnProperty('bimdata_camera_direction')) {
                obj['bimdata_camera_direction'] = DirectionRequest.constructFromObject(data['bimdata_camera_direction']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} field_of_view
 */
PerspectiveCameraRequest.prototype['field_of_view'] = undefined;

/**
 * @member {module:model/DirectionRequest} camera_direction
 */
PerspectiveCameraRequest.prototype['camera_direction'] = undefined;

/**
 * @member {module:model/DirectionRequest} camera_up_vector
 */
PerspectiveCameraRequest.prototype['camera_up_vector'] = undefined;

/**
 * @member {module:model/PointRequest} camera_view_point
 */
PerspectiveCameraRequest.prototype['camera_view_point'] = undefined;

/**
 * @member {module:model/DirectionRequest} bimdata_camera_direction
 */
PerspectiveCameraRequest.prototype['bimdata_camera_direction'] = undefined;






export default PerspectiveCameraRequest;

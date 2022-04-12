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
import Direction from './Direction';
import Point from './Point';

/**
 * The PerspectiveCamera model module.
 * @module model/PerspectiveCamera
 * @version 0.0.0
 */
class PerspectiveCamera {
    /**
     * Constructs a new <code>PerspectiveCamera</code>.
     * Adds nested create feature
     * @alias module:model/PerspectiveCamera
     * @param fieldOfView {Number} 
     * @param cameraDirection {module:model/Direction} 
     * @param cameraUpVector {module:model/Direction} 
     * @param cameraViewPoint {module:model/Point} 
     */
    constructor(fieldOfView, cameraDirection, cameraUpVector, cameraViewPoint) { 
        
        PerspectiveCamera.initialize(this, fieldOfView, cameraDirection, cameraUpVector, cameraViewPoint);
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
     * Constructs a <code>PerspectiveCamera</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PerspectiveCamera} obj Optional instance to populate.
     * @return {module:model/PerspectiveCamera} The populated <code>PerspectiveCamera</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PerspectiveCamera();

            if (data.hasOwnProperty('field_of_view')) {
                obj['field_of_view'] = ApiClient.convertToType(data['field_of_view'], 'Number');
            }
            if (data.hasOwnProperty('camera_direction')) {
                obj['camera_direction'] = Direction.constructFromObject(data['camera_direction']);
            }
            if (data.hasOwnProperty('camera_up_vector')) {
                obj['camera_up_vector'] = Direction.constructFromObject(data['camera_up_vector']);
            }
            if (data.hasOwnProperty('camera_view_point')) {
                obj['camera_view_point'] = Point.constructFromObject(data['camera_view_point']);
            }
            if (data.hasOwnProperty('bimdata_camera_direction')) {
                obj['bimdata_camera_direction'] = Direction.constructFromObject(data['bimdata_camera_direction']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} field_of_view
 */
PerspectiveCamera.prototype['field_of_view'] = undefined;

/**
 * @member {module:model/Direction} camera_direction
 */
PerspectiveCamera.prototype['camera_direction'] = undefined;

/**
 * @member {module:model/Direction} camera_up_vector
 */
PerspectiveCamera.prototype['camera_up_vector'] = undefined;

/**
 * @member {module:model/Point} camera_view_point
 */
PerspectiveCamera.prototype['camera_view_point'] = undefined;

/**
 * @member {module:model/Direction} bimdata_camera_direction
 */
PerspectiveCamera.prototype['bimdata_camera_direction'] = undefined;






export default PerspectiveCamera;


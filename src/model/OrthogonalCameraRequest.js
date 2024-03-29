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
import DirectionRequest from './DirectionRequest';
import PointRequest from './PointRequest';

/**
 * The OrthogonalCameraRequest model module.
 * @module model/OrthogonalCameraRequest
 * @version 0.0.0
 */
class OrthogonalCameraRequest {
    /**
     * Constructs a new <code>OrthogonalCameraRequest</code>.
     * Adds nested create feature
     * @alias module:model/OrthogonalCameraRequest
     * @param viewToWorldScale {Number} 
     * @param cameraDirection {module:model/DirectionRequest} 
     * @param cameraUpVector {module:model/DirectionRequest} 
     * @param cameraViewPoint {module:model/PointRequest} 
     */
    constructor(viewToWorldScale, cameraDirection, cameraUpVector, cameraViewPoint) { 
        
        OrthogonalCameraRequest.initialize(this, viewToWorldScale, cameraDirection, cameraUpVector, cameraViewPoint);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, viewToWorldScale, cameraDirection, cameraUpVector, cameraViewPoint) { 
        obj['view_to_world_scale'] = viewToWorldScale;
        obj['camera_direction'] = cameraDirection;
        obj['camera_up_vector'] = cameraUpVector;
        obj['camera_view_point'] = cameraViewPoint;
    }

    /**
     * Constructs a <code>OrthogonalCameraRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrthogonalCameraRequest} obj Optional instance to populate.
     * @return {module:model/OrthogonalCameraRequest} The populated <code>OrthogonalCameraRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrthogonalCameraRequest();

            if (data.hasOwnProperty('view_to_world_scale')) {
                obj['view_to_world_scale'] = ApiClient.convertToType(data['view_to_world_scale'], 'Number');
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
        }
        return obj;
    }


}

/**
 * @member {Number} view_to_world_scale
 */
OrthogonalCameraRequest.prototype['view_to_world_scale'] = undefined;

/**
 * @member {module:model/DirectionRequest} camera_direction
 */
OrthogonalCameraRequest.prototype['camera_direction'] = undefined;

/**
 * @member {module:model/DirectionRequest} camera_up_vector
 */
OrthogonalCameraRequest.prototype['camera_up_vector'] = undefined;

/**
 * @member {module:model/PointRequest} camera_view_point
 */
OrthogonalCameraRequest.prototype['camera_view_point'] = undefined;






export default OrthogonalCameraRequest;


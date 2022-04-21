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
import ClippingPlaneRequest from './ClippingPlaneRequest';
import ComponentsParentRequest from './ComponentsParentRequest';
import LineRequest from './LineRequest';
import OrthogonalCameraRequest from './OrthogonalCameraRequest';
import PerspectiveCameraRequest from './PerspectiveCameraRequest';
import SnapshotRequest from './SnapshotRequest';

/**
 * The PatchedViewpointRequest model module.
 * @module model/PatchedViewpointRequest
 * @version 0.0.0
 */
class PatchedViewpointRequest {
    /**
     * Constructs a new <code>PatchedViewpointRequest</code>.
     * Adds nested create feature
     * @alias module:model/PatchedViewpointRequest
     */
    constructor() { 
        
        PatchedViewpointRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PatchedViewpointRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PatchedViewpointRequest} obj Optional instance to populate.
     * @return {module:model/PatchedViewpointRequest} The populated <code>PatchedViewpointRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PatchedViewpointRequest();

            if (data.hasOwnProperty('index')) {
                obj['index'] = ApiClient.convertToType(data['index'], 'Number');
            }
            if (data.hasOwnProperty('guid')) {
                obj['guid'] = ApiClient.convertToType(data['guid'], 'String');
            }
            if (data.hasOwnProperty('orthogonal_camera')) {
                obj['orthogonal_camera'] = ApiClient.convertToType(data['orthogonal_camera'], OrthogonalCameraRequest);
            }
            if (data.hasOwnProperty('perspective_camera')) {
                obj['perspective_camera'] = ApiClient.convertToType(data['perspective_camera'], PerspectiveCameraRequest);
            }
            if (data.hasOwnProperty('lines')) {
                obj['lines'] = ApiClient.convertToType(data['lines'], [LineRequest]);
            }
            if (data.hasOwnProperty('clipping_planes')) {
                obj['clipping_planes'] = ApiClient.convertToType(data['clipping_planes'], [ClippingPlaneRequest]);
            }
            if (data.hasOwnProperty('snapshot')) {
                obj['snapshot'] = ApiClient.convertToType(data['snapshot'], SnapshotRequest);
            }
            if (data.hasOwnProperty('components')) {
                obj['components'] = ApiClient.convertToType(data['components'], ComponentsParentRequest);
            }
            if (data.hasOwnProperty('pins')) {
                obj['pins'] = ApiClient.convertToType(data['pins'], [['Number']]);
            }
            if (data.hasOwnProperty('temp_id')) {
                obj['temp_id'] = ApiClient.convertToType(data['temp_id'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} index
 */
PatchedViewpointRequest.prototype['index'] = undefined;

/**
 * @member {String} guid
 */
PatchedViewpointRequest.prototype['guid'] = undefined;

/**
 * @member {module:model/OrthogonalCameraRequest} orthogonal_camera
 */
PatchedViewpointRequest.prototype['orthogonal_camera'] = undefined;

/**
 * @member {module:model/PerspectiveCameraRequest} perspective_camera
 */
PatchedViewpointRequest.prototype['perspective_camera'] = undefined;

/**
 * @member {Array.<module:model/LineRequest>} lines
 */
PatchedViewpointRequest.prototype['lines'] = undefined;

/**
 * @member {Array.<module:model/ClippingPlaneRequest>} clipping_planes
 */
PatchedViewpointRequest.prototype['clipping_planes'] = undefined;

/**
 * @member {module:model/SnapshotRequest} snapshot
 */
PatchedViewpointRequest.prototype['snapshot'] = undefined;

/**
 * @member {module:model/ComponentsParentRequest} components
 */
PatchedViewpointRequest.prototype['components'] = undefined;

/**
 * Non standard field. Pins is a list of points representing annotation positions
 * @member {Array.<Array.<Number>>} pins
 */
PatchedViewpointRequest.prototype['pins'] = undefined;

/**
 * Only used when using POST on the full-topic route to bind viewpoint with comment
 * @member {Number} temp_id
 */
PatchedViewpointRequest.prototype['temp_id'] = undefined;






export default PatchedViewpointRequest;


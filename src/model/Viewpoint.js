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
import ClippingPlane from './ClippingPlane';
import ComponentsParent from './ComponentsParent';
import Line from './Line';
import OrthogonalCamera from './OrthogonalCamera';
import PerspectiveCamera from './PerspectiveCamera';
import Pin from './Pin';
import Snapshot from './Snapshot';

/**
 * The Viewpoint model module.
 * @module model/Viewpoint
 * @version 0.0.0
 */
class Viewpoint {
    /**
     * Constructs a new <code>Viewpoint</code>.
     * Adds nested create feature
     * @alias module:model/Viewpoint
     */
    constructor() { 
        
        Viewpoint.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Viewpoint</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Viewpoint} obj Optional instance to populate.
     * @return {module:model/Viewpoint} The populated <code>Viewpoint</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Viewpoint();

            if (data.hasOwnProperty('index')) {
                obj['index'] = ApiClient.convertToType(data['index'], 'Number');
            }
            if (data.hasOwnProperty('guid')) {
                obj['guid'] = ApiClient.convertToType(data['guid'], 'String');
            }
            if (data.hasOwnProperty('originating_system')) {
                obj['originating_system'] = ApiClient.convertToType(data['originating_system'], 'String');
            }
            if (data.hasOwnProperty('authoring_tool_id')) {
                obj['authoring_tool_id'] = ApiClient.convertToType(data['authoring_tool_id'], 'String');
            }
            if (data.hasOwnProperty('orthogonal_camera')) {
                obj['orthogonal_camera'] = ApiClient.convertToType(data['orthogonal_camera'], OrthogonalCamera);
            }
            if (data.hasOwnProperty('perspective_camera')) {
                obj['perspective_camera'] = ApiClient.convertToType(data['perspective_camera'], PerspectiveCamera);
            }
            if (data.hasOwnProperty('lines')) {
                obj['lines'] = ApiClient.convertToType(data['lines'], [Line]);
            }
            if (data.hasOwnProperty('clipping_planes')) {
                obj['clipping_planes'] = ApiClient.convertToType(data['clipping_planes'], [ClippingPlane]);
            }
            if (data.hasOwnProperty('snapshot')) {
                obj['snapshot'] = ApiClient.convertToType(data['snapshot'], Snapshot);
            }
            if (data.hasOwnProperty('components')) {
                obj['components'] = ApiClient.convertToType(data['components'], ComponentsParent);
            }
            if (data.hasOwnProperty('pins')) {
                obj['pins'] = ApiClient.convertToType(data['pins'], [Pin]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} index
 */
Viewpoint.prototype['index'] = undefined;

/**
 * @member {String} guid
 */
Viewpoint.prototype['guid'] = undefined;

/**
 * Name of the system in which the viewpoint is originated
 * @member {String} originating_system
 */
Viewpoint.prototype['originating_system'] = undefined;

/**
 * System specific identifier of the viewpoint in the originating BIM tool
 * @member {String} authoring_tool_id
 */
Viewpoint.prototype['authoring_tool_id'] = undefined;

/**
 * @member {module:model/OrthogonalCamera} orthogonal_camera
 */
Viewpoint.prototype['orthogonal_camera'] = undefined;

/**
 * @member {module:model/PerspectiveCamera} perspective_camera
 */
Viewpoint.prototype['perspective_camera'] = undefined;

/**
 * @member {Array.<module:model/Line>} lines
 */
Viewpoint.prototype['lines'] = undefined;

/**
 * @member {Array.<module:model/ClippingPlane>} clipping_planes
 */
Viewpoint.prototype['clipping_planes'] = undefined;

/**
 * @member {module:model/Snapshot} snapshot
 */
Viewpoint.prototype['snapshot'] = undefined;

/**
 * @member {module:model/ComponentsParent} components
 */
Viewpoint.prototype['components'] = undefined;

/**
 * Non standard field. Pins (or markers/annotations) are points of interest. When creating a Viewpoint you can create pins with the fields `pins`, but you can't edit pins through here. You must use dedicated pin routes.
 * @member {Array.<module:model/Pin>} pins
 */
Viewpoint.prototype['pins'] = undefined;






export default Viewpoint;


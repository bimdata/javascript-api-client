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
import Model from './Model';

/**
 * The ModelWithPositioningPlan model module.
 * @module model/ModelWithPositioningPlan
 * @version 0.0.0
 */
class ModelWithPositioningPlan {
    /**
     * Constructs a new <code>ModelWithPositioningPlan</code>.
     * @alias module:model/ModelWithPositioningPlan
     * @param plan {module:model/Model} 
     */
    constructor(plan) { 
        
        ModelWithPositioningPlan.initialize(this, plan);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, plan) { 
        obj['plan'] = plan;
    }

    /**
     * Constructs a <code>ModelWithPositioningPlan</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModelWithPositioningPlan} obj Optional instance to populate.
     * @return {module:model/ModelWithPositioningPlan} The populated <code>ModelWithPositioningPlan</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModelWithPositioningPlan();

            if (data.hasOwnProperty('translation_x')) {
                obj['translation_x'] = ApiClient.convertToType(data['translation_x'], 'Number');
            }
            if (data.hasOwnProperty('translation_y')) {
                obj['translation_y'] = ApiClient.convertToType(data['translation_y'], 'Number');
            }
            if (data.hasOwnProperty('rotate_z')) {
                obj['rotate_z'] = ApiClient.convertToType(data['rotate_z'], 'Number');
            }
            if (data.hasOwnProperty('scale')) {
                obj['scale'] = ApiClient.convertToType(data['scale'], 'Number');
            }
            if (data.hasOwnProperty('opacity')) {
                obj['opacity'] = ApiClient.convertToType(data['opacity'], 'Number');
            }
            if (data.hasOwnProperty('plan')) {
                obj['plan'] = ApiClient.convertToType(data['plan'], Model);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} translation_x
 */
ModelWithPositioningPlan.prototype['translation_x'] = undefined;

/**
 * @member {Number} translation_y
 */
ModelWithPositioningPlan.prototype['translation_y'] = undefined;

/**
 * @member {Number} rotate_z
 */
ModelWithPositioningPlan.prototype['rotate_z'] = undefined;

/**
 * @member {Number} scale
 */
ModelWithPositioningPlan.prototype['scale'] = undefined;

/**
 * @member {Number} opacity
 */
ModelWithPositioningPlan.prototype['opacity'] = undefined;

/**
 * @member {module:model/Model} plan
 */
ModelWithPositioningPlan.prototype['plan'] = undefined;






export default ModelWithPositioningPlan;


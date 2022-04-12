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

/**
 * The PositioningPlan model module.
 * @module model/PositioningPlan
 * @version 0.0.0
 */
class PositioningPlan {
    /**
     * Constructs a new <code>PositioningPlan</code>.
     * @alias module:model/PositioningPlan
     */
    constructor() { 
        
        PositioningPlan.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PositioningPlan</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PositioningPlan} obj Optional instance to populate.
     * @return {module:model/PositioningPlan} The populated <code>PositioningPlan</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PositioningPlan();

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
        }
        return obj;
    }


}

/**
 * @member {Number} translation_x
 */
PositioningPlan.prototype['translation_x'] = undefined;

/**
 * @member {Number} translation_y
 */
PositioningPlan.prototype['translation_y'] = undefined;

/**
 * @member {Number} rotate_z
 */
PositioningPlan.prototype['rotate_z'] = undefined;

/**
 * @member {Number} scale
 */
PositioningPlan.prototype['scale'] = undefined;

/**
 * @member {Number} opacity
 */
PositioningPlan.prototype['opacity'] = undefined;






export default PositioningPlan;


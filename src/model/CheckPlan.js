/**
 * BIMData API
 * BIMData API is a tool to interact with your models stored on BIMData’s servers.     Through the API, you can manage your projects, the clouds, upload your IFC files and manage them through endpoints.
 *
 * The version of the OpenAPI document: v1
 * Contact: support@bimdata.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Ruleset from './Ruleset';

/**
 * The CheckPlan model module.
 * @module model/CheckPlan
 * @version 0.0.0
 */
class CheckPlan {
    /**
     * Constructs a new <code>CheckPlan</code>.
     * @alias module:model/CheckPlan
     * @param name {String} 
     */
    constructor(name) { 
        
        CheckPlan.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>CheckPlan</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CheckPlan} obj Optional instance to populate.
     * @return {module:model/CheckPlan} The populated <code>CheckPlan</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CheckPlan();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('rulesets')) {
                obj['rulesets'] = ApiClient.convertToType(data['rulesets'], [Ruleset]);
            }
            if (data.hasOwnProperty('is_default')) {
                obj['is_default'] = ApiClient.convertToType(data['is_default'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
CheckPlan.prototype['id'] = undefined;

/**
 * @member {String} name
 */
CheckPlan.prototype['name'] = undefined;

/**
 * @member {String} description
 */
CheckPlan.prototype['description'] = undefined;

/**
 * @member {Date} created_at
 */
CheckPlan.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
CheckPlan.prototype['updated_at'] = undefined;

/**
 * @member {Array.<module:model/Ruleset>} rulesets
 */
CheckPlan.prototype['rulesets'] = undefined;

/**
 * @member {Boolean} is_default
 */
CheckPlan.prototype['is_default'] = undefined;






export default CheckPlan;


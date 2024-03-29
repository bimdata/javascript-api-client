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
import RulesetRequest from './RulesetRequest';

/**
 * The CheckPlanRequest model module.
 * @module model/CheckPlanRequest
 * @version 0.0.0
 */
class CheckPlanRequest {
    /**
     * Constructs a new <code>CheckPlanRequest</code>.
     * Adds nested create feature
     * @alias module:model/CheckPlanRequest
     * @param name {String} 
     */
    constructor(name) { 
        
        CheckPlanRequest.initialize(this, name);
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
     * Constructs a <code>CheckPlanRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CheckPlanRequest} obj Optional instance to populate.
     * @return {module:model/CheckPlanRequest} The populated <code>CheckPlanRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CheckPlanRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('rulesets')) {
                obj['rulesets'] = ApiClient.convertToType(data['rulesets'], [RulesetRequest]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
CheckPlanRequest.prototype['name'] = undefined;

/**
 * @member {String} description
 */
CheckPlanRequest.prototype['description'] = undefined;

/**
 * @member {Array.<module:model/RulesetRequest>} rulesets
 */
CheckPlanRequest.prototype['rulesets'] = undefined;






export default CheckPlanRequest;


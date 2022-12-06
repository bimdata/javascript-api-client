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

/**
 * The RuleComponentRequest model module.
 * @module model/RuleComponentRequest
 * @version 0.0.0
 */
class RuleComponentRequest {
    /**
     * Constructs a new <code>RuleComponentRequest</code>.
     * @alias module:model/RuleComponentRequest
     */
    constructor() { 
        
        RuleComponentRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RuleComponentRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RuleComponentRequest} obj Optional instance to populate.
     * @return {module:model/RuleComponentRequest} The populated <code>RuleComponentRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RuleComponentRequest();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], {'String': Object});
            }
            if (data.hasOwnProperty('operator')) {
                obj['operator'] = ApiClient.convertToType(data['operator'], 'String');
            }
            if (data.hasOwnProperty('params')) {
                obj['params'] = ApiClient.convertToType(data['params'], {'String': Object});
            }
            if (data.hasOwnProperty('condition')) {
                obj['condition'] = ApiClient.convertToType(data['condition'], 'String');
            }
            if (data.hasOwnProperty('rule_components')) {
                obj['rule_components'] = ApiClient.convertToType(data['rule_components'], {'String': Object});
            }
        }
        return obj;
    }


}

/**
 * @member {String} type
 */
RuleComponentRequest.prototype['type'] = undefined;

/**
 * @member {Object.<String, Object>} value
 */
RuleComponentRequest.prototype['value'] = undefined;

/**
 * @member {String} operator
 */
RuleComponentRequest.prototype['operator'] = undefined;

/**
 * @member {Object.<String, Object>} params
 */
RuleComponentRequest.prototype['params'] = undefined;

/**
 * @member {String} condition
 */
RuleComponentRequest.prototype['condition'] = undefined;

/**
 * @member {Object.<String, Object>} rule_components
 */
RuleComponentRequest.prototype['rule_components'] = undefined;






export default RuleComponentRequest;

/**
 * BIMData API
 * BIMData API is a tool to interact with your models stored on BIMData’s servers.     Through the API, you can manage your projects, the clouds, upload your IFC files and manage them through endpoints.
 *
 * The version of the OpenAPI document: v1
 * Contact: contact@bimdata.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The RuleComponent model module.
 * @module model/RuleComponent
 * @version v1
 */
class RuleComponent {
    /**
     * Constructs a new <code>RuleComponent</code>.
     * @alias module:model/RuleComponent
     */
    constructor() { 
        
        RuleComponent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RuleComponent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RuleComponent} obj Optional instance to populate.
     * @return {module:model/RuleComponent} The populated <code>RuleComponent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RuleComponent();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('operator')) {
                obj['operator'] = ApiClient.convertToType(data['operator'], 'String');
            }
            if (data.hasOwnProperty('params')) {
                obj['params'] = ApiClient.convertToType(data['params'], 'String');
            }
            if (data.hasOwnProperty('condition')) {
                obj['condition'] = ApiClient.convertToType(data['condition'], 'String');
            }
            if (data.hasOwnProperty('rule_components')) {
                obj['rule_components'] = ApiClient.convertToType(data['rule_components'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
RuleComponent.prototype['id'] = undefined;

/**
 * @member {String} type
 */
RuleComponent.prototype['type'] = undefined;

/**
 * @member {String} value
 */
RuleComponent.prototype['value'] = undefined;

/**
 * @member {String} operator
 */
RuleComponent.prototype['operator'] = undefined;

/**
 * @member {String} params
 */
RuleComponent.prototype['params'] = undefined;

/**
 * @member {String} condition
 */
RuleComponent.prototype['condition'] = undefined;

/**
 * @member {String} rule_components
 */
RuleComponent.prototype['rule_components'] = undefined;






export default RuleComponent;


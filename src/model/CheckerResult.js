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
 * The CheckerResult model module.
 * @module model/CheckerResult
 * @version v1
 */
class CheckerResult {
    /**
     * Constructs a new <code>CheckerResult</code>.
     * @alias module:model/CheckerResult
     */
    constructor() { 
        
        CheckerResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CheckerResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CheckerResult} obj Optional instance to populate.
     * @return {module:model/CheckerResult} The populated <code>CheckerResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CheckerResult();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('result')) {
                obj['result'] = ApiClient.convertToType(data['result'], 'String');
            }
            if (data.hasOwnProperty('collisions')) {
                obj['collisions'] = ApiClient.convertToType(data['collisions'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('error_detail')) {
                obj['error_detail'] = ApiClient.convertToType(data['error_detail'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
CheckerResult.prototype['id'] = undefined;

/**
 * @member {module:model/CheckerResult.StatusEnum} status
 */
CheckerResult.prototype['status'] = undefined;

/**
 * @member {String} result
 */
CheckerResult.prototype['result'] = undefined;

/**
 * @member {String} collisions
 */
CheckerResult.prototype['collisions'] = undefined;

/**
 * @member {Date} created_at
 */
CheckerResult.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
CheckerResult.prototype['updated_at'] = undefined;

/**
 * @member {String} error_detail
 */
CheckerResult.prototype['error_detail'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
CheckerResult['StatusEnum'] = {

    /**
     * value: "C"
     * @const
     */
    "C": "C",

    /**
     * value: "P"
     * @const
     */
    "P": "P",

    /**
     * value: "E"
     * @const
     */
    "E": "E"
};



export default CheckerResult;


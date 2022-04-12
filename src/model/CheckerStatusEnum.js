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
* Enum class CheckerStatusEnum.
* @enum {}
* @readonly
*/
export default class CheckerStatusEnum {
    
        /**
         * value: "C"
         * @const
         */
        "C" = "C";

    
        /**
         * value: "P"
         * @const
         */
        "P" = "P";

    
        /**
         * value: "E"
         * @const
         */
        "E" = "E";

    

    /**
    * Returns a <code>CheckerStatusEnum</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/CheckerStatusEnum} The enum <code>CheckerStatusEnum</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

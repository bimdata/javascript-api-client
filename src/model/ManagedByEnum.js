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
* Enum class ManagedByEnum.
* @enum {}
* @readonly
*/
export default class ManagedByEnum {
    
        /**
         * value: "BIMDATA_PLATFORM"
         * @const
         */
        "BIMDATA_PLATFORM" = "BIMDATA_PLATFORM";

    
        /**
         * value: "ORGANIZATION"
         * @const
         */
        "ORGANIZATION" = "ORGANIZATION";

    

    /**
    * Returns a <code>ManagedByEnum</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/ManagedByEnum} The enum <code>ManagedByEnum</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}


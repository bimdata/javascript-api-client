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
* Enum class FolderPermissionEnum.
* @enum {}
* @readonly
*/
export default class FolderPermissionEnum {
    
        /**
         * value: 1
         * @const
         */
        "1" = 1;

    
        /**
         * value: 50
         * @const
         */
        "50" = 50;

    
        /**
         * value: 100
         * @const
         */
        "100" = 100;

    

    /**
    * Returns a <code>FolderPermissionEnum</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/FolderPermissionEnum} The enum <code>FolderPermissionEnum</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

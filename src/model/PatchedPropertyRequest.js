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
import PropertyDefinitionRequest from './PropertyDefinitionRequest';

/**
 * The PatchedPropertyRequest model module.
 * @module model/PatchedPropertyRequest
 * @version 0.0.0
 */
class PatchedPropertyRequest {
    /**
     * Constructs a new <code>PatchedPropertyRequest</code>.
     * Adds nested create feature
     * @alias module:model/PatchedPropertyRequest
     */
    constructor() { 
        
        PatchedPropertyRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PatchedPropertyRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PatchedPropertyRequest} obj Optional instance to populate.
     * @return {module:model/PatchedPropertyRequest} The populated <code>PatchedPropertyRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PatchedPropertyRequest();

            if (data.hasOwnProperty('definition')) {
                obj['definition'] = PropertyDefinitionRequest.constructFromObject(data['definition']);
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PropertyDefinitionRequest} definition
 */
PatchedPropertyRequest.prototype['definition'] = undefined;

/**
 * @member {Object} value
 */
PatchedPropertyRequest.prototype['value'] = undefined;






export default PatchedPropertyRequest;


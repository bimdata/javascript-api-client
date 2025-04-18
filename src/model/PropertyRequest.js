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
 * The PropertyRequest model module.
 * @module model/PropertyRequest
 * @version 0.0.0
 */
class PropertyRequest {
    /**
     * Constructs a new <code>PropertyRequest</code>.
     * Adds nested create feature
     * @alias module:model/PropertyRequest
     * @param definition {module:model/PropertyDefinitionRequest} 
     */
    constructor(definition) { 
        
        PropertyRequest.initialize(this, definition);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, definition) { 
        obj['definition'] = definition;
    }

    /**
     * Constructs a <code>PropertyRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PropertyRequest} obj Optional instance to populate.
     * @return {module:model/PropertyRequest} The populated <code>PropertyRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PropertyRequest();

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
PropertyRequest.prototype['definition'] = undefined;

/**
 * @member {Object} value
 */
PropertyRequest.prototype['value'] = undefined;






export default PropertyRequest;


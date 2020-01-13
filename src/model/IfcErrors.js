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
 * The IfcErrors model module.
 * @module model/IfcErrors
 * @version 0.0.0
 */
class IfcErrors {
    /**
     * Constructs a new <code>IfcErrors</code>.
     * @alias module:model/IfcErrors
     */
    constructor() { 
        
        IfcErrors.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IfcErrors</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IfcErrors} obj Optional instance to populate.
     * @return {module:model/IfcErrors} The populated <code>IfcErrors</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IfcErrors();

            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], ['String']);
            }
            if (data.hasOwnProperty('warnings')) {
                obj['warnings'] = ApiClient.convertToType(data['warnings'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * List of errors that happened during IFC processing
 * @member {Array.<String>} errors
 */
IfcErrors.prototype['errors'] = undefined;

/**
 * List of warnings that happened during IFC processing
 * @member {Array.<String>} warnings
 */
IfcErrors.prototype['warnings'] = undefined;






export default IfcErrors;

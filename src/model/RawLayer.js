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
 * The RawLayer model module.
 * @module model/RawLayer
 * @version 0.0.0
 */
class RawLayer {
    /**
     * Constructs a new <code>RawLayer</code>.
     * @alias module:model/RawLayer
     * @param name {String} 
     */
    constructor(name) { 
        
        RawLayer.initialize(this, name);
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
     * Constructs a <code>RawLayer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RawLayer} obj Optional instance to populate.
     * @return {module:model/RawLayer} The populated <code>RawLayer</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RawLayer();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('identifier')) {
                obj['identifier'] = ApiClient.convertToType(data['identifier'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
RawLayer.prototype['name'] = undefined;

/**
 * @member {String} description
 */
RawLayer.prototype['description'] = undefined;

/**
 * @member {String} identifier
 */
RawLayer.prototype['identifier'] = undefined;






export default RawLayer;


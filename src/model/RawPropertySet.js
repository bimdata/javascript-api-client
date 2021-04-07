/**
 * BIMData API
 * BIMData API is a tool to interact with your models stored on BIMData’s servers.     Through the API, you can manage your projects, the clouds, upload your IFC files and manage them through endpoints.
 *
 * The version of the OpenAPI document: v1
 * Contact: support@bimdata.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import RawProperty from './RawProperty';

/**
 * The RawPropertySet model module.
 * @module model/RawPropertySet
 * @version 0.0.0
 */
class RawPropertySet {
    /**
     * Constructs a new <code>RawPropertySet</code>.
     * 
     * @alias module:model/RawPropertySet
     * @param properties {Array.<module:model/RawProperty>} 
     */
    constructor(properties) { 
        
        RawPropertySet.initialize(this, properties);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, properties) { 
        obj['properties'] = properties;
    }

    /**
     * Constructs a <code>RawPropertySet</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RawPropertySet} obj Optional instance to populate.
     * @return {module:model/RawPropertySet} The populated <code>RawPropertySet</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RawPropertySet();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('properties')) {
                obj['properties'] = ApiClient.convertToType(data['properties'], [RawProperty]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
RawPropertySet.prototype['id'] = undefined;

/**
 * @member {String} description
 */
RawPropertySet.prototype['description'] = undefined;

/**
 * @member {String} name
 */
RawPropertySet.prototype['name'] = undefined;

/**
 * @member {String} type
 */
RawPropertySet.prototype['type'] = undefined;

/**
 * 
 * @member {Array.<module:model/RawProperty>} properties
 */
RawPropertySet.prototype['properties'] = undefined;






export default RawPropertySet;


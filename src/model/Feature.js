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

/**
 * The Feature model module.
 * @module model/Feature
 * @version 0.0.0
 */
class Feature {
    /**
     * Constructs a new <code>Feature</code>.
     * @alias module:model/Feature
     * @param name {String} Name of the feature
     */
    constructor(name) { 
        
        Feature.initialize(this, name);
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
     * Constructs a <code>Feature</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Feature} obj Optional instance to populate.
     * @return {module:model/Feature} The populated <code>Feature</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Feature();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('viewer_url')) {
                obj['viewer_url'] = ApiClient.convertToType(data['viewer_url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Name of the feature
 * @member {String} name
 */
Feature.prototype['name'] = undefined;

/**
 * Viewer's url to load instead of standard's one
 * @member {String} viewer_url
 */
Feature.prototype['viewer_url'] = undefined;






export default Feature;


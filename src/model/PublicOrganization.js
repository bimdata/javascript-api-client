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
 * The PublicOrganization model module.
 * @module model/PublicOrganization
 * @version 0.0.0
 */
class PublicOrganization {
    /**
     * Constructs a new <code>PublicOrganization</code>.
     * @alias module:model/PublicOrganization
     * @param id {Number} 
     * @param name {String} Name of the organization
     */
    constructor(id, name) { 
        
        PublicOrganization.initialize(this, id, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name) { 
        obj['id'] = id;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>PublicOrganization</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PublicOrganization} obj Optional instance to populate.
     * @return {module:model/PublicOrganization} The populated <code>PublicOrganization</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PublicOrganization();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
PublicOrganization.prototype['id'] = undefined;

/**
 * Name of the organization
 * @member {String} name
 */
PublicOrganization.prototype['name'] = undefined;

/**
 * @member {String} logo
 */
PublicOrganization.prototype['logo'] = undefined;






export default PublicOrganization;


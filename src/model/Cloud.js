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
import Feature from './Feature';
import User from './User';

/**
 * The Cloud model module.
 * @module model/Cloud
 * @version 0.0.0
 */
class Cloud {
    /**
     * Constructs a new <code>Cloud</code>.
     * @alias module:model/Cloud
     * @param name {String} Name of the cloud
     */
    constructor(name) { 
        
        Cloud.initialize(this, name);
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
     * Constructs a <code>Cloud</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Cloud} obj Optional instance to populate.
     * @return {module:model/Cloud} The populated <code>Cloud</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Cloud();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('features')) {
                obj['features'] = ApiClient.convertToType(data['features'], [Feature]);
            }
            if (data.hasOwnProperty('creator')) {
                obj['creator'] = User.constructFromObject(data['creator']);
            }
            if (data.hasOwnProperty('is_default')) {
                obj['is_default'] = ApiClient.convertToType(data['is_default'], 'Boolean');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = ApiClient.convertToType(data['image'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
Cloud.prototype['id'] = undefined;

/**
 * Name of the cloud
 * @member {String} name
 */
Cloud.prototype['name'] = undefined;

/**
 * @member {Array.<module:model/Feature>} features
 */
Cloud.prototype['features'] = undefined;

/**
 * @member {module:model/User} creator
 */
Cloud.prototype['creator'] = undefined;

/**
 * @member {Boolean} is_default
 */
Cloud.prototype['is_default'] = undefined;

/**
 * Creation date
 * @member {Date} created_at
 */
Cloud.prototype['created_at'] = undefined;

/**
 * @member {String} image
 */
Cloud.prototype['image'] = undefined;

/**
 * Date of the last update
 * @member {Date} updated_at
 */
Cloud.prototype['updated_at'] = undefined;






export default Cloud;


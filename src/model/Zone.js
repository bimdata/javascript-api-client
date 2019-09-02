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
import Space from './Space';

/**
 * The Zone model module.
 * @module model/Zone
 * @version v1
 */
class Zone {
    /**
     * Constructs a new <code>Zone</code>.
     * @alias module:model/Zone
     * @param name {String} 
     * @param uuid {String} 
     */
    constructor(name, uuid) { 
        
        Zone.initialize(this, name, uuid);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, uuid) { 
        obj['name'] = name;
        obj['uuid'] = uuid;
    }

    /**
     * Constructs a <code>Zone</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Zone} obj Optional instance to populate.
     * @return {module:model/Zone} The populated <code>Zone</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Zone();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('zones')) {
                obj['zones'] = ApiClient.convertToType(data['zones'], [Zone]);
            }
            if (data.hasOwnProperty('parent_id')) {
                obj['parent_id'] = ApiClient.convertToType(data['parent_id'], 'Number');
            }
            if (data.hasOwnProperty('spaces')) {
                obj['spaces'] = ApiClient.convertToType(data['spaces'], [Space]);
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
Zone.prototype['id'] = undefined;

/**
 * @member {String} name
 */
Zone.prototype['name'] = undefined;

/**
 * @member {String} uuid
 */
Zone.prototype['uuid'] = undefined;

/**
 * @member {Array.<module:model/Zone>} zones
 */
Zone.prototype['zones'] = undefined;

/**
 * @member {Number} parent_id
 */
Zone.prototype['parent_id'] = undefined;

/**
 * @member {Array.<module:model/Space>} spaces
 */
Zone.prototype['spaces'] = undefined;

/**
 * @member {Date} created_at
 */
Zone.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
Zone.prototype['updated_at'] = undefined;

/**
 * @member {String} color
 */
Zone.prototype['color'] = undefined;






export default Zone;


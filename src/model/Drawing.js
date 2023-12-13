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
import User from './User';

/**
 * The Drawing model module.
 * @module model/Drawing
 * @version 0.0.0
 */
class Drawing {
    /**
     * Constructs a new <code>Drawing</code>.
     * @alias module:model/Drawing
     * @param id {Number} 
     * @param content {String} 
     * @param creator {module:model/User} 
     * @param createdAt {Date} 
     */
    constructor(id, content, creator, createdAt) { 
        
        Drawing.initialize(this, id, content, creator, createdAt);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, content, creator, createdAt) { 
        obj['id'] = id;
        obj['content'] = content;
        obj['creator'] = creator;
        obj['created_at'] = createdAt;
    }

    /**
     * Constructs a <code>Drawing</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Drawing} obj Optional instance to populate.
     * @return {module:model/Drawing} The populated <code>Drawing</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Drawing();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'String');
            }
            if (data.hasOwnProperty('creator')) {
                obj['creator'] = ApiClient.convertToType(data['creator'], User);
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
Drawing.prototype['id'] = undefined;

/**
 * @member {String} content
 */
Drawing.prototype['content'] = undefined;

/**
 * @member {module:model/User} creator
 */
Drawing.prototype['creator'] = undefined;

/**
 * @member {Date} created_at
 */
Drawing.prototype['created_at'] = undefined;






export default Drawing;


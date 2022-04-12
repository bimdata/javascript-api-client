/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1 (v1)
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The WebHook model module.
 * @module model/WebHook
 * @version 0.0.0
 */
class WebHook {
    /**
     * Constructs a new <code>WebHook</code>.
     * @alias module:model/WebHook
     * @param id {Number} 
     * @param events {Array.<String>} 
     * @param url {String} 
     * @param secret {String} 
     */
    constructor(id, events, url, secret) { 
        
        WebHook.initialize(this, id, events, url, secret);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, events, url, secret) { 
        obj['id'] = id;
        obj['events'] = events;
        obj['url'] = url;
        obj['secret'] = secret;
    }

    /**
     * Constructs a <code>WebHook</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebHook} obj Optional instance to populate.
     * @return {module:model/WebHook} The populated <code>WebHook</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebHook();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('events')) {
                obj['events'] = ApiClient.convertToType(data['events'], ['String']);
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('secret')) {
                obj['secret'] = ApiClient.convertToType(data['secret'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
WebHook.prototype['id'] = undefined;

/**
 * @member {Array.<String>} events
 */
WebHook.prototype['events'] = undefined;

/**
 * @member {String} url
 */
WebHook.prototype['url'] = undefined;

/**
 * @member {String} secret
 */
WebHook.prototype['secret'] = undefined;






export default WebHook;


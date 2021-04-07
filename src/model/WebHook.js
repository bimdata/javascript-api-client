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

/**
 * The WebHook model module.
 * @module model/WebHook
 * @version 0.0.0
 */
class WebHook {
    /**
     * Constructs a new <code>WebHook</code>.
     * Default behavior: - retrieve kwargs in the route (cloud_pk, project_pk, etc) - trim the _pk (cloud_pk &#x3D;&gt; cloud) - check if the object has a foreign key with the name - if so, set the foreign key to the value in the route Override: If the serializer has a method \&quot;get_parents\&quot;, we call it and set the parents The method \&quot;get_parents\&quot; should return an iterable of tuples : (parent_field_name, parent_object)
     * @alias module:model/WebHook
     * @param events {Array.<String>} 
     * @param url {String} 
     * @param secret {String} 
     */
    constructor(events, url, secret) { 
        
        WebHook.initialize(this, events, url, secret);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, events, url, secret) { 
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


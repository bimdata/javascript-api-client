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
 * The IfcAccessToken model module.
 * @module model/IfcAccessToken
 * @version 0.0.0
 */
class IfcAccessToken {
    /**
     * Constructs a new <code>IfcAccessToken</code>.
     * Default behavior: - retrieve kwargs in the route (cloud_pk, project_pk, etc) - trim the _pk (cloud_pk &#x3D;&gt; cloud) - check if the object has a foreign key with the name - if so, set the foreign key to the value in the route Override: If the serializer has a method \&quot;get_parents\&quot;, we call it and set the parents The method \&quot;get_parents\&quot; should return an iterable of tuples : (parent_field_name, parent_object)
     * @alias module:model/IfcAccessToken
     */
    constructor() { 
        
        IfcAccessToken.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IfcAccessToken</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IfcAccessToken} obj Optional instance to populate.
     * @return {module:model/IfcAccessToken} The populated <code>IfcAccessToken</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IfcAccessToken();

            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('read_only')) {
                obj['read_only'] = ApiClient.convertToType(data['read_only'], 'Boolean');
            }
            if (data.hasOwnProperty('expires_at')) {
                obj['expires_at'] = ApiClient.convertToType(data['expires_at'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {String} token
 */
IfcAccessToken.prototype['token'] = undefined;

/**
 * @member {Boolean} read_only
 */
IfcAccessToken.prototype['read_only'] = undefined;

/**
 * @member {Date} expires_at
 */
IfcAccessToken.prototype['expires_at'] = undefined;






export default IfcAccessToken;


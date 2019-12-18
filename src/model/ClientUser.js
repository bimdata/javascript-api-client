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
 * The ClientUser model module.
 * @module model/ClientUser
 * @version 0.0.0
 */
class ClientUser {
    /**
     * Constructs a new <code>ClientUser</code>.
     * @alias module:model/ClientUser
     * @param clientId {String} 
     */
    constructor(clientId) { 
        
        ClientUser.initialize(this, clientId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, clientId) { 
        obj['client_id'] = clientId;
    }

    /**
     * Constructs a <code>ClientUser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ClientUser} obj Optional instance to populate.
     * @return {module:model/ClientUser} The populated <code>ClientUser</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ClientUser();

            if (data.hasOwnProperty('client_id')) {
                obj['client_id'] = ApiClient.convertToType(data['client_id'], 'String');
            }
            if (data.hasOwnProperty('provider')) {
                obj['provider'] = ApiClient.convertToType(data['provider'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} client_id
 */
ClientUser.prototype['client_id'] = undefined;

/**
 * @member {Number} provider
 */
ClientUser.prototype['provider'] = undefined;






export default ClientUser;


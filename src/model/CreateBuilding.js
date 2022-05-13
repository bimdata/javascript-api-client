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
 * The CreateBuilding model module.
 * @module model/CreateBuilding
 * @version 0.0.0
 */
class CreateBuilding {
    /**
     * Constructs a new <code>CreateBuilding</code>.
     * @alias module:model/CreateBuilding
     * @param name {String} 
     */
    constructor(name) { 
        
        CreateBuilding.initialize(this, name);
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
     * Constructs a <code>CreateBuilding</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateBuilding} obj Optional instance to populate.
     * @return {module:model/CreateBuilding} The populated <code>CreateBuilding</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateBuilding();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
CreateBuilding.prototype['name'] = undefined;






export default CreateBuilding;

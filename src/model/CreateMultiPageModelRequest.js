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
 * The CreateMultiPageModelRequest model module.
 * @module model/CreateMultiPageModelRequest
 * @version 0.0.0
 */
class CreateMultiPageModelRequest {
    /**
     * Constructs a new <code>CreateMultiPageModelRequest</code>.
     * @alias module:model/CreateMultiPageModelRequest
     * @param mapFiles {Array.<File>} 
     */
    constructor(mapFiles) { 
        
        CreateMultiPageModelRequest.initialize(this, mapFiles);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, mapFiles) { 
        obj['map_files'] = mapFiles;
    }

    /**
     * Constructs a <code>CreateMultiPageModelRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateMultiPageModelRequest} obj Optional instance to populate.
     * @return {module:model/CreateMultiPageModelRequest} The populated <code>CreateMultiPageModelRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateMultiPageModelRequest();

            if (data.hasOwnProperty('map_files')) {
                obj['map_files'] = ApiClient.convertToType(data['map_files'], [File]);
            }
            if (data.hasOwnProperty('layout_names')) {
                obj['layout_names'] = ApiClient.convertToType(data['layout_names'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<File>} map_files
 */
CreateMultiPageModelRequest.prototype['map_files'] = undefined;

/**
 * @member {Array.<String>} layout_names
 */
CreateMultiPageModelRequest.prototype['layout_names'] = undefined;






export default CreateMultiPageModelRequest;


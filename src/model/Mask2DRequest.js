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
 * The Mask2DRequest model module.
 * @module model/Mask2DRequest
 * @version 0.0.0
 */
class Mask2DRequest {
    /**
     * Constructs a new <code>Mask2DRequest</code>.
     * @alias module:model/Mask2DRequest
     * @param cropPath {Array.<Array.<Number>>} Crop path of the manually created mask to show only a part of the model.
     */
    constructor(cropPath) { 
        
        Mask2DRequest.initialize(this, cropPath);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, cropPath) { 
        obj['crop_path'] = cropPath;
    }

    /**
     * Constructs a <code>Mask2DRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Mask2DRequest} obj Optional instance to populate.
     * @return {module:model/Mask2DRequest} The populated <code>Mask2DRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Mask2DRequest();

            if (data.hasOwnProperty('crop_path')) {
                obj['crop_path'] = ApiClient.convertToType(data['crop_path'], [['Number']]);
            }
        }
        return obj;
    }


}

/**
 * Crop path of the manually created mask to show only a part of the model.
 * @member {Array.<Array.<Number>>} crop_path
 */
Mask2DRequest.prototype['crop_path'] = undefined;






export default Mask2DRequest;


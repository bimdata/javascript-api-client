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
 * The TagIdRequest model module.
 * @module model/TagIdRequest
 * @version 0.0.0
 */
class TagIdRequest {
    /**
     * Constructs a new <code>TagIdRequest</code>.
     * @alias module:model/TagIdRequest
     * @param tagId {Number} 
     */
    constructor(tagId) { 
        
        TagIdRequest.initialize(this, tagId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, tagId) { 
        obj['tag_id'] = tagId;
    }

    /**
     * Constructs a <code>TagIdRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TagIdRequest} obj Optional instance to populate.
     * @return {module:model/TagIdRequest} The populated <code>TagIdRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TagIdRequest();

            if (data.hasOwnProperty('tag_id')) {
                obj['tag_id'] = ApiClient.convertToType(data['tag_id'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} tag_id
 */
TagIdRequest.prototype['tag_id'] = undefined;






export default TagIdRequest;


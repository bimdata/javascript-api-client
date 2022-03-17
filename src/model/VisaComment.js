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
import UserProject from './UserProject';

/**
 * The VisaComment model module.
 * @module model/VisaComment
 * @version 0.0.0
 */
class VisaComment {
    /**
     * Constructs a new <code>VisaComment</code>.
     * @alias module:model/VisaComment
     */
    constructor() { 
        
        VisaComment.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VisaComment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VisaComment} obj Optional instance to populate.
     * @return {module:model/VisaComment} The populated <code>VisaComment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VisaComment();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('author')) {
                obj['author'] = UserProject.constructFromObject(data['author']);
            }
            if (data.hasOwnProperty('author_id')) {
                obj['author_id'] = ApiClient.convertToType(data['author_id'], 'Number');
            }
            if (data.hasOwnProperty('visa_id')) {
                obj['visa_id'] = ApiClient.convertToType(data['visa_id'], 'String');
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
VisaComment.prototype['id'] = undefined;

/**
 * @member {module:model/UserProject} author
 */
VisaComment.prototype['author'] = undefined;

/**
 * This is the userproject_id. This field is only used if the call is made from an App
 * @member {Number} author_id
 */
VisaComment.prototype['author_id'] = undefined;

/**
 * @member {String} visa_id
 */
VisaComment.prototype['visa_id'] = undefined;

/**
 * @member {String} content
 */
VisaComment.prototype['content'] = undefined;

/**
 * @member {Date} created_at
 */
VisaComment.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
VisaComment.prototype['updated_at'] = undefined;






export default VisaComment;


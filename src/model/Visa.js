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
import UserProject from './UserProject';
import VisaComment from './VisaComment';
import VisaValidation from './VisaValidation';

/**
 * The Visa model module.
 * @module model/Visa
 * @version 0.0.0
 */
class Visa {
    /**
     * Constructs a new <code>Visa</code>.
     * @alias module:model/Visa
     * @param id {Number} 
     * @param validations {Array.<module:model/VisaValidation>} 
     * @param validationsInError {Array.<Number>} Validation IDs where one or more validators have no longer access to the visa document.
     * @param creator {module:model/UserProject} 
     * @param status {module:model/Visa.StatusEnum} 
     * @param comments {Array.<module:model/VisaComment>} 
     * @param createdAt {Date} 
     * @param updatedAt {Date} 
     */
    constructor(id, validations, validationsInError, creator, status, comments, createdAt, updatedAt) { 
        
        Visa.initialize(this, id, validations, validationsInError, creator, status, comments, createdAt, updatedAt);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, validations, validationsInError, creator, status, comments, createdAt, updatedAt) { 
        obj['id'] = id;
        obj['validations'] = validations;
        obj['validations_in_error'] = validationsInError;
        obj['creator'] = creator;
        obj['status'] = status;
        obj['comments'] = comments;
        obj['created_at'] = createdAt;
        obj['updated_at'] = updatedAt;
    }

    /**
     * Constructs a <code>Visa</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Visa} obj Optional instance to populate.
     * @return {module:model/Visa} The populated <code>Visa</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Visa();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('validations')) {
                obj['validations'] = ApiClient.convertToType(data['validations'], [VisaValidation]);
            }
            if (data.hasOwnProperty('validations_in_error')) {
                obj['validations_in_error'] = ApiClient.convertToType(data['validations_in_error'], ['Number']);
            }
            if (data.hasOwnProperty('creator')) {
                obj['creator'] = ApiClient.convertToType(data['creator'], UserProject);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('comments')) {
                obj['comments'] = ApiClient.convertToType(data['comments'], [VisaComment]);
            }
            if (data.hasOwnProperty('deadline')) {
                obj['deadline'] = ApiClient.convertToType(data['deadline'], 'Date');
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
Visa.prototype['id'] = undefined;

/**
 * @member {Array.<module:model/VisaValidation>} validations
 */
Visa.prototype['validations'] = undefined;

/**
 * Validation IDs where one or more validators have no longer access to the visa document.
 * @member {Array.<Number>} validations_in_error
 */
Visa.prototype['validations_in_error'] = undefined;

/**
 * @member {module:model/UserProject} creator
 */
Visa.prototype['creator'] = undefined;

/**
 * @member {module:model/Visa.StatusEnum} status
 */
Visa.prototype['status'] = undefined;

/**
 * Description of the visa
 * @member {String} description
 */
Visa.prototype['description'] = undefined;

/**
 * @member {Array.<module:model/VisaComment>} comments
 */
Visa.prototype['comments'] = undefined;

/**
 * @member {Date} deadline
 */
Visa.prototype['deadline'] = undefined;

/**
 * @member {Date} created_at
 */
Visa.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
Visa.prototype['updated_at'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
Visa['StatusEnum'] = {

    /**
     * value: "O"
     * @const
     */
    "O": "O",

    /**
     * value: "A"
     * @const
     */
    "A": "A",

    /**
     * value: "C"
     * @const
     */
    "C": "C"
};



export default Visa;


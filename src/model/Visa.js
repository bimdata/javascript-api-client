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
     */
    constructor() { 
        
        Visa.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
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
            if (data.hasOwnProperty('creator')) {
                obj['creator'] = UserProject.constructFromObject(data['creator']);
            }
            if (data.hasOwnProperty('creator_id')) {
                obj['creator_id'] = ApiClient.convertToType(data['creator_id'], 'Number');
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
 * @member {module:model/UserProject} creator
 */
Visa.prototype['creator'] = undefined;

/**
 * This is the userproject_id. This field is only used if the call is made from an App
 * @member {Number} creator_id
 */
Visa.prototype['creator_id'] = undefined;

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


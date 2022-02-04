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
import IfcCheckerCheckplan from './IfcCheckerCheckplan';
import IfcCheckerResults from './IfcCheckerResults';
import Model from './Model';
import User from './User';

/**
 * The IfcChecker model module.
 * @module model/IfcChecker
 * @version 0.0.0
 */
class IfcChecker {
    /**
     * Constructs a new <code>IfcChecker</code>.
     * @alias module:model/IfcChecker
     */
    constructor() { 
        
        IfcChecker.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IfcChecker</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IfcChecker} obj Optional instance to populate.
     * @return {module:model/IfcChecker} The populated <code>IfcChecker</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IfcChecker();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('ifc')) {
                obj['ifc'] = Model.constructFromObject(data['ifc']);
            }
            if (data.hasOwnProperty('creator')) {
                obj['creator'] = User.constructFromObject(data['creator']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('checkplan_id')) {
                obj['checkplan_id'] = ApiClient.convertToType(data['checkplan_id'], 'Number');
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [IfcCheckerResults]);
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('checkplan')) {
                obj['checkplan'] = IfcCheckerCheckplan.constructFromObject(data['checkplan']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
IfcChecker.prototype['id'] = undefined;

/**
 * @member {module:model/Model} ifc
 */
IfcChecker.prototype['ifc'] = undefined;

/**
 * @member {module:model/User} creator
 */
IfcChecker.prototype['creator'] = undefined;

/**
 * @member {String} name
 */
IfcChecker.prototype['name'] = undefined;

/**
 * @member {Number} checkplan_id
 */
IfcChecker.prototype['checkplan_id'] = undefined;

/**
 * @member {Array.<module:model/IfcCheckerResults>} results
 */
IfcChecker.prototype['results'] = undefined;

/**
 * @member {Date} created_at
 */
IfcChecker.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
IfcChecker.prototype['updated_at'] = undefined;

/**
 * @member {module:model/IfcCheckerCheckplan} checkplan
 */
IfcChecker.prototype['checkplan'] = undefined;






export default IfcChecker;


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
import ModelWithPositioningPlan from './ModelWithPositioningPlan';

/**
 * The Building model module.
 * @module model/Building
 * @version 0.0.0
 */
class Building {
    /**
     * Constructs a new <code>Building</code>.
     * @alias module:model/Building
     * @param uuid {String} IFC element or element type UUID
     * @param name {String} Name of the building
     * @param plans {Array.<module:model/ModelWithPositioningPlan>} 
     * @param plansUnreachableCount {Number} 
     */
    constructor(uuid, name, plans, plansUnreachableCount) { 
        
        Building.initialize(this, uuid, name, plans, plansUnreachableCount);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, uuid, name, plans, plansUnreachableCount) { 
        obj['uuid'] = uuid;
        obj['name'] = name;
        obj['plans'] = plans;
        obj['plans_unreachable_count'] = plansUnreachableCount;
    }

    /**
     * Constructs a <code>Building</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Building} obj Optional instance to populate.
     * @return {module:model/Building} The populated <code>Building</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Building();

            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('plans')) {
                obj['plans'] = ApiClient.convertToType(data['plans'], [ModelWithPositioningPlan]);
            }
            if (data.hasOwnProperty('plans_unreachable_count')) {
                obj['plans_unreachable_count'] = ApiClient.convertToType(data['plans_unreachable_count'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * IFC element or element type UUID
 * @member {String} uuid
 */
Building.prototype['uuid'] = undefined;

/**
 * Name of the building
 * @member {String} name
 */
Building.prototype['name'] = undefined;

/**
 * @member {Array.<module:model/ModelWithPositioningPlan>} plans
 */
Building.prototype['plans'] = undefined;

/**
 * @member {Number} plans_unreachable_count
 */
Building.prototype['plans_unreachable_count'] = undefined;






export default Building;


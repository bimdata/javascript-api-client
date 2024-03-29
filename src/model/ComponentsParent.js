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
import Coloring from './Coloring';
import Component from './Component';
import Visibility from './Visibility';

/**
 * The ComponentsParent model module.
 * @module model/ComponentsParent
 * @version 0.0.0
 */
class ComponentsParent {
    /**
     * Constructs a new <code>ComponentsParent</code>.
     * Adds nested create feature
     * @alias module:model/ComponentsParent
     */
    constructor() { 
        
        ComponentsParent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ComponentsParent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ComponentsParent} obj Optional instance to populate.
     * @return {module:model/ComponentsParent} The populated <code>ComponentsParent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ComponentsParent();

            if (data.hasOwnProperty('coloring')) {
                obj['coloring'] = ApiClient.convertToType(data['coloring'], [Coloring]);
            }
            if (data.hasOwnProperty('visibility')) {
                obj['visibility'] = ApiClient.convertToType(data['visibility'], Visibility);
            }
            if (data.hasOwnProperty('selection')) {
                obj['selection'] = ApiClient.convertToType(data['selection'], [Component]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/Coloring>} coloring
 */
ComponentsParent.prototype['coloring'] = undefined;

/**
 * @member {module:model/Visibility} visibility
 */
ComponentsParent.prototype['visibility'] = undefined;

/**
 * @member {Array.<module:model/Component>} selection
 */
ComponentsParent.prototype['selection'] = undefined;






export default ComponentsParent;


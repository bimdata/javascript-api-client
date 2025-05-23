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

/**
 * The ColoringDefinition model module.
 * @module model/ColoringDefinition
 * @version 0.0.0
 */
class ColoringDefinition {
    /**
     * Constructs a new <code>ColoringDefinition</code>.
     * @alias module:model/ColoringDefinition
     * @param coloring {Array.<module:model/Coloring>} 
     */
    constructor(coloring) { 
        
        ColoringDefinition.initialize(this, coloring);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, coloring) { 
        obj['coloring'] = coloring;
    }

    /**
     * Constructs a <code>ColoringDefinition</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ColoringDefinition} obj Optional instance to populate.
     * @return {module:model/ColoringDefinition} The populated <code>ColoringDefinition</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ColoringDefinition();

            if (data.hasOwnProperty('coloring')) {
                obj['coloring'] = ApiClient.convertToType(data['coloring'], [Coloring]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/Coloring>} coloring
 */
ColoringDefinition.prototype['coloring'] = undefined;






export default ColoringDefinition;


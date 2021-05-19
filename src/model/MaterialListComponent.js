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
import Material from './Material';
import MaterialOption from './MaterialOption';

/**
 * The MaterialListComponent model module.
 * @module model/MaterialListComponent
 * @version 0.0.0
 */
class MaterialListComponent {
    /**
     * Constructs a new <code>MaterialListComponent</code>.
     * @alias module:model/MaterialListComponent
     * @param option {module:model/MaterialOption} 
     */
    constructor(option) { 
        
        MaterialListComponent.initialize(this, option);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, option) { 
        obj['option'] = option;
    }

    /**
     * Constructs a <code>MaterialListComponent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MaterialListComponent} obj Optional instance to populate.
     * @return {module:model/MaterialListComponent} The populated <code>MaterialListComponent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MaterialListComponent();

            if (data.hasOwnProperty('material')) {
                obj['material'] = Material.constructFromObject(data['material']);
            }
            if (data.hasOwnProperty('option')) {
                obj['option'] = MaterialOption.constructFromObject(data['option']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Material} material
 */
MaterialListComponent.prototype['material'] = undefined;

/**
 * @member {module:model/MaterialOption} option
 */
MaterialListComponent.prototype['option'] = undefined;






export default MaterialListComponent;


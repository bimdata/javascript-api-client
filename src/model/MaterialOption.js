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

/**
 * The MaterialOption model module.
 * @module model/MaterialOption
 * @version 0.0.0
 */
class MaterialOption {
    /**
     * Constructs a new <code>MaterialOption</code>.
     * Default behavior: - retrieve kwargs in the route (cloud_pk, project_pk, etc) - trim the _pk (cloud_pk &#x3D;&gt; cloud) - check if the object has a foreign key with the name - if so, set the foreign key to the value in the route Override: If the serializer has a method \&quot;get_parents\&quot;, we call it and set the parents The method \&quot;get_parents\&quot; should return an iterable of tuples : (parent_field_name, parent_object)
     * @alias module:model/MaterialOption
     */
    constructor() { 
        
        MaterialOption.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MaterialOption</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MaterialOption} obj Optional instance to populate.
     * @return {module:model/MaterialOption} The populated <code>MaterialOption</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MaterialOption();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('thickness')) {
                obj['thickness'] = ApiClient.convertToType(data['thickness'], 'Number');
            }
            if (data.hasOwnProperty('list_components')) {
                obj['list_components'] = ApiClient.convertToType(data['list_components'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
MaterialOption.prototype['id'] = undefined;

/**
 * @member {Number} thickness
 */
MaterialOption.prototype['thickness'] = undefined;

/**
 * @member {String} list_components
 */
MaterialOption.prototype['list_components'] = undefined;






export default MaterialOption;

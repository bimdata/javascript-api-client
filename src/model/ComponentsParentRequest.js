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
import ColoringRequest from './ColoringRequest';
import ComponentRequest from './ComponentRequest';
import VisibilityRequest from './VisibilityRequest';

/**
 * The ComponentsParentRequest model module.
 * @module model/ComponentsParentRequest
 * @version 0.0.0
 */
class ComponentsParentRequest {
    /**
     * Constructs a new <code>ComponentsParentRequest</code>.
     * Adds nested create feature
     * @alias module:model/ComponentsParentRequest
     */
    constructor() { 
        
        ComponentsParentRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ComponentsParentRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ComponentsParentRequest} obj Optional instance to populate.
     * @return {module:model/ComponentsParentRequest} The populated <code>ComponentsParentRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ComponentsParentRequest();

            if (data.hasOwnProperty('coloring')) {
                obj['coloring'] = ApiClient.convertToType(data['coloring'], [ColoringRequest]);
            }
            if (data.hasOwnProperty('visibility')) {
                obj['visibility'] = ApiClient.convertToType(data['visibility'], VisibilityRequest);
            }
            if (data.hasOwnProperty('selection')) {
                obj['selection'] = ApiClient.convertToType(data['selection'], [ComponentRequest]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/ColoringRequest>} coloring
 */
ComponentsParentRequest.prototype['coloring'] = undefined;

/**
 * @member {module:model/VisibilityRequest} visibility
 */
ComponentsParentRequest.prototype['visibility'] = undefined;

/**
 * @member {Array.<module:model/ComponentRequest>} selection
 */
ComponentsParentRequest.prototype['selection'] = undefined;






export default ComponentsParentRequest;


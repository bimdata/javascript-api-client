/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1 (v1)
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ComponentRequest from './ComponentRequest';
import ViewSetupHintsRequest from './ViewSetupHintsRequest';

/**
 * The VisibilityRequest model module.
 * @module model/VisibilityRequest
 * @version 0.0.0
 */
class VisibilityRequest {
    /**
     * Constructs a new <code>VisibilityRequest</code>.
     * Adds nested create feature
     * @alias module:model/VisibilityRequest
     * @param viewSetupHints {module:model/ViewSetupHintsRequest} 
     */
    constructor(viewSetupHints) { 
        
        VisibilityRequest.initialize(this, viewSetupHints);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, viewSetupHints) { 
        obj['view_setup_hints'] = viewSetupHints;
    }

    /**
     * Constructs a <code>VisibilityRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VisibilityRequest} obj Optional instance to populate.
     * @return {module:model/VisibilityRequest} The populated <code>VisibilityRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VisibilityRequest();

            if (data.hasOwnProperty('default_visibility')) {
                obj['default_visibility'] = ApiClient.convertToType(data['default_visibility'], 'Boolean');
            }
            if (data.hasOwnProperty('exceptions')) {
                obj['exceptions'] = ApiClient.convertToType(data['exceptions'], [ComponentRequest]);
            }
            if (data.hasOwnProperty('view_setup_hints')) {
                obj['view_setup_hints'] = ViewSetupHintsRequest.constructFromObject(data['view_setup_hints']);
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} default_visibility
 */
VisibilityRequest.prototype['default_visibility'] = undefined;

/**
 * @member {Array.<module:model/ComponentRequest>} exceptions
 */
VisibilityRequest.prototype['exceptions'] = undefined;

/**
 * @member {module:model/ViewSetupHintsRequest} view_setup_hints
 */
VisibilityRequest.prototype['view_setup_hints'] = undefined;






export default VisibilityRequest;


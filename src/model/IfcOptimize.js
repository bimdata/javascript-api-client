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
 * The IfcOptimize model module.
 * @module model/IfcOptimize
 * @version 0.0.0
 */
class IfcOptimize {
    /**
     * Constructs a new <code>IfcOptimize</code>.
     * @alias module:model/IfcOptimize
     */
    constructor() { 
        
        IfcOptimize.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IfcOptimize</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IfcOptimize} obj Optional instance to populate.
     * @return {module:model/IfcOptimize} The populated <code>IfcOptimize</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IfcOptimize();

            if (data.hasOwnProperty('floating_point_reduction')) {
                obj['floating_point_reduction'] = ApiClient.convertToType(data['floating_point_reduction'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Precision of geometries. 6 is micrometre, 9 is nanometre, ect...
 * @member {Number} floating_point_reduction
 */
IfcOptimize.prototype['floating_point_reduction'] = undefined;






export default IfcOptimize;

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

/**
 * The Stage model module.
 * @module model/Stage
 * @version 0.0.0
 */
class Stage {
    /**
     * Constructs a new <code>Stage</code>.
     * @alias module:model/Stage
     * @param id {Number} 
     * @param stage {String} 
     */
    constructor(id, stage) { 
        
        Stage.initialize(this, id, stage);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, stage) { 
        obj['id'] = id;
        obj['stage'] = stage;
    }

    /**
     * Constructs a <code>Stage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Stage} obj Optional instance to populate.
     * @return {module:model/Stage} The populated <code>Stage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Stage();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('stage')) {
                obj['stage'] = ApiClient.convertToType(data['stage'], 'String');
            }
            if (data.hasOwnProperty('project')) {
                obj['project'] = ApiClient.convertToType(data['project'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
Stage.prototype['id'] = undefined;

/**
 * @member {String} stage
 */
Stage.prototype['stage'] = undefined;

/**
 * This field is automatically provided by the route, you don't need to provide it in the body
 * @member {Number} project
 */
Stage.prototype['project'] = undefined;






export default Stage;


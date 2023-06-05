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
 * The ProcessorHandler model module.
 * @module model/ProcessorHandler
 * @version 0.0.0
 */
class ProcessorHandler {
    /**
     * Constructs a new <code>ProcessorHandler</code>.
     * @alias module:model/ProcessorHandler
     * @param id {Number} 
     * @param worker {String} 
     */
    constructor(id, worker) { 
        
        ProcessorHandler.initialize(this, id, worker);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, worker) { 
        obj['id'] = id;
        obj['worker'] = worker;
    }

    /**
     * Constructs a <code>ProcessorHandler</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProcessorHandler} obj Optional instance to populate.
     * @return {module:model/ProcessorHandler} The populated <code>ProcessorHandler</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProcessorHandler();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('worker')) {
                obj['worker'] = ApiClient.convertToType(data['worker'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('detail_message')) {
                obj['detail_message'] = ApiClient.convertToType(data['detail_message'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
ProcessorHandler.prototype['id'] = undefined;

/**
 * @member {String} worker
 */
ProcessorHandler.prototype['worker'] = undefined;

/**
 * * `C` - completed * `D` - deleted * `P` - pending * `W` - waiting * `I` - in process * `E` - errored * `X` - won't fix
 * @member {module:model/ProcessorHandler.StatusEnum} status
 */
ProcessorHandler.prototype['status'] = undefined;

/**
 * @member {String} detail_message
 */
ProcessorHandler.prototype['detail_message'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
ProcessorHandler['StatusEnum'] = {

    /**
     * value: "C"
     * @const
     */
    "C": "C",

    /**
     * value: "D"
     * @const
     */
    "D": "D",

    /**
     * value: "P"
     * @const
     */
    "P": "P",

    /**
     * value: "W"
     * @const
     */
    "W": "W",

    /**
     * value: "I"
     * @const
     */
    "I": "I",

    /**
     * value: "E"
     * @const
     */
    "E": "E",

    /**
     * value: "X"
     * @const
     */
    "X": "X"
};



export default ProcessorHandler;


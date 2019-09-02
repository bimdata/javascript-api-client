/**
 * BIMData API
 * BIMData API is a tool to interact with your models stored on BIMData’s servers.     Through the API, you can manage your projects, the clouds, upload your IFC files and manage them through endpoints.
 *
 * The version of the OpenAPI document: v1
 * Contact: contact@bimdata.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Snapshot model module.
 * @module model/Snapshot
 * @version v1
 */
class Snapshot {
    /**
     * Constructs a new <code>Snapshot</code>.
     * @alias module:model/Snapshot
     * @param snapshotType {String} 
     */
    constructor(snapshotType) { 
        
        Snapshot.initialize(this, snapshotType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, snapshotType) { 
        obj['snapshot_type'] = snapshotType;
    }

    /**
     * Constructs a <code>Snapshot</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Snapshot} obj Optional instance to populate.
     * @return {module:model/Snapshot} The populated <code>Snapshot</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Snapshot();

            if (data.hasOwnProperty('snapshot_type')) {
                obj['snapshot_type'] = ApiClient.convertToType(data['snapshot_type'], 'String');
            }
            if (data.hasOwnProperty('snapshot_data')) {
                obj['snapshot_data'] = ApiClient.convertToType(data['snapshot_data'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} snapshot_type
 */
Snapshot.prototype['snapshot_type'] = undefined;

/**
 * @member {String} snapshot_data
 */
Snapshot.prototype['snapshot_data'] = undefined;






export default Snapshot;


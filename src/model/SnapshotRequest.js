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
 * The SnapshotRequest model module.
 * @module model/SnapshotRequest
 * @version 0.0.0
 */
class SnapshotRequest {
    /**
     * Constructs a new <code>SnapshotRequest</code>.
     * Adds nested create feature
     * @alias module:model/SnapshotRequest
     * @param snapshotType {String} 
     * @param snapshotData {File} 
     */
    constructor(snapshotType, snapshotData) { 
        
        SnapshotRequest.initialize(this, snapshotType, snapshotData);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, snapshotType, snapshotData) { 
        obj['snapshot_type'] = snapshotType;
        obj['snapshot_data'] = snapshotData;
    }

    /**
     * Constructs a <code>SnapshotRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SnapshotRequest} obj Optional instance to populate.
     * @return {module:model/SnapshotRequest} The populated <code>SnapshotRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SnapshotRequest();

            if (data.hasOwnProperty('snapshot_type')) {
                obj['snapshot_type'] = ApiClient.convertToType(data['snapshot_type'], 'String');
            }
            if (data.hasOwnProperty('snapshot_data')) {
                obj['snapshot_data'] = ApiClient.convertToType(data['snapshot_data'], File);
            }
        }
        return obj;
    }


}

/**
 * @member {String} snapshot_type
 */
SnapshotRequest.prototype['snapshot_type'] = undefined;

/**
 * @member {File} snapshot_data
 */
SnapshotRequest.prototype['snapshot_data'] = undefined;






export default SnapshotRequest;


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
import ExportEnum from './ExportEnum';

/**
 * The IfcExportRequest model module.
 * @module model/IfcExportRequest
 * @version 0.0.0
 */
class IfcExportRequest {
    /**
     * Constructs a new <code>IfcExportRequest</code>.
     * @alias module:model/IfcExportRequest
     * @param fileName {String} The name of the exported IFC file. It MUST end with .ifc or the exported file won't be processed by BIMData
     */
    constructor(fileName) { 
        
        IfcExportRequest.initialize(this, fileName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fileName) { 
        obj['file_name'] = fileName;
    }

    /**
     * Constructs a <code>IfcExportRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IfcExportRequest} obj Optional instance to populate.
     * @return {module:model/IfcExportRequest} The populated <code>IfcExportRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IfcExportRequest();

            if (data.hasOwnProperty('classifications')) {
                obj['classifications'] = ApiClient.convertToType(data['classifications'], ExportEnum);
            }
            if (data.hasOwnProperty('zones')) {
                obj['zones'] = ApiClient.convertToType(data['zones'], ExportEnum);
            }
            if (data.hasOwnProperty('properties')) {
                obj['properties'] = ApiClient.convertToType(data['properties'], ExportEnum);
            }
            if (data.hasOwnProperty('systems')) {
                obj['systems'] = ApiClient.convertToType(data['systems'], ExportEnum);
            }
            if (data.hasOwnProperty('layers')) {
                obj['layers'] = ApiClient.convertToType(data['layers'], ExportEnum);
            }
            if (data.hasOwnProperty('materials')) {
                obj['materials'] = ApiClient.convertToType(data['materials'], ExportEnum);
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], ExportEnum);
            }
            if (data.hasOwnProperty('structure')) {
                obj['structure'] = ApiClient.convertToType(data['structure'], ExportEnum);
            }
            if (data.hasOwnProperty('uuids')) {
                obj['uuids'] = ApiClient.convertToType(data['uuids'], ['String']);
            }
            if (data.hasOwnProperty('file_name')) {
                obj['file_name'] = ApiClient.convertToType(data['file_name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Exported IFC will include classifications from original IFC file (ORIGINAL), from latest API updates (UPDATED), or won't include classifications(NONE)
 * @member {module:model/ExportEnum} classifications
 */
IfcExportRequest.prototype['classifications'] = undefined;

/**
 * Exported IFC will include zones from original IFC file (ORIGINAL), from latest API updates (UPDATED), or won't include zones(NONE)
 * @member {module:model/ExportEnum} zones
 */
IfcExportRequest.prototype['zones'] = undefined;

/**
 * Exported IFC will include properties from original IFC file (ORIGINAL), from latest API updates (UPDATED), or won't include properties(NONE)
 * @member {module:model/ExportEnum} properties
 */
IfcExportRequest.prototype['properties'] = undefined;

/**
 * Exported IFC will include systems from original IFC file (ORIGINAL), from latest API updates (UPDATED), or won't include systems(NONE)
 * @member {module:model/ExportEnum} systems
 */
IfcExportRequest.prototype['systems'] = undefined;

/**
 * Exported IFC will include layers from original IFC file (ORIGINAL), from latest API updates (UPDATED), or won't include layers(NONE)
 * @member {module:model/ExportEnum} layers
 */
IfcExportRequest.prototype['layers'] = undefined;

/**
 * Exported IFC will include materials from original IFC file (ORIGINAL), from latest API updates (UPDATED), or won't include materials(NONE)
 * @member {module:model/ExportEnum} materials
 */
IfcExportRequest.prototype['materials'] = undefined;

/**
 * Exported IFC will include attributes from original IFC file (ORIGINAL), from latest API updates (UPDATED), or won't include attributes(NONE)
 * @member {module:model/ExportEnum} attributes
 */
IfcExportRequest.prototype['attributes'] = undefined;

/**
 * Exported IFC will include the structure from original IFC file (ORIGINAL), from latest API updates (UPDATED), or won't include structure(NONE)
 * @member {module:model/ExportEnum} structure
 */
IfcExportRequest.prototype['structure'] = undefined;

/**
 * Exported IFC will only have those elements. If omitted, all elements will be exported
 * @member {Array.<String>} uuids
 */
IfcExportRequest.prototype['uuids'] = undefined;

/**
 * The name of the exported IFC file. It MUST end with .ifc or the exported file won't be processed by BIMData
 * @member {String} file_name
 */
IfcExportRequest.prototype['file_name'] = undefined;






export default IfcExportRequest;


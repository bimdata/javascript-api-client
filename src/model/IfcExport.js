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
 * The IfcExport model module.
 * @module model/IfcExport
 * @version 0.0.0
 */
class IfcExport {
    /**
     * Constructs a new <code>IfcExport</code>.
     * Ifc(id, creator, document, project, created_at, updated_at, structure_file, systems_file, zones_file, map_file, gltf_file, gltf_with_openings_file, bvh_tree_file, viewer_360_file, xkt_file, world_position, is_demo, errors, warnings, source, update_check_needed, archived, version)
     * @alias module:model/IfcExport
     * @param fileName {String} The name of the exported IFC file. It MUST end with .ifc or the exported file won't be processed by BIMData
     */
    constructor(fileName) { 
        
        IfcExport.initialize(this, fileName);
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
     * Constructs a <code>IfcExport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IfcExport} obj Optional instance to populate.
     * @return {module:model/IfcExport} The populated <code>IfcExport</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IfcExport();

            if (data.hasOwnProperty('classifications')) {
                obj['classifications'] = ApiClient.convertToType(data['classifications'], 'String');
            }
            if (data.hasOwnProperty('zones')) {
                obj['zones'] = ApiClient.convertToType(data['zones'], 'String');
            }
            if (data.hasOwnProperty('properties')) {
                obj['properties'] = ApiClient.convertToType(data['properties'], 'String');
            }
            if (data.hasOwnProperty('systems')) {
                obj['systems'] = ApiClient.convertToType(data['systems'], 'String');
            }
            if (data.hasOwnProperty('layers')) {
                obj['layers'] = ApiClient.convertToType(data['layers'], 'String');
            }
            if (data.hasOwnProperty('materials')) {
                obj['materials'] = ApiClient.convertToType(data['materials'], 'String');
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], 'String');
            }
            if (data.hasOwnProperty('structure')) {
                obj['structure'] = ApiClient.convertToType(data['structure'], 'String');
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
 * @member {module:model/IfcExport.ClassificationsEnum} classifications
 * @default 'UPDATED'
 */
IfcExport.prototype['classifications'] = 'UPDATED';

/**
 * Exported IFC will include zones from original IFC file (ORIGINAL), from latest API updates (UPDATED), or won't include zones(NONE)
 * @member {module:model/IfcExport.ZonesEnum} zones
 * @default 'UPDATED'
 */
IfcExport.prototype['zones'] = 'UPDATED';

/**
 * Exported IFC will include properties from original IFC file (ORIGINAL), from latest API updates (UPDATED), or won't include properties(NONE)
 * @member {module:model/IfcExport.PropertiesEnum} properties
 * @default 'UPDATED'
 */
IfcExport.prototype['properties'] = 'UPDATED';

/**
 * Exported IFC will include systems from original IFC file (ORIGINAL), from latest API updates (UPDATED), or won't include systems(NONE)
 * @member {module:model/IfcExport.SystemsEnum} systems
 * @default 'UPDATED'
 */
IfcExport.prototype['systems'] = 'UPDATED';

/**
 * Exported IFC will include layers from original IFC file (ORIGINAL), from latest API updates (UPDATED), or won't include layers(NONE)
 * @member {module:model/IfcExport.LayersEnum} layers
 * @default 'UPDATED'
 */
IfcExport.prototype['layers'] = 'UPDATED';

/**
 * Exported IFC will include materials from original IFC file (ORIGINAL), from latest API updates (UPDATED), or won't include materials(NONE)
 * @member {module:model/IfcExport.MaterialsEnum} materials
 * @default 'UPDATED'
 */
IfcExport.prototype['materials'] = 'UPDATED';

/**
 * Exported IFC will include attributes from original IFC file (ORIGINAL), from latest API updates (UPDATED), or won't include attributes(NONE)
 * @member {module:model/IfcExport.AttributesEnum} attributes
 * @default 'UPDATED'
 */
IfcExport.prototype['attributes'] = 'UPDATED';

/**
 * Exported IFC will include the structure from original IFC file (ORIGINAL), from latest API updates (UPDATED), or won't include structure(NONE)
 * @member {module:model/IfcExport.StructureEnum} structure
 * @default 'UPDATED'
 */
IfcExport.prototype['structure'] = 'UPDATED';

/**
 * 
 * @member {Array.<String>} uuids
 */
IfcExport.prototype['uuids'] = undefined;

/**
 * The name of the exported IFC file. It MUST end with .ifc or the exported file won't be processed by BIMData
 * @member {String} file_name
 */
IfcExport.prototype['file_name'] = undefined;





/**
 * Allowed values for the <code>classifications</code> property.
 * @enum {String}
 * @readonly
 */
IfcExport['ClassificationsEnum'] = {

    /**
     * value: "ORIGINAL"
     * @const
     */
    "ORIGINAL": "ORIGINAL",

    /**
     * value: "UPDATED"
     * @const
     */
    "UPDATED": "UPDATED",

    /**
     * value: "NONE"
     * @const
     */
    "NONE": "NONE"
};


/**
 * Allowed values for the <code>zones</code> property.
 * @enum {String}
 * @readonly
 */
IfcExport['ZonesEnum'] = {

    /**
     * value: "ORIGINAL"
     * @const
     */
    "ORIGINAL": "ORIGINAL",

    /**
     * value: "UPDATED"
     * @const
     */
    "UPDATED": "UPDATED",

    /**
     * value: "NONE"
     * @const
     */
    "NONE": "NONE"
};


/**
 * Allowed values for the <code>properties</code> property.
 * @enum {String}
 * @readonly
 */
IfcExport['PropertiesEnum'] = {

    /**
     * value: "ORIGINAL"
     * @const
     */
    "ORIGINAL": "ORIGINAL",

    /**
     * value: "UPDATED"
     * @const
     */
    "UPDATED": "UPDATED",

    /**
     * value: "NONE"
     * @const
     */
    "NONE": "NONE"
};


/**
 * Allowed values for the <code>systems</code> property.
 * @enum {String}
 * @readonly
 */
IfcExport['SystemsEnum'] = {

    /**
     * value: "ORIGINAL"
     * @const
     */
    "ORIGINAL": "ORIGINAL",

    /**
     * value: "UPDATED"
     * @const
     */
    "UPDATED": "UPDATED",

    /**
     * value: "NONE"
     * @const
     */
    "NONE": "NONE"
};


/**
 * Allowed values for the <code>layers</code> property.
 * @enum {String}
 * @readonly
 */
IfcExport['LayersEnum'] = {

    /**
     * value: "ORIGINAL"
     * @const
     */
    "ORIGINAL": "ORIGINAL",

    /**
     * value: "UPDATED"
     * @const
     */
    "UPDATED": "UPDATED",

    /**
     * value: "NONE"
     * @const
     */
    "NONE": "NONE"
};


/**
 * Allowed values for the <code>materials</code> property.
 * @enum {String}
 * @readonly
 */
IfcExport['MaterialsEnum'] = {

    /**
     * value: "ORIGINAL"
     * @const
     */
    "ORIGINAL": "ORIGINAL",

    /**
     * value: "UPDATED"
     * @const
     */
    "UPDATED": "UPDATED",

    /**
     * value: "NONE"
     * @const
     */
    "NONE": "NONE"
};


/**
 * Allowed values for the <code>attributes</code> property.
 * @enum {String}
 * @readonly
 */
IfcExport['AttributesEnum'] = {

    /**
     * value: "ORIGINAL"
     * @const
     */
    "ORIGINAL": "ORIGINAL",

    /**
     * value: "UPDATED"
     * @const
     */
    "UPDATED": "UPDATED",

    /**
     * value: "NONE"
     * @const
     */
    "NONE": "NONE"
};


/**
 * Allowed values for the <code>structure</code> property.
 * @enum {String}
 * @readonly
 */
IfcExport['StructureEnum'] = {

    /**
     * value: "ORIGINAL"
     * @const
     */
    "ORIGINAL": "ORIGINAL",

    /**
     * value: "UPDATED"
     * @const
     */
    "UPDATED": "UPDATED",

    /**
     * value: "NONE"
     * @const
     */
    "NONE": "NONE"
};



export default IfcExport;


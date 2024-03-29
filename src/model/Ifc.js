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
import Document from './Document';
import User from './User';

/**
 * The Ifc model module.
 * @module model/Ifc
 * @version 0.0.0
 */
class Ifc {
    /**
     * Constructs a new <code>Ifc</code>.
     * @alias module:model/Ifc
     */
    constructor() { 
        
        Ifc.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Ifc</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Ifc} obj Optional instance to populate.
     * @return {module:model/Ifc} The populated <code>Ifc</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Ifc();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('creator')) {
                obj['creator'] = User.constructFromObject(data['creator']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = ApiClient.convertToType(data['source'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('document_id')) {
                obj['document_id'] = ApiClient.convertToType(data['document_id'], 'String');
            }
            if (data.hasOwnProperty('document')) {
                obj['document'] = Document.constructFromObject(data['document']);
            }
            if (data.hasOwnProperty('structure_file')) {
                obj['structure_file'] = ApiClient.convertToType(data['structure_file'], 'String');
            }
            if (data.hasOwnProperty('systems_file')) {
                obj['systems_file'] = ApiClient.convertToType(data['systems_file'], 'String');
            }
            if (data.hasOwnProperty('map_file')) {
                obj['map_file'] = ApiClient.convertToType(data['map_file'], 'String');
            }
            if (data.hasOwnProperty('gltf_file')) {
                obj['gltf_file'] = ApiClient.convertToType(data['gltf_file'], 'String');
            }
            if (data.hasOwnProperty('bvh_tree_file')) {
                obj['bvh_tree_file'] = ApiClient.convertToType(data['bvh_tree_file'], 'String');
            }
            if (data.hasOwnProperty('viewer_360_file')) {
                obj['viewer_360_file'] = ApiClient.convertToType(data['viewer_360_file'], 'String');
            }
            if (data.hasOwnProperty('xkt_file')) {
                obj['xkt_file'] = ApiClient.convertToType(data['xkt_file'], 'String');
            }
            if (data.hasOwnProperty('project_id')) {
                obj['project_id'] = ApiClient.convertToType(data['project_id'], 'String');
            }
            if (data.hasOwnProperty('world_position')) {
                obj['world_position'] = ApiClient.convertToType(data['world_position'], ['Number']);
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], ['String']);
            }
            if (data.hasOwnProperty('warnings')) {
                obj['warnings'] = ApiClient.convertToType(data['warnings'], ['String']);
            }
            if (data.hasOwnProperty('archived')) {
                obj['archived'] = ApiClient.convertToType(data['archived'], 'Boolean');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
            if (data.hasOwnProperty('north_vector')) {
                obj['north_vector'] = ApiClient.convertToType(data['north_vector'], [['Number']]);
            }
            if (data.hasOwnProperty('recommanded_2d_angle')) {
                obj['recommanded_2d_angle'] = ApiClient.convertToType(data['recommanded_2d_angle'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
Ifc.prototype['id'] = undefined;

/**
 * @member {String} name
 */
Ifc.prototype['name'] = undefined;

/**
 * @member {module:model/Ifc.TypeEnum} type
 */
Ifc.prototype['type'] = undefined;

/**
 * @member {module:model/User} creator
 */
Ifc.prototype['creator'] = undefined;

/**
 * @member {String} status
 */
Ifc.prototype['status'] = undefined;

/**
 * @member {module:model/Ifc.SourceEnum} source
 */
Ifc.prototype['source'] = undefined;

/**
 * @member {Date} created_at
 */
Ifc.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
Ifc.prototype['updated_at'] = undefined;

/**
 * @member {String} document_id
 */
Ifc.prototype['document_id'] = undefined;

/**
 * @member {module:model/Document} document
 */
Ifc.prototype['document'] = undefined;

/**
 * @member {String} structure_file
 */
Ifc.prototype['structure_file'] = undefined;

/**
 * @member {String} systems_file
 */
Ifc.prototype['systems_file'] = undefined;

/**
 * @member {String} map_file
 */
Ifc.prototype['map_file'] = undefined;

/**
 * @member {String} gltf_file
 */
Ifc.prototype['gltf_file'] = undefined;

/**
 * @member {String} bvh_tree_file
 */
Ifc.prototype['bvh_tree_file'] = undefined;

/**
 * @member {String} viewer_360_file
 */
Ifc.prototype['viewer_360_file'] = undefined;

/**
 * @member {String} xkt_file
 */
Ifc.prototype['xkt_file'] = undefined;

/**
 * @member {String} project_id
 */
Ifc.prototype['project_id'] = undefined;

/**
 * [x,y,z] array of the position of the local_placement in world coordinates
 * @member {Array.<Number>} world_position
 */
Ifc.prototype['world_position'] = undefined;

/**
 * List of errors that happened during IFC processing
 * @member {Array.<String>} errors
 */
Ifc.prototype['errors'] = undefined;

/**
 * List of warnings that happened during IFC processing
 * @member {Array.<String>} warnings
 */
Ifc.prototype['warnings'] = undefined;

/**
 * @member {Boolean} archived
 */
Ifc.prototype['archived'] = undefined;

/**
 * This field is only for information. Updating it won't impact the export.
 * @member {String} version
 */
Ifc.prototype['version'] = undefined;

/**
 * This field is only for information. Updating it won't impact the export.
 * @member {Array.<Array.<Number>>} north_vector
 */
Ifc.prototype['north_vector'] = undefined;

/**
 * This is the angle in clockwise degree to apply on the 2D to optimise the horizontality of objects. This field is only for information. Updating it won't impact the export.
 * @member {Number} recommanded_2d_angle
 */
Ifc.prototype['recommanded_2d_angle'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
Ifc['TypeEnum'] = {

    /**
     * value: "IFC"
     * @const
     */
    "IFC": "IFC",

    /**
     * value: "DWG"
     * @const
     */
    "DWG": "DWG",

    /**
     * value: "DXF"
     * @const
     */
    "DXF": "DXF",

    /**
     * value: "GLTF"
     * @const
     */
    "GLTF": "GLTF",

    /**
     * value: "PDF"
     * @const
     */
    "PDF": "PDF",

    /**
     * value: "JPEG"
     * @const
     */
    "JPEG": "JPEG",

    /**
     * value: "PNG"
     * @const
     */
    "PNG": "PNG",

    /**
     * value: "OBJ"
     * @const
     */
    "OBJ": "OBJ",

    /**
     * value: "DAE"
     * @const
     */
    "DAE": "DAE",

    /**
     * value: "BFX"
     * @const
     */
    "BFX": "BFX",

    /**
     * value: "METABUILDING"
     * @const
     */
    "METABUILDING": "METABUILDING"
};


/**
 * Allowed values for the <code>source</code> property.
 * @enum {String}
 * @readonly
 */
Ifc['SourceEnum'] = {

    /**
     * value: "UPLOAD"
     * @const
     */
    "UPLOAD": "UPLOAD",

    /**
     * value: "SPLIT"
     * @const
     */
    "SPLIT": "SPLIT",

    /**
     * value: "MERGE"
     * @const
     */
    "MERGE": "MERGE",

    /**
     * value: "EXPORT"
     * @const
     */
    "EXPORT": "EXPORT",

    /**
     * value: "OPTIMIZED"
     * @const
     */
    "OPTIMIZED": "OPTIMIZED"
};



export default Ifc;


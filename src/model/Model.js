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
import Document from './Document';
import User from './User';

/**
 * The Model model module.
 * @module model/Model
 * @version 0.0.0
 */
class Model {
    /**
     * Constructs a new <code>Model</code>.
     * @alias module:model/Model
     * @param id {Number} 
     * @param type {module:model/Model.TypeEnum} 
     * @param creator {module:model/User} 
     * @param status {String} 
     * @param createdAt {Date} 
     * @param updatedAt {Date} 
     * @param documentId {Number} 
     * @param document {module:model/Document} 
     * @param structureFile {String} 
     * @param systemsFile {String} 
     * @param mapFile {String} 
     * @param gltfFile {String} 
     * @param bvhTreeFile {String} 
     * @param viewer360File {String} 
     * @param xktFile {String} 
     * @param projectId {Number} 
     * @param errors {Array.<String>} List of errors that happened during IFC processing
     * @param warnings {Array.<String>} List of warnings that happened during IFC processing
     */
    constructor(id, type, creator, status, createdAt, updatedAt, documentId, document, structureFile, systemsFile, mapFile, gltfFile, bvhTreeFile, viewer360File, xktFile, projectId, errors, warnings) { 
        
        Model.initialize(this, id, type, creator, status, createdAt, updatedAt, documentId, document, structureFile, systemsFile, mapFile, gltfFile, bvhTreeFile, viewer360File, xktFile, projectId, errors, warnings);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, type, creator, status, createdAt, updatedAt, documentId, document, structureFile, systemsFile, mapFile, gltfFile, bvhTreeFile, viewer360File, xktFile, projectId, errors, warnings) { 
        obj['id'] = id;
        obj['type'] = type;
        obj['creator'] = creator;
        obj['status'] = status;
        obj['created_at'] = createdAt;
        obj['updated_at'] = updatedAt;
        obj['document_id'] = documentId;
        obj['document'] = document;
        obj['structure_file'] = structureFile;
        obj['systems_file'] = systemsFile;
        obj['map_file'] = mapFile;
        obj['gltf_file'] = gltfFile;
        obj['bvh_tree_file'] = bvhTreeFile;
        obj['viewer_360_file'] = viewer360File;
        obj['xkt_file'] = xktFile;
        obj['project_id'] = projectId;
        obj['errors'] = errors;
        obj['warnings'] = warnings;
    }

    /**
     * Constructs a <code>Model</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Model} obj Optional instance to populate.
     * @return {module:model/Model} The populated <code>Model</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Model();

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
                obj['creator'] = ApiClient.convertToType(data['creator'], User);
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
                obj['document_id'] = ApiClient.convertToType(data['document_id'], 'Number');
            }
            if (data.hasOwnProperty('document')) {
                obj['document'] = ApiClient.convertToType(data['document'], Document);
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
                obj['project_id'] = ApiClient.convertToType(data['project_id'], 'Number');
            }
            if (data.hasOwnProperty('world_position')) {
                obj['world_position'] = ApiClient.convertToType(data['world_position'], ['Number']);
            }
            if (data.hasOwnProperty('size_ratio')) {
                obj['size_ratio'] = ApiClient.convertToType(data['size_ratio'], 'Number');
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
Model.prototype['id'] = undefined;

/**
 * @member {String} name
 */
Model.prototype['name'] = undefined;

/**
 * @member {module:model/Model.TypeEnum} type
 */
Model.prototype['type'] = undefined;

/**
 * @member {module:model/User} creator
 */
Model.prototype['creator'] = undefined;

/**
 * @member {String} status
 */
Model.prototype['status'] = undefined;

/**
 * @member {module:model/Model.SourceEnum} source
 */
Model.prototype['source'] = undefined;

/**
 * @member {Date} created_at
 */
Model.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
Model.prototype['updated_at'] = undefined;

/**
 * @member {Number} document_id
 */
Model.prototype['document_id'] = undefined;

/**
 * @member {module:model/Document} document
 */
Model.prototype['document'] = undefined;

/**
 * @member {String} structure_file
 */
Model.prototype['structure_file'] = undefined;

/**
 * @member {String} systems_file
 */
Model.prototype['systems_file'] = undefined;

/**
 * @member {String} map_file
 */
Model.prototype['map_file'] = undefined;

/**
 * @member {String} gltf_file
 */
Model.prototype['gltf_file'] = undefined;

/**
 * @member {String} bvh_tree_file
 */
Model.prototype['bvh_tree_file'] = undefined;

/**
 * @member {String} viewer_360_file
 */
Model.prototype['viewer_360_file'] = undefined;

/**
 * @member {String} xkt_file
 */
Model.prototype['xkt_file'] = undefined;

/**
 * @member {Number} project_id
 */
Model.prototype['project_id'] = undefined;

/**
 * [x,y,z] array of the position of the local_placement in world coordinates
 * @member {Array.<Number>} world_position
 */
Model.prototype['world_position'] = undefined;

/**
 * How many meters a unit represents
 * @member {Number} size_ratio
 */
Model.prototype['size_ratio'] = undefined;

/**
 * List of errors that happened during IFC processing
 * @member {Array.<String>} errors
 */
Model.prototype['errors'] = undefined;

/**
 * List of warnings that happened during IFC processing
 * @member {Array.<String>} warnings
 */
Model.prototype['warnings'] = undefined;

/**
 * @member {Boolean} archived
 */
Model.prototype['archived'] = undefined;

/**
 * This field is only for information. Updating it won't impact the export.
 * @member {String} version
 */
Model.prototype['version'] = undefined;

/**
 * This field is only for information. Updating it won't impact the export.
 * @member {Array.<Array.<Number>>} north_vector
 */
Model.prototype['north_vector'] = undefined;

/**
 * This is the angle in clockwise degree to apply on the 2D to optimise the horizontality of objects. This field is only for information. Updating it won't impact the export.
 * @member {Number} recommanded_2d_angle
 */
Model.prototype['recommanded_2d_angle'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
Model['TypeEnum'] = {

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
Model['SourceEnum'] = {

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



export default Model;


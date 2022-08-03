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
 * The FolderTree model module.
 * @module model/FolderTree
 * @version 0.0.0
 */
class FolderTree {
    /**
     * Constructs a new <code>FolderTree</code>.
     * @alias module:model/FolderTree
     * @param children {Array.<module:model/FolderTree>} 
     * @param name {String} 
     */
    constructor(children, name) { 
        
        FolderTree.initialize(this, children, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, children, name) { 
        obj['children'] = children;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>FolderTree</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FolderTree} obj Optional instance to populate.
     * @return {module:model/FolderTree} The populated <code>FolderTree</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FolderTree();

            if (data.hasOwnProperty('children')) {
                obj['children'] = ApiClient.convertToType(data['children'], [FolderTree]);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/FolderTree>} children
 */
FolderTree.prototype['children'] = undefined;

/**
 * @member {String} name
 */
FolderTree.prototype['name'] = undefined;






export default FolderTree;

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
import Document from './Document';

/**
 * The DocumentWithElementList model module.
 * @module model/DocumentWithElementList
 * @version 0.0.0
 */
class DocumentWithElementList {
    /**
     * Constructs a new <code>DocumentWithElementList</code>.
     * @alias module:model/DocumentWithElementList
     * @param document {module:model/Document} 
     * @param elementUuids {Array.<String>} 
     */
    constructor(document, elementUuids) { 
        
        DocumentWithElementList.initialize(this, document, elementUuids);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, document, elementUuids) { 
        obj['document'] = document;
        obj['element_uuids'] = elementUuids;
    }

    /**
     * Constructs a <code>DocumentWithElementList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DocumentWithElementList} obj Optional instance to populate.
     * @return {module:model/DocumentWithElementList} The populated <code>DocumentWithElementList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DocumentWithElementList();

            if (data.hasOwnProperty('document')) {
                obj['document'] = ApiClient.convertToType(data['document'], Document);
            }
            if (data.hasOwnProperty('element_uuids')) {
                obj['element_uuids'] = ApiClient.convertToType(data['element_uuids'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Document} document
 */
DocumentWithElementList.prototype['document'] = undefined;

/**
 * @member {Array.<String>} element_uuids
 */
DocumentWithElementList.prototype['element_uuids'] = undefined;






export default DocumentWithElementList;


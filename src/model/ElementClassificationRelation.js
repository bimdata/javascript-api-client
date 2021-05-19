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
 * The ElementClassificationRelation model module.
 * @module model/ElementClassificationRelation
 * @version 0.0.0
 */
class ElementClassificationRelation {
    /**
     * Constructs a new <code>ElementClassificationRelation</code>.
     * @alias module:model/ElementClassificationRelation
     * @param elementUuid {String} 
     * @param classificationId {Number} 
     */
    constructor(elementUuid, classificationId) { 
        
        ElementClassificationRelation.initialize(this, elementUuid, classificationId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, elementUuid, classificationId) { 
        obj['element_uuid'] = elementUuid;
        obj['classification_id'] = classificationId;
    }

    /**
     * Constructs a <code>ElementClassificationRelation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ElementClassificationRelation} obj Optional instance to populate.
     * @return {module:model/ElementClassificationRelation} The populated <code>ElementClassificationRelation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ElementClassificationRelation();

            if (data.hasOwnProperty('element_uuid')) {
                obj['element_uuid'] = ApiClient.convertToType(data['element_uuid'], 'String');
            }
            if (data.hasOwnProperty('classification_id')) {
                obj['classification_id'] = ApiClient.convertToType(data['classification_id'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} element_uuid
 */
ElementClassificationRelation.prototype['element_uuid'] = undefined;

/**
 * @member {Number} classification_id
 */
ElementClassificationRelation.prototype['classification_id'] = undefined;






export default ElementClassificationRelation;


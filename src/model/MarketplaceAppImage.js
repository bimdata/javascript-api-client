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
 * The MarketplaceAppImage model module.
 * @module model/MarketplaceAppImage
 * @version 0.0.0
 */
class MarketplaceAppImage {
    /**
     * Constructs a new <code>MarketplaceAppImage</code>.
     * @alias module:model/MarketplaceAppImage
     * @param id {Number} 
     * @param image {String} 
     * @param order {Number} 
     */
    constructor(id, image, order) { 
        
        MarketplaceAppImage.initialize(this, id, image, order);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, image, order) { 
        obj['id'] = id;
        obj['image'] = image;
        obj['order'] = order;
    }

    /**
     * Constructs a <code>MarketplaceAppImage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MarketplaceAppImage} obj Optional instance to populate.
     * @return {module:model/MarketplaceAppImage} The populated <code>MarketplaceAppImage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MarketplaceAppImage();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = ApiClient.convertToType(data['image'], 'String');
            }
            if (data.hasOwnProperty('order')) {
                obj['order'] = ApiClient.convertToType(data['order'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
MarketplaceAppImage.prototype['id'] = undefined;

/**
 * @member {String} image
 */
MarketplaceAppImage.prototype['image'] = undefined;

/**
 * @member {Number} order
 */
MarketplaceAppImage.prototype['order'] = undefined;






export default MarketplaceAppImage;


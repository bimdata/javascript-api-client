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
import MarketplaceAppImage from './MarketplaceAppImage';
import PublicOrganization from './PublicOrganization';
import User from './User';

/**
 * The MarketplaceApp model module.
 * @module model/MarketplaceApp
 * @version 0.0.0
 */
class MarketplaceApp {
    /**
     * Constructs a new <code>MarketplaceApp</code>.
     * @alias module:model/MarketplaceApp
     * @param id {Number} 
     * @param name {String} 
     * @param shortDescription {String} 
     * @param longDescription {String} 
     * @param creator {module:model/User} 
     * @param scopes {Array.<String>} 
     * @param isPublic {Boolean} 
     * @param images {Array.<module:model/MarketplaceAppImage>} 
     * @param organization {module:model/PublicOrganization} 
     */
    constructor(id, name, shortDescription, longDescription, creator, scopes, isPublic, images, organization) { 
        
        MarketplaceApp.initialize(this, id, name, shortDescription, longDescription, creator, scopes, isPublic, images, organization);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name, shortDescription, longDescription, creator, scopes, isPublic, images, organization) { 
        obj['id'] = id;
        obj['name'] = name;
        obj['short_description'] = shortDescription;
        obj['long_description'] = longDescription;
        obj['creator'] = creator;
        obj['scopes'] = scopes;
        obj['is_public'] = isPublic;
        obj['images'] = images;
        obj['organization'] = organization;
    }

    /**
     * Constructs a <code>MarketplaceApp</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MarketplaceApp} obj Optional instance to populate.
     * @return {module:model/MarketplaceApp} The populated <code>MarketplaceApp</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MarketplaceApp();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('short_description')) {
                obj['short_description'] = ApiClient.convertToType(data['short_description'], 'String');
            }
            if (data.hasOwnProperty('long_description')) {
                obj['long_description'] = ApiClient.convertToType(data['long_description'], 'String');
            }
            if (data.hasOwnProperty('activation_webhook_url')) {
                obj['activation_webhook_url'] = ApiClient.convertToType(data['activation_webhook_url'], 'String');
            }
            if (data.hasOwnProperty('post_activation_redirect_uri')) {
                obj['post_activation_redirect_uri'] = ApiClient.convertToType(data['post_activation_redirect_uri'], 'String');
            }
            if (data.hasOwnProperty('viewer_plugins_urls')) {
                obj['viewer_plugins_urls'] = ApiClient.convertToType(data['viewer_plugins_urls'], ['String']);
            }
            if (data.hasOwnProperty('creator')) {
                obj['creator'] = ApiClient.convertToType(data['creator'], User);
            }
            if (data.hasOwnProperty('scopes')) {
                obj['scopes'] = ApiClient.convertToType(data['scopes'], ['String']);
            }
            if (data.hasOwnProperty('settings_url')) {
                obj['settings_url'] = ApiClient.convertToType(data['settings_url'], 'String');
            }
            if (data.hasOwnProperty('is_public')) {
                obj['is_public'] = ApiClient.convertToType(data['is_public'], 'Boolean');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'String');
            }
            if (data.hasOwnProperty('file')) {
                obj['file'] = ApiClient.convertToType(data['file'], 'String');
            }
            if (data.hasOwnProperty('images')) {
                obj['images'] = ApiClient.convertToType(data['images'], [MarketplaceAppImage]);
            }
            if (data.hasOwnProperty('organization')) {
                obj['organization'] = ApiClient.convertToType(data['organization'], PublicOrganization);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
MarketplaceApp.prototype['id'] = undefined;

/**
 * @member {String} name
 */
MarketplaceApp.prototype['name'] = undefined;

/**
 * @member {String} short_description
 */
MarketplaceApp.prototype['short_description'] = undefined;

/**
 * @member {String} long_description
 */
MarketplaceApp.prototype['long_description'] = undefined;

/**
 * @member {String} activation_webhook_url
 */
MarketplaceApp.prototype['activation_webhook_url'] = undefined;

/**
 * @member {String} post_activation_redirect_uri
 */
MarketplaceApp.prototype['post_activation_redirect_uri'] = undefined;

/**
 * @member {Array.<String>} viewer_plugins_urls
 */
MarketplaceApp.prototype['viewer_plugins_urls'] = undefined;

/**
 * @member {module:model/User} creator
 */
MarketplaceApp.prototype['creator'] = undefined;

/**
 * @member {Array.<String>} scopes
 */
MarketplaceApp.prototype['scopes'] = undefined;

/**
 * this URL will be called with query params ?cloud_id=
 * @member {String} settings_url
 */
MarketplaceApp.prototype['settings_url'] = undefined;

/**
 * @member {Boolean} is_public
 */
MarketplaceApp.prototype['is_public'] = undefined;

/**
 * @member {Array.<String>} tags
 */
MarketplaceApp.prototype['tags'] = undefined;

/**
 * @member {String} logo
 */
MarketplaceApp.prototype['logo'] = undefined;

/**
 * @member {String} file
 */
MarketplaceApp.prototype['file'] = undefined;

/**
 * @member {Array.<module:model/MarketplaceAppImage>} images
 */
MarketplaceApp.prototype['images'] = undefined;

/**
 * @member {module:model/PublicOrganization} organization
 */
MarketplaceApp.prototype['organization'] = undefined;






export default MarketplaceApp;


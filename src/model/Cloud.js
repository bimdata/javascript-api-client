/**
 * BIMData API
 * BIMData API documentation
 *
 * OpenAPI spec version: v1
 * Contact: contact@bimdata.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Feature', 'model/FosUser'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Feature'), require('./FosUser'));
  } else {
    // Browser globals (root is window)
    if (!root.bimdata) {
      root.bimdata = {};
    }
    root.bimdata.Cloud = factory(root.bimdata.ApiClient, root.bimdata.Feature, root.bimdata.FosUser);
  }
}(this, function(ApiClient, Feature, FosUser) {
  'use strict';




  /**
   * The Cloud model module.
   * @module model/Cloud
   * @version 0.0.0
   */

  /**
   * Constructs a new <code>Cloud</code>.
   * @alias module:model/Cloud
   * @class
   * @param name {String} 
   */
  var exports = function(name) {
    var _this = this;


    _this['name'] = name;





  };

  /**
   * Constructs a <code>Cloud</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Cloud} obj Optional instance to populate.
   * @return {module:model/Cloud} The populated <code>Cloud</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('features')) {
        obj['features'] = ApiClient.convertToType(data['features'], [Feature]);
      }
      if (data.hasOwnProperty('creator')) {
        obj['creator'] = FosUser.constructFromObject(data['creator']);
      }
      if (data.hasOwnProperty('is_default')) {
        obj['is_default'] = ApiClient.convertToType(data['is_default'], 'Boolean');
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
      }
      if (data.hasOwnProperty('updated_at')) {
        obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Array.<module:model/Feature>} features
   */
  exports.prototype['features'] = undefined;
  /**
   * @member {module:model/FosUser} creator
   */
  exports.prototype['creator'] = undefined;
  /**
   * @member {Boolean} is_default
   */
  exports.prototype['is_default'] = undefined;
  /**
   * @member {Date} created_at
   */
  exports.prototype['created_at'] = undefined;
  /**
   * @member {Date} updated_at
   */
  exports.prototype['updated_at'] = undefined;



  return exports;
}));



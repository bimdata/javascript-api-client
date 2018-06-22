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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.bimdata) {
      root.bimdata = {};
    }
    root.bimdata.ElementClassificationRelation = factory(root.bimdata.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ElementClassificationRelation model module.
   * @module model/ElementClassificationRelation
   * @version 0.0.0
   */

  /**
   * Constructs a new <code>ElementClassificationRelation</code>.
   * @alias module:model/ElementClassificationRelation
   * @class
   * @param elementUuid {String} 
   * @param classificationId {Number} 
   */
  var exports = function(elementUuid, classificationId) {
    var _this = this;

    _this['element_uuid'] = elementUuid;
    _this['classification_id'] = classificationId;
  };

  /**
   * Constructs a <code>ElementClassificationRelation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ElementClassificationRelation} obj Optional instance to populate.
   * @return {module:model/ElementClassificationRelation} The populated <code>ElementClassificationRelation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('element_uuid')) {
        obj['element_uuid'] = ApiClient.convertToType(data['element_uuid'], 'String');
      }
      if (data.hasOwnProperty('classification_id')) {
        obj['classification_id'] = ApiClient.convertToType(data['classification_id'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} element_uuid
   */
  exports.prototype['element_uuid'] = undefined;
  /**
   * @member {Number} classification_id
   */
  exports.prototype['classification_id'] = undefined;



  return exports;
}));



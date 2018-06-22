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
    define(['ApiClient', 'model/Classification', 'model/PropertySet'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Classification'), require('./PropertySet'));
  } else {
    // Browser globals (root is window)
    if (!root.bimdata) {
      root.bimdata = {};
    }
    root.bimdata.Element = factory(root.bimdata.ApiClient, root.bimdata.Classification, root.bimdata.PropertySet);
  }
}(this, function(ApiClient, Classification, PropertySet) {
  'use strict';




  /**
   * The Element model module.
   * @module model/Element
   * @version 0.0.0
   */

  /**
   * Constructs a new <code>Element</code>.
   * @alias module:model/Element
   * @class
   * @param type {String} IFC type for the element
   */
  var exports = function(type) {
    var _this = this;



    _this['type'] = type;



  };

  /**
   * Constructs a <code>Element</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Element} obj Optional instance to populate.
   * @return {module:model/Element} The populated <code>Element</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('uuid')) {
        obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('attributes')) {
        obj['attributes'] = PropertySet.constructFromObject(data['attributes']);
      }
      if (data.hasOwnProperty('property_sets')) {
        obj['property_sets'] = ApiClient.convertToType(data['property_sets'], [PropertySet]);
      }
      if (data.hasOwnProperty('classifications')) {
        obj['classifications'] = ApiClient.convertToType(data['classifications'], [Classification]);
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} uuid
   */
  exports.prototype['uuid'] = undefined;
  /**
   * IFC type for the element
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {module:model/PropertySet} attributes
   */
  exports.prototype['attributes'] = undefined;
  /**
   * @member {Array.<module:model/PropertySet>} property_sets
   */
  exports.prototype['property_sets'] = undefined;
  /**
   * @member {Array.<module:model/Classification>} classifications
   */
  exports.prototype['classifications'] = undefined;



  return exports;
}));



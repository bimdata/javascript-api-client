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
    define(['ApiClient', 'model/Unit'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Unit'));
  } else {
    // Browser globals (root is window)
    if (!root.bimdata) {
      root.bimdata = {};
    }
    root.bimdata.PropertyDefinition = factory(root.bimdata.ApiClient, root.bimdata.Unit);
  }
}(this, function(ApiClient, Unit) {
  'use strict';




  /**
   * The PropertyDefinition model module.
   * @module model/PropertyDefinition
   * @version 1.0.25
   */

  /**
   * Constructs a new <code>PropertyDefinition</code>.
   * @alias module:model/PropertyDefinition
   * @class
   * @param name {String} 
   */
  var exports = function(name) {
    var _this = this;



    _this['name'] = name;



  };

  /**
   * Constructs a <code>PropertyDefinition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PropertyDefinition} obj Optional instance to populate.
   * @return {module:model/PropertyDefinition} The populated <code>PropertyDefinition</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('unit')) {
        obj['unit'] = Unit.constructFromObject(data['unit']);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('value_type')) {
        obj['value_type'] = ApiClient.convertToType(data['value_type'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {module:model/Unit} unit
   */
  exports.prototype['unit'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * IfcProperty*, Ifc*Properties, IfcComplexProperty, IfcQuantity*, IfcComplexQuantity, Attribute
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * Type of the corresponding value (Boolean, integer, float, string, IfcRange, ...)
   * @member {String} value_type
   */
  exports.prototype['value_type'] = undefined;



  return exports;
}));



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
 * Swagger Codegen version: 2.4.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Rule', 'model/Ruleset'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Rule'), require('./Ruleset'));
  } else {
    // Browser globals (root is window)
    if (!root.bimdata) {
      root.bimdata = {};
    }
    root.bimdata.Ruleset = factory(root.bimdata.ApiClient, root.bimdata.Rule, root.bimdata.Ruleset);
  }
}(this, function(ApiClient, Rule, Ruleset) {
  'use strict';




  /**
   * The Ruleset model module.
   * @module model/Ruleset
   * @version 0.0.0
   */

  /**
   * Constructs a new <code>Ruleset</code>.
   * @alias module:model/Ruleset
   * @class
   * @param name {String} 
   */
  var exports = function(name) {
    var _this = this;



    _this['name'] = name;



  };

  /**
   * Constructs a <code>Ruleset</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ruleset} obj Optional instance to populate.
   * @return {module:model/Ruleset} The populated <code>Ruleset</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('parent_ruleset_id')) {
        obj['parent_ruleset_id'] = ApiClient.convertToType(data['parent_ruleset_id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('rules')) {
        obj['rules'] = ApiClient.convertToType(data['rules'], [Rule]);
      }
      if (data.hasOwnProperty('rulesets')) {
        obj['rulesets'] = ApiClient.convertToType(data['rulesets'], [Ruleset]);
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} parent_ruleset_id
   */
  exports.prototype['parent_ruleset_id'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {Array.<module:model/Rule>} rules
   */
  exports.prototype['rules'] = undefined;
  /**
   * @member {Array.<module:model/Ruleset>} rulesets
   */
  exports.prototype['rulesets'] = undefined;



  return exports;
}));



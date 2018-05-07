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
 * Swagger Codegen version: unset
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Rule'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Rule'));
  } else {
    // Browser globals (root is window)
    if (!root.bimdata) {
      root.bimdata = {};
    }
    root.bimdata.Ruleset = factory(root.bimdata.ApiClient, root.bimdata.Rule);
  }
}(this, function(ApiClient, Rule) {
  'use strict';




  /**
   * The Ruleset model module.
   * @module model/Ruleset
   * @version 1.0.7
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
      if (data.hasOwnProperty('check_plan_id')) {
        obj['check_plan_id'] = ApiClient.convertToType(data['check_plan_id'], 'Number');
      }
      if (data.hasOwnProperty('parent_ruleset_id')) {
        obj['parent_ruleset_id'] = ApiClient.convertToType(data['parent_ruleset_id'], 'Number');
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
        obj['rulesets'] = ApiClient.convertToType(data['rulesets'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Number} check_plan_id
   */
  exports.prototype['check_plan_id'] = undefined;
  /**
   * @member {Number} parent_ruleset_id
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
   * @member {Array.<String>} rulesets
   */
  exports.prototype['rulesets'] = undefined;



  return exports;
}));



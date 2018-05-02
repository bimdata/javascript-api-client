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
    define(['ApiClient', 'model/RuleComponent'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RuleComponent'));
  } else {
    // Browser globals (root is window)
    if (!root.bimdata) {
      root.bimdata = {};
    }
    root.bimdata.Rule = factory(root.bimdata.ApiClient, root.bimdata.RuleComponent);
  }
}(this, function(ApiClient, RuleComponent) {
  'use strict';




  /**
   * The Rule model module.
   * @module model/Rule
   * @version 1.0.2
   */

  /**
   * Constructs a new <code>Rule</code>.
   * @alias module:model/Rule
   * @class
   * @param condition {String} 
   */
  var exports = function(condition) {
    var _this = this;




    _this['condition'] = condition;


  };

  /**
   * Constructs a <code>Rule</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Rule} obj Optional instance to populate.
   * @return {module:model/Rule} The populated <code>Rule</code> instance.
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
      if (data.hasOwnProperty('ruleset_id')) {
        obj['ruleset_id'] = ApiClient.convertToType(data['ruleset_id'], 'Number');
      }
      if (data.hasOwnProperty('condition')) {
        obj['condition'] = ApiClient.convertToType(data['condition'], 'String');
      }
      if (data.hasOwnProperty('rule_components')) {
        obj['rule_components'] = ApiClient.convertToType(data['rule_components'], [RuleComponent]);
      }
      if (data.hasOwnProperty('on')) {
        obj['on'] = ApiClient.convertToType(data['on'], 'String');
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
   * @member {Number} ruleset_id
   */
  exports.prototype['ruleset_id'] = undefined;
  /**
   * @member {String} condition
   */
  exports.prototype['condition'] = undefined;
  /**
   * @member {Array.<module:model/RuleComponent>} rule_components
   */
  exports.prototype['rule_components'] = undefined;
  /**
   * @member {String} on
   */
  exports.prototype['on'] = undefined;



  return exports;
}));



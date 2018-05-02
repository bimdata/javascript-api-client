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
    define(['ApiClient', 'model/RuleComponentResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RuleComponentResult'));
  } else {
    // Browser globals (root is window)
    if (!root.bimdata) {
      root.bimdata = {};
    }
    root.bimdata.RuleResult = factory(root.bimdata.ApiClient, root.bimdata.RuleComponentResult);
  }
}(this, function(ApiClient, RuleComponentResult) {
  'use strict';




  /**
   * The RuleResult model module.
   * @module model/RuleResult
   * @version 1.0.2
   */

  /**
   * Constructs a new <code>RuleResult</code>.
   * @alias module:model/RuleResult
   * @class
   * @param name {String} 
   * @param rulesetResult {Number} 
   * @param rulesetResultId {Number} 
   * @param rule {Number} 
   */
  var exports = function(name, rulesetResult, rulesetResultId, rule) {
    var _this = this;


    _this['name'] = name;
    _this['ruleset_result'] = rulesetResult;
    _this['ruleset_result_id'] = rulesetResultId;

    _this['rule'] = rule;



  };

  /**
   * Constructs a <code>RuleResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RuleResult} obj Optional instance to populate.
   * @return {module:model/RuleResult} The populated <code>RuleResult</code> instance.
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
      if (data.hasOwnProperty('ruleset_result')) {
        obj['ruleset_result'] = ApiClient.convertToType(data['ruleset_result'], 'Number');
      }
      if (data.hasOwnProperty('ruleset_result_id')) {
        obj['ruleset_result_id'] = ApiClient.convertToType(data['ruleset_result_id'], 'Number');
      }
      if (data.hasOwnProperty('components')) {
        obj['components'] = ApiClient.convertToType(data['components'], [RuleComponentResult]);
      }
      if (data.hasOwnProperty('rule')) {
        obj['rule'] = ApiClient.convertToType(data['rule'], 'Number');
      }
      if (data.hasOwnProperty('rule_id')) {
        obj['rule_id'] = ApiClient.convertToType(data['rule_id'], 'String');
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
   * @member {Number} ruleset_result
   */
  exports.prototype['ruleset_result'] = undefined;
  /**
   * @member {Number} ruleset_result_id
   */
  exports.prototype['ruleset_result_id'] = undefined;
  /**
   * @member {Array.<module:model/RuleComponentResult>} components
   */
  exports.prototype['components'] = undefined;
  /**
   * @member {Number} rule
   */
  exports.prototype['rule'] = undefined;
  /**
   * @member {String} rule_id
   */
  exports.prototype['rule_id'] = undefined;
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



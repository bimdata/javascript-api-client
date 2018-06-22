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
    root.bimdata.ProjectRole = factory(root.bimdata.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ProjectRole model module.
   * @module model/ProjectRole
   * @version 0.0.0
   */

  /**
   * Constructs a new <code>ProjectRole</code>.
   * @alias module:model/ProjectRole
   * @class
   * @param project {Number} 
   */
  var exports = function(project) {
    var _this = this;

    _this['project'] = project;

  };

  /**
   * Constructs a <code>ProjectRole</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProjectRole} obj Optional instance to populate.
   * @return {module:model/ProjectRole} The populated <code>ProjectRole</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('project')) {
        obj['project'] = ApiClient.convertToType(data['project'], 'Number');
      }
      if (data.hasOwnProperty('role')) {
        obj['role'] = ApiClient.convertToType(data['role'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} project
   */
  exports.prototype['project'] = undefined;
  /**
   * @member {Number} role
   */
  exports.prototype['role'] = undefined;



  return exports;
}));



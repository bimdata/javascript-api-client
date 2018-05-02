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
    define(['ApiClient', 'model/Cloud', 'model/FosUser', 'model/FosUserWrite'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Cloud'), require('../model/FosUser'), require('../model/FosUserWrite'));
  } else {
    // Browser globals (root is window)
    if (!root.bimdata) {
      root.bimdata = {};
    }
    root.bimdata.CloudApi = factory(root.bimdata.ApiClient, root.bimdata.Cloud, root.bimdata.FosUser, root.bimdata.FosUserWrite);
  }
}(this, function(ApiClient, Cloud, FosUser, FosUserWrite) {
  'use strict';

  /**
   * Cloud service.
   * @module api/CloudApi
   * @version 1.0.2
   */

  /**
   * Constructs a new CloudApi. 
   * @alias module:api/CloudApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createCloudUser operation.
     * @callback module:api/CloudApi~createCloudUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FosUserWrite} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {String} cloudPk 
     * @param {module:model/FosUserWrite} data 
     * @param {module:api/CloudApi~createCloudUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FosUserWrite}
     */
    this.createCloudUser = function(cloudPk, data, callback) {
      var postBody = data;

      // verify the required parameter 'cloudPk' is set
      if (cloudPk === undefined || cloudPk === null) {
        throw new Error("Missing the required parameter 'cloudPk' when calling createCloudUser");
      }

      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling createCloudUser");
      }


      var pathParams = {
        'cloud_pk': cloudPk
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = FosUserWrite;

      return this.apiClient.callApi(
        '/cloud/{cloud_pk}/user', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCloudUser operation.
     * @callback module:api/CloudApi~deleteCloudUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {String} cloudPk 
     * @param {String} id 
     * @param {module:api/CloudApi~deleteCloudUserCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteCloudUser = function(cloudPk, id, callback) {
      var postBody = null;

      // verify the required parameter 'cloudPk' is set
      if (cloudPk === undefined || cloudPk === null) {
        throw new Error("Missing the required parameter 'cloudPk' when calling deleteCloudUser");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteCloudUser");
      }


      var pathParams = {
        'cloud_pk': cloudPk,
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/cloud/{cloud_pk}/user/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the fullUpdateCloudUser operation.
     * @callback module:api/CloudApi~fullUpdateCloudUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FosUserWrite} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {String} cloudPk 
     * @param {String} id 
     * @param {module:model/FosUserWrite} data 
     * @param {module:api/CloudApi~fullUpdateCloudUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FosUserWrite}
     */
    this.fullUpdateCloudUser = function(cloudPk, id, data, callback) {
      var postBody = data;

      // verify the required parameter 'cloudPk' is set
      if (cloudPk === undefined || cloudPk === null) {
        throw new Error("Missing the required parameter 'cloudPk' when calling fullUpdateCloudUser");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling fullUpdateCloudUser");
      }

      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling fullUpdateCloudUser");
      }


      var pathParams = {
        'cloud_pk': cloudPk,
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = FosUserWrite;

      return this.apiClient.callApi(
        '/cloud/{cloud_pk}/user/{id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCloud operation.
     * @callback module:api/CloudApi~getCloudCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Cloud} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns user and his cloud role
     * @param {String} id 
     * @param {module:api/CloudApi~getCloudCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Cloud}
     */
    this.getCloud = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getCloud");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Cloud;

      return this.apiClient.callApi(
        '/cloud/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCloudSize operation.
     * @callback module:api/CloudApi~getCloudSizeCallback
     * @param {String} error Error message, if any.
     * @param {'Number'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the size of the cloud in Bytes
     * @param {String} id 
     * @param {module:api/CloudApi~getCloudSizeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Number'}
     */
    this.getCloudSize = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getCloudSize");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = 'Number';

      return this.apiClient.callApi(
        '/cloud/{id}/size', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCloudUser operation.
     * @callback module:api/CloudApi~getCloudUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FosUser} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {String} cloudPk 
     * @param {String} id 
     * @param {module:api/CloudApi~getCloudUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FosUser}
     */
    this.getCloudUser = function(cloudPk, id, callback) {
      var postBody = null;

      // verify the required parameter 'cloudPk' is set
      if (cloudPk === undefined || cloudPk === null) {
        throw new Error("Missing the required parameter 'cloudPk' when calling getCloudUser");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getCloudUser");
      }


      var pathParams = {
        'cloud_pk': cloudPk,
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = FosUser;

      return this.apiClient.callApi(
        '/cloud/{cloud_pk}/user/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCloudUsers operation.
     * @callback module:api/CloudApi~getCloudUsersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/FosUser>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {String} cloudPk 
     * @param {module:api/CloudApi~getCloudUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/FosUser>}
     */
    this.getCloudUsers = function(cloudPk, callback) {
      var postBody = null;

      // verify the required parameter 'cloudPk' is set
      if (cloudPk === undefined || cloudPk === null) {
        throw new Error("Missing the required parameter 'cloudPk' when calling getCloudUsers");
      }


      var pathParams = {
        'cloud_pk': cloudPk
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [FosUser];

      return this.apiClient.callApi(
        '/cloud/{cloud_pk}/user', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getClouds operation.
     * @callback module:api/CloudApi~getCloudsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Cloud>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns user&#39;s cloud only
     * @param {module:api/CloudApi~getCloudsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Cloud>}
     */
    this.getClouds = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [Cloud];

      return this.apiClient.callApi(
        '/cloud', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCloudUser operation.
     * @callback module:api/CloudApi~updateCloudUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FosUserWrite} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {String} cloudPk 
     * @param {String} id 
     * @param {module:model/FosUserWrite} data 
     * @param {module:api/CloudApi~updateCloudUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FosUserWrite}
     */
    this.updateCloudUser = function(cloudPk, id, data, callback) {
      var postBody = data;

      // verify the required parameter 'cloudPk' is set
      if (cloudPk === undefined || cloudPk === null) {
        throw new Error("Missing the required parameter 'cloudPk' when calling updateCloudUser");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateCloudUser");
      }

      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling updateCloudUser");
      }


      var pathParams = {
        'cloud_pk': cloudPk,
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = FosUserWrite;

      return this.apiClient.callApi(
        '/cloud/{cloud_pk}/user/{id}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));

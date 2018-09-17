/**
 * BIMData API
 * BIMData API documentation
 *
 * OpenAPI spec version: v1
 * Contact: contact@bimdata.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 3.2.2
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Cloud', 'model/InviteUser', 'model/Project', 'model/User'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Cloud'), require('../model/InviteUser'), require('../model/Project'), require('../model/User'));
  } else {
    // Browser globals (root is window)
    if (!root.bimdata) {
      root.bimdata = {};
    }
    root.bimdata.CloudApi = factory(root.bimdata.ApiClient, root.bimdata.Cloud, root.bimdata.InviteUser, root.bimdata.Project, root.bimdata.User);
  }
}(this, function(ApiClient, Cloud, InviteUser, Project, User) {
  'use strict';

  /**
   * Cloud service.
   * @module api/CloudApi
   * @version 0.0.0
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
     * @param {module:model/Cloud} cloud 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Cloud} and HTTP response
     */
    this.createCloudWithHttpInfo = function(cloud) {
      var postBody = cloud;

      // verify the required parameter 'cloud' is set
      if (cloud === undefined || cloud === null) {
        throw new Error("Missing the required parameter 'cloud' when calling createCloud");
      }


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
      var returnType = Cloud;

      return this.apiClient.callApi(
        '/cloud', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * @param {module:model/Cloud} cloud 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Cloud}
     */
    this.createCloud = function(cloud) {
      return this.createCloudWithHttpInfo(cloud)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {String} cloudPk 
     * @param {module:model/InviteUser} inviteUser 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InviteUser} and HTTP response
     */
    this.createCloudUserWithHttpInfo = function(cloudPk, inviteUser) {
      var postBody = inviteUser;

      // verify the required parameter 'cloudPk' is set
      if (cloudPk === undefined || cloudPk === null) {
        throw new Error("Missing the required parameter 'cloudPk' when calling createCloudUser");
      }

      // verify the required parameter 'inviteUser' is set
      if (inviteUser === undefined || inviteUser === null) {
        throw new Error("Missing the required parameter 'inviteUser' when calling createCloudUser");
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
      var returnType = InviteUser;

      return this.apiClient.callApi(
        '/cloud/{cloud_pk}/user', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * @param {String} cloudPk 
     * @param {module:model/InviteUser} inviteUser 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InviteUser}
     */
    this.createCloudUser = function(cloudPk, inviteUser) {
      return this.createCloudUserWithHttpInfo(cloudPk, inviteUser)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a demo project with a pre-populated IFC and its data
     * @param {String} id 
     * @param {module:model/Cloud} cloud 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Project} and HTTP response
     */
    this.createDemoWithHttpInfo = function(id, cloud) {
      var postBody = cloud;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling createDemo");
      }

      // verify the required parameter 'cloud' is set
      if (cloud === undefined || cloud === null) {
        throw new Error("Missing the required parameter 'cloud' when calling createDemo");
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
      var returnType = Project;

      return this.apiClient.callApi(
        '/cloud/{id}/create-demo', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a demo project with a pre-populated IFC and its data
     * @param {String} id 
     * @param {module:model/Cloud} cloud 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Project}
     */
    this.createDemo = function(id, cloud) {
      return this.createDemoWithHttpInfo(id, cloud)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {String} cloudPk 
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteCloudUserWithHttpInfo = function(cloudPk, id) {
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
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/cloud/{cloud_pk}/user/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * @param {String} cloudPk 
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteCloudUser = function(cloudPk, id) {
      return this.deleteCloudUserWithHttpInfo(cloudPk, id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {String} id 
     * @param {module:model/Cloud} cloud 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Cloud} and HTTP response
     */
    this.fullUpdateCloudWithHttpInfo = function(id, cloud) {
      var postBody = cloud;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling fullUpdateCloud");
      }

      // verify the required parameter 'cloud' is set
      if (cloud === undefined || cloud === null) {
        throw new Error("Missing the required parameter 'cloud' when calling fullUpdateCloud");
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
        '/cloud/{id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * @param {String} id 
     * @param {module:model/Cloud} cloud 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Cloud}
     */
    this.fullUpdateCloud = function(id, cloud) {
      return this.fullUpdateCloudWithHttpInfo(id, cloud)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {String} cloudPk 
     * @param {String} id 
     * @param {module:model/InviteUser} inviteUser 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InviteUser} and HTTP response
     */
    this.fullUpdateCloudUserWithHttpInfo = function(cloudPk, id, inviteUser) {
      var postBody = inviteUser;

      // verify the required parameter 'cloudPk' is set
      if (cloudPk === undefined || cloudPk === null) {
        throw new Error("Missing the required parameter 'cloudPk' when calling fullUpdateCloudUser");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling fullUpdateCloudUser");
      }

      // verify the required parameter 'inviteUser' is set
      if (inviteUser === undefined || inviteUser === null) {
        throw new Error("Missing the required parameter 'inviteUser' when calling fullUpdateCloudUser");
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
      var returnType = InviteUser;

      return this.apiClient.callApi(
        '/cloud/{cloud_pk}/user/{id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * @param {String} cloudPk 
     * @param {String} id 
     * @param {module:model/InviteUser} inviteUser 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InviteUser}
     */
    this.fullUpdateCloudUser = function(cloudPk, id, inviteUser) {
      return this.fullUpdateCloudUserWithHttpInfo(cloudPk, id, inviteUser)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Cloud} and HTTP response
     */
    this.getCloudWithHttpInfo = function(id) {
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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Cloud;

      return this.apiClient.callApi(
        '/cloud/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Cloud}
     */
    this.getCloud = function(id) {
      return this.getCloudWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns the size of the cloud in Bytes
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Number} and HTTP response
     */
    this.getCloudSizeWithHttpInfo = function(id) {
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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = 'Number';

      return this.apiClient.callApi(
        '/cloud/{id}/size', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Returns the size of the cloud in Bytes
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Number}
     */
    this.getCloudSize = function(id) {
      return this.getCloudSizeWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {String} cloudPk 
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/User} and HTTP response
     */
    this.getCloudUserWithHttpInfo = function(cloudPk, id) {
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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = User;

      return this.apiClient.callApi(
        '/cloud/{cloud_pk}/user/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * @param {String} cloudPk 
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/User}
     */
    this.getCloudUser = function(cloudPk, id) {
      return this.getCloudUserWithHttpInfo(cloudPk, id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {String} cloudPk 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/User>} and HTTP response
     */
    this.getCloudUsersWithHttpInfo = function(cloudPk) {
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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [User];

      return this.apiClient.callApi(
        '/cloud/{cloud_pk}/user', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * @param {String} cloudPk 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/User>}
     */
    this.getCloudUsers = function(cloudPk) {
      return this.getCloudUsersWithHttpInfo(cloudPk)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns user&#39;s cloud only
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Cloud>} and HTTP response
     */
    this.getCloudsWithHttpInfo = function() {
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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [Cloud];

      return this.apiClient.callApi(
        '/cloud', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Returns user&#39;s cloud only
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Cloud>}
     */
    this.getClouds = function() {
      return this.getCloudsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {String} id 
     * @param {module:model/Cloud} cloud 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Cloud} and HTTP response
     */
    this.updateCloudWithHttpInfo = function(id, cloud) {
      var postBody = cloud;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateCloud");
      }

      // verify the required parameter 'cloud' is set
      if (cloud === undefined || cloud === null) {
        throw new Error("Missing the required parameter 'cloud' when calling updateCloud");
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
        '/cloud/{id}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * @param {String} id 
     * @param {module:model/Cloud} cloud 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Cloud}
     */
    this.updateCloud = function(id, cloud) {
      return this.updateCloudWithHttpInfo(id, cloud)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {String} cloudPk 
     * @param {String} id 
     * @param {module:model/InviteUser} inviteUser 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InviteUser} and HTTP response
     */
    this.updateCloudUserWithHttpInfo = function(cloudPk, id, inviteUser) {
      var postBody = inviteUser;

      // verify the required parameter 'cloudPk' is set
      if (cloudPk === undefined || cloudPk === null) {
        throw new Error("Missing the required parameter 'cloudPk' when calling updateCloudUser");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateCloudUser");
      }

      // verify the required parameter 'inviteUser' is set
      if (inviteUser === undefined || inviteUser === null) {
        throw new Error("Missing the required parameter 'inviteUser' when calling updateCloudUser");
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
      var returnType = InviteUser;

      return this.apiClient.callApi(
        '/cloud/{cloud_pk}/user/{id}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * @param {String} cloudPk 
     * @param {String} id 
     * @param {module:model/InviteUser} inviteUser 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InviteUser}
     */
    this.updateCloudUser = function(cloudPk, id, inviteUser) {
      return this.updateCloudUserWithHttpInfo(cloudPk, id, inviteUser)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));

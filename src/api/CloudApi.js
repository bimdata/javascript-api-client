/**
 * BIMData API
 * BIMData API is a tool to interact with your models stored on BIMData’s servers.     Through the API, you can manage your projects, the clouds, upload your IFC files and manage them through endpoints.
 *
 * OpenAPI spec version: v1
 * Contact: contact@bimdata.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 3.3.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Cloud', 'model/CloudInvitation', 'model/Project', 'model/User', 'model/UserCloudUpdate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Cloud'), require('../model/CloudInvitation'), require('../model/Project'), require('../model/User'), require('../model/UserCloudUpdate'));
  } else {
    // Browser globals (root is window)
    if (!root.bimdata) {
      root.bimdata = {};
    }
    root.bimdata.CloudApi = factory(root.bimdata.ApiClient, root.bimdata.Cloud, root.bimdata.CloudInvitation, root.bimdata.Project, root.bimdata.User, root.bimdata.UserCloudUpdate);
  }
}(this, function(ApiClient, Cloud, CloudInvitation, Project, User, UserCloudUpdate) {
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
     * Cancel a pending invitation
     * Cancel a pending invitation Required scopes: org:manage
     * @param {String} cloudPk 
     * @param {Number} id A unique integer value identifying this invitation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.cancelCloudUserInvitationWithHttpInfo = function(cloudPk, id) {
      var postBody = null;

      // verify the required parameter 'cloudPk' is set
      if (cloudPk === undefined || cloudPk === null) {
        throw new Error("Missing the required parameter 'cloudPk' when calling cancelCloudUserInvitation");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling cancelCloudUserInvitation");
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
        '/cloud/{cloud_pk}/invitation/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Cancel a pending invitation
     * Cancel a pending invitation Required scopes: org:manage
     * @param {String} cloudPk 
     * @param {Number} id A unique integer value identifying this invitation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.cancelCloudUserInvitation = function(cloudPk, id) {
      return this.cancelCloudUserInvitationWithHttpInfo(cloudPk, id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a cloud
     *  Required scopes: cloud:manage
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
     * Create a cloud
     *  Required scopes: cloud:manage
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
     * Create a Demo project in a cloud
     * Create a demo project with a pre-populated IFC and its data Required scopes: cloud:manage
     * @param {Number} id A unique integer value identifying this cloud.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Project} and HTTP response
     */
    this.createDemoWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling createDemo");
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
      var returnType = Project;

      return this.apiClient.callApi(
        '/cloud/{id}/create-demo', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a Demo project in a cloud
     * Create a demo project with a pre-populated IFC and its data Required scopes: cloud:manage
     * @param {Number} id A unique integer value identifying this cloud.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Project}
     */
    this.createDemo = function(id) {
      return this.createDemoWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a cloud
     *  Required scopes: cloud:manage
     * @param {Number} id A unique integer value identifying this cloud.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteCloudWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteCloud");
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
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/cloud/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a cloud
     *  Required scopes: cloud:manage
     * @param {Number} id A unique integer value identifying this cloud.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteCloud = function(id) {
      return this.deleteCloudWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Remove a user from a cloud
     * The user will also be removed from all the projects of the cloud Required scopes: cloud:manage
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
     * Remove a user from a cloud
     * The user will also be removed from all the projects of the cloud Required scopes: cloud:manage
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
     * Update all fields of a cloud
     *  Required scopes: cloud:manage
     * @param {Number} id A unique integer value identifying this cloud.
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
     * Update all fields of a cloud
     *  Required scopes: cloud:manage
     * @param {Number} id A unique integer value identifying this cloud.
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
     * Update all fields of a cloud user
     * Change the user role in the cloud Required scopes: cloud:manage
     * @param {String} cloudPk 
     * @param {String} id 
     * @param {module:model/UserCloudUpdate} userCloudUpdate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/User} and HTTP response
     */
    this.fullUpdateCloudUserWithHttpInfo = function(cloudPk, id, userCloudUpdate) {
      var postBody = userCloudUpdate;

      // verify the required parameter 'cloudPk' is set
      if (cloudPk === undefined || cloudPk === null) {
        throw new Error("Missing the required parameter 'cloudPk' when calling fullUpdateCloudUser");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling fullUpdateCloudUser");
      }

      // verify the required parameter 'userCloudUpdate' is set
      if (userCloudUpdate === undefined || userCloudUpdate === null) {
        throw new Error("Missing the required parameter 'userCloudUpdate' when calling fullUpdateCloudUser");
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
      var returnType = User;

      return this.apiClient.callApi(
        '/cloud/{cloud_pk}/user/{id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update all fields of a cloud user
     * Change the user role in the cloud Required scopes: cloud:manage
     * @param {String} cloudPk 
     * @param {String} id 
     * @param {module:model/UserCloudUpdate} userCloudUpdate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/User}
     */
    this.fullUpdateCloudUser = function(cloudPk, id, userCloudUpdate) {
      return this.fullUpdateCloudUserWithHttpInfo(cloudPk, id, userCloudUpdate)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve one cloud
     * @param {Number} id A unique integer value identifying this cloud.
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
     * Retrieve one cloud
     * @param {Number} id A unique integer value identifying this cloud.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Cloud}
     */
    this.getCloud = function(id) {
      return this.getCloudWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve all pending invitations in the cloud
     * Returns app&#39;s invitations only Required scopes: org:manage
     * @param {String} cloudPk 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/CloudInvitation>} and HTTP response
     */
    this.getCloudInvitationsWithHttpInfo = function(cloudPk) {
      var postBody = null;

      // verify the required parameter 'cloudPk' is set
      if (cloudPk === undefined || cloudPk === null) {
        throw new Error("Missing the required parameter 'cloudPk' when calling getCloudInvitations");
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
      var returnType = [CloudInvitation];

      return this.apiClient.callApi(
        '/cloud/{cloud_pk}/invitation', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Retrieve all pending invitations in the cloud
     * Returns app&#39;s invitations only Required scopes: org:manage
     * @param {String} cloudPk 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/CloudInvitation>}
     */
    this.getCloudInvitations = function(cloudPk) {
      return this.getCloudInvitationsWithHttpInfo(cloudPk)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get size of all files in the cloud
     * Returns the size of the cloud in Bytes
     * @param {Number} id A unique integer value identifying this cloud.
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
     * Get size of all files in the cloud
     * Returns the size of the cloud in Bytes
     * @param {Number} id A unique integer value identifying this cloud.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Number}
     */
    this.getCloudSize = function(id) {
      return this.getCloudSizeWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve a user in a cloud
     * Only administrators can see a cloud member Required scopes: cloud:read
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
     * Retrieve a user in a cloud
     * Only administrators can see a cloud member Required scopes: cloud:read
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
     * Retrieve all users in a cloud
     * Only administrators can see all cloud members Required scopes: cloud:read
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
     * Retrieve all users in a cloud
     * Only administrators can see all cloud members Required scopes: cloud:read
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
     * Retrieve all clouds
     * Returns user&#39;s (or app&#39;s) clouds only
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
     * Retrieve all clouds
     * Returns user&#39;s (or app&#39;s) clouds only
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Cloud>}
     */
    this.getClouds = function() {
      return this.getCloudsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Invite a cloud administrator
     * Invite cloud administrators only. To invite in a project, see inviteProjectUser. You can&#39;t invite a user already in the cloud. Create multiple invitations of the same email in the same cloud will generate multiple invitation emails but not multiple invitation object Required scopes: org:manage
     * @param {String} cloudPk 
     * @param {module:model/CloudInvitation} cloudInvitation 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CloudInvitation} and HTTP response
     */
    this.inviteCloudUserWithHttpInfo = function(cloudPk, cloudInvitation) {
      var postBody = cloudInvitation;

      // verify the required parameter 'cloudPk' is set
      if (cloudPk === undefined || cloudPk === null) {
        throw new Error("Missing the required parameter 'cloudPk' when calling inviteCloudUser");
      }

      // verify the required parameter 'cloudInvitation' is set
      if (cloudInvitation === undefined || cloudInvitation === null) {
        throw new Error("Missing the required parameter 'cloudInvitation' when calling inviteCloudUser");
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
      var returnType = CloudInvitation;

      return this.apiClient.callApi(
        '/cloud/{cloud_pk}/invitation', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Invite a cloud administrator
     * Invite cloud administrators only. To invite in a project, see inviteProjectUser. You can&#39;t invite a user already in the cloud. Create multiple invitations of the same email in the same cloud will generate multiple invitation emails but not multiple invitation object Required scopes: org:manage
     * @param {String} cloudPk 
     * @param {module:model/CloudInvitation} cloudInvitation 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CloudInvitation}
     */
    this.inviteCloudUser = function(cloudPk, cloudInvitation) {
      return this.inviteCloudUserWithHttpInfo(cloudPk, cloudInvitation)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update some fields of a cloud
     * Update some fields of a cloud Required scopes: cloud:manage
     * @param {Number} id A unique integer value identifying this cloud.
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
     * Update some fields of a cloud
     * Update some fields of a cloud Required scopes: cloud:manage
     * @param {Number} id A unique integer value identifying this cloud.
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
     * Update some fields of a cloud user
     * Change the user role in the cloud Required scopes: cloud:manage
     * @param {String} cloudPk 
     * @param {String} id 
     * @param {module:model/UserCloudUpdate} userCloudUpdate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/User} and HTTP response
     */
    this.updateCloudUserWithHttpInfo = function(cloudPk, id, userCloudUpdate) {
      var postBody = userCloudUpdate;

      // verify the required parameter 'cloudPk' is set
      if (cloudPk === undefined || cloudPk === null) {
        throw new Error("Missing the required parameter 'cloudPk' when calling updateCloudUser");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateCloudUser");
      }

      // verify the required parameter 'userCloudUpdate' is set
      if (userCloudUpdate === undefined || userCloudUpdate === null) {
        throw new Error("Missing the required parameter 'userCloudUpdate' when calling updateCloudUser");
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
      var returnType = User;

      return this.apiClient.callApi(
        '/cloud/{cloud_pk}/user/{id}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update some fields of a cloud user
     * Change the user role in the cloud Required scopes: cloud:manage
     * @param {String} cloudPk 
     * @param {String} id 
     * @param {module:model/UserCloudUpdate} userCloudUpdate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/User}
     */
    this.updateCloudUser = function(cloudPk, id, userCloudUpdate) {
      return this.updateCloudUserWithHttpInfo(cloudPk, id, userCloudUpdate)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));

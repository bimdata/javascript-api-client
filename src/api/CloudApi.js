/**
 * BIMData API
 * BIMData API is a tool to interact with your models stored on BIMData’s servers.     Through the API, you can manage your projects, the clouds, upload your IFC files and manage them through endpoints.
 *
 * The version of the OpenAPI document: v1
 * Contact: contact@bimdata.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Cloud from '../model/Cloud';
import CloudInvitation from '../model/CloudInvitation';
import Project from '../model/Project';
import User from '../model/User';
import UserCloudUpdate from '../model/UserCloudUpdate';

/**
* Cloud service.
* @module api/CloudApi
* @version v1
*/
export default class CloudApi {

    /**
    * Constructs a new CloudApi. 
    * @alias module:api/CloudApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the cancelCloudUserInvitation operation.
     * @callback module:api/CloudApi~cancelCloudUserInvitationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancel a pending invitation
     * Cancel a pending invitation Required scopes: org:manage
     * @param {String} cloudPk 
     * @param {Number} id A unique integer value identifying this invitation.
     * @param {module:api/CloudApi~cancelCloudUserInvitationCallback} callback The callback function, accepting three arguments: error, data, response
     */
    cancelCloudUserInvitation(cloudPk, id, callback) {
      let postBody = null;
      // verify the required parameter 'cloudPk' is set
      if (cloudPk === undefined || cloudPk === null) {
        throw new Error("Missing the required parameter 'cloudPk' when calling cancelCloudUserInvitation");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling cancelCloudUserInvitation");
      }

      let pathParams = {
        'cloud_pk': cloudPk,
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BIMDataConnect', 'Bearer', 'client_credentials'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/cloud/{cloud_pk}/invitation/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createCloud operation.
     * @callback module:api/CloudApi~createCloudCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Cloud} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a cloud
     *  Required scopes: cloud:manage
     * @param {module:model/Cloud} data 
     * @param {module:api/CloudApi~createCloudCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Cloud}
     */
    createCloud(data, callback) {
      let postBody = data;
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling createCloud");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BIMDataConnect', 'Bearer', 'client_credentials'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Cloud;
      return this.apiClient.callApi(
        '/cloud', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createDemo operation.
     * @callback module:api/CloudApi~createDemoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Project} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Demo project in a cloud
     * Create a demo project with a pre-populated IFC and its data Required scopes: cloud:manage
     * @param {Number} id A unique integer value identifying this cloud.
     * @param {module:api/CloudApi~createDemoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Project}
     */
    createDemo(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling createDemo");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BIMDataConnect', 'Bearer', 'client_credentials'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Project;
      return this.apiClient.callApi(
        '/cloud/{id}/create-demo', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCloud operation.
     * @callback module:api/CloudApi~deleteCloudCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a cloud
     *  Required scopes: cloud:manage
     * @param {Number} id A unique integer value identifying this cloud.
     * @param {module:api/CloudApi~deleteCloudCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteCloud(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteCloud");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BIMDataConnect', 'Bearer', 'client_credentials'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/cloud/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
     * Remove a user from a cloud
     * The user will also be removed from all the projects of the cloud Required scopes: cloud:manage
     * @param {String} cloudPk 
     * @param {Number} id A unique integer value identifying this fos user.
     * @param {module:api/CloudApi~deleteCloudUserCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteCloudUser(cloudPk, id, callback) {
      let postBody = null;
      // verify the required parameter 'cloudPk' is set
      if (cloudPk === undefined || cloudPk === null) {
        throw new Error("Missing the required parameter 'cloudPk' when calling deleteCloudUser");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteCloudUser");
      }

      let pathParams = {
        'cloud_pk': cloudPk,
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BIMDataConnect', 'Bearer', 'client_credentials'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/cloud/{cloud_pk}/user/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the fullUpdateCloud operation.
     * @callback module:api/CloudApi~fullUpdateCloudCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Cloud} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update all fields of a cloud
     *  Required scopes: cloud:manage
     * @param {Number} id A unique integer value identifying this cloud.
     * @param {module:model/Cloud} data 
     * @param {module:api/CloudApi~fullUpdateCloudCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Cloud}
     */
    fullUpdateCloud(id, data, callback) {
      let postBody = data;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling fullUpdateCloud");
      }
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling fullUpdateCloud");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BIMDataConnect', 'Bearer', 'client_credentials'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Cloud;
      return this.apiClient.callApi(
        '/cloud/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the fullUpdateCloudUser operation.
     * @callback module:api/CloudApi~fullUpdateCloudUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update all fields of a cloud user
     * Change the user role in the cloud Required scopes: cloud:manage
     * @param {String} cloudPk 
     * @param {Number} id A unique integer value identifying this fos user.
     * @param {module:model/UserCloudUpdate} data 
     * @param {module:api/CloudApi~fullUpdateCloudUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */
    fullUpdateCloudUser(cloudPk, id, data, callback) {
      let postBody = data;
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

      let pathParams = {
        'cloud_pk': cloudPk,
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BIMDataConnect', 'Bearer', 'client_credentials'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = User;
      return this.apiClient.callApi(
        '/cloud/{cloud_pk}/user/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
     * Retrieve one cloud
     * @param {Number} id A unique integer value identifying this cloud.
     * @param {module:api/CloudApi~getCloudCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Cloud}
     */
    getCloud(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getCloud");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BIMDataConnect', 'Bearer', 'client_credentials'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Cloud;
      return this.apiClient.callApi(
        '/cloud/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCloudInvitations operation.
     * @callback module:api/CloudApi~getCloudInvitationsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CloudInvitation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve all pending invitations in the cloud
     * Returns app's invitations only Required scopes: org:manage
     * @param {String} cloudPk 
     * @param {module:api/CloudApi~getCloudInvitationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/CloudInvitation>}
     */
    getCloudInvitations(cloudPk, callback) {
      let postBody = null;
      // verify the required parameter 'cloudPk' is set
      if (cloudPk === undefined || cloudPk === null) {
        throw new Error("Missing the required parameter 'cloudPk' when calling getCloudInvitations");
      }

      let pathParams = {
        'cloud_pk': cloudPk
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BIMDataConnect', 'Bearer', 'client_credentials'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [CloudInvitation];
      return this.apiClient.callApi(
        '/cloud/{cloud_pk}/invitation', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCloudSize operation.
     * @callback module:api/CloudApi~getCloudSizeCallback
     * @param {String} error Error message, if any.
     * @param {Number} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get size of all files in the cloud
     * Returns the size of the cloud in Bytes
     * @param {Number} id A unique integer value identifying this cloud.
     * @param {module:api/CloudApi~getCloudSizeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Number}
     */
    getCloudSize(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getCloudSize");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BIMDataConnect', 'Bearer', 'client_credentials'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = 'Number';
      return this.apiClient.callApi(
        '/cloud/{id}/size', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCloudUser operation.
     * @callback module:api/CloudApi~getCloudUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a user in a cloud
     * Only administrators can see a cloud member Required scopes: cloud:read
     * @param {String} cloudPk 
     * @param {Number} id A unique integer value identifying this fos user.
     * @param {module:api/CloudApi~getCloudUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */
    getCloudUser(cloudPk, id, callback) {
      let postBody = null;
      // verify the required parameter 'cloudPk' is set
      if (cloudPk === undefined || cloudPk === null) {
        throw new Error("Missing the required parameter 'cloudPk' when calling getCloudUser");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getCloudUser");
      }

      let pathParams = {
        'cloud_pk': cloudPk,
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BIMDataConnect', 'Bearer', 'client_credentials'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = User;
      return this.apiClient.callApi(
        '/cloud/{cloud_pk}/user/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCloudUsers operation.
     * @callback module:api/CloudApi~getCloudUsersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/User>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve all users in a cloud
     * Only administrators can see all cloud members Required scopes: cloud:read
     * @param {String} cloudPk 
     * @param {module:api/CloudApi~getCloudUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/User>}
     */
    getCloudUsers(cloudPk, callback) {
      let postBody = null;
      // verify the required parameter 'cloudPk' is set
      if (cloudPk === undefined || cloudPk === null) {
        throw new Error("Missing the required parameter 'cloudPk' when calling getCloudUsers");
      }

      let pathParams = {
        'cloud_pk': cloudPk
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BIMDataConnect', 'Bearer', 'client_credentials'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [User];
      return this.apiClient.callApi(
        '/cloud/{cloud_pk}/user', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
     * Retrieve all clouds
     * Returns user's (or app's) clouds only
     * @param {module:api/CloudApi~getCloudsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Cloud>}
     */
    getClouds(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BIMDataConnect', 'Bearer', 'client_credentials'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Cloud];
      return this.apiClient.callApi(
        '/cloud', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the inviteCloudUser operation.
     * @callback module:api/CloudApi~inviteCloudUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CloudInvitation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Invite a cloud administrator
     * Invite cloud administrators only. To invite in a project, see inviteProjectUser. You can't invite a user already in the cloud. Create multiple invitations of the same email in the same cloud will generate multiple invitation emails but not multiple invitation object Required scopes: org:manage
     * @param {String} cloudPk 
     * @param {module:model/CloudInvitation} data 
     * @param {module:api/CloudApi~inviteCloudUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CloudInvitation}
     */
    inviteCloudUser(cloudPk, data, callback) {
      let postBody = data;
      // verify the required parameter 'cloudPk' is set
      if (cloudPk === undefined || cloudPk === null) {
        throw new Error("Missing the required parameter 'cloudPk' when calling inviteCloudUser");
      }
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling inviteCloudUser");
      }

      let pathParams = {
        'cloud_pk': cloudPk
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BIMDataConnect', 'Bearer', 'client_credentials'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = CloudInvitation;
      return this.apiClient.callApi(
        '/cloud/{cloud_pk}/invitation', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCloud operation.
     * @callback module:api/CloudApi~updateCloudCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Cloud} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update some fields of a cloud
     * Update some fields of a cloud Required scopes: cloud:manage
     * @param {Number} id A unique integer value identifying this cloud.
     * @param {module:model/Cloud} data 
     * @param {module:api/CloudApi~updateCloudCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Cloud}
     */
    updateCloud(id, data, callback) {
      let postBody = data;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateCloud");
      }
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling updateCloud");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BIMDataConnect', 'Bearer', 'client_credentials'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Cloud;
      return this.apiClient.callApi(
        '/cloud/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCloudUser operation.
     * @callback module:api/CloudApi~updateCloudUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update some fields of a cloud user
     * Change the user role in the cloud Required scopes: cloud:manage
     * @param {String} cloudPk 
     * @param {Number} id A unique integer value identifying this fos user.
     * @param {module:model/UserCloudUpdate} data 
     * @param {module:api/CloudApi~updateCloudUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */
    updateCloudUser(cloudPk, id, data, callback) {
      let postBody = data;
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

      let pathParams = {
        'cloud_pk': cloudPk,
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BIMDataConnect', 'Bearer', 'client_credentials'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = User;
      return this.apiClient.callApi(
        '/cloud/{cloud_pk}/user/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}

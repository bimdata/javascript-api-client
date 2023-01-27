/**
 * BIMData API
 * BIMData API is a tool to interact with your models stored on BIMData’s servers.     Through the API, you can manage your projects, the clouds, upload your IFC files and manage them through endpoints.
 *
 * The version of the OpenAPI document: v1 (v1)
 * Contact: support@bimdata.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Invitation from '../model/Invitation';
import SelectUserRequest from '../model/SelectUserRequest';

/**
* Sso service.
* @module api/SsoApi
* @version 0.0.0
*/
export default class SsoApi {

    /**
    * Constructs a new SsoApi. 
    * @alias module:api/SsoApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Accept an invitation
     * If the user already exists, s·he is added to the cloud and projet. If not, we wait their first connection to add them.  Required scopes: org:manage
     * @param {Number} id A unique integer value identifying this invitation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    acceptInvitationWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling acceptInvitation");
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

      let authNames = ['ApiKey', 'BIMData_Connect', 'BIMData_Connect', 'Bearer'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/identity-provider/invitation/{id}/accept', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Accept an invitation
     * If the user already exists, s·he is added to the cloud and projet. If not, we wait their first connection to add them.  Required scopes: org:manage
     * @param {Number} id A unique integer value identifying this invitation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    acceptInvitation(id) {
      return this.acceptInvitationWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete user from BIMData
     * Delete the user and all clouds where the user is alone
     * @param {module:model/SelectUserRequest} selectUserRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteUserWithHttpInfo(selectUserRequest) {
      let postBody = selectUserRequest;
      // verify the required parameter 'selectUserRequest' is set
      if (selectUserRequest === undefined || selectUserRequest === null) {
        throw new Error("Missing the required parameter 'selectUserRequest' when calling deleteUser");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey', 'BIMData_Connect', 'BIMData_Connect', 'Bearer'];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'multipart/form-data'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/identity-provider/user', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete user from BIMData
     * Delete the user and all clouds where the user is alone
     * @param {module:model/SelectUserRequest} selectUserRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteUser(selectUserRequest) {
      return this.deleteUserWithHttpInfo(selectUserRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Deny an invitation
     * The invitation status change to DENIED and the user is not added to the cloud. You can accept an invitation previously denied  Required scopes: org:manage
     * @param {Number} id A unique integer value identifying this invitation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    denyInvitationWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling denyInvitation");
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

      let authNames = ['ApiKey', 'BIMData_Connect', 'BIMData_Connect', 'Bearer'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/identity-provider/invitation/{id}/deny', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Deny an invitation
     * The invitation status change to DENIED and the user is not added to the cloud. You can accept an invitation previously denied  Required scopes: org:manage
     * @param {Number} id A unique integer value identifying this invitation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    denyInvitation(id) {
      return this.denyInvitationWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve an invitation
     * Retrieve all invitations of your identity provider  Required scopes: org:manage
     * @param {Number} id A unique integer value identifying this invitation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Invitation} and HTTP response
     */
    getInvitationWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getInvitation");
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

      let authNames = ['ApiKey', 'BIMData_Connect', 'BIMData_Connect', 'Bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Invitation;
      return this.apiClient.callApi(
        '/identity-provider/invitation/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieve an invitation
     * Retrieve all invitations of your identity provider  Required scopes: org:manage
     * @param {Number} id A unique integer value identifying this invitation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Invitation}
     */
    getInvitation(id) {
      return this.getInvitationWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve all invitations
     * Retrieve all invitations of your identity provider  Required scopes: org:manage
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.status          A: Accepted         D: Denied         P: Pending         
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Invitation>} and HTTP response
     */
    getInvitationsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'status': opts['status']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey', 'BIMData_Connect', 'BIMData_Connect', 'Bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Invitation];
      return this.apiClient.callApi(
        '/identity-provider/invitation', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieve all invitations
     * Retrieve all invitations of your identity provider  Required scopes: org:manage
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.status          A: Accepted         D: Denied         P: Pending         
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Invitation>}
     */
    getInvitations(opts) {
      return this.getInvitationsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}

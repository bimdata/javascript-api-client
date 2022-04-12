/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1 (v1)
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import PatchedWebHookRequest from '../model/PatchedWebHookRequest';
import WebHook from '../model/WebHook';
import WebHookRequest from '../model/WebHookRequest';

/**
* Webhook service.
* @module api/WebhookApi
* @version 0.0.0
*/
export default class WebhookApi {

    /**
    * Constructs a new WebhookApi. 
    * @alias module:api/WebhookApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create a new Webhook
     * Create a new Webhook  Required scopes: webhook:manage
     * @param {Number} cloudPk 
     * @param {module:model/WebHookRequest} webHookRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WebHook} and HTTP response
     */
    createWebHookWithHttpInfo(cloudPk, webHookRequest) {
      let postBody = webHookRequest;
      // verify the required parameter 'cloudPk' is set
      if (cloudPk === undefined || cloudPk === null) {
        throw new Error("Missing the required parameter 'cloudPk' when calling createWebHook");
      }
      // verify the required parameter 'webHookRequest' is set
      if (webHookRequest === undefined || webHookRequest === null) {
        throw new Error("Missing the required parameter 'webHookRequest' when calling createWebHook");
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

      let authNames = ['ApiKey', 'BIMData_Connect', 'BIMData_Connect', 'Bearer'];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = WebHook;
      return this.apiClient.callApi(
        '/cloud/{cloud_pk}/webhook', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a new Webhook
     * Create a new Webhook  Required scopes: webhook:manage
     * @param {Number} cloudPk 
     * @param {module:model/WebHookRequest} webHookRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WebHook}
     */
    createWebHook(cloudPk, webHookRequest) {
      return this.createWebHookWithHttpInfo(cloudPk, webHookRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a webhook
     * Delete a webhook  Required scopes: webhook:manage
     * @param {Number} cloudPk 
     * @param {Number} id A unique integer value identifying this web hook.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteWebHookWithHttpInfo(cloudPk, id) {
      let postBody = null;
      // verify the required parameter 'cloudPk' is set
      if (cloudPk === undefined || cloudPk === null) {
        throw new Error("Missing the required parameter 'cloudPk' when calling deleteWebHook");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteWebHook");
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

      let authNames = ['ApiKey', 'BIMData_Connect', 'BIMData_Connect', 'Bearer'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/cloud/{cloud_pk}/webhook/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a webhook
     * Delete a webhook  Required scopes: webhook:manage
     * @param {Number} cloudPk 
     * @param {Number} id A unique integer value identifying this web hook.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteWebHook(cloudPk, id) {
      return this.deleteWebHookWithHttpInfo(cloudPk, id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve one configured webhook
     * Retrieve one configured webhook  Required scopes: webhook:manage
     * @param {Number} cloudPk 
     * @param {Number} id A unique integer value identifying this web hook.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WebHook} and HTTP response
     */
    getWebHookWithHttpInfo(cloudPk, id) {
      let postBody = null;
      // verify the required parameter 'cloudPk' is set
      if (cloudPk === undefined || cloudPk === null) {
        throw new Error("Missing the required parameter 'cloudPk' when calling getWebHook");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getWebHook");
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

      let authNames = ['ApiKey', 'BIMData_Connect', 'BIMData_Connect', 'Bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = WebHook;
      return this.apiClient.callApi(
        '/cloud/{cloud_pk}/webhook/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieve one configured webhook
     * Retrieve one configured webhook  Required scopes: webhook:manage
     * @param {Number} cloudPk 
     * @param {Number} id A unique integer value identifying this web hook.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WebHook}
     */
    getWebHook(cloudPk, id) {
      return this.getWebHookWithHttpInfo(cloudPk, id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve all configured webhooks
     * Retrieve all configured webhooks  Required scopes: webhook:manage
     * @param {Number} cloudPk 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/WebHook>} and HTTP response
     */
    getWebHooksWithHttpInfo(cloudPk) {
      let postBody = null;
      // verify the required parameter 'cloudPk' is set
      if (cloudPk === undefined || cloudPk === null) {
        throw new Error("Missing the required parameter 'cloudPk' when calling getWebHooks");
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

      let authNames = ['ApiKey', 'BIMData_Connect', 'BIMData_Connect', 'Bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [WebHook];
      return this.apiClient.callApi(
        '/cloud/{cloud_pk}/webhook', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieve all configured webhooks
     * Retrieve all configured webhooks  Required scopes: webhook:manage
     * @param {Number} cloudPk 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/WebHook>}
     */
    getWebHooks(cloudPk) {
      return this.getWebHooksWithHttpInfo(cloudPk)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Test a webhook
     * Trigger a Ping Event sending {\"ok\": true} to the webhook URL. Useful to test your app  Required scopes: webhook:manage
     * @param {Number} cloudPk 
     * @param {Number} id A unique integer value identifying this web hook.
     * @param {module:model/WebHookRequest} webHookRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WebHook} and HTTP response
     */
    pingWebHookWithHttpInfo(cloudPk, id, webHookRequest) {
      let postBody = webHookRequest;
      // verify the required parameter 'cloudPk' is set
      if (cloudPk === undefined || cloudPk === null) {
        throw new Error("Missing the required parameter 'cloudPk' when calling pingWebHook");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling pingWebHook");
      }
      // verify the required parameter 'webHookRequest' is set
      if (webHookRequest === undefined || webHookRequest === null) {
        throw new Error("Missing the required parameter 'webHookRequest' when calling pingWebHook");
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

      let authNames = ['ApiKey', 'BIMData_Connect', 'BIMData_Connect', 'Bearer'];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = WebHook;
      return this.apiClient.callApi(
        '/cloud/{cloud_pk}/webhook/{id}/ping', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Test a webhook
     * Trigger a Ping Event sending {\"ok\": true} to the webhook URL. Useful to test your app  Required scopes: webhook:manage
     * @param {Number} cloudPk 
     * @param {Number} id A unique integer value identifying this web hook.
     * @param {module:model/WebHookRequest} webHookRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WebHook}
     */
    pingWebHook(cloudPk, id, webHookRequest) {
      return this.pingWebHookWithHttpInfo(cloudPk, id, webHookRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update some field of a webhook
     * Update some field of a webhook  Required scopes: webhook:manage
     * @param {Number} cloudPk 
     * @param {Number} id A unique integer value identifying this web hook.
     * @param {Object} opts Optional parameters
     * @param {module:model/PatchedWebHookRequest} opts.patchedWebHookRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WebHook} and HTTP response
     */
    updateWebHookWithHttpInfo(cloudPk, id, opts) {
      opts = opts || {};
      let postBody = opts['patchedWebHookRequest'];
      // verify the required parameter 'cloudPk' is set
      if (cloudPk === undefined || cloudPk === null) {
        throw new Error("Missing the required parameter 'cloudPk' when calling updateWebHook");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateWebHook");
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

      let authNames = ['ApiKey', 'BIMData_Connect', 'BIMData_Connect', 'Bearer'];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = WebHook;
      return this.apiClient.callApi(
        '/cloud/{cloud_pk}/webhook/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update some field of a webhook
     * Update some field of a webhook  Required scopes: webhook:manage
     * @param {Number} cloudPk 
     * @param {Number} id A unique integer value identifying this web hook.
     * @param {Object} opts Optional parameters
     * @param {module:model/PatchedWebHookRequest} opts.patchedWebHookRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WebHook}
     */
    updateWebHook(cloudPk, id, opts) {
      return this.updateWebHookWithHttpInfo(cloudPk, id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}

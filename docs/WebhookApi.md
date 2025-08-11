# bimdata.WebhookApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createProjectWebHook**](WebhookApi.md#createProjectWebHook) | **POST** /cloud/{cloud_pk}/project/{project_pk}/webhook | Create a new project Webhook
[**createWebHook**](WebhookApi.md#createWebHook) | **POST** /cloud/{cloud_pk}/webhook | Create a new Webhook
[**deleteProjectWebHook**](WebhookApi.md#deleteProjectWebHook) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/webhook/{id} | Delete a webhook
[**deleteWebHook**](WebhookApi.md#deleteWebHook) | **DELETE** /cloud/{cloud_pk}/webhook/{id} | Delete a webhook
[**getProjectWebHook**](WebhookApi.md#getProjectWebHook) | **GET** /cloud/{cloud_pk}/project/{project_pk}/webhook/{id} | Retrieve one configured project webhook
[**getProjectWebHooks**](WebhookApi.md#getProjectWebHooks) | **GET** /cloud/{cloud_pk}/project/{project_pk}/webhook | Retrieve all configured project webhooks
[**getWebHook**](WebhookApi.md#getWebHook) | **GET** /cloud/{cloud_pk}/webhook/{id} | Retrieve one configured webhook
[**getWebHooks**](WebhookApi.md#getWebHooks) | **GET** /cloud/{cloud_pk}/webhook | Retrieve all configured webhooks
[**pingProjectWebHook**](WebhookApi.md#pingProjectWebHook) | **POST** /cloud/{cloud_pk}/project/{project_pk}/webhook/{id}/ping | Test a project webhook
[**pingWebHook**](WebhookApi.md#pingWebHook) | **POST** /cloud/{cloud_pk}/webhook/{id}/ping | Test a webhook
[**updateProjectWebHook**](WebhookApi.md#updateProjectWebHook) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/webhook/{id} | Update some field of a webhook
[**updateWebHook**](WebhookApi.md#updateWebHook) | **PATCH** /cloud/{cloud_pk}/webhook/{id} | Update some field of a webhook



## createProjectWebHook

> WebHook createProjectWebHook(cloudPk, projectPk, webHookRequest)

Create a new project Webhook

Create a new project Webhook  Required scopes: webhook:manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.WebhookApi();
let cloudPk = 56; // Number | 
let projectPk = 56; // Number | 
let webHookRequest = new bimdata.WebHookRequest(); // WebHookRequest | 
apiInstance.createProjectWebHook(cloudPk, projectPk, webHookRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**|  | 
 **projectPk** | **Number**|  | 
 **webHookRequest** | [**WebHookRequest**](WebHookRequest.md)|  | 

### Return type

[**WebHook**](WebHook.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## createWebHook

> WebHook createWebHook(cloudPk, webHookRequest)

Create a new Webhook

Create a new Webhook  Required scopes: webhook:manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.WebhookApi();
let cloudPk = 56; // Number | 
let webHookRequest = new bimdata.WebHookRequest(); // WebHookRequest | 
apiInstance.createWebHook(cloudPk, webHookRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**|  | 
 **webHookRequest** | [**WebHookRequest**](WebHookRequest.md)|  | 

### Return type

[**WebHook**](WebHook.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## deleteProjectWebHook

> deleteProjectWebHook(cloudPk, id, projectPk)

Delete a webhook

Delete a webhook  Required scopes: webhook:manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.WebhookApi();
let cloudPk = 56; // Number | 
let id = 56; // Number | A unique integer value identifying this web hook.
let projectPk = 56; // Number | 
apiInstance.deleteProjectWebHook(cloudPk, id, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**|  | 
 **id** | **Number**| A unique integer value identifying this web hook. | 
 **projectPk** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteWebHook

> deleteWebHook(cloudPk, id)

Delete a webhook

Delete a webhook  Required scopes: webhook:manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.WebhookApi();
let cloudPk = 56; // Number | 
let id = 56; // Number | A unique integer value identifying this web hook.
apiInstance.deleteWebHook(cloudPk, id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**|  | 
 **id** | **Number**| A unique integer value identifying this web hook. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getProjectWebHook

> WebHook getProjectWebHook(cloudPk, id, projectPk)

Retrieve one configured project webhook

Retrieve one configured project webhook  Required scopes: webhook:manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.WebhookApi();
let cloudPk = 56; // Number | 
let id = 56; // Number | A unique integer value identifying this web hook.
let projectPk = 56; // Number | 
apiInstance.getProjectWebHook(cloudPk, id, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**|  | 
 **id** | **Number**| A unique integer value identifying this web hook. | 
 **projectPk** | **Number**|  | 

### Return type

[**WebHook**](WebHook.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProjectWebHooks

> [WebHook] getProjectWebHooks(cloudPk, projectPk)

Retrieve all configured project webhooks

Retrieve all configured project webhooks  Required scopes: webhook:manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.WebhookApi();
let cloudPk = 56; // Number | 
let projectPk = 56; // Number | 
apiInstance.getProjectWebHooks(cloudPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**|  | 
 **projectPk** | **Number**|  | 

### Return type

[**[WebHook]**](WebHook.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWebHook

> WebHook getWebHook(cloudPk, id)

Retrieve one configured webhook

Retrieve one configured webhook  Required scopes: webhook:manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.WebhookApi();
let cloudPk = 56; // Number | 
let id = 56; // Number | A unique integer value identifying this web hook.
apiInstance.getWebHook(cloudPk, id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**|  | 
 **id** | **Number**| A unique integer value identifying this web hook. | 

### Return type

[**WebHook**](WebHook.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWebHooks

> [WebHook] getWebHooks(cloudPk)

Retrieve all configured webhooks

Retrieve all configured webhooks  Required scopes: webhook:manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.WebhookApi();
let cloudPk = 56; // Number | 
apiInstance.getWebHooks(cloudPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**|  | 

### Return type

[**[WebHook]**](WebHook.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## pingProjectWebHook

> WebHook pingProjectWebHook(cloudPk, id, projectPk, webHookRequest)

Test a project webhook

Trigger a Ping Event sending {\&quot;ok\&quot;: true} to the webhook URL. Useful to test your app  Required scopes: webhook:manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.WebhookApi();
let cloudPk = 56; // Number | 
let id = 56; // Number | A unique integer value identifying this web hook.
let projectPk = 56; // Number | 
let webHookRequest = new bimdata.WebHookRequest(); // WebHookRequest | 
apiInstance.pingProjectWebHook(cloudPk, id, projectPk, webHookRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**|  | 
 **id** | **Number**| A unique integer value identifying this web hook. | 
 **projectPk** | **Number**|  | 
 **webHookRequest** | [**WebHookRequest**](WebHookRequest.md)|  | 

### Return type

[**WebHook**](WebHook.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## pingWebHook

> WebHook pingWebHook(cloudPk, id, webHookRequest)

Test a webhook

Trigger a Ping Event sending {\&quot;ok\&quot;: true} to the webhook URL. Useful to test your app  Required scopes: webhook:manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.WebhookApi();
let cloudPk = 56; // Number | 
let id = 56; // Number | A unique integer value identifying this web hook.
let webHookRequest = new bimdata.WebHookRequest(); // WebHookRequest | 
apiInstance.pingWebHook(cloudPk, id, webHookRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**|  | 
 **id** | **Number**| A unique integer value identifying this web hook. | 
 **webHookRequest** | [**WebHookRequest**](WebHookRequest.md)|  | 

### Return type

[**WebHook**](WebHook.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## updateProjectWebHook

> WebHook updateProjectWebHook(cloudPk, id, projectPk, opts)

Update some field of a webhook

Update some field of a webhook  Required scopes: webhook:manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.WebhookApi();
let cloudPk = 56; // Number | 
let id = 56; // Number | A unique integer value identifying this web hook.
let projectPk = 56; // Number | 
let opts = {
  'patchedWebHookRequest': new bimdata.PatchedWebHookRequest() // PatchedWebHookRequest | 
};
apiInstance.updateProjectWebHook(cloudPk, id, projectPk, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**|  | 
 **id** | **Number**| A unique integer value identifying this web hook. | 
 **projectPk** | **Number**|  | 
 **patchedWebHookRequest** | [**PatchedWebHookRequest**](PatchedWebHookRequest.md)|  | [optional] 

### Return type

[**WebHook**](WebHook.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## updateWebHook

> WebHook updateWebHook(cloudPk, id, opts)

Update some field of a webhook

Update some field of a webhook  Required scopes: webhook:manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.WebhookApi();
let cloudPk = 56; // Number | 
let id = 56; // Number | A unique integer value identifying this web hook.
let opts = {
  'patchedWebHookRequest': new bimdata.PatchedWebHookRequest() // PatchedWebHookRequest | 
};
apiInstance.updateWebHook(cloudPk, id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**|  | 
 **id** | **Number**| A unique integer value identifying this web hook. | 
 **patchedWebHookRequest** | [**PatchedWebHookRequest**](PatchedWebHookRequest.md)|  | [optional] 

### Return type

[**WebHook**](WebHook.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


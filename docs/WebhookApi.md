# bimdata.WebhookApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createWebHook**](WebhookApi.md#createWebHook) | **POST** /cloud/{cloud_pk}/webhook | Create a new Webhook
[**deleteWebHook**](WebhookApi.md#deleteWebHook) | **DELETE** /cloud/{cloud_pk}/webhook/{id} | Delete a webhook
[**getWebHook**](WebhookApi.md#getWebHook) | **GET** /cloud/{cloud_pk}/webhook/{id} | Retrieve one configured webhook
[**getWebHooks**](WebhookApi.md#getWebHooks) | **GET** /cloud/{cloud_pk}/webhook | Retrieve all configured webhooks
[**pingWebHook**](WebhookApi.md#pingWebHook) | **POST** /cloud/{cloud_pk}/webhook/{id}/ping | Test a webhook
[**updateWebHook**](WebhookApi.md#updateWebHook) | **PATCH** /cloud/{cloud_pk}/webhook/{id} | Update some field of a webhook



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


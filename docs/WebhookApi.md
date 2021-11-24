# bimdata.WebhookApi

All URIs are relative to *https://api.bimdata.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createWebHook**](WebhookApi.md#createWebHook) | **POST** /cloud/{cloud_pk}/webhook | Create a new Webhook
[**deleteWebHook**](WebhookApi.md#deleteWebHook) | **DELETE** /cloud/{cloud_pk}/webhook/{id} | Delete a webhook
[**getWebHook**](WebhookApi.md#getWebHook) | **GET** /cloud/{cloud_pk}/webhook/{id} | Retrieve one configured webhook
[**getWebHooks**](WebhookApi.md#getWebHooks) | **GET** /cloud/{cloud_pk}/webhook | Retrieve all configured webhooks
[**pingWebHook**](WebhookApi.md#pingWebHook) | **POST** /cloud/{cloud_pk}/webhook/{id}/ping | Test a webhook
[**updateWebHook**](WebhookApi.md#updateWebHook) | **PATCH** /cloud/{cloud_pk}/webhook/{id} | Update some field of a webhook



## createWebHook

> WebHook createWebHook(cloudPk, data)

Create a new Webhook

Create a new Webhook Required scopes: webhook:manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.WebhookApi();
let cloudPk = "cloudPk_example"; // String | 
let data = new bimdata.WebHook(); // WebHook | 
apiInstance.createWebHook(cloudPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **data** | [**WebHook**](WebHook.md)|  | 

### Return type

[**WebHook**](WebHook.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteWebHook

> deleteWebHook(cloudPk, id)

Delete a webhook

Delete a webhook Required scopes: webhook:manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.WebhookApi();
let cloudPk = "cloudPk_example"; // String | 
let id = "id_example"; // String | 
apiInstance.deleteWebHook(cloudPk, id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getWebHook

> WebHook getWebHook(cloudPk, id)

Retrieve one configured webhook

Retrieve one configured webhook Required scopes: webhook:manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.WebhookApi();
let cloudPk = "cloudPk_example"; // String | 
let id = "id_example"; // String | 
apiInstance.getWebHook(cloudPk, id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 

### Return type

[**WebHook**](WebHook.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWebHooks

> [WebHook] getWebHooks(cloudPk)

Retrieve all configured webhooks

Retrieve all configured webhooks Required scopes: webhook:manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.WebhookApi();
let cloudPk = "cloudPk_example"; // String | 
apiInstance.getWebHooks(cloudPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 

### Return type

[**[WebHook]**](WebHook.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## pingWebHook

> WebHook pingWebHook(cloudPk, id, data)

Test a webhook

Trigger a Ping Event sending {\&quot;ok\&quot;: true} to the webhook URL. Useful to test your app Required scopes: webhook:manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.WebhookApi();
let cloudPk = "cloudPk_example"; // String | 
let id = "id_example"; // String | 
let data = new bimdata.WebHook(); // WebHook | 
apiInstance.pingWebHook(cloudPk, id, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **data** | [**WebHook**](WebHook.md)|  | 

### Return type

[**WebHook**](WebHook.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateWebHook

> WebHook updateWebHook(cloudPk, id, data)

Update some field of a webhook

Update some field of a webhook Required scopes: webhook:manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.WebhookApi();
let cloudPk = "cloudPk_example"; // String | 
let id = "id_example"; // String | 
let data = new bimdata.WebHook(); // WebHook | 
apiInstance.updateWebHook(cloudPk, id, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **data** | [**WebHook**](WebHook.md)|  | 

### Return type

[**WebHook**](WebHook.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


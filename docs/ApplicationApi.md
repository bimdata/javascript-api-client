# BimDataApi.ApplicationApi

All URIs are relative to *https://api-beta.bimdata.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createWebHook**](ApplicationApi.md#createWebHook) | **POST** /cloud/{cloud_pk}/webhook | Create a new Webhook
[**deleteWebHook**](ApplicationApi.md#deleteWebHook) | **DELETE** /cloud/{cloud_pk}/webhook/{id} | Delete a webhook
[**fullUpdateWebHook**](ApplicationApi.md#fullUpdateWebHook) | **PUT** /cloud/{cloud_pk}/webhook/{id} | Update all field of a webhook
[**getWebHook**](ApplicationApi.md#getWebHook) | **GET** /cloud/{cloud_pk}/webhook/{id} | Retrieve one configured webhook
[**getWebHooks**](ApplicationApi.md#getWebHooks) | **GET** /cloud/{cloud_pk}/webhook | Retrieve all configured webhooks
[**pingWebHook**](ApplicationApi.md#pingWebHook) | **POST** /cloud/{cloud_pk}/webhook/{id}/ping | Test a webhook
[**updateWebHook**](ApplicationApi.md#updateWebHook) | **PATCH** /cloud/{cloud_pk}/webhook/{id} | Update some field of a webhook



## createWebHook

> WebHook createWebHook(cloudPk, data)

Create a new Webhook

Create a new Webhook Required scopes: webhook:manage

### Example

```javascript
import BimDataApi from 'bim_data_api';
let defaultClient = BimDataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: BIMDataConnect
let BIMDataConnect = defaultClient.authentications['BIMDataConnect'];
BIMDataConnect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new BimDataApi.ApplicationApi();
let cloudPk = "cloudPk_example"; // String | 
let data = new BimDataApi.WebHook(); // WebHook | 
apiInstance.createWebHook(cloudPk, data, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteWebHook

> deleteWebHook(cloudPk, id)

Delete a webhook

Delete a webhook Required scopes: webhook:manage

### Example

```javascript
import BimDataApi from 'bim_data_api';
let defaultClient = BimDataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: BIMDataConnect
let BIMDataConnect = defaultClient.authentications['BIMDataConnect'];
BIMDataConnect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new BimDataApi.ApplicationApi();
let cloudPk = "cloudPk_example"; // String | 
let id = "id_example"; // String | 
apiInstance.deleteWebHook(cloudPk, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## fullUpdateWebHook

> WebHook fullUpdateWebHook(cloudPk, id, data)

Update all field of a webhook

Update all field of a webhook Required scopes: webhook:manage

### Example

```javascript
import BimDataApi from 'bim_data_api';
let defaultClient = BimDataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: BIMDataConnect
let BIMDataConnect = defaultClient.authentications['BIMDataConnect'];
BIMDataConnect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new BimDataApi.ApplicationApi();
let cloudPk = "cloudPk_example"; // String | 
let id = "id_example"; // String | 
let data = new BimDataApi.WebHook(); // WebHook | 
apiInstance.fullUpdateWebHook(cloudPk, id, data, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getWebHook

> WebHook getWebHook(cloudPk, id)

Retrieve one configured webhook

Retrieve one configured webhook Required scopes: webhook:manage

### Example

```javascript
import BimDataApi from 'bim_data_api';
let defaultClient = BimDataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: BIMDataConnect
let BIMDataConnect = defaultClient.authentications['BIMDataConnect'];
BIMDataConnect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new BimDataApi.ApplicationApi();
let cloudPk = "cloudPk_example"; // String | 
let id = "id_example"; // String | 
apiInstance.getWebHook(cloudPk, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWebHooks

> [WebHook] getWebHooks(cloudPk)

Retrieve all configured webhooks

Retrieve all configured webhooks Required scopes: webhook:manage

### Example

```javascript
import BimDataApi from 'bim_data_api';
let defaultClient = BimDataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: BIMDataConnect
let BIMDataConnect = defaultClient.authentications['BIMDataConnect'];
BIMDataConnect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new BimDataApi.ApplicationApi();
let cloudPk = "cloudPk_example"; // String | 
apiInstance.getWebHooks(cloudPk, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 

### Return type

[**[WebHook]**](WebHook.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## pingWebHook

> WebHook pingWebHook(cloudPk, id, data)

Test a webhook

Trigger a Ping Event sending {\&quot;ok\&quot;: true} to the webhook URL. Useful to test your app Required scopes: webhook:manage

### Example

```javascript
import BimDataApi from 'bim_data_api';
let defaultClient = BimDataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: BIMDataConnect
let BIMDataConnect = defaultClient.authentications['BIMDataConnect'];
BIMDataConnect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new BimDataApi.ApplicationApi();
let cloudPk = "cloudPk_example"; // String | 
let id = "id_example"; // String | 
let data = new BimDataApi.WebHook(); // WebHook | 
apiInstance.pingWebHook(cloudPk, id, data, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateWebHook

> WebHook updateWebHook(cloudPk, id, data)

Update some field of a webhook

Update some field of a webhook Required scopes: webhook:manage

### Example

```javascript
import BimDataApi from 'bim_data_api';
let defaultClient = BimDataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: BIMDataConnect
let BIMDataConnect = defaultClient.authentications['BIMDataConnect'];
BIMDataConnect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new BimDataApi.ApplicationApi();
let cloudPk = "cloudPk_example"; // String | 
let id = "id_example"; // String | 
let data = new BimDataApi.WebHook(); // WebHook | 
apiInstance.updateWebHook(cloudPk, id, data, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


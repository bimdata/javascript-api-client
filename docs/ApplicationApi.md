# bimdata.ApplicationApi

All URIs are relative to *https://api-beta.bimdata.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cloudWebhookPing**](ApplicationApi.md#cloudWebhookPing) | **POST** /cloud/{cloud_pk}/webhook/{id}/ping | 
[**createWebHook**](ApplicationApi.md#createWebHook) | **POST** /cloud/{cloud_pk}/webhook | 
[**deleteWebHook**](ApplicationApi.md#deleteWebHook) | **DELETE** /cloud/{cloud_pk}/webhook/{id} | 
[**fullUpdateWebHook**](ApplicationApi.md#fullUpdateWebHook) | **PUT** /cloud/{cloud_pk}/webhook/{id} | 
[**getWebHook**](ApplicationApi.md#getWebHook) | **GET** /cloud/{cloud_pk}/webhook/{id} | 
[**getWebHooks**](ApplicationApi.md#getWebHooks) | **GET** /cloud/{cloud_pk}/webhook | 
[**updateWebHook**](ApplicationApi.md#updateWebHook) | **PATCH** /cloud/{cloud_pk}/webhook/{id} | 


<a name="cloudWebhookPing"></a>
# **cloudWebhookPing**
> WebHook cloudWebhookPing(cloudPk, id, webHook)



### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.ApplicationApi();
var cloudPk = "cloudPk_example"; // String | 
var id = "id_example"; // String | 
var webHook = new bimdata.WebHook(); // WebHook | 
apiInstance.cloudWebhookPing(cloudPk, id, webHook).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **webHook** | [**WebHook**](WebHook.md)|  | 

### Return type

[**WebHook**](WebHook.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createWebHook"></a>
# **createWebHook**
> WebHook createWebHook(cloudPk, webHook)



### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.ApplicationApi();
var cloudPk = "cloudPk_example"; // String | 
var webHook = new bimdata.WebHook(); // WebHook | 
apiInstance.createWebHook(cloudPk, webHook).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **webHook** | [**WebHook**](WebHook.md)|  | 

### Return type

[**WebHook**](WebHook.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteWebHook"></a>
# **deleteWebHook**
> deleteWebHook(cloudPk, id)



### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.ApplicationApi();
var cloudPk = "cloudPk_example"; // String | 
var id = "id_example"; // String | 
apiInstance.deleteWebHook(cloudPk, id).then(function() {
  console.log('API called successfully.');
}, function(error) {
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

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="fullUpdateWebHook"></a>
# **fullUpdateWebHook**
> WebHook fullUpdateWebHook(cloudPk, id, webHook)



### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.ApplicationApi();
var cloudPk = "cloudPk_example"; // String | 
var id = "id_example"; // String | 
var webHook = new bimdata.WebHook(); // WebHook | 
apiInstance.fullUpdateWebHook(cloudPk, id, webHook).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **webHook** | [**WebHook**](WebHook.md)|  | 

### Return type

[**WebHook**](WebHook.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getWebHook"></a>
# **getWebHook**
> WebHook getWebHook(cloudPk, id)



### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.ApplicationApi();
var cloudPk = "cloudPk_example"; // String | 
var id = "id_example"; // String | 
apiInstance.getWebHook(cloudPk, id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getWebHooks"></a>
# **getWebHooks**
> [WebHook] getWebHooks(cloudPk)



### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.ApplicationApi();
var cloudPk = "cloudPk_example"; // String | 
apiInstance.getWebHooks(cloudPk).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateWebHook"></a>
# **updateWebHook**
> WebHook updateWebHook(cloudPk, id, webHook)



### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.ApplicationApi();
var cloudPk = "cloudPk_example"; // String | 
var id = "id_example"; // String | 
var webHook = new bimdata.WebHook(); // WebHook | 
apiInstance.updateWebHook(cloudPk, id, webHook).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **webHook** | [**WebHook**](WebHook.md)|  | 

### Return type

[**WebHook**](WebHook.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


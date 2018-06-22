# bimdata.CloudApi

All URIs are relative to *https://api-beta.bimdata.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCloud**](CloudApi.md#createCloud) | **POST** /cloud | 
[**createCloudUser**](CloudApi.md#createCloudUser) | **POST** /cloud/{cloud_pk}/user | 
[**deleteCloudUser**](CloudApi.md#deleteCloudUser) | **DELETE** /cloud/{cloud_pk}/user/{id} | 
[**fullUpdateCloud**](CloudApi.md#fullUpdateCloud) | **PUT** /cloud/{id} | 
[**fullUpdateCloudUser**](CloudApi.md#fullUpdateCloudUser) | **PUT** /cloud/{cloud_pk}/user/{id} | 
[**getCloud**](CloudApi.md#getCloud) | **GET** /cloud/{id} | 
[**getCloudSize**](CloudApi.md#getCloudSize) | **GET** /cloud/{id}/size | 
[**getCloudUser**](CloudApi.md#getCloudUser) | **GET** /cloud/{cloud_pk}/user/{id} | 
[**getCloudUsers**](CloudApi.md#getCloudUsers) | **GET** /cloud/{cloud_pk}/user | 
[**getClouds**](CloudApi.md#getClouds) | **GET** /cloud | 
[**updateCloud**](CloudApi.md#updateCloud) | **PATCH** /cloud/{id} | 
[**updateCloudUser**](CloudApi.md#updateCloudUser) | **PATCH** /cloud/{cloud_pk}/user/{id} | 


<a name="createCloud"></a>
# **createCloud**
> Cloud createCloud(data)





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.CloudApi();

var data = new bimdata.Cloud(); // Cloud | 

apiInstance.createCloud(data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**Cloud**](Cloud.md)|  | 

### Return type

[**Cloud**](Cloud.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createCloudUser"></a>
# **createCloudUser**
> FosUserWrite createCloudUser(cloudPk, data)





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.CloudApi();

var cloudPk = "cloudPk_example"; // String | 

var data = new bimdata.FosUserWrite(); // FosUserWrite | 

apiInstance.createCloudUser(cloudPk, data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **data** | [**FosUserWrite**](FosUserWrite.md)|  | 

### Return type

[**FosUserWrite**](FosUserWrite.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteCloudUser"></a>
# **deleteCloudUser**
> deleteCloudUser(cloudPk, id, )





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.CloudApi();

var cloudPk = "cloudPk_example"; // String | 

var id = "id_example"; // String | 

apiInstance.deleteCloudUser(cloudPk, id, ).then(function() {
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdateCloud"></a>
# **fullUpdateCloud**
> Cloud fullUpdateCloud(id, data)





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.CloudApi();

var id = "id_example"; // String | 

var data = new bimdata.Cloud(); // Cloud | 

apiInstance.fullUpdateCloud(id, data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **data** | [**Cloud**](Cloud.md)|  | 

### Return type

[**Cloud**](Cloud.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdateCloudUser"></a>
# **fullUpdateCloudUser**
> FosUserWrite fullUpdateCloudUser(cloudPk, id, data)





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.CloudApi();

var cloudPk = "cloudPk_example"; // String | 

var id = "id_example"; // String | 

var data = new bimdata.FosUserWrite(); // FosUserWrite | 

apiInstance.fullUpdateCloudUser(cloudPk, id, data).then(function(data) {
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
 **data** | [**FosUserWrite**](FosUserWrite.md)|  | 

### Return type

[**FosUserWrite**](FosUserWrite.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCloud"></a>
# **getCloud**
> Cloud getCloud(id, )



Returns user and his cloud role

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.CloudApi();

var id = "id_example"; // String | 

apiInstance.getCloud(id, ).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**Cloud**](Cloud.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCloudSize"></a>
# **getCloudSize**
> &#39;Number&#39; getCloudSize(id)



Returns the size of the cloud in Bytes

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.CloudApi();

var id = "id_example"; // String | 

apiInstance.getCloudSize(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

**&#39;Number&#39;**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCloudUser"></a>
# **getCloudUser**
> FosUser getCloudUser(cloudPk, id, )





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.CloudApi();

var cloudPk = "cloudPk_example"; // String | 

var id = "id_example"; // String | 

apiInstance.getCloudUser(cloudPk, id, ).then(function(data) {
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

[**FosUser**](FosUser.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCloudUsers"></a>
# **getCloudUsers**
> [FosUser] getCloudUsers(cloudPk, )





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.CloudApi();

var cloudPk = "cloudPk_example"; // String | 

apiInstance.getCloudUsers(cloudPk, ).then(function(data) {
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

[**[FosUser]**](FosUser.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getClouds"></a>
# **getClouds**
> [Cloud] getClouds()



Returns user&#39;s cloud only

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.CloudApi();
apiInstance.getClouds().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Cloud]**](Cloud.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCloud"></a>
# **updateCloud**
> Cloud updateCloud(id, data)





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.CloudApi();

var id = "id_example"; // String | 

var data = new bimdata.Cloud(); // Cloud | 

apiInstance.updateCloud(id, data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **data** | [**Cloud**](Cloud.md)|  | 

### Return type

[**Cloud**](Cloud.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCloudUser"></a>
# **updateCloudUser**
> FosUserWrite updateCloudUser(cloudPk, id, data)





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.CloudApi();

var cloudPk = "cloudPk_example"; // String | 

var id = "id_example"; // String | 

var data = new bimdata.FosUserWrite(); // FosUserWrite | 

apiInstance.updateCloudUser(cloudPk, id, data).then(function(data) {
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
 **data** | [**FosUserWrite**](FosUserWrite.md)|  | 

### Return type

[**FosUserWrite**](FosUserWrite.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


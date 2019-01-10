# bimdata.BcfApi

All URIs are relative to *https://api-beta.bimdata.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createColoring**](BcfApi.md#createColoring) | **POST** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/coloring | 
[**createComment**](BcfApi.md#createComment) | **POST** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/comments | 
[**createFullTopic**](BcfApi.md#createFullTopic) | **POST** /bcf/2.1/projects/{projects_pk}/full-topic | 
[**createSelection**](BcfApi.md#createSelection) | **POST** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/selection | 
[**createTopic**](BcfApi.md#createTopic) | **POST** /bcf/2.1/projects/{projects_pk}/topics | 
[**createViewpoint**](BcfApi.md#createViewpoint) | **POST** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints | 
[**createVisibility**](BcfApi.md#createVisibility) | **POST** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/visibility | 
[**deleteColoring**](BcfApi.md#deleteColoring) | **DELETE** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/coloring/{id} | 
[**deleteComment**](BcfApi.md#deleteComment) | **DELETE** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/comments/{guid} | 
[**deleteSelection**](BcfApi.md#deleteSelection) | **DELETE** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/selection/{id} | 
[**deleteTopic**](BcfApi.md#deleteTopic) | **DELETE** /bcf/2.1/projects/{projects_pk}/topics/{guid} | 
[**deleteViewpoint**](BcfApi.md#deleteViewpoint) | **DELETE** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{guid} | 
[**deleteVisibility**](BcfApi.md#deleteVisibility) | **DELETE** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/visibility/{id} | 
[**fullUpdateBcfProject**](BcfApi.md#fullUpdateBcfProject) | **PUT** /bcf/2.1/projects/{id} | 
[**fullUpdateColoring**](BcfApi.md#fullUpdateColoring) | **PUT** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/coloring/{id} | 
[**fullUpdateComment**](BcfApi.md#fullUpdateComment) | **PUT** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/comments/{guid} | 
[**fullUpdateFullTopic**](BcfApi.md#fullUpdateFullTopic) | **PUT** /bcf/2.1/projects/{projects_pk}/full-topic/{guid} | 
[**fullUpdateSelection**](BcfApi.md#fullUpdateSelection) | **PUT** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/selection/{id} | 
[**fullUpdateTopic**](BcfApi.md#fullUpdateTopic) | **PUT** /bcf/2.1/projects/{projects_pk}/topics/{guid} | 
[**fullUpdateViewpoint**](BcfApi.md#fullUpdateViewpoint) | **PUT** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{guid} | 
[**fullUpdateVisibility**](BcfApi.md#fullUpdateVisibility) | **PUT** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/visibility/{id} | 
[**getBcfProject**](BcfApi.md#getBcfProject) | **GET** /bcf/2.1/projects/{id} | 
[**getBcfProjects**](BcfApi.md#getBcfProjects) | **GET** /bcf/2.1/projects | 
[**getColoring**](BcfApi.md#getColoring) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/coloring/{id} | 
[**getColorings**](BcfApi.md#getColorings) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/coloring | 
[**getComment**](BcfApi.md#getComment) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/comments/{guid} | 
[**getComments**](BcfApi.md#getComments) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/comments | 
[**getExtensions**](BcfApi.md#getExtensions) | **GET** /bcf/2.1/projects/{projects_pk}/extensions | 
[**getFullTopic**](BcfApi.md#getFullTopic) | **GET** /bcf/2.1/projects/{projects_pk}/full-topic/{guid} | 
[**getFullTopics**](BcfApi.md#getFullTopics) | **GET** /bcf/2.1/projects/{projects_pk}/full-topic | 
[**getSelection**](BcfApi.md#getSelection) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/selection/{id} | 
[**getSelections**](BcfApi.md#getSelections) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/selection | 
[**getSnapshot**](BcfApi.md#getSnapshot) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/snapshot | 
[**getTopic**](BcfApi.md#getTopic) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{guid} | 
[**getTopicViewpoints**](BcfApi.md#getTopicViewpoints) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/topic-viewpoints | 
[**getTopics**](BcfApi.md#getTopics) | **GET** /bcf/2.1/projects/{projects_pk}/topics | 
[**getUser**](BcfApi.md#getUser) | **GET** /bcf/2.1/current-user | 
[**getViewpoint**](BcfApi.md#getViewpoint) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{guid} | 
[**getViewpoints**](BcfApi.md#getViewpoints) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints | 
[**getVisibilities**](BcfApi.md#getVisibilities) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/visibility | 
[**getVisibility**](BcfApi.md#getVisibility) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/visibility/{id} | 
[**updateBcfProject**](BcfApi.md#updateBcfProject) | **PATCH** /bcf/2.1/projects/{id} | 
[**updateColoring**](BcfApi.md#updateColoring) | **PATCH** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/coloring/{id} | 
[**updateComment**](BcfApi.md#updateComment) | **PATCH** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/comments/{guid} | 
[**updateExtensions**](BcfApi.md#updateExtensions) | **PATCH** /bcf/2.1/projects/{projects_pk}/extensions | 
[**updateFullTopic**](BcfApi.md#updateFullTopic) | **PATCH** /bcf/2.1/projects/{projects_pk}/full-topic/{guid} | 
[**updateSelection**](BcfApi.md#updateSelection) | **PATCH** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/selection/{id} | 
[**updateTopic**](BcfApi.md#updateTopic) | **PATCH** /bcf/2.1/projects/{projects_pk}/topics/{guid} | 
[**updateViewpoint**](BcfApi.md#updateViewpoint) | **PATCH** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{guid} | 
[**updateVisibility**](BcfApi.md#updateVisibility) | **PATCH** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/visibility/{id} | 


<a name="createColoring"></a>
# **createColoring**
> Coloring createColoring(projectsPk, topicsPk, viewpointsPk, coloring)



### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.BcfApi();
var projectsPk = "projectsPk_example"; // String | 
var topicsPk = "topicsPk_example"; // String | 
var viewpointsPk = "viewpointsPk_example"; // String | 
var coloring = new bimdata.Coloring(); // Coloring | 
apiInstance.createColoring(projectsPk, topicsPk, viewpointsPk, coloring).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **viewpointsPk** | **String**|  | 
 **coloring** | [**Coloring**](Coloring.md)|  | 

### Return type

[**Coloring**](Coloring.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createComment"></a>
# **createComment**
> Comment createComment(projectsPk, topicsPk, comment)



### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.BcfApi();
var projectsPk = "projectsPk_example"; // String | 
var topicsPk = "topicsPk_example"; // String | 
var comment = new bimdata.Comment(); // Comment | 
apiInstance.createComment(projectsPk, topicsPk, comment).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **comment** | [**Comment**](Comment.md)|  | 

### Return type

[**Comment**](Comment.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createFullTopic"></a>
# **createFullTopic**
> SingleJsonTopic createFullTopic(projectsPk, singleJsonTopic)



### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.BcfApi();
var projectsPk = "projectsPk_example"; // String | 
var singleJsonTopic = new bimdata.SingleJsonTopic(); // SingleJsonTopic | 
apiInstance.createFullTopic(projectsPk, singleJsonTopic).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **singleJsonTopic** | [**SingleJsonTopic**](SingleJsonTopic.md)|  | 

### Return type

[**SingleJsonTopic**](SingleJsonTopic.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createSelection"></a>
# **createSelection**
> Component createSelection(projectsPk, topicsPk, viewpointsPk, component)



### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.BcfApi();
var projectsPk = "projectsPk_example"; // String | 
var topicsPk = "topicsPk_example"; // String | 
var viewpointsPk = "viewpointsPk_example"; // String | 
var component = new bimdata.Component(); // Component | 
apiInstance.createSelection(projectsPk, topicsPk, viewpointsPk, component).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **viewpointsPk** | **String**|  | 
 **component** | [**Component**](Component.md)|  | 

### Return type

[**Component**](Component.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createTopic"></a>
# **createTopic**
> Topic createTopic(projectsPk, topic)



### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.BcfApi();
var projectsPk = "projectsPk_example"; // String | 
var topic = new bimdata.Topic(); // Topic | 
apiInstance.createTopic(projectsPk, topic).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **topic** | [**Topic**](Topic.md)|  | 

### Return type

[**Topic**](Topic.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createViewpoint"></a>
# **createViewpoint**
> Viewpoint createViewpoint(projectsPk, topicsPk, viewpoint)



### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.BcfApi();
var projectsPk = "projectsPk_example"; // String | 
var topicsPk = "topicsPk_example"; // String | 
var viewpoint = new bimdata.Viewpoint(); // Viewpoint | 
apiInstance.createViewpoint(projectsPk, topicsPk, viewpoint).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **viewpoint** | [**Viewpoint**](Viewpoint.md)|  | 

### Return type

[**Viewpoint**](Viewpoint.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createVisibility"></a>
# **createVisibility**
> Visibility createVisibility(projectsPk, topicsPk, viewpointsPk, visibility)



### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.BcfApi();
var projectsPk = "projectsPk_example"; // String | 
var topicsPk = "topicsPk_example"; // String | 
var viewpointsPk = "viewpointsPk_example"; // String | 
var visibility = new bimdata.Visibility(); // Visibility | 
apiInstance.createVisibility(projectsPk, topicsPk, viewpointsPk, visibility).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **viewpointsPk** | **String**|  | 
 **visibility** | [**Visibility**](Visibility.md)|  | 

### Return type

[**Visibility**](Visibility.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteColoring"></a>
# **deleteColoring**
> deleteColoring(id, projectsPk, topicsPk, viewpointsPk)



### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.BcfApi();
var id = 56; // Number | A unique integer value identifying this coloring.
var projectsPk = "projectsPk_example"; // String | 
var topicsPk = "topicsPk_example"; // String | 
var viewpointsPk = "viewpointsPk_example"; // String | 
apiInstance.deleteColoring(id, projectsPk, topicsPk, viewpointsPk).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this coloring. | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **viewpointsPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteComment"></a>
# **deleteComment**
> deleteComment(guid, projectsPk, topicsPk)



### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.BcfApi();
var guid = null; // String | A UUID string identifying this comment.
var projectsPk = "projectsPk_example"; // String | 
var topicsPk = "topicsPk_example"; // String | 
apiInstance.deleteComment(guid, projectsPk, topicsPk).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guid** | [**String**](.md)| A UUID string identifying this comment. | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteSelection"></a>
# **deleteSelection**
> deleteSelection(id, projectsPk, topicsPk, viewpointsPk)



### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.BcfApi();
var id = 56; // Number | A unique integer value identifying this component.
var projectsPk = "projectsPk_example"; // String | 
var topicsPk = "topicsPk_example"; // String | 
var viewpointsPk = "viewpointsPk_example"; // String | 
apiInstance.deleteSelection(id, projectsPk, topicsPk, viewpointsPk).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this component. | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **viewpointsPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteTopic"></a>
# **deleteTopic**
> deleteTopic(guid, projectsPk)



### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.BcfApi();
var guid = null; // String | A UUID string identifying this topic.
var projectsPk = "projectsPk_example"; // String | 
apiInstance.deleteTopic(guid, projectsPk).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guid** | [**String**](.md)| A UUID string identifying this topic. | 
 **projectsPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteViewpoint"></a>
# **deleteViewpoint**
> deleteViewpoint(guid, projectsPk, topicsPk)



### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.BcfApi();
var guid = null; // String | A UUID string identifying this viewpoint.
var projectsPk = "projectsPk_example"; // String | 
var topicsPk = "topicsPk_example"; // String | 
apiInstance.deleteViewpoint(guid, projectsPk, topicsPk).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guid** | [**String**](.md)| A UUID string identifying this viewpoint. | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteVisibility"></a>
# **deleteVisibility**
> deleteVisibility(id, projectsPk, topicsPk, viewpointsPk)



### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.BcfApi();
var id = 56; // Number | A unique integer value identifying this visibility.
var projectsPk = "projectsPk_example"; // String | 
var topicsPk = "topicsPk_example"; // String | 
var viewpointsPk = "viewpointsPk_example"; // String | 
apiInstance.deleteVisibility(id, projectsPk, topicsPk, viewpointsPk).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this visibility. | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **viewpointsPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="fullUpdateBcfProject"></a>
# **fullUpdateBcfProject**
> BcfProject fullUpdateBcfProject(id, bcfProject)



### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.BcfApi();
var id = "id_example"; // String | 
var bcfProject = new bimdata.BcfProject(); // BcfProject | 
apiInstance.fullUpdateBcfProject(id, bcfProject).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **bcfProject** | [**BcfProject**](BcfProject.md)|  | 

### Return type

[**BcfProject**](BcfProject.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdateColoring"></a>
# **fullUpdateColoring**
> Coloring fullUpdateColoring(id, projectsPk, topicsPk, viewpointsPk, coloring)



### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.BcfApi();
var id = 56; // Number | A unique integer value identifying this coloring.
var projectsPk = "projectsPk_example"; // String | 
var topicsPk = "topicsPk_example"; // String | 
var viewpointsPk = "viewpointsPk_example"; // String | 
var coloring = new bimdata.Coloring(); // Coloring | 
apiInstance.fullUpdateColoring(id, projectsPk, topicsPk, viewpointsPk, coloring).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this coloring. | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **viewpointsPk** | **String**|  | 
 **coloring** | [**Coloring**](Coloring.md)|  | 

### Return type

[**Coloring**](Coloring.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdateComment"></a>
# **fullUpdateComment**
> Comment fullUpdateComment(guid, projectsPk, topicsPk, comment)



### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.BcfApi();
var guid = null; // String | A UUID string identifying this comment.
var projectsPk = "projectsPk_example"; // String | 
var topicsPk = "topicsPk_example"; // String | 
var comment = new bimdata.Comment(); // Comment | 
apiInstance.fullUpdateComment(guid, projectsPk, topicsPk, comment).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guid** | [**String**](.md)| A UUID string identifying this comment. | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **comment** | [**Comment**](Comment.md)|  | 

### Return type

[**Comment**](Comment.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdateFullTopic"></a>
# **fullUpdateFullTopic**
> SingleJsonTopic fullUpdateFullTopic(guid, projectsPk, singleJsonTopic)



### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.BcfApi();
var guid = null; // String | A UUID string identifying this topic.
var projectsPk = "projectsPk_example"; // String | 
var singleJsonTopic = new bimdata.SingleJsonTopic(); // SingleJsonTopic | 
apiInstance.fullUpdateFullTopic(guid, projectsPk, singleJsonTopic).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guid** | [**String**](.md)| A UUID string identifying this topic. | 
 **projectsPk** | **String**|  | 
 **singleJsonTopic** | [**SingleJsonTopic**](SingleJsonTopic.md)|  | 

### Return type

[**SingleJsonTopic**](SingleJsonTopic.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdateSelection"></a>
# **fullUpdateSelection**
> Component fullUpdateSelection(id, projectsPk, topicsPk, viewpointsPk, component)



### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.BcfApi();
var id = 56; // Number | A unique integer value identifying this component.
var projectsPk = "projectsPk_example"; // String | 
var topicsPk = "topicsPk_example"; // String | 
var viewpointsPk = "viewpointsPk_example"; // String | 
var component = new bimdata.Component(); // Component | 
apiInstance.fullUpdateSelection(id, projectsPk, topicsPk, viewpointsPk, component).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this component. | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **viewpointsPk** | **String**|  | 
 **component** | [**Component**](Component.md)|  | 

### Return type

[**Component**](Component.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdateTopic"></a>
# **fullUpdateTopic**
> Topic fullUpdateTopic(guid, projectsPk, topic)



### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.BcfApi();
var guid = null; // String | A UUID string identifying this topic.
var projectsPk = "projectsPk_example"; // String | 
var topic = new bimdata.Topic(); // Topic | 
apiInstance.fullUpdateTopic(guid, projectsPk, topic).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guid** | [**String**](.md)| A UUID string identifying this topic. | 
 **projectsPk** | **String**|  | 
 **topic** | [**Topic**](Topic.md)|  | 

### Return type

[**Topic**](Topic.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdateViewpoint"></a>
# **fullUpdateViewpoint**
> Viewpoint fullUpdateViewpoint(guid, projectsPk, topicsPk, viewpoint)



### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.BcfApi();
var guid = null; // String | A UUID string identifying this viewpoint.
var projectsPk = "projectsPk_example"; // String | 
var topicsPk = "topicsPk_example"; // String | 
var viewpoint = new bimdata.Viewpoint(); // Viewpoint | 
apiInstance.fullUpdateViewpoint(guid, projectsPk, topicsPk, viewpoint).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guid** | [**String**](.md)| A UUID string identifying this viewpoint. | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **viewpoint** | [**Viewpoint**](Viewpoint.md)|  | 

### Return type

[**Viewpoint**](Viewpoint.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdateVisibility"></a>
# **fullUpdateVisibility**
> Visibility fullUpdateVisibility(id, projectsPk, topicsPk, viewpointsPk, visibility)



### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.BcfApi();
var id = 56; // Number | A unique integer value identifying this visibility.
var projectsPk = "projectsPk_example"; // String | 
var topicsPk = "topicsPk_example"; // String | 
var viewpointsPk = "viewpointsPk_example"; // String | 
var visibility = new bimdata.Visibility(); // Visibility | 
apiInstance.fullUpdateVisibility(id, projectsPk, topicsPk, viewpointsPk, visibility).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this visibility. | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **viewpointsPk** | **String**|  | 
 **visibility** | [**Visibility**](Visibility.md)|  | 

### Return type

[**Visibility**](Visibility.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getBcfProject"></a>
# **getBcfProject**
> BcfProject getBcfProject(id)



### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.BcfApi();
var id = "id_example"; // String | 
apiInstance.getBcfProject(id).then(function(data) {
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

[**BcfProject**](BcfProject.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBcfProjects"></a>
# **getBcfProjects**
> [BcfProject] getBcfProjects()



### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.BcfApi();
apiInstance.getBcfProjects().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[BcfProject]**](BcfProject.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getColoring"></a>
# **getColoring**
> Coloring getColoring(id, projectsPk, topicsPk, viewpointsPk)



### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.BcfApi();
var id = 56; // Number | A unique integer value identifying this coloring.
var projectsPk = "projectsPk_example"; // String | 
var topicsPk = "topicsPk_example"; // String | 
var viewpointsPk = "viewpointsPk_example"; // String | 
apiInstance.getColoring(id, projectsPk, topicsPk, viewpointsPk).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this coloring. | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **viewpointsPk** | **String**|  | 

### Return type

[**Coloring**](Coloring.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getColorings"></a>
# **getColorings**
> [Coloring] getColorings(projectsPk, topicsPk, viewpointsPk)



### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.BcfApi();
var projectsPk = "projectsPk_example"; // String | 
var topicsPk = "topicsPk_example"; // String | 
var viewpointsPk = "viewpointsPk_example"; // String | 
apiInstance.getColorings(projectsPk, topicsPk, viewpointsPk).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **viewpointsPk** | **String**|  | 

### Return type

[**[Coloring]**](Coloring.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getComment"></a>
# **getComment**
> Comment getComment(guid, projectsPk, topicsPk)



### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.BcfApi();
var guid = null; // String | A UUID string identifying this comment.
var projectsPk = "projectsPk_example"; // String | 
var topicsPk = "topicsPk_example"; // String | 
apiInstance.getComment(guid, projectsPk, topicsPk).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guid** | [**String**](.md)| A UUID string identifying this comment. | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 

### Return type

[**Comment**](Comment.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getComments"></a>
# **getComments**
> [Comment] getComments(projectsPk, topicsPk)



### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.BcfApi();
var projectsPk = "projectsPk_example"; // String | 
var topicsPk = "topicsPk_example"; // String | 
apiInstance.getComments(projectsPk, topicsPk).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 

### Return type

[**[Comment]**](Comment.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getExtensions"></a>
# **getExtensions**
> Extensions getExtensions(projectsPk)



### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.BcfApi();
var projectsPk = "projectsPk_example"; // String | 
apiInstance.getExtensions(projectsPk).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 

### Return type

[**Extensions**](Extensions.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getFullTopic"></a>
# **getFullTopic**
> SingleJsonTopic getFullTopic(guid, projectsPk)



### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.BcfApi();
var guid = null; // String | A UUID string identifying this topic.
var projectsPk = "projectsPk_example"; // String | 
apiInstance.getFullTopic(guid, projectsPk).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guid** | [**String**](.md)| A UUID string identifying this topic. | 
 **projectsPk** | **String**|  | 

### Return type

[**SingleJsonTopic**](SingleJsonTopic.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getFullTopics"></a>
# **getFullTopics**
> [SingleJsonTopic] getFullTopics(projectsPk, opts)



### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.BcfApi();
var projectsPk = "projectsPk_example"; // String | 
var opts = {
  'ifcs': "ifcs_example", // String | Filter the returned list by ifcs
  'format': "format_example" // String | Filter the returned list by format
};
apiInstance.getFullTopics(projectsPk, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **ifcs** | **String**| Filter the returned list by ifcs | [optional] 
 **format** | **String**| Filter the returned list by format | [optional] 

### Return type

[**[SingleJsonTopic]**](SingleJsonTopic.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSelection"></a>
# **getSelection**
> Component getSelection(id, projectsPk, topicsPk, viewpointsPk)



### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.BcfApi();
var id = 56; // Number | A unique integer value identifying this component.
var projectsPk = "projectsPk_example"; // String | 
var topicsPk = "topicsPk_example"; // String | 
var viewpointsPk = "viewpointsPk_example"; // String | 
apiInstance.getSelection(id, projectsPk, topicsPk, viewpointsPk).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this component. | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **viewpointsPk** | **String**|  | 

### Return type

[**Component**](Component.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSelections"></a>
# **getSelections**
> [Component] getSelections(projectsPk, topicsPk, viewpointsPk)



### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.BcfApi();
var projectsPk = "projectsPk_example"; // String | 
var topicsPk = "topicsPk_example"; // String | 
var viewpointsPk = "viewpointsPk_example"; // String | 
apiInstance.getSelections(projectsPk, topicsPk, viewpointsPk).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **viewpointsPk** | **String**|  | 

### Return type

[**[Component]**](Component.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSnapshot"></a>
# **getSnapshot**
> File getSnapshot(projectsPk, topicsPk, viewpointsPk)



Retrieve the viewpoint&#39; snapshot

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.BcfApi();
var projectsPk = "projectsPk_example"; // String | 
var topicsPk = "topicsPk_example"; // String | 
var viewpointsPk = "viewpointsPk_example"; // String | 
apiInstance.getSnapshot(projectsPk, topicsPk, viewpointsPk).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **viewpointsPk** | **String**|  | 

### Return type

**File**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTopic"></a>
# **getTopic**
> Topic getTopic(guid, projectsPk)



### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.BcfApi();
var guid = null; // String | A UUID string identifying this topic.
var projectsPk = "projectsPk_example"; // String | 
apiInstance.getTopic(guid, projectsPk).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guid** | [**String**](.md)| A UUID string identifying this topic. | 
 **projectsPk** | **String**|  | 

### Return type

[**Topic**](Topic.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTopicViewpoints"></a>
# **getTopicViewpoints**
> [Viewpoint] getTopicViewpoints(projectsPk, topicsPk)



### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.BcfApi();
var projectsPk = "projectsPk_example"; // String | 
var topicsPk = "topicsPk_example"; // String | 
apiInstance.getTopicViewpoints(projectsPk, topicsPk).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 

### Return type

[**[Viewpoint]**](Viewpoint.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTopics"></a>
# **getTopics**
> [Topic] getTopics(projectsPk, opts)



### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.BcfApi();
var projectsPk = "projectsPk_example"; // String | 
var opts = {
  'ifcs': "ifcs_example", // String | Filter the returned list by ifcs
  'format': "format_example" // String | Filter the returned list by format
};
apiInstance.getTopics(projectsPk, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **ifcs** | **String**| Filter the returned list by ifcs | [optional] 
 **format** | **String**| Filter the returned list by format | [optional] 

### Return type

[**[Topic]**](Topic.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUser"></a>
# **getUser**
> SelfUser getUser()



### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.BcfApi();
apiInstance.getUser().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**SelfUser**](SelfUser.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getViewpoint"></a>
# **getViewpoint**
> Viewpoint getViewpoint(guid, projectsPk, topicsPk)



### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.BcfApi();
var guid = null; // String | A UUID string identifying this viewpoint.
var projectsPk = "projectsPk_example"; // String | 
var topicsPk = "topicsPk_example"; // String | 
apiInstance.getViewpoint(guid, projectsPk, topicsPk).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guid** | [**String**](.md)| A UUID string identifying this viewpoint. | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 

### Return type

[**Viewpoint**](Viewpoint.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getViewpoints"></a>
# **getViewpoints**
> [Viewpoint] getViewpoints(projectsPk, topicsPk)



### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.BcfApi();
var projectsPk = "projectsPk_example"; // String | 
var topicsPk = "topicsPk_example"; // String | 
apiInstance.getViewpoints(projectsPk, topicsPk).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 

### Return type

[**[Viewpoint]**](Viewpoint.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getVisibilities"></a>
# **getVisibilities**
> [Visibility] getVisibilities(projectsPk, topicsPk, viewpointsPk)



### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.BcfApi();
var projectsPk = "projectsPk_example"; // String | 
var topicsPk = "topicsPk_example"; // String | 
var viewpointsPk = "viewpointsPk_example"; // String | 
apiInstance.getVisibilities(projectsPk, topicsPk, viewpointsPk).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **viewpointsPk** | **String**|  | 

### Return type

[**[Visibility]**](Visibility.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getVisibility"></a>
# **getVisibility**
> Visibility getVisibility(id, projectsPk, topicsPk, viewpointsPk)



### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.BcfApi();
var id = 56; // Number | A unique integer value identifying this visibility.
var projectsPk = "projectsPk_example"; // String | 
var topicsPk = "topicsPk_example"; // String | 
var viewpointsPk = "viewpointsPk_example"; // String | 
apiInstance.getVisibility(id, projectsPk, topicsPk, viewpointsPk).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this visibility. | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **viewpointsPk** | **String**|  | 

### Return type

[**Visibility**](Visibility.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateBcfProject"></a>
# **updateBcfProject**
> BcfProject updateBcfProject(id, bcfProject)



### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.BcfApi();
var id = "id_example"; // String | 
var bcfProject = new bimdata.BcfProject(); // BcfProject | 
apiInstance.updateBcfProject(id, bcfProject).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **bcfProject** | [**BcfProject**](BcfProject.md)|  | 

### Return type

[**BcfProject**](BcfProject.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateColoring"></a>
# **updateColoring**
> Coloring updateColoring(id, projectsPk, topicsPk, viewpointsPk, coloring)



### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.BcfApi();
var id = 56; // Number | A unique integer value identifying this coloring.
var projectsPk = "projectsPk_example"; // String | 
var topicsPk = "topicsPk_example"; // String | 
var viewpointsPk = "viewpointsPk_example"; // String | 
var coloring = new bimdata.Coloring(); // Coloring | 
apiInstance.updateColoring(id, projectsPk, topicsPk, viewpointsPk, coloring).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this coloring. | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **viewpointsPk** | **String**|  | 
 **coloring** | [**Coloring**](Coloring.md)|  | 

### Return type

[**Coloring**](Coloring.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateComment"></a>
# **updateComment**
> Comment updateComment(guid, projectsPk, topicsPk, comment)



### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.BcfApi();
var guid = null; // String | A UUID string identifying this comment.
var projectsPk = "projectsPk_example"; // String | 
var topicsPk = "topicsPk_example"; // String | 
var comment = new bimdata.Comment(); // Comment | 
apiInstance.updateComment(guid, projectsPk, topicsPk, comment).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guid** | [**String**](.md)| A UUID string identifying this comment. | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **comment** | [**Comment**](Comment.md)|  | 

### Return type

[**Comment**](Comment.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateExtensions"></a>
# **updateExtensions**
> Extensions updateExtensions(projectsPk, extensions)



### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.BcfApi();
var projectsPk = "projectsPk_example"; // String | 
var extensions = new bimdata.Extensions(); // Extensions | 
apiInstance.updateExtensions(projectsPk, extensions).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **extensions** | [**Extensions**](Extensions.md)|  | 

### Return type

[**Extensions**](Extensions.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateFullTopic"></a>
# **updateFullTopic**
> SingleJsonTopic updateFullTopic(guid, projectsPk, singleJsonTopic)



### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.BcfApi();
var guid = null; // String | A UUID string identifying this topic.
var projectsPk = "projectsPk_example"; // String | 
var singleJsonTopic = new bimdata.SingleJsonTopic(); // SingleJsonTopic | 
apiInstance.updateFullTopic(guid, projectsPk, singleJsonTopic).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guid** | [**String**](.md)| A UUID string identifying this topic. | 
 **projectsPk** | **String**|  | 
 **singleJsonTopic** | [**SingleJsonTopic**](SingleJsonTopic.md)|  | 

### Return type

[**SingleJsonTopic**](SingleJsonTopic.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateSelection"></a>
# **updateSelection**
> Component updateSelection(id, projectsPk, topicsPk, viewpointsPk, component)



### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.BcfApi();
var id = 56; // Number | A unique integer value identifying this component.
var projectsPk = "projectsPk_example"; // String | 
var topicsPk = "topicsPk_example"; // String | 
var viewpointsPk = "viewpointsPk_example"; // String | 
var component = new bimdata.Component(); // Component | 
apiInstance.updateSelection(id, projectsPk, topicsPk, viewpointsPk, component).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this component. | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **viewpointsPk** | **String**|  | 
 **component** | [**Component**](Component.md)|  | 

### Return type

[**Component**](Component.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateTopic"></a>
# **updateTopic**
> Topic updateTopic(guid, projectsPk, topic)



### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.BcfApi();
var guid = null; // String | A UUID string identifying this topic.
var projectsPk = "projectsPk_example"; // String | 
var topic = new bimdata.Topic(); // Topic | 
apiInstance.updateTopic(guid, projectsPk, topic).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guid** | [**String**](.md)| A UUID string identifying this topic. | 
 **projectsPk** | **String**|  | 
 **topic** | [**Topic**](Topic.md)|  | 

### Return type

[**Topic**](Topic.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateViewpoint"></a>
# **updateViewpoint**
> Viewpoint updateViewpoint(guid, projectsPk, topicsPk, viewpoint)



### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.BcfApi();
var guid = null; // String | A UUID string identifying this viewpoint.
var projectsPk = "projectsPk_example"; // String | 
var topicsPk = "topicsPk_example"; // String | 
var viewpoint = new bimdata.Viewpoint(); // Viewpoint | 
apiInstance.updateViewpoint(guid, projectsPk, topicsPk, viewpoint).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guid** | [**String**](.md)| A UUID string identifying this viewpoint. | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **viewpoint** | [**Viewpoint**](Viewpoint.md)|  | 

### Return type

[**Viewpoint**](Viewpoint.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateVisibility"></a>
# **updateVisibility**
> Visibility updateVisibility(id, projectsPk, topicsPk, viewpointsPk, visibility)



### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.BcfApi();
var id = 56; // Number | A unique integer value identifying this visibility.
var projectsPk = "projectsPk_example"; // String | 
var topicsPk = "topicsPk_example"; // String | 
var viewpointsPk = "viewpointsPk_example"; // String | 
var visibility = new bimdata.Visibility(); // Visibility | 
apiInstance.updateVisibility(id, projectsPk, topicsPk, viewpointsPk, visibility).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this visibility. | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **viewpointsPk** | **String**|  | 
 **visibility** | [**Visibility**](Visibility.md)|  | 

### Return type

[**Visibility**](Visibility.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


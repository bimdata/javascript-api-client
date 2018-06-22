# bimdata.BcfApi

All URIs are relative to *https://api-beta.bimdata.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bcf21CurrentUserList**](BcfApi.md#bcf21CurrentUserList) | **GET** /bcf/2.1/current-user | 
[**bcf21ProjectsTopicsCommentsEventsDelete**](BcfApi.md#bcf21ProjectsTopicsCommentsEventsDelete) | **DELETE** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/comments/events/{id} | 
[**bcf21ProjectsTopicsCommentsEventsDelete_0**](BcfApi.md#bcf21ProjectsTopicsCommentsEventsDelete_0) | **DELETE** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/comments/{comments_pk}/events/{id} | 
[**bcf21ProjectsTopicsEventsDelete**](BcfApi.md#bcf21ProjectsTopicsEventsDelete) | **DELETE** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/events/{id} | 
[**bcf21ProjectsTopicsViewpointsBitmapDelete**](BcfApi.md#bcf21ProjectsTopicsViewpointsBitmapDelete) | **DELETE** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/bitmap/{id} | 
[**bcf21ProjectsTopicsViewpointsColoringDelete**](BcfApi.md#bcf21ProjectsTopicsViewpointsColoringDelete) | **DELETE** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/coloring/{id} | 
[**bcf21ProjectsTopicsViewpointsDelete**](BcfApi.md#bcf21ProjectsTopicsViewpointsDelete) | **DELETE** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{id} | 
[**bcf21ProjectsTopicsViewpointsSelectionDelete**](BcfApi.md#bcf21ProjectsTopicsViewpointsSelectionDelete) | **DELETE** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/selection/{id} | 
[**bcf21ProjectsTopicsViewpointsVisibilityDelete**](BcfApi.md#bcf21ProjectsTopicsViewpointsVisibilityDelete) | **DELETE** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/visibility/{id} | 
[**createBcfDocument**](BcfApi.md#createBcfDocument) | **POST** /bcf/2.1/projects/{projects_pk}/documents | 
[**createBcfProject**](BcfApi.md#createBcfProject) | **POST** /bcf/2.1/projects | 
[**createBitmap**](BcfApi.md#createBitmap) | **POST** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/bitmap | 
[**createColoring**](BcfApi.md#createColoring) | **POST** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/coloring | 
[**createComment**](BcfApi.md#createComment) | **POST** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/comments | 
[**createCommentEvent**](BcfApi.md#createCommentEvent) | **POST** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/comments/events | 
[**createCommentEvent_0**](BcfApi.md#createCommentEvent_0) | **POST** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/comments/{comments_pk}/events | 
[**createDocumentReference**](BcfApi.md#createDocumentReference) | **POST** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/document_references | 
[**createFile**](BcfApi.md#createFile) | **POST** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/file | 
[**createRelatedTopic**](BcfApi.md#createRelatedTopic) | **POST** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/related_topics | 
[**createSelection**](BcfApi.md#createSelection) | **POST** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/selection | 
[**createSnippet**](BcfApi.md#createSnippet) | **POST** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/snippet | 
[**createTopic**](BcfApi.md#createTopic) | **POST** /bcf/2.1/projects/{projects_pk}/topics | 
[**createTopicEvent**](BcfApi.md#createTopicEvent) | **POST** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/events | 
[**createViewpoint**](BcfApi.md#createViewpoint) | **POST** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints | 
[**createVisibility**](BcfApi.md#createVisibility) | **POST** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/visibility | 
[**deleteBcfDocument**](BcfApi.md#deleteBcfDocument) | **DELETE** /bcf/2.1/projects/{projects_pk}/documents/{id} | 
[**deleteBcfProject**](BcfApi.md#deleteBcfProject) | **DELETE** /bcf/2.1/projects/{id} | 
[**deleteComment**](BcfApi.md#deleteComment) | **DELETE** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/comments/{id} | 
[**deleteDocumentReference**](BcfApi.md#deleteDocumentReference) | **DELETE** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/document_references/{id} | 
[**deleteFile**](BcfApi.md#deleteFile) | **DELETE** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/file/{id} | 
[**deleteRelatedTopic**](BcfApi.md#deleteRelatedTopic) | **DELETE** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/related_topics/{id} | 
[**deleteSnippet**](BcfApi.md#deleteSnippet) | **DELETE** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/snippet/{id} | 
[**deleteTopic**](BcfApi.md#deleteTopic) | **DELETE** /bcf/2.1/projects/{projects_pk}/topics/{id} | 
[**fullUpdateBcfDocument**](BcfApi.md#fullUpdateBcfDocument) | **PUT** /bcf/2.1/projects/{projects_pk}/documents/{id} | 
[**fullUpdateBcfProject**](BcfApi.md#fullUpdateBcfProject) | **PUT** /bcf/2.1/projects/{id} | 
[**fullUpdateBitmap**](BcfApi.md#fullUpdateBitmap) | **PUT** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/bitmap/{id} | 
[**fullUpdateColoring**](BcfApi.md#fullUpdateColoring) | **PUT** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/coloring/{id} | 
[**fullUpdateComment**](BcfApi.md#fullUpdateComment) | **PUT** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/comments/{id} | 
[**fullUpdateCommentEvent**](BcfApi.md#fullUpdateCommentEvent) | **PUT** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/comments/events/{id} | 
[**fullUpdateCommentEvent_0**](BcfApi.md#fullUpdateCommentEvent_0) | **PUT** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/comments/{comments_pk}/events/{id} | 
[**fullUpdateDocumentReference**](BcfApi.md#fullUpdateDocumentReference) | **PUT** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/document_references/{id} | 
[**fullUpdateFile**](BcfApi.md#fullUpdateFile) | **PUT** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/file/{id} | 
[**fullUpdateRelatedTopic**](BcfApi.md#fullUpdateRelatedTopic) | **PUT** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/related_topics/{id} | 
[**fullUpdateSelection**](BcfApi.md#fullUpdateSelection) | **PUT** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/selection/{id} | 
[**fullUpdateSnippet**](BcfApi.md#fullUpdateSnippet) | **PUT** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/snippet/{id} | 
[**fullUpdateTopic**](BcfApi.md#fullUpdateTopic) | **PUT** /bcf/2.1/projects/{projects_pk}/topics/{id} | 
[**fullUpdateTopicEvent**](BcfApi.md#fullUpdateTopicEvent) | **PUT** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/events/{id} | 
[**fullUpdateViewpoint**](BcfApi.md#fullUpdateViewpoint) | **PUT** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{id} | 
[**fullUpdateVisibility**](BcfApi.md#fullUpdateVisibility) | **PUT** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/visibility/{id} | 
[**getAllCommentsEvents**](BcfApi.md#getAllCommentsEvents) | **GET** /bcf/2.1/projects/{projects_pk}/topics/comments/events | 
[**getAllTopicsEvents**](BcfApi.md#getAllTopicsEvents) | **GET** /bcf/2.1/projects/{projects_pk}/topics/events | 
[**getBcfDocument**](BcfApi.md#getBcfDocument) | **GET** /bcf/2.1/projects/{projects_pk}/documents/{id} | 
[**getBcfDocuments**](BcfApi.md#getBcfDocuments) | **GET** /bcf/2.1/projects/{projects_pk}/documents | 
[**getBcfProject**](BcfApi.md#getBcfProject) | **GET** /bcf/2.1/projects/{id} | 
[**getBcfProjects**](BcfApi.md#getBcfProjects) | **GET** /bcf/2.1/projects | 
[**getBitmap**](BcfApi.md#getBitmap) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/bitmap/{id} | 
[**getBitmaps**](BcfApi.md#getBitmaps) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/bitmap | 
[**getColoring**](BcfApi.md#getColoring) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/coloring/{id} | 
[**getColorings**](BcfApi.md#getColorings) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/coloring | 
[**getComment**](BcfApi.md#getComment) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/comments/{id} | 
[**getCommentEvent**](BcfApi.md#getCommentEvent) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/comments/events/{id} | 
[**getCommentEvent_0**](BcfApi.md#getCommentEvent_0) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/comments/{comments_pk}/events/{id} | 
[**getCommentEvents**](BcfApi.md#getCommentEvents) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/comments/events | 
[**getCommentEvents_0**](BcfApi.md#getCommentEvents_0) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/comments/{comments_pk}/events | 
[**getComments**](BcfApi.md#getComments) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/comments | 
[**getDocumentReference**](BcfApi.md#getDocumentReference) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/document_references/{id} | 
[**getDocumentReferences**](BcfApi.md#getDocumentReferences) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/document_references | 
[**getExtensions**](BcfApi.md#getExtensions) | **GET** /bcf/2.1/projects/{projects_pk}/extensions | 
[**getFile**](BcfApi.md#getFile) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/file/{id} | 
[**getFiles**](BcfApi.md#getFiles) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/file | 
[**getRelatedTopic**](BcfApi.md#getRelatedTopic) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/related_topics/{id} | 
[**getRelatedTopics**](BcfApi.md#getRelatedTopics) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/related_topics | 
[**getSelection**](BcfApi.md#getSelection) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/selection/{id} | 
[**getSelections**](BcfApi.md#getSelections) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/selection | 
[**getSnapshots**](BcfApi.md#getSnapshots) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/snapshot | 
[**getSnippet**](BcfApi.md#getSnippet) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/snippet/{id} | 
[**getSnippets**](BcfApi.md#getSnippets) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/snippet | 
[**getTopic**](BcfApi.md#getTopic) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{id} | 
[**getTopicEvent**](BcfApi.md#getTopicEvent) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/events/{id} | 
[**getTopicEvents**](BcfApi.md#getTopicEvents) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/events | 
[**getTopics**](BcfApi.md#getTopics) | **GET** /bcf/2.1/projects/{projects_pk}/topics | 
[**getViewpoint**](BcfApi.md#getViewpoint) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{id} | 
[**getViewpoints**](BcfApi.md#getViewpoints) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints | 
[**getVisibilities**](BcfApi.md#getVisibilities) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/visibility | 
[**getVisibility**](BcfApi.md#getVisibility) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/visibility/{id} | 
[**updateBcfDocument**](BcfApi.md#updateBcfDocument) | **PATCH** /bcf/2.1/projects/{projects_pk}/documents/{id} | 
[**updateBcfProject**](BcfApi.md#updateBcfProject) | **PATCH** /bcf/2.1/projects/{id} | 
[**updateBitmap**](BcfApi.md#updateBitmap) | **PATCH** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/bitmap/{id} | 
[**updateColoring**](BcfApi.md#updateColoring) | **PATCH** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/coloring/{id} | 
[**updateComment**](BcfApi.md#updateComment) | **PATCH** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/comments/{id} | 
[**updateCommentEvent**](BcfApi.md#updateCommentEvent) | **PATCH** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/comments/events/{id} | 
[**updateCommentEvent_0**](BcfApi.md#updateCommentEvent_0) | **PATCH** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/comments/{comments_pk}/events/{id} | 
[**updateDocumentReference**](BcfApi.md#updateDocumentReference) | **PATCH** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/document_references/{id} | 
[**updateFile**](BcfApi.md#updateFile) | **PATCH** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/file/{id} | 
[**updateRelatedTopic**](BcfApi.md#updateRelatedTopic) | **PATCH** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/related_topics/{id} | 
[**updateSelection**](BcfApi.md#updateSelection) | **PATCH** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/selection/{id} | 
[**updateSnippet**](BcfApi.md#updateSnippet) | **PATCH** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/snippet/{id} | 
[**updateTopic**](BcfApi.md#updateTopic) | **PATCH** /bcf/2.1/projects/{projects_pk}/topics/{id} | 
[**updateTopicEvent**](BcfApi.md#updateTopicEvent) | **PATCH** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/events/{id} | 
[**updateViewpoint**](BcfApi.md#updateViewpoint) | **PATCH** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{id} | 
[**updateVisibility**](BcfApi.md#updateVisibility) | **PATCH** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/visibility/{id} | 


<a name="bcf21CurrentUserList"></a>
# **bcf21CurrentUserList**
> [SelfUser] bcf21CurrentUserList()





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
apiInstance.bcf21CurrentUserList().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[SelfUser]**](SelfUser.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsCommentsEventsDelete"></a>
# **bcf21ProjectsTopicsCommentsEventsDelete**
> bcf21ProjectsTopicsCommentsEventsDelete(id, projectsPk, topicsPk, )





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

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

apiInstance.bcf21ProjectsTopicsCommentsEventsDelete(id, projectsPk, topicsPk, ).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsCommentsEventsDelete_0"></a>
# **bcf21ProjectsTopicsCommentsEventsDelete_0**
> bcf21ProjectsTopicsCommentsEventsDelete_0(commentsPk, id, projectsPk, topicsPk, )





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

var commentsPk = "commentsPk_example"; // String | 

var id = "id_example"; // String | 

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

apiInstance.bcf21ProjectsTopicsCommentsEventsDelete_0(commentsPk, id, projectsPk, topicsPk, ).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commentsPk** | **String**|  | 
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsEventsDelete"></a>
# **bcf21ProjectsTopicsEventsDelete**
> bcf21ProjectsTopicsEventsDelete(id, projectsPk, topicsPk, )





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

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

apiInstance.bcf21ProjectsTopicsEventsDelete(id, projectsPk, topicsPk, ).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsViewpointsBitmapDelete"></a>
# **bcf21ProjectsTopicsViewpointsBitmapDelete**
> bcf21ProjectsTopicsViewpointsBitmapDelete(id, projectsPk, topicsPk, viewpointsPk, )





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

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var viewpointsPk = "viewpointsPk_example"; // String | 

apiInstance.bcf21ProjectsTopicsViewpointsBitmapDelete(id, projectsPk, topicsPk, viewpointsPk, ).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **viewpointsPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsViewpointsColoringDelete"></a>
# **bcf21ProjectsTopicsViewpointsColoringDelete**
> bcf21ProjectsTopicsViewpointsColoringDelete(id, projectsPk, topicsPk, viewpointsPk, )





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

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var viewpointsPk = "viewpointsPk_example"; // String | 

apiInstance.bcf21ProjectsTopicsViewpointsColoringDelete(id, projectsPk, topicsPk, viewpointsPk, ).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **viewpointsPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsViewpointsDelete"></a>
# **bcf21ProjectsTopicsViewpointsDelete**
> bcf21ProjectsTopicsViewpointsDelete(id, projectsPk, topicsPk, )





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

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

apiInstance.bcf21ProjectsTopicsViewpointsDelete(id, projectsPk, topicsPk, ).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsViewpointsSelectionDelete"></a>
# **bcf21ProjectsTopicsViewpointsSelectionDelete**
> bcf21ProjectsTopicsViewpointsSelectionDelete(id, projectsPk, topicsPk, viewpointsPk, )





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

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var viewpointsPk = "viewpointsPk_example"; // String | 

apiInstance.bcf21ProjectsTopicsViewpointsSelectionDelete(id, projectsPk, topicsPk, viewpointsPk, ).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **viewpointsPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsViewpointsVisibilityDelete"></a>
# **bcf21ProjectsTopicsViewpointsVisibilityDelete**
> bcf21ProjectsTopicsViewpointsVisibilityDelete(id, projectsPk, topicsPk, viewpointsPk, )





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

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var viewpointsPk = "viewpointsPk_example"; // String | 

apiInstance.bcf21ProjectsTopicsViewpointsVisibilityDelete(id, projectsPk, topicsPk, viewpointsPk, ).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **viewpointsPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createBcfDocument"></a>
# **createBcfDocument**
> createBcfDocument(projectsPk, opts)





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
  'guid': "guid_example", // String | 
  'filename': "filename_example" // String | 
};
apiInstance.createBcfDocument(projectsPk, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **guid** | [**String**](.md)|  | [optional] 
 **filename** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="createBcfProject"></a>
# **createBcfProject**
> BcfProject createBcfProject(data)





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

var data = new bimdata.BcfProject(); // BcfProject | 

apiInstance.createBcfProject(data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**BcfProject**](BcfProject.md)|  | 

### Return type

[**BcfProject**](BcfProject.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createBitmap"></a>
# **createBitmap**
> Bitmap createBitmap(projectsPk, topicsPk, viewpointsPk, data)





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

var data = new bimdata.Bitmap(); // Bitmap | 

apiInstance.createBitmap(projectsPk, topicsPk, viewpointsPk, data).then(function(data) {
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
 **data** | [**Bitmap**](Bitmap.md)|  | 

### Return type

[**Bitmap**](Bitmap.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createColoring"></a>
# **createColoring**
> Coloring createColoring(projectsPk, topicsPk, viewpointsPk, data)





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

var data = new bimdata.Coloring(); // Coloring | 

apiInstance.createColoring(projectsPk, topicsPk, viewpointsPk, data).then(function(data) {
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
 **data** | [**Coloring**](Coloring.md)|  | 

### Return type

[**Coloring**](Coloring.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createComment"></a>
# **createComment**
> Comment createComment(projectsPk, topicsPk, data)





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

var data = new bimdata.Comment(); // Comment | 

apiInstance.createComment(projectsPk, topicsPk, data).then(function(data) {
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
 **data** | [**Comment**](Comment.md)|  | 

### Return type

[**Comment**](Comment.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createCommentEvent"></a>
# **createCommentEvent**
> CommentEvent createCommentEvent(projectsPk, topicsPk, data)





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

var data = new bimdata.CommentEvent(); // CommentEvent | 

apiInstance.createCommentEvent(projectsPk, topicsPk, data).then(function(data) {
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
 **data** | [**CommentEvent**](CommentEvent.md)|  | 

### Return type

[**CommentEvent**](CommentEvent.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createCommentEvent_0"></a>
# **createCommentEvent_0**
> CommentEvent createCommentEvent_0(commentsPk, projectsPk, topicsPk, data)





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

var commentsPk = "commentsPk_example"; // String | 

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var data = new bimdata.CommentEvent(); // CommentEvent | 

apiInstance.createCommentEvent_0(commentsPk, projectsPk, topicsPk, data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commentsPk** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **data** | [**CommentEvent**](CommentEvent.md)|  | 

### Return type

[**CommentEvent**](CommentEvent.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createDocumentReference"></a>
# **createDocumentReference**
> DocumentReference createDocumentReference(projectsPk, topicsPk, data)





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

var data = new bimdata.DocumentReference(); // DocumentReference | 

apiInstance.createDocumentReference(projectsPk, topicsPk, data).then(function(data) {
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
 **data** | [**DocumentReference**](DocumentReference.md)|  | 

### Return type

[**DocumentReference**](DocumentReference.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createFile"></a>
# **createFile**
> BimSnippet createFile(projectsPk, topicsPk, data)





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

var data = new bimdata.BimSnippet(); // BimSnippet | 

apiInstance.createFile(projectsPk, topicsPk, data).then(function(data) {
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
 **data** | [**BimSnippet**](BimSnippet.md)|  | 

### Return type

[**BimSnippet**](BimSnippet.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createRelatedTopic"></a>
# **createRelatedTopic**
> RelatedTopic createRelatedTopic(projectsPk, topicsPk, data)





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

var data = new bimdata.RelatedTopic(); // RelatedTopic | 

apiInstance.createRelatedTopic(projectsPk, topicsPk, data).then(function(data) {
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
 **data** | [**RelatedTopic**](RelatedTopic.md)|  | 

### Return type

[**RelatedTopic**](RelatedTopic.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createSelection"></a>
# **createSelection**
> Component createSelection(projectsPk, topicsPk, viewpointsPk, data)





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

var data = new bimdata.Component(); // Component | 

apiInstance.createSelection(projectsPk, topicsPk, viewpointsPk, data).then(function(data) {
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
 **data** | [**Component**](Component.md)|  | 

### Return type

[**Component**](Component.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createSnippet"></a>
# **createSnippet**
> BimSnippet createSnippet(projectsPk, topicsPk, data)





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

var data = new bimdata.BimSnippet(); // BimSnippet | 

apiInstance.createSnippet(projectsPk, topicsPk, data).then(function(data) {
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
 **data** | [**BimSnippet**](BimSnippet.md)|  | 

### Return type

[**BimSnippet**](BimSnippet.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createTopic"></a>
# **createTopic**
> Topic createTopic(projectsPk, data)





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

var data = new bimdata.Topic(); // Topic | 

apiInstance.createTopic(projectsPk, data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **data** | [**Topic**](Topic.md)|  | 

### Return type

[**Topic**](Topic.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createTopicEvent"></a>
# **createTopicEvent**
> TopicEvents createTopicEvent(projectsPk, topicsPk, data)





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

var data = new bimdata.TopicEvents(); // TopicEvents | 

apiInstance.createTopicEvent(projectsPk, topicsPk, data).then(function(data) {
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
 **data** | [**TopicEvents**](TopicEvents.md)|  | 

### Return type

[**TopicEvents**](TopicEvents.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createViewpoint"></a>
# **createViewpoint**
> Viewpoint createViewpoint(projectsPk, topicsPk, data)





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

var data = new bimdata.Viewpoint(); // Viewpoint | 

apiInstance.createViewpoint(projectsPk, topicsPk, data).then(function(data) {
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
 **data** | [**Viewpoint**](Viewpoint.md)|  | 

### Return type

[**Viewpoint**](Viewpoint.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createVisibility"></a>
# **createVisibility**
> Visibility createVisibility(projectsPk, topicsPk, viewpointsPk, data)





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

var data = new bimdata.Visibility(); // Visibility | 

apiInstance.createVisibility(projectsPk, topicsPk, viewpointsPk, data).then(function(data) {
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
 **data** | [**Visibility**](Visibility.md)|  | 

### Return type

[**Visibility**](Visibility.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteBcfDocument"></a>
# **deleteBcfDocument**
> deleteBcfDocument(id, projectsPk)





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

var projectsPk = "projectsPk_example"; // String | 

apiInstance.deleteBcfDocument(id, projectsPk).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="deleteBcfProject"></a>
# **deleteBcfProject**
> deleteBcfProject(id, )





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

apiInstance.deleteBcfProject(id, ).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteComment"></a>
# **deleteComment**
> deleteComment(id, projectsPk, topicsPk, )





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

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

apiInstance.deleteComment(id, projectsPk, topicsPk, ).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteDocumentReference"></a>
# **deleteDocumentReference**
> deleteDocumentReference(id, projectsPk, topicsPk, )





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

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

apiInstance.deleteDocumentReference(id, projectsPk, topicsPk, ).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteFile"></a>
# **deleteFile**
> deleteFile(id, projectsPk, topicsPk, )





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

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

apiInstance.deleteFile(id, projectsPk, topicsPk, ).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteRelatedTopic"></a>
# **deleteRelatedTopic**
> deleteRelatedTopic(id, projectsPk, topicsPk, )





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

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

apiInstance.deleteRelatedTopic(id, projectsPk, topicsPk, ).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteSnippet"></a>
# **deleteSnippet**
> deleteSnippet(id, projectsPk, topicsPk, )





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

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

apiInstance.deleteSnippet(id, projectsPk, topicsPk, ).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteTopic"></a>
# **deleteTopic**
> deleteTopic(id, projectsPk, )





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

var projectsPk = "projectsPk_example"; // String | 

apiInstance.deleteTopic(id, projectsPk, ).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdateBcfDocument"></a>
# **fullUpdateBcfDocument**
> fullUpdateBcfDocument(id, projectsPk, opts)





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

var projectsPk = "projectsPk_example"; // String | 

var opts = { 
  'guid': "guid_example", // String | 
  'filename': "filename_example" // String | 
};
apiInstance.fullUpdateBcfDocument(id, projectsPk, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **guid** | [**String**](.md)|  | [optional] 
 **filename** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="fullUpdateBcfProject"></a>
# **fullUpdateBcfProject**
> BcfProject fullUpdateBcfProject(id, data)





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

var data = new bimdata.BcfProject(); // BcfProject | 

apiInstance.fullUpdateBcfProject(id, data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **data** | [**BcfProject**](BcfProject.md)|  | 

### Return type

[**BcfProject**](BcfProject.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdateBitmap"></a>
# **fullUpdateBitmap**
> Bitmap fullUpdateBitmap(id, projectsPk, topicsPk, viewpointsPk, data)





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

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var viewpointsPk = "viewpointsPk_example"; // String | 

var data = new bimdata.Bitmap(); // Bitmap | 

apiInstance.fullUpdateBitmap(id, projectsPk, topicsPk, viewpointsPk, data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **viewpointsPk** | **String**|  | 
 **data** | [**Bitmap**](Bitmap.md)|  | 

### Return type

[**Bitmap**](Bitmap.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdateColoring"></a>
# **fullUpdateColoring**
> Coloring fullUpdateColoring(id, projectsPk, topicsPk, viewpointsPk, data)





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

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var viewpointsPk = "viewpointsPk_example"; // String | 

var data = new bimdata.Coloring(); // Coloring | 

apiInstance.fullUpdateColoring(id, projectsPk, topicsPk, viewpointsPk, data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **viewpointsPk** | **String**|  | 
 **data** | [**Coloring**](Coloring.md)|  | 

### Return type

[**Coloring**](Coloring.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdateComment"></a>
# **fullUpdateComment**
> Comment fullUpdateComment(id, projectsPk, topicsPk, data)





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

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var data = new bimdata.Comment(); // Comment | 

apiInstance.fullUpdateComment(id, projectsPk, topicsPk, data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **data** | [**Comment**](Comment.md)|  | 

### Return type

[**Comment**](Comment.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdateCommentEvent"></a>
# **fullUpdateCommentEvent**
> CommentEvent fullUpdateCommentEvent(id, projectsPk, topicsPk, data)





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

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var data = new bimdata.CommentEvent(); // CommentEvent | 

apiInstance.fullUpdateCommentEvent(id, projectsPk, topicsPk, data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **data** | [**CommentEvent**](CommentEvent.md)|  | 

### Return type

[**CommentEvent**](CommentEvent.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdateCommentEvent_0"></a>
# **fullUpdateCommentEvent_0**
> CommentEvent fullUpdateCommentEvent_0(commentsPk, id, projectsPk, topicsPk, data)





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

var commentsPk = "commentsPk_example"; // String | 

var id = "id_example"; // String | 

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var data = new bimdata.CommentEvent(); // CommentEvent | 

apiInstance.fullUpdateCommentEvent_0(commentsPk, id, projectsPk, topicsPk, data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commentsPk** | **String**|  | 
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **data** | [**CommentEvent**](CommentEvent.md)|  | 

### Return type

[**CommentEvent**](CommentEvent.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdateDocumentReference"></a>
# **fullUpdateDocumentReference**
> DocumentReference fullUpdateDocumentReference(id, projectsPk, topicsPk, data)





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

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var data = new bimdata.DocumentReference(); // DocumentReference | 

apiInstance.fullUpdateDocumentReference(id, projectsPk, topicsPk, data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **data** | [**DocumentReference**](DocumentReference.md)|  | 

### Return type

[**DocumentReference**](DocumentReference.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdateFile"></a>
# **fullUpdateFile**
> BimSnippet fullUpdateFile(id, projectsPk, topicsPk, data)





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

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var data = new bimdata.BimSnippet(); // BimSnippet | 

apiInstance.fullUpdateFile(id, projectsPk, topicsPk, data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **data** | [**BimSnippet**](BimSnippet.md)|  | 

### Return type

[**BimSnippet**](BimSnippet.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdateRelatedTopic"></a>
# **fullUpdateRelatedTopic**
> RelatedTopic fullUpdateRelatedTopic(id, projectsPk, topicsPk, data)





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

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var data = new bimdata.RelatedTopic(); // RelatedTopic | 

apiInstance.fullUpdateRelatedTopic(id, projectsPk, topicsPk, data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **data** | [**RelatedTopic**](RelatedTopic.md)|  | 

### Return type

[**RelatedTopic**](RelatedTopic.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdateSelection"></a>
# **fullUpdateSelection**
> Component fullUpdateSelection(id, projectsPk, topicsPk, viewpointsPk, data)





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

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var viewpointsPk = "viewpointsPk_example"; // String | 

var data = new bimdata.Component(); // Component | 

apiInstance.fullUpdateSelection(id, projectsPk, topicsPk, viewpointsPk, data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **viewpointsPk** | **String**|  | 
 **data** | [**Component**](Component.md)|  | 

### Return type

[**Component**](Component.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdateSnippet"></a>
# **fullUpdateSnippet**
> BimSnippet fullUpdateSnippet(id, projectsPk, topicsPk, data)





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

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var data = new bimdata.BimSnippet(); // BimSnippet | 

apiInstance.fullUpdateSnippet(id, projectsPk, topicsPk, data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **data** | [**BimSnippet**](BimSnippet.md)|  | 

### Return type

[**BimSnippet**](BimSnippet.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdateTopic"></a>
# **fullUpdateTopic**
> Topic fullUpdateTopic(id, projectsPk, data)





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

var projectsPk = "projectsPk_example"; // String | 

var data = new bimdata.Topic(); // Topic | 

apiInstance.fullUpdateTopic(id, projectsPk, data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **data** | [**Topic**](Topic.md)|  | 

### Return type

[**Topic**](Topic.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdateTopicEvent"></a>
# **fullUpdateTopicEvent**
> TopicEvents fullUpdateTopicEvent(id, projectsPk, topicsPk, data)





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

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var data = new bimdata.TopicEvents(); // TopicEvents | 

apiInstance.fullUpdateTopicEvent(id, projectsPk, topicsPk, data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **data** | [**TopicEvents**](TopicEvents.md)|  | 

### Return type

[**TopicEvents**](TopicEvents.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdateViewpoint"></a>
# **fullUpdateViewpoint**
> Viewpoint fullUpdateViewpoint(id, projectsPk, topicsPk, data)





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

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var data = new bimdata.Viewpoint(); // Viewpoint | 

apiInstance.fullUpdateViewpoint(id, projectsPk, topicsPk, data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **data** | [**Viewpoint**](Viewpoint.md)|  | 

### Return type

[**Viewpoint**](Viewpoint.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdateVisibility"></a>
# **fullUpdateVisibility**
> Visibility fullUpdateVisibility(id, projectsPk, topicsPk, viewpointsPk, data)





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

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var viewpointsPk = "viewpointsPk_example"; // String | 

var data = new bimdata.Visibility(); // Visibility | 

apiInstance.fullUpdateVisibility(id, projectsPk, topicsPk, viewpointsPk, data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **viewpointsPk** | **String**|  | 
 **data** | [**Visibility**](Visibility.md)|  | 

### Return type

[**Visibility**](Visibility.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllCommentsEvents"></a>
# **getAllCommentsEvents**
> [CommentEvent] getAllCommentsEvents(projectsPk)





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

apiInstance.getAllCommentsEvents(projectsPk).then(function(data) {
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

[**[CommentEvent]**](CommentEvent.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllTopicsEvents"></a>
# **getAllTopicsEvents**
> [TopicEvents] getAllTopicsEvents(projectsPk)





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

apiInstance.getAllTopicsEvents(projectsPk).then(function(data) {
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

[**[TopicEvents]**](TopicEvents.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getBcfDocument"></a>
# **getBcfDocument**
> getBcfDocument(id, projectsPk)





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

var projectsPk = "projectsPk_example"; // String | 

apiInstance.getBcfDocument(id, projectsPk).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getBcfDocuments"></a>
# **getBcfDocuments**
> getBcfDocuments(projectsPk)





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

apiInstance.getBcfDocuments(projectsPk).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getBcfProject"></a>
# **getBcfProject**
> BcfProject getBcfProject(id, )





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

apiInstance.getBcfProject(id, ).then(function(data) {
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

 - **Content-Type**: application/json
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getBitmap"></a>
# **getBitmap**
> Bitmap getBitmap(id, projectsPk, topicsPk, viewpointsPk, )





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

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var viewpointsPk = "viewpointsPk_example"; // String | 

apiInstance.getBitmap(id, projectsPk, topicsPk, viewpointsPk, ).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **viewpointsPk** | **String**|  | 

### Return type

[**Bitmap**](Bitmap.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getBitmaps"></a>
# **getBitmaps**
> [Bitmap] getBitmaps(projectsPk, topicsPk, viewpointsPk, )





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

apiInstance.getBitmaps(projectsPk, topicsPk, viewpointsPk, ).then(function(data) {
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

[**[Bitmap]**](Bitmap.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getColoring"></a>
# **getColoring**
> Coloring getColoring(id, projectsPk, topicsPk, viewpointsPk, )





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

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var viewpointsPk = "viewpointsPk_example"; // String | 

apiInstance.getColoring(id, projectsPk, topicsPk, viewpointsPk, ).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **viewpointsPk** | **String**|  | 

### Return type

[**Coloring**](Coloring.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getColorings"></a>
# **getColorings**
> [Coloring] getColorings(projectsPk, topicsPk, viewpointsPk, )





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

apiInstance.getColorings(projectsPk, topicsPk, viewpointsPk, ).then(function(data) {
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getComment"></a>
# **getComment**
> Comment getComment(id, projectsPk, topicsPk, )





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

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

apiInstance.getComment(id, projectsPk, topicsPk, ).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 

### Return type

[**Comment**](Comment.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCommentEvent"></a>
# **getCommentEvent**
> CommentEvent getCommentEvent(id, projectsPk, topicsPk, )





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

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

apiInstance.getCommentEvent(id, projectsPk, topicsPk, ).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 

### Return type

[**CommentEvent**](CommentEvent.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCommentEvent_0"></a>
# **getCommentEvent_0**
> CommentEvent getCommentEvent_0(commentsPk, id, projectsPk, topicsPk, )





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

var commentsPk = "commentsPk_example"; // String | 

var id = "id_example"; // String | 

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

apiInstance.getCommentEvent_0(commentsPk, id, projectsPk, topicsPk, ).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commentsPk** | **String**|  | 
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 

### Return type

[**CommentEvent**](CommentEvent.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCommentEvents"></a>
# **getCommentEvents**
> [CommentEvent] getCommentEvents(projectsPk, topicsPk, )





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

apiInstance.getCommentEvents(projectsPk, topicsPk, ).then(function(data) {
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

[**[CommentEvent]**](CommentEvent.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCommentEvents_0"></a>
# **getCommentEvents_0**
> [CommentEvent] getCommentEvents_0(commentsPk, projectsPk, topicsPk, )





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

var commentsPk = "commentsPk_example"; // String | 

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

apiInstance.getCommentEvents_0(commentsPk, projectsPk, topicsPk, ).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commentsPk** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 

### Return type

[**[CommentEvent]**](CommentEvent.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getComments"></a>
# **getComments**
> [Comment] getComments(projectsPk, topicsPk, )





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

apiInstance.getComments(projectsPk, topicsPk, ).then(function(data) {
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDocumentReference"></a>
# **getDocumentReference**
> DocumentReference getDocumentReference(id, projectsPk, topicsPk, )





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

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

apiInstance.getDocumentReference(id, projectsPk, topicsPk, ).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 

### Return type

[**DocumentReference**](DocumentReference.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDocumentReferences"></a>
# **getDocumentReferences**
> [DocumentReference] getDocumentReferences(projectsPk, topicsPk, )





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

apiInstance.getDocumentReferences(projectsPk, topicsPk, ).then(function(data) {
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

[**[DocumentReference]**](DocumentReference.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getExtensions"></a>
# **getExtensions**
> [Extensions] getExtensions(projectsPk)





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

[**[Extensions]**](Extensions.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFile"></a>
# **getFile**
> BimSnippet getFile(id, projectsPk, topicsPk, )





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

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

apiInstance.getFile(id, projectsPk, topicsPk, ).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 

### Return type

[**BimSnippet**](BimSnippet.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFiles"></a>
# **getFiles**
> [BimSnippet] getFiles(projectsPk, topicsPk, )





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

apiInstance.getFiles(projectsPk, topicsPk, ).then(function(data) {
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

[**[BimSnippet]**](BimSnippet.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRelatedTopic"></a>
# **getRelatedTopic**
> RelatedTopic getRelatedTopic(id, projectsPk, topicsPk, )





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

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

apiInstance.getRelatedTopic(id, projectsPk, topicsPk, ).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 

### Return type

[**RelatedTopic**](RelatedTopic.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRelatedTopics"></a>
# **getRelatedTopics**
> [RelatedTopic] getRelatedTopics(projectsPk, topicsPk, )





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

apiInstance.getRelatedTopics(projectsPk, topicsPk, ).then(function(data) {
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

[**[RelatedTopic]**](RelatedTopic.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSelection"></a>
# **getSelection**
> Component getSelection(id, projectsPk, topicsPk, viewpointsPk, )





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

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var viewpointsPk = "viewpointsPk_example"; // String | 

apiInstance.getSelection(id, projectsPk, topicsPk, viewpointsPk, ).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **viewpointsPk** | **String**|  | 

### Return type

[**Component**](Component.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSelections"></a>
# **getSelections**
> [Component] getSelections(projectsPk, topicsPk, viewpointsPk, )





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

apiInstance.getSelections(projectsPk, topicsPk, viewpointsPk, ).then(function(data) {
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSnapshots"></a>
# **getSnapshots**
> [Snapshot] getSnapshots(projectsPk, topicsPk, viewpointsPk)





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

apiInstance.getSnapshots(projectsPk, topicsPk, viewpointsPk).then(function(data) {
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

[**[Snapshot]**](Snapshot.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSnippet"></a>
# **getSnippet**
> BimSnippet getSnippet(id, projectsPk, topicsPk, )





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

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

apiInstance.getSnippet(id, projectsPk, topicsPk, ).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 

### Return type

[**BimSnippet**](BimSnippet.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSnippets"></a>
# **getSnippets**
> [BimSnippet] getSnippets(projectsPk, topicsPk, )





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

apiInstance.getSnippets(projectsPk, topicsPk, ).then(function(data) {
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

[**[BimSnippet]**](BimSnippet.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTopic"></a>
# **getTopic**
> Topic getTopic(id, projectsPk, )





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

var projectsPk = "projectsPk_example"; // String | 

apiInstance.getTopic(id, projectsPk, ).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 

### Return type

[**Topic**](Topic.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTopicEvent"></a>
# **getTopicEvent**
> TopicEvents getTopicEvent(id, projectsPk, topicsPk, )





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

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

apiInstance.getTopicEvent(id, projectsPk, topicsPk, ).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 

### Return type

[**TopicEvents**](TopicEvents.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTopicEvents"></a>
# **getTopicEvents**
> [TopicEvents] getTopicEvents(projectsPk, topicsPk, )





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

apiInstance.getTopicEvents(projectsPk, topicsPk, ).then(function(data) {
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

[**[TopicEvents]**](TopicEvents.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTopics"></a>
# **getTopics**
> [Topic] getTopics(projectsPk, )





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

apiInstance.getTopics(projectsPk, ).then(function(data) {
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

[**[Topic]**](Topic.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getViewpoint"></a>
# **getViewpoint**
> Viewpoint getViewpoint(id, projectsPk, topicsPk, )





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

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

apiInstance.getViewpoint(id, projectsPk, topicsPk, ).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 

### Return type

[**Viewpoint**](Viewpoint.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getViewpoints"></a>
# **getViewpoints**
> [Viewpoint] getViewpoints(projectsPk, topicsPk, )





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

apiInstance.getViewpoints(projectsPk, topicsPk, ).then(function(data) {
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getVisibilities"></a>
# **getVisibilities**
> [Visibility] getVisibilities(projectsPk, topicsPk, viewpointsPk, )





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

apiInstance.getVisibilities(projectsPk, topicsPk, viewpointsPk, ).then(function(data) {
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getVisibility"></a>
# **getVisibility**
> Visibility getVisibility(id, projectsPk, topicsPk, viewpointsPk, )





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

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var viewpointsPk = "viewpointsPk_example"; // String | 

apiInstance.getVisibility(id, projectsPk, topicsPk, viewpointsPk, ).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **viewpointsPk** | **String**|  | 

### Return type

[**Visibility**](Visibility.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateBcfDocument"></a>
# **updateBcfDocument**
> updateBcfDocument(id, projectsPk, opts)





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

var projectsPk = "projectsPk_example"; // String | 

var opts = { 
  'guid': "guid_example", // String | 
  'filename': "filename_example" // String | 
};
apiInstance.updateBcfDocument(id, projectsPk, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **guid** | [**String**](.md)|  | [optional] 
 **filename** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="updateBcfProject"></a>
# **updateBcfProject**
> BcfProject updateBcfProject(id, data)





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

var data = new bimdata.BcfProject(); // BcfProject | 

apiInstance.updateBcfProject(id, data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **data** | [**BcfProject**](BcfProject.md)|  | 

### Return type

[**BcfProject**](BcfProject.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateBitmap"></a>
# **updateBitmap**
> Bitmap updateBitmap(id, projectsPk, topicsPk, viewpointsPk, data)





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

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var viewpointsPk = "viewpointsPk_example"; // String | 

var data = new bimdata.Bitmap(); // Bitmap | 

apiInstance.updateBitmap(id, projectsPk, topicsPk, viewpointsPk, data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **viewpointsPk** | **String**|  | 
 **data** | [**Bitmap**](Bitmap.md)|  | 

### Return type

[**Bitmap**](Bitmap.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateColoring"></a>
# **updateColoring**
> Coloring updateColoring(id, projectsPk, topicsPk, viewpointsPk, data)





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

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var viewpointsPk = "viewpointsPk_example"; // String | 

var data = new bimdata.Coloring(); // Coloring | 

apiInstance.updateColoring(id, projectsPk, topicsPk, viewpointsPk, data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **viewpointsPk** | **String**|  | 
 **data** | [**Coloring**](Coloring.md)|  | 

### Return type

[**Coloring**](Coloring.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateComment"></a>
# **updateComment**
> Comment updateComment(id, projectsPk, topicsPk, data)





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

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var data = new bimdata.Comment(); // Comment | 

apiInstance.updateComment(id, projectsPk, topicsPk, data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **data** | [**Comment**](Comment.md)|  | 

### Return type

[**Comment**](Comment.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCommentEvent"></a>
# **updateCommentEvent**
> CommentEvent updateCommentEvent(id, projectsPk, topicsPk, data)





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

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var data = new bimdata.CommentEvent(); // CommentEvent | 

apiInstance.updateCommentEvent(id, projectsPk, topicsPk, data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **data** | [**CommentEvent**](CommentEvent.md)|  | 

### Return type

[**CommentEvent**](CommentEvent.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCommentEvent_0"></a>
# **updateCommentEvent_0**
> CommentEvent updateCommentEvent_0(commentsPk, id, projectsPk, topicsPk, data)





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

var commentsPk = "commentsPk_example"; // String | 

var id = "id_example"; // String | 

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var data = new bimdata.CommentEvent(); // CommentEvent | 

apiInstance.updateCommentEvent_0(commentsPk, id, projectsPk, topicsPk, data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commentsPk** | **String**|  | 
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **data** | [**CommentEvent**](CommentEvent.md)|  | 

### Return type

[**CommentEvent**](CommentEvent.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateDocumentReference"></a>
# **updateDocumentReference**
> DocumentReference updateDocumentReference(id, projectsPk, topicsPk, data)





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

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var data = new bimdata.DocumentReference(); // DocumentReference | 

apiInstance.updateDocumentReference(id, projectsPk, topicsPk, data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **data** | [**DocumentReference**](DocumentReference.md)|  | 

### Return type

[**DocumentReference**](DocumentReference.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateFile"></a>
# **updateFile**
> BimSnippet updateFile(id, projectsPk, topicsPk, data)





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

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var data = new bimdata.BimSnippet(); // BimSnippet | 

apiInstance.updateFile(id, projectsPk, topicsPk, data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **data** | [**BimSnippet**](BimSnippet.md)|  | 

### Return type

[**BimSnippet**](BimSnippet.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateRelatedTopic"></a>
# **updateRelatedTopic**
> RelatedTopic updateRelatedTopic(id, projectsPk, topicsPk, data)





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

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var data = new bimdata.RelatedTopic(); // RelatedTopic | 

apiInstance.updateRelatedTopic(id, projectsPk, topicsPk, data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **data** | [**RelatedTopic**](RelatedTopic.md)|  | 

### Return type

[**RelatedTopic**](RelatedTopic.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateSelection"></a>
# **updateSelection**
> Component updateSelection(id, projectsPk, topicsPk, viewpointsPk, data)





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

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var viewpointsPk = "viewpointsPk_example"; // String | 

var data = new bimdata.Component(); // Component | 

apiInstance.updateSelection(id, projectsPk, topicsPk, viewpointsPk, data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **viewpointsPk** | **String**|  | 
 **data** | [**Component**](Component.md)|  | 

### Return type

[**Component**](Component.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateSnippet"></a>
# **updateSnippet**
> BimSnippet updateSnippet(id, projectsPk, topicsPk, data)





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

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var data = new bimdata.BimSnippet(); // BimSnippet | 

apiInstance.updateSnippet(id, projectsPk, topicsPk, data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **data** | [**BimSnippet**](BimSnippet.md)|  | 

### Return type

[**BimSnippet**](BimSnippet.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateTopic"></a>
# **updateTopic**
> Topic updateTopic(id, projectsPk, data)





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

var projectsPk = "projectsPk_example"; // String | 

var data = new bimdata.Topic(); // Topic | 

apiInstance.updateTopic(id, projectsPk, data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **data** | [**Topic**](Topic.md)|  | 

### Return type

[**Topic**](Topic.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateTopicEvent"></a>
# **updateTopicEvent**
> TopicEvents updateTopicEvent(id, projectsPk, topicsPk, data)





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

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var data = new bimdata.TopicEvents(); // TopicEvents | 

apiInstance.updateTopicEvent(id, projectsPk, topicsPk, data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **data** | [**TopicEvents**](TopicEvents.md)|  | 

### Return type

[**TopicEvents**](TopicEvents.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateViewpoint"></a>
# **updateViewpoint**
> Viewpoint updateViewpoint(id, projectsPk, topicsPk, data)





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

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var data = new bimdata.Viewpoint(); // Viewpoint | 

apiInstance.updateViewpoint(id, projectsPk, topicsPk, data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **data** | [**Viewpoint**](Viewpoint.md)|  | 

### Return type

[**Viewpoint**](Viewpoint.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateVisibility"></a>
# **updateVisibility**
> Visibility updateVisibility(id, projectsPk, topicsPk, viewpointsPk, data)





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

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var viewpointsPk = "viewpointsPk_example"; // String | 

var data = new bimdata.Visibility(); // Visibility | 

apiInstance.updateVisibility(id, projectsPk, topicsPk, viewpointsPk, data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **viewpointsPk** | **String**|  | 
 **data** | [**Visibility**](Visibility.md)|  | 

### Return type

[**Visibility**](Visibility.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


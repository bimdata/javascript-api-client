# bimdata.BcfApi

All URIs are relative to *https://api-staging.bimdata.io*

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
[**bcfVersionsDelete**](BcfApi.md#bcfVersionsDelete) | **DELETE** /bcf/versions/{id} | 
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
[**createVersion**](BcfApi.md#createVersion) | **POST** /bcf/versions | 
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
[**fullUpdateVersion**](BcfApi.md#fullUpdateVersion) | **PUT** /bcf/versions/{id} | 
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
[**getVersion**](BcfApi.md#getVersion) | **GET** /bcf/versions/{id} | 
[**getVersions**](BcfApi.md#getVersions) | **GET** /bcf/versions | 
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
[**updateVersion**](BcfApi.md#updateVersion) | **PATCH** /bcf/versions/{id} | 
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

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bcf21CurrentUserList(callback);
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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.bcf21ProjectsTopicsCommentsEventsDelete(id, projectsPk, topicsPk, , callback);
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
> bcf21ProjectsTopicsCommentsEventsDelete_0(id, projectsPk, topicsPk, commentsPk, )





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

var commentsPk = "commentsPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.bcf21ProjectsTopicsCommentsEventsDelete_0(id, projectsPk, topicsPk, commentsPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **commentsPk** | **String**|  | 

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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.bcf21ProjectsTopicsEventsDelete(id, projectsPk, topicsPk, , callback);
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
> bcf21ProjectsTopicsViewpointsBitmapDelete(viewpointsPk, id, projectsPk, topicsPk, )





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

var viewpointsPk = "viewpointsPk_example"; // String | 

var id = "id_example"; // String | 

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.bcf21ProjectsTopicsViewpointsBitmapDelete(viewpointsPk, id, projectsPk, topicsPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewpointsPk** | **String**|  | 
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

<a name="bcf21ProjectsTopicsViewpointsColoringDelete"></a>
# **bcf21ProjectsTopicsViewpointsColoringDelete**
> bcf21ProjectsTopicsViewpointsColoringDelete(viewpointsPk, id, projectsPk, topicsPk, )





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

var viewpointsPk = "viewpointsPk_example"; // String | 

var id = "id_example"; // String | 

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.bcf21ProjectsTopicsViewpointsColoringDelete(viewpointsPk, id, projectsPk, topicsPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewpointsPk** | **String**|  | 
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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.bcf21ProjectsTopicsViewpointsDelete(id, projectsPk, topicsPk, , callback);
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
> bcf21ProjectsTopicsViewpointsSelectionDelete(viewpointsPk, id, projectsPk, topicsPk, )





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

var viewpointsPk = "viewpointsPk_example"; // String | 

var id = "id_example"; // String | 

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.bcf21ProjectsTopicsViewpointsSelectionDelete(viewpointsPk, id, projectsPk, topicsPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewpointsPk** | **String**|  | 
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

<a name="bcf21ProjectsTopicsViewpointsVisibilityDelete"></a>
# **bcf21ProjectsTopicsViewpointsVisibilityDelete**
> bcf21ProjectsTopicsViewpointsVisibilityDelete(viewpointsPk, id, projectsPk, topicsPk, )





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

var viewpointsPk = "viewpointsPk_example"; // String | 

var id = "id_example"; // String | 

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.bcf21ProjectsTopicsViewpointsVisibilityDelete(viewpointsPk, id, projectsPk, topicsPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewpointsPk** | **String**|  | 
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

<a name="bcfVersionsDelete"></a>
# **bcfVersionsDelete**
> bcfVersionsDelete(id, )





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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.bcfVersionsDelete(id, , callback);
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

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createBcfDocument(projectsPk, opts, callback);
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
> WrappedClass createBcfProject(data)





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

var data = new bimdata.WrappedClass(); // WrappedClass | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createBcfProject(data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**WrappedClass**](WrappedClass.md)|  | 

### Return type

[**WrappedClass**](WrappedClass.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createBitmap"></a>
# **createBitmap**
> Bitmap createBitmap(viewpointsPk, projectsPk, topicsPk, data)





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

var viewpointsPk = "viewpointsPk_example"; // String | 

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var data = new bimdata.Bitmap(); // Bitmap | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createBitmap(viewpointsPk, projectsPk, topicsPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewpointsPk** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
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
> Coloring createColoring(viewpointsPk, projectsPk, topicsPk, data)





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

var viewpointsPk = "viewpointsPk_example"; // String | 

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var data = new bimdata.Coloring(); // Coloring | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createColoring(viewpointsPk, projectsPk, topicsPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewpointsPk** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createComment(projectsPk, topicsPk, data, callback);
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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createCommentEvent(projectsPk, topicsPk, data, callback);
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
> CommentEvent createCommentEvent_0(projectsPk, topicsPk, commentsPk, data)





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

var commentsPk = "commentsPk_example"; // String | 

var data = new bimdata.CommentEvent(); // CommentEvent | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createCommentEvent_0(projectsPk, topicsPk, commentsPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **commentsPk** | **String**|  | 
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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createDocumentReference(projectsPk, topicsPk, data, callback);
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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createFile(projectsPk, topicsPk, data, callback);
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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createRelatedTopic(projectsPk, topicsPk, data, callback);
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
> Component createSelection(viewpointsPk, projectsPk, topicsPk, data)





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

var viewpointsPk = "viewpointsPk_example"; // String | 

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var data = new bimdata.Component(); // Component | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createSelection(viewpointsPk, projectsPk, topicsPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewpointsPk** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createSnippet(projectsPk, topicsPk, data, callback);
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
> WrappedClass createTopic(projectsPk, data)





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

var data = new bimdata.WrappedClass(); // WrappedClass | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createTopic(projectsPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **data** | [**WrappedClass**](WrappedClass.md)|  | 

### Return type

[**WrappedClass**](WrappedClass.md)

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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createTopicEvent(projectsPk, topicsPk, data, callback);
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

<a name="createVersion"></a>
# **createVersion**
> Version createVersion(data)





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

var data = new bimdata.Version(); // Version | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createVersion(data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**Version**](Version.md)|  | 

### Return type

[**Version**](Version.md)

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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createViewpoint(projectsPk, topicsPk, data, callback);
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
> Visibility createVisibility(viewpointsPk, projectsPk, topicsPk, data)





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

var viewpointsPk = "viewpointsPk_example"; // String | 

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var data = new bimdata.Visibility(); // Visibility | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createVisibility(viewpointsPk, projectsPk, topicsPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewpointsPk** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteBcfDocument(id, projectsPk, callback);
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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteBcfProject(id, , callback);
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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteComment(id, projectsPk, topicsPk, , callback);
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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteDocumentReference(id, projectsPk, topicsPk, , callback);
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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteFile(id, projectsPk, topicsPk, , callback);
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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteRelatedTopic(id, projectsPk, topicsPk, , callback);
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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteSnippet(id, projectsPk, topicsPk, , callback);
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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteTopic(id, projectsPk, , callback);
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

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.fullUpdateBcfDocument(id, projectsPk, opts, callback);
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
> WrappedClass fullUpdateBcfProject(id, data)





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

var data = new bimdata.WrappedClass(); // WrappedClass | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fullUpdateBcfProject(id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **data** | [**WrappedClass**](WrappedClass.md)|  | 

### Return type

[**WrappedClass**](WrappedClass.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdateBitmap"></a>
# **fullUpdateBitmap**
> Bitmap fullUpdateBitmap(viewpointsPk, id, projectsPk, topicsPk, data)





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

var viewpointsPk = "viewpointsPk_example"; // String | 

var id = "id_example"; // String | 

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var data = new bimdata.Bitmap(); // Bitmap | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fullUpdateBitmap(viewpointsPk, id, projectsPk, topicsPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewpointsPk** | **String**|  | 
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
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
> Coloring fullUpdateColoring(viewpointsPk, id, projectsPk, topicsPk, data)





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

var viewpointsPk = "viewpointsPk_example"; // String | 

var id = "id_example"; // String | 

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var data = new bimdata.Coloring(); // Coloring | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fullUpdateColoring(viewpointsPk, id, projectsPk, topicsPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewpointsPk** | **String**|  | 
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fullUpdateComment(id, projectsPk, topicsPk, data, callback);
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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fullUpdateCommentEvent(id, projectsPk, topicsPk, data, callback);
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
> CommentEvent fullUpdateCommentEvent_0(id, projectsPk, topicsPk, commentsPk, data)





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

var commentsPk = "commentsPk_example"; // String | 

var data = new bimdata.CommentEvent(); // CommentEvent | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fullUpdateCommentEvent_0(id, projectsPk, topicsPk, commentsPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **commentsPk** | **String**|  | 
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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fullUpdateDocumentReference(id, projectsPk, topicsPk, data, callback);
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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fullUpdateFile(id, projectsPk, topicsPk, data, callback);
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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fullUpdateRelatedTopic(id, projectsPk, topicsPk, data, callback);
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
> Component fullUpdateSelection(viewpointsPk, id, projectsPk, topicsPk, data)





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

var viewpointsPk = "viewpointsPk_example"; // String | 

var id = "id_example"; // String | 

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var data = new bimdata.Component(); // Component | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fullUpdateSelection(viewpointsPk, id, projectsPk, topicsPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewpointsPk** | **String**|  | 
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fullUpdateSnippet(id, projectsPk, topicsPk, data, callback);
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
> WrappedClass fullUpdateTopic(id, projectsPk, data)





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

var data = new bimdata.WrappedClass(); // WrappedClass | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fullUpdateTopic(id, projectsPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **data** | [**WrappedClass**](WrappedClass.md)|  | 

### Return type

[**WrappedClass**](WrappedClass.md)

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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fullUpdateTopicEvent(id, projectsPk, topicsPk, data, callback);
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

<a name="fullUpdateVersion"></a>
# **fullUpdateVersion**
> Version fullUpdateVersion(id, data)





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

var data = new bimdata.Version(); // Version | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fullUpdateVersion(id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **data** | [**Version**](Version.md)|  | 

### Return type

[**Version**](Version.md)

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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fullUpdateViewpoint(id, projectsPk, topicsPk, data, callback);
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
> Visibility fullUpdateVisibility(viewpointsPk, id, projectsPk, topicsPk, data)





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

var viewpointsPk = "viewpointsPk_example"; // String | 

var id = "id_example"; // String | 

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var data = new bimdata.Visibility(); // Visibility | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fullUpdateVisibility(viewpointsPk, id, projectsPk, topicsPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewpointsPk** | **String**|  | 
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllCommentsEvents(projectsPk, callback);
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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllTopicsEvents(projectsPk, callback);
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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getBcfDocument(id, projectsPk, callback);
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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getBcfDocuments(projectsPk, callback);
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
> WrappedClass getBcfProject(id, )





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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getBcfProject(id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**WrappedClass**](WrappedClass.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getBcfProjects"></a>
# **getBcfProjects**
> [WrappedClass] getBcfProjects()





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

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getBcfProjects(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[WrappedClass]**](WrappedClass.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getBitmap"></a>
# **getBitmap**
> Bitmap getBitmap(viewpointsPk, id, projectsPk, topicsPk, )





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

var viewpointsPk = "viewpointsPk_example"; // String | 

var id = "id_example"; // String | 

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getBitmap(viewpointsPk, id, projectsPk, topicsPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewpointsPk** | **String**|  | 
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 

### Return type

[**Bitmap**](Bitmap.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getBitmaps"></a>
# **getBitmaps**
> [Bitmap] getBitmaps(viewpointsPk, projectsPk, topicsPk, )





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

var viewpointsPk = "viewpointsPk_example"; // String | 

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getBitmaps(viewpointsPk, projectsPk, topicsPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewpointsPk** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 

### Return type

[**[Bitmap]**](Bitmap.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getColoring"></a>
# **getColoring**
> Coloring getColoring(viewpointsPk, id, projectsPk, topicsPk, )





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

var viewpointsPk = "viewpointsPk_example"; // String | 

var id = "id_example"; // String | 

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getColoring(viewpointsPk, id, projectsPk, topicsPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewpointsPk** | **String**|  | 
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 

### Return type

[**Coloring**](Coloring.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getColorings"></a>
# **getColorings**
> [Coloring] getColorings(viewpointsPk, projectsPk, topicsPk, )





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

var viewpointsPk = "viewpointsPk_example"; // String | 

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getColorings(viewpointsPk, projectsPk, topicsPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewpointsPk** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 

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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getComment(id, projectsPk, topicsPk, , callback);
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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCommentEvent(id, projectsPk, topicsPk, , callback);
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
> CommentEvent getCommentEvent_0(id, projectsPk, topicsPk, commentsPk, )





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

var commentsPk = "commentsPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCommentEvent_0(id, projectsPk, topicsPk, commentsPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **commentsPk** | **String**|  | 

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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCommentEvents(projectsPk, topicsPk, , callback);
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
> [CommentEvent] getCommentEvents_0(projectsPk, topicsPk, commentsPk, )





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

var commentsPk = "commentsPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCommentEvents_0(projectsPk, topicsPk, commentsPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **commentsPk** | **String**|  | 

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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getComments(projectsPk, topicsPk, , callback);
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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDocumentReference(id, projectsPk, topicsPk, , callback);
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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDocumentReferences(projectsPk, topicsPk, , callback);
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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getExtensions(projectsPk, callback);
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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFile(id, projectsPk, topicsPk, , callback);
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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFiles(projectsPk, topicsPk, , callback);
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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRelatedTopic(id, projectsPk, topicsPk, , callback);
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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRelatedTopics(projectsPk, topicsPk, , callback);
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
> Component getSelection(viewpointsPk, id, projectsPk, topicsPk, )





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

var viewpointsPk = "viewpointsPk_example"; // String | 

var id = "id_example"; // String | 

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSelection(viewpointsPk, id, projectsPk, topicsPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewpointsPk** | **String**|  | 
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 

### Return type

[**Component**](Component.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSelections"></a>
# **getSelections**
> [Component] getSelections(viewpointsPk, projectsPk, topicsPk, )





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

var viewpointsPk = "viewpointsPk_example"; // String | 

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSelections(viewpointsPk, projectsPk, topicsPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewpointsPk** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 

### Return type

[**[Component]**](Component.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSnapshots"></a>
# **getSnapshots**
> [Snapshot] getSnapshots(viewpointsPk, projectsPk, topicsPk)





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

var viewpointsPk = "viewpointsPk_example"; // String | 

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSnapshots(viewpointsPk, projectsPk, topicsPk, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewpointsPk** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 

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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSnippet(id, projectsPk, topicsPk, , callback);
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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSnippets(projectsPk, topicsPk, , callback);
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
> WrappedClass getTopic(id, projectsPk, )





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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTopic(id, projectsPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 

### Return type

[**WrappedClass**](WrappedClass.md)

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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTopicEvent(id, projectsPk, topicsPk, , callback);
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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTopicEvents(projectsPk, topicsPk, , callback);
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
> [WrappedClass] getTopics(projectsPk, )





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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTopics(projectsPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 

### Return type

[**[WrappedClass]**](WrappedClass.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getVersion"></a>
# **getVersion**
> Version getVersion(id, )





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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getVersion(id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**Version**](Version.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getVersions"></a>
# **getVersions**
> [Version] getVersions()





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

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getVersions(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Version]**](Version.md)

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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getViewpoint(id, projectsPk, topicsPk, , callback);
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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getViewpoints(projectsPk, topicsPk, , callback);
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
> [Visibility] getVisibilities(viewpointsPk, projectsPk, topicsPk, )





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

var viewpointsPk = "viewpointsPk_example"; // String | 

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getVisibilities(viewpointsPk, projectsPk, topicsPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewpointsPk** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 

### Return type

[**[Visibility]**](Visibility.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getVisibility"></a>
# **getVisibility**
> Visibility getVisibility(viewpointsPk, id, projectsPk, topicsPk, )





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

var viewpointsPk = "viewpointsPk_example"; // String | 

var id = "id_example"; // String | 

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getVisibility(viewpointsPk, id, projectsPk, topicsPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewpointsPk** | **String**|  | 
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 

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

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateBcfDocument(id, projectsPk, opts, callback);
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
> WrappedClass updateBcfProject(id, data)





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

var data = new bimdata.WrappedClass(); // WrappedClass | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateBcfProject(id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **data** | [**WrappedClass**](WrappedClass.md)|  | 

### Return type

[**WrappedClass**](WrappedClass.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateBitmap"></a>
# **updateBitmap**
> Bitmap updateBitmap(viewpointsPk, id, projectsPk, topicsPk, data)





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

var viewpointsPk = "viewpointsPk_example"; // String | 

var id = "id_example"; // String | 

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var data = new bimdata.Bitmap(); // Bitmap | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateBitmap(viewpointsPk, id, projectsPk, topicsPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewpointsPk** | **String**|  | 
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
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
> Coloring updateColoring(viewpointsPk, id, projectsPk, topicsPk, data)





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

var viewpointsPk = "viewpointsPk_example"; // String | 

var id = "id_example"; // String | 

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var data = new bimdata.Coloring(); // Coloring | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateColoring(viewpointsPk, id, projectsPk, topicsPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewpointsPk** | **String**|  | 
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateComment(id, projectsPk, topicsPk, data, callback);
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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateCommentEvent(id, projectsPk, topicsPk, data, callback);
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
> CommentEvent updateCommentEvent_0(id, projectsPk, topicsPk, commentsPk, data)





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

var commentsPk = "commentsPk_example"; // String | 

var data = new bimdata.CommentEvent(); // CommentEvent | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateCommentEvent_0(id, projectsPk, topicsPk, commentsPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **commentsPk** | **String**|  | 
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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateDocumentReference(id, projectsPk, topicsPk, data, callback);
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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateFile(id, projectsPk, topicsPk, data, callback);
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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateRelatedTopic(id, projectsPk, topicsPk, data, callback);
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
> Component updateSelection(viewpointsPk, id, projectsPk, topicsPk, data)





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

var viewpointsPk = "viewpointsPk_example"; // String | 

var id = "id_example"; // String | 

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var data = new bimdata.Component(); // Component | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateSelection(viewpointsPk, id, projectsPk, topicsPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewpointsPk** | **String**|  | 
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateSnippet(id, projectsPk, topicsPk, data, callback);
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
> WrappedClass updateTopic(id, projectsPk, data)





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

var data = new bimdata.WrappedClass(); // WrappedClass | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateTopic(id, projectsPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **data** | [**WrappedClass**](WrappedClass.md)|  | 

### Return type

[**WrappedClass**](WrappedClass.md)

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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateTopicEvent(id, projectsPk, topicsPk, data, callback);
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

<a name="updateVersion"></a>
# **updateVersion**
> Version updateVersion(id, data)





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

var data = new bimdata.Version(); // Version | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateVersion(id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **data** | [**Version**](Version.md)|  | 

### Return type

[**Version**](Version.md)

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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateViewpoint(id, projectsPk, topicsPk, data, callback);
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
> Visibility updateVisibility(viewpointsPk, id, projectsPk, topicsPk, data)





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

var viewpointsPk = "viewpointsPk_example"; // String | 

var id = "id_example"; // String | 

var projectsPk = "projectsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var data = new bimdata.Visibility(); // Visibility | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateVisibility(viewpointsPk, id, projectsPk, topicsPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewpointsPk** | **String**|  | 
 **id** | **String**|  | 
 **projectsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **data** | [**Visibility**](Visibility.md)|  | 

### Return type

[**Visibility**](Visibility.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


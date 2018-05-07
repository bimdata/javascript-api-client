# bimdata.BcfApi

All URIs are relative to *https://api-staging.bimdata.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bcf21CurrentUserList**](BcfApi.md#bcf21CurrentUserList) | **GET** /bcf/2.1/current-user | 
[**bcf21ProjectsCreate**](BcfApi.md#bcf21ProjectsCreate) | **POST** /bcf/2.1/projects | 
[**bcf21ProjectsDelete**](BcfApi.md#bcf21ProjectsDelete) | **DELETE** /bcf/2.1/projects/{id} | 
[**bcf21ProjectsDocumentsCreate**](BcfApi.md#bcf21ProjectsDocumentsCreate) | **POST** /bcf/2.1/projects/{projects_pk}/documents | 
[**bcf21ProjectsDocumentsDelete**](BcfApi.md#bcf21ProjectsDocumentsDelete) | **DELETE** /bcf/2.1/projects/{projects_pk}/documents/{id} | 
[**bcf21ProjectsDocumentsList**](BcfApi.md#bcf21ProjectsDocumentsList) | **GET** /bcf/2.1/projects/{projects_pk}/documents | 
[**bcf21ProjectsDocumentsPartialUpdate**](BcfApi.md#bcf21ProjectsDocumentsPartialUpdate) | **PATCH** /bcf/2.1/projects/{projects_pk}/documents/{id} | 
[**bcf21ProjectsDocumentsRead**](BcfApi.md#bcf21ProjectsDocumentsRead) | **GET** /bcf/2.1/projects/{projects_pk}/documents/{id} | 
[**bcf21ProjectsDocumentsUpdate**](BcfApi.md#bcf21ProjectsDocumentsUpdate) | **PUT** /bcf/2.1/projects/{projects_pk}/documents/{id} | 
[**bcf21ProjectsExtensionsList**](BcfApi.md#bcf21ProjectsExtensionsList) | **GET** /bcf/2.1/projects/{projects_pk}/extensions | 
[**bcf21ProjectsList**](BcfApi.md#bcf21ProjectsList) | **GET** /bcf/2.1/projects | 
[**bcf21ProjectsPartialUpdate**](BcfApi.md#bcf21ProjectsPartialUpdate) | **PATCH** /bcf/2.1/projects/{id} | 
[**bcf21ProjectsRead**](BcfApi.md#bcf21ProjectsRead) | **GET** /bcf/2.1/projects/{id} | 
[**bcf21ProjectsTopicsCommentsCreate**](BcfApi.md#bcf21ProjectsTopicsCommentsCreate) | **POST** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/comments | 
[**bcf21ProjectsTopicsCommentsDelete**](BcfApi.md#bcf21ProjectsTopicsCommentsDelete) | **DELETE** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/comments/{id} | 
[**bcf21ProjectsTopicsCommentsEventsCreate**](BcfApi.md#bcf21ProjectsTopicsCommentsEventsCreate) | **POST** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/comments/events | 
[**bcf21ProjectsTopicsCommentsEventsCreate_0**](BcfApi.md#bcf21ProjectsTopicsCommentsEventsCreate_0) | **POST** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/comments/{comments_pk}/events | 
[**bcf21ProjectsTopicsCommentsEventsDelete**](BcfApi.md#bcf21ProjectsTopicsCommentsEventsDelete) | **DELETE** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/comments/events/{id} | 
[**bcf21ProjectsTopicsCommentsEventsDelete_0**](BcfApi.md#bcf21ProjectsTopicsCommentsEventsDelete_0) | **DELETE** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/comments/{comments_pk}/events/{id} | 
[**bcf21ProjectsTopicsCommentsEventsList**](BcfApi.md#bcf21ProjectsTopicsCommentsEventsList) | **GET** /bcf/2.1/projects/{projects_pk}/topics/comments/events | 
[**bcf21ProjectsTopicsCommentsEventsList_0**](BcfApi.md#bcf21ProjectsTopicsCommentsEventsList_0) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/comments/events | 
[**bcf21ProjectsTopicsCommentsEventsList_1**](BcfApi.md#bcf21ProjectsTopicsCommentsEventsList_1) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/comments/{comments_pk}/events | 
[**bcf21ProjectsTopicsCommentsEventsPartialUpdate**](BcfApi.md#bcf21ProjectsTopicsCommentsEventsPartialUpdate) | **PATCH** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/comments/events/{id} | 
[**bcf21ProjectsTopicsCommentsEventsPartialUpdate_0**](BcfApi.md#bcf21ProjectsTopicsCommentsEventsPartialUpdate_0) | **PATCH** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/comments/{comments_pk}/events/{id} | 
[**bcf21ProjectsTopicsCommentsEventsRead**](BcfApi.md#bcf21ProjectsTopicsCommentsEventsRead) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/comments/events/{id} | 
[**bcf21ProjectsTopicsCommentsEventsRead_0**](BcfApi.md#bcf21ProjectsTopicsCommentsEventsRead_0) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/comments/{comments_pk}/events/{id} | 
[**bcf21ProjectsTopicsCommentsEventsUpdate**](BcfApi.md#bcf21ProjectsTopicsCommentsEventsUpdate) | **PUT** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/comments/events/{id} | 
[**bcf21ProjectsTopicsCommentsEventsUpdate_0**](BcfApi.md#bcf21ProjectsTopicsCommentsEventsUpdate_0) | **PUT** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/comments/{comments_pk}/events/{id} | 
[**bcf21ProjectsTopicsCommentsList**](BcfApi.md#bcf21ProjectsTopicsCommentsList) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/comments | 
[**bcf21ProjectsTopicsCommentsPartialUpdate**](BcfApi.md#bcf21ProjectsTopicsCommentsPartialUpdate) | **PATCH** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/comments/{id} | 
[**bcf21ProjectsTopicsCommentsRead**](BcfApi.md#bcf21ProjectsTopicsCommentsRead) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/comments/{id} | 
[**bcf21ProjectsTopicsCommentsUpdate**](BcfApi.md#bcf21ProjectsTopicsCommentsUpdate) | **PUT** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/comments/{id} | 
[**bcf21ProjectsTopicsCreate**](BcfApi.md#bcf21ProjectsTopicsCreate) | **POST** /bcf/2.1/projects/{projects_pk}/topics | 
[**bcf21ProjectsTopicsDelete**](BcfApi.md#bcf21ProjectsTopicsDelete) | **DELETE** /bcf/2.1/projects/{projects_pk}/topics/{id} | 
[**bcf21ProjectsTopicsDocumentReferencesCreate**](BcfApi.md#bcf21ProjectsTopicsDocumentReferencesCreate) | **POST** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/document_references | 
[**bcf21ProjectsTopicsDocumentReferencesDelete**](BcfApi.md#bcf21ProjectsTopicsDocumentReferencesDelete) | **DELETE** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/document_references/{id} | 
[**bcf21ProjectsTopicsDocumentReferencesList**](BcfApi.md#bcf21ProjectsTopicsDocumentReferencesList) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/document_references | 
[**bcf21ProjectsTopicsDocumentReferencesPartialUpdate**](BcfApi.md#bcf21ProjectsTopicsDocumentReferencesPartialUpdate) | **PATCH** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/document_references/{id} | 
[**bcf21ProjectsTopicsDocumentReferencesRead**](BcfApi.md#bcf21ProjectsTopicsDocumentReferencesRead) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/document_references/{id} | 
[**bcf21ProjectsTopicsDocumentReferencesUpdate**](BcfApi.md#bcf21ProjectsTopicsDocumentReferencesUpdate) | **PUT** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/document_references/{id} | 
[**bcf21ProjectsTopicsEventsCreate**](BcfApi.md#bcf21ProjectsTopicsEventsCreate) | **POST** /bcf/2.1/projects/{projects_pk}/topics/events | 
[**bcf21ProjectsTopicsEventsCreate_0**](BcfApi.md#bcf21ProjectsTopicsEventsCreate_0) | **POST** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/events | 
[**bcf21ProjectsTopicsEventsDelete**](BcfApi.md#bcf21ProjectsTopicsEventsDelete) | **DELETE** /bcf/2.1/projects/{projects_pk}/topics/events/{id} | 
[**bcf21ProjectsTopicsEventsDelete_0**](BcfApi.md#bcf21ProjectsTopicsEventsDelete_0) | **DELETE** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/events/{id} | 
[**bcf21ProjectsTopicsEventsList**](BcfApi.md#bcf21ProjectsTopicsEventsList) | **GET** /bcf/2.1/projects/{projects_pk}/topics/events | 
[**bcf21ProjectsTopicsEventsList_0**](BcfApi.md#bcf21ProjectsTopicsEventsList_0) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/events | 
[**bcf21ProjectsTopicsEventsPartialUpdate**](BcfApi.md#bcf21ProjectsTopicsEventsPartialUpdate) | **PATCH** /bcf/2.1/projects/{projects_pk}/topics/events/{id} | 
[**bcf21ProjectsTopicsEventsPartialUpdate_0**](BcfApi.md#bcf21ProjectsTopicsEventsPartialUpdate_0) | **PATCH** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/events/{id} | 
[**bcf21ProjectsTopicsEventsRead**](BcfApi.md#bcf21ProjectsTopicsEventsRead) | **GET** /bcf/2.1/projects/{projects_pk}/topics/events/{id} | 
[**bcf21ProjectsTopicsEventsRead_0**](BcfApi.md#bcf21ProjectsTopicsEventsRead_0) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/events/{id} | 
[**bcf21ProjectsTopicsEventsUpdate**](BcfApi.md#bcf21ProjectsTopicsEventsUpdate) | **PUT** /bcf/2.1/projects/{projects_pk}/topics/events/{id} | 
[**bcf21ProjectsTopicsEventsUpdate_0**](BcfApi.md#bcf21ProjectsTopicsEventsUpdate_0) | **PUT** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/events/{id} | 
[**bcf21ProjectsTopicsFileCreate**](BcfApi.md#bcf21ProjectsTopicsFileCreate) | **POST** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/file | 
[**bcf21ProjectsTopicsFileDelete**](BcfApi.md#bcf21ProjectsTopicsFileDelete) | **DELETE** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/file/{id} | 
[**bcf21ProjectsTopicsFileList**](BcfApi.md#bcf21ProjectsTopicsFileList) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/file | 
[**bcf21ProjectsTopicsFilePartialUpdate**](BcfApi.md#bcf21ProjectsTopicsFilePartialUpdate) | **PATCH** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/file/{id} | 
[**bcf21ProjectsTopicsFileRead**](BcfApi.md#bcf21ProjectsTopicsFileRead) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/file/{id} | 
[**bcf21ProjectsTopicsFileUpdate**](BcfApi.md#bcf21ProjectsTopicsFileUpdate) | **PUT** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/file/{id} | 
[**bcf21ProjectsTopicsList**](BcfApi.md#bcf21ProjectsTopicsList) | **GET** /bcf/2.1/projects/{projects_pk}/topics | 
[**bcf21ProjectsTopicsPartialUpdate**](BcfApi.md#bcf21ProjectsTopicsPartialUpdate) | **PATCH** /bcf/2.1/projects/{projects_pk}/topics/{id} | 
[**bcf21ProjectsTopicsRead**](BcfApi.md#bcf21ProjectsTopicsRead) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{id} | 
[**bcf21ProjectsTopicsRelatedTopicsCreate**](BcfApi.md#bcf21ProjectsTopicsRelatedTopicsCreate) | **POST** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/related_topics | 
[**bcf21ProjectsTopicsRelatedTopicsDelete**](BcfApi.md#bcf21ProjectsTopicsRelatedTopicsDelete) | **DELETE** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/related_topics/{id} | 
[**bcf21ProjectsTopicsRelatedTopicsList**](BcfApi.md#bcf21ProjectsTopicsRelatedTopicsList) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/related_topics | 
[**bcf21ProjectsTopicsRelatedTopicsPartialUpdate**](BcfApi.md#bcf21ProjectsTopicsRelatedTopicsPartialUpdate) | **PATCH** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/related_topics/{id} | 
[**bcf21ProjectsTopicsRelatedTopicsRead**](BcfApi.md#bcf21ProjectsTopicsRelatedTopicsRead) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/related_topics/{id} | 
[**bcf21ProjectsTopicsRelatedTopicsUpdate**](BcfApi.md#bcf21ProjectsTopicsRelatedTopicsUpdate) | **PUT** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/related_topics/{id} | 
[**bcf21ProjectsTopicsSnippetCreate**](BcfApi.md#bcf21ProjectsTopicsSnippetCreate) | **POST** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/snippet | 
[**bcf21ProjectsTopicsSnippetDelete**](BcfApi.md#bcf21ProjectsTopicsSnippetDelete) | **DELETE** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/snippet/{id} | 
[**bcf21ProjectsTopicsSnippetList**](BcfApi.md#bcf21ProjectsTopicsSnippetList) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/snippet | 
[**bcf21ProjectsTopicsSnippetPartialUpdate**](BcfApi.md#bcf21ProjectsTopicsSnippetPartialUpdate) | **PATCH** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/snippet/{id} | 
[**bcf21ProjectsTopicsSnippetRead**](BcfApi.md#bcf21ProjectsTopicsSnippetRead) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/snippet/{id} | 
[**bcf21ProjectsTopicsSnippetUpdate**](BcfApi.md#bcf21ProjectsTopicsSnippetUpdate) | **PUT** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/snippet/{id} | 
[**bcf21ProjectsTopicsUpdate**](BcfApi.md#bcf21ProjectsTopicsUpdate) | **PUT** /bcf/2.1/projects/{projects_pk}/topics/{id} | 
[**bcf21ProjectsTopicsViewpointsBitmapCreate**](BcfApi.md#bcf21ProjectsTopicsViewpointsBitmapCreate) | **POST** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/bitmap | 
[**bcf21ProjectsTopicsViewpointsBitmapDelete**](BcfApi.md#bcf21ProjectsTopicsViewpointsBitmapDelete) | **DELETE** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/bitmap/{id} | 
[**bcf21ProjectsTopicsViewpointsBitmapList**](BcfApi.md#bcf21ProjectsTopicsViewpointsBitmapList) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/bitmap | 
[**bcf21ProjectsTopicsViewpointsBitmapPartialUpdate**](BcfApi.md#bcf21ProjectsTopicsViewpointsBitmapPartialUpdate) | **PATCH** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/bitmap/{id} | 
[**bcf21ProjectsTopicsViewpointsBitmapRead**](BcfApi.md#bcf21ProjectsTopicsViewpointsBitmapRead) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/bitmap/{id} | 
[**bcf21ProjectsTopicsViewpointsBitmapUpdate**](BcfApi.md#bcf21ProjectsTopicsViewpointsBitmapUpdate) | **PUT** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/bitmap/{id} | 
[**bcf21ProjectsTopicsViewpointsColoringCreate**](BcfApi.md#bcf21ProjectsTopicsViewpointsColoringCreate) | **POST** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/coloring | 
[**bcf21ProjectsTopicsViewpointsColoringDelete**](BcfApi.md#bcf21ProjectsTopicsViewpointsColoringDelete) | **DELETE** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/coloring/{id} | 
[**bcf21ProjectsTopicsViewpointsColoringList**](BcfApi.md#bcf21ProjectsTopicsViewpointsColoringList) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/coloring | 
[**bcf21ProjectsTopicsViewpointsColoringPartialUpdate**](BcfApi.md#bcf21ProjectsTopicsViewpointsColoringPartialUpdate) | **PATCH** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/coloring/{id} | 
[**bcf21ProjectsTopicsViewpointsColoringRead**](BcfApi.md#bcf21ProjectsTopicsViewpointsColoringRead) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/coloring/{id} | 
[**bcf21ProjectsTopicsViewpointsColoringUpdate**](BcfApi.md#bcf21ProjectsTopicsViewpointsColoringUpdate) | **PUT** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/coloring/{id} | 
[**bcf21ProjectsTopicsViewpointsCreate**](BcfApi.md#bcf21ProjectsTopicsViewpointsCreate) | **POST** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints | 
[**bcf21ProjectsTopicsViewpointsDelete**](BcfApi.md#bcf21ProjectsTopicsViewpointsDelete) | **DELETE** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{id} | 
[**bcf21ProjectsTopicsViewpointsList**](BcfApi.md#bcf21ProjectsTopicsViewpointsList) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints | 
[**bcf21ProjectsTopicsViewpointsPartialUpdate**](BcfApi.md#bcf21ProjectsTopicsViewpointsPartialUpdate) | **PATCH** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{id} | 
[**bcf21ProjectsTopicsViewpointsRead**](BcfApi.md#bcf21ProjectsTopicsViewpointsRead) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{id} | 
[**bcf21ProjectsTopicsViewpointsSelectionCreate**](BcfApi.md#bcf21ProjectsTopicsViewpointsSelectionCreate) | **POST** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/selection | 
[**bcf21ProjectsTopicsViewpointsSelectionDelete**](BcfApi.md#bcf21ProjectsTopicsViewpointsSelectionDelete) | **DELETE** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/selection/{id} | 
[**bcf21ProjectsTopicsViewpointsSelectionList**](BcfApi.md#bcf21ProjectsTopicsViewpointsSelectionList) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/selection | 
[**bcf21ProjectsTopicsViewpointsSelectionPartialUpdate**](BcfApi.md#bcf21ProjectsTopicsViewpointsSelectionPartialUpdate) | **PATCH** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/selection/{id} | 
[**bcf21ProjectsTopicsViewpointsSelectionRead**](BcfApi.md#bcf21ProjectsTopicsViewpointsSelectionRead) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/selection/{id} | 
[**bcf21ProjectsTopicsViewpointsSelectionUpdate**](BcfApi.md#bcf21ProjectsTopicsViewpointsSelectionUpdate) | **PUT** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/selection/{id} | 
[**bcf21ProjectsTopicsViewpointsSnapshotList**](BcfApi.md#bcf21ProjectsTopicsViewpointsSnapshotList) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/snapshot | 
[**bcf21ProjectsTopicsViewpointsUpdate**](BcfApi.md#bcf21ProjectsTopicsViewpointsUpdate) | **PUT** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{id} | 
[**bcf21ProjectsTopicsViewpointsVisibilityCreate**](BcfApi.md#bcf21ProjectsTopicsViewpointsVisibilityCreate) | **POST** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/visibility | 
[**bcf21ProjectsTopicsViewpointsVisibilityDelete**](BcfApi.md#bcf21ProjectsTopicsViewpointsVisibilityDelete) | **DELETE** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/visibility/{id} | 
[**bcf21ProjectsTopicsViewpointsVisibilityList**](BcfApi.md#bcf21ProjectsTopicsViewpointsVisibilityList) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/visibility | 
[**bcf21ProjectsTopicsViewpointsVisibilityPartialUpdate**](BcfApi.md#bcf21ProjectsTopicsViewpointsVisibilityPartialUpdate) | **PATCH** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/visibility/{id} | 
[**bcf21ProjectsTopicsViewpointsVisibilityRead**](BcfApi.md#bcf21ProjectsTopicsViewpointsVisibilityRead) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/visibility/{id} | 
[**bcf21ProjectsTopicsViewpointsVisibilityUpdate**](BcfApi.md#bcf21ProjectsTopicsViewpointsVisibilityUpdate) | **PUT** /bcf/2.1/projects/{projects_pk}/topics/{topics_pk}/viewpoints/{viewpoints_pk}/visibility/{id} | 
[**bcf21ProjectsUpdate**](BcfApi.md#bcf21ProjectsUpdate) | **PUT** /bcf/2.1/projects/{id} | 
[**bcfVersionsCreate**](BcfApi.md#bcfVersionsCreate) | **POST** /bcf/versions | 
[**bcfVersionsDelete**](BcfApi.md#bcfVersionsDelete) | **DELETE** /bcf/versions/{id} | 
[**bcfVersionsList**](BcfApi.md#bcfVersionsList) | **GET** /bcf/versions | 
[**bcfVersionsPartialUpdate**](BcfApi.md#bcfVersionsPartialUpdate) | **PATCH** /bcf/versions/{id} | 
[**bcfVersionsRead**](BcfApi.md#bcfVersionsRead) | **GET** /bcf/versions/{id} | 
[**bcfVersionsUpdate**](BcfApi.md#bcfVersionsUpdate) | **PUT** /bcf/versions/{id} | 


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

<a name="bcf21ProjectsCreate"></a>
# **bcf21ProjectsCreate**
> BcfProject bcf21ProjectsCreate(data)





### Example
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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bcf21ProjectsCreate(data, callback);
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

<a name="bcf21ProjectsDelete"></a>
# **bcf21ProjectsDelete**
> bcf21ProjectsDelete(id, )





### Example
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
apiInstance.bcf21ProjectsDelete(id, , callback);
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

<a name="bcf21ProjectsDocumentsCreate"></a>
# **bcf21ProjectsDocumentsCreate**
> bcf21ProjectsDocumentsCreate(projectsPk, opts)





### Example
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
apiInstance.bcf21ProjectsDocumentsCreate(projectsPk, opts, callback);
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

<a name="bcf21ProjectsDocumentsDelete"></a>
# **bcf21ProjectsDocumentsDelete**
> bcf21ProjectsDocumentsDelete(projectsPk, id)





### Example
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

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.bcf21ProjectsDocumentsDelete(projectsPk, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="bcf21ProjectsDocumentsList"></a>
# **bcf21ProjectsDocumentsList**
> bcf21ProjectsDocumentsList(projectsPk)





### Example
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
apiInstance.bcf21ProjectsDocumentsList(projectsPk, callback);
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

<a name="bcf21ProjectsDocumentsPartialUpdate"></a>
# **bcf21ProjectsDocumentsPartialUpdate**
> bcf21ProjectsDocumentsPartialUpdate(projectsPk, id, opts)





### Example
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

var id = "id_example"; // String | 

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
apiInstance.bcf21ProjectsDocumentsPartialUpdate(projectsPk, id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **id** | **String**|  | 
 **guid** | [**String**](.md)|  | [optional] 
 **filename** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="bcf21ProjectsDocumentsRead"></a>
# **bcf21ProjectsDocumentsRead**
> bcf21ProjectsDocumentsRead(projectsPk, id)





### Example
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

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.bcf21ProjectsDocumentsRead(projectsPk, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="bcf21ProjectsDocumentsUpdate"></a>
# **bcf21ProjectsDocumentsUpdate**
> bcf21ProjectsDocumentsUpdate(projectsPk, id, opts)





### Example
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

var id = "id_example"; // String | 

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
apiInstance.bcf21ProjectsDocumentsUpdate(projectsPk, id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **id** | **String**|  | 
 **guid** | [**String**](.md)|  | [optional] 
 **filename** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="bcf21ProjectsExtensionsList"></a>
# **bcf21ProjectsExtensionsList**
> [Extensions] bcf21ProjectsExtensionsList(projectsPk)





### Example
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
apiInstance.bcf21ProjectsExtensionsList(projectsPk, callback);
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

<a name="bcf21ProjectsList"></a>
# **bcf21ProjectsList**
> [BcfProject] bcf21ProjectsList()





### Example
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
apiInstance.bcf21ProjectsList(callback);
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

<a name="bcf21ProjectsPartialUpdate"></a>
# **bcf21ProjectsPartialUpdate**
> BcfProject bcf21ProjectsPartialUpdate(id, data)





### Example
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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bcf21ProjectsPartialUpdate(id, data, callback);
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

<a name="bcf21ProjectsRead"></a>
# **bcf21ProjectsRead**
> BcfProject bcf21ProjectsRead(id, )





### Example
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
apiInstance.bcf21ProjectsRead(id, , callback);
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

<a name="bcf21ProjectsTopicsCommentsCreate"></a>
# **bcf21ProjectsTopicsCommentsCreate**
> Comment bcf21ProjectsTopicsCommentsCreate(projectsPk, topicsPk, data)





### Example
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
apiInstance.bcf21ProjectsTopicsCommentsCreate(projectsPk, topicsPk, data, callback);
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

<a name="bcf21ProjectsTopicsCommentsDelete"></a>
# **bcf21ProjectsTopicsCommentsDelete**
> bcf21ProjectsTopicsCommentsDelete(projectsPk, id, topicsPk, )





### Example
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

var id = "id_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.bcf21ProjectsTopicsCommentsDelete(projectsPk, id, topicsPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **id** | **String**|  | 
 **topicsPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsCommentsEventsCreate"></a>
# **bcf21ProjectsTopicsCommentsEventsCreate**
> CommentEvent bcf21ProjectsTopicsCommentsEventsCreate(projectsPk, topicsPk, data)





### Example
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
apiInstance.bcf21ProjectsTopicsCommentsEventsCreate(projectsPk, topicsPk, data, callback);
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

<a name="bcf21ProjectsTopicsCommentsEventsCreate_0"></a>
# **bcf21ProjectsTopicsCommentsEventsCreate_0**
> CommentEvent bcf21ProjectsTopicsCommentsEventsCreate_0(projectsPk, commentsPk, topicsPk, data)





### Example
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

var commentsPk = "commentsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var data = new bimdata.CommentEvent(); // CommentEvent | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bcf21ProjectsTopicsCommentsEventsCreate_0(projectsPk, commentsPk, topicsPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **commentsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **data** | [**CommentEvent**](CommentEvent.md)|  | 

### Return type

[**CommentEvent**](CommentEvent.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsCommentsEventsDelete"></a>
# **bcf21ProjectsTopicsCommentsEventsDelete**
> bcf21ProjectsTopicsCommentsEventsDelete(projectsPk, id, topicsPk, )





### Example
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

var id = "id_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.bcf21ProjectsTopicsCommentsEventsDelete(projectsPk, id, topicsPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **id** | **String**|  | 
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
> bcf21ProjectsTopicsCommentsEventsDelete_0(projectsPk, id, commentsPk, topicsPk, )





### Example
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

var id = "id_example"; // String | 

var commentsPk = "commentsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.bcf21ProjectsTopicsCommentsEventsDelete_0(projectsPk, id, commentsPk, topicsPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **id** | **String**|  | 
 **commentsPk** | **String**|  | 
 **topicsPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsCommentsEventsList"></a>
# **bcf21ProjectsTopicsCommentsEventsList**
> [CommentEvent] bcf21ProjectsTopicsCommentsEventsList(projectsPk)





### Example
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
apiInstance.bcf21ProjectsTopicsCommentsEventsList(projectsPk, callback);
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

<a name="bcf21ProjectsTopicsCommentsEventsList_0"></a>
# **bcf21ProjectsTopicsCommentsEventsList_0**
> [CommentEvent] bcf21ProjectsTopicsCommentsEventsList_0(projectsPk, topicsPk, )





### Example
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
apiInstance.bcf21ProjectsTopicsCommentsEventsList_0(projectsPk, topicsPk, , callback);
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

<a name="bcf21ProjectsTopicsCommentsEventsList_1"></a>
# **bcf21ProjectsTopicsCommentsEventsList_1**
> [CommentEvent] bcf21ProjectsTopicsCommentsEventsList_1(projectsPk, commentsPk, topicsPk, )





### Example
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

var commentsPk = "commentsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bcf21ProjectsTopicsCommentsEventsList_1(projectsPk, commentsPk, topicsPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **commentsPk** | **String**|  | 
 **topicsPk** | **String**|  | 

### Return type

[**[CommentEvent]**](CommentEvent.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsCommentsEventsPartialUpdate"></a>
# **bcf21ProjectsTopicsCommentsEventsPartialUpdate**
> CommentEvent bcf21ProjectsTopicsCommentsEventsPartialUpdate(projectsPk, id, topicsPk, data)





### Example
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

var id = "id_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var data = new bimdata.CommentEvent(); // CommentEvent | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bcf21ProjectsTopicsCommentsEventsPartialUpdate(projectsPk, id, topicsPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **id** | **String**|  | 
 **topicsPk** | **String**|  | 
 **data** | [**CommentEvent**](CommentEvent.md)|  | 

### Return type

[**CommentEvent**](CommentEvent.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsCommentsEventsPartialUpdate_0"></a>
# **bcf21ProjectsTopicsCommentsEventsPartialUpdate_0**
> CommentEvent bcf21ProjectsTopicsCommentsEventsPartialUpdate_0(projectsPk, id, commentsPk, topicsPk, data)





### Example
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

var id = "id_example"; // String | 

var commentsPk = "commentsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var data = new bimdata.CommentEvent(); // CommentEvent | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bcf21ProjectsTopicsCommentsEventsPartialUpdate_0(projectsPk, id, commentsPk, topicsPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **id** | **String**|  | 
 **commentsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **data** | [**CommentEvent**](CommentEvent.md)|  | 

### Return type

[**CommentEvent**](CommentEvent.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsCommentsEventsRead"></a>
# **bcf21ProjectsTopicsCommentsEventsRead**
> CommentEvent bcf21ProjectsTopicsCommentsEventsRead(projectsPk, id, topicsPk, )





### Example
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

var id = "id_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bcf21ProjectsTopicsCommentsEventsRead(projectsPk, id, topicsPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **id** | **String**|  | 
 **topicsPk** | **String**|  | 

### Return type

[**CommentEvent**](CommentEvent.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsCommentsEventsRead_0"></a>
# **bcf21ProjectsTopicsCommentsEventsRead_0**
> CommentEvent bcf21ProjectsTopicsCommentsEventsRead_0(projectsPk, id, commentsPk, topicsPk, )





### Example
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

var id = "id_example"; // String | 

var commentsPk = "commentsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bcf21ProjectsTopicsCommentsEventsRead_0(projectsPk, id, commentsPk, topicsPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **id** | **String**|  | 
 **commentsPk** | **String**|  | 
 **topicsPk** | **String**|  | 

### Return type

[**CommentEvent**](CommentEvent.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsCommentsEventsUpdate"></a>
# **bcf21ProjectsTopicsCommentsEventsUpdate**
> CommentEvent bcf21ProjectsTopicsCommentsEventsUpdate(projectsPk, id, topicsPk, data)





### Example
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

var id = "id_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var data = new bimdata.CommentEvent(); // CommentEvent | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bcf21ProjectsTopicsCommentsEventsUpdate(projectsPk, id, topicsPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **id** | **String**|  | 
 **topicsPk** | **String**|  | 
 **data** | [**CommentEvent**](CommentEvent.md)|  | 

### Return type

[**CommentEvent**](CommentEvent.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsCommentsEventsUpdate_0"></a>
# **bcf21ProjectsTopicsCommentsEventsUpdate_0**
> CommentEvent bcf21ProjectsTopicsCommentsEventsUpdate_0(projectsPk, id, commentsPk, topicsPk, data)





### Example
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

var id = "id_example"; // String | 

var commentsPk = "commentsPk_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var data = new bimdata.CommentEvent(); // CommentEvent | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bcf21ProjectsTopicsCommentsEventsUpdate_0(projectsPk, id, commentsPk, topicsPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **id** | **String**|  | 
 **commentsPk** | **String**|  | 
 **topicsPk** | **String**|  | 
 **data** | [**CommentEvent**](CommentEvent.md)|  | 

### Return type

[**CommentEvent**](CommentEvent.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsCommentsList"></a>
# **bcf21ProjectsTopicsCommentsList**
> [Comment] bcf21ProjectsTopicsCommentsList(projectsPk, topicsPk, )





### Example
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
apiInstance.bcf21ProjectsTopicsCommentsList(projectsPk, topicsPk, , callback);
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

<a name="bcf21ProjectsTopicsCommentsPartialUpdate"></a>
# **bcf21ProjectsTopicsCommentsPartialUpdate**
> Comment bcf21ProjectsTopicsCommentsPartialUpdate(projectsPk, id, topicsPk, data)





### Example
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

var id = "id_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var data = new bimdata.Comment(); // Comment | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bcf21ProjectsTopicsCommentsPartialUpdate(projectsPk, id, topicsPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **id** | **String**|  | 
 **topicsPk** | **String**|  | 
 **data** | [**Comment**](Comment.md)|  | 

### Return type

[**Comment**](Comment.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsCommentsRead"></a>
# **bcf21ProjectsTopicsCommentsRead**
> Comment bcf21ProjectsTopicsCommentsRead(projectsPk, id, topicsPk, )





### Example
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

var id = "id_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bcf21ProjectsTopicsCommentsRead(projectsPk, id, topicsPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **id** | **String**|  | 
 **topicsPk** | **String**|  | 

### Return type

[**Comment**](Comment.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsCommentsUpdate"></a>
# **bcf21ProjectsTopicsCommentsUpdate**
> Comment bcf21ProjectsTopicsCommentsUpdate(projectsPk, id, topicsPk, data)





### Example
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

var id = "id_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var data = new bimdata.Comment(); // Comment | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bcf21ProjectsTopicsCommentsUpdate(projectsPk, id, topicsPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **id** | **String**|  | 
 **topicsPk** | **String**|  | 
 **data** | [**Comment**](Comment.md)|  | 

### Return type

[**Comment**](Comment.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsCreate"></a>
# **bcf21ProjectsTopicsCreate**
> Topic bcf21ProjectsTopicsCreate(projectsPk, data)





### Example
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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bcf21ProjectsTopicsCreate(projectsPk, data, callback);
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

<a name="bcf21ProjectsTopicsDelete"></a>
# **bcf21ProjectsTopicsDelete**
> bcf21ProjectsTopicsDelete(projectsPk, id, )





### Example
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

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.bcf21ProjectsTopicsDelete(projectsPk, id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsDocumentReferencesCreate"></a>
# **bcf21ProjectsTopicsDocumentReferencesCreate**
> DocumentReference bcf21ProjectsTopicsDocumentReferencesCreate(projectsPk, topicsPk, data)





### Example
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
apiInstance.bcf21ProjectsTopicsDocumentReferencesCreate(projectsPk, topicsPk, data, callback);
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

<a name="bcf21ProjectsTopicsDocumentReferencesDelete"></a>
# **bcf21ProjectsTopicsDocumentReferencesDelete**
> bcf21ProjectsTopicsDocumentReferencesDelete(projectsPk, id, topicsPk, )





### Example
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

var id = "id_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.bcf21ProjectsTopicsDocumentReferencesDelete(projectsPk, id, topicsPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **id** | **String**|  | 
 **topicsPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsDocumentReferencesList"></a>
# **bcf21ProjectsTopicsDocumentReferencesList**
> [DocumentReference] bcf21ProjectsTopicsDocumentReferencesList(projectsPk, topicsPk, )





### Example
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
apiInstance.bcf21ProjectsTopicsDocumentReferencesList(projectsPk, topicsPk, , callback);
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

<a name="bcf21ProjectsTopicsDocumentReferencesPartialUpdate"></a>
# **bcf21ProjectsTopicsDocumentReferencesPartialUpdate**
> DocumentReference bcf21ProjectsTopicsDocumentReferencesPartialUpdate(projectsPk, id, topicsPk, data)





### Example
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

var id = "id_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var data = new bimdata.DocumentReference(); // DocumentReference | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bcf21ProjectsTopicsDocumentReferencesPartialUpdate(projectsPk, id, topicsPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **id** | **String**|  | 
 **topicsPk** | **String**|  | 
 **data** | [**DocumentReference**](DocumentReference.md)|  | 

### Return type

[**DocumentReference**](DocumentReference.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsDocumentReferencesRead"></a>
# **bcf21ProjectsTopicsDocumentReferencesRead**
> DocumentReference bcf21ProjectsTopicsDocumentReferencesRead(projectsPk, id, topicsPk, )





### Example
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

var id = "id_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bcf21ProjectsTopicsDocumentReferencesRead(projectsPk, id, topicsPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **id** | **String**|  | 
 **topicsPk** | **String**|  | 

### Return type

[**DocumentReference**](DocumentReference.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsDocumentReferencesUpdate"></a>
# **bcf21ProjectsTopicsDocumentReferencesUpdate**
> DocumentReference bcf21ProjectsTopicsDocumentReferencesUpdate(projectsPk, id, topicsPk, data)





### Example
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

var id = "id_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var data = new bimdata.DocumentReference(); // DocumentReference | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bcf21ProjectsTopicsDocumentReferencesUpdate(projectsPk, id, topicsPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **id** | **String**|  | 
 **topicsPk** | **String**|  | 
 **data** | [**DocumentReference**](DocumentReference.md)|  | 

### Return type

[**DocumentReference**](DocumentReference.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsEventsCreate"></a>
# **bcf21ProjectsTopicsEventsCreate**
> TopicEvents bcf21ProjectsTopicsEventsCreate(projectsPk, data)





### Example
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

var data = new bimdata.TopicEvents(); // TopicEvents | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bcf21ProjectsTopicsEventsCreate(projectsPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **data** | [**TopicEvents**](TopicEvents.md)|  | 

### Return type

[**TopicEvents**](TopicEvents.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsEventsCreate_0"></a>
# **bcf21ProjectsTopicsEventsCreate_0**
> TopicEvents bcf21ProjectsTopicsEventsCreate_0(projectsPk, topicsPk, data)





### Example
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
apiInstance.bcf21ProjectsTopicsEventsCreate_0(projectsPk, topicsPk, data, callback);
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

<a name="bcf21ProjectsTopicsEventsDelete"></a>
# **bcf21ProjectsTopicsEventsDelete**
> bcf21ProjectsTopicsEventsDelete(projectsPk, id, )





### Example
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

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.bcf21ProjectsTopicsEventsDelete(projectsPk, id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsEventsDelete_0"></a>
# **bcf21ProjectsTopicsEventsDelete_0**
> bcf21ProjectsTopicsEventsDelete_0(projectsPk, id, topicsPk, )





### Example
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

var id = "id_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.bcf21ProjectsTopicsEventsDelete_0(projectsPk, id, topicsPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **id** | **String**|  | 
 **topicsPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsEventsList"></a>
# **bcf21ProjectsTopicsEventsList**
> [TopicEvents] bcf21ProjectsTopicsEventsList(projectsPk, )





### Example
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
apiInstance.bcf21ProjectsTopicsEventsList(projectsPk, , callback);
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

<a name="bcf21ProjectsTopicsEventsList_0"></a>
# **bcf21ProjectsTopicsEventsList_0**
> [TopicEvents] bcf21ProjectsTopicsEventsList_0(projectsPk, topicsPk, )





### Example
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
apiInstance.bcf21ProjectsTopicsEventsList_0(projectsPk, topicsPk, , callback);
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

<a name="bcf21ProjectsTopicsEventsPartialUpdate"></a>
# **bcf21ProjectsTopicsEventsPartialUpdate**
> TopicEvents bcf21ProjectsTopicsEventsPartialUpdate(projectsPk, id, data)





### Example
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

var id = "id_example"; // String | 

var data = new bimdata.TopicEvents(); // TopicEvents | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bcf21ProjectsTopicsEventsPartialUpdate(projectsPk, id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **id** | **String**|  | 
 **data** | [**TopicEvents**](TopicEvents.md)|  | 

### Return type

[**TopicEvents**](TopicEvents.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsEventsPartialUpdate_0"></a>
# **bcf21ProjectsTopicsEventsPartialUpdate_0**
> TopicEvents bcf21ProjectsTopicsEventsPartialUpdate_0(projectsPk, id, topicsPk, data)





### Example
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

var id = "id_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var data = new bimdata.TopicEvents(); // TopicEvents | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bcf21ProjectsTopicsEventsPartialUpdate_0(projectsPk, id, topicsPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **id** | **String**|  | 
 **topicsPk** | **String**|  | 
 **data** | [**TopicEvents**](TopicEvents.md)|  | 

### Return type

[**TopicEvents**](TopicEvents.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsEventsRead"></a>
# **bcf21ProjectsTopicsEventsRead**
> TopicEvents bcf21ProjectsTopicsEventsRead(projectsPk, id, )





### Example
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

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bcf21ProjectsTopicsEventsRead(projectsPk, id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **id** | **String**|  | 

### Return type

[**TopicEvents**](TopicEvents.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsEventsRead_0"></a>
# **bcf21ProjectsTopicsEventsRead_0**
> TopicEvents bcf21ProjectsTopicsEventsRead_0(projectsPk, id, topicsPk, )





### Example
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

var id = "id_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bcf21ProjectsTopicsEventsRead_0(projectsPk, id, topicsPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **id** | **String**|  | 
 **topicsPk** | **String**|  | 

### Return type

[**TopicEvents**](TopicEvents.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsEventsUpdate"></a>
# **bcf21ProjectsTopicsEventsUpdate**
> TopicEvents bcf21ProjectsTopicsEventsUpdate(projectsPk, id, data)





### Example
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

var id = "id_example"; // String | 

var data = new bimdata.TopicEvents(); // TopicEvents | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bcf21ProjectsTopicsEventsUpdate(projectsPk, id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **id** | **String**|  | 
 **data** | [**TopicEvents**](TopicEvents.md)|  | 

### Return type

[**TopicEvents**](TopicEvents.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsEventsUpdate_0"></a>
# **bcf21ProjectsTopicsEventsUpdate_0**
> TopicEvents bcf21ProjectsTopicsEventsUpdate_0(projectsPk, id, topicsPk, data)





### Example
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

var id = "id_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var data = new bimdata.TopicEvents(); // TopicEvents | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bcf21ProjectsTopicsEventsUpdate_0(projectsPk, id, topicsPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **id** | **String**|  | 
 **topicsPk** | **String**|  | 
 **data** | [**TopicEvents**](TopicEvents.md)|  | 

### Return type

[**TopicEvents**](TopicEvents.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsFileCreate"></a>
# **bcf21ProjectsTopicsFileCreate**
> BimSnippet bcf21ProjectsTopicsFileCreate(projectsPk, topicsPk, data)





### Example
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
apiInstance.bcf21ProjectsTopicsFileCreate(projectsPk, topicsPk, data, callback);
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

<a name="bcf21ProjectsTopicsFileDelete"></a>
# **bcf21ProjectsTopicsFileDelete**
> bcf21ProjectsTopicsFileDelete(projectsPk, id, topicsPk, )





### Example
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

var id = "id_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.bcf21ProjectsTopicsFileDelete(projectsPk, id, topicsPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **id** | **String**|  | 
 **topicsPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsFileList"></a>
# **bcf21ProjectsTopicsFileList**
> [BimSnippet] bcf21ProjectsTopicsFileList(projectsPk, topicsPk, )





### Example
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
apiInstance.bcf21ProjectsTopicsFileList(projectsPk, topicsPk, , callback);
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

<a name="bcf21ProjectsTopicsFilePartialUpdate"></a>
# **bcf21ProjectsTopicsFilePartialUpdate**
> BimSnippet bcf21ProjectsTopicsFilePartialUpdate(projectsPk, id, topicsPk, data)





### Example
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

var id = "id_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var data = new bimdata.BimSnippet(); // BimSnippet | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bcf21ProjectsTopicsFilePartialUpdate(projectsPk, id, topicsPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **id** | **String**|  | 
 **topicsPk** | **String**|  | 
 **data** | [**BimSnippet**](BimSnippet.md)|  | 

### Return type

[**BimSnippet**](BimSnippet.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsFileRead"></a>
# **bcf21ProjectsTopicsFileRead**
> BimSnippet bcf21ProjectsTopicsFileRead(projectsPk, id, topicsPk, )





### Example
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

var id = "id_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bcf21ProjectsTopicsFileRead(projectsPk, id, topicsPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **id** | **String**|  | 
 **topicsPk** | **String**|  | 

### Return type

[**BimSnippet**](BimSnippet.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsFileUpdate"></a>
# **bcf21ProjectsTopicsFileUpdate**
> BimSnippet bcf21ProjectsTopicsFileUpdate(projectsPk, id, topicsPk, data)





### Example
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

var id = "id_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var data = new bimdata.BimSnippet(); // BimSnippet | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bcf21ProjectsTopicsFileUpdate(projectsPk, id, topicsPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **id** | **String**|  | 
 **topicsPk** | **String**|  | 
 **data** | [**BimSnippet**](BimSnippet.md)|  | 

### Return type

[**BimSnippet**](BimSnippet.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsList"></a>
# **bcf21ProjectsTopicsList**
> [Topic] bcf21ProjectsTopicsList(projectsPk, )





### Example
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
apiInstance.bcf21ProjectsTopicsList(projectsPk, , callback);
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

<a name="bcf21ProjectsTopicsPartialUpdate"></a>
# **bcf21ProjectsTopicsPartialUpdate**
> Topic bcf21ProjectsTopicsPartialUpdate(projectsPk, id, data)





### Example
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

var id = "id_example"; // String | 

var data = new bimdata.Topic(); // Topic | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bcf21ProjectsTopicsPartialUpdate(projectsPk, id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **id** | **String**|  | 
 **data** | [**Topic**](Topic.md)|  | 

### Return type

[**Topic**](Topic.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsRead"></a>
# **bcf21ProjectsTopicsRead**
> Topic bcf21ProjectsTopicsRead(projectsPk, id, )





### Example
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

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bcf21ProjectsTopicsRead(projectsPk, id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **id** | **String**|  | 

### Return type

[**Topic**](Topic.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsRelatedTopicsCreate"></a>
# **bcf21ProjectsTopicsRelatedTopicsCreate**
> RelatedTopic bcf21ProjectsTopicsRelatedTopicsCreate(projectsPk, topicsPk, data)





### Example
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
apiInstance.bcf21ProjectsTopicsRelatedTopicsCreate(projectsPk, topicsPk, data, callback);
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

<a name="bcf21ProjectsTopicsRelatedTopicsDelete"></a>
# **bcf21ProjectsTopicsRelatedTopicsDelete**
> bcf21ProjectsTopicsRelatedTopicsDelete(projectsPk, id, topicsPk, )





### Example
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

var id = "id_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.bcf21ProjectsTopicsRelatedTopicsDelete(projectsPk, id, topicsPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **id** | **String**|  | 
 **topicsPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsRelatedTopicsList"></a>
# **bcf21ProjectsTopicsRelatedTopicsList**
> [RelatedTopic] bcf21ProjectsTopicsRelatedTopicsList(projectsPk, topicsPk, )





### Example
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
apiInstance.bcf21ProjectsTopicsRelatedTopicsList(projectsPk, topicsPk, , callback);
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

<a name="bcf21ProjectsTopicsRelatedTopicsPartialUpdate"></a>
# **bcf21ProjectsTopicsRelatedTopicsPartialUpdate**
> RelatedTopic bcf21ProjectsTopicsRelatedTopicsPartialUpdate(projectsPk, id, topicsPk, data)





### Example
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

var id = "id_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var data = new bimdata.RelatedTopic(); // RelatedTopic | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bcf21ProjectsTopicsRelatedTopicsPartialUpdate(projectsPk, id, topicsPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **id** | **String**|  | 
 **topicsPk** | **String**|  | 
 **data** | [**RelatedTopic**](RelatedTopic.md)|  | 

### Return type

[**RelatedTopic**](RelatedTopic.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsRelatedTopicsRead"></a>
# **bcf21ProjectsTopicsRelatedTopicsRead**
> RelatedTopic bcf21ProjectsTopicsRelatedTopicsRead(projectsPk, id, topicsPk, )





### Example
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

var id = "id_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bcf21ProjectsTopicsRelatedTopicsRead(projectsPk, id, topicsPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **id** | **String**|  | 
 **topicsPk** | **String**|  | 

### Return type

[**RelatedTopic**](RelatedTopic.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsRelatedTopicsUpdate"></a>
# **bcf21ProjectsTopicsRelatedTopicsUpdate**
> RelatedTopic bcf21ProjectsTopicsRelatedTopicsUpdate(projectsPk, id, topicsPk, data)





### Example
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

var id = "id_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var data = new bimdata.RelatedTopic(); // RelatedTopic | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bcf21ProjectsTopicsRelatedTopicsUpdate(projectsPk, id, topicsPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **id** | **String**|  | 
 **topicsPk** | **String**|  | 
 **data** | [**RelatedTopic**](RelatedTopic.md)|  | 

### Return type

[**RelatedTopic**](RelatedTopic.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsSnippetCreate"></a>
# **bcf21ProjectsTopicsSnippetCreate**
> BimSnippet bcf21ProjectsTopicsSnippetCreate(projectsPk, topicsPk, data)





### Example
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
apiInstance.bcf21ProjectsTopicsSnippetCreate(projectsPk, topicsPk, data, callback);
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

<a name="bcf21ProjectsTopicsSnippetDelete"></a>
# **bcf21ProjectsTopicsSnippetDelete**
> bcf21ProjectsTopicsSnippetDelete(projectsPk, id, topicsPk, )





### Example
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

var id = "id_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.bcf21ProjectsTopicsSnippetDelete(projectsPk, id, topicsPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **id** | **String**|  | 
 **topicsPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsSnippetList"></a>
# **bcf21ProjectsTopicsSnippetList**
> [BimSnippet] bcf21ProjectsTopicsSnippetList(projectsPk, topicsPk, )





### Example
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
apiInstance.bcf21ProjectsTopicsSnippetList(projectsPk, topicsPk, , callback);
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

<a name="bcf21ProjectsTopicsSnippetPartialUpdate"></a>
# **bcf21ProjectsTopicsSnippetPartialUpdate**
> BimSnippet bcf21ProjectsTopicsSnippetPartialUpdate(projectsPk, id, topicsPk, data)





### Example
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

var id = "id_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var data = new bimdata.BimSnippet(); // BimSnippet | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bcf21ProjectsTopicsSnippetPartialUpdate(projectsPk, id, topicsPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **id** | **String**|  | 
 **topicsPk** | **String**|  | 
 **data** | [**BimSnippet**](BimSnippet.md)|  | 

### Return type

[**BimSnippet**](BimSnippet.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsSnippetRead"></a>
# **bcf21ProjectsTopicsSnippetRead**
> BimSnippet bcf21ProjectsTopicsSnippetRead(projectsPk, id, topicsPk, )





### Example
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

var id = "id_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bcf21ProjectsTopicsSnippetRead(projectsPk, id, topicsPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **id** | **String**|  | 
 **topicsPk** | **String**|  | 

### Return type

[**BimSnippet**](BimSnippet.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsSnippetUpdate"></a>
# **bcf21ProjectsTopicsSnippetUpdate**
> BimSnippet bcf21ProjectsTopicsSnippetUpdate(projectsPk, id, topicsPk, data)





### Example
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

var id = "id_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var data = new bimdata.BimSnippet(); // BimSnippet | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bcf21ProjectsTopicsSnippetUpdate(projectsPk, id, topicsPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **id** | **String**|  | 
 **topicsPk** | **String**|  | 
 **data** | [**BimSnippet**](BimSnippet.md)|  | 

### Return type

[**BimSnippet**](BimSnippet.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsUpdate"></a>
# **bcf21ProjectsTopicsUpdate**
> Topic bcf21ProjectsTopicsUpdate(projectsPk, id, data)





### Example
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

var id = "id_example"; // String | 

var data = new bimdata.Topic(); // Topic | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bcf21ProjectsTopicsUpdate(projectsPk, id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **id** | **String**|  | 
 **data** | [**Topic**](Topic.md)|  | 

### Return type

[**Topic**](Topic.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsViewpointsBitmapCreate"></a>
# **bcf21ProjectsTopicsViewpointsBitmapCreate**
> Bitmap bcf21ProjectsTopicsViewpointsBitmapCreate(viewpointsPk, projectsPk, topicsPk, data)





### Example
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
apiInstance.bcf21ProjectsTopicsViewpointsBitmapCreate(viewpointsPk, projectsPk, topicsPk, data, callback);
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

<a name="bcf21ProjectsTopicsViewpointsBitmapDelete"></a>
# **bcf21ProjectsTopicsViewpointsBitmapDelete**
> bcf21ProjectsTopicsViewpointsBitmapDelete(viewpointsPk, projectsPk, id, topicsPk, )





### Example
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

var id = "id_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.bcf21ProjectsTopicsViewpointsBitmapDelete(viewpointsPk, projectsPk, id, topicsPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewpointsPk** | **String**|  | 
 **projectsPk** | **String**|  | 
 **id** | **String**|  | 
 **topicsPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsViewpointsBitmapList"></a>
# **bcf21ProjectsTopicsViewpointsBitmapList**
> [Bitmap] bcf21ProjectsTopicsViewpointsBitmapList(viewpointsPk, projectsPk, topicsPk, )





### Example
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
apiInstance.bcf21ProjectsTopicsViewpointsBitmapList(viewpointsPk, projectsPk, topicsPk, , callback);
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

<a name="bcf21ProjectsTopicsViewpointsBitmapPartialUpdate"></a>
# **bcf21ProjectsTopicsViewpointsBitmapPartialUpdate**
> Bitmap bcf21ProjectsTopicsViewpointsBitmapPartialUpdate(viewpointsPk, projectsPk, id, topicsPk, data)





### Example
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

var id = "id_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var data = new bimdata.Bitmap(); // Bitmap | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bcf21ProjectsTopicsViewpointsBitmapPartialUpdate(viewpointsPk, projectsPk, id, topicsPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewpointsPk** | **String**|  | 
 **projectsPk** | **String**|  | 
 **id** | **String**|  | 
 **topicsPk** | **String**|  | 
 **data** | [**Bitmap**](Bitmap.md)|  | 

### Return type

[**Bitmap**](Bitmap.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsViewpointsBitmapRead"></a>
# **bcf21ProjectsTopicsViewpointsBitmapRead**
> Bitmap bcf21ProjectsTopicsViewpointsBitmapRead(viewpointsPk, projectsPk, id, topicsPk, )





### Example
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

var id = "id_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bcf21ProjectsTopicsViewpointsBitmapRead(viewpointsPk, projectsPk, id, topicsPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewpointsPk** | **String**|  | 
 **projectsPk** | **String**|  | 
 **id** | **String**|  | 
 **topicsPk** | **String**|  | 

### Return type

[**Bitmap**](Bitmap.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsViewpointsBitmapUpdate"></a>
# **bcf21ProjectsTopicsViewpointsBitmapUpdate**
> Bitmap bcf21ProjectsTopicsViewpointsBitmapUpdate(viewpointsPk, projectsPk, id, topicsPk, data)





### Example
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

var id = "id_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var data = new bimdata.Bitmap(); // Bitmap | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bcf21ProjectsTopicsViewpointsBitmapUpdate(viewpointsPk, projectsPk, id, topicsPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewpointsPk** | **String**|  | 
 **projectsPk** | **String**|  | 
 **id** | **String**|  | 
 **topicsPk** | **String**|  | 
 **data** | [**Bitmap**](Bitmap.md)|  | 

### Return type

[**Bitmap**](Bitmap.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsViewpointsColoringCreate"></a>
# **bcf21ProjectsTopicsViewpointsColoringCreate**
> Coloring bcf21ProjectsTopicsViewpointsColoringCreate(viewpointsPk, projectsPk, topicsPk, data)





### Example
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
apiInstance.bcf21ProjectsTopicsViewpointsColoringCreate(viewpointsPk, projectsPk, topicsPk, data, callback);
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

<a name="bcf21ProjectsTopicsViewpointsColoringDelete"></a>
# **bcf21ProjectsTopicsViewpointsColoringDelete**
> bcf21ProjectsTopicsViewpointsColoringDelete(viewpointsPk, projectsPk, id, topicsPk, )





### Example
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

var id = "id_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.bcf21ProjectsTopicsViewpointsColoringDelete(viewpointsPk, projectsPk, id, topicsPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewpointsPk** | **String**|  | 
 **projectsPk** | **String**|  | 
 **id** | **String**|  | 
 **topicsPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsViewpointsColoringList"></a>
# **bcf21ProjectsTopicsViewpointsColoringList**
> [Coloring] bcf21ProjectsTopicsViewpointsColoringList(viewpointsPk, projectsPk, topicsPk, )





### Example
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
apiInstance.bcf21ProjectsTopicsViewpointsColoringList(viewpointsPk, projectsPk, topicsPk, , callback);
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

<a name="bcf21ProjectsTopicsViewpointsColoringPartialUpdate"></a>
# **bcf21ProjectsTopicsViewpointsColoringPartialUpdate**
> Coloring bcf21ProjectsTopicsViewpointsColoringPartialUpdate(viewpointsPk, projectsPk, id, topicsPk, data)





### Example
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

var id = "id_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var data = new bimdata.Coloring(); // Coloring | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bcf21ProjectsTopicsViewpointsColoringPartialUpdate(viewpointsPk, projectsPk, id, topicsPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewpointsPk** | **String**|  | 
 **projectsPk** | **String**|  | 
 **id** | **String**|  | 
 **topicsPk** | **String**|  | 
 **data** | [**Coloring**](Coloring.md)|  | 

### Return type

[**Coloring**](Coloring.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsViewpointsColoringRead"></a>
# **bcf21ProjectsTopicsViewpointsColoringRead**
> Coloring bcf21ProjectsTopicsViewpointsColoringRead(viewpointsPk, projectsPk, id, topicsPk, )





### Example
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

var id = "id_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bcf21ProjectsTopicsViewpointsColoringRead(viewpointsPk, projectsPk, id, topicsPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewpointsPk** | **String**|  | 
 **projectsPk** | **String**|  | 
 **id** | **String**|  | 
 **topicsPk** | **String**|  | 

### Return type

[**Coloring**](Coloring.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsViewpointsColoringUpdate"></a>
# **bcf21ProjectsTopicsViewpointsColoringUpdate**
> Coloring bcf21ProjectsTopicsViewpointsColoringUpdate(viewpointsPk, projectsPk, id, topicsPk, data)





### Example
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

var id = "id_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var data = new bimdata.Coloring(); // Coloring | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bcf21ProjectsTopicsViewpointsColoringUpdate(viewpointsPk, projectsPk, id, topicsPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewpointsPk** | **String**|  | 
 **projectsPk** | **String**|  | 
 **id** | **String**|  | 
 **topicsPk** | **String**|  | 
 **data** | [**Coloring**](Coloring.md)|  | 

### Return type

[**Coloring**](Coloring.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsViewpointsCreate"></a>
# **bcf21ProjectsTopicsViewpointsCreate**
> Viewpoint bcf21ProjectsTopicsViewpointsCreate(projectsPk, topicsPk, data)





### Example
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
apiInstance.bcf21ProjectsTopicsViewpointsCreate(projectsPk, topicsPk, data, callback);
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

<a name="bcf21ProjectsTopicsViewpointsDelete"></a>
# **bcf21ProjectsTopicsViewpointsDelete**
> bcf21ProjectsTopicsViewpointsDelete(projectsPk, id, topicsPk, )





### Example
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

var id = "id_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.bcf21ProjectsTopicsViewpointsDelete(projectsPk, id, topicsPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **id** | **String**|  | 
 **topicsPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsViewpointsList"></a>
# **bcf21ProjectsTopicsViewpointsList**
> [Viewpoint] bcf21ProjectsTopicsViewpointsList(projectsPk, topicsPk, )





### Example
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
apiInstance.bcf21ProjectsTopicsViewpointsList(projectsPk, topicsPk, , callback);
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

<a name="bcf21ProjectsTopicsViewpointsPartialUpdate"></a>
# **bcf21ProjectsTopicsViewpointsPartialUpdate**
> Viewpoint bcf21ProjectsTopicsViewpointsPartialUpdate(projectsPk, id, topicsPk, data)





### Example
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

var id = "id_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var data = new bimdata.Viewpoint(); // Viewpoint | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bcf21ProjectsTopicsViewpointsPartialUpdate(projectsPk, id, topicsPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **id** | **String**|  | 
 **topicsPk** | **String**|  | 
 **data** | [**Viewpoint**](Viewpoint.md)|  | 

### Return type

[**Viewpoint**](Viewpoint.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsViewpointsRead"></a>
# **bcf21ProjectsTopicsViewpointsRead**
> Viewpoint bcf21ProjectsTopicsViewpointsRead(projectsPk, id, topicsPk, )





### Example
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

var id = "id_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bcf21ProjectsTopicsViewpointsRead(projectsPk, id, topicsPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **id** | **String**|  | 
 **topicsPk** | **String**|  | 

### Return type

[**Viewpoint**](Viewpoint.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsViewpointsSelectionCreate"></a>
# **bcf21ProjectsTopicsViewpointsSelectionCreate**
> Component bcf21ProjectsTopicsViewpointsSelectionCreate(viewpointsPk, projectsPk, topicsPk, data)





### Example
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
apiInstance.bcf21ProjectsTopicsViewpointsSelectionCreate(viewpointsPk, projectsPk, topicsPk, data, callback);
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

<a name="bcf21ProjectsTopicsViewpointsSelectionDelete"></a>
# **bcf21ProjectsTopicsViewpointsSelectionDelete**
> bcf21ProjectsTopicsViewpointsSelectionDelete(viewpointsPk, projectsPk, id, topicsPk, )





### Example
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

var id = "id_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.bcf21ProjectsTopicsViewpointsSelectionDelete(viewpointsPk, projectsPk, id, topicsPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewpointsPk** | **String**|  | 
 **projectsPk** | **String**|  | 
 **id** | **String**|  | 
 **topicsPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsViewpointsSelectionList"></a>
# **bcf21ProjectsTopicsViewpointsSelectionList**
> [Component] bcf21ProjectsTopicsViewpointsSelectionList(viewpointsPk, projectsPk, topicsPk, )





### Example
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
apiInstance.bcf21ProjectsTopicsViewpointsSelectionList(viewpointsPk, projectsPk, topicsPk, , callback);
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

<a name="bcf21ProjectsTopicsViewpointsSelectionPartialUpdate"></a>
# **bcf21ProjectsTopicsViewpointsSelectionPartialUpdate**
> Component bcf21ProjectsTopicsViewpointsSelectionPartialUpdate(viewpointsPk, projectsPk, id, topicsPk, data)





### Example
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

var id = "id_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var data = new bimdata.Component(); // Component | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bcf21ProjectsTopicsViewpointsSelectionPartialUpdate(viewpointsPk, projectsPk, id, topicsPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewpointsPk** | **String**|  | 
 **projectsPk** | **String**|  | 
 **id** | **String**|  | 
 **topicsPk** | **String**|  | 
 **data** | [**Component**](Component.md)|  | 

### Return type

[**Component**](Component.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsViewpointsSelectionRead"></a>
# **bcf21ProjectsTopicsViewpointsSelectionRead**
> Component bcf21ProjectsTopicsViewpointsSelectionRead(viewpointsPk, projectsPk, id, topicsPk, )





### Example
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

var id = "id_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bcf21ProjectsTopicsViewpointsSelectionRead(viewpointsPk, projectsPk, id, topicsPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewpointsPk** | **String**|  | 
 **projectsPk** | **String**|  | 
 **id** | **String**|  | 
 **topicsPk** | **String**|  | 

### Return type

[**Component**](Component.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsViewpointsSelectionUpdate"></a>
# **bcf21ProjectsTopicsViewpointsSelectionUpdate**
> Component bcf21ProjectsTopicsViewpointsSelectionUpdate(viewpointsPk, projectsPk, id, topicsPk, data)





### Example
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

var id = "id_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var data = new bimdata.Component(); // Component | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bcf21ProjectsTopicsViewpointsSelectionUpdate(viewpointsPk, projectsPk, id, topicsPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewpointsPk** | **String**|  | 
 **projectsPk** | **String**|  | 
 **id** | **String**|  | 
 **topicsPk** | **String**|  | 
 **data** | [**Component**](Component.md)|  | 

### Return type

[**Component**](Component.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsViewpointsSnapshotList"></a>
# **bcf21ProjectsTopicsViewpointsSnapshotList**
> [Snapshot] bcf21ProjectsTopicsViewpointsSnapshotList(viewpointsPk, projectsPk, topicsPk)





### Example
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
apiInstance.bcf21ProjectsTopicsViewpointsSnapshotList(viewpointsPk, projectsPk, topicsPk, callback);
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

<a name="bcf21ProjectsTopicsViewpointsUpdate"></a>
# **bcf21ProjectsTopicsViewpointsUpdate**
> Viewpoint bcf21ProjectsTopicsViewpointsUpdate(projectsPk, id, topicsPk, data)





### Example
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

var id = "id_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var data = new bimdata.Viewpoint(); // Viewpoint | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bcf21ProjectsTopicsViewpointsUpdate(projectsPk, id, topicsPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **id** | **String**|  | 
 **topicsPk** | **String**|  | 
 **data** | [**Viewpoint**](Viewpoint.md)|  | 

### Return type

[**Viewpoint**](Viewpoint.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsViewpointsVisibilityCreate"></a>
# **bcf21ProjectsTopicsViewpointsVisibilityCreate**
> Visibility bcf21ProjectsTopicsViewpointsVisibilityCreate(viewpointsPk, projectsPk, topicsPk, data)





### Example
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
apiInstance.bcf21ProjectsTopicsViewpointsVisibilityCreate(viewpointsPk, projectsPk, topicsPk, data, callback);
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

<a name="bcf21ProjectsTopicsViewpointsVisibilityDelete"></a>
# **bcf21ProjectsTopicsViewpointsVisibilityDelete**
> bcf21ProjectsTopicsViewpointsVisibilityDelete(viewpointsPk, projectsPk, id, topicsPk, )





### Example
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

var id = "id_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.bcf21ProjectsTopicsViewpointsVisibilityDelete(viewpointsPk, projectsPk, id, topicsPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewpointsPk** | **String**|  | 
 **projectsPk** | **String**|  | 
 **id** | **String**|  | 
 **topicsPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsViewpointsVisibilityList"></a>
# **bcf21ProjectsTopicsViewpointsVisibilityList**
> [Visibility] bcf21ProjectsTopicsViewpointsVisibilityList(viewpointsPk, projectsPk, topicsPk, )





### Example
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
apiInstance.bcf21ProjectsTopicsViewpointsVisibilityList(viewpointsPk, projectsPk, topicsPk, , callback);
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

<a name="bcf21ProjectsTopicsViewpointsVisibilityPartialUpdate"></a>
# **bcf21ProjectsTopicsViewpointsVisibilityPartialUpdate**
> Visibility bcf21ProjectsTopicsViewpointsVisibilityPartialUpdate(viewpointsPk, projectsPk, id, topicsPk, data)





### Example
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

var id = "id_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var data = new bimdata.Visibility(); // Visibility | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bcf21ProjectsTopicsViewpointsVisibilityPartialUpdate(viewpointsPk, projectsPk, id, topicsPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewpointsPk** | **String**|  | 
 **projectsPk** | **String**|  | 
 **id** | **String**|  | 
 **topicsPk** | **String**|  | 
 **data** | [**Visibility**](Visibility.md)|  | 

### Return type

[**Visibility**](Visibility.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsViewpointsVisibilityRead"></a>
# **bcf21ProjectsTopicsViewpointsVisibilityRead**
> Visibility bcf21ProjectsTopicsViewpointsVisibilityRead(viewpointsPk, projectsPk, id, topicsPk, )





### Example
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

var id = "id_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bcf21ProjectsTopicsViewpointsVisibilityRead(viewpointsPk, projectsPk, id, topicsPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewpointsPk** | **String**|  | 
 **projectsPk** | **String**|  | 
 **id** | **String**|  | 
 **topicsPk** | **String**|  | 

### Return type

[**Visibility**](Visibility.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsTopicsViewpointsVisibilityUpdate"></a>
# **bcf21ProjectsTopicsViewpointsVisibilityUpdate**
> Visibility bcf21ProjectsTopicsViewpointsVisibilityUpdate(viewpointsPk, projectsPk, id, topicsPk, data)





### Example
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

var id = "id_example"; // String | 

var topicsPk = "topicsPk_example"; // String | 

var data = new bimdata.Visibility(); // Visibility | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bcf21ProjectsTopicsViewpointsVisibilityUpdate(viewpointsPk, projectsPk, id, topicsPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewpointsPk** | **String**|  | 
 **projectsPk** | **String**|  | 
 **id** | **String**|  | 
 **topicsPk** | **String**|  | 
 **data** | [**Visibility**](Visibility.md)|  | 

### Return type

[**Visibility**](Visibility.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcf21ProjectsUpdate"></a>
# **bcf21ProjectsUpdate**
> BcfProject bcf21ProjectsUpdate(id, data)





### Example
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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bcf21ProjectsUpdate(id, data, callback);
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

<a name="bcfVersionsCreate"></a>
# **bcfVersionsCreate**
> Version bcfVersionsCreate(data)





### Example
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
apiInstance.bcfVersionsCreate(data, callback);
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

<a name="bcfVersionsList"></a>
# **bcfVersionsList**
> [Version] bcfVersionsList()





### Example
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
apiInstance.bcfVersionsList(callback);
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

<a name="bcfVersionsPartialUpdate"></a>
# **bcfVersionsPartialUpdate**
> Version bcfVersionsPartialUpdate(id, data)





### Example
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
apiInstance.bcfVersionsPartialUpdate(id, data, callback);
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

<a name="bcfVersionsRead"></a>
# **bcfVersionsRead**
> Version bcfVersionsRead(id, )





### Example
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
apiInstance.bcfVersionsRead(id, , callback);
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

<a name="bcfVersionsUpdate"></a>
# **bcfVersionsUpdate**
> Version bcfVersionsUpdate(id, data)





### Example
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
apiInstance.bcfVersionsUpdate(id, data, callback);
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


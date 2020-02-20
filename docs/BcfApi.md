# bimdata.BcfApi

All URIs are relative to *https://api.bimdata.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createComment**](BcfApi.md#createComment) | **POST** /bcf/2.1/projects/{projects_pk}/topics/{topics_guid}/comments | Create a comment
[**createFullTopic**](BcfApi.md#createFullTopic) | **POST** /bcf/2.1/projects/{projects_pk}/full-topic | Create a Topic with viewpoints and comments
[**createTopic**](BcfApi.md#createTopic) | **POST** /bcf/2.1/projects/{projects_pk}/topics | Create a topic
[**createViewpoint**](BcfApi.md#createViewpoint) | **POST** /bcf/2.1/projects/{projects_pk}/topics/{topics_guid}/viewpoints | Create a Viewpoint
[**deleteComment**](BcfApi.md#deleteComment) | **DELETE** /bcf/2.1/projects/{projects_pk}/topics/{topics_guid}/comments/{guid} | Delete a comment
[**deleteTopic**](BcfApi.md#deleteTopic) | **DELETE** /bcf/2.1/projects/{projects_pk}/topics/{guid} | Delete a topic
[**deleteViewpoint**](BcfApi.md#deleteViewpoint) | **DELETE** /bcf/2.1/projects/{projects_pk}/topics/{topics_guid}/viewpoints/{guid} | Delete a Viewpoint
[**downloadBcfExport**](BcfApi.md#downloadBcfExport) | **GET** /bcf/2.1/projects/{id}/export | Export project&#39;s topics in bcf-xml format
[**fullUpdateBcfProject**](BcfApi.md#fullUpdateBcfProject) | **PUT** /bcf/2.1/projects/{id} | Update all fields of a BCF project
[**fullUpdateComment**](BcfApi.md#fullUpdateComment) | **PUT** /bcf/2.1/projects/{projects_pk}/topics/{topics_guid}/comments/{guid} | Update all fields of a comment
[**fullUpdateFullTopic**](BcfApi.md#fullUpdateFullTopic) | **PUT** /bcf/2.1/projects/{projects_pk}/full-topic/{guid} | Update all fields of a topic
[**fullUpdateTopic**](BcfApi.md#fullUpdateTopic) | **PUT** /bcf/2.1/projects/{projects_pk}/topics/{guid} | Update all fields of a topic
[**fullUpdateViewpoint**](BcfApi.md#fullUpdateViewpoint) | **PUT** /bcf/2.1/projects/{projects_pk}/topics/{topics_guid}/viewpoints/{guid} | Update all fields of a Viewpoint
[**getBcfProject**](BcfApi.md#getBcfProject) | **GET** /bcf/2.1/projects/{id} | Retrieve a BCF project
[**getBcfProjects**](BcfApi.md#getBcfProjects) | **GET** /bcf/2.1/projects | Retrieve all BCF projects
[**getColorings**](BcfApi.md#getColorings) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_guid}/viewpoints/{guid}/coloring | Retrieve all colorings of a viewpoint
[**getComment**](BcfApi.md#getComment) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_guid}/comments/{guid} | Retrieve a comment
[**getComments**](BcfApi.md#getComments) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_guid}/comments | Retrieve all comments
[**getExtensions**](BcfApi.md#getExtensions) | **GET** /bcf/2.1/projects/{projects_pk}/extensions | Retrieve project extensions
[**getFullTopic**](BcfApi.md#getFullTopic) | **GET** /bcf/2.1/projects/{projects_pk}/full-topic/{guid} | Retrieve a full topic
[**getFullTopics**](BcfApi.md#getFullTopics) | **GET** /bcf/2.1/projects/{projects_pk}/full-topic | Retrieve all full topics
[**getSelections**](BcfApi.md#getSelections) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_guid}/viewpoints/{guid}/selection | Retrieve all selections of a viewpoint
[**getSnapshot**](BcfApi.md#getSnapshot) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_guid}/viewpoints/{guid}/snapshot | Retrieve the viewpoint&#39; snapshot
[**getTopic**](BcfApi.md#getTopic) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{guid} | Retrieve a topic
[**getTopicViewpoints**](BcfApi.md#getTopicViewpoints) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_guid}/topic-viewpoints | Retrieve all viewpoints attached to the topic
[**getTopics**](BcfApi.md#getTopics) | **GET** /bcf/2.1/projects/{projects_pk}/topics | Retrieve all topics
[**getUser**](BcfApi.md#getUser) | **GET** /bcf/2.1/current-user | Get current user info
[**getViewpoint**](BcfApi.md#getViewpoint) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_guid}/viewpoints/{guid} | Retrieve a Viewpoint
[**getViewpoints**](BcfApi.md#getViewpoints) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_guid}/viewpoints | Retrieve all Viewpoints of a topic
[**getVisibilities**](BcfApi.md#getVisibilities) | **GET** /bcf/2.1/projects/{projects_pk}/topics/{topics_guid}/viewpoints/{guid}/visibility | Retrieve all visibilities of a viewpoint
[**importBcf**](BcfApi.md#importBcf) | **POST** /bcf/2.1/projects/{id}/import | Import bcf-xml format into this project. If there are guid conflict, an error will be raised. If there are index conflicts, indexes of the imported file will be overriden with a new index. Author and assigned_to fields will be linked to existing users in the project. If no matching user are found, fields will be emptied. Only BCF 2.1 is supported
[**updateBcfProject**](BcfApi.md#updateBcfProject) | **PATCH** /bcf/2.1/projects/{id} | Update some fields of a BCF project
[**updateComment**](BcfApi.md#updateComment) | **PATCH** /bcf/2.1/projects/{projects_pk}/topics/{topics_guid}/comments/{guid} | Update some fields of a comment
[**updateExtensions**](BcfApi.md#updateExtensions) | **PATCH** /bcf/2.1/projects/{projects_pk}/extensions | Update project extensions
[**updateFullTopic**](BcfApi.md#updateFullTopic) | **PATCH** /bcf/2.1/projects/{projects_pk}/full-topic/{guid} | Update some fields of a topic
[**updateTopic**](BcfApi.md#updateTopic) | **PATCH** /bcf/2.1/projects/{projects_pk}/topics/{guid} | Update some fields of a topic
[**updateViewpoint**](BcfApi.md#updateViewpoint) | **PATCH** /bcf/2.1/projects/{projects_pk}/topics/{topics_guid}/viewpoints/{guid} | Update some fields of a Viewpoint



## createComment

> Comment createComment(projectsPk, topicsGuid, data)

Create a comment

Create a comment Required scopes: bcf:write

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

let apiInstance = new bimdata.BcfApi();
let projectsPk = "projectsPk_example"; // String | 
let topicsGuid = "topicsGuid_example"; // String | 
let data = new bimdata.Comment(); // Comment | 
apiInstance.createComment(projectsPk, topicsGuid, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **topicsGuid** | **String**|  | 
 **data** | [**Comment**](Comment.md)|  | 

### Return type

[**Comment**](Comment.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createFullTopic

> FullTopic createFullTopic(projectsPk, data)

Create a Topic with viewpoints and comments

This is not a standard route. You can send a topic, viewpoints and comments in a single call Required scopes: bcf:write

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

let apiInstance = new bimdata.BcfApi();
let projectsPk = "projectsPk_example"; // String | 
let data = new bimdata.FullTopic(); // FullTopic | 
apiInstance.createFullTopic(projectsPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **data** | [**FullTopic**](FullTopic.md)|  | 

### Return type

[**FullTopic**](FullTopic.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createTopic

> Topic createTopic(projectsPk, data)

Create a topic

Create a topic Required scopes: bcf:write

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

let apiInstance = new bimdata.BcfApi();
let projectsPk = "projectsPk_example"; // String | 
let data = new bimdata.Topic(); // Topic | 
apiInstance.createTopic(projectsPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createViewpoint

> Viewpoint createViewpoint(projectsPk, topicsGuid, data)

Create a Viewpoint

Create a Viewpoint Required scopes: bcf:write

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

let apiInstance = new bimdata.BcfApi();
let projectsPk = "projectsPk_example"; // String | 
let topicsGuid = "topicsGuid_example"; // String | 
let data = new bimdata.Viewpoint(); // Viewpoint | 
apiInstance.createViewpoint(projectsPk, topicsGuid, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **topicsGuid** | **String**|  | 
 **data** | [**Viewpoint**](Viewpoint.md)|  | 

### Return type

[**Viewpoint**](Viewpoint.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteComment

> deleteComment(guid, projectsPk, topicsGuid)

Delete a comment

Delete a comment Required scopes: bcf:write

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

let apiInstance = new bimdata.BcfApi();
let guid = null; // String | 
let projectsPk = "projectsPk_example"; // String | 
let topicsGuid = "topicsGuid_example"; // String | 
apiInstance.deleteComment(guid, projectsPk, topicsGuid).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guid** | [**String**](.md)|  | 
 **projectsPk** | **String**|  | 
 **topicsGuid** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteTopic

> deleteTopic(guid, projectsPk)

Delete a topic

Delete a topic Required scopes: bcf:write

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

let apiInstance = new bimdata.BcfApi();
let guid = null; // String | 
let projectsPk = "projectsPk_example"; // String | 
apiInstance.deleteTopic(guid, projectsPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guid** | [**String**](.md)|  | 
 **projectsPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteViewpoint

> deleteViewpoint(guid, projectsPk, topicsGuid)

Delete a Viewpoint

This is not a standard route. Delete a Viewpoint Required scopes: bcf:write

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

let apiInstance = new bimdata.BcfApi();
let guid = null; // String | 
let projectsPk = "projectsPk_example"; // String | 
let topicsGuid = "topicsGuid_example"; // String | 
apiInstance.deleteViewpoint(guid, projectsPk, topicsGuid).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guid** | [**String**](.md)|  | 
 **projectsPk** | **String**|  | 
 **topicsGuid** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## downloadBcfExport

> downloadBcfExport(id, opts)

Export project&#39;s topics in bcf-xml format

Export project&#39;s topics in bcf-xml format Required scopes: bcf:read

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

let apiInstance = new bimdata.BcfApi();
let id = 56; // Number | A unique integer value identifying this project.
let opts = {
  'topics': "topics_example", // String | topic guids to export, comma separated. Default = all
  'format': "format_example" // String | topic format to export, comma separated. Default = all
};
apiInstance.downloadBcfExport(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this project. | 
 **topics** | **String**| topic guids to export, comma separated. Default &#x3D; all | [optional] 
 **format** | **String**| topic format to export, comma separated. Default &#x3D; all | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## fullUpdateBcfProject

> BcfProject fullUpdateBcfProject(id, data)

Update all fields of a BCF project

Update all fields of a BCF project Required scopes: bcf:write

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

let apiInstance = new bimdata.BcfApi();
let id = 56; // Number | A unique integer value identifying this project.
let data = new bimdata.BcfProject(); // BcfProject | 
apiInstance.fullUpdateBcfProject(id, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this project. | 
 **data** | [**BcfProject**](BcfProject.md)|  | 

### Return type

[**BcfProject**](BcfProject.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## fullUpdateComment

> Comment fullUpdateComment(guid, projectsPk, topicsGuid, data)

Update all fields of a comment

Update all fields of a comment Required scopes: bcf:write

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

let apiInstance = new bimdata.BcfApi();
let guid = null; // String | 
let projectsPk = "projectsPk_example"; // String | 
let topicsGuid = "topicsGuid_example"; // String | 
let data = new bimdata.Comment(); // Comment | 
apiInstance.fullUpdateComment(guid, projectsPk, topicsGuid, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guid** | [**String**](.md)|  | 
 **projectsPk** | **String**|  | 
 **topicsGuid** | **String**|  | 
 **data** | [**Comment**](Comment.md)|  | 

### Return type

[**Comment**](Comment.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## fullUpdateFullTopic

> FullTopic fullUpdateFullTopic(guid, projectsPk, data)

Update all fields of a topic

This is not a standard route. You can update topic, viewpoints and comment is a signle call Required scopes: bcf:write

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

let apiInstance = new bimdata.BcfApi();
let guid = null; // String | 
let projectsPk = "projectsPk_example"; // String | 
let data = new bimdata.FullTopic(); // FullTopic | 
apiInstance.fullUpdateFullTopic(guid, projectsPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guid** | [**String**](.md)|  | 
 **projectsPk** | **String**|  | 
 **data** | [**FullTopic**](FullTopic.md)|  | 

### Return type

[**FullTopic**](FullTopic.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## fullUpdateTopic

> Topic fullUpdateTopic(guid, projectsPk, data)

Update all fields of a topic

Update all fields of a topic Required scopes: bcf:write

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

let apiInstance = new bimdata.BcfApi();
let guid = null; // String | 
let projectsPk = "projectsPk_example"; // String | 
let data = new bimdata.Topic(); // Topic | 
apiInstance.fullUpdateTopic(guid, projectsPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guid** | [**String**](.md)|  | 
 **projectsPk** | **String**|  | 
 **data** | [**Topic**](Topic.md)|  | 

### Return type

[**Topic**](Topic.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## fullUpdateViewpoint

> Viewpoint fullUpdateViewpoint(guid, projectsPk, topicsGuid, data)

Update all fields of a Viewpoint

This is not a standard route. Update all fields of a Viewpoint Required scopes: bcf:write

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

let apiInstance = new bimdata.BcfApi();
let guid = null; // String | 
let projectsPk = "projectsPk_example"; // String | 
let topicsGuid = "topicsGuid_example"; // String | 
let data = new bimdata.Viewpoint(); // Viewpoint | 
apiInstance.fullUpdateViewpoint(guid, projectsPk, topicsGuid, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guid** | [**String**](.md)|  | 
 **projectsPk** | **String**|  | 
 **topicsGuid** | **String**|  | 
 **data** | [**Viewpoint**](Viewpoint.md)|  | 

### Return type

[**Viewpoint**](Viewpoint.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getBcfProject

> BcfProject getBcfProject(id)

Retrieve a BCF project

Retrieve a BCF project Required scopes: bcf:read

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

let apiInstance = new bimdata.BcfApi();
let id = 56; // Number | A unique integer value identifying this project.
apiInstance.getBcfProject(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this project. | 

### Return type

[**BcfProject**](BcfProject.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getBcfProjects

> [BcfProject] getBcfProjects()

Retrieve all BCF projects

Retrieve all BCF projects Required scopes: bcf:read

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

let apiInstance = new bimdata.BcfApi();
apiInstance.getBcfProjects().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[BcfProject]**](BcfProject.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getColorings

> [Coloring] getColorings(guid, projectsPk, topicsGuid)

Retrieve all colorings of a viewpoint

Retrieve all colorings of a viewpoint Required scopes: bcf:read

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

let apiInstance = new bimdata.BcfApi();
let guid = null; // String | 
let projectsPk = "projectsPk_example"; // String | 
let topicsGuid = "topicsGuid_example"; // String | 
apiInstance.getColorings(guid, projectsPk, topicsGuid).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guid** | [**String**](.md)|  | 
 **projectsPk** | **String**|  | 
 **topicsGuid** | **String**|  | 

### Return type

[**[Coloring]**](Coloring.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getComment

> Comment getComment(guid, projectsPk, topicsGuid)

Retrieve a comment

Retrieve a comment Required scopes: bcf:read

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

let apiInstance = new bimdata.BcfApi();
let guid = null; // String | 
let projectsPk = "projectsPk_example"; // String | 
let topicsGuid = "topicsGuid_example"; // String | 
apiInstance.getComment(guid, projectsPk, topicsGuid).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guid** | [**String**](.md)|  | 
 **projectsPk** | **String**|  | 
 **topicsGuid** | **String**|  | 

### Return type

[**Comment**](Comment.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getComments

> [Comment] getComments(projectsPk, topicsGuid)

Retrieve all comments

Retrieve all comments Required scopes: bcf:read

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

let apiInstance = new bimdata.BcfApi();
let projectsPk = "projectsPk_example"; // String | 
let topicsGuid = "topicsGuid_example"; // String | 
apiInstance.getComments(projectsPk, topicsGuid).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **topicsGuid** | **String**|  | 

### Return type

[**[Comment]**](Comment.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getExtensions

> Extensions getExtensions(projectsPk)

Retrieve project extensions

Retrieve project extensions

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

let apiInstance = new bimdata.BcfApi();
let projectsPk = "projectsPk_example"; // String | 
apiInstance.getExtensions(projectsPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFullTopic

> FullTopic getFullTopic(guid, projectsPk)

Retrieve a full topic

This is not a standard route. It responds with a topic, its viewpoints and its comments Required scopes: bcf:read

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

let apiInstance = new bimdata.BcfApi();
let guid = null; // String | 
let projectsPk = "projectsPk_example"; // String | 
apiInstance.getFullTopic(guid, projectsPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guid** | [**String**](.md)|  | 
 **projectsPk** | **String**|  | 

### Return type

[**FullTopic**](FullTopic.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFullTopics

> [FullTopic] getFullTopics(projectsPk, opts)

Retrieve all full topics

This is not a standard route. It responds with all topics, their viewpoints and their comments Required scopes: bcf:read

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

let apiInstance = new bimdata.BcfApi();
let projectsPk = "projectsPk_example"; // String | 
let opts = {
  'ifcs': "ifcs_example", // String | Filter the returned list by ifcs
  'format': "format_example" // String | Filter the returned list by format
};
apiInstance.getFullTopics(projectsPk, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[**[FullTopic]**](FullTopic.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSelections

> [Component] getSelections(guid, projectsPk, topicsGuid)

Retrieve all selections of a viewpoint

Retrieve all selections of a viewpoint Required scopes: bcf:read

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

let apiInstance = new bimdata.BcfApi();
let guid = null; // String | 
let projectsPk = "projectsPk_example"; // String | 
let topicsGuid = "topicsGuid_example"; // String | 
apiInstance.getSelections(guid, projectsPk, topicsGuid).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guid** | [**String**](.md)|  | 
 **projectsPk** | **String**|  | 
 **topicsGuid** | **String**|  | 

### Return type

[**[Component]**](Component.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSnapshot

> File getSnapshot(guid, projectsPk, topicsGuid)

Retrieve the viewpoint&#39; snapshot

Retrieve the viewpoint&#39; snapshot Required scopes: bcf:read

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

let apiInstance = new bimdata.BcfApi();
let guid = null; // String | 
let projectsPk = "projectsPk_example"; // String | 
let topicsGuid = "topicsGuid_example"; // String | 
apiInstance.getSnapshot(guid, projectsPk, topicsGuid).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guid** | [**String**](.md)|  | 
 **projectsPk** | **String**|  | 
 **topicsGuid** | **String**|  | 

### Return type

**File**

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTopic

> Topic getTopic(guid, projectsPk)

Retrieve a topic

Retrieve a topic Required scopes: bcf:read

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

let apiInstance = new bimdata.BcfApi();
let guid = null; // String | 
let projectsPk = "projectsPk_example"; // String | 
apiInstance.getTopic(guid, projectsPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guid** | [**String**](.md)|  | 
 **projectsPk** | **String**|  | 

### Return type

[**Topic**](Topic.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTopicViewpoints

> [Viewpoint] getTopicViewpoints(projectsPk, topicsGuid)

Retrieve all viewpoints attached to the topic

This is not a standard route. It returns all viewpoints of the topic that are not attached to a comment. Required scopes: bcf:read

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

let apiInstance = new bimdata.BcfApi();
let projectsPk = "projectsPk_example"; // String | 
let topicsGuid = "topicsGuid_example"; // String | 
apiInstance.getTopicViewpoints(projectsPk, topicsGuid).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **topicsGuid** | **String**|  | 

### Return type

[**[Viewpoint]**](Viewpoint.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTopics

> [Topic] getTopics(projectsPk, opts)

Retrieve all topics

Retrieve all topics Required scopes: bcf:read

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

let apiInstance = new bimdata.BcfApi();
let projectsPk = "projectsPk_example"; // String | 
let opts = {
  'ifcs': "ifcs_example", // String | Filter the returned list by ifcs
  'format': "format_example" // String | Filter the returned list by format
};
apiInstance.getTopics(projectsPk, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUser

> SelfBcfUser getUser()

Get current user info

Get current user info Required scopes: bcf:read

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

let apiInstance = new bimdata.BcfApi();
apiInstance.getUser().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**SelfBcfUser**](SelfBcfUser.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getViewpoint

> Viewpoint getViewpoint(guid, projectsPk, topicsGuid)

Retrieve a Viewpoint

Retrieve a Viewpoint Required scopes: bcf:read

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

let apiInstance = new bimdata.BcfApi();
let guid = null; // String | 
let projectsPk = "projectsPk_example"; // String | 
let topicsGuid = "topicsGuid_example"; // String | 
apiInstance.getViewpoint(guid, projectsPk, topicsGuid).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guid** | [**String**](.md)|  | 
 **projectsPk** | **String**|  | 
 **topicsGuid** | **String**|  | 

### Return type

[**Viewpoint**](Viewpoint.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getViewpoints

> [Viewpoint] getViewpoints(projectsPk, topicsGuid)

Retrieve all Viewpoints of a topic

Retrieve all Viewpoints of a topic Required scopes: bcf:read

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

let apiInstance = new bimdata.BcfApi();
let projectsPk = "projectsPk_example"; // String | 
let topicsGuid = "topicsGuid_example"; // String | 
apiInstance.getViewpoints(projectsPk, topicsGuid).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **topicsGuid** | **String**|  | 

### Return type

[**[Viewpoint]**](Viewpoint.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getVisibilities

> Visibility getVisibilities(guid, projectsPk, topicsGuid)

Retrieve all visibilities of a viewpoint

Retrieve all visibilities of a viewpoint Required scopes: bcf:read

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

let apiInstance = new bimdata.BcfApi();
let guid = null; // String | 
let projectsPk = "projectsPk_example"; // String | 
let topicsGuid = "topicsGuid_example"; // String | 
apiInstance.getVisibilities(guid, projectsPk, topicsGuid).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guid** | [**String**](.md)|  | 
 **projectsPk** | **String**|  | 
 **topicsGuid** | **String**|  | 

### Return type

[**Visibility**](Visibility.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## importBcf

> importBcf(id, name)

Import bcf-xml format into this project. If there are guid conflict, an error will be raised. If there are index conflicts, indexes of the imported file will be overriden with a new index. Author and assigned_to fields will be linked to existing users in the project. If no matching user are found, fields will be emptied. Only BCF 2.1 is supported

Import bcf-xml format into this project Required scopes: bcf:write

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

let apiInstance = new bimdata.BcfApi();
let id = 56; // Number | A unique integer value identifying this project.
let name = "name_example"; // String | Name of the project
apiInstance.importBcf(id, name).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this project. | 
 **name** | **String**| Name of the project | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: multipart/form-data, application/x-www-form-urlencoded
- **Accept**: Not defined


## updateBcfProject

> BcfProject updateBcfProject(id, data)

Update some fields of a BCF project

Update some fields of a BCF project Required scopes: bcf:write

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

let apiInstance = new bimdata.BcfApi();
let id = 56; // Number | A unique integer value identifying this project.
let data = new bimdata.BcfProject(); // BcfProject | 
apiInstance.updateBcfProject(id, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this project. | 
 **data** | [**BcfProject**](BcfProject.md)|  | 

### Return type

[**BcfProject**](BcfProject.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateComment

> Comment updateComment(guid, projectsPk, topicsGuid, data)

Update some fields of a comment

Update some fields of a comment Required scopes: bcf:write

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

let apiInstance = new bimdata.BcfApi();
let guid = null; // String | 
let projectsPk = "projectsPk_example"; // String | 
let topicsGuid = "topicsGuid_example"; // String | 
let data = new bimdata.Comment(); // Comment | 
apiInstance.updateComment(guid, projectsPk, topicsGuid, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guid** | [**String**](.md)|  | 
 **projectsPk** | **String**|  | 
 **topicsGuid** | **String**|  | 
 **data** | [**Comment**](Comment.md)|  | 

### Return type

[**Comment**](Comment.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateExtensions

> Extensions updateExtensions(projectsPk, data)

Update project extensions

Update project extensions

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

let apiInstance = new bimdata.BcfApi();
let projectsPk = "projectsPk_example"; // String | 
let data = new bimdata.Extensions(); // Extensions | 
apiInstance.updateExtensions(projectsPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectsPk** | **String**|  | 
 **data** | [**Extensions**](Extensions.md)|  | 

### Return type

[**Extensions**](Extensions.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateFullTopic

> FullTopic updateFullTopic(guid, projectsPk, data)

Update some fields of a topic

This is not a standard route. You can update topic, viewpoints and comment is a signle call Required scopes: bcf:write

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

let apiInstance = new bimdata.BcfApi();
let guid = null; // String | 
let projectsPk = "projectsPk_example"; // String | 
let data = new bimdata.FullTopic(); // FullTopic | 
apiInstance.updateFullTopic(guid, projectsPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guid** | [**String**](.md)|  | 
 **projectsPk** | **String**|  | 
 **data** | [**FullTopic**](FullTopic.md)|  | 

### Return type

[**FullTopic**](FullTopic.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateTopic

> Topic updateTopic(guid, projectsPk, data)

Update some fields of a topic

Update some fields of a topic Required scopes: bcf:write

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

let apiInstance = new bimdata.BcfApi();
let guid = null; // String | 
let projectsPk = "projectsPk_example"; // String | 
let data = new bimdata.Topic(); // Topic | 
apiInstance.updateTopic(guid, projectsPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guid** | [**String**](.md)|  | 
 **projectsPk** | **String**|  | 
 **data** | [**Topic**](Topic.md)|  | 

### Return type

[**Topic**](Topic.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateViewpoint

> Viewpoint updateViewpoint(guid, projectsPk, topicsGuid, data)

Update some fields of a Viewpoint

This is not a standard route. Update some fields of a Viewpoint Required scopes: bcf:write

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

let apiInstance = new bimdata.BcfApi();
let guid = null; // String | 
let projectsPk = "projectsPk_example"; // String | 
let topicsGuid = "topicsGuid_example"; // String | 
let data = new bimdata.Viewpoint(); // Viewpoint | 
apiInstance.updateViewpoint(guid, projectsPk, topicsGuid, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guid** | [**String**](.md)|  | 
 **projectsPk** | **String**|  | 
 **topicsGuid** | **String**|  | 
 **data** | [**Viewpoint**](Viewpoint.md)|  | 

### Return type

[**Viewpoint**](Viewpoint.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


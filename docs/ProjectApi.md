# bimdata.ProjectApi

All URIs are relative to *https://api-beta.bimdata.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelProjectUserInvitation**](ProjectApi.md#cancelProjectUserInvitation) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/invitation/{id} | Cancel a pending invitation
[**createClassification**](ProjectApi.md#createClassification) | **POST** /cloud/{cloud_pk}/project/{project_pk}/classification | Create a classification
[**createDocument**](ProjectApi.md#createDocument) | **POST** /cloud/{cloud_pk}/project/{project_pk}/document | Create a document
[**createFolder**](ProjectApi.md#createFolder) | **POST** /cloud/{cloud_pk}/project/{project_pk}/folder | Create a folder
[**createProject**](ProjectApi.md#createProject) | **POST** /cloud/{cloud_pk}/project | Create a project
[**deleteClassification**](ProjectApi.md#deleteClassification) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/classification/{id} | Delete a classification
[**deleteDocument**](ProjectApi.md#deleteDocument) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/document/{id} | Delete the document
[**deleteFolder**](ProjectApi.md#deleteFolder) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/folder/{id} | Delete a folder
[**deleteProject**](ProjectApi.md#deleteProject) | **DELETE** /cloud/{cloud_pk}/project/{id} | Delete a project
[**deleteProjectUser**](ProjectApi.md#deleteProjectUser) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/user/{id} | Remove a user from a project
[**fullUpdateClassification**](ProjectApi.md#fullUpdateClassification) | **PUT** /cloud/{cloud_pk}/project/{project_pk}/classification/{id} | Update all fields of a classification
[**fullUpdateDocument**](ProjectApi.md#fullUpdateDocument) | **PUT** /cloud/{cloud_pk}/project/{project_pk}/document/{id} | Update all fields of the document
[**fullUpdateFolder**](ProjectApi.md#fullUpdateFolder) | **PUT** /cloud/{cloud_pk}/project/{project_pk}/folder/{id} | Update all fields of a folder
[**fullUpdateProject**](ProjectApi.md#fullUpdateProject) | **PUT** /cloud/{cloud_pk}/project/{id} | Update all fields of a project
[**fullUpdateProjectUser**](ProjectApi.md#fullUpdateProjectUser) | **PUT** /cloud/{cloud_pk}/project/{project_pk}/user/{id} | Update all fields of a project user
[**getClassification**](ProjectApi.md#getClassification) | **GET** /cloud/{cloud_pk}/project/{project_pk}/classification/{id} | Retrieve a classification
[**getClassifications**](ProjectApi.md#getClassifications) | **GET** /cloud/{cloud_pk}/project/{project_pk}/classification | Retrieve all classifications
[**getDocument**](ProjectApi.md#getDocument) | **GET** /cloud/{cloud_pk}/project/{project_pk}/document/{id} | Retrieve a document
[**getDocuments**](ProjectApi.md#getDocuments) | **GET** /cloud/{cloud_pk}/project/{project_pk}/document | Retrieve all documents
[**getFolder**](ProjectApi.md#getFolder) | **GET** /cloud/{cloud_pk}/project/{project_pk}/folder/{id} | Retrieve a folder
[**getFolders**](ProjectApi.md#getFolders) | **GET** /cloud/{cloud_pk}/project/{project_pk}/folder | Retrieve all folders
[**getProject**](ProjectApi.md#getProject) | **GET** /cloud/{cloud_pk}/project/{id} | Retrieve a project
[**getProjectInvitations**](ProjectApi.md#getProjectInvitations) | **GET** /cloud/{cloud_pk}/project/{project_pk}/invitation | Retrieve all pending invitations in the project
[**getProjectTree**](ProjectApi.md#getProjectTree) | **GET** /cloud/{cloud_pk}/project/{id}/tree | Retrieve the complete DMS tree
[**getProjectUser**](ProjectApi.md#getProjectUser) | **GET** /cloud/{cloud_pk}/project/{project_pk}/user/{id} | Retrieve a user in a project
[**getProjectUsers**](ProjectApi.md#getProjectUsers) | **GET** /cloud/{cloud_pk}/project/{project_pk}/user | Retrieve all users in a project
[**getProjects**](ProjectApi.md#getProjects) | **GET** /cloud/{cloud_pk}/project | Retrieve all projects
[**inviteProjectUser**](ProjectApi.md#inviteProjectUser) | **POST** /cloud/{cloud_pk}/project/{project_pk}/invitation | Invite a project member
[**updateClassification**](ProjectApi.md#updateClassification) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/classification/{id} | Update some fields of a classification
[**updateDocument**](ProjectApi.md#updateDocument) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/document/{id} | Update some fields of the document
[**updateFolder**](ProjectApi.md#updateFolder) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/folder/{id} | Update some fields of a folder
[**updateProject**](ProjectApi.md#updateProject) | **PATCH** /cloud/{cloud_pk}/project/{id} | Update some fields of a project
[**updateProjectUser**](ProjectApi.md#updateProjectUser) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/user/{id} | Update some fields of a project user


<a name="cancelProjectUserInvitation"></a>
# **cancelProjectUserInvitation**
> cancelProjectUserInvitation(cloudPk, id, projectPk)

Cancel a pending invitation

 Required scopes: org:manage

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.ProjectApi();
var cloudPk = "cloudPk_example"; // String | 
var id = 56; // Number | A unique integer value identifying this invitation.
var projectPk = "projectPk_example"; // String | 
apiInstance.cancelProjectUserInvitation(cloudPk, id, projectPk).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this invitation. | 
 **projectPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="createClassification"></a>
# **createClassification**
> [Classification] createClassification(cloudPk, projectPk, classification)

Create a classification

         Bulk create available.         You can either post an object or a list of objects.         Is you post a list, the response will be a list (in the same order) of created objects or of errors if any         If at least one create succeeded, the status code will be 201. If every create failed, the status code we&#39;ll be 400 with the list of errors          If created classification already exists, it will not be duplicated and the previous one will be returned.     You also can add a &#39;classification&#39; filter on this endpoint. By ex: /classification?name&#x3D;&#39;untec&#39;. The name is case sensitive      Required scopes: ifc:write

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.ProjectApi();
var cloudPk = "cloudPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
var classification = [new bimdata.Classification()]; // [Classification] | 
apiInstance.createClassification(cloudPk, projectPk, classification).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **classification** | [**[Classification]**](Array.md)|  | 

### Return type

[**[Classification]**](Classification.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createDocument"></a>
# **createDocument**
> Document createDocument(cloudPk, projectPk, name, opts)

Create a document

RCreate a document. If the document is an IFC, an IFC model will be created and attached to this document Required scopes: document:write

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.ProjectApi();
var cloudPk = "cloudPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
var name = "name_example"; // String | Shown name of the file
var opts = {
  'parent': 56, // Number | 
  'parentId': 56, // Number | 
  'creator': 56, // Number | 
  'project': 56, // Number | 
  'fileName': "fileName_example", // String | Full name of the file
  'description': "description_example", // String | Description of the file
  'file': "/path/to/file", // File | 
  'size': 56 // Number | Size of the file. The file may be compressed and show a smaller size
};
apiInstance.createDocument(cloudPk, projectPk, name, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **name** | **String**| Shown name of the file | 
 **parent** | **Number**|  | [optional] 
 **parentId** | **Number**|  | [optional] 
 **creator** | **Number**|  | [optional] 
 **project** | **Number**|  | [optional] 
 **fileName** | **String**| Full name of the file | [optional] 
 **description** | **String**| Description of the file | [optional] 
 **file** | **File**|  | [optional] 
 **size** | **Number**| Size of the file. The file may be compressed and show a smaller size | [optional] 

### Return type

[**Document**](Document.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="createFolder"></a>
# **createFolder**
> Folder createFolder(cloudPk, projectPk, folder)

Create a folder

If the created folder have no parent, it will be put as a child of the default root folder of the project Required scopes: document:write

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.ProjectApi();
var cloudPk = "cloudPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
var folder = new bimdata.Folder(); // Folder | 
apiInstance.createFolder(cloudPk, projectPk, folder).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **folder** | [**Folder**](Folder.md)|  | 

### Return type

[**Folder**](Folder.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createProject"></a>
# **createProject**
> Project createProject(cloudPk, project)

Create a project

Create a project Required scopes: org:manage

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.ProjectApi();
var cloudPk = "cloudPk_example"; // String | 
var project = new bimdata.Project(); // Project | 
apiInstance.createProject(cloudPk, project).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **project** | [**Project**](Project.md)|  | 

### Return type

[**Project**](Project.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteClassification"></a>
# **deleteClassification**
> deleteClassification(cloudPk, id, projectPk)

Delete a classification

All elements having this classification will lose it Required scopes: ifc:write

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.ProjectApi();
var cloudPk = "cloudPk_example"; // String | 
var id = 56; // Number | A unique integer value identifying this classification.
var projectPk = "projectPk_example"; // String | 
apiInstance.deleteClassification(cloudPk, id, projectPk).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this classification. | 
 **projectPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteDocument"></a>
# **deleteDocument**
> deleteDocument(cloudPk, id, projectPk)

Delete the document

Delete the document Required scopes: document:write

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.ProjectApi();
var cloudPk = "cloudPk_example"; // String | 
var id = 56; // Number | A unique integer value identifying this document.
var projectPk = "projectPk_example"; // String | 
apiInstance.deleteDocument(cloudPk, id, projectPk).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this document. | 
 **projectPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteFolder"></a>
# **deleteFolder**
> deleteFolder(cloudPk, id, projectPk)

Delete a folder

All files and subfolders will be deleted too Required scopes: document:write

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.ProjectApi();
var cloudPk = "cloudPk_example"; // String | 
var id = 56; // Number | A unique integer value identifying this folder.
var projectPk = "projectPk_example"; // String | 
apiInstance.deleteFolder(cloudPk, id, projectPk).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this folder. | 
 **projectPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteProject"></a>
# **deleteProject**
> deleteProject(cloudPk, id)

Delete a project

It can take a long time to respond because we may need to delete all properties of all elements of all models in the project Required scopes: org:manage

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.ProjectApi();
var cloudPk = "cloudPk_example"; // String | 
var id = 56; // Number | A unique integer value identifying this project.
apiInstance.deleteProject(cloudPk, id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this project. | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteProjectUser"></a>
# **deleteProjectUser**
> deleteProjectUser(cloudPk, id, projectPk)

Remove a user from a project

Remove a user from a project Required scopes: cloud:manage

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.ProjectApi();
var cloudPk = "cloudPk_example"; // String | 
var id = "id_example"; // String | 
var projectPk = "projectPk_example"; // String | 
apiInstance.deleteProjectUser(cloudPk, id, projectPk).then(function() {
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
 **projectPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="fullUpdateClassification"></a>
# **fullUpdateClassification**
> Classification fullUpdateClassification(cloudPk, id, projectPk, classification)

Update all fields of a classification

Update all fields of a classification Required scopes: ifc:write

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.ProjectApi();
var cloudPk = "cloudPk_example"; // String | 
var id = 56; // Number | A unique integer value identifying this classification.
var projectPk = "projectPk_example"; // String | 
var classification = new bimdata.Classification(); // Classification | 
apiInstance.fullUpdateClassification(cloudPk, id, projectPk, classification).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this classification. | 
 **projectPk** | **String**|  | 
 **classification** | [**Classification**](Classification.md)|  | 

### Return type

[**Classification**](Classification.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdateDocument"></a>
# **fullUpdateDocument**
> Document fullUpdateDocument(cloudPk, id, projectPk, name, opts)

Update all fields of the document

Update all fields of the document Required scopes: document:write

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.ProjectApi();
var cloudPk = "cloudPk_example"; // String | 
var id = 56; // Number | A unique integer value identifying this document.
var projectPk = "projectPk_example"; // String | 
var name = "name_example"; // String | Shown name of the file
var opts = {
  'parent': 56, // Number | 
  'parentId': 56, // Number | 
  'creator': 56, // Number | 
  'project': 56, // Number | 
  'fileName': "fileName_example", // String | Full name of the file
  'description': "description_example", // String | Description of the file
  'file': "/path/to/file", // File | 
  'size': 56 // Number | Size of the file. The file may be compressed and show a smaller size
};
apiInstance.fullUpdateDocument(cloudPk, id, projectPk, name, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this document. | 
 **projectPk** | **String**|  | 
 **name** | **String**| Shown name of the file | 
 **parent** | **Number**|  | [optional] 
 **parentId** | **Number**|  | [optional] 
 **creator** | **Number**|  | [optional] 
 **project** | **Number**|  | [optional] 
 **fileName** | **String**| Full name of the file | [optional] 
 **description** | **String**| Description of the file | [optional] 
 **file** | **File**|  | [optional] 
 **size** | **Number**| Size of the file. The file may be compressed and show a smaller size | [optional] 

### Return type

[**Document**](Document.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="fullUpdateFolder"></a>
# **fullUpdateFolder**
> Folder fullUpdateFolder(cloudPk, id, projectPk, folder)

Update all fields of a folder

Update all fields of a folder Required scopes: document:write

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.ProjectApi();
var cloudPk = "cloudPk_example"; // String | 
var id = 56; // Number | A unique integer value identifying this folder.
var projectPk = "projectPk_example"; // String | 
var folder = new bimdata.Folder(); // Folder | 
apiInstance.fullUpdateFolder(cloudPk, id, projectPk, folder).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this folder. | 
 **projectPk** | **String**|  | 
 **folder** | [**Folder**](Folder.md)|  | 

### Return type

[**Folder**](Folder.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdateProject"></a>
# **fullUpdateProject**
> Project fullUpdateProject(cloudPk, id, project)

Update all fields of a project

Update all fields of a project Required scopes: org:manage

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.ProjectApi();
var cloudPk = "cloudPk_example"; // String | 
var id = 56; // Number | A unique integer value identifying this project.
var project = new bimdata.Project(); // Project | 
apiInstance.fullUpdateProject(cloudPk, id, project).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this project. | 
 **project** | [**Project**](Project.md)|  | 

### Return type

[**Project**](Project.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdateProjectUser"></a>
# **fullUpdateProjectUser**
> User fullUpdateProjectUser(cloudPk, id, projectPk, userProjectUpdate)

Update all fields of a project user

Change the user role in the cloud Required scopes: cloud:manage

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.ProjectApi();
var cloudPk = "cloudPk_example"; // String | 
var id = "id_example"; // String | 
var projectPk = "projectPk_example"; // String | 
var userProjectUpdate = new bimdata.UserProjectUpdate(); // UserProjectUpdate | 
apiInstance.fullUpdateProjectUser(cloudPk, id, projectPk, userProjectUpdate).then(function(data) {
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
 **projectPk** | **String**|  | 
 **userProjectUpdate** | [**UserProjectUpdate**](UserProjectUpdate.md)|  | 

### Return type

[**User**](User.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getClassification"></a>
# **getClassification**
> Classification getClassification(cloudPk, id, projectPk)

Retrieve a classification

Retrieve a classification Required scopes: ifc:read

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.ProjectApi();
var cloudPk = "cloudPk_example"; // String | 
var id = 56; // Number | A unique integer value identifying this classification.
var projectPk = "projectPk_example"; // String | 
apiInstance.getClassification(cloudPk, id, projectPk).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this classification. | 
 **projectPk** | **String**|  | 

### Return type

[**Classification**](Classification.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getClassifications"></a>
# **getClassifications**
> [Classification] getClassifications(cloudPk, projectPk)

Retrieve all classifications

Retrieve all classifications of all models in the project Required scopes: ifc:read

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.ProjectApi();
var cloudPk = "cloudPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
apiInstance.getClassifications(cloudPk, projectPk).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 

### Return type

[**[Classification]**](Classification.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDocument"></a>
# **getDocument**
> Document getDocument(cloudPk, id, projectPk)

Retrieve a document

Retrieve a document in the project Required scopes: document:read

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.ProjectApi();
var cloudPk = "cloudPk_example"; // String | 
var id = 56; // Number | A unique integer value identifying this document.
var projectPk = "projectPk_example"; // String | 
apiInstance.getDocument(cloudPk, id, projectPk).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this document. | 
 **projectPk** | **String**|  | 

### Return type

[**Document**](Document.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDocuments"></a>
# **getDocuments**
> [Document] getDocuments(cloudPk, projectPk)

Retrieve all documents

Retrieve all documents in the project Required scopes: document:read

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.ProjectApi();
var cloudPk = "cloudPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
apiInstance.getDocuments(cloudPk, projectPk).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 

### Return type

[**[Document]**](Document.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getFolder"></a>
# **getFolder**
> Folder getFolder(cloudPk, id, projectPk)

Retrieve a folder

Retrieve a folder Required scopes: document:read

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.ProjectApi();
var cloudPk = "cloudPk_example"; // String | 
var id = 56; // Number | A unique integer value identifying this folder.
var projectPk = "projectPk_example"; // String | 
apiInstance.getFolder(cloudPk, id, projectPk).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this folder. | 
 **projectPk** | **String**|  | 

### Return type

[**Folder**](Folder.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getFolders"></a>
# **getFolders**
> [Folder] getFolders(cloudPk, projectPk)

Retrieve all folders

Retrieve all folders in the project. This is an array of folder. If you want to get the tree of all folders, see getProjectTree Required scopes: document:read

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.ProjectApi();
var cloudPk = "cloudPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
apiInstance.getFolders(cloudPk, projectPk).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 

### Return type

[**[Folder]**](Folder.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProject"></a>
# **getProject**
> Project getProject(cloudPk, id)

Retrieve a project

Retrieve a project

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.ProjectApi();
var cloudPk = "cloudPk_example"; // String | 
var id = 56; // Number | A unique integer value identifying this project.
apiInstance.getProject(cloudPk, id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this project. | 

### Return type

[**Project**](Project.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProjectInvitations"></a>
# **getProjectInvitations**
> [ProjectInvitation] getProjectInvitations(cloudPk, projectPk)

Retrieve all pending invitations in the project

Returns app&#39;s invitations only Required scopes: org:manage

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.ProjectApi();
var cloudPk = "cloudPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
apiInstance.getProjectInvitations(cloudPk, projectPk).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 

### Return type

[**[ProjectInvitation]**](ProjectInvitation.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProjectTree"></a>
# **getProjectTree**
> Folder getProjectTree(cloudPk, id)

Retrieve the complete DMS tree

Returns the document tree from root folder

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.ProjectApi();
var cloudPk = "cloudPk_example"; // String | 
var id = 56; // Number | A unique integer value identifying this project.
apiInstance.getProjectTree(cloudPk, id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this project. | 

### Return type

[**Folder**](Folder.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProjectUser"></a>
# **getProjectUser**
> User getProjectUser(cloudPk, id, projectPk)

Retrieve a user in a project

Each member of a project can see other members of the project Required scopes: cloud:read

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.ProjectApi();
var cloudPk = "cloudPk_example"; // String | 
var id = "id_example"; // String | 
var projectPk = "projectPk_example"; // String | 
apiInstance.getProjectUser(cloudPk, id, projectPk).then(function(data) {
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
 **projectPk** | **String**|  | 

### Return type

[**User**](User.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProjectUsers"></a>
# **getProjectUsers**
> [User] getProjectUsers(cloudPk, projectPk)

Retrieve all users in a project

Each member of a project can see other members of the project Required scopes: cloud:read

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.ProjectApi();
var cloudPk = "cloudPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
apiInstance.getProjectUsers(cloudPk, projectPk).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 

### Return type

[**[User]**](User.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProjects"></a>
# **getProjects**
> [Project] getProjects(cloudPk)

Retrieve all projects

Retrieve all projects of the cloud

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.ProjectApi();
var cloudPk = "cloudPk_example"; // String | 
apiInstance.getProjects(cloudPk).then(function(data) {
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

[**[Project]**](Project.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="inviteProjectUser"></a>
# **inviteProjectUser**
> ProjectInvitation inviteProjectUser(cloudPk, projectPk, projectInvitation)

Invite a project member

Invite a project member. If the user is not already a cloud member, they will also be invited in the cloud with USER role. Required scopes: org:manage

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.ProjectApi();
var cloudPk = "cloudPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
var projectInvitation = new bimdata.ProjectInvitation(); // ProjectInvitation | 
apiInstance.inviteProjectUser(cloudPk, projectPk, projectInvitation).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **projectInvitation** | [**ProjectInvitation**](ProjectInvitation.md)|  | 

### Return type

[**ProjectInvitation**](ProjectInvitation.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateClassification"></a>
# **updateClassification**
> Classification updateClassification(cloudPk, id, projectPk, classification)

Update some fields of a classification

Update some fields of a classification Required scopes: ifc:write

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.ProjectApi();
var cloudPk = "cloudPk_example"; // String | 
var id = 56; // Number | A unique integer value identifying this classification.
var projectPk = "projectPk_example"; // String | 
var classification = new bimdata.Classification(); // Classification | 
apiInstance.updateClassification(cloudPk, id, projectPk, classification).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this classification. | 
 **projectPk** | **String**|  | 
 **classification** | [**Classification**](Classification.md)|  | 

### Return type

[**Classification**](Classification.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateDocument"></a>
# **updateDocument**
> Document updateDocument(cloudPk, id, projectPk, document)

Update some fields of the document

Update some fields of the document Required scopes: document:write

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.ProjectApi();
var cloudPk = "cloudPk_example"; // String | 
var id = 56; // Number | A unique integer value identifying this document.
var projectPk = "projectPk_example"; // String | 
var document = new bimdata.Document(); // Document | 
apiInstance.updateDocument(cloudPk, id, projectPk, document).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this document. | 
 **projectPk** | **String**|  | 
 **document** | [**Document**](Document.md)|  | 

### Return type

[**Document**](Document.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateFolder"></a>
# **updateFolder**
> Folder updateFolder(cloudPk, id, projectPk, folder)

Update some fields of a folder

Update some fields of a folder Required scopes: document:write

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.ProjectApi();
var cloudPk = "cloudPk_example"; // String | 
var id = 56; // Number | A unique integer value identifying this folder.
var projectPk = "projectPk_example"; // String | 
var folder = new bimdata.Folder(); // Folder | 
apiInstance.updateFolder(cloudPk, id, projectPk, folder).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this folder. | 
 **projectPk** | **String**|  | 
 **folder** | [**Folder**](Folder.md)|  | 

### Return type

[**Folder**](Folder.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateProject"></a>
# **updateProject**
> Project updateProject(cloudPk, id, project)

Update some fields of a project

Update some fields of a project Required scopes: org:manage

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.ProjectApi();
var cloudPk = "cloudPk_example"; // String | 
var id = 56; // Number | A unique integer value identifying this project.
var project = new bimdata.Project(); // Project | 
apiInstance.updateProject(cloudPk, id, project).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this project. | 
 **project** | [**Project**](Project.md)|  | 

### Return type

[**Project**](Project.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateProjectUser"></a>
# **updateProjectUser**
> User updateProjectUser(cloudPk, id, projectPk, userProjectUpdate)

Update some fields of a project user

Change the user role in the cloud Required scopes: cloud:manage

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.ProjectApi();
var cloudPk = "cloudPk_example"; // String | 
var id = "id_example"; // String | 
var projectPk = "projectPk_example"; // String | 
var userProjectUpdate = new bimdata.UserProjectUpdate(); // UserProjectUpdate | 
apiInstance.updateProjectUser(cloudPk, id, projectPk, userProjectUpdate).then(function(data) {
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
 **projectPk** | **String**|  | 
 **userProjectUpdate** | [**UserProjectUpdate**](UserProjectUpdate.md)|  | 

### Return type

[**User**](User.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


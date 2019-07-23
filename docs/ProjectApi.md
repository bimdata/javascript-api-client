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
[**getProjectDMSTree**](ProjectApi.md#getProjectDMSTree) | **GET** /cloud/{cloud_pk}/project/{id}/dms-tree | Retrieve the complete DMS tree
[**getProjectInvitations**](ProjectApi.md#getProjectInvitations) | **GET** /cloud/{cloud_pk}/project/{project_pk}/invitation | Retrieve all pending invitations in the project
[**getProjectSubTree**](ProjectApi.md#getProjectSubTree) | **GET** /cloud/{cloud_pk}/project/subtree | Retrieve the complete projects tree of the cloud
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



## cancelProjectUserInvitation

> cancelProjectUserInvitation(cloudPk, id, projectPk)

Cancel a pending invitation

 Required scopes: org:manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.ProjectApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this invitation.
let projectPk = "projectPk_example"; // String | 
apiInstance.cancelProjectUserInvitation(cloudPk, id, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## createClassification

> Classification createClassification(cloudPk, projectPk, data)

Create a classification

Verify parent existence before creating to avoid applications of creating objects in a project they don&#39;t own Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.ProjectApi();
let cloudPk = "cloudPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.Classification(); // Classification | 
apiInstance.createClassification(cloudPk, projectPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **data** | [**Classification**](Classification.md)|  | 

### Return type

[**Classification**](Classification.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createDocument

> Document createDocument(cloudPk, projectPk, name, opts)

Create a document

Verify parent existence before creating to avoid applications of creating objects in a project they don&#39;t own Required scopes: document:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.ProjectApi();
let cloudPk = "cloudPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let name = "name_example"; // String | Shown name of the file
let opts = {
  'parent': 56, // Number | 
  'parentId': 56, // Number | 
  'creator': 56, // Number | 
  'project': 56, // Number | 
  'fileName': "fileName_example", // String | Full name of the file
  'description': "description_example", // String | Description of the file
  'file': "/path/to/file", // File | 
  'size': 56 // Number | Size of the file. The file may be compressed and show a smaller size
};
apiInstance.createDocument(cloudPk, projectPk, name, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: multipart/form-data, application/x-www-form-urlencoded
- **Accept**: application/json


## createFolder

> RecursiveFolder createFolder(cloudPk, projectPk, data)

Create a folder

Verify parent existence before creating to avoid applications of creating objects in a project they don&#39;t own Required scopes: document:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.ProjectApi();
let cloudPk = "cloudPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.RecursiveFolder(); // RecursiveFolder | 
apiInstance.createFolder(cloudPk, projectPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **data** | [**RecursiveFolder**](RecursiveFolder.md)|  | 

### Return type

[**RecursiveFolder**](RecursiveFolder.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createProject

> Project createProject(cloudPk, data)

Create a project

Create a project Required scopes: org:manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.ProjectApi();
let cloudPk = "cloudPk_example"; // String | 
let data = new bimdata.Project(); // Project | 
apiInstance.createProject(cloudPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **data** | [**Project**](Project.md)|  | 

### Return type

[**Project**](Project.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteClassification

> deleteClassification(cloudPk, id, projectPk)

Delete a classification

All elements having this classification will lose it Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.ProjectApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this classification.
let projectPk = "projectPk_example"; // String | 
apiInstance.deleteClassification(cloudPk, id, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteDocument

> deleteDocument(cloudPk, id, projectPk)

Delete the document

Delete the document Required scopes: document:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.ProjectApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this document.
let projectPk = "projectPk_example"; // String | 
apiInstance.deleteDocument(cloudPk, id, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteFolder

> deleteFolder(cloudPk, id, projectPk)

Delete a folder

All files and subfolders will be deleted too Required scopes: document:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.ProjectApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this folder.
let projectPk = "projectPk_example"; // String | 
apiInstance.deleteFolder(cloudPk, id, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteProject

> deleteProject(cloudPk, id)

Delete a project

It can take a long time to respond because we may need to delete all properties of all elements of all models in the project Required scopes: org:manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.ProjectApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this project.
apiInstance.deleteProject(cloudPk, id).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteProjectUser

> deleteProjectUser(cloudPk, id, projectPk)

Remove a user from a project

Remove a user from a project Required scopes: cloud:manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.ProjectApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this fos user.
let projectPk = "projectPk_example"; // String | 
apiInstance.deleteProjectUser(cloudPk, id, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this fos user. | 
 **projectPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## fullUpdateClassification

> Classification fullUpdateClassification(cloudPk, id, projectPk, data)

Update all fields of a classification

Update all fields of a classification Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.ProjectApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this classification.
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.Classification(); // Classification | 
apiInstance.fullUpdateClassification(cloudPk, id, projectPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this classification. | 
 **projectPk** | **String**|  | 
 **data** | [**Classification**](Classification.md)|  | 

### Return type

[**Classification**](Classification.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## fullUpdateDocument

> Document fullUpdateDocument(cloudPk, id, projectPk, name, opts)

Update all fields of the document

Update all fields of the document Required scopes: document:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.ProjectApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this document.
let projectPk = "projectPk_example"; // String | 
let name = "name_example"; // String | Shown name of the file
let opts = {
  'parent': 56, // Number | 
  'parentId': 56, // Number | 
  'creator': 56, // Number | 
  'project': 56, // Number | 
  'fileName': "fileName_example", // String | Full name of the file
  'description': "description_example", // String | Description of the file
  'file': "/path/to/file", // File | 
  'size': 56 // Number | Size of the file. The file may be compressed and show a smaller size
};
apiInstance.fullUpdateDocument(cloudPk, id, projectPk, name, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: multipart/form-data, application/x-www-form-urlencoded
- **Accept**: application/json


## fullUpdateFolder

> RecursiveFolder fullUpdateFolder(cloudPk, id, projectPk, data)

Update all fields of a folder

Update all fields of a folder Required scopes: document:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.ProjectApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this folder.
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.RecursiveFolder(); // RecursiveFolder | 
apiInstance.fullUpdateFolder(cloudPk, id, projectPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this folder. | 
 **projectPk** | **String**|  | 
 **data** | [**RecursiveFolder**](RecursiveFolder.md)|  | 

### Return type

[**RecursiveFolder**](RecursiveFolder.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## fullUpdateProject

> Project fullUpdateProject(cloudPk, id, data)

Update all fields of a project

Update all fields of a project Required scopes: org:manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.ProjectApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this project.
let data = new bimdata.Project(); // Project | 
apiInstance.fullUpdateProject(cloudPk, id, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this project. | 
 **data** | [**Project**](Project.md)|  | 

### Return type

[**Project**](Project.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## fullUpdateProjectUser

> User fullUpdateProjectUser(cloudPk, id, projectPk, data)

Update all fields of a project user

Change the user role in the cloud Required scopes: cloud:manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.ProjectApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this fos user.
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.UserProjectUpdate(); // UserProjectUpdate | 
apiInstance.fullUpdateProjectUser(cloudPk, id, projectPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this fos user. | 
 **projectPk** | **String**|  | 
 **data** | [**UserProjectUpdate**](UserProjectUpdate.md)|  | 

### Return type

[**User**](User.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getClassification

> Classification getClassification(cloudPk, id, projectPk)

Retrieve a classification

Retrieve a classification Required scopes: ifc:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.ProjectApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this classification.
let projectPk = "projectPk_example"; // String | 
apiInstance.getClassification(cloudPk, id, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getClassifications

> [Classification] getClassifications(cloudPk, projectPk)

Retrieve all classifications

Verify parent existence before listing to send a 404 instead of an empty list Required scopes: ifc:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.ProjectApi();
let cloudPk = "cloudPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.getClassifications(cloudPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDocument

> Document getDocument(cloudPk, id, projectPk)

Retrieve a document

Retrieve a document in the project Required scopes: document:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.ProjectApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this document.
let projectPk = "projectPk_example"; // String | 
apiInstance.getDocument(cloudPk, id, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDocuments

> [Document] getDocuments(cloudPk, projectPk)

Retrieve all documents

Verify parent existence before listing to send a 404 instead of an empty list Required scopes: document:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.ProjectApi();
let cloudPk = "cloudPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.getDocuments(cloudPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFolder

> RecursiveFolder getFolder(cloudPk, id, projectPk)

Retrieve a folder

Retrieve a folder Required scopes: document:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.ProjectApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this folder.
let projectPk = "projectPk_example"; // String | 
apiInstance.getFolder(cloudPk, id, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[**RecursiveFolder**](RecursiveFolder.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFolders

> [RecursiveFolder] getFolders(cloudPk, projectPk)

Retrieve all folders

Verify parent existence before listing to send a 404 instead of an empty list Required scopes: document:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.ProjectApi();
let cloudPk = "cloudPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.getFolders(cloudPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 

### Return type

[**[RecursiveFolder]**](RecursiveFolder.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProject

> ProjectWithChildren getProject(cloudPk, id)

Retrieve a project

Retrieve a project

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.ProjectApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this project.
apiInstance.getProject(cloudPk, id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this project. | 

### Return type

[**ProjectWithChildren**](ProjectWithChildren.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProjectDMSTree

> RecursiveFolder getProjectDMSTree(cloudPk, id)

Retrieve the complete DMS tree

Retrieve the complete DMS tree (all folders and all documents in the project)

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.ProjectApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this project.
apiInstance.getProjectDMSTree(cloudPk, id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this project. | 

### Return type

[**RecursiveFolder**](RecursiveFolder.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProjectInvitations

> [ProjectInvitation] getProjectInvitations(cloudPk, projectPk)

Retrieve all pending invitations in the project

Returns app&#39;s invitations only Required scopes: org:manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.ProjectApi();
let cloudPk = "cloudPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.getProjectInvitations(cloudPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProjectSubTree

> [ProjectWithChildren] getProjectSubTree(cloudPk)

Retrieve the complete projects tree of the cloud

Retrieve the complete projects tree of the cloud

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.ProjectApi();
let cloudPk = "cloudPk_example"; // String | 
apiInstance.getProjectSubTree(cloudPk).then((data) => {
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

[**[ProjectWithChildren]**](ProjectWithChildren.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProjectTree

> RecursiveFolder getProjectTree(cloudPk, id)

Retrieve the complete DMS tree

Retrieve the complete DMS tree (all folders and all documents in the project). DEPRECATED: renamed to getProjectDMSTree

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.ProjectApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this project.
apiInstance.getProjectTree(cloudPk, id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this project. | 

### Return type

[**RecursiveFolder**](RecursiveFolder.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProjectUser

> User getProjectUser(cloudPk, id, projectPk)

Retrieve a user in a project

Each member of a project can see other members of the project Required scopes: cloud:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.ProjectApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this fos user.
let projectPk = "projectPk_example"; // String | 
apiInstance.getProjectUser(cloudPk, id, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this fos user. | 
 **projectPk** | **String**|  | 

### Return type

[**User**](User.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProjectUsers

> [User] getProjectUsers(cloudPk, projectPk)

Retrieve all users in a project

Verify parent existence before listing to send a 404 instead of an empty list Required scopes: cloud:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.ProjectApi();
let cloudPk = "cloudPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.getProjectUsers(cloudPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProjects

> [Project] getProjects(cloudPk)

Retrieve all projects

Retrieve all projects of the cloud. All project are shown at the same level. see #getProjectSubTree

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.ProjectApi();
let cloudPk = "cloudPk_example"; // String | 
apiInstance.getProjects(cloudPk).then((data) => {
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

[**[Project]**](Project.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## inviteProjectUser

> ProjectInvitation inviteProjectUser(cloudPk, projectPk, data)

Invite a project member

Invite a project member. If the user is not already a cloud member, they will also be invited in the cloud with USER role. Required scopes: org:manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.ProjectApi();
let cloudPk = "cloudPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.ProjectInvitation(); // ProjectInvitation | 
apiInstance.inviteProjectUser(cloudPk, projectPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **data** | [**ProjectInvitation**](ProjectInvitation.md)|  | 

### Return type

[**ProjectInvitation**](ProjectInvitation.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateClassification

> Classification updateClassification(cloudPk, id, projectPk, data)

Update some fields of a classification

Update some fields of a classification Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.ProjectApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this classification.
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.Classification(); // Classification | 
apiInstance.updateClassification(cloudPk, id, projectPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this classification. | 
 **projectPk** | **String**|  | 
 **data** | [**Classification**](Classification.md)|  | 

### Return type

[**Classification**](Classification.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateDocument

> Document updateDocument(cloudPk, id, projectPk, data)

Update some fields of the document

Update some fields of the document Required scopes: document:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.ProjectApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this document.
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.Document(); // Document | 
apiInstance.updateDocument(cloudPk, id, projectPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this document. | 
 **projectPk** | **String**|  | 
 **data** | [**Document**](Document.md)|  | 

### Return type

[**Document**](Document.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateFolder

> RecursiveFolder updateFolder(cloudPk, id, projectPk, data)

Update some fields of a folder

Update some fields of a folder Required scopes: document:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.ProjectApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this folder.
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.RecursiveFolder(); // RecursiveFolder | 
apiInstance.updateFolder(cloudPk, id, projectPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this folder. | 
 **projectPk** | **String**|  | 
 **data** | [**RecursiveFolder**](RecursiveFolder.md)|  | 

### Return type

[**RecursiveFolder**](RecursiveFolder.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateProject

> Project updateProject(cloudPk, id, data)

Update some fields of a project

Update some fields of a project Required scopes: org:manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.ProjectApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this project.
let data = new bimdata.Project(); // Project | 
apiInstance.updateProject(cloudPk, id, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this project. | 
 **data** | [**Project**](Project.md)|  | 

### Return type

[**Project**](Project.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateProjectUser

> User updateProjectUser(cloudPk, id, projectPk, data)

Update some fields of a project user

Change the user role in the cloud Required scopes: cloud:manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.ProjectApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this fos user.
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.UserProjectUpdate(); // UserProjectUpdate | 
apiInstance.updateProjectUser(cloudPk, id, projectPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this fos user. | 
 **projectPk** | **String**|  | 
 **data** | [**UserProjectUpdate**](UserProjectUpdate.md)|  | 

### Return type

[**User**](User.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


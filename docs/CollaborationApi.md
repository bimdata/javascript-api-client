# bimdata.CollaborationApi

All URIs are relative to *https://api.bimdata.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addGroupMember**](CollaborationApi.md#addGroupMember) | **POST** /cloud/{cloud_pk}/project/{project_pk}/group/{group_pk}/member | Add a user to a group
[**cancelCloudUserInvitation**](CollaborationApi.md#cancelCloudUserInvitation) | **DELETE** /cloud/{cloud_pk}/invitation/{id} | Cancel a pending invitation
[**cancelProjectUserInvitation**](CollaborationApi.md#cancelProjectUserInvitation) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/invitation/{id} | Cancel a pending invitation
[**checkAccess**](CollaborationApi.md#checkAccess) | **GET** /cloud/{id}/check-access | Check app access from cloud
[**createClassification**](CollaborationApi.md#createClassification) | **POST** /cloud/{cloud_pk}/project/{project_pk}/classification | Create a classification
[**createCloud**](CollaborationApi.md#createCloud) | **POST** /cloud | Create a cloud
[**createDMSTree**](CollaborationApi.md#createDMSTree) | **POST** /cloud/{cloud_pk}/project/{id}/dms-tree | Create a complete DMS tree
[**createDemo**](CollaborationApi.md#createDemo) | **POST** /cloud/{id}/create-demo | Create a Demo project in a cloud
[**createDocument**](CollaborationApi.md#createDocument) | **POST** /cloud/{cloud_pk}/project/{project_pk}/document | Create a document
[**createFolder**](CollaborationApi.md#createFolder) | **POST** /cloud/{cloud_pk}/project/{project_pk}/folder | Create a folder
[**createManageGroup**](CollaborationApi.md#createManageGroup) | **POST** /cloud/{cloud_pk}/project/{project_pk}/group | Create a group
[**createProject**](CollaborationApi.md#createProject) | **POST** /cloud/{cloud_pk}/project | Create a project
[**createProjectAccessToken**](CollaborationApi.md#createProjectAccessToken) | **POST** /cloud/{cloud_pk}/project/{project_pk}/access-token | Create a token for this project
[**deleteClassification**](CollaborationApi.md#deleteClassification) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/classification/{id} | Delete a classification
[**deleteCloud**](CollaborationApi.md#deleteCloud) | **DELETE** /cloud/{id} | Delete a cloud
[**deleteCloudUser**](CollaborationApi.md#deleteCloudUser) | **DELETE** /cloud/{cloud_pk}/user/{id} | Remove a user from a cloud
[**deleteDocument**](CollaborationApi.md#deleteDocument) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/document/{id} | Delete the document
[**deleteFolder**](CollaborationApi.md#deleteFolder) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/folder/{id} | Delete a folder
[**deleteGroupMember**](CollaborationApi.md#deleteGroupMember) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/group/{group_pk}/member/{id} | Delete a user from a group
[**deleteManageGroup**](CollaborationApi.md#deleteManageGroup) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/group/{id} | Delete a group
[**deleteProject**](CollaborationApi.md#deleteProject) | **DELETE** /cloud/{cloud_pk}/project/{id} | Delete a project
[**deleteProjectAccessToken**](CollaborationApi.md#deleteProjectAccessToken) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/access-token/{token} | Delete a token
[**deleteProjectUser**](CollaborationApi.md#deleteProjectUser) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/user/{id} | Remove a user from a project
[**fullUpdateClassification**](CollaborationApi.md#fullUpdateClassification) | **PUT** /cloud/{cloud_pk}/project/{project_pk}/classification/{id} | Update all fields of a classification
[**fullUpdateCloud**](CollaborationApi.md#fullUpdateCloud) | **PUT** /cloud/{id} | Update all fields of a cloud
[**fullUpdateCloudUser**](CollaborationApi.md#fullUpdateCloudUser) | **PUT** /cloud/{cloud_pk}/user/{id} | Update all fields of a cloud user
[**fullUpdateDocument**](CollaborationApi.md#fullUpdateDocument) | **PUT** /cloud/{cloud_pk}/project/{project_pk}/document/{id} | Update all fields of the document
[**fullUpdateFolder**](CollaborationApi.md#fullUpdateFolder) | **PUT** /cloud/{cloud_pk}/project/{project_pk}/folder/{id} | Update all fields of a folder
[**fullUpdateGroupFolder**](CollaborationApi.md#fullUpdateGroupFolder) | **PUT** /cloud/{cloud_pk}/project/{project_pk}/folder/{folder_pk}/group/{id} | Update the permission of a group on a folder
[**fullUpdateManageGroup**](CollaborationApi.md#fullUpdateManageGroup) | **PUT** /cloud/{cloud_pk}/project/{project_pk}/group/{id} | Update all fields of a group
[**fullUpdateProject**](CollaborationApi.md#fullUpdateProject) | **PUT** /cloud/{cloud_pk}/project/{id} | Update all fields of a project
[**fullUpdateProjectAccessToken**](CollaborationApi.md#fullUpdateProjectAccessToken) | **PUT** /cloud/{cloud_pk}/project/{project_pk}/access-token/{token} | Update all fields of a token
[**getClassification**](CollaborationApi.md#getClassification) | **GET** /cloud/{cloud_pk}/project/{project_pk}/classification/{id} | Retrieve a classification
[**getClassifications**](CollaborationApi.md#getClassifications) | **GET** /cloud/{cloud_pk}/project/{project_pk}/classification | Retrieve all classifications
[**getCloud**](CollaborationApi.md#getCloud) | **GET** /cloud/{id} | Retrieve one cloud
[**getCloudInvitations**](CollaborationApi.md#getCloudInvitations) | **GET** /cloud/{cloud_pk}/invitation | Retrieve all pending invitations in the cloud
[**getCloudSize**](CollaborationApi.md#getCloudSize) | **GET** /cloud/{id}/size | summary
[**getCloudUser**](CollaborationApi.md#getCloudUser) | **GET** /cloud/{cloud_pk}/user/{id} | Retrieve a user in a cloud
[**getCloudUsers**](CollaborationApi.md#getCloudUsers) | **GET** /cloud/{cloud_pk}/user | Retrieve all users in a cloud, or a list with a filter by email
[**getClouds**](CollaborationApi.md#getClouds) | **GET** /cloud | Retrieve all clouds
[**getDocument**](CollaborationApi.md#getDocument) | **GET** /cloud/{cloud_pk}/project/{project_pk}/document/{id} | Retrieve a document
[**getDocuments**](CollaborationApi.md#getDocuments) | **GET** /cloud/{cloud_pk}/project/{project_pk}/document | Retrieve all documents
[**getFolder**](CollaborationApi.md#getFolder) | **GET** /cloud/{cloud_pk}/project/{project_pk}/folder/{id} | Retrieve a folder
[**getFolders**](CollaborationApi.md#getFolders) | **GET** /cloud/{cloud_pk}/project/{project_pk}/folder | Retrieve all folders
[**getGroup**](CollaborationApi.md#getGroup) | **GET** /cloud/{cloud_pk}/project/{project_pk}/me/group/{id} | Retrieve a group
[**getGroups**](CollaborationApi.md#getGroups) | **GET** /cloud/{cloud_pk}/project/{project_pk}/me/group | Retrieve all groups
[**getManageGroup**](CollaborationApi.md#getManageGroup) | **GET** /cloud/{cloud_pk}/project/{project_pk}/group/{id} | Retrieve a group
[**getManageGroups**](CollaborationApi.md#getManageGroups) | **GET** /cloud/{cloud_pk}/project/{project_pk}/group | Retrieve all groups
[**getProject**](CollaborationApi.md#getProject) | **GET** /cloud/{cloud_pk}/project/{id} | Retrieve a project
[**getProjectAccessToken**](CollaborationApi.md#getProjectAccessToken) | **GET** /cloud/{cloud_pk}/project/{project_pk}/access-token/{token} | Retrieve one token created for this project
[**getProjectAccessTokens**](CollaborationApi.md#getProjectAccessTokens) | **GET** /cloud/{cloud_pk}/project/{project_pk}/access-token | Retrieve all tokens created for this project
[**getProjectDMSTree**](CollaborationApi.md#getProjectDMSTree) | **GET** /cloud/{cloud_pk}/project/{id}/dms-tree | Retrieve the complete DMS tree
[**getProjectInvitations**](CollaborationApi.md#getProjectInvitations) | **GET** /cloud/{cloud_pk}/project/{project_pk}/invitation | Retrieve all pending invitations in the project
[**getProjectSize**](CollaborationApi.md#getProjectSize) | **GET** /cloud/{cloud_pk}/project/{id}/size | Get size of all ifc files in the project
[**getProjectSubTree**](CollaborationApi.md#getProjectSubTree) | **GET** /cloud/{cloud_pk}/project/subtree | Retrieve the complete projects tree of the cloud
[**getProjectTree**](CollaborationApi.md#getProjectTree) | **GET** /cloud/{cloud_pk}/project/{id}/tree | Retrieve the complete DMS tree
[**getProjectUsers**](CollaborationApi.md#getProjectUsers) | **GET** /cloud/{cloud_pk}/project/{project_pk}/user | Retrieve all users in a project, or a list with a filter by email
[**getProjects**](CollaborationApi.md#getProjects) | **GET** /cloud/{cloud_pk}/project | Retrieve all projects
[**getSelfProjects**](CollaborationApi.md#getSelfProjects) | **GET** /user/projects | List current user&#39;s projects
[**getSelfUser**](CollaborationApi.md#getSelfUser) | **GET** /user | Get info about the current user
[**inviteCloudUser**](CollaborationApi.md#inviteCloudUser) | **POST** /cloud/{cloud_pk}/invitation | Invite a cloud administrator
[**inviteProjectUser**](CollaborationApi.md#inviteProjectUser) | **POST** /cloud/{cloud_pk}/project/{project_pk}/invitation | Invite a project member
[**leaveProject**](CollaborationApi.md#leaveProject) | **POST** /cloud/{cloud_pk}/project/{id}/leave | Leave the project
[**updateClassification**](CollaborationApi.md#updateClassification) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/classification/{id} | Update some fields of a classification
[**updateCloud**](CollaborationApi.md#updateCloud) | **PATCH** /cloud/{id} | Update some fields of a cloud
[**updateCloudUser**](CollaborationApi.md#updateCloudUser) | **PATCH** /cloud/{cloud_pk}/user/{id} | Update some fields of a cloud user
[**updateDocument**](CollaborationApi.md#updateDocument) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/document/{id} | Update some fields of the document
[**updateFolder**](CollaborationApi.md#updateFolder) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/folder/{id} | Update some fields of a folder
[**updateGroupFolder**](CollaborationApi.md#updateGroupFolder) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/folder/{folder_pk}/group/{id} | Update the permission of a group on a folder
[**updateManageGroup**](CollaborationApi.md#updateManageGroup) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/group/{id} | Update some fields of a group
[**updateProject**](CollaborationApi.md#updateProject) | **PATCH** /cloud/{cloud_pk}/project/{id} | Update some fields of a project
[**updateProjectAccessToken**](CollaborationApi.md#updateProjectAccessToken) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/access-token/{token} | Update some fields of a token
[**updateProjectUser**](CollaborationApi.md#updateProjectUser) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/user/{id} | Change the user role in the cloud
[**updateSelfUser**](CollaborationApi.md#updateSelfUser) | **PATCH** /user | Update info of the current user



## addGroupMember

> UserProject addGroupMember(cloudPk, groupPk, projectPk, data)

Add a user to a group

Add a userproject to a group. Must be an admin of the project Required scopes: org:manage

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

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = "cloudPk_example"; // String | 
let groupPk = "groupPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.UserProjectId(); // UserProjectId | 
apiInstance.addGroupMember(cloudPk, groupPk, projectPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **groupPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **data** | [**UserProjectId**](UserProjectId.md)|  | 

### Return type

[**UserProject**](UserProject.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## cancelCloudUserInvitation

> cancelCloudUserInvitation(cloudPk, id)

Cancel a pending invitation

Cancel a pending invitation Required scopes: org:manage

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

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this invitation.
apiInstance.cancelCloudUserInvitation(cloudPk, id).then(() => {
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

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## cancelProjectUserInvitation

> cancelProjectUserInvitation(cloudPk, id, projectPk)

Cancel a pending invitation

 Required scopes: org:manage

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

let apiInstance = new bimdata.CollaborationApi();
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## checkAccess

> checkAccess(id)

Check app access from cloud

Return code 200 if the cloud has access to the marketplace app

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

let apiInstance = new bimdata.CollaborationApi();
let id = 56; // Number | A unique integer value identifying this cloud.
apiInstance.checkAccess(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this cloud. | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## createClassification

> [Classification] createClassification(cloudPk, projectPk, data)

Create a classification

         Bulk create available.         You can either post an object or a list of objects.         Is you post a list, the response will be a list (in the same order) of created objects or of errors if any         If at least one create succeeded, the status code will be 201. If every create failed, the status code we&#39;ll be 400 with the list of errors      If created classification already exists, it will not be duplicated and the previous one will be returned.     You also can add a &#39;classification&#39; filter on this endpoint. By ex: /classification?name&#x3D;&#39;untec&#39;. The name is case sensitive  Required scopes: ifc:write

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

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = "cloudPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = [new bimdata.Classification()]; // [Classification] | 
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
 **data** | [**[Classification]**](Classification.md)|  | 

### Return type

[**[Classification]**](Classification.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createCloud

> Cloud createCloud(data)

Create a cloud

 Required scopes: cloud:manage

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

let apiInstance = new bimdata.CollaborationApi();
let data = new bimdata.Cloud(); // Cloud | 
apiInstance.createCloud(data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createDMSTree

> createDMSTree(cloudPk, id, data)

Create a complete DMS tree

                 Create a DMS structure of folder                 Format request :                     [{                         \&quot;name\&quot;: :name:                         \&quot;parent_id\&quot;: :parent_id:                      # optionnal                         \&quot;default_permission\&quot;: :default_permission:    # optionnal                         \&quot;children\&quot;: [{                                # optionnal                             \&quot;name\&quot;: :name:,                             \&quot;children\&quot;: []                         }]                     }],  Required scopes: org:manage

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

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this project.
let data = new bimdata.Folder(); // Folder | 
apiInstance.createDMSTree(cloudPk, id, data).then(() => {
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
 **data** | [**Folder**](Folder.md)|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## createDemo

> Project createDemo(id)

Create a Demo project in a cloud

Create a demo project with a pre-populated IFC and its data Required scopes: cloud:manage

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

let apiInstance = new bimdata.CollaborationApi();
let id = 56; // Number | A unique integer value identifying this cloud.
apiInstance.createDemo(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this cloud. | 

### Return type

[**Project**](Project.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## createDocument

> Document createDocument(cloudPk, projectPk, name, file, opts)

Create a document

RCreate a document. If the document is an IFC, an IFC model will be created and attached to this document Required scopes: document:write

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

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = "cloudPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let name = "name_example"; // String | Shown name of the file
let file = "/path/to/file"; // File | 
let opts = {
  'parent': 56, // Number | 
  'parentId': 56, // Number | 
  'creator': 56, // Number | 
  'fileName': "fileName_example", // String | Full name of the file
  'description': "description_example", // String | Description of the file
  'size': 56, // Number | Size of the file.
  'ifcSource': "ifcSource_example" // String | Define the ifc.source field if the upload is an IFC
};
apiInstance.createDocument(cloudPk, projectPk, name, file, opts).then((data) => {
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
 **file** | **File**|  | 
 **parent** | **Number**|  | [optional] 
 **parentId** | **Number**|  | [optional] 
 **creator** | **Number**|  | [optional] 
 **fileName** | **String**| Full name of the file | [optional] 
 **description** | **String**| Description of the file | [optional] 
 **size** | **Number**| Size of the file. | [optional] 
 **ifcSource** | **String**| Define the ifc.source field if the upload is an IFC | [optional] 

### Return type

[**Document**](Document.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: multipart/form-data, application/x-www-form-urlencoded
- **Accept**: application/json


## createFolder

> InlineResponse200 createFolder(cloudPk, projectPk, data)

Create a folder

If the created folder have no parent, it will be put as a child of the default root folder of the project Required scopes: document:write

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

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = "cloudPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.InlineObject(); // InlineObject | 
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
 **data** | [**InlineObject**](InlineObject.md)|  | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createManageGroup

> InlineResponse2001 createManageGroup(cloudPk, projectPk, data)

Create a group

Create a group. Must be an admin of the project Required scopes: org:manage

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

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = "cloudPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.InlineObject3(); // InlineObject3 | 
apiInstance.createManageGroup(cloudPk, projectPk, data).then((data) => {
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
 **data** | [**InlineObject3**](InlineObject3.md)|  | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

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

let apiInstance = new bimdata.CollaborationApi();
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createProjectAccessToken

> ProjectAccessToken createProjectAccessToken(cloudPk, projectPk, data)

Create a token for this project

Tokens are valid 1 day by default Required scopes: org:manage

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

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = "cloudPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.ProjectAccessToken(); // ProjectAccessToken | 
apiInstance.createProjectAccessToken(cloudPk, projectPk, data).then((data) => {
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
 **data** | [**ProjectAccessToken**](ProjectAccessToken.md)|  | 

### Return type

[**ProjectAccessToken**](ProjectAccessToken.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

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

let apiInstance = new bimdata.CollaborationApi();
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteCloud

> deleteCloud(id)

Delete a cloud

 Required scopes: cloud:manage

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

let apiInstance = new bimdata.CollaborationApi();
let id = 56; // Number | A unique integer value identifying this cloud.
apiInstance.deleteCloud(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this cloud. | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteCloudUser

> deleteCloudUser(cloudPk, id)

Remove a user from a cloud

The user will also be removed from all the projects of the cloud Required scopes: cloud:manage

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

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this fos user.
apiInstance.deleteCloudUser(cloudPk, id).then(() => {
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

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

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

let apiInstance = new bimdata.CollaborationApi();
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteFolder

> deleteFolder(cloudPk, id, projectPk)

Delete a folder

All files and subfolders will be deleted too. If folder is a project&#39;s root folder, only children are deleted Required scopes: document:write

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

let apiInstance = new bimdata.CollaborationApi();
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteGroupMember

> deleteGroupMember(cloudPk, groupPk, id, projectPk)

Delete a user from a group

Delete a userproject from a group. Id is the userproject_id. Must be an admin of the project. Required scopes: org:manage

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

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = "cloudPk_example"; // String | 
let groupPk = "groupPk_example"; // String | 
let id = "id_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.deleteGroupMember(cloudPk, groupPk, id, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **groupPk** | **String**|  | 
 **id** | **String**|  | 
 **projectPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteManageGroup

> deleteManageGroup(cloudPk, id, projectPk)

Delete a group

Delete a group. Must be an admin of the project Required scopes: org:manage

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

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this group.
let projectPk = "projectPk_example"; // String | 
apiInstance.deleteManageGroup(cloudPk, id, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this group. | 
 **projectPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

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

let apiInstance = new bimdata.CollaborationApi();
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteProjectAccessToken

> deleteProjectAccessToken(cloudPk, projectPk, token)

Delete a token

Deleting a token will revoke it Required scopes: org:manage

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

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = "cloudPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let token = "token_example"; // String | 
apiInstance.deleteProjectAccessToken(cloudPk, projectPk, token).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **token** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

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

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = "cloudPk_example"; // String | 
let id = "id_example"; // String | 
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
 **id** | **String**|  | 
 **projectPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

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

let apiInstance = new bimdata.CollaborationApi();
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## fullUpdateCloud

> Cloud fullUpdateCloud(id, data)

Update all fields of a cloud

 Required scopes: cloud:manage

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

let apiInstance = new bimdata.CollaborationApi();
let id = 56; // Number | A unique integer value identifying this cloud.
let data = new bimdata.Cloud(); // Cloud | 
apiInstance.fullUpdateCloud(id, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this cloud. | 
 **data** | [**Cloud**](Cloud.md)|  | 

### Return type

[**Cloud**](Cloud.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## fullUpdateCloudUser

> User fullUpdateCloudUser(cloudPk, id, data)

Update all fields of a cloud user

Change the user role in the cloud Required scopes: cloud:manage

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

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this fos user.
let data = new bimdata.UserCloudUpdate(); // UserCloudUpdate | 
apiInstance.fullUpdateCloudUser(cloudPk, id, data).then((data) => {
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
 **data** | [**UserCloudUpdate**](UserCloudUpdate.md)|  | 

### Return type

[**User**](User.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## fullUpdateDocument

> Document fullUpdateDocument(cloudPk, id, projectPk, name, file, opts)

Update all fields of the document

Update all fields of the document Required scopes: document:write

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

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this document.
let projectPk = "projectPk_example"; // String | 
let name = "name_example"; // String | Shown name of the file
let file = "/path/to/file"; // File | 
let opts = {
  'parent': 56, // Number | 
  'parentId': 56, // Number | 
  'creator': 56, // Number | 
  'fileName': "fileName_example", // String | Full name of the file
  'description': "description_example", // String | Description of the file
  'size': 56, // Number | Size of the file.
  'ifcSource': "ifcSource_example" // String | Define the ifc.source field if the upload is an IFC
};
apiInstance.fullUpdateDocument(cloudPk, id, projectPk, name, file, opts).then((data) => {
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
 **file** | **File**|  | 
 **parent** | **Number**|  | [optional] 
 **parentId** | **Number**|  | [optional] 
 **creator** | **Number**|  | [optional] 
 **fileName** | **String**| Full name of the file | [optional] 
 **description** | **String**| Description of the file | [optional] 
 **size** | **Number**| Size of the file. | [optional] 
 **ifcSource** | **String**| Define the ifc.source field if the upload is an IFC | [optional] 

### Return type

[**Document**](Document.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: multipart/form-data, application/x-www-form-urlencoded
- **Accept**: application/json


## fullUpdateFolder

> InlineResponse200 fullUpdateFolder(cloudPk, id, projectPk, data)

Update all fields of a folder

Update all fields of a folder. Only project admins can update the &#x60;default_permission&#x60; field Required scopes: document:write

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

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this folder.
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.InlineObject1(); // InlineObject1 | 
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
 **data** | [**InlineObject1**](InlineObject1.md)|  | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## fullUpdateGroupFolder

> GroupFolder fullUpdateGroupFolder(cloudPk, folderPk, id, projectPk, data)

Update the permission of a group on a folder

Update the permission of a group on a folder.             0: ACCESS_DENIED,             50: READ_ONLY,             100: READ_WRTIE  Required scopes: org:manage

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

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = "cloudPk_example"; // String | 
let folderPk = "folderPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this group folder.
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.GroupFolder(); // GroupFolder | 
apiInstance.fullUpdateGroupFolder(cloudPk, folderPk, id, projectPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **folderPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this group folder. | 
 **projectPk** | **String**|  | 
 **data** | [**GroupFolder**](GroupFolder.md)|  | 

### Return type

[**GroupFolder**](GroupFolder.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## fullUpdateManageGroup

> InlineResponse2001 fullUpdateManageGroup(cloudPk, id, projectPk, data)

Update all fields of a group

Update all fields of a group. Must be an admin of the project Required scopes: org:manage

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

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this group.
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.InlineObject4(); // InlineObject4 | 
apiInstance.fullUpdateManageGroup(cloudPk, id, projectPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this group. | 
 **projectPk** | **String**|  | 
 **data** | [**InlineObject4**](InlineObject4.md)|  | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

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

let apiInstance = new bimdata.CollaborationApi();
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## fullUpdateProjectAccessToken

> ProjectAccessToken fullUpdateProjectAccessToken(cloudPk, projectPk, token, data)

Update all fields of a token

You can update the expiration date field Required scopes: org:manage

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

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = "cloudPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let token = "token_example"; // String | 
let data = new bimdata.ProjectAccessToken(); // ProjectAccessToken | 
apiInstance.fullUpdateProjectAccessToken(cloudPk, projectPk, token, data).then((data) => {
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
 **token** | **String**|  | 
 **data** | [**ProjectAccessToken**](ProjectAccessToken.md)|  | 

### Return type

[**ProjectAccessToken**](ProjectAccessToken.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

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

let apiInstance = new bimdata.CollaborationApi();
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getClassifications

> [Classification] getClassifications(cloudPk, projectPk)

Retrieve all classifications

Retrieve all classifications of all models in the project Required scopes: ifc:read

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

let apiInstance = new bimdata.CollaborationApi();
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCloud

> Cloud getCloud(id)

Retrieve one cloud

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

let apiInstance = new bimdata.CollaborationApi();
let id = 56; // Number | A unique integer value identifying this cloud.
apiInstance.getCloud(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this cloud. | 

### Return type

[**Cloud**](Cloud.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCloudInvitations

> [CloudInvitation] getCloudInvitations(cloudPk)

Retrieve all pending invitations in the cloud

Returns app&#39;s invitations only Required scopes: org:manage

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

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = "cloudPk_example"; // String | 
apiInstance.getCloudInvitations(cloudPk).then((data) => {
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

[**[CloudInvitation]**](CloudInvitation.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCloudSize

> Size getCloudSize(id)

summary

 Returns the sizes of the cloud in Bytes. The response fields depends on the role of the user. If the user is an admin, all field will be returned. If the user is a standard user, only &#x60;remaining_total_size&#x60; and &#x60;remaining_smart_data_size&#x60; will be set. If the call is made from an API access, role admin (100) will be returned and all fields will be set. The fields &#x60;managed by&#x60; indicate if the subscription for this cloud is an API subscription or a BIMData Platform subscription. If the cloud is managed by an API plan, the remaining sizes will take others organizations&#39;s clouds size into account 

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

let apiInstance = new bimdata.CollaborationApi();
let id = 56; // Number | A unique integer value identifying this cloud.
apiInstance.getCloudSize(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this cloud. | 

### Return type

[**Size**](Size.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCloudUser

> User getCloudUser(cloudPk, id)

Retrieve a user in a cloud

Only administrators can see a cloud member Required scopes: cloud:read

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

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this fos user.
apiInstance.getCloudUser(cloudPk, id).then((data) => {
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

### Return type

[**User**](User.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCloudUsers

> [User] getCloudUsers(cloudPk, opts)

Retrieve all users in a cloud, or a list with a filter by email

Only administrators can see cloud members. Required scopes: cloud:read

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

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = "cloudPk_example"; // String | 
let opts = {
  'email': "email_example", // String | Filter the returned list by email
  'emailContains': "emailContains_example", // String | Filter the returned list by email__contains
  'emailStartswith': "emailStartswith_example", // String | Filter the returned list by email__startswith
  'emailEndswith': "emailEndswith_example" // String | Filter the returned list by email__endswith
};
apiInstance.getCloudUsers(cloudPk, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **email** | **String**| Filter the returned list by email | [optional] 
 **emailContains** | **String**| Filter the returned list by email__contains | [optional] 
 **emailStartswith** | **String**| Filter the returned list by email__startswith | [optional] 
 **emailEndswith** | **String**| Filter the returned list by email__endswith | [optional] 

### Return type

[**[User]**](User.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getClouds

> [Cloud] getClouds()

Retrieve all clouds

Returns user&#39;s (or app&#39;s) clouds only

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

let apiInstance = new bimdata.CollaborationApi();
apiInstance.getClouds().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Cloud]**](Cloud.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

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

let apiInstance = new bimdata.CollaborationApi();
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDocuments

> [Document] getDocuments(cloudPk, projectPk)

Retrieve all documents

Retrieve all documents in the project Required scopes: document:read

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

let apiInstance = new bimdata.CollaborationApi();
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFolder

> InlineResponse200 getFolder(cloudPk, id, projectPk)

Retrieve a folder

Retrieve a folder Required scopes: document:read

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

let apiInstance = new bimdata.CollaborationApi();
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

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFolders

> [InlineResponse200] getFolders(cloudPk, projectPk)

Retrieve all folders

Retrieve all folders in the project. This is an array of folder. If you want to get the tree of all folders, see getProjectTree Required scopes: document:read

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

let apiInstance = new bimdata.CollaborationApi();
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

[**[InlineResponse200]**](InlineResponse200.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getGroup

> InlineResponse2001 getGroup(cloudPk, id, projectPk)

Retrieve a group

Retrieve a group to which the user belongs Required scopes: document:read

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

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this group.
let projectPk = "projectPk_example"; // String | 
apiInstance.getGroup(cloudPk, id, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this group. | 
 **projectPk** | **String**|  | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getGroups

> [InlineResponse2001] getGroups(cloudPk, projectPk)

Retrieve all groups

Retrieves all groups to which the user belongs Required scopes: document:read

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

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = "cloudPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.getGroups(cloudPk, projectPk).then((data) => {
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

[**[InlineResponse2001]**](InlineResponse2001.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getManageGroup

> InlineResponse2001 getManageGroup(cloudPk, id, projectPk)

Retrieve a group

Retrieve a group. Must be an admin of the project Required scopes: org:manage

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

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this group.
let projectPk = "projectPk_example"; // String | 
apiInstance.getManageGroup(cloudPk, id, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this group. | 
 **projectPk** | **String**|  | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getManageGroups

> [InlineResponse2001] getManageGroups(cloudPk, projectPk)

Retrieve all groups

Retrieve all groups in the project. Must be an admin of the project Required scopes: org:manage

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

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = "cloudPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.getManageGroups(cloudPk, projectPk).then((data) => {
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

[**[InlineResponse2001]**](InlineResponse2001.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

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

let apiInstance = new bimdata.CollaborationApi();
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProjectAccessToken

> ProjectAccessToken getProjectAccessToken(cloudPk, projectPk, token)

Retrieve one token created for this project

Retrieve one token created for this project Required scopes: org:manage

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

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = "cloudPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let token = "token_example"; // String | 
apiInstance.getProjectAccessToken(cloudPk, projectPk, token).then((data) => {
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
 **token** | **String**|  | 

### Return type

[**ProjectAccessToken**](ProjectAccessToken.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProjectAccessTokens

> [ProjectAccessToken] getProjectAccessTokens(cloudPk, projectPk)

Retrieve all tokens created for this project

Retrieve all tokens created for this project Required scopes: org:manage

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

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = "cloudPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.getProjectAccessTokens(cloudPk, projectPk).then((data) => {
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

[**[ProjectAccessToken]**](ProjectAccessToken.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProjectDMSTree

> Folder getProjectDMSTree(cloudPk, id)

Retrieve the complete DMS tree

Retrieve the complete DMS tree (all folders and all documents in the project)

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

let apiInstance = new bimdata.CollaborationApi();
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

[**Folder**](Folder.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

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

let apiInstance = new bimdata.CollaborationApi();
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProjectSize

> ProjectSize getProjectSize(cloudPk, id)

Get size of all ifc files in the project

Returns the size of the project in Bytes

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

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this project.
apiInstance.getProjectSize(cloudPk, id).then((data) => {
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

[**ProjectSize**](ProjectSize.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

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

let apiInstance = new bimdata.CollaborationApi();
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProjectTree

> Folder getProjectTree(cloudPk, id)

Retrieve the complete DMS tree

Retrieve the complete DMS tree (all folders and all documents in the project). DEPRECATED: renamed to getProjectDMSTree

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

let apiInstance = new bimdata.CollaborationApi();
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

[**Folder**](Folder.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProjectUsers

> [UserProject] getProjectUsers(cloudPk, projectPk, opts)

Retrieve all users in a project, or a list with a filter by email

Each member of a project can see other members of the project Required scopes: cloud:read, bcf:read

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

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = "cloudPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let opts = {
  'email': "email_example", // String | Filter the returned list by email
  'emailContains': "emailContains_example", // String | Filter the returned list by email__contains
  'emailStartswith': "emailStartswith_example", // String | Filter the returned list by email__startswith
  'emailEndswith': "emailEndswith_example" // String | Filter the returned list by email__endswith
};
apiInstance.getProjectUsers(cloudPk, projectPk, opts).then((data) => {
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
 **email** | **String**| Filter the returned list by email | [optional] 
 **emailContains** | **String**| Filter the returned list by email__contains | [optional] 
 **emailStartswith** | **String**| Filter the returned list by email__startswith | [optional] 
 **emailEndswith** | **String**| Filter the returned list by email__endswith | [optional] 

### Return type

[**[UserProject]**](UserProject.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

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

let apiInstance = new bimdata.CollaborationApi();
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSelfProjects

> [Project] getSelfProjects()

List current user&#39;s projects

List user&#39;s projects of all clouds Required scopes: user:read

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

let apiInstance = new bimdata.CollaborationApi();
apiInstance.getSelfProjects().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Project]**](Project.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSelfUser

> SelfUser getSelfUser()

Get info about the current user

Get info about the current user

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

let apiInstance = new bimdata.CollaborationApi();
apiInstance.getSelfUser().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**SelfUser**](SelfUser.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## inviteCloudUser

> CloudInvitation inviteCloudUser(cloudPk, data)

Invite a cloud administrator

Invite cloud administrators only. To invite in a project, see inviteProjectUser. You can&#39;t invite a user already in the cloud. Create multiple invitations of the same email in the same cloud will generate multiple invitation emails but not multiple invitation object Required scopes: org:manage

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

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = "cloudPk_example"; // String | 
let data = new bimdata.CloudInvitation(); // CloudInvitation | 
apiInstance.inviteCloudUser(cloudPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **data** | [**CloudInvitation**](CloudInvitation.md)|  | 

### Return type

[**CloudInvitation**](CloudInvitation.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## inviteProjectUser

> ProjectInvitation inviteProjectUser(cloudPk, projectPk, data)

Invite a project member

Invite a project member. If the user is not already a cloud member, they will also be invited in the cloud with USER role. Required scopes: org:manage

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

let apiInstance = new bimdata.CollaborationApi();
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## leaveProject

> leaveProject(cloudPk, id)

Leave the project

Leave the project. Only authenticated users (no app) can call this route. Required scopes: org:manage

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

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this project.
apiInstance.leaveProject(cloudPk, id).then(() => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## updateClassification

> Classification updateClassification(cloudPk, id, projectPk, data)

Update some fields of a classification

Update some fields of a classification Required scopes: ifc:write

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

let apiInstance = new bimdata.CollaborationApi();
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateCloud

> Cloud updateCloud(id, data)

Update some fields of a cloud

Update some fields of a cloud Required scopes: cloud:manage

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

let apiInstance = new bimdata.CollaborationApi();
let id = 56; // Number | A unique integer value identifying this cloud.
let data = new bimdata.Cloud(); // Cloud | 
apiInstance.updateCloud(id, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this cloud. | 
 **data** | [**Cloud**](Cloud.md)|  | 

### Return type

[**Cloud**](Cloud.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateCloudUser

> User updateCloudUser(cloudPk, id, data)

Update some fields of a cloud user

Change the user role in the cloud Required scopes: cloud:manage

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

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this fos user.
let data = new bimdata.UserCloudUpdate(); // UserCloudUpdate | 
apiInstance.updateCloudUser(cloudPk, id, data).then((data) => {
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
 **data** | [**UserCloudUpdate**](UserCloudUpdate.md)|  | 

### Return type

[**User**](User.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

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

let apiInstance = new bimdata.CollaborationApi();
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateFolder

> InlineResponse200 updateFolder(cloudPk, id, projectPk, data)

Update some fields of a folder

Update some fields of a folder. Only project admins can update the &#x60;default_permission&#x60; field Required scopes: document:write

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

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this folder.
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.InlineObject2(); // InlineObject2 | 
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
 **data** | [**InlineObject2**](InlineObject2.md)|  | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateGroupFolder

> GroupFolder updateGroupFolder(cloudPk, folderPk, id, projectPk, data)

Update the permission of a group on a folder

Update the permission of a group on a folder.             0: ACCESS_DENIED,             50: READ_ONLY,             100: READ_WRTIE  Required scopes: org:manage

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

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = "cloudPk_example"; // String | 
let folderPk = "folderPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this group folder.
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.GroupFolder(); // GroupFolder | 
apiInstance.updateGroupFolder(cloudPk, folderPk, id, projectPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **folderPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this group folder. | 
 **projectPk** | **String**|  | 
 **data** | [**GroupFolder**](GroupFolder.md)|  | 

### Return type

[**GroupFolder**](GroupFolder.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateManageGroup

> InlineResponse2001 updateManageGroup(cloudPk, id, projectPk, data)

Update some fields of a group

Update some fields of a group. Must be an admin of the project Required scopes: org:manage

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

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this group.
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.InlineObject5(); // InlineObject5 | 
apiInstance.updateManageGroup(cloudPk, id, projectPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this group. | 
 **projectPk** | **String**|  | 
 **data** | [**InlineObject5**](InlineObject5.md)|  | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

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

let apiInstance = new bimdata.CollaborationApi();
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateProjectAccessToken

> ProjectAccessToken updateProjectAccessToken(cloudPk, projectPk, token, data)

Update some fields of a token

You can update the expiration date field Required scopes: org:manage

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

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = "cloudPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let token = "token_example"; // String | 
let data = new bimdata.ProjectAccessToken(); // ProjectAccessToken | 
apiInstance.updateProjectAccessToken(cloudPk, projectPk, token, data).then((data) => {
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
 **token** | **String**|  | 
 **data** | [**ProjectAccessToken**](ProjectAccessToken.md)|  | 

### Return type

[**ProjectAccessToken**](ProjectAccessToken.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateProjectUser

> UserProject updateProjectUser(cloudPk, id, projectPk, data)

Change the user role in the cloud

Change the user role in the cloud Required scopes: cloud:manage

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

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = "cloudPk_example"; // String | 
let id = "id_example"; // String | 
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
 **id** | **String**|  | 
 **projectPk** | **String**|  | 
 **data** | [**UserProjectUpdate**](UserProjectUpdate.md)|  | 

### Return type

[**UserProject**](UserProject.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateSelfUser

> SelfUser updateSelfUser(data)

Update info of the current user

DEPRECATED. The user must be updated on its identity provider

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

let apiInstance = new bimdata.CollaborationApi();
let data = new bimdata.SelfUser(); // SelfUser | 
apiInstance.updateSelfUser(data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**SelfUser**](SelfUser.md)|  | 

### Return type

[**SelfUser**](SelfUser.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


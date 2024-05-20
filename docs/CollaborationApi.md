# bimdata.CollaborationApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**acceptUserInvitation**](CollaborationApi.md#acceptUserInvitation) | **POST** /user/invitations/{id}/accept | Accept an invitation
[**acceptValidation**](CollaborationApi.md#acceptValidation) | **POST** /cloud/{cloud_pk}/project/{project_pk}/document/{document_pk}/visa/{visa_pk}/validation/{id}/accept | Accept a validation
[**addDocumentTag**](CollaborationApi.md#addDocumentTag) | **POST** /cloud/{cloud_pk}/project/{project_pk}/document/{document_pk}/tag | Add a tag to a document
[**addGroupMember**](CollaborationApi.md#addGroupMember) | **POST** /cloud/{cloud_pk}/project/{project_pk}/group/{group_pk}/member | Add a user to a group
[**cancelCloudUserInvitation**](CollaborationApi.md#cancelCloudUserInvitation) | **DELETE** /cloud/{cloud_pk}/invitation/{id} | Cancel a pending invitation
[**cancelProjectUserInvitation**](CollaborationApi.md#cancelProjectUserInvitation) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/invitation/{id} | Cancel a pending invitation
[**checkAccess**](CollaborationApi.md#checkAccess) | **GET** /cloud/{id}/check-access | Check app access from cloud
[**checkProjectAccess**](CollaborationApi.md#checkProjectAccess) | **GET** /cloud/{cloud_pk}/project/{id}/check-access | Check if the current token has access to the requested project
[**closeVisa**](CollaborationApi.md#closeVisa) | **POST** /cloud/{cloud_pk}/project/{project_pk}/document/{document_pk}/visa/{id}/close | Close a visa of a document
[**createClassification**](CollaborationApi.md#createClassification) | **POST** /cloud/{cloud_pk}/project/{project_pk}/classification | Create a classification
[**createCloud**](CollaborationApi.md#createCloud) | **POST** /cloud | Create a cloud
[**createDMSTree**](CollaborationApi.md#createDMSTree) | **POST** /cloud/{cloud_pk}/project/{id}/dms-tree | Create a complete DMS tree
[**createDemo**](CollaborationApi.md#createDemo) | **POST** /cloud/{id}/create-demo | Create a Demo project in a cloud
[**createDocument**](CollaborationApi.md#createDocument) | **POST** /cloud/{cloud_pk}/project/{project_pk}/document | Create a document
[**createFolder**](CollaborationApi.md#createFolder) | **POST** /cloud/{cloud_pk}/project/{project_pk}/folder | Create a folder
[**createManageGroup**](CollaborationApi.md#createManageGroup) | **POST** /cloud/{cloud_pk}/project/{project_pk}/group | Create a group
[**createProject**](CollaborationApi.md#createProject) | **POST** /cloud/{cloud_pk}/project | Create a project
[**createProjectAccessToken**](CollaborationApi.md#createProjectAccessToken) | **POST** /cloud/{cloud_pk}/project/{project_pk}/access-token | Create a token for this project
[**createTag**](CollaborationApi.md#createTag) | **POST** /cloud/{cloud_pk}/project/{project_pk}/tag | Create a tag
[**createValidation**](CollaborationApi.md#createValidation) | **POST** /cloud/{cloud_pk}/project/{project_pk}/document/{document_pk}/visa/{visa_pk}/validation | Add a validation to a visa
[**createVisa**](CollaborationApi.md#createVisa) | **POST** /cloud/{cloud_pk}/project/{project_pk}/document/{document_pk}/visa | Create a visa
[**createVisaComment**](CollaborationApi.md#createVisaComment) | **POST** /cloud/{cloud_pk}/project/{project_pk}/document/{document_pk}/visa/{visa_pk}/comment | Add a comment
[**deleteAllDocumentHistory**](CollaborationApi.md#deleteAllDocumentHistory) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/document/{document_pk}/history/delete | Delete all document history
[**deleteClassification**](CollaborationApi.md#deleteClassification) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/classification/{id} | Delete a classification
[**deleteCloud**](CollaborationApi.md#deleteCloud) | **DELETE** /cloud/{id} | Delete a cloud
[**deleteCloudUser**](CollaborationApi.md#deleteCloudUser) | **DELETE** /cloud/{cloud_pk}/user/{id} | Remove a user from a cloud
[**deleteDocument**](CollaborationApi.md#deleteDocument) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/document/{id} | Delete the document
[**deleteDocumentTag**](CollaborationApi.md#deleteDocumentTag) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/document/{document_pk}/tag/{id} | Delete a tag from a document
[**deleteFolder**](CollaborationApi.md#deleteFolder) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/folder/{id} | Delete a folder
[**deleteGroupMember**](CollaborationApi.md#deleteGroupMember) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/group/{group_pk}/member/{id} | Delete a user from a group
[**deleteManageGroup**](CollaborationApi.md#deleteManageGroup) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/group/{id} | Delete a group
[**deleteProject**](CollaborationApi.md#deleteProject) | **DELETE** /cloud/{cloud_pk}/project/{id} | Delete a project
[**deleteProjectAccessToken**](CollaborationApi.md#deleteProjectAccessToken) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/access-token/{token} | Delete a token
[**deleteProjectUser**](CollaborationApi.md#deleteProjectUser) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/user/{id} | Remove a user from a project
[**deleteTag**](CollaborationApi.md#deleteTag) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/tag/{id} | Delete the tag
[**deleteValidation**](CollaborationApi.md#deleteValidation) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/document/{document_pk}/visa/{visa_pk}/validation/{id} | Remove a validation
[**deleteVisa**](CollaborationApi.md#deleteVisa) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/document/{document_pk}/visa/{id} | Remove a visa
[**deleteVisaComment**](CollaborationApi.md#deleteVisaComment) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/document/{document_pk}/visa/{visa_pk}/comment/{id} | Remove a comment
[**denyUserInvitation**](CollaborationApi.md#denyUserInvitation) | **POST** /user/invitations/{id}/deny | Deny an invitation
[**denyValidation**](CollaborationApi.md#denyValidation) | **POST** /cloud/{cloud_pk}/project/{project_pk}/document/{document_pk}/visa/{visa_pk}/validation/{id}/deny | Deny a validation
[**getClassification**](CollaborationApi.md#getClassification) | **GET** /cloud/{cloud_pk}/project/{project_pk}/classification/{id} | Retrieve a classification
[**getClassifications**](CollaborationApi.md#getClassifications) | **GET** /cloud/{cloud_pk}/project/{project_pk}/classification | Retrieve all classifications
[**getCloud**](CollaborationApi.md#getCloud) | **GET** /cloud/{id} | Retrieve one cloud
[**getCloudInvitations**](CollaborationApi.md#getCloudInvitations) | **GET** /cloud/{cloud_pk}/invitation | Retrieve all pending invitations in the cloud
[**getCloudSize**](CollaborationApi.md#getCloudSize) | **GET** /cloud/{id}/size | Get size of the cloud
[**getCloudUser**](CollaborationApi.md#getCloudUser) | **GET** /cloud/{cloud_pk}/user/{id} | Retrieve a user in a cloud
[**getCloudUsers**](CollaborationApi.md#getCloudUsers) | **GET** /cloud/{cloud_pk}/user | Retrieve all users in a cloud, or a list with a filter by email
[**getClouds**](CollaborationApi.md#getClouds) | **GET** /cloud | Retrieve all clouds
[**getDocument**](CollaborationApi.md#getDocument) | **GET** /cloud/{cloud_pk}/project/{project_pk}/document/{id} | Retrieve a document
[**getDocumentHistories**](CollaborationApi.md#getDocumentHistories) | **GET** /cloud/{cloud_pk}/project/{project_pk}/document/{document_pk}/history | Retrieve all document histories
[**getDocuments**](CollaborationApi.md#getDocuments) | **GET** /cloud/{cloud_pk}/project/{project_pk}/document | Retrieve all documents
[**getFolder**](CollaborationApi.md#getFolder) | **GET** /cloud/{cloud_pk}/project/{project_pk}/folder/{id} | Retrieve a folder
[**getFolderDocuments**](CollaborationApi.md#getFolderDocuments) | **GET** /cloud/{cloud_pk}/project/{project_pk}/folder/{folder_pk}/document | Get all documents of a folder
[**getFolderProjectUsers**](CollaborationApi.md#getFolderProjectUsers) | **GET** /cloud/{cloud_pk}/project/{project_pk}/folder/{folder_pk}/user | Retrieve all users in a project with the permission on the folder
[**getFolders**](CollaborationApi.md#getFolders) | **GET** /cloud/{cloud_pk}/project/{project_pk}/folder | Retrieve all folders
[**getGroup**](CollaborationApi.md#getGroup) | **GET** /cloud/{cloud_pk}/project/{project_pk}/me/group/{id} | Retrieve a group
[**getGroups**](CollaborationApi.md#getGroups) | **GET** /cloud/{cloud_pk}/project/{project_pk}/me/group | Retrieve all groups
[**getLogs**](CollaborationApi.md#getLogs) | **GET** /cloud/{cloud_pk}/project/{project_pk}/logs | Retrieve all logs of the project
[**getManageGroup**](CollaborationApi.md#getManageGroup) | **GET** /cloud/{cloud_pk}/project/{project_pk}/group/{id} | Retrieve a group
[**getManageGroups**](CollaborationApi.md#getManageGroups) | **GET** /cloud/{cloud_pk}/project/{project_pk}/group | Retrieve all groups
[**getProject**](CollaborationApi.md#getProject) | **GET** /cloud/{cloud_pk}/project/{id} | Retrieve a project
[**getProjectAccessToken**](CollaborationApi.md#getProjectAccessToken) | **GET** /cloud/{cloud_pk}/project/{project_pk}/access-token/{token} | Retrieve one token created for this project
[**getProjectAccessTokens**](CollaborationApi.md#getProjectAccessTokens) | **GET** /cloud/{cloud_pk}/project/{project_pk}/access-token | Retrieve all tokens created for this project
[**getProjectCreatorVisas**](CollaborationApi.md#getProjectCreatorVisas) | **GET** /cloud/{cloud_pk}/project/{project_pk}/me/visa/creator | List visas created by user
[**getProjectDMSTree**](CollaborationApi.md#getProjectDMSTree) | **GET** /cloud/{cloud_pk}/project/{id}/dms-tree | Retrieve the complete DMS tree
[**getProjectFolderTree**](CollaborationApi.md#getProjectFolderTree) | **GET** /cloud/{cloud_pk}/project/{id}/folder-tree | Retrieve folder tree of the project
[**getProjectInvitations**](CollaborationApi.md#getProjectInvitations) | **GET** /cloud/{cloud_pk}/project/{project_pk}/invitation | Retrieve all pending invitations in the project
[**getProjectSize**](CollaborationApi.md#getProjectSize) | **GET** /cloud/{cloud_pk}/project/{id}/size | Get size of all model files in the project
[**getProjectSubTree**](CollaborationApi.md#getProjectSubTree) | **GET** /cloud/{cloud_pk}/project/subtree | Retrieve the complete projects tree of the cloud
[**getProjectTree**](CollaborationApi.md#getProjectTree) | **GET** /cloud/{cloud_pk}/project/{id}/tree | Retrieve the complete DMS tree
[**getProjectUsers**](CollaborationApi.md#getProjectUsers) | **GET** /cloud/{cloud_pk}/project/{project_pk}/user | Retrieve all users in a project, or a list with a filter by email
[**getProjectValidatorVisas**](CollaborationApi.md#getProjectValidatorVisas) | **GET** /cloud/{cloud_pk}/project/{project_pk}/me/visa/validator | List visas where user is a validator
[**getProjects**](CollaborationApi.md#getProjects) | **GET** /cloud/{cloud_pk}/project | Retrieve all projects
[**getSelfProjects**](CollaborationApi.md#getSelfProjects) | **GET** /user/projects | List current user&#39;s projects
[**getSelfUser**](CollaborationApi.md#getSelfUser) | **GET** /user | Get info about the current user
[**getTag**](CollaborationApi.md#getTag) | **GET** /cloud/{cloud_pk}/project/{project_pk}/tag/{id} | Retrieve a tag
[**getTags**](CollaborationApi.md#getTags) | **GET** /cloud/{cloud_pk}/project/{project_pk}/tag | Retrieve all tags
[**getUserInvitation**](CollaborationApi.md#getUserInvitation) | **GET** /user/invitations/{id} | Retrieve an invitation
[**getUserInvitations**](CollaborationApi.md#getUserInvitations) | **GET** /user/invitations | List user&#39;s invitations
[**getValidation**](CollaborationApi.md#getValidation) | **GET** /cloud/{cloud_pk}/project/{project_pk}/document/{document_pk}/visa/{visa_pk}/validation/{id} | Retrieve a validation to a visa
[**getValidations**](CollaborationApi.md#getValidations) | **GET** /cloud/{cloud_pk}/project/{project_pk}/document/{document_pk}/visa/{visa_pk}/validation | List all validations to a visa
[**getVisa**](CollaborationApi.md#getVisa) | **GET** /cloud/{cloud_pk}/project/{project_pk}/document/{document_pk}/visa/{id} | Retrieve a visa of a document
[**getVisaComment**](CollaborationApi.md#getVisaComment) | **GET** /cloud/{cloud_pk}/project/{project_pk}/document/{document_pk}/visa/{visa_pk}/comment/{id} | Retrieve a comment
[**getVisaComments**](CollaborationApi.md#getVisaComments) | **GET** /cloud/{cloud_pk}/project/{project_pk}/document/{document_pk}/visa/{visa_pk}/comment | List all comment of a visa
[**getVisas**](CollaborationApi.md#getVisas) | **GET** /cloud/{cloud_pk}/project/{project_pk}/document/{document_pk}/visa | List all visas of a document
[**importFromProject**](CollaborationApi.md#importFromProject) | **POST** /cloud/{cloud_pk}/project/{id}/import_from | Import data from a project
[**importManageGroup**](CollaborationApi.md#importManageGroup) | **POST** /cloud/{cloud_pk}/project/{project_pk}/group/import | Import a group from another project
[**inviteCloudUser**](CollaborationApi.md#inviteCloudUser) | **POST** /cloud/{cloud_pk}/invitation | Invite a cloud member
[**inviteProjectUser**](CollaborationApi.md#inviteProjectUser) | **POST** /cloud/{cloud_pk}/project/{project_pk}/invitation | Invite a project member
[**leaveProject**](CollaborationApi.md#leaveProject) | **POST** /cloud/{cloud_pk}/project/{id}/leave | Leave the project
[**leaveVersionDocumentHistory**](CollaborationApi.md#leaveVersionDocumentHistory) | **POST** /cloud/{cloud_pk}/project/{project_pk}/document/{document_pk}/history/{id}/leave | Leave the history version
[**makeHeadVersionDocumentHistory**](CollaborationApi.md#makeHeadVersionDocumentHistory) | **POST** /cloud/{cloud_pk}/project/{project_pk}/document/{document_pk}/history/{id}/head-version | Make the head of the version
[**pauseVisa**](CollaborationApi.md#pauseVisa) | **POST** /cloud/{cloud_pk}/project/{project_pk}/document/{document_pk}/visa/{id}/pause | Pause a visa of a document
[**resetValidation**](CollaborationApi.md#resetValidation) | **POST** /cloud/{cloud_pk}/project/{project_pk}/document/{document_pk}/visa/{visa_pk}/validation/{id}/reset | Reset a validation
[**resumeVisa**](CollaborationApi.md#resumeVisa) | **POST** /cloud/{cloud_pk}/project/{project_pk}/document/{document_pk}/visa/{id}/resume | Resume a visa of a document
[**updateClassification**](CollaborationApi.md#updateClassification) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/classification/{id} | Update some fields of a classification
[**updateCloud**](CollaborationApi.md#updateCloud) | **PATCH** /cloud/{id} | Update some fields of a cloud
[**updateCloudUser**](CollaborationApi.md#updateCloudUser) | **PATCH** /cloud/{cloud_pk}/user/{id} | Change the user role in the cloud
[**updateDocument**](CollaborationApi.md#updateDocument) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/document/{id} | Update some fields of the document
[**updateFolder**](CollaborationApi.md#updateFolder) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/folder/{id} | Update some fields of a folder
[**updateGroupFolder**](CollaborationApi.md#updateGroupFolder) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/folder/{folder_pk}/group/{id} | Update the permission of a group on a folder. When propagate is set to True, the permission of all children in the folder will be updated.
[**updateManageGroup**](CollaborationApi.md#updateManageGroup) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/group/{id} | Update some fields of a group
[**updatePreviewFile**](CollaborationApi.md#updatePreviewFile) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/document/{id}/preview-file | Update preview of the document
[**updateProject**](CollaborationApi.md#updateProject) | **PATCH** /cloud/{cloud_pk}/project/{id} | Update some fields of a project
[**updateProjectUser**](CollaborationApi.md#updateProjectUser) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/user/{id} | Change the user role in the cloud
[**updateTag**](CollaborationApi.md#updateTag) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/tag/{id} | Update some fields of the tag
[**updateValidation**](CollaborationApi.md#updateValidation) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/document/{document_pk}/visa/{visa_pk}/validation/{id} | Update the validator of validation
[**updateVisa**](CollaborationApi.md#updateVisa) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/document/{document_pk}/visa/{id} | Update some fields of a visa
[**updateVisaComment**](CollaborationApi.md#updateVisaComment) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/document/{document_pk}/visa/{visa_pk}/comment/{id} | Update some fields of a comment



## acceptUserInvitation

> acceptUserInvitation(id)

Accept an invitation

The user is added to the cloud and projet.  Required scopes: user:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let id = 56; // Number | A unique integer value identifying this invitation.
apiInstance.acceptUserInvitation(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this invitation. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## acceptValidation

> VisaAttachment acceptValidation(cloudPk, documentPk, id, projectPk, visaPk, opts)

Accept a validation

Accept a validation  Required scopes: document:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let documentPk = 56; // Number | A unique integer value identifying this document.
let id = 56; // Number | A unique integer value identifying this visa validation.
let projectPk = 56; // Number | A unique integer value identifying this project.
let visaPk = 56; // Number | A unique integer value identifying this visa.
let opts = {
  'attachment': "/path/to/file" // File | 
};
apiInstance.acceptValidation(cloudPk, documentPk, id, projectPk, visaPk, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **documentPk** | **Number**| A unique integer value identifying this document. | 
 **id** | **Number**| A unique integer value identifying this visa validation. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **visaPk** | **Number**| A unique integer value identifying this visa. | 
 **attachment** | **File**|  | [optional] 

### Return type

[**VisaAttachment**](VisaAttachment.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: multipart/form-data, application/x-www-form-urlencoded, application/json
- **Accept**: application/json


## addDocumentTag

> Document addDocumentTag(cloudPk, documentPk, projectPk, tagIdRequest)

Add a tag to a document

Add a tag to a document  Required scopes: document:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | 
let documentPk = 56; // Number | A unique integer value identifying this document.
let projectPk = 56; // Number | 
let tagIdRequest = new bimdata.TagIdRequest(); // TagIdRequest | 
apiInstance.addDocumentTag(cloudPk, documentPk, projectPk, tagIdRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**|  | 
 **documentPk** | **Number**| A unique integer value identifying this document. | 
 **projectPk** | **Number**|  | 
 **tagIdRequest** | [**TagIdRequest**](TagIdRequest.md)|  | 

### Return type

[**Document**](Document.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## addGroupMember

> UserProject addGroupMember(cloudPk, groupPk, projectPk, userProjectIdRequest)

Add a user to a group

Add a userproject to a group. Must be an admin of the project  Required scopes: org:manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | 
let groupPk = 56; // Number | A unique integer value identifying this group.
let projectPk = 56; // Number | 
let userProjectIdRequest = new bimdata.UserProjectIdRequest(); // UserProjectIdRequest | 
apiInstance.addGroupMember(cloudPk, groupPk, projectPk, userProjectIdRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**|  | 
 **groupPk** | **Number**| A unique integer value identifying this group. | 
 **projectPk** | **Number**|  | 
 **userProjectIdRequest** | [**UserProjectIdRequest**](UserProjectIdRequest.md)|  | 

### Return type

[**UserProject**](UserProject.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## cancelCloudUserInvitation

> cancelCloudUserInvitation(cloudPk, id)

Cancel a pending invitation

Cancel a pending invitation  Required scopes: org:manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | 
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
 **cloudPk** | **Number**|  | 
 **id** | **Number**| A unique integer value identifying this invitation. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## cancelProjectUserInvitation

> cancelProjectUserInvitation(cloudPk, id, projectPk)

Cancel a pending invitation

Cancel a pending invitation  Required scopes: org:manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this invitation.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.cancelProjectUserInvitation(cloudPk, id, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this invitation. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

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
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

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

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## checkProjectAccess

> CheckProjectAccess checkProjectAccess(cloudPk, id)

Check if the current token has access to the requested project

                 The response gives you details about the right of the user or app, the scopes of the token and the usable scopes (scopes filtered by the right of the user).                 It works with user tokens, app tokens and ProjectAccessToken             

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | 
let id = 56; // Number | A unique integer value identifying this project.
apiInstance.checkProjectAccess(cloudPk, id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**|  | 
 **id** | **Number**| A unique integer value identifying this project. | 

### Return type

[**CheckProjectAccess**](CheckProjectAccess.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## closeVisa

> closeVisa(cloudPk, documentPk, id, projectPk)

Close a visa of a document

Close a visa of a document  Required scopes: document:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let documentPk = 56; // Number | A unique integer value identifying this document.
let id = 56; // Number | A unique integer value identifying this visa.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.closeVisa(cloudPk, documentPk, id, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **documentPk** | **Number**| A unique integer value identifying this document. | 
 **id** | **Number**| A unique integer value identifying this visa. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## createClassification

> [Classification] createClassification(cloudPk, projectPk, classificationRequest)

Create a classification

 Bulk create available. You can either post an object or a list of objects. Is you post a list, the response will be a list (in the same order) of created objects or of errors if any If at least one create succeeded, the status code will be 201. If every create failed, the status code we&#39;ll be 400 with the list of errors  If created classification already exists, it will not be duplicated and the previous one will be returned. You also can add a &#39;classification&#39; filter on this endpoint. By ex: /classification?name&#x3D;&#39;untec&#39;. The name is case sensitive  Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let projectPk = 56; // Number | A unique integer value identifying this project.
let classificationRequest = [new bimdata.ClassificationRequest()]; // [ClassificationRequest] | 
apiInstance.createClassification(cloudPk, projectPk, classificationRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **classificationRequest** | [**[ClassificationRequest]**](ClassificationRequest.md)|  | 

### Return type

[**[Classification]**](Classification.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## createCloud

> Cloud createCloud(cloudRequest)

Create a cloud

Create a cloud  Required scopes: cloud:manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudRequest = new bimdata.CloudRequest(); // CloudRequest | 
apiInstance.createCloud(cloudRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudRequest** | [**CloudRequest**](CloudRequest.md)|  | 

### Return type

[**Cloud**](Cloud.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## createDMSTree

> Folder createDMSTree(cloudPk, id, writeFolderRequest)

Create a complete DMS tree

 Create a DMS structure of folder Format request : &#x60;&#x60;&#x60; [{     \&quot;name\&quot;: :name:     \&quot;parent_id\&quot;: :parent_id:                      # optionnal     \&quot;default_permission\&quot;: :default_permission:    # optionnal     \&quot;children\&quot;: [{                                # optionnal         \&quot;name\&quot;: :name:,         \&quot;children\&quot;: []     }] }], &#x60;&#x60;&#x60;                   Required scopes: org:manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | 
let id = 56; // Number | A unique integer value identifying this project.
let writeFolderRequest = [new bimdata.WriteFolderRequest()]; // [WriteFolderRequest] | 
apiInstance.createDMSTree(cloudPk, id, writeFolderRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**|  | 
 **id** | **Number**| A unique integer value identifying this project. | 
 **writeFolderRequest** | [**[WriteFolderRequest]**](WriteFolderRequest.md)|  | 

### Return type

[**Folder**](Folder.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## createDemo

> Project createDemo(id)

Create a Demo project in a cloud

Create a project name &#39;Demo&#39; with an already processed model in it  Required scopes: cloud:manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

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

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## createDocument

> Document createDocument(cloudPk, projectPk, name, file, opts)

Create a document

Create a document. If the document is one of {&#39;OBJ&#39;, &#39;POINT_CLOUD&#39;, &#39;DXF&#39;, &#39;DWG&#39;, &#39;GLTF&#39;, &#39;IFC&#39;}, a model will be created and attached to this document  Required scopes: document:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let projectPk = 56; // Number | A unique integer value identifying this project.
let name = "name_example"; // String | Shown name of the file
let file = "/path/to/file"; // File | 
let opts = {
  'parentId': 56, // Number | 
  'fileName': "fileName_example", // String | Full name of the file
  'description': "description_example", // String | Description of the file
  'modelSource': "modelSource_example", // String | Define the model.source field if the upload is a Model (IFC, PDF, DWG...)  * `UPLOAD` - UPLOAD * `SPLIT` - SPLIT * `MERGE` - MERGE * `EXPORT` - EXPORT * `OPTIMIZED` - OPTIMIZED
  'ifcSource': "ifcSource_example", // String | DEPRECATED: Use 'model_source' instead. Define the model.source field if the upload is a Model (IFC, PDF, DWG...)  * `UPLOAD` - UPLOAD * `SPLIT` - SPLIT * `MERGE` - MERGE * `EXPORT` - EXPORT * `OPTIMIZED` - OPTIMIZED
  'successorOf': 56 // Number | Old document version to replace. Only for create
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
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **name** | **String**| Shown name of the file | 
 **file** | **File**|  | 
 **parentId** | **Number**|  | [optional] 
 **fileName** | **String**| Full name of the file | [optional] 
 **description** | **String**| Description of the file | [optional] 
 **modelSource** | **String**| Define the model.source field if the upload is a Model (IFC, PDF, DWG...)  * &#x60;UPLOAD&#x60; - UPLOAD * &#x60;SPLIT&#x60; - SPLIT * &#x60;MERGE&#x60; - MERGE * &#x60;EXPORT&#x60; - EXPORT * &#x60;OPTIMIZED&#x60; - OPTIMIZED | [optional] 
 **ifcSource** | **String**| DEPRECATED: Use &#39;model_source&#39; instead. Define the model.source field if the upload is a Model (IFC, PDF, DWG...)  * &#x60;UPLOAD&#x60; - UPLOAD * &#x60;SPLIT&#x60; - SPLIT * &#x60;MERGE&#x60; - MERGE * &#x60;EXPORT&#x60; - EXPORT * &#x60;OPTIMIZED&#x60; - OPTIMIZED | [optional] 
 **successorOf** | **Number**| Old document version to replace. Only for create | [optional] 

### Return type

[**Document**](Document.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: multipart/form-data, application/x-www-form-urlencoded
- **Accept**: application/json


## createFolder

> FolderWithoutChildren createFolder(cloudPk, projectPk, folderWithoutChildrenRequest)

Create a folder

If the created folder have no parent, it will be put as a child of the default root folder of the project  Required scopes: document:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let projectPk = 56; // Number | A unique integer value identifying this project.
let folderWithoutChildrenRequest = new bimdata.FolderWithoutChildrenRequest(); // FolderWithoutChildrenRequest | 
apiInstance.createFolder(cloudPk, projectPk, folderWithoutChildrenRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **folderWithoutChildrenRequest** | [**FolderWithoutChildrenRequest**](FolderWithoutChildrenRequest.md)|  | 

### Return type

[**FolderWithoutChildren**](FolderWithoutChildren.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## createManageGroup

> Group createManageGroup(cloudPk, projectPk, groupRequest)

Create a group

Create a group. Must be an admin of the project  Required scopes: org:manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let projectPk = 56; // Number | A unique integer value identifying this project.
let groupRequest = new bimdata.GroupRequest(); // GroupRequest | 
apiInstance.createManageGroup(cloudPk, projectPk, groupRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **groupRequest** | [**GroupRequest**](GroupRequest.md)|  | 

### Return type

[**Group**](Group.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## createProject

> Project createProject(cloudPk, projectRequest)

Create a project

Create a project  Required scopes: org:manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | 
let projectRequest = new bimdata.ProjectRequest(); // ProjectRequest | 
apiInstance.createProject(cloudPk, projectRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**|  | 
 **projectRequest** | [**ProjectRequest**](ProjectRequest.md)|  | 

### Return type

[**Project**](Project.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## createProjectAccessToken

> ProjectAccessToken createProjectAccessToken(cloudPk, projectPk, projectAccessTokenRequest)

Create a token for this project

Tokens are valid 1 day by default  Required scopes: org:manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let projectPk = 56; // Number | A unique integer value identifying this project.
let projectAccessTokenRequest = new bimdata.ProjectAccessTokenRequest(); // ProjectAccessTokenRequest | 
apiInstance.createProjectAccessToken(cloudPk, projectPk, projectAccessTokenRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **projectAccessTokenRequest** | [**ProjectAccessTokenRequest**](ProjectAccessTokenRequest.md)|  | 

### Return type

[**ProjectAccessToken**](ProjectAccessToken.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## createTag

> Tag createTag(cloudPk, projectPk, tagRequest)

Create a tag

Create a tag  Required scopes: document:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let projectPk = 56; // Number | A unique integer value identifying this project.
let tagRequest = new bimdata.TagRequest(); // TagRequest | 
apiInstance.createTag(cloudPk, projectPk, tagRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **tagRequest** | [**TagRequest**](TagRequest.md)|  | 

### Return type

[**Tag**](Tag.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## createValidation

> VisaValidation createValidation(cloudPk, documentPk, projectPk, visaPk, visaValidationRequest)

Add a validation to a visa

Add a validation to a visa  Required scopes: document:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let documentPk = 56; // Number | A unique integer value identifying this document.
let projectPk = 56; // Number | A unique integer value identifying this project.
let visaPk = 56; // Number | A unique integer value identifying this visa.
let visaValidationRequest = new bimdata.VisaValidationRequest(); // VisaValidationRequest | 
apiInstance.createValidation(cloudPk, documentPk, projectPk, visaPk, visaValidationRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **documentPk** | **Number**| A unique integer value identifying this document. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **visaPk** | **Number**| A unique integer value identifying this visa. | 
 **visaValidationRequest** | [**VisaValidationRequest**](VisaValidationRequest.md)|  | 

### Return type

[**VisaValidation**](VisaValidation.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## createVisa

> Visa createVisa(cloudPk, documentPk, projectPk, opts)

Create a visa

Create a visa  Required scopes: document:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let documentPk = 56; // Number | A unique integer value identifying this document.
let projectPk = 56; // Number | A unique integer value identifying this project.
let opts = {
  'visaRequest': new bimdata.VisaRequest() // VisaRequest | 
};
apiInstance.createVisa(cloudPk, documentPk, projectPk, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **documentPk** | **Number**| A unique integer value identifying this document. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **visaRequest** | [**VisaRequest**](VisaRequest.md)|  | [optional] 

### Return type

[**Visa**](Visa.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## createVisaComment

> VisaComment createVisaComment(cloudPk, documentPk, projectPk, visaPk, opts)

Add a comment

Add a comment  Required scopes: document:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let documentPk = 56; // Number | A unique integer value identifying this document.
let projectPk = 56; // Number | A unique integer value identifying this project.
let visaPk = 56; // Number | A unique integer value identifying this visa.
let opts = {
  'visaCommentRequest': new bimdata.VisaCommentRequest() // VisaCommentRequest | 
};
apiInstance.createVisaComment(cloudPk, documentPk, projectPk, visaPk, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **documentPk** | **Number**| A unique integer value identifying this document. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **visaPk** | **Number**| A unique integer value identifying this visa. | 
 **visaCommentRequest** | [**VisaCommentRequest**](VisaCommentRequest.md)|  | [optional] 

### Return type

[**VisaComment**](VisaComment.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## deleteAllDocumentHistory

> deleteAllDocumentHistory(cloudPk, documentPk, projectPk)

Delete all document history

Delete the document from the head version and all its history  Required scopes: document:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let documentPk = 56; // Number | A unique integer value identifying this document.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.deleteAllDocumentHistory(cloudPk, documentPk, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **documentPk** | **Number**| A unique integer value identifying this document. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteClassification

> deleteClassification(cloudPk, id, projectPk)

Delete a classification

All elements having this classification will lose it  Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this classification.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.deleteClassification(cloudPk, id, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this classification. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteCloud

> deleteCloud(id)

Delete a cloud

Delete a cloud  Required scopes: cloud:manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

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

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteCloudUser

> deleteCloudUser(cloudPk, id)

Remove a user from a cloud

The user will also be removed from all the projects of the cloud  Required scopes: cloud:manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | 
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
 **cloudPk** | **Number**|  | 
 **id** | **Number**| A unique integer value identifying this fos user. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteDocument

> deleteDocument(cloudPk, id, projectPk)

Delete the document

Delete the document  Required scopes: document:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this document.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.deleteDocument(cloudPk, id, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this document. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteDocumentTag

> deleteDocumentTag(cloudPk, documentPk, id, projectPk)

Delete a tag from a document

Delete a tag from a document  Required scopes: document:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | 
let documentPk = 56; // Number | A unique integer value identifying this document.
let id = 56; // Number | A unique integer value identifying this document.
let projectPk = 56; // Number | 
apiInstance.deleteDocumentTag(cloudPk, documentPk, id, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**|  | 
 **documentPk** | **Number**| A unique integer value identifying this document. | 
 **id** | **Number**| A unique integer value identifying this document. | 
 **projectPk** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteFolder

> deleteFolder(cloudPk, id, projectPk)

Delete a folder

All files and subfolders will be deleted too. If folder is a project&#39;s root folder, only children are deleted  Required scopes: document:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this folder.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.deleteFolder(cloudPk, id, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this folder. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteGroupMember

> deleteGroupMember(cloudPk, groupPk, id, projectPk)

Delete a user from a group

Delete a userproject from a group. Id is the userproject_id. Must be an admin of the project.  Required scopes: org:manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | 
let groupPk = 56; // Number | A unique integer value identifying this group.
let id = 56; // Number | A unique integer value identifying this group.
let projectPk = 56; // Number | 
apiInstance.deleteGroupMember(cloudPk, groupPk, id, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**|  | 
 **groupPk** | **Number**| A unique integer value identifying this group. | 
 **id** | **Number**| A unique integer value identifying this group. | 
 **projectPk** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteManageGroup

> deleteManageGroup(cloudPk, id, projectPk)

Delete a group

Delete a group. Must be an admin of the project  Required scopes: org:manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this group.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.deleteManageGroup(cloudPk, id, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this group. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteProject

> deleteProject(cloudPk, id)

Delete a project

It can take a long time to respond because we may need to delete all properties of all elements of all models in the project  Required scopes: org:manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | 
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
 **cloudPk** | **Number**|  | 
 **id** | **Number**| A unique integer value identifying this project. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteProjectAccessToken

> deleteProjectAccessToken(cloudPk, projectPk, token)

Delete a token

Deleting a token will revoke it  Required scopes: org:manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let projectPk = 56; // Number | A unique integer value identifying this project.
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
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **token** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteProjectUser

> deleteProjectUser(cloudPk, id, projectPk)

Remove a user from a project

Remove a user from a project  Required scopes: cloud:manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | 
let id = 56; // Number | A unique integer value identifying this user project.
let projectPk = 56; // Number | 
apiInstance.deleteProjectUser(cloudPk, id, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**|  | 
 **id** | **Number**| A unique integer value identifying this user project. | 
 **projectPk** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteTag

> deleteTag(cloudPk, id, projectPk)

Delete the tag

Delete the tag  Required scopes: document:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this tag.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.deleteTag(cloudPk, id, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this tag. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteValidation

> deleteValidation(cloudPk, documentPk, id, projectPk, visaPk)

Remove a validation

Remove a validation  Required scopes: document:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let documentPk = 56; // Number | A unique integer value identifying this document.
let id = 56; // Number | A unique integer value identifying this visa validation.
let projectPk = 56; // Number | A unique integer value identifying this project.
let visaPk = 56; // Number | A unique integer value identifying this visa.
apiInstance.deleteValidation(cloudPk, documentPk, id, projectPk, visaPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **documentPk** | **Number**| A unique integer value identifying this document. | 
 **id** | **Number**| A unique integer value identifying this visa validation. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **visaPk** | **Number**| A unique integer value identifying this visa. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteVisa

> deleteVisa(cloudPk, documentPk, id, projectPk)

Remove a visa

Remove a visa  Required scopes: document:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let documentPk = 56; // Number | A unique integer value identifying this document.
let id = 56; // Number | A unique integer value identifying this visa.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.deleteVisa(cloudPk, documentPk, id, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **documentPk** | **Number**| A unique integer value identifying this document. | 
 **id** | **Number**| A unique integer value identifying this visa. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteVisaComment

> deleteVisaComment(cloudPk, documentPk, id, projectPk, visaPk)

Remove a comment

Remove a comment  Required scopes: document:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let documentPk = 56; // Number | A unique integer value identifying this document.
let id = 56; // Number | A unique integer value identifying this visa comment.
let projectPk = 56; // Number | A unique integer value identifying this project.
let visaPk = 56; // Number | A unique integer value identifying this visa.
apiInstance.deleteVisaComment(cloudPk, documentPk, id, projectPk, visaPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **documentPk** | **Number**| A unique integer value identifying this document. | 
 **id** | **Number**| A unique integer value identifying this visa comment. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **visaPk** | **Number**| A unique integer value identifying this visa. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## denyUserInvitation

> denyUserInvitation(id)

Deny an invitation

The invitation status change to DENIED and the user is not added to the cloud. You can accept an invitation previously denied  Required scopes: user:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let id = 56; // Number | A unique integer value identifying this invitation.
apiInstance.denyUserInvitation(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this invitation. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## denyValidation

> VisaAttachment denyValidation(cloudPk, documentPk, id, projectPk, visaPk, opts)

Deny a validation

Deny a validation  Required scopes: document:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let documentPk = 56; // Number | A unique integer value identifying this document.
let id = 56; // Number | A unique integer value identifying this visa validation.
let projectPk = 56; // Number | A unique integer value identifying this project.
let visaPk = 56; // Number | A unique integer value identifying this visa.
let opts = {
  'attachment': "/path/to/file" // File | 
};
apiInstance.denyValidation(cloudPk, documentPk, id, projectPk, visaPk, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **documentPk** | **Number**| A unique integer value identifying this document. | 
 **id** | **Number**| A unique integer value identifying this visa validation. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **visaPk** | **Number**| A unique integer value identifying this visa. | 
 **attachment** | **File**|  | [optional] 

### Return type

[**VisaAttachment**](VisaAttachment.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: multipart/form-data, application/x-www-form-urlencoded, application/json
- **Accept**: application/json


## getClassification

> Classification getClassification(cloudPk, id, projectPk)

Retrieve a classification

Retrieve a classification  Required scopes: ifc:read, model:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this classification.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getClassification(cloudPk, id, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this classification. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**Classification**](Classification.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getClassifications

> [Classification] getClassifications(cloudPk, projectPk)

Retrieve all classifications

Retrieve all classifications of all models in the project  Required scopes: ifc:read, model:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getClassifications(cloudPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**[Classification]**](Classification.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCloud

> Cloud getCloud(id)

Retrieve one cloud

Retrieve one cloud

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

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

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCloudInvitations

> [CloudInvitation] getCloudInvitations(cloudPk)

Retrieve all pending invitations in the cloud

Returns app&#39;s invitations only  Required scopes: org:manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | 
apiInstance.getCloudInvitations(cloudPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**|  | 

### Return type

[**[CloudInvitation]**](CloudInvitation.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCloudSize

> Size getCloudSize(id)

Get size of the cloud

 Returns the sizes of the cloud in Bytes. The response fields depends on the role of the user. If the user is an admin, all field will be returned. If the user is a standard user, only &#x60;remaining_total_size&#x60; and &#x60;remaining_smart_data_size&#x60; will be set. If the call is made from an API access, role admin (100) will be returned and all fields will be set. The fields &#x60;managed by&#x60; indicate if the subscription for this cloud is an API subscription or a BIMData Platform subscription. If the cloud is managed by an API plan, the remaining sizes will take others organizations&#39;s clouds size into account

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

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

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCloudUser

> User getCloudUser(cloudPk, id)

Retrieve a user in a cloud

Only administrators can see a cloud member  Required scopes: cloud:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | 
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
 **cloudPk** | **Number**|  | 
 **id** | **Number**| A unique integer value identifying this fos user. | 

### Return type

[**User**](User.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCloudUsers

> [User] getCloudUsers(cloudPk, opts)

Retrieve all users in a cloud, or a list with a filter by email

Only administrators can see cloud members.  Required scopes: cloud:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | 
let opts = {
  'email': "email_example", // String | 
  'emailContains': "emailContains_example", // String | 
  'emailEndswith': "emailEndswith_example", // String | 
  'emailStartswith': "emailStartswith_example" // String | 
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
 **cloudPk** | **Number**|  | 
 **email** | **String**|  | [optional] 
 **emailContains** | **String**|  | [optional] 
 **emailEndswith** | **String**|  | [optional] 
 **emailStartswith** | **String**|  | [optional] 

### Return type

[**[User]**](User.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

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
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

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

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDocument

> Document getDocument(cloudPk, id, projectPk)

Retrieve a document

Retrieve a document in the project  Required scopes: document:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this document.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getDocument(cloudPk, id, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this document. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**Document**](Document.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDocumentHistories

> [Document] getDocumentHistories(cloudPk, documentPk, projectPk)

Retrieve all document histories

Retrieve all documents from the header document history  Required scopes: document:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let documentPk = 56; // Number | A unique integer value identifying this document.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getDocumentHistories(cloudPk, documentPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **documentPk** | **Number**| A unique integer value identifying this document. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**[Document]**](Document.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDocuments

> [Document] getDocuments(cloudPk, projectPk, opts)

Retrieve all documents

Retrieve all documents in the project. Filters are case insentive  Required scopes: document:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let projectPk = 56; // Number | A unique integer value identifying this project.
let opts = {
  'createdAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'createdBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'creatorEmail': "creatorEmail_example", // String | 
  'description': "description_example", // String | 
  'descriptionContains': "descriptionContains_example", // String | 
  'descriptionEndswith': "descriptionEndswith_example", // String | 
  'descriptionStartswith': "descriptionStartswith_example", // String | 
  'fileName': "fileName_example", // String | 
  'fileNameContains': "fileNameContains_example", // String | 
  'fileNameEndswith': "fileNameEndswith_example", // String | 
  'fileNameStartswith': "fileNameStartswith_example", // String | 
  'name': "name_example", // String | 
  'nameContains': "nameContains_example", // String | 
  'nameEndswith': "nameEndswith_example", // String | 
  'nameStartswith': "nameStartswith_example", // String | 
  'sizeMax': 789, // Number | Size of the file.
  'sizeMin': 789, // Number | Size of the file.
  'tags': ["null"], // [String] | Multiple values may be separated by commas.
  'visaCreatorEmail': "visaCreatorEmail_example", // String | 
  'visaDeadlineAfter': new Date("2013-10-20"), // Date | 
  'visaDeadlineBefore': new Date("2013-10-20"), // Date | 
  'visaStatus': "visaStatus_example", // String | * `O` - opened * `P` - paused * `C` - closed
  'visaValidationStatus': "visaValidationStatus_example", // String | 
  'visaValidatorEmail': "visaValidatorEmail_example" // String | 
};
apiInstance.getDocuments(cloudPk, projectPk, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **createdAfter** | **Date**|  | [optional] 
 **createdBefore** | **Date**|  | [optional] 
 **creatorEmail** | **String**|  | [optional] 
 **description** | **String**|  | [optional] 
 **descriptionContains** | **String**|  | [optional] 
 **descriptionEndswith** | **String**|  | [optional] 
 **descriptionStartswith** | **String**|  | [optional] 
 **fileName** | **String**|  | [optional] 
 **fileNameContains** | **String**|  | [optional] 
 **fileNameEndswith** | **String**|  | [optional] 
 **fileNameStartswith** | **String**|  | [optional] 
 **name** | **String**|  | [optional] 
 **nameContains** | **String**|  | [optional] 
 **nameEndswith** | **String**|  | [optional] 
 **nameStartswith** | **String**|  | [optional] 
 **sizeMax** | **Number**| Size of the file. | [optional] 
 **sizeMin** | **Number**| Size of the file. | [optional] 
 **tags** | [**[String]**](String.md)| Multiple values may be separated by commas. | [optional] 
 **visaCreatorEmail** | **String**|  | [optional] 
 **visaDeadlineAfter** | **Date**|  | [optional] 
 **visaDeadlineBefore** | **Date**|  | [optional] 
 **visaStatus** | **String**| * &#x60;O&#x60; - opened * &#x60;P&#x60; - paused * &#x60;C&#x60; - closed | [optional] 
 **visaValidationStatus** | **String**|  | [optional] 
 **visaValidatorEmail** | **String**|  | [optional] 

### Return type

[**[Document]**](Document.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFolder

> FolderWithoutChildren getFolder(cloudPk, id, projectPk)

Retrieve a folder

Retrieve a folder  Required scopes: document:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this folder.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getFolder(cloudPk, id, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this folder. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**FolderWithoutChildren**](FolderWithoutChildren.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFolderDocuments

> [Document] getFolderDocuments(cloudPk, folderPk, projectPk, opts)

Get all documents of a folder

Get all documents of a folder  Required scopes: document:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | 
let folderPk = 56; // Number | 
let projectPk = 56; // Number | 
let opts = {
  'createdAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'createdBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'creatorEmail': "creatorEmail_example", // String | 
  'description': "description_example", // String | 
  'descriptionContains': "descriptionContains_example", // String | 
  'descriptionEndswith': "descriptionEndswith_example", // String | 
  'descriptionStartswith': "descriptionStartswith_example", // String | 
  'fileName': "fileName_example", // String | 
  'fileNameContains': "fileNameContains_example", // String | 
  'fileNameEndswith': "fileNameEndswith_example", // String | 
  'fileNameStartswith': "fileNameStartswith_example", // String | 
  'name': "name_example", // String | 
  'nameContains': "nameContains_example", // String | 
  'nameEndswith': "nameEndswith_example", // String | 
  'nameStartswith': "nameStartswith_example", // String | 
  'sizeMax': 789, // Number | Size of the file.
  'sizeMin': 789, // Number | Size of the file.
  'tags': ["null"], // [String] | Multiple values may be separated by commas.
  'visaCreatorEmail': "visaCreatorEmail_example", // String | 
  'visaDeadlineAfter': new Date("2013-10-20"), // Date | 
  'visaDeadlineBefore': new Date("2013-10-20"), // Date | 
  'visaStatus': "visaStatus_example", // String | * `O` - opened * `P` - paused * `C` - closed
  'visaValidationStatus': "visaValidationStatus_example", // String | 
  'visaValidatorEmail': "visaValidatorEmail_example" // String | 
};
apiInstance.getFolderDocuments(cloudPk, folderPk, projectPk, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**|  | 
 **folderPk** | **Number**|  | 
 **projectPk** | **Number**|  | 
 **createdAfter** | **Date**|  | [optional] 
 **createdBefore** | **Date**|  | [optional] 
 **creatorEmail** | **String**|  | [optional] 
 **description** | **String**|  | [optional] 
 **descriptionContains** | **String**|  | [optional] 
 **descriptionEndswith** | **String**|  | [optional] 
 **descriptionStartswith** | **String**|  | [optional] 
 **fileName** | **String**|  | [optional] 
 **fileNameContains** | **String**|  | [optional] 
 **fileNameEndswith** | **String**|  | [optional] 
 **fileNameStartswith** | **String**|  | [optional] 
 **name** | **String**|  | [optional] 
 **nameContains** | **String**|  | [optional] 
 **nameEndswith** | **String**|  | [optional] 
 **nameStartswith** | **String**|  | [optional] 
 **sizeMax** | **Number**| Size of the file. | [optional] 
 **sizeMin** | **Number**| Size of the file. | [optional] 
 **tags** | [**[String]**](String.md)| Multiple values may be separated by commas. | [optional] 
 **visaCreatorEmail** | **String**|  | [optional] 
 **visaDeadlineAfter** | **Date**|  | [optional] 
 **visaDeadlineBefore** | **Date**|  | [optional] 
 **visaStatus** | **String**| * &#x60;O&#x60; - opened * &#x60;P&#x60; - paused * &#x60;C&#x60; - closed | [optional] 
 **visaValidationStatus** | **String**|  | [optional] 
 **visaValidatorEmail** | **String**|  | [optional] 

### Return type

[**[Document]**](Document.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFolderProjectUsers

> [FolderUserProject] getFolderProjectUsers(cloudPk, folderPk, projectPk)

Retrieve all users in a project with the permission on the folder

Retrieve all users in a project with the permission on the folder  Required scopes: document:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | 
let folderPk = 56; // Number | A unique integer value identifying this folder.
let projectPk = 56; // Number | 
apiInstance.getFolderProjectUsers(cloudPk, folderPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**|  | 
 **folderPk** | **Number**| A unique integer value identifying this folder. | 
 **projectPk** | **Number**|  | 

### Return type

[**[FolderUserProject]**](FolderUserProject.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFolders

> [FolderWithoutChildren] getFolders(cloudPk, projectPk)

Retrieve all folders

Retrieve all folders in the project. This is an array of folder. If you want to get the tree of all folders, see getProjectTree  Required scopes: document:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getFolders(cloudPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**[FolderWithoutChildren]**](FolderWithoutChildren.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getGroup

> Group getGroup(cloudPk, id, projectPk)

Retrieve a group

Retrieve a group to which the user belongs  Required scopes: document:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this group.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getGroup(cloudPk, id, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this group. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**Group**](Group.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getGroups

> [Group] getGroups(cloudPk, projectPk)

Retrieve all groups

Retrieves all groups to which the user belongs  Required scopes: document:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getGroups(cloudPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**[Group]**](Group.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLogs

> [LogEntry] getLogs(cloudPk, projectPk)

Retrieve all logs of the project

Retrieve all logs of the project  Required scopes: logs:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | 
let projectPk = 56; // Number | 
apiInstance.getLogs(cloudPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**|  | 
 **projectPk** | **Number**|  | 

### Return type

[**[LogEntry]**](LogEntry.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getManageGroup

> Group getManageGroup(cloudPk, id, projectPk)

Retrieve a group

Retrieve a group. Must be an admin of the project  Required scopes: org:manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this group.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getManageGroup(cloudPk, id, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this group. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**Group**](Group.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getManageGroups

> [Group] getManageGroups(cloudPk, projectPk)

Retrieve all groups

Retrieve all groups in the project. Must be an admin of the project  Required scopes: org:manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getManageGroups(cloudPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**[Group]**](Group.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

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
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | 
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
 **cloudPk** | **Number**|  | 
 **id** | **Number**| A unique integer value identifying this project. | 

### Return type

[**ProjectWithChildren**](ProjectWithChildren.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProjectAccessToken

> ProjectAccessToken getProjectAccessToken(cloudPk, projectPk, token)

Retrieve one token created for this project

Retrieve one token created for this project  Required scopes: org:manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let projectPk = 56; // Number | A unique integer value identifying this project.
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
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **token** | **String**|  | 

### Return type

[**ProjectAccessToken**](ProjectAccessToken.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProjectAccessTokens

> [ProjectAccessToken] getProjectAccessTokens(cloudPk, projectPk)

Retrieve all tokens created for this project

Retrieve all tokens created for this project  Required scopes: org:manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getProjectAccessTokens(cloudPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**[ProjectAccessToken]**](ProjectAccessToken.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProjectCreatorVisas

> [Visa] getProjectCreatorVisas(cloudPk, projectPk)

List visas created by user

List visas created by user in a project  Required scopes: document:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getProjectCreatorVisas(cloudPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**[Visa]**](Visa.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

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
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | 
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
 **cloudPk** | **Number**|  | 
 **id** | **Number**| A unique integer value identifying this project. | 

### Return type

[**Folder**](Folder.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProjectFolderTree

> [FolderTree] getProjectFolderTree(cloudPk, id)

Retrieve folder tree of the project

Retrieve folder tree of the project

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | 
let id = 56; // Number | A unique integer value identifying this project.
apiInstance.getProjectFolderTree(cloudPk, id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**|  | 
 **id** | **Number**| A unique integer value identifying this project. | 

### Return type

[**[FolderTree]**](FolderTree.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProjectInvitations

> [ProjectInvitation] getProjectInvitations(cloudPk, projectPk)

Retrieve all pending invitations in the project

Returns app&#39;s invitations only  Required scopes: org:manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getProjectInvitations(cloudPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**[ProjectInvitation]**](ProjectInvitation.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProjectSize

> ProjectSize getProjectSize(cloudPk, id)

Get size of all model files in the project

Returns the size of the project in Bytes

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | 
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
 **cloudPk** | **Number**|  | 
 **id** | **Number**| A unique integer value identifying this project. | 

### Return type

[**ProjectSize**](ProjectSize.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

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
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | 
apiInstance.getProjectSubTree(cloudPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**|  | 

### Return type

[**[ProjectWithChildren]**](ProjectWithChildren.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

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
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | 
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
 **cloudPk** | **Number**|  | 
 **id** | **Number**| A unique integer value identifying this project. | 

### Return type

[**Folder**](Folder.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProjectUsers

> [UserProject] getProjectUsers(cloudPk, projectPk, opts)

Retrieve all users in a project, or a list with a filter by email

Each member of a project can see other members of the project  Required scopes: cloud:read, bcf:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | 
let projectPk = 56; // Number | 
let opts = {
  'email': "email_example", // String | Filter the returned list by email
  'emailContains': "emailContains_example", // String | Filter the returned list by email__contains
  'emailEndswith': "emailEndswith_example", // String | Filter the returned list by email__endswith
  'emailStartswith': "emailStartswith_example" // String | Filter the returned list by email__startswith
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
 **cloudPk** | **Number**|  | 
 **projectPk** | **Number**|  | 
 **email** | **String**| Filter the returned list by email | [optional] 
 **emailContains** | **String**| Filter the returned list by email__contains | [optional] 
 **emailEndswith** | **String**| Filter the returned list by email__endswith | [optional] 
 **emailStartswith** | **String**| Filter the returned list by email__startswith | [optional] 

### Return type

[**[UserProject]**](UserProject.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProjectValidatorVisas

> [Visa] getProjectValidatorVisas(cloudPk, projectPk)

List visas where user is a validator

List visas where user is a validator in a project  Required scopes: document:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getProjectValidatorVisas(cloudPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**[Visa]**](Visa.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

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
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | 
apiInstance.getProjects(cloudPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**|  | 

### Return type

[**[Project]**](Project.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSelfProjects

> [Project] getSelfProjects()

List current user&#39;s projects

List user&#39;s projects of all clouds  Required scopes: user:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

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

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSelfUser

> SelfUser getSelfUser()

Get info about the current user

Get info about the current user  Required scopes: user:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

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

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTag

> Tag getTag(cloudPk, id, projectPk)

Retrieve a tag

Retrieve a tag in the project  Required scopes: document:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this tag.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getTag(cloudPk, id, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this tag. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**Tag**](Tag.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTags

> [Tag] getTags(cloudPk, projectPk)

Retrieve all tags

Retrieve all tags in the project  Required scopes: document:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getTags(cloudPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**[Tag]**](Tag.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserInvitation

> UserInvitation getUserInvitation(id)

Retrieve an invitation

Retrieve the invitation  Required scopes: user:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let id = 56; // Number | A unique integer value identifying this invitation.
apiInstance.getUserInvitation(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this invitation. | 

### Return type

[**UserInvitation**](UserInvitation.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserInvitations

> [UserInvitation] getUserInvitations()

List user&#39;s invitations

List all user&#39;s invitations  Required scopes: user:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
apiInstance.getUserInvitations().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[UserInvitation]**](UserInvitation.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getValidation

> VisaValidation getValidation(cloudPk, documentPk, id, projectPk, visaPk)

Retrieve a validation to a visa

Retrieve a validation to a visa  Required scopes: document:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let documentPk = 56; // Number | A unique integer value identifying this document.
let id = 56; // Number | A unique integer value identifying this visa validation.
let projectPk = 56; // Number | A unique integer value identifying this project.
let visaPk = 56; // Number | A unique integer value identifying this visa.
apiInstance.getValidation(cloudPk, documentPk, id, projectPk, visaPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **documentPk** | **Number**| A unique integer value identifying this document. | 
 **id** | **Number**| A unique integer value identifying this visa validation. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **visaPk** | **Number**| A unique integer value identifying this visa. | 

### Return type

[**VisaValidation**](VisaValidation.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getValidations

> [VisaValidation] getValidations(cloudPk, documentPk, projectPk, visaPk)

List all validations to a visa

List all validations to a visa  Required scopes: document:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let documentPk = 56; // Number | A unique integer value identifying this document.
let projectPk = 56; // Number | A unique integer value identifying this project.
let visaPk = 56; // Number | A unique integer value identifying this visa.
apiInstance.getValidations(cloudPk, documentPk, projectPk, visaPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **documentPk** | **Number**| A unique integer value identifying this document. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **visaPk** | **Number**| A unique integer value identifying this visa. | 

### Return type

[**[VisaValidation]**](VisaValidation.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getVisa

> Visa getVisa(cloudPk, documentPk, id, projectPk)

Retrieve a visa of a document

Retrieve a unique visa of a document  Required scopes: document:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let documentPk = 56; // Number | A unique integer value identifying this document.
let id = 56; // Number | A unique integer value identifying this visa.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getVisa(cloudPk, documentPk, id, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **documentPk** | **Number**| A unique integer value identifying this document. | 
 **id** | **Number**| A unique integer value identifying this visa. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**Visa**](Visa.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getVisaComment

> VisaComment getVisaComment(cloudPk, documentPk, id, projectPk, visaPk)

Retrieve a comment

Retrieve a comment  Required scopes: document:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let documentPk = 56; // Number | A unique integer value identifying this document.
let id = 56; // Number | A unique integer value identifying this visa comment.
let projectPk = 56; // Number | A unique integer value identifying this project.
let visaPk = 56; // Number | A unique integer value identifying this visa.
apiInstance.getVisaComment(cloudPk, documentPk, id, projectPk, visaPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **documentPk** | **Number**| A unique integer value identifying this document. | 
 **id** | **Number**| A unique integer value identifying this visa comment. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **visaPk** | **Number**| A unique integer value identifying this visa. | 

### Return type

[**VisaComment**](VisaComment.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getVisaComments

> [VisaComment] getVisaComments(cloudPk, documentPk, projectPk, visaPk)

List all comment of a visa

List all comment of a visa  Required scopes: document:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let documentPk = 56; // Number | A unique integer value identifying this document.
let projectPk = 56; // Number | A unique integer value identifying this project.
let visaPk = 56; // Number | A unique integer value identifying this visa.
apiInstance.getVisaComments(cloudPk, documentPk, projectPk, visaPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **documentPk** | **Number**| A unique integer value identifying this document. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **visaPk** | **Number**| A unique integer value identifying this visa. | 

### Return type

[**[VisaComment]**](VisaComment.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getVisas

> [Visa] getVisas(cloudPk, documentPk, projectPk)

List all visas of a document

List all visas of a document  Required scopes: document:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let documentPk = 56; // Number | A unique integer value identifying this document.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getVisas(cloudPk, documentPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **documentPk** | **Number**| A unique integer value identifying this document. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**[Visa]**](Visa.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## importFromProject

> Project importFromProject(cloudPk, id, projectImportRequest)

Import data from a project

Import dms tree and/or the groups from a project  Required scopes: org:manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | 
let id = 56; // Number | A unique integer value identifying this project.
let projectImportRequest = new bimdata.ProjectImportRequest(); // ProjectImportRequest | 
apiInstance.importFromProject(cloudPk, id, projectImportRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**|  | 
 **id** | **Number**| A unique integer value identifying this project. | 
 **projectImportRequest** | [**ProjectImportRequest**](ProjectImportRequest.md)|  | 

### Return type

[**Project**](Project.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## importManageGroup

> [Group] importManageGroup(cloudPk, projectPk, importGroupRequest)

Import a group from another project

DEPECRATED: Use ImportFromProject instead  Required scopes: org:manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let projectPk = 56; // Number | A unique integer value identifying this project.
let importGroupRequest = new bimdata.ImportGroupRequest(); // ImportGroupRequest | 
apiInstance.importManageGroup(cloudPk, projectPk, importGroupRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **importGroupRequest** | [**ImportGroupRequest**](ImportGroupRequest.md)|  | 

### Return type

[**[Group]**](Group.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## inviteCloudUser

> CloudInvitation inviteCloudUser(cloudPk, cloudInvitationRequest)

Invite a cloud member

Invite a cloud member. To invite in a project, see inviteProjectUser. You can&#39;t invite a user already in the cloud. Create multiple invitations of the same email in the same cloud will generate multiple invitation emails but not multiple invitation object  Required scopes: org:manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | 
let cloudInvitationRequest = new bimdata.CloudInvitationRequest(); // CloudInvitationRequest | 
apiInstance.inviteCloudUser(cloudPk, cloudInvitationRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**|  | 
 **cloudInvitationRequest** | [**CloudInvitationRequest**](CloudInvitationRequest.md)|  | 

### Return type

[**CloudInvitation**](CloudInvitation.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## inviteProjectUser

> ProjectInvitation inviteProjectUser(cloudPk, projectPk, projectInvitationRequest)

Invite a project member

Invite a project member. If the user is not already a cloud member, they will also be invited in the cloud with USER role.  Required scopes: org:manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let projectPk = 56; // Number | A unique integer value identifying this project.
let projectInvitationRequest = new bimdata.ProjectInvitationRequest(); // ProjectInvitationRequest | 
apiInstance.inviteProjectUser(cloudPk, projectPk, projectInvitationRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **projectInvitationRequest** | [**ProjectInvitationRequest**](ProjectInvitationRequest.md)|  | 

### Return type

[**ProjectInvitation**](ProjectInvitation.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## leaveProject

> leaveProject(cloudPk, id)

Leave the project

Leave the project. Only authenticated users (no app) can call this route.  Required scopes: org:manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | 
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
 **cloudPk** | **Number**|  | 
 **id** | **Number**| A unique integer value identifying this project. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## leaveVersionDocumentHistory

> Document leaveVersionDocumentHistory(cloudPk, documentPk, id, projectPk)

Leave the history version

This will create a new independent document in the same folder  Required scopes: document:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let documentPk = 56; // Number | A unique integer value identifying this document.
let id = 56; // Number | A unique integer value identifying this document.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.leaveVersionDocumentHistory(cloudPk, documentPk, id, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **documentPk** | **Number**| A unique integer value identifying this document. | 
 **id** | **Number**| A unique integer value identifying this document. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**Document**](Document.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## makeHeadVersionDocumentHistory

> Document makeHeadVersionDocumentHistory(cloudPk, documentPk, id, projectPk)

Make the head of the version

The actual head version will be defined as the previous version  Required scopes: document:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let documentPk = 56; // Number | A unique integer value identifying this document.
let id = 56; // Number | A unique integer value identifying this document.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.makeHeadVersionDocumentHistory(cloudPk, documentPk, id, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **documentPk** | **Number**| A unique integer value identifying this document. | 
 **id** | **Number**| A unique integer value identifying this document. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**Document**](Document.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## pauseVisa

> pauseVisa(cloudPk, documentPk, id, projectPk)

Pause a visa of a document

Pause a visa of a document  Required scopes: document:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let documentPk = 56; // Number | A unique integer value identifying this document.
let id = 56; // Number | A unique integer value identifying this visa.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.pauseVisa(cloudPk, documentPk, id, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **documentPk** | **Number**| A unique integer value identifying this document. | 
 **id** | **Number**| A unique integer value identifying this visa. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## resetValidation

> resetValidation(cloudPk, documentPk, id, projectPk, visaPk)

Reset a validation

Reset a validation if the validation has been accepted or rejected. The attachment will be removed  Required scopes: document:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let documentPk = 56; // Number | A unique integer value identifying this document.
let id = 56; // Number | A unique integer value identifying this visa validation.
let projectPk = 56; // Number | A unique integer value identifying this project.
let visaPk = 56; // Number | A unique integer value identifying this visa.
apiInstance.resetValidation(cloudPk, documentPk, id, projectPk, visaPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **documentPk** | **Number**| A unique integer value identifying this document. | 
 **id** | **Number**| A unique integer value identifying this visa validation. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **visaPk** | **Number**| A unique integer value identifying this visa. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## resumeVisa

> resumeVisa(cloudPk, documentPk, id, projectPk)

Resume a visa of a document

Resume a visa of a document after a pause  Required scopes: document:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let documentPk = 56; // Number | A unique integer value identifying this document.
let id = 56; // Number | A unique integer value identifying this visa.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.resumeVisa(cloudPk, documentPk, id, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **documentPk** | **Number**| A unique integer value identifying this document. | 
 **id** | **Number**| A unique integer value identifying this visa. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## updateClassification

> Classification updateClassification(cloudPk, id, projectPk, opts)

Update some fields of a classification

Update some fields of a classification  Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this classification.
let projectPk = 56; // Number | A unique integer value identifying this project.
let opts = {
  'patchedClassificationRequest': new bimdata.PatchedClassificationRequest() // PatchedClassificationRequest | 
};
apiInstance.updateClassification(cloudPk, id, projectPk, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this classification. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **patchedClassificationRequest** | [**PatchedClassificationRequest**](PatchedClassificationRequest.md)|  | [optional] 

### Return type

[**Classification**](Classification.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## updateCloud

> Cloud updateCloud(id, opts)

Update some fields of a cloud

Update some fields of a cloud  Required scopes: cloud:manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let id = 56; // Number | A unique integer value identifying this cloud.
let opts = {
  'patchedCloudRequest': new bimdata.PatchedCloudRequest() // PatchedCloudRequest | 
};
apiInstance.updateCloud(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this cloud. | 
 **patchedCloudRequest** | [**PatchedCloudRequest**](PatchedCloudRequest.md)|  | [optional] 

### Return type

[**Cloud**](Cloud.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## updateCloudUser

> User updateCloudUser(cloudPk, id, opts)

Change the user role in the cloud

Change the user role in the cloud  Required scopes: cloud:manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | 
let id = 56; // Number | A unique integer value identifying this fos user.
let opts = {
  'patchedUserCloudUpdateRequest': new bimdata.PatchedUserCloudUpdateRequest() // PatchedUserCloudUpdateRequest | 
};
apiInstance.updateCloudUser(cloudPk, id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**|  | 
 **id** | **Number**| A unique integer value identifying this fos user. | 
 **patchedUserCloudUpdateRequest** | [**PatchedUserCloudUpdateRequest**](PatchedUserCloudUpdateRequest.md)|  | [optional] 

### Return type

[**User**](User.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## updateDocument

> Document updateDocument(cloudPk, id, projectPk, opts)

Update some fields of the document

Update some fields of the document  Required scopes: document:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this document.
let projectPk = 56; // Number | A unique integer value identifying this project.
let opts = {
  'patchedDocumentRequest': new bimdata.PatchedDocumentRequest() // PatchedDocumentRequest | 
};
apiInstance.updateDocument(cloudPk, id, projectPk, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this document. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **patchedDocumentRequest** | [**PatchedDocumentRequest**](PatchedDocumentRequest.md)|  | [optional] 

### Return type

[**Document**](Document.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## updateFolder

> FolderWithoutChildren updateFolder(cloudPk, id, projectPk, opts)

Update some fields of a folder

 Update some fields of a folder. Only project admins can update the &#x60;default_permission&#x60; field.  &#x60;default_permission&#x60; choices are : &#x60;&#x60;&#x60; 1: ACCESS_DENIED, 50: READ_ONLY, 100: READ_WRTIE &#x60;&#x60;&#x60; When propagate is set to True, the permission of all children in the folder will be updated.  Caution: The &#39;default_permission&#39; field is not applied to users belonging to one or more groups.   Required scopes: document:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this folder.
let projectPk = 56; // Number | A unique integer value identifying this project.
let opts = {
  'patchedFolderWithoutChildrenRequest': new bimdata.PatchedFolderWithoutChildrenRequest() // PatchedFolderWithoutChildrenRequest | 
};
apiInstance.updateFolder(cloudPk, id, projectPk, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this folder. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **patchedFolderWithoutChildrenRequest** | [**PatchedFolderWithoutChildrenRequest**](PatchedFolderWithoutChildrenRequest.md)|  | [optional] 

### Return type

[**FolderWithoutChildren**](FolderWithoutChildren.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## updateGroupFolder

> GroupFolder updateGroupFolder(cloudPk, folderPk, id, projectPk, opts)

Update the permission of a group on a folder. When propagate is set to True, the permission of all children in the folder will be updated.

 Update the permission of a group on a folder. Permissions choices are : &#x60;&#x60;&#x60; 1: ACCESS_DENIED, 50: READ_ONLY, 100: READ_WRITE, None: Default value (See the default_permission field of the folder) &#x60;&#x60;&#x60; When propagate is set to True, the permission of all children in the folder will be updated.               Required scopes: org:manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let folderPk = 56; // Number | 
let id = 56; // Number | A unique integer value identifying this group folder.
let projectPk = 56; // Number | A unique integer value identifying this project.
let opts = {
  'patchedGroupFolderRequest': new bimdata.PatchedGroupFolderRequest() // PatchedGroupFolderRequest | 
};
apiInstance.updateGroupFolder(cloudPk, folderPk, id, projectPk, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **folderPk** | **Number**|  | 
 **id** | **Number**| A unique integer value identifying this group folder. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **patchedGroupFolderRequest** | [**PatchedGroupFolderRequest**](PatchedGroupFolderRequest.md)|  | [optional] 

### Return type

[**GroupFolder**](GroupFolder.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## updateManageGroup

> Group updateManageGroup(cloudPk, id, projectPk, opts)

Update some fields of a group

Update some fields of a group. Must be an admin of the project  Required scopes: org:manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this group.
let projectPk = 56; // Number | A unique integer value identifying this project.
let opts = {
  'patchedGroupRequest': new bimdata.PatchedGroupRequest() // PatchedGroupRequest | 
};
apiInstance.updateManageGroup(cloudPk, id, projectPk, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this group. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **patchedGroupRequest** | [**PatchedGroupRequest**](PatchedGroupRequest.md)|  | [optional] 

### Return type

[**Group**](Group.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## updatePreviewFile

> DocumentPreviewFile updatePreviewFile(cloudPk, id, projectPk, opts)

Update preview of the document

Update preview of the document  Required scopes: document:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this document.
let projectPk = 56; // Number | A unique integer value identifying this project.
let opts = {
  'officePreview': "/path/to/file" // File | Office files will be converted as pdf to provide a web preview. Supported extensions are .ppt, .pptx, .odp, .xls, .xlsx, .ods, .doc, .docx, .odt
};
apiInstance.updatePreviewFile(cloudPk, id, projectPk, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this document. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **officePreview** | **File**| Office files will be converted as pdf to provide a web preview. Supported extensions are .ppt, .pptx, .odp, .xls, .xlsx, .ods, .doc, .docx, .odt | [optional] 

### Return type

[**DocumentPreviewFile**](DocumentPreviewFile.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: multipart/form-data, application/x-www-form-urlencoded
- **Accept**: application/json


## updateProject

> Project updateProject(cloudPk, id, opts)

Update some fields of a project

Update some fields of a project  Required scopes: org:manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | 
let id = 56; // Number | A unique integer value identifying this project.
let opts = {
  'patchedProjectRequest': new bimdata.PatchedProjectRequest() // PatchedProjectRequest | 
};
apiInstance.updateProject(cloudPk, id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**|  | 
 **id** | **Number**| A unique integer value identifying this project. | 
 **patchedProjectRequest** | [**PatchedProjectRequest**](PatchedProjectRequest.md)|  | [optional] 

### Return type

[**Project**](Project.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## updateProjectUser

> UserProject updateProjectUser(cloudPk, id, projectPk, opts)

Change the user role in the cloud

Change the user role in the cloud  Required scopes: cloud:manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | 
let id = 56; // Number | A unique integer value identifying this user project.
let projectPk = 56; // Number | 
let opts = {
  'patchedUserProjectUpdateRequest': new bimdata.PatchedUserProjectUpdateRequest() // PatchedUserProjectUpdateRequest | 
};
apiInstance.updateProjectUser(cloudPk, id, projectPk, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**|  | 
 **id** | **Number**| A unique integer value identifying this user project. | 
 **projectPk** | **Number**|  | 
 **patchedUserProjectUpdateRequest** | [**PatchedUserProjectUpdateRequest**](PatchedUserProjectUpdateRequest.md)|  | [optional] 

### Return type

[**UserProject**](UserProject.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## updateTag

> Tag updateTag(cloudPk, id, projectPk, opts)

Update some fields of the tag

Update some fields of the tag  Required scopes: document:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this tag.
let projectPk = 56; // Number | A unique integer value identifying this project.
let opts = {
  'patchedTagRequest': new bimdata.PatchedTagRequest() // PatchedTagRequest | 
};
apiInstance.updateTag(cloudPk, id, projectPk, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this tag. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **patchedTagRequest** | [**PatchedTagRequest**](PatchedTagRequest.md)|  | [optional] 

### Return type

[**Tag**](Tag.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## updateValidation

> VisaValidation updateValidation(cloudPk, documentPk, id, projectPk, visaPk, opts)

Update the validator of validation

Update the validator of validation. This route is only useful for an App  Required scopes: document:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let documentPk = 56; // Number | A unique integer value identifying this document.
let id = 56; // Number | A unique integer value identifying this visa validation.
let projectPk = 56; // Number | A unique integer value identifying this project.
let visaPk = 56; // Number | A unique integer value identifying this visa.
let opts = {
  'patchedVisaValidationRequest': new bimdata.PatchedVisaValidationRequest() // PatchedVisaValidationRequest | 
};
apiInstance.updateValidation(cloudPk, documentPk, id, projectPk, visaPk, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **documentPk** | **Number**| A unique integer value identifying this document. | 
 **id** | **Number**| A unique integer value identifying this visa validation. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **visaPk** | **Number**| A unique integer value identifying this visa. | 
 **patchedVisaValidationRequest** | [**PatchedVisaValidationRequest**](PatchedVisaValidationRequest.md)|  | [optional] 

### Return type

[**VisaValidation**](VisaValidation.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## updateVisa

> Visa updateVisa(cloudPk, documentPk, id, projectPk, opts)

Update some fields of a visa

Update some fields of a visa  Required scopes: document:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let documentPk = 56; // Number | A unique integer value identifying this document.
let id = 56; // Number | A unique integer value identifying this visa.
let projectPk = 56; // Number | A unique integer value identifying this project.
let opts = {
  'patchedVisaRequest': new bimdata.PatchedVisaRequest() // PatchedVisaRequest | 
};
apiInstance.updateVisa(cloudPk, documentPk, id, projectPk, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **documentPk** | **Number**| A unique integer value identifying this document. | 
 **id** | **Number**| A unique integer value identifying this visa. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **patchedVisaRequest** | [**PatchedVisaRequest**](PatchedVisaRequest.md)|  | [optional] 

### Return type

[**Visa**](Visa.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## updateVisaComment

> VisaComment updateVisaComment(cloudPk, documentPk, id, projectPk, visaPk, opts)

Update some fields of a comment

Update some fields of a comment  Required scopes: document:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: BIMData_Connect
let BIMData_Connect = defaultClient.authentications['BIMData_Connect'];
BIMData_Connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.CollaborationApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let documentPk = 56; // Number | A unique integer value identifying this document.
let id = 56; // Number | A unique integer value identifying this visa comment.
let projectPk = 56; // Number | A unique integer value identifying this project.
let visaPk = 56; // Number | A unique integer value identifying this visa.
let opts = {
  'patchedVisaCommentRequest': new bimdata.PatchedVisaCommentRequest() // PatchedVisaCommentRequest | 
};
apiInstance.updateVisaComment(cloudPk, documentPk, id, projectPk, visaPk, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **documentPk** | **Number**| A unique integer value identifying this document. | 
 **id** | **Number**| A unique integer value identifying this visa comment. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **visaPk** | **Number**| A unique integer value identifying this visa. | 
 **patchedVisaCommentRequest** | [**PatchedVisaCommentRequest**](PatchedVisaCommentRequest.md)|  | [optional] 

### Return type

[**VisaComment**](VisaComment.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


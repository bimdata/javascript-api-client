# bimdata.CloudApi

All URIs are relative to *https://api-beta.bimdata.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelCloudUserInvitation**](CloudApi.md#cancelCloudUserInvitation) | **DELETE** /cloud/{cloud_pk}/invitation/{id} | Cancel a pending invitation
[**createCloud**](CloudApi.md#createCloud) | **POST** /cloud | Create a cloud
[**createDemo**](CloudApi.md#createDemo) | **POST** /cloud/{id}/create-demo | Create a Demo project in a cloud
[**deleteCloud**](CloudApi.md#deleteCloud) | **DELETE** /cloud/{id} | Delete a cloud
[**deleteCloudUser**](CloudApi.md#deleteCloudUser) | **DELETE** /cloud/{cloud_pk}/user/{id} | Remove a user from a cloud
[**fullUpdateCloud**](CloudApi.md#fullUpdateCloud) | **PUT** /cloud/{id} | Update all fields of a cloud
[**fullUpdateCloudUser**](CloudApi.md#fullUpdateCloudUser) | **PUT** /cloud/{cloud_pk}/user/{id} | Update all fields of a cloud user
[**getCloud**](CloudApi.md#getCloud) | **GET** /cloud/{id} | Retrieve one cloud
[**getCloudInvitations**](CloudApi.md#getCloudInvitations) | **GET** /cloud/{cloud_pk}/invitation | Retrieve all pending invitations in the cloud
[**getCloudSize**](CloudApi.md#getCloudSize) | **GET** /cloud/{id}/size | Get size of all files in the cloud
[**getCloudUser**](CloudApi.md#getCloudUser) | **GET** /cloud/{cloud_pk}/user/{id} | Retrieve a user in a cloud
[**getCloudUsers**](CloudApi.md#getCloudUsers) | **GET** /cloud/{cloud_pk}/user | Retrieve all users in a cloud
[**getClouds**](CloudApi.md#getClouds) | **GET** /cloud | Retrieve all clouds
[**inviteCloudUser**](CloudApi.md#inviteCloudUser) | **POST** /cloud/{cloud_pk}/invitation | Invite a cloud administrator
[**updateCloud**](CloudApi.md#updateCloud) | **PATCH** /cloud/{id} | Update some fields of a cloud
[**updateCloudUser**](CloudApi.md#updateCloudUser) | **PATCH** /cloud/{cloud_pk}/user/{id} | Update some fields of a cloud user



## cancelCloudUserInvitation

> cancelCloudUserInvitation(cloudPk, id)

Cancel a pending invitation

Cancel a pending invitation Required scopes: org:manage

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

let apiInstance = new bimdata.CloudApi();
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## createCloud

> Cloud createCloud(data)

Create a cloud

 Required scopes: cloud:manage

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

let apiInstance = new bimdata.CloudApi();
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createDemo

> Project createDemo(id)

Create a Demo project in a cloud

Create a demo project with a pre-populated IFC and its data Required scopes: cloud:manage

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

let apiInstance = new bimdata.CloudApi();
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteCloud

> deleteCloud(id)

Delete a cloud

 Required scopes: cloud:manage

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

let apiInstance = new bimdata.CloudApi();
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

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

let apiInstance = new bimdata.CloudApi();
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## fullUpdateCloud

> Cloud fullUpdateCloud(id, data)

Update all fields of a cloud

 Required scopes: cloud:manage

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

let apiInstance = new bimdata.CloudApi();
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

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

let apiInstance = new bimdata.CloudApi();
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getCloud

> Cloud getCloud(id)

Retrieve one cloud

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

let apiInstance = new bimdata.CloudApi();
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

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

let apiInstance = new bimdata.CloudApi();
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCloudSize

> Number getCloudSize(id)

Get size of all files in the cloud

Returns the size of the cloud in Bytes

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

let apiInstance = new bimdata.CloudApi();
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

**Number**

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

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

let apiInstance = new bimdata.CloudApi();
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCloudUsers

> [User] getCloudUsers(cloudPk)

Retrieve all users in a cloud

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

let apiInstance = new bimdata.CloudApi();
let cloudPk = "cloudPk_example"; // String | 
apiInstance.getCloudUsers(cloudPk).then((data) => {
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

[**[User]**](User.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

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

let apiInstance = new bimdata.CloudApi();
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

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

let apiInstance = new bimdata.CloudApi();
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

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

let apiInstance = new bimdata.CloudApi();
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

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

let apiInstance = new bimdata.CloudApi();
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


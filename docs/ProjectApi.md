# bimdata.ProjectApi

All URIs are relative to *https://api-staging.bimdata.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createClassification**](ProjectApi.md#createClassification) | **POST** /cloud/{cloud_pk}/project/{project_pk}/classification | 
[**createDocument**](ProjectApi.md#createDocument) | **POST** /cloud/{cloud_pk}/project/{project_pk}/document | 
[**createFolder**](ProjectApi.md#createFolder) | **POST** /cloud/{cloud_pk}/project/{project_pk}/folder | 
[**createProject**](ProjectApi.md#createProject) | **POST** /cloud/{cloud_pk}/project | 
[**createProjectUser**](ProjectApi.md#createProjectUser) | **POST** /cloud/{cloud_pk}/project/{project_pk}/user | 
[**deleteClassification**](ProjectApi.md#deleteClassification) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/classification/{id} | 
[**deleteDocument**](ProjectApi.md#deleteDocument) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/document/{id} | 
[**deleteFolder**](ProjectApi.md#deleteFolder) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/folder/{id} | 
[**deleteProject**](ProjectApi.md#deleteProject) | **DELETE** /cloud/{cloud_pk}/project/{id} | 
[**deleteProjectUser**](ProjectApi.md#deleteProjectUser) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/user/{id} | 
[**fullUpdateClassification**](ProjectApi.md#fullUpdateClassification) | **PUT** /cloud/{cloud_pk}/project/{project_pk}/classification/{id} | 
[**fullUpdateDocument**](ProjectApi.md#fullUpdateDocument) | **PUT** /cloud/{cloud_pk}/project/{project_pk}/document/{id} | 
[**fullUpdateFolder**](ProjectApi.md#fullUpdateFolder) | **PUT** /cloud/{cloud_pk}/project/{project_pk}/folder/{id} | 
[**fullUpdateProject**](ProjectApi.md#fullUpdateProject) | **PUT** /cloud/{cloud_pk}/project/{id} | 
[**fullUpdateProjectUser**](ProjectApi.md#fullUpdateProjectUser) | **PUT** /cloud/{cloud_pk}/project/{project_pk}/user/{id} | 
[**getClassification**](ProjectApi.md#getClassification) | **GET** /cloud/{cloud_pk}/project/{project_pk}/classification/{id} | 
[**getClassifications**](ProjectApi.md#getClassifications) | **GET** /cloud/{cloud_pk}/project/{project_pk}/classification | 
[**getDocument**](ProjectApi.md#getDocument) | **GET** /cloud/{cloud_pk}/project/{project_pk}/document/{id} | 
[**getDocuments**](ProjectApi.md#getDocuments) | **GET** /cloud/{cloud_pk}/project/{project_pk}/document | 
[**getFolder**](ProjectApi.md#getFolder) | **GET** /cloud/{cloud_pk}/project/{project_pk}/folder/{id} | 
[**getFolders**](ProjectApi.md#getFolders) | **GET** /cloud/{cloud_pk}/project/{project_pk}/folder | 
[**getProject**](ProjectApi.md#getProject) | **GET** /cloud/{cloud_pk}/project/{id} | 
[**getProjectTree**](ProjectApi.md#getProjectTree) | **GET** /cloud/{cloud_pk}/project/{id}/tree | 
[**getProjectUser**](ProjectApi.md#getProjectUser) | **GET** /cloud/{cloud_pk}/project/{project_pk}/user/{id} | 
[**getProjectUsers**](ProjectApi.md#getProjectUsers) | **GET** /cloud/{cloud_pk}/project/{project_pk}/user | 
[**getProjects**](ProjectApi.md#getProjects) | **GET** /cloud/{cloud_pk}/project | 
[**updateClassification**](ProjectApi.md#updateClassification) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/classification/{id} | 
[**updateDocument**](ProjectApi.md#updateDocument) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/document/{id} | 
[**updateFolder**](ProjectApi.md#updateFolder) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/folder/{id} | 
[**updateProject**](ProjectApi.md#updateProject) | **PATCH** /cloud/{cloud_pk}/project/{id} | 
[**updateProjectUser**](ProjectApi.md#updateProjectUser) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/user/{id} | 


<a name="createClassification"></a>
# **createClassification**
> [Classification] createClassification(cloudPk, projectPk, data)



         Bulk create available.         You can either post an object or a list of objects.         Is you post a list, the response will be a list (in the same order) of created objects or of errors if any         If at least one create succeeded, the status code will be 201. If every create failed, the status code we&#39;ll be 400 with the list of errors          If created classification already exists, it will not be duplicated and the previous one will be returned.     You also can add a &#39;classification&#39; filter on this endpoint. By ex: /classification?name&#x3D;&#39;untec&#39;. The name is case sensitive     

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

var data = [new bimdata.Classification()]; // [Classification] | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createClassification(cloudPk, projectPk, data, callback);
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

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createDocument"></a>
# **createDocument**
> Document createDocument(cloudPk, projectPk, name, opts)





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

var name = "name_example"; // String | 

var opts = { 
  'id': 56, // Number | 
  'parent': 56, // Number | 
  'parentId': 56, // Number | 
  'creator': 56, // Number | 
  'project': 56, // Number | 
  'projectId': 56, // Number | 
  'fileName': "fileName_example", // String | 
  'description': "description_example", // String | 
  'file': "/path/to/file.txt", // File | 
  'size': "size_example", // String | 
  'createdAt': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'updatedAt': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'ifcId': "ifcId_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createDocument(cloudPk, projectPk, name, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **name** | **String**|  | 
 **id** | **Number**|  | [optional] 
 **parent** | **Number**|  | [optional] 
 **parentId** | **Number**|  | [optional] 
 **creator** | **Number**|  | [optional] 
 **project** | **Number**|  | [optional] 
 **projectId** | **Number**|  | [optional] 
 **fileName** | **String**|  | [optional] 
 **description** | **String**|  | [optional] 
 **file** | **File**|  | [optional] 
 **size** | **String**|  | [optional] 
 **createdAt** | **Date**|  | [optional] 
 **updatedAt** | **Date**|  | [optional] 
 **ifcId** | **String**|  | [optional] 

### Return type

[**Document**](Document.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="createFolder"></a>
# **createFolder**
> Folder createFolder(cloudPk, projectPk, data)





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

var data = new bimdata.Folder(); // Folder | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createFolder(cloudPk, projectPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **data** | [**Folder**](Folder.md)|  | 

### Return type

[**Folder**](Folder.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createProject"></a>
# **createProject**
> Project createProject(cloudPk, data)





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

var data = new bimdata.Project(); // Project | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createProject(cloudPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **data** | [**Project**](Project.md)|  | 

### Return type

[**Project**](Project.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createProjectUser"></a>
# **createProjectUser**
> FosUserWrite createProjectUser(cloudPk, projectPk, data)





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

var data = new bimdata.FosUserWrite(); // FosUserWrite | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createProjectUser(cloudPk, projectPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **data** | [**FosUserWrite**](FosUserWrite.md)|  | 

### Return type

[**FosUserWrite**](FosUserWrite.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteClassification"></a>
# **deleteClassification**
> deleteClassification(cloudPk, id, projectPk, )





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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteClassification(cloudPk, id, projectPk, , callback);
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteDocument"></a>
# **deleteDocument**
> Document deleteDocument(cloudPk, id, projectPk, )





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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteDocument(cloudPk, id, projectPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **projectPk** | **String**|  | 

### Return type

[**Document**](Document.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteFolder"></a>
# **deleteFolder**
> deleteFolder(cloudPk, id, projectPk, )





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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteFolder(cloudPk, id, projectPk, , callback);
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteProject"></a>
# **deleteProject**
> deleteProject(cloudPk, id, )





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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteProject(cloudPk, id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteProjectUser"></a>
# **deleteProjectUser**
> deleteProjectUser(cloudPk, id, projectPk, )





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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteProjectUser(cloudPk, id, projectPk, , callback);
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdateClassification"></a>
# **fullUpdateClassification**
> Classification fullUpdateClassification(cloudPk, id, projectPk, data)





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

var data = new bimdata.Classification(); // Classification | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fullUpdateClassification(cloudPk, id, projectPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **projectPk** | **String**|  | 
 **data** | [**Classification**](Classification.md)|  | 

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

var name = "name_example"; // String | 

var opts = { 
  'id2': 56, // Number | 
  'parent': 56, // Number | 
  'parentId': 56, // Number | 
  'creator': 56, // Number | 
  'project': 56, // Number | 
  'projectId': 56, // Number | 
  'fileName': "fileName_example", // String | 
  'description': "description_example", // String | 
  'file': "/path/to/file.txt", // File | 
  'size': "size_example", // String | 
  'createdAt': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'updatedAt': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'ifcId': "ifcId_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fullUpdateDocument(cloudPk, id, projectPk, name, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **projectPk** | **String**|  | 
 **name** | **String**|  | 
 **id2** | **Number**|  | [optional] 
 **parent** | **Number**|  | [optional] 
 **parentId** | **Number**|  | [optional] 
 **creator** | **Number**|  | [optional] 
 **project** | **Number**|  | [optional] 
 **projectId** | **Number**|  | [optional] 
 **fileName** | **String**|  | [optional] 
 **description** | **String**|  | [optional] 
 **file** | **File**|  | [optional] 
 **size** | **String**|  | [optional] 
 **createdAt** | **Date**|  | [optional] 
 **updatedAt** | **Date**|  | [optional] 
 **ifcId** | **String**|  | [optional] 

### Return type

[**Document**](Document.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="fullUpdateFolder"></a>
# **fullUpdateFolder**
> Folder fullUpdateFolder(cloudPk, id, projectPk, data)





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

var data = new bimdata.Folder(); // Folder | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fullUpdateFolder(cloudPk, id, projectPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **projectPk** | **String**|  | 
 **data** | [**Folder**](Folder.md)|  | 

### Return type

[**Folder**](Folder.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdateProject"></a>
# **fullUpdateProject**
> Project fullUpdateProject(cloudPk, id, data)





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

var data = new bimdata.Project(); // Project | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fullUpdateProject(cloudPk, id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **data** | [**Project**](Project.md)|  | 

### Return type

[**Project**](Project.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdateProjectUser"></a>
# **fullUpdateProjectUser**
> FosUserWrite fullUpdateProjectUser(cloudPk, id, projectPk, data)





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

var data = new bimdata.FosUserWrite(); // FosUserWrite | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fullUpdateProjectUser(cloudPk, id, projectPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **projectPk** | **String**|  | 
 **data** | [**FosUserWrite**](FosUserWrite.md)|  | 

### Return type

[**FosUserWrite**](FosUserWrite.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getClassification"></a>
# **getClassification**
> Classification getClassification(cloudPk, id, projectPk, )





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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getClassification(cloudPk, id, projectPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **projectPk** | **String**|  | 

### Return type

[**Classification**](Classification.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getClassifications"></a>
# **getClassifications**
> [Classification] getClassifications(cloudPk, projectPk, )





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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getClassifications(cloudPk, projectPk, , callback);
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDocument"></a>
# **getDocument**
> Document getDocument(cloudPk, id, projectPk, )





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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDocument(cloudPk, id, projectPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **projectPk** | **String**|  | 

### Return type

[**Document**](Document.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDocuments"></a>
# **getDocuments**
> Document getDocuments(cloudPk, projectPk, )





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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDocuments(cloudPk, projectPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 

### Return type

[**Document**](Document.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFolder"></a>
# **getFolder**
> Folder getFolder(cloudPk, id, projectPk, )





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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFolder(cloudPk, id, projectPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **projectPk** | **String**|  | 

### Return type

[**Folder**](Folder.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFolders"></a>
# **getFolders**
> [Folder] getFolders(cloudPk, projectPk, )





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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFolders(cloudPk, projectPk, , callback);
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProject"></a>
# **getProject**
> Project getProject(cloudPk, id, )





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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProject(cloudPk, id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 

### Return type

[**Project**](Project.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProjectTree"></a>
# **getProjectTree**
> Folder getProjectTree(cloudPk, id)



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

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProjectTree(cloudPk, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 

### Return type

[**Folder**](Folder.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProjectUser"></a>
# **getProjectUser**
> FosUser getProjectUser(cloudPk, id, projectPk, )





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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProjectUser(cloudPk, id, projectPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **projectPk** | **String**|  | 

### Return type

[**FosUser**](FosUser.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProjectUsers"></a>
# **getProjectUsers**
> [FosUser] getProjectUsers(cloudPk, projectPk, )





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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProjectUsers(cloudPk, projectPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 

### Return type

[**[FosUser]**](FosUser.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProjects"></a>
# **getProjects**
> [Project] getProjects(cloudPk, )





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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProjects(cloudPk, , callback);
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateClassification"></a>
# **updateClassification**
> Classification updateClassification(cloudPk, id, projectPk, data)





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

var data = new bimdata.Classification(); // Classification | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateClassification(cloudPk, id, projectPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **projectPk** | **String**|  | 
 **data** | [**Classification**](Classification.md)|  | 

### Return type

[**Classification**](Classification.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateDocument"></a>
# **updateDocument**
> Document updateDocument(cloudPk, id, projectPk, data)





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

var data = new bimdata.Document(); // Document | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateDocument(cloudPk, id, projectPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **projectPk** | **String**|  | 
 **data** | [**Document**](Document.md)|  | 

### Return type

[**Document**](Document.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateFolder"></a>
# **updateFolder**
> Folder updateFolder(cloudPk, id, projectPk, data)





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

var data = new bimdata.Folder(); // Folder | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateFolder(cloudPk, id, projectPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **projectPk** | **String**|  | 
 **data** | [**Folder**](Folder.md)|  | 

### Return type

[**Folder**](Folder.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateProject"></a>
# **updateProject**
> Project updateProject(cloudPk, id, data)





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

var data = new bimdata.Project(); // Project | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateProject(cloudPk, id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **data** | [**Project**](Project.md)|  | 

### Return type

[**Project**](Project.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateProjectUser"></a>
# **updateProjectUser**
> FosUserWrite updateProjectUser(cloudPk, id, projectPk, data)





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

var data = new bimdata.FosUserWrite(); // FosUserWrite | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateProjectUser(cloudPk, id, projectPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **projectPk** | **String**|  | 
 **data** | [**FosUserWrite**](FosUserWrite.md)|  | 

### Return type

[**FosUserWrite**](FosUserWrite.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


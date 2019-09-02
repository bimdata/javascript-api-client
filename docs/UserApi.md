# BimDataApi.UserApi

All URIs are relative to *https://api-beta.bimdata.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSelfUser**](UserApi.md#getSelfUser) | **GET** /user | 
[**updateSelfUser**](UserApi.md#updateSelfUser) | **PATCH** /user | 
[**userProjectsList**](UserApi.md#userProjectsList) | **GET** /user/projects | 



## getSelfUser

> SelfUser getSelfUser()



### Example

```javascript
import BimDataApi from 'bim_data_api';
let defaultClient = BimDataApi.ApiClient.instance;
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

let apiInstance = new BimDataApi.UserApi();
apiInstance.getSelfUser((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**SelfUser**](SelfUser.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateSelfUser

> SelfUser updateSelfUser(data)



### Example

```javascript
import BimDataApi from 'bim_data_api';
let defaultClient = BimDataApi.ApiClient.instance;
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

let apiInstance = new BimDataApi.UserApi();
let data = new BimDataApi.SelfUser(); // SelfUser | 
apiInstance.updateSelfUser(data, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**SelfUser**](SelfUser.md)|  | 

### Return type

[**SelfUser**](SelfUser.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## userProjectsList

> [Project] userProjectsList()



### Example

```javascript
import BimDataApi from 'bim_data_api';
let defaultClient = BimDataApi.ApiClient.instance;
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

let apiInstance = new BimDataApi.UserApi();
apiInstance.userProjectsList((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Project]**](Project.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


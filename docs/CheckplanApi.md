# bimdata.CheckplanApi

All URIs are relative to *https://api-staging.bimdata.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createChecker**](CheckplanApi.md#createChecker) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/checker | 
[**createCheckerResult**](CheckplanApi.md#createCheckerResult) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/checker/{checker_pk}/result | 
[**createCheckplan**](CheckplanApi.md#createCheckplan) | **POST** /cloud/{cloud_pk}/project/{project_pk}/checkplan | 
[**createRule**](CheckplanApi.md#createRule) | **POST** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{check_plan_pk}/ruleset/{ruleset_pk}/rule | 
[**createRuleComponent**](CheckplanApi.md#createRuleComponent) | **POST** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{check_plan_pk}/ruleset/{ruleset_pk}/rule/{rule_pk}/rulecomponent | 
[**createRuleset**](CheckplanApi.md#createRuleset) | **POST** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{check_plan_pk}/ruleset | 
[**deleteChecker**](CheckplanApi.md#deleteChecker) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/checker/{id} | 
[**deleteCheckerResult**](CheckplanApi.md#deleteCheckerResult) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/checker/{checker_pk}/result/{id} | 
[**deleteCheckplan**](CheckplanApi.md#deleteCheckplan) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{id} | 
[**deleteRule**](CheckplanApi.md#deleteRule) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{check_plan_pk}/ruleset/{ruleset_pk}/rule/{id} | 
[**deleteRuleComponent**](CheckplanApi.md#deleteRuleComponent) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{check_plan_pk}/ruleset/{ruleset_pk}/rule/{rule_pk}/rulecomponent/{id} | 
[**deleteRuleset**](CheckplanApi.md#deleteRuleset) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{check_plan_pk}/ruleset/{id} | 
[**fullUpdateChecker**](CheckplanApi.md#fullUpdateChecker) | **PUT** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/checker/{id} | 
[**fullUpdateCheckerResult**](CheckplanApi.md#fullUpdateCheckerResult) | **PUT** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/checker/{checker_pk}/result/{id} | 
[**fullUpdateCheckplan**](CheckplanApi.md#fullUpdateCheckplan) | **PUT** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{id} | 
[**fullUpdateRule**](CheckplanApi.md#fullUpdateRule) | **PUT** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{check_plan_pk}/ruleset/{ruleset_pk}/rule/{id} | 
[**fullUpdateRuleComponent**](CheckplanApi.md#fullUpdateRuleComponent) | **PUT** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{check_plan_pk}/ruleset/{ruleset_pk}/rule/{rule_pk}/rulecomponent/{id} | 
[**fullUpdateRuleset**](CheckplanApi.md#fullUpdateRuleset) | **PUT** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{check_plan_pk}/ruleset/{id} | 
[**getChecker**](CheckplanApi.md#getChecker) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/checker/{id} | 
[**getCheckerResult**](CheckplanApi.md#getCheckerResult) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/checker/{checker_pk}/result/{id} | 
[**getCheckerResults**](CheckplanApi.md#getCheckerResults) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/checker/{checker_pk}/result | 
[**getCheckers**](CheckplanApi.md#getCheckers) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/checker | 
[**getCheckplan**](CheckplanApi.md#getCheckplan) | **GET** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{id} | 
[**getCheckplans**](CheckplanApi.md#getCheckplans) | **GET** /cloud/{cloud_pk}/project/{project_pk}/checkplan | 
[**getRule**](CheckplanApi.md#getRule) | **GET** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{check_plan_pk}/ruleset/{ruleset_pk}/rule/{id} | 
[**getRuleComponent**](CheckplanApi.md#getRuleComponent) | **GET** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{check_plan_pk}/ruleset/{ruleset_pk}/rule/{rule_pk}/rulecomponent/{id} | 
[**getRuleComponents**](CheckplanApi.md#getRuleComponents) | **GET** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{check_plan_pk}/ruleset/{ruleset_pk}/rule/{rule_pk}/rulecomponent | 
[**getRules**](CheckplanApi.md#getRules) | **GET** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{check_plan_pk}/ruleset/{ruleset_pk}/rule | 
[**getRuleset**](CheckplanApi.md#getRuleset) | **GET** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{check_plan_pk}/ruleset/{id} | 
[**getRulesets**](CheckplanApi.md#getRulesets) | **GET** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{check_plan_pk}/ruleset | 
[**launchNewCheck**](CheckplanApi.md#launchNewCheck) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/checker/{id}/launch-check | 
[**updateChecker**](CheckplanApi.md#updateChecker) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/checker/{id} | 
[**updateCheckerResult**](CheckplanApi.md#updateCheckerResult) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/checker/{checker_pk}/result/{id} | 
[**updateCheckplan**](CheckplanApi.md#updateCheckplan) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{id} | 
[**updateRule**](CheckplanApi.md#updateRule) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{check_plan_pk}/ruleset/{ruleset_pk}/rule/{id} | 
[**updateRuleComponent**](CheckplanApi.md#updateRuleComponent) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{check_plan_pk}/ruleset/{ruleset_pk}/rule/{rule_pk}/rulecomponent/{id} | 
[**updateRuleset**](CheckplanApi.md#updateRuleset) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{check_plan_pk}/ruleset/{id} | 


<a name="createChecker"></a>
# **createChecker**
> WrappedClass createChecker(cloudPk, projectPk, ifcPk, data)





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.CheckplanApi();

var cloudPk = "cloudPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var data = new bimdata.WrappedClass(); // WrappedClass | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createChecker(cloudPk, projectPk, ifcPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **data** | [**WrappedClass**](WrappedClass.md)|  | 

### Return type

[**WrappedClass**](WrappedClass.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createCheckerResult"></a>
# **createCheckerResult**
> WrappedClass createCheckerResult(checkerPk, cloudPk, projectPk, ifcPk, data)





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.CheckplanApi();

var checkerPk = "checkerPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var data = new bimdata.WrappedClass(); // WrappedClass | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createCheckerResult(checkerPk, cloudPk, projectPk, ifcPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkerPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **data** | [**WrappedClass**](WrappedClass.md)|  | 

### Return type

[**WrappedClass**](WrappedClass.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createCheckplan"></a>
# **createCheckplan**
> WrappedClass createCheckplan(cloudPk, projectPk, data)





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.CheckplanApi();

var cloudPk = "cloudPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var data = new bimdata.WrappedClass(); // WrappedClass | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createCheckplan(cloudPk, projectPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **data** | [**WrappedClass**](WrappedClass.md)|  | 

### Return type

[**WrappedClass**](WrappedClass.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createRule"></a>
# **createRule**
> WrappedClass createRule(rulesetPk, checkPlanPk, cloudPk, projectPk, data)





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.CheckplanApi();

var rulesetPk = "rulesetPk_example"; // String | 

var checkPlanPk = "checkPlanPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var data = new bimdata.WrappedClass(); // WrappedClass | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createRule(rulesetPk, checkPlanPk, cloudPk, projectPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rulesetPk** | **String**|  | 
 **checkPlanPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **data** | [**WrappedClass**](WrappedClass.md)|  | 

### Return type

[**WrappedClass**](WrappedClass.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createRuleComponent"></a>
# **createRuleComponent**
> WrappedClass createRuleComponent(cloudPk, rulesetPk, checkPlanPk, projectPk, rulePk, data)





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.CheckplanApi();

var cloudPk = "cloudPk_example"; // String | 

var rulesetPk = "rulesetPk_example"; // String | 

var checkPlanPk = "checkPlanPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var rulePk = "rulePk_example"; // String | 

var data = new bimdata.WrappedClass(); // WrappedClass | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createRuleComponent(cloudPk, rulesetPk, checkPlanPk, projectPk, rulePk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **rulesetPk** | **String**|  | 
 **checkPlanPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **rulePk** | **String**|  | 
 **data** | [**WrappedClass**](WrappedClass.md)|  | 

### Return type

[**WrappedClass**](WrappedClass.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createRuleset"></a>
# **createRuleset**
> WrappedClass createRuleset(checkPlanPk, cloudPk, projectPk, data)





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.CheckplanApi();

var checkPlanPk = "checkPlanPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var data = new bimdata.WrappedClass(); // WrappedClass | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createRuleset(checkPlanPk, cloudPk, projectPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkPlanPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **data** | [**WrappedClass**](WrappedClass.md)|  | 

### Return type

[**WrappedClass**](WrappedClass.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteChecker"></a>
# **deleteChecker**
> deleteChecker(cloudPk, id, projectPk, ifcPk, )





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.CheckplanApi();

var cloudPk = "cloudPk_example"; // String | 

var id = "id_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteChecker(cloudPk, id, projectPk, ifcPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **projectPk** | **String**|  | 
 **ifcPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteCheckerResult"></a>
# **deleteCheckerResult**
> deleteCheckerResult(cloudPk, id, checkerPk, projectPk, ifcPk, )





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.CheckplanApi();

var cloudPk = "cloudPk_example"; // String | 

var id = "id_example"; // String | 

var checkerPk = "checkerPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteCheckerResult(cloudPk, id, checkerPk, projectPk, ifcPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **checkerPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **ifcPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteCheckplan"></a>
# **deleteCheckplan**
> deleteCheckplan(cloudPk, id, projectPk, )





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.CheckplanApi();

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
apiInstance.deleteCheckplan(cloudPk, id, projectPk, , callback);
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

<a name="deleteRule"></a>
# **deleteRule**
> deleteRule(cloudPk, id, rulesetPk, checkPlanPk, projectPk, )





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.CheckplanApi();

var cloudPk = "cloudPk_example"; // String | 

var id = "id_example"; // String | 

var rulesetPk = "rulesetPk_example"; // String | 

var checkPlanPk = "checkPlanPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteRule(cloudPk, id, rulesetPk, checkPlanPk, projectPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **rulesetPk** | **String**|  | 
 **checkPlanPk** | **String**|  | 
 **projectPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteRuleComponent"></a>
# **deleteRuleComponent**
> deleteRuleComponent(cloudPk, id, rulesetPk, checkPlanPk, projectPk, rulePk, )





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.CheckplanApi();

var cloudPk = "cloudPk_example"; // String | 

var id = "id_example"; // String | 

var rulesetPk = "rulesetPk_example"; // String | 

var checkPlanPk = "checkPlanPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var rulePk = "rulePk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteRuleComponent(cloudPk, id, rulesetPk, checkPlanPk, projectPk, rulePk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **rulesetPk** | **String**|  | 
 **checkPlanPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **rulePk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteRuleset"></a>
# **deleteRuleset**
> deleteRuleset(checkPlanPk, cloudPk, id, projectPk, )





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.CheckplanApi();

var checkPlanPk = "checkPlanPk_example"; // String | 

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
apiInstance.deleteRuleset(checkPlanPk, cloudPk, id, projectPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkPlanPk** | **String**|  | 
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

<a name="fullUpdateChecker"></a>
# **fullUpdateChecker**
> WrappedClass fullUpdateChecker(cloudPk, id, projectPk, ifcPk, data)





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.CheckplanApi();

var cloudPk = "cloudPk_example"; // String | 

var id = "id_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var data = new bimdata.WrappedClass(); // WrappedClass | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fullUpdateChecker(cloudPk, id, projectPk, ifcPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **projectPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **data** | [**WrappedClass**](WrappedClass.md)|  | 

### Return type

[**WrappedClass**](WrappedClass.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdateCheckerResult"></a>
# **fullUpdateCheckerResult**
> WrappedClass fullUpdateCheckerResult(cloudPk, id, checkerPk, projectPk, ifcPk, data)





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.CheckplanApi();

var cloudPk = "cloudPk_example"; // String | 

var id = "id_example"; // String | 

var checkerPk = "checkerPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var data = new bimdata.WrappedClass(); // WrappedClass | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fullUpdateCheckerResult(cloudPk, id, checkerPk, projectPk, ifcPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **checkerPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **data** | [**WrappedClass**](WrappedClass.md)|  | 

### Return type

[**WrappedClass**](WrappedClass.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdateCheckplan"></a>
# **fullUpdateCheckplan**
> WrappedClass fullUpdateCheckplan(cloudPk, id, projectPk, data)





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.CheckplanApi();

var cloudPk = "cloudPk_example"; // String | 

var id = "id_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var data = new bimdata.WrappedClass(); // WrappedClass | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fullUpdateCheckplan(cloudPk, id, projectPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **projectPk** | **String**|  | 
 **data** | [**WrappedClass**](WrappedClass.md)|  | 

### Return type

[**WrappedClass**](WrappedClass.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdateRule"></a>
# **fullUpdateRule**
> WrappedClass fullUpdateRule(cloudPk, id, rulesetPk, checkPlanPk, projectPk, data)





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.CheckplanApi();

var cloudPk = "cloudPk_example"; // String | 

var id = "id_example"; // String | 

var rulesetPk = "rulesetPk_example"; // String | 

var checkPlanPk = "checkPlanPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var data = new bimdata.WrappedClass(); // WrappedClass | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fullUpdateRule(cloudPk, id, rulesetPk, checkPlanPk, projectPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **rulesetPk** | **String**|  | 
 **checkPlanPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **data** | [**WrappedClass**](WrappedClass.md)|  | 

### Return type

[**WrappedClass**](WrappedClass.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdateRuleComponent"></a>
# **fullUpdateRuleComponent**
> WrappedClass fullUpdateRuleComponent(cloudPk, id, rulesetPk, checkPlanPk, projectPk, rulePk, data)





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.CheckplanApi();

var cloudPk = "cloudPk_example"; // String | 

var id = "id_example"; // String | 

var rulesetPk = "rulesetPk_example"; // String | 

var checkPlanPk = "checkPlanPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var rulePk = "rulePk_example"; // String | 

var data = new bimdata.WrappedClass(); // WrappedClass | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fullUpdateRuleComponent(cloudPk, id, rulesetPk, checkPlanPk, projectPk, rulePk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **rulesetPk** | **String**|  | 
 **checkPlanPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **rulePk** | **String**|  | 
 **data** | [**WrappedClass**](WrappedClass.md)|  | 

### Return type

[**WrappedClass**](WrappedClass.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdateRuleset"></a>
# **fullUpdateRuleset**
> WrappedClass fullUpdateRuleset(checkPlanPk, cloudPk, id, projectPk, data)





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.CheckplanApi();

var checkPlanPk = "checkPlanPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var id = "id_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var data = new bimdata.WrappedClass(); // WrappedClass | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fullUpdateRuleset(checkPlanPk, cloudPk, id, projectPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkPlanPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **projectPk** | **String**|  | 
 **data** | [**WrappedClass**](WrappedClass.md)|  | 

### Return type

[**WrappedClass**](WrappedClass.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getChecker"></a>
# **getChecker**
> WrappedClass getChecker(cloudPk, id, projectPk, ifcPk, )





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.CheckplanApi();

var cloudPk = "cloudPk_example"; // String | 

var id = "id_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getChecker(cloudPk, id, projectPk, ifcPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **projectPk** | **String**|  | 
 **ifcPk** | **String**|  | 

### Return type

[**WrappedClass**](WrappedClass.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCheckerResult"></a>
# **getCheckerResult**
> WrappedClass getCheckerResult(cloudPk, id, checkerPk, projectPk, ifcPk, )





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.CheckplanApi();

var cloudPk = "cloudPk_example"; // String | 

var id = "id_example"; // String | 

var checkerPk = "checkerPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCheckerResult(cloudPk, id, checkerPk, projectPk, ifcPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **checkerPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **ifcPk** | **String**|  | 

### Return type

[**WrappedClass**](WrappedClass.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCheckerResults"></a>
# **getCheckerResults**
> [WrappedClass] getCheckerResults(checkerPk, cloudPk, projectPk, ifcPk, )





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.CheckplanApi();

var checkerPk = "checkerPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCheckerResults(checkerPk, cloudPk, projectPk, ifcPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkerPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **ifcPk** | **String**|  | 

### Return type

[**[WrappedClass]**](WrappedClass.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCheckers"></a>
# **getCheckers**
> [WrappedClass] getCheckers(cloudPk, projectPk, ifcPk, )





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.CheckplanApi();

var cloudPk = "cloudPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCheckers(cloudPk, projectPk, ifcPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **ifcPk** | **String**|  | 

### Return type

[**[WrappedClass]**](WrappedClass.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCheckplan"></a>
# **getCheckplan**
> WrappedClass getCheckplan(cloudPk, id, projectPk, )





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.CheckplanApi();

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
apiInstance.getCheckplan(cloudPk, id, projectPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **projectPk** | **String**|  | 

### Return type

[**WrappedClass**](WrappedClass.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCheckplans"></a>
# **getCheckplans**
> [WrappedClass] getCheckplans(cloudPk, projectPk, )





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.CheckplanApi();

var cloudPk = "cloudPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCheckplans(cloudPk, projectPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 

### Return type

[**[WrappedClass]**](WrappedClass.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRule"></a>
# **getRule**
> WrappedClass getRule(cloudPk, id, rulesetPk, checkPlanPk, projectPk, )





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.CheckplanApi();

var cloudPk = "cloudPk_example"; // String | 

var id = "id_example"; // String | 

var rulesetPk = "rulesetPk_example"; // String | 

var checkPlanPk = "checkPlanPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRule(cloudPk, id, rulesetPk, checkPlanPk, projectPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **rulesetPk** | **String**|  | 
 **checkPlanPk** | **String**|  | 
 **projectPk** | **String**|  | 

### Return type

[**WrappedClass**](WrappedClass.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRuleComponent"></a>
# **getRuleComponent**
> WrappedClass getRuleComponent(cloudPk, id, rulesetPk, checkPlanPk, projectPk, rulePk, )





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.CheckplanApi();

var cloudPk = "cloudPk_example"; // String | 

var id = "id_example"; // String | 

var rulesetPk = "rulesetPk_example"; // String | 

var checkPlanPk = "checkPlanPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var rulePk = "rulePk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRuleComponent(cloudPk, id, rulesetPk, checkPlanPk, projectPk, rulePk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **rulesetPk** | **String**|  | 
 **checkPlanPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **rulePk** | **String**|  | 

### Return type

[**WrappedClass**](WrappedClass.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRuleComponents"></a>
# **getRuleComponents**
> [WrappedClass] getRuleComponents(cloudPk, rulesetPk, checkPlanPk, projectPk, rulePk, )





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.CheckplanApi();

var cloudPk = "cloudPk_example"; // String | 

var rulesetPk = "rulesetPk_example"; // String | 

var checkPlanPk = "checkPlanPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var rulePk = "rulePk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRuleComponents(cloudPk, rulesetPk, checkPlanPk, projectPk, rulePk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **rulesetPk** | **String**|  | 
 **checkPlanPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **rulePk** | **String**|  | 

### Return type

[**[WrappedClass]**](WrappedClass.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRules"></a>
# **getRules**
> [WrappedClass] getRules(rulesetPk, checkPlanPk, cloudPk, projectPk, )





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.CheckplanApi();

var rulesetPk = "rulesetPk_example"; // String | 

var checkPlanPk = "checkPlanPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRules(rulesetPk, checkPlanPk, cloudPk, projectPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rulesetPk** | **String**|  | 
 **checkPlanPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 

### Return type

[**[WrappedClass]**](WrappedClass.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRuleset"></a>
# **getRuleset**
> WrappedClass getRuleset(checkPlanPk, cloudPk, id, projectPk, )





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.CheckplanApi();

var checkPlanPk = "checkPlanPk_example"; // String | 

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
apiInstance.getRuleset(checkPlanPk, cloudPk, id, projectPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkPlanPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **projectPk** | **String**|  | 

### Return type

[**WrappedClass**](WrappedClass.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRulesets"></a>
# **getRulesets**
> [WrappedClass] getRulesets(checkPlanPk, cloudPk, projectPk, )





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.CheckplanApi();

var checkPlanPk = "checkPlanPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRulesets(checkPlanPk, cloudPk, projectPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkPlanPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 

### Return type

[**[WrappedClass]**](WrappedClass.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="launchNewCheck"></a>
# **launchNewCheck**
> launchNewCheck(cloudPk, id, projectPk, ifcPk, data)



Starts a new check in the checker

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.CheckplanApi();

var cloudPk = "cloudPk_example"; // String | 

var id = "id_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var data = new bimdata.WrappedClass(); // WrappedClass | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.launchNewCheck(cloudPk, id, projectPk, ifcPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **projectPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **data** | [**WrappedClass**](WrappedClass.md)|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateChecker"></a>
# **updateChecker**
> WrappedClass updateChecker(cloudPk, id, projectPk, ifcPk, data)





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.CheckplanApi();

var cloudPk = "cloudPk_example"; // String | 

var id = "id_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var data = new bimdata.WrappedClass(); // WrappedClass | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateChecker(cloudPk, id, projectPk, ifcPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **projectPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **data** | [**WrappedClass**](WrappedClass.md)|  | 

### Return type

[**WrappedClass**](WrappedClass.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCheckerResult"></a>
# **updateCheckerResult**
> WrappedClass updateCheckerResult(cloudPk, id, checkerPk, projectPk, ifcPk, data)





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.CheckplanApi();

var cloudPk = "cloudPk_example"; // String | 

var id = "id_example"; // String | 

var checkerPk = "checkerPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var data = new bimdata.WrappedClass(); // WrappedClass | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateCheckerResult(cloudPk, id, checkerPk, projectPk, ifcPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **checkerPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **data** | [**WrappedClass**](WrappedClass.md)|  | 

### Return type

[**WrappedClass**](WrappedClass.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCheckplan"></a>
# **updateCheckplan**
> WrappedClass updateCheckplan(cloudPk, id, projectPk, data)





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.CheckplanApi();

var cloudPk = "cloudPk_example"; // String | 

var id = "id_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var data = new bimdata.WrappedClass(); // WrappedClass | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateCheckplan(cloudPk, id, projectPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **projectPk** | **String**|  | 
 **data** | [**WrappedClass**](WrappedClass.md)|  | 

### Return type

[**WrappedClass**](WrappedClass.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateRule"></a>
# **updateRule**
> WrappedClass updateRule(cloudPk, id, rulesetPk, checkPlanPk, projectPk, data)





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.CheckplanApi();

var cloudPk = "cloudPk_example"; // String | 

var id = "id_example"; // String | 

var rulesetPk = "rulesetPk_example"; // String | 

var checkPlanPk = "checkPlanPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var data = new bimdata.WrappedClass(); // WrappedClass | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateRule(cloudPk, id, rulesetPk, checkPlanPk, projectPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **rulesetPk** | **String**|  | 
 **checkPlanPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **data** | [**WrappedClass**](WrappedClass.md)|  | 

### Return type

[**WrappedClass**](WrappedClass.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateRuleComponent"></a>
# **updateRuleComponent**
> WrappedClass updateRuleComponent(cloudPk, id, rulesetPk, checkPlanPk, projectPk, rulePk, data)





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.CheckplanApi();

var cloudPk = "cloudPk_example"; // String | 

var id = "id_example"; // String | 

var rulesetPk = "rulesetPk_example"; // String | 

var checkPlanPk = "checkPlanPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var rulePk = "rulePk_example"; // String | 

var data = new bimdata.WrappedClass(); // WrappedClass | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateRuleComponent(cloudPk, id, rulesetPk, checkPlanPk, projectPk, rulePk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **rulesetPk** | **String**|  | 
 **checkPlanPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **rulePk** | **String**|  | 
 **data** | [**WrappedClass**](WrappedClass.md)|  | 

### Return type

[**WrappedClass**](WrappedClass.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateRuleset"></a>
# **updateRuleset**
> WrappedClass updateRuleset(checkPlanPk, cloudPk, id, projectPk, data)





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.CheckplanApi();

var checkPlanPk = "checkPlanPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var id = "id_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var data = new bimdata.WrappedClass(); // WrappedClass | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateRuleset(checkPlanPk, cloudPk, id, projectPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkPlanPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **projectPk** | **String**|  | 
 **data** | [**WrappedClass**](WrappedClass.md)|  | 

### Return type

[**WrappedClass**](WrappedClass.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


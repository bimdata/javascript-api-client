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
> IfcChecker createChecker(ifcPk, projectPk, cloudPk, data)





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

var ifcPk = "ifcPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var data = new bimdata.IfcChecker(); // IfcChecker | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createChecker(ifcPk, projectPk, cloudPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **data** | [**IfcChecker**](IfcChecker.md)|  | 

### Return type

[**IfcChecker**](IfcChecker.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createCheckerResult"></a>
# **createCheckerResult**
> CheckerResult createCheckerResult(checkerPk, ifcPk, projectPk, cloudPk, data)





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

var ifcPk = "ifcPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var data = new bimdata.CheckerResult(); // CheckerResult | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createCheckerResult(checkerPk, ifcPk, projectPk, cloudPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkerPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **data** | [**CheckerResult**](CheckerResult.md)|  | 

### Return type

[**CheckerResult**](CheckerResult.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createCheckplan"></a>
# **createCheckplan**
> CheckPlan createCheckplan(projectPk, cloudPk, data)





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

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var data = new bimdata.CheckPlan(); // CheckPlan | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createCheckplan(projectPk, cloudPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **data** | [**CheckPlan**](CheckPlan.md)|  | 

### Return type

[**CheckPlan**](CheckPlan.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createRule"></a>
# **createRule**
> Rule createRule(checkPlanPk, rulesetPk, projectPk, cloudPk, data)





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

var rulesetPk = "rulesetPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var data = new bimdata.Rule(); // Rule | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createRule(checkPlanPk, rulesetPk, projectPk, cloudPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkPlanPk** | **String**|  | 
 **rulesetPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **data** | [**Rule**](Rule.md)|  | 

### Return type

[**Rule**](Rule.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createRuleComponent"></a>
# **createRuleComponent**
> RuleComponent createRuleComponent(projectPk, cloudPk, rulePk, checkPlanPk, rulesetPk, data)





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

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var rulePk = "rulePk_example"; // String | 

var checkPlanPk = "checkPlanPk_example"; // String | 

var rulesetPk = "rulesetPk_example"; // String | 

var data = new bimdata.RuleComponent(); // RuleComponent | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createRuleComponent(projectPk, cloudPk, rulePk, checkPlanPk, rulesetPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **rulePk** | **String**|  | 
 **checkPlanPk** | **String**|  | 
 **rulesetPk** | **String**|  | 
 **data** | [**RuleComponent**](RuleComponent.md)|  | 

### Return type

[**RuleComponent**](RuleComponent.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createRuleset"></a>
# **createRuleset**
> Ruleset createRuleset(checkPlanPk, projectPk, cloudPk, data)





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

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var data = new bimdata.Ruleset(); // Ruleset | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createRuleset(checkPlanPk, projectPk, cloudPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkPlanPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **data** | [**Ruleset**](Ruleset.md)|  | 

### Return type

[**Ruleset**](Ruleset.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteChecker"></a>
# **deleteChecker**
> deleteChecker(ifcPk, projectPk, cloudPk, id, )





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

var ifcPk = "ifcPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteChecker(ifcPk, projectPk, cloudPk, id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteCheckerResult"></a>
# **deleteCheckerResult**
> deleteCheckerResult(checkerPk, projectPk, cloudPk, ifcPk, id, )





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

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteCheckerResult(checkerPk, projectPk, cloudPk, ifcPk, id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkerPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteCheckplan"></a>
# **deleteCheckplan**
> deleteCheckplan(projectPk, cloudPk, id, )





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

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteCheckplan(projectPk, cloudPk, id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteRule"></a>
# **deleteRule**
> deleteRule(projectPk, cloudPk, rulesetPk, checkPlanPk, id, )





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

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var rulesetPk = "rulesetPk_example"; // String | 

var checkPlanPk = "checkPlanPk_example"; // String | 

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteRule(projectPk, cloudPk, rulesetPk, checkPlanPk, id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **rulesetPk** | **String**|  | 
 **checkPlanPk** | **String**|  | 
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteRuleComponent"></a>
# **deleteRuleComponent**
> deleteRuleComponent(rulesetPk, projectPk, cloudPk, rulePk, checkPlanPk, id, )





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

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var rulePk = "rulePk_example"; // String | 

var checkPlanPk = "checkPlanPk_example"; // String | 

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteRuleComponent(rulesetPk, projectPk, cloudPk, rulePk, checkPlanPk, id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rulesetPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **rulePk** | **String**|  | 
 **checkPlanPk** | **String**|  | 
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteRuleset"></a>
# **deleteRuleset**
> deleteRuleset(checkPlanPk, projectPk, cloudPk, id, )





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

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteRuleset(checkPlanPk, projectPk, cloudPk, id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkPlanPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdateChecker"></a>
# **fullUpdateChecker**
> IfcChecker fullUpdateChecker(ifcPk, projectPk, cloudPk, id, data)





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

var ifcPk = "ifcPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var id = "id_example"; // String | 

var data = new bimdata.IfcChecker(); // IfcChecker | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fullUpdateChecker(ifcPk, projectPk, cloudPk, id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **data** | [**IfcChecker**](IfcChecker.md)|  | 

### Return type

[**IfcChecker**](IfcChecker.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdateCheckerResult"></a>
# **fullUpdateCheckerResult**
> CheckerResult fullUpdateCheckerResult(checkerPk, projectPk, cloudPk, ifcPk, id, data)





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

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var id = "id_example"; // String | 

var data = new bimdata.CheckerResult(); // CheckerResult | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fullUpdateCheckerResult(checkerPk, projectPk, cloudPk, ifcPk, id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkerPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **id** | **String**|  | 
 **data** | [**CheckerResult**](CheckerResult.md)|  | 

### Return type

[**CheckerResult**](CheckerResult.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdateCheckplan"></a>
# **fullUpdateCheckplan**
> CheckPlan fullUpdateCheckplan(projectPk, cloudPk, id, data)





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

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var id = "id_example"; // String | 

var data = new bimdata.CheckPlan(); // CheckPlan | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fullUpdateCheckplan(projectPk, cloudPk, id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **data** | [**CheckPlan**](CheckPlan.md)|  | 

### Return type

[**CheckPlan**](CheckPlan.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdateRule"></a>
# **fullUpdateRule**
> Rule fullUpdateRule(projectPk, cloudPk, rulesetPk, checkPlanPk, id, data)





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

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var rulesetPk = "rulesetPk_example"; // String | 

var checkPlanPk = "checkPlanPk_example"; // String | 

var id = "id_example"; // String | 

var data = new bimdata.Rule(); // Rule | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fullUpdateRule(projectPk, cloudPk, rulesetPk, checkPlanPk, id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **rulesetPk** | **String**|  | 
 **checkPlanPk** | **String**|  | 
 **id** | **String**|  | 
 **data** | [**Rule**](Rule.md)|  | 

### Return type

[**Rule**](Rule.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdateRuleComponent"></a>
# **fullUpdateRuleComponent**
> RuleComponent fullUpdateRuleComponent(rulesetPk, projectPk, cloudPk, rulePk, checkPlanPk, id, data)





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

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var rulePk = "rulePk_example"; // String | 

var checkPlanPk = "checkPlanPk_example"; // String | 

var id = "id_example"; // String | 

var data = new bimdata.RuleComponent(); // RuleComponent | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fullUpdateRuleComponent(rulesetPk, projectPk, cloudPk, rulePk, checkPlanPk, id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rulesetPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **rulePk** | **String**|  | 
 **checkPlanPk** | **String**|  | 
 **id** | **String**|  | 
 **data** | [**RuleComponent**](RuleComponent.md)|  | 

### Return type

[**RuleComponent**](RuleComponent.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdateRuleset"></a>
# **fullUpdateRuleset**
> Ruleset fullUpdateRuleset(checkPlanPk, projectPk, cloudPk, id, data)





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

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var id = "id_example"; // String | 

var data = new bimdata.Ruleset(); // Ruleset | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fullUpdateRuleset(checkPlanPk, projectPk, cloudPk, id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkPlanPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **data** | [**Ruleset**](Ruleset.md)|  | 

### Return type

[**Ruleset**](Ruleset.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getChecker"></a>
# **getChecker**
> IfcChecker getChecker(ifcPk, projectPk, cloudPk, id, )





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

var ifcPk = "ifcPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getChecker(ifcPk, projectPk, cloudPk, id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 

### Return type

[**IfcChecker**](IfcChecker.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCheckerResult"></a>
# **getCheckerResult**
> CheckerResult getCheckerResult(checkerPk, projectPk, cloudPk, ifcPk, id, )





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

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCheckerResult(checkerPk, projectPk, cloudPk, ifcPk, id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkerPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **id** | **String**|  | 

### Return type

[**CheckerResult**](CheckerResult.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCheckerResults"></a>
# **getCheckerResults**
> [CheckerResult] getCheckerResults(checkerPk, ifcPk, projectPk, cloudPk, )





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

var ifcPk = "ifcPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCheckerResults(checkerPk, ifcPk, projectPk, cloudPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkerPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 

### Return type

[**[CheckerResult]**](CheckerResult.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCheckers"></a>
# **getCheckers**
> [IfcChecker] getCheckers(ifcPk, projectPk, cloudPk, )





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

var ifcPk = "ifcPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCheckers(ifcPk, projectPk, cloudPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 

### Return type

[**[IfcChecker]**](IfcChecker.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCheckplan"></a>
# **getCheckplan**
> CheckPlan getCheckplan(projectPk, cloudPk, id, )





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

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCheckplan(projectPk, cloudPk, id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 

### Return type

[**CheckPlan**](CheckPlan.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCheckplans"></a>
# **getCheckplans**
> [CheckPlan] getCheckplans(projectPk, cloudPk, )





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

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCheckplans(projectPk, cloudPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 

### Return type

[**[CheckPlan]**](CheckPlan.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRule"></a>
# **getRule**
> Rule getRule(projectPk, cloudPk, rulesetPk, checkPlanPk, id, )





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

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var rulesetPk = "rulesetPk_example"; // String | 

var checkPlanPk = "checkPlanPk_example"; // String | 

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRule(projectPk, cloudPk, rulesetPk, checkPlanPk, id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **rulesetPk** | **String**|  | 
 **checkPlanPk** | **String**|  | 
 **id** | **String**|  | 

### Return type

[**Rule**](Rule.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRuleComponent"></a>
# **getRuleComponent**
> RuleComponent getRuleComponent(rulesetPk, projectPk, cloudPk, rulePk, checkPlanPk, id, )





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

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var rulePk = "rulePk_example"; // String | 

var checkPlanPk = "checkPlanPk_example"; // String | 

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRuleComponent(rulesetPk, projectPk, cloudPk, rulePk, checkPlanPk, id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rulesetPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **rulePk** | **String**|  | 
 **checkPlanPk** | **String**|  | 
 **id** | **String**|  | 

### Return type

[**RuleComponent**](RuleComponent.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRuleComponents"></a>
# **getRuleComponents**
> [RuleComponent] getRuleComponents(projectPk, cloudPk, rulePk, checkPlanPk, rulesetPk, )





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

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var rulePk = "rulePk_example"; // String | 

var checkPlanPk = "checkPlanPk_example"; // String | 

var rulesetPk = "rulesetPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRuleComponents(projectPk, cloudPk, rulePk, checkPlanPk, rulesetPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **rulePk** | **String**|  | 
 **checkPlanPk** | **String**|  | 
 **rulesetPk** | **String**|  | 

### Return type

[**[RuleComponent]**](RuleComponent.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRules"></a>
# **getRules**
> [Rule] getRules(checkPlanPk, rulesetPk, projectPk, cloudPk, )





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

var rulesetPk = "rulesetPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRules(checkPlanPk, rulesetPk, projectPk, cloudPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkPlanPk** | **String**|  | 
 **rulesetPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 

### Return type

[**[Rule]**](Rule.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRuleset"></a>
# **getRuleset**
> Ruleset getRuleset(checkPlanPk, projectPk, cloudPk, id, )





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

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRuleset(checkPlanPk, projectPk, cloudPk, id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkPlanPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 

### Return type

[**Ruleset**](Ruleset.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRulesets"></a>
# **getRulesets**
> [Ruleset] getRulesets(checkPlanPk, projectPk, cloudPk, )





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

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRulesets(checkPlanPk, projectPk, cloudPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkPlanPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 

### Return type

[**[Ruleset]**](Ruleset.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="launchNewCheck"></a>
# **launchNewCheck**
> launchNewCheck(ifcPk, projectPk, cloudPk, id, data)



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

var ifcPk = "ifcPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var id = "id_example"; // String | 

var data = new bimdata.IfcChecker(); // IfcChecker | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.launchNewCheck(ifcPk, projectPk, cloudPk, id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **data** | [**IfcChecker**](IfcChecker.md)|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateChecker"></a>
# **updateChecker**
> IfcChecker updateChecker(ifcPk, projectPk, cloudPk, id, data)





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

var ifcPk = "ifcPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var id = "id_example"; // String | 

var data = new bimdata.IfcChecker(); // IfcChecker | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateChecker(ifcPk, projectPk, cloudPk, id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **data** | [**IfcChecker**](IfcChecker.md)|  | 

### Return type

[**IfcChecker**](IfcChecker.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCheckerResult"></a>
# **updateCheckerResult**
> CheckerResult updateCheckerResult(checkerPk, projectPk, cloudPk, ifcPk, id, data)





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

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var id = "id_example"; // String | 

var data = new bimdata.CheckerResult(); // CheckerResult | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateCheckerResult(checkerPk, projectPk, cloudPk, ifcPk, id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkerPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **id** | **String**|  | 
 **data** | [**CheckerResult**](CheckerResult.md)|  | 

### Return type

[**CheckerResult**](CheckerResult.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCheckplan"></a>
# **updateCheckplan**
> CheckPlan updateCheckplan(projectPk, cloudPk, id, data)





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

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var id = "id_example"; // String | 

var data = new bimdata.CheckPlan(); // CheckPlan | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateCheckplan(projectPk, cloudPk, id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **data** | [**CheckPlan**](CheckPlan.md)|  | 

### Return type

[**CheckPlan**](CheckPlan.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateRule"></a>
# **updateRule**
> Rule updateRule(projectPk, cloudPk, rulesetPk, checkPlanPk, id, data)





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

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var rulesetPk = "rulesetPk_example"; // String | 

var checkPlanPk = "checkPlanPk_example"; // String | 

var id = "id_example"; // String | 

var data = new bimdata.Rule(); // Rule | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateRule(projectPk, cloudPk, rulesetPk, checkPlanPk, id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **rulesetPk** | **String**|  | 
 **checkPlanPk** | **String**|  | 
 **id** | **String**|  | 
 **data** | [**Rule**](Rule.md)|  | 

### Return type

[**Rule**](Rule.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateRuleComponent"></a>
# **updateRuleComponent**
> RuleComponent updateRuleComponent(rulesetPk, projectPk, cloudPk, rulePk, checkPlanPk, id, data)





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

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var rulePk = "rulePk_example"; // String | 

var checkPlanPk = "checkPlanPk_example"; // String | 

var id = "id_example"; // String | 

var data = new bimdata.RuleComponent(); // RuleComponent | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateRuleComponent(rulesetPk, projectPk, cloudPk, rulePk, checkPlanPk, id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rulesetPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **rulePk** | **String**|  | 
 **checkPlanPk** | **String**|  | 
 **id** | **String**|  | 
 **data** | [**RuleComponent**](RuleComponent.md)|  | 

### Return type

[**RuleComponent**](RuleComponent.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateRuleset"></a>
# **updateRuleset**
> Ruleset updateRuleset(checkPlanPk, projectPk, cloudPk, id, data)





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

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var id = "id_example"; // String | 

var data = new bimdata.Ruleset(); // Ruleset | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateRuleset(checkPlanPk, projectPk, cloudPk, id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkPlanPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **data** | [**Ruleset**](Ruleset.md)|  | 

### Return type

[**Ruleset**](Ruleset.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


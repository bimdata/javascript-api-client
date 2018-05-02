# bimdata.CheckplanApi

All URIs are relative to *http://api-staging.bimdata.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCheckPlanResult**](CheckplanApi.md#createCheckPlanResult) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/checker/{checker_pk}/result | 
[**createChecker**](CheckplanApi.md#createChecker) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/checker | 
[**createCheckplan**](CheckplanApi.md#createCheckplan) | **POST** /cloud/{cloud_pk}/project/{project_pk}/checkplan | 
[**createRule**](CheckplanApi.md#createRule) | **POST** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{check_plan_pk}/ruleset/{ruleset_pk}/rule | 
[**createRuleComponent**](CheckplanApi.md#createRuleComponent) | **POST** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{check_plan_pk}/ruleset/{ruleset_pk}/rule/{rule_pk}/rulecomponent | 
[**createRuleset**](CheckplanApi.md#createRuleset) | **POST** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{check_plan_pk}/ruleset | 
[**deleteCheckPlanResult**](CheckplanApi.md#deleteCheckPlanResult) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/checker/{checker_pk}/result/{id} | 
[**deleteChecker**](CheckplanApi.md#deleteChecker) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/checker/{id} | 
[**deleteCheckplan**](CheckplanApi.md#deleteCheckplan) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{id} | 
[**deleteRule**](CheckplanApi.md#deleteRule) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{check_plan_pk}/ruleset/{ruleset_pk}/rule/{id} | 
[**deleteRuleComponent**](CheckplanApi.md#deleteRuleComponent) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{check_plan_pk}/ruleset/{ruleset_pk}/rule/{rule_pk}/rulecomponent/{id} | 
[**deleteRuleset**](CheckplanApi.md#deleteRuleset) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{check_plan_pk}/ruleset/{id} | 
[**fullUpdateCheckPlanResult**](CheckplanApi.md#fullUpdateCheckPlanResult) | **PUT** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/checker/{checker_pk}/result/{id} | 
[**fullUpdateChecker**](CheckplanApi.md#fullUpdateChecker) | **PUT** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/checker/{id} | 
[**fullUpdateCheckplan**](CheckplanApi.md#fullUpdateCheckplan) | **PUT** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{id} | 
[**fullUpdateRule**](CheckplanApi.md#fullUpdateRule) | **PUT** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{check_plan_pk}/ruleset/{ruleset_pk}/rule/{id} | 
[**fullUpdateRuleComponent**](CheckplanApi.md#fullUpdateRuleComponent) | **PUT** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{check_plan_pk}/ruleset/{ruleset_pk}/rule/{rule_pk}/rulecomponent/{id} | 
[**fullUpdateRuleset**](CheckplanApi.md#fullUpdateRuleset) | **PUT** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{check_plan_pk}/ruleset/{id} | 
[**getCheckPlanResult**](CheckplanApi.md#getCheckPlanResult) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/checker/{checker_pk}/result/{id} | 
[**getCheckPlanResults**](CheckplanApi.md#getCheckPlanResults) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/checker/{checker_pk}/result | 
[**getChecker**](CheckplanApi.md#getChecker) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/checker/{id} | 
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
[**updateCheckPlanResult**](CheckplanApi.md#updateCheckPlanResult) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/checker/{checker_pk}/result/{id} | 
[**updateChecker**](CheckplanApi.md#updateChecker) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/checker/{id} | 
[**updateCheckplan**](CheckplanApi.md#updateCheckplan) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{id} | 
[**updateRule**](CheckplanApi.md#updateRule) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{check_plan_pk}/ruleset/{ruleset_pk}/rule/{id} | 
[**updateRuleComponent**](CheckplanApi.md#updateRuleComponent) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{check_plan_pk}/ruleset/{ruleset_pk}/rule/{rule_pk}/rulecomponent/{id} | 
[**updateRuleset**](CheckplanApi.md#updateRuleset) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{check_plan_pk}/ruleset/{id} | 


<a name="createCheckPlanResult"></a>
# **createCheckPlanResult**
> CheckPlanResult createCheckPlanResult(ifcPk, projectPk, cloudPk, checkerPk, data)





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

var checkerPk = "checkerPk_example"; // String | 

var data = new bimdata.CheckPlanResult(); // CheckPlanResult | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createCheckPlanResult(ifcPk, projectPk, cloudPk, checkerPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **checkerPk** | **String**|  | 
 **data** | [**CheckPlanResult**](CheckPlanResult.md)|  | 

### Return type

[**CheckPlanResult**](CheckPlanResult.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

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
> Rule createRule(checkPlanPk, projectPk, rulesetPk, cloudPk, data)





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

var rulesetPk = "rulesetPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var data = new bimdata.Rule(); // Rule | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createRule(checkPlanPk, projectPk, rulesetPk, cloudPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkPlanPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **rulesetPk** | **String**|  | 
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
> RuleComponent createRuleComponent(projectPk, rulesetPk, rulePk, cloudPk, checkPlanPk, data)





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

var rulesetPk = "rulesetPk_example"; // String | 

var rulePk = "rulePk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var checkPlanPk = "checkPlanPk_example"; // String | 

var data = new bimdata.RuleComponent(); // RuleComponent | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createRuleComponent(projectPk, rulesetPk, rulePk, cloudPk, checkPlanPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **rulesetPk** | **String**|  | 
 **rulePk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **checkPlanPk** | **String**|  | 
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

<a name="deleteCheckPlanResult"></a>
# **deleteCheckPlanResult**
> deleteCheckPlanResult(ifcPk, projectPk, checkerPk, cloudPk, id, )





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

var checkerPk = "checkerPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteCheckPlanResult(ifcPk, projectPk, checkerPk, cloudPk, id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **checkerPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteChecker"></a>
# **deleteChecker**
> deleteChecker(ifcPk, projectPk, id, cloudPk, )





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

var id = "id_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteChecker(ifcPk, projectPk, id, cloudPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **id** | **String**|  | 
 **cloudPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteCheckplan"></a>
# **deleteCheckplan**
> deleteCheckplan(projectPk, id, cloudPk, )





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

var id = "id_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteCheckplan(projectPk, id, cloudPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **id** | **String**|  | 
 **cloudPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteRule"></a>
# **deleteRule**
> deleteRule(projectPk, rulesetPk, cloudPk, id, checkPlanPk, )





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

var rulesetPk = "rulesetPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var id = "id_example"; // String | 

var checkPlanPk = "checkPlanPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteRule(projectPk, rulesetPk, cloudPk, id, checkPlanPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **rulesetPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **checkPlanPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteRuleComponent"></a>
# **deleteRuleComponent**
> deleteRuleComponent(projectPk, rulesetPk, rulePk, cloudPk, id, checkPlanPk, )





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

var rulesetPk = "rulesetPk_example"; // String | 

var rulePk = "rulePk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var id = "id_example"; // String | 

var checkPlanPk = "checkPlanPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteRuleComponent(projectPk, rulesetPk, rulePk, cloudPk, id, checkPlanPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **rulesetPk** | **String**|  | 
 **rulePk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **checkPlanPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteRuleset"></a>
# **deleteRuleset**
> deleteRuleset(checkPlanPk, projectPk, id, cloudPk, )





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

var id = "id_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteRuleset(checkPlanPk, projectPk, id, cloudPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkPlanPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **id** | **String**|  | 
 **cloudPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdateCheckPlanResult"></a>
# **fullUpdateCheckPlanResult**
> CheckPlanResult fullUpdateCheckPlanResult(ifcPk, projectPk, checkerPk, cloudPk, id, data)





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

var checkerPk = "checkerPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var id = "id_example"; // String | 

var data = new bimdata.CheckPlanResult(); // CheckPlanResult | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fullUpdateCheckPlanResult(ifcPk, projectPk, checkerPk, cloudPk, id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **checkerPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **data** | [**CheckPlanResult**](CheckPlanResult.md)|  | 

### Return type

[**CheckPlanResult**](CheckPlanResult.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdateChecker"></a>
# **fullUpdateChecker**
> IfcChecker fullUpdateChecker(ifcPk, projectPk, id, cloudPk, data)





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

var id = "id_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var data = new bimdata.IfcChecker(); // IfcChecker | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fullUpdateChecker(ifcPk, projectPk, id, cloudPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **id** | **String**|  | 
 **cloudPk** | **String**|  | 
 **data** | [**IfcChecker**](IfcChecker.md)|  | 

### Return type

[**IfcChecker**](IfcChecker.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdateCheckplan"></a>
# **fullUpdateCheckplan**
> CheckPlan fullUpdateCheckplan(projectPk, id, cloudPk, data)





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

var id = "id_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var data = new bimdata.CheckPlan(); // CheckPlan | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fullUpdateCheckplan(projectPk, id, cloudPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **id** | **String**|  | 
 **cloudPk** | **String**|  | 
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
> Rule fullUpdateRule(projectPk, rulesetPk, cloudPk, id, checkPlanPk, data)





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

var rulesetPk = "rulesetPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var id = "id_example"; // String | 

var checkPlanPk = "checkPlanPk_example"; // String | 

var data = new bimdata.Rule(); // Rule | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fullUpdateRule(projectPk, rulesetPk, cloudPk, id, checkPlanPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **rulesetPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **checkPlanPk** | **String**|  | 
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
> RuleComponent fullUpdateRuleComponent(projectPk, rulesetPk, rulePk, cloudPk, id, checkPlanPk, data)





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

var rulesetPk = "rulesetPk_example"; // String | 

var rulePk = "rulePk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var id = "id_example"; // String | 

var checkPlanPk = "checkPlanPk_example"; // String | 

var data = new bimdata.RuleComponent(); // RuleComponent | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fullUpdateRuleComponent(projectPk, rulesetPk, rulePk, cloudPk, id, checkPlanPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **rulesetPk** | **String**|  | 
 **rulePk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **checkPlanPk** | **String**|  | 
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
> Ruleset fullUpdateRuleset(checkPlanPk, projectPk, id, cloudPk, data)





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

var id = "id_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var data = new bimdata.Ruleset(); // Ruleset | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fullUpdateRuleset(checkPlanPk, projectPk, id, cloudPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkPlanPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **id** | **String**|  | 
 **cloudPk** | **String**|  | 
 **data** | [**Ruleset**](Ruleset.md)|  | 

### Return type

[**Ruleset**](Ruleset.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCheckPlanResult"></a>
# **getCheckPlanResult**
> CheckPlanResult getCheckPlanResult(ifcPk, projectPk, checkerPk, cloudPk, id, )





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

var checkerPk = "checkerPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCheckPlanResult(ifcPk, projectPk, checkerPk, cloudPk, id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **checkerPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 

### Return type

[**CheckPlanResult**](CheckPlanResult.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCheckPlanResults"></a>
# **getCheckPlanResults**
> [CheckPlanResult] getCheckPlanResults(ifcPk, projectPk, cloudPk, checkerPk, )





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

var checkerPk = "checkerPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCheckPlanResults(ifcPk, projectPk, cloudPk, checkerPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **checkerPk** | **String**|  | 

### Return type

[**[CheckPlanResult]**](CheckPlanResult.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getChecker"></a>
# **getChecker**
> IfcChecker getChecker(ifcPk, projectPk, id, cloudPk, )





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

var id = "id_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getChecker(ifcPk, projectPk, id, cloudPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **id** | **String**|  | 
 **cloudPk** | **String**|  | 

### Return type

[**IfcChecker**](IfcChecker.md)

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
> CheckPlan getCheckplan(projectPk, id, cloudPk, )





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

var id = "id_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCheckplan(projectPk, id, cloudPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **id** | **String**|  | 
 **cloudPk** | **String**|  | 

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
> Rule getRule(projectPk, rulesetPk, cloudPk, id, checkPlanPk, )





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

var rulesetPk = "rulesetPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var id = "id_example"; // String | 

var checkPlanPk = "checkPlanPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRule(projectPk, rulesetPk, cloudPk, id, checkPlanPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **rulesetPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **checkPlanPk** | **String**|  | 

### Return type

[**Rule**](Rule.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRuleComponent"></a>
# **getRuleComponent**
> RuleComponent getRuleComponent(projectPk, rulesetPk, rulePk, cloudPk, id, checkPlanPk, )





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

var rulesetPk = "rulesetPk_example"; // String | 

var rulePk = "rulePk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var id = "id_example"; // String | 

var checkPlanPk = "checkPlanPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRuleComponent(projectPk, rulesetPk, rulePk, cloudPk, id, checkPlanPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **rulesetPk** | **String**|  | 
 **rulePk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **checkPlanPk** | **String**|  | 

### Return type

[**RuleComponent**](RuleComponent.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRuleComponents"></a>
# **getRuleComponents**
> [RuleComponent] getRuleComponents(projectPk, rulesetPk, rulePk, cloudPk, checkPlanPk, )





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

var rulesetPk = "rulesetPk_example"; // String | 

var rulePk = "rulePk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var checkPlanPk = "checkPlanPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRuleComponents(projectPk, rulesetPk, rulePk, cloudPk, checkPlanPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **rulesetPk** | **String**|  | 
 **rulePk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **checkPlanPk** | **String**|  | 

### Return type

[**[RuleComponent]**](RuleComponent.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRules"></a>
# **getRules**
> [Rule] getRules(checkPlanPk, projectPk, rulesetPk, cloudPk, )





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

var rulesetPk = "rulesetPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRules(checkPlanPk, projectPk, rulesetPk, cloudPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkPlanPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **rulesetPk** | **String**|  | 
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
> Ruleset getRuleset(checkPlanPk, projectPk, id, cloudPk, )





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

var id = "id_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRuleset(checkPlanPk, projectPk, id, cloudPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkPlanPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **id** | **String**|  | 
 **cloudPk** | **String**|  | 

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
> launchNewCheck(ifcPk, projectPk, id, cloudPk, data)



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

var id = "id_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var data = new bimdata.IfcChecker(); // IfcChecker | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.launchNewCheck(ifcPk, projectPk, id, cloudPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **id** | **String**|  | 
 **cloudPk** | **String**|  | 
 **data** | [**IfcChecker**](IfcChecker.md)|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCheckPlanResult"></a>
# **updateCheckPlanResult**
> CheckPlanResult updateCheckPlanResult(ifcPk, projectPk, checkerPk, cloudPk, id, data)





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

var checkerPk = "checkerPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var id = "id_example"; // String | 

var data = new bimdata.CheckPlanResult(); // CheckPlanResult | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateCheckPlanResult(ifcPk, projectPk, checkerPk, cloudPk, id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **checkerPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **data** | [**CheckPlanResult**](CheckPlanResult.md)|  | 

### Return type

[**CheckPlanResult**](CheckPlanResult.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateChecker"></a>
# **updateChecker**
> IfcChecker updateChecker(ifcPk, projectPk, id, cloudPk, data)





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

var id = "id_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var data = new bimdata.IfcChecker(); // IfcChecker | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateChecker(ifcPk, projectPk, id, cloudPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **id** | **String**|  | 
 **cloudPk** | **String**|  | 
 **data** | [**IfcChecker**](IfcChecker.md)|  | 

### Return type

[**IfcChecker**](IfcChecker.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCheckplan"></a>
# **updateCheckplan**
> CheckPlan updateCheckplan(projectPk, id, cloudPk, data)





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

var id = "id_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var data = new bimdata.CheckPlan(); // CheckPlan | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateCheckplan(projectPk, id, cloudPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **id** | **String**|  | 
 **cloudPk** | **String**|  | 
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
> Rule updateRule(projectPk, rulesetPk, cloudPk, id, checkPlanPk, data)





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

var rulesetPk = "rulesetPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var id = "id_example"; // String | 

var checkPlanPk = "checkPlanPk_example"; // String | 

var data = new bimdata.Rule(); // Rule | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateRule(projectPk, rulesetPk, cloudPk, id, checkPlanPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **rulesetPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **checkPlanPk** | **String**|  | 
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
> RuleComponent updateRuleComponent(projectPk, rulesetPk, rulePk, cloudPk, id, checkPlanPk, data)





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

var rulesetPk = "rulesetPk_example"; // String | 

var rulePk = "rulePk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var id = "id_example"; // String | 

var checkPlanPk = "checkPlanPk_example"; // String | 

var data = new bimdata.RuleComponent(); // RuleComponent | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateRuleComponent(projectPk, rulesetPk, rulePk, cloudPk, id, checkPlanPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **rulesetPk** | **String**|  | 
 **rulePk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **checkPlanPk** | **String**|  | 
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
> Ruleset updateRuleset(checkPlanPk, projectPk, id, cloudPk, data)





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

var id = "id_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var data = new bimdata.Ruleset(); // Ruleset | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateRuleset(checkPlanPk, projectPk, id, cloudPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkPlanPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **id** | **String**|  | 
 **cloudPk** | **String**|  | 
 **data** | [**Ruleset**](Ruleset.md)|  | 

### Return type

[**Ruleset**](Ruleset.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


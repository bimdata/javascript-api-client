# bimdata.CheckplanApi

All URIs are relative to *https://api-beta.bimdata.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createChecker**](CheckplanApi.md#createChecker) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/checker | Create a checker to a model
[**createCheckerResult**](CheckplanApi.md#createCheckerResult) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/checker/{checker_pk}/result | Create a CheckerResult
[**createCheckplan**](CheckplanApi.md#createCheckplan) | **POST** /cloud/{cloud_pk}/project/{project_pk}/checkplan | Create a Checkplan
[**createRule**](CheckplanApi.md#createRule) | **POST** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{check_plan_pk}/ruleset/{ruleset_pk}/rule | Create a Rule
[**createRuleComponent**](CheckplanApi.md#createRuleComponent) | **POST** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{check_plan_pk}/ruleset/{ruleset_pk}/rule/{rule_pk}/rulecomponent | Create a RuleComponent
[**createRuleset**](CheckplanApi.md#createRuleset) | **POST** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{check_plan_pk}/ruleset | Create a Ruleset
[**deleteChecker**](CheckplanApi.md#deleteChecker) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/checker/{id} | Delete a checker of a model
[**deleteCheckerResult**](CheckplanApi.md#deleteCheckerResult) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/checker/{checker_pk}/result/{id} | Delete a CheckerResult
[**deleteCheckplan**](CheckplanApi.md#deleteCheckplan) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{id} | Delete a Checkplan
[**deleteRule**](CheckplanApi.md#deleteRule) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{check_plan_pk}/ruleset/{ruleset_pk}/rule/{id} | Delete a Rule
[**deleteRuleComponent**](CheckplanApi.md#deleteRuleComponent) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{check_plan_pk}/ruleset/{ruleset_pk}/rule/{rule_pk}/rulecomponent/{id} | Delete a RuleComponent
[**deleteRuleset**](CheckplanApi.md#deleteRuleset) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{check_plan_pk}/ruleset/{id} | Delete a Ruleset
[**fullUpdateChecker**](CheckplanApi.md#fullUpdateChecker) | **PUT** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/checker/{id} | Update all fields of a checker of a model
[**fullUpdateCheckerResult**](CheckplanApi.md#fullUpdateCheckerResult) | **PUT** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/checker/{checker_pk}/result/{id} | Update all fields of a CheckerResult
[**fullUpdateCheckplan**](CheckplanApi.md#fullUpdateCheckplan) | **PUT** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{id} | Update all fields of a Checkplan
[**fullUpdateRule**](CheckplanApi.md#fullUpdateRule) | **PUT** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{check_plan_pk}/ruleset/{ruleset_pk}/rule/{id} | Update all fields of a Rule
[**fullUpdateRuleComponent**](CheckplanApi.md#fullUpdateRuleComponent) | **PUT** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{check_plan_pk}/ruleset/{ruleset_pk}/rule/{rule_pk}/rulecomponent/{id} | Update all fields of a RuleComponent
[**fullUpdateRuleset**](CheckplanApi.md#fullUpdateRuleset) | **PUT** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{check_plan_pk}/ruleset/{id} | Update all fields of a Ruleset
[**getChecker**](CheckplanApi.md#getChecker) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/checker/{id} | Retrieve a checker of a model
[**getCheckerResult**](CheckplanApi.md#getCheckerResult) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/checker/{checker_pk}/result/{id} | Retrieve one CheckerResult
[**getCheckerResults**](CheckplanApi.md#getCheckerResults) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/checker/{checker_pk}/result | Retrieve all CheckerResults
[**getCheckers**](CheckplanApi.md#getCheckers) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/checker | Retrieve all checkers of a model
[**getCheckplan**](CheckplanApi.md#getCheckplan) | **GET** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{id} | Retrieve one Checkplan
[**getCheckplans**](CheckplanApi.md#getCheckplans) | **GET** /cloud/{cloud_pk}/project/{project_pk}/checkplan | Retrieve all Checkplans
[**getRule**](CheckplanApi.md#getRule) | **GET** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{check_plan_pk}/ruleset/{ruleset_pk}/rule/{id} | Retrieve one Rule
[**getRuleComponent**](CheckplanApi.md#getRuleComponent) | **GET** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{check_plan_pk}/ruleset/{ruleset_pk}/rule/{rule_pk}/rulecomponent/{id} | Retrieve one RuleComponent
[**getRuleComponents**](CheckplanApi.md#getRuleComponents) | **GET** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{check_plan_pk}/ruleset/{ruleset_pk}/rule/{rule_pk}/rulecomponent | Retrieve all RuleComponents
[**getRules**](CheckplanApi.md#getRules) | **GET** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{check_plan_pk}/ruleset/{ruleset_pk}/rule | Retrieve all Rules
[**getRuleset**](CheckplanApi.md#getRuleset) | **GET** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{check_plan_pk}/ruleset/{id} | Retrieve one Ruleset
[**getRulesets**](CheckplanApi.md#getRulesets) | **GET** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{check_plan_pk}/ruleset | Retrieve all Rulesets
[**launchNewCheck**](CheckplanApi.md#launchNewCheck) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/checker/{id}/launch-check | Launch a new check on the model
[**updateChecker**](CheckplanApi.md#updateChecker) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/checker/{id} | Update some fields of a checker of a model
[**updateCheckerResult**](CheckplanApi.md#updateCheckerResult) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/checker/{checker_pk}/result/{id} | Update some fields of a CheckerResult
[**updateCheckplan**](CheckplanApi.md#updateCheckplan) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{id} | Update some fields of a Checkplan
[**updateRule**](CheckplanApi.md#updateRule) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{check_plan_pk}/ruleset/{ruleset_pk}/rule/{id} | Update some fields of a Rule
[**updateRuleComponent**](CheckplanApi.md#updateRuleComponent) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{check_plan_pk}/ruleset/{ruleset_pk}/rule/{rule_pk}/rulecomponent/{id} | Update some fields of a RuleComponent
[**updateRuleset**](CheckplanApi.md#updateRuleset) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{check_plan_pk}/ruleset/{id} | Update some fields of a Ruleset


<a name="createChecker"></a>
# **createChecker**
> IfcChecker createChecker(cloudPk, ifcPk, projectPk, ifcChecker)

Create a checker to a model

A checker is a link between a checkplan and a model. A checker can launch a check multiple time and store all the results Required scopes: check:write, ifc:read

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
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
var ifcChecker = new bimdata.IfcChecker(); // IfcChecker | 
apiInstance.createChecker(cloudPk, ifcPk, projectPk, ifcChecker).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **ifcChecker** | [**IfcChecker**](IfcChecker.md)|  | 

### Return type

[**IfcChecker**](IfcChecker.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createCheckerResult"></a>
# **createCheckerResult**
> CheckerResult createCheckerResult(checkerPk, cloudPk, ifcPk, projectPk, checkerResult)

Create a CheckerResult

TCreate a CheckerResult Required scopes: check:write

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
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
var checkerResult = new bimdata.CheckerResult(); // CheckerResult | 
apiInstance.createCheckerResult(checkerPk, cloudPk, ifcPk, projectPk, checkerResult).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkerPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **checkerResult** | [**CheckerResult**](CheckerResult.md)|  | 

### Return type

[**CheckerResult**](CheckerResult.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createCheckplan"></a>
# **createCheckplan**
> CheckPlan createCheckplan(cloudPk, projectPk, checkPlan)

Create a Checkplan

TCreate a Checkplan Required scopes: check:write

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
var checkPlan = new bimdata.CheckPlan(); // CheckPlan | 
apiInstance.createCheckplan(cloudPk, projectPk, checkPlan).then(function(data) {
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
 **checkPlan** | [**CheckPlan**](CheckPlan.md)|  | 

### Return type

[**CheckPlan**](CheckPlan.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createRule"></a>
# **createRule**
> Rule createRule(checkPlanPk, cloudPk, projectPk, rulesetPk, rule)

Create a Rule

TCreate a Rule Required scopes: check:write

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
var rulesetPk = "rulesetPk_example"; // String | 
var rule = new bimdata.Rule(); // Rule | 
apiInstance.createRule(checkPlanPk, cloudPk, projectPk, rulesetPk, rule).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkPlanPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **rulesetPk** | **String**|  | 
 **rule** | [**Rule**](Rule.md)|  | 

### Return type

[**Rule**](Rule.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createRuleComponent"></a>
# **createRuleComponent**
> RuleComponent createRuleComponent(checkPlanPk, cloudPk, projectPk, rulePk, rulesetPk, ruleComponent)

Create a RuleComponent

TCreate a RuleComponent Required scopes: check:write

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
var rulePk = "rulePk_example"; // String | 
var rulesetPk = "rulesetPk_example"; // String | 
var ruleComponent = new bimdata.RuleComponent(); // RuleComponent | 
apiInstance.createRuleComponent(checkPlanPk, cloudPk, projectPk, rulePk, rulesetPk, ruleComponent).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkPlanPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **rulePk** | **String**|  | 
 **rulesetPk** | **String**|  | 
 **ruleComponent** | [**RuleComponent**](RuleComponent.md)|  | 

### Return type

[**RuleComponent**](RuleComponent.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createRuleset"></a>
# **createRuleset**
> Ruleset createRuleset(checkPlanPk, cloudPk, projectPk, ruleset)

Create a Ruleset

TCreate a Ruleset Required scopes: check:write

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
var ruleset = new bimdata.Ruleset(); // Ruleset | 
apiInstance.createRuleset(checkPlanPk, cloudPk, projectPk, ruleset).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkPlanPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **ruleset** | [**Ruleset**](Ruleset.md)|  | 

### Return type

[**Ruleset**](Ruleset.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteChecker"></a>
# **deleteChecker**
> deleteChecker(cloudPk, id, ifcPk, projectPk)

Delete a checker of a model

A checker is a link between a checkplan and a model. A checker can launch a check multiple time and store all the results Required scopes: check:write, ifc:read

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
var id = 56; // Number | A unique integer value identifying this ifc checker.
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
apiInstance.deleteChecker(cloudPk, id, ifcPk, projectPk).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this ifc checker. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteCheckerResult"></a>
# **deleteCheckerResult**
> deleteCheckerResult(checkerPk, cloudPk, id, ifcPk, projectPk)

Delete a CheckerResult

Delete a CheckerResult Required scopes: check:write

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
var id = 56; // Number | A unique integer value identifying this checker result.
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
apiInstance.deleteCheckerResult(checkerPk, cloudPk, id, ifcPk, projectPk).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkerPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this checker result. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteCheckplan"></a>
# **deleteCheckplan**
> deleteCheckplan(cloudPk, id, projectPk)

Delete a Checkplan

Delete a Checkplan Required scopes: check:write

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
var id = 56; // Number | A unique integer value identifying this check plan.
var projectPk = "projectPk_example"; // String | 
apiInstance.deleteCheckplan(cloudPk, id, projectPk).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this check plan. | 
 **projectPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteRule"></a>
# **deleteRule**
> deleteRule(checkPlanPk, cloudPk, id, projectPk, rulesetPk)

Delete a Rule

Delete a Rule Required scopes: check:write

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
var id = 56; // Number | A unique integer value identifying this rule.
var projectPk = "projectPk_example"; // String | 
var rulesetPk = "rulesetPk_example"; // String | 
apiInstance.deleteRule(checkPlanPk, cloudPk, id, projectPk, rulesetPk).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkPlanPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this rule. | 
 **projectPk** | **String**|  | 
 **rulesetPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteRuleComponent"></a>
# **deleteRuleComponent**
> deleteRuleComponent(checkPlanPk, cloudPk, id, projectPk, rulePk, rulesetPk)

Delete a RuleComponent

Delete a RuleComponent Required scopes: check:write

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
var id = 56; // Number | A unique integer value identifying this rule component.
var projectPk = "projectPk_example"; // String | 
var rulePk = "rulePk_example"; // String | 
var rulesetPk = "rulesetPk_example"; // String | 
apiInstance.deleteRuleComponent(checkPlanPk, cloudPk, id, projectPk, rulePk, rulesetPk).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkPlanPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this rule component. | 
 **projectPk** | **String**|  | 
 **rulePk** | **String**|  | 
 **rulesetPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteRuleset"></a>
# **deleteRuleset**
> deleteRuleset(checkPlanPk, cloudPk, id, projectPk)

Delete a Ruleset

Delete a Ruleset Required scopes: check:write

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
var id = 56; // Number | A unique integer value identifying this ruleset.
var projectPk = "projectPk_example"; // String | 
apiInstance.deleteRuleset(checkPlanPk, cloudPk, id, projectPk).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkPlanPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this ruleset. | 
 **projectPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="fullUpdateChecker"></a>
# **fullUpdateChecker**
> IfcChecker fullUpdateChecker(cloudPk, id, ifcPk, projectPk, ifcChecker)

Update all fields of a checker of a model

A checker is a link between a checkplan and a model. A checker can launch a check multiple time and store all the results Required scopes: check:write, ifc:read

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
var id = 56; // Number | A unique integer value identifying this ifc checker.
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
var ifcChecker = new bimdata.IfcChecker(); // IfcChecker | 
apiInstance.fullUpdateChecker(cloudPk, id, ifcPk, projectPk, ifcChecker).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this ifc checker. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **ifcChecker** | [**IfcChecker**](IfcChecker.md)|  | 

### Return type

[**IfcChecker**](IfcChecker.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdateCheckerResult"></a>
# **fullUpdateCheckerResult**
> CheckerResult fullUpdateCheckerResult(checkerPk, cloudPk, id, ifcPk, projectPk, checkerResult)

Update all fields of a CheckerResult

Update all fields of a CheckerResult Required scopes: check:write

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
var id = 56; // Number | A unique integer value identifying this checker result.
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
var checkerResult = new bimdata.CheckerResult(); // CheckerResult | 
apiInstance.fullUpdateCheckerResult(checkerPk, cloudPk, id, ifcPk, projectPk, checkerResult).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkerPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this checker result. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **checkerResult** | [**CheckerResult**](CheckerResult.md)|  | 

### Return type

[**CheckerResult**](CheckerResult.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdateCheckplan"></a>
# **fullUpdateCheckplan**
> CheckPlan fullUpdateCheckplan(cloudPk, id, projectPk, checkPlan)

Update all fields of a Checkplan

Update all fields of a Checkplan Required scopes: check:write

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
var id = 56; // Number | A unique integer value identifying this check plan.
var projectPk = "projectPk_example"; // String | 
var checkPlan = new bimdata.CheckPlan(); // CheckPlan | 
apiInstance.fullUpdateCheckplan(cloudPk, id, projectPk, checkPlan).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this check plan. | 
 **projectPk** | **String**|  | 
 **checkPlan** | [**CheckPlan**](CheckPlan.md)|  | 

### Return type

[**CheckPlan**](CheckPlan.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdateRule"></a>
# **fullUpdateRule**
> Rule fullUpdateRule(checkPlanPk, cloudPk, id, projectPk, rulesetPk, rule)

Update all fields of a Rule

Update all fields of a Rule Required scopes: check:write

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
var id = 56; // Number | A unique integer value identifying this rule.
var projectPk = "projectPk_example"; // String | 
var rulesetPk = "rulesetPk_example"; // String | 
var rule = new bimdata.Rule(); // Rule | 
apiInstance.fullUpdateRule(checkPlanPk, cloudPk, id, projectPk, rulesetPk, rule).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkPlanPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this rule. | 
 **projectPk** | **String**|  | 
 **rulesetPk** | **String**|  | 
 **rule** | [**Rule**](Rule.md)|  | 

### Return type

[**Rule**](Rule.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdateRuleComponent"></a>
# **fullUpdateRuleComponent**
> RuleComponent fullUpdateRuleComponent(checkPlanPk, cloudPk, id, projectPk, rulePk, rulesetPk, ruleComponent)

Update all fields of a RuleComponent

Update all fields of a RuleComponent Required scopes: check:write

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
var id = 56; // Number | A unique integer value identifying this rule component.
var projectPk = "projectPk_example"; // String | 
var rulePk = "rulePk_example"; // String | 
var rulesetPk = "rulesetPk_example"; // String | 
var ruleComponent = new bimdata.RuleComponent(); // RuleComponent | 
apiInstance.fullUpdateRuleComponent(checkPlanPk, cloudPk, id, projectPk, rulePk, rulesetPk, ruleComponent).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkPlanPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this rule component. | 
 **projectPk** | **String**|  | 
 **rulePk** | **String**|  | 
 **rulesetPk** | **String**|  | 
 **ruleComponent** | [**RuleComponent**](RuleComponent.md)|  | 

### Return type

[**RuleComponent**](RuleComponent.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdateRuleset"></a>
# **fullUpdateRuleset**
> Ruleset fullUpdateRuleset(checkPlanPk, cloudPk, id, projectPk, ruleset)

Update all fields of a Ruleset

Update all fields of a Ruleset Required scopes: check:write

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
var id = 56; // Number | A unique integer value identifying this ruleset.
var projectPk = "projectPk_example"; // String | 
var ruleset = new bimdata.Ruleset(); // Ruleset | 
apiInstance.fullUpdateRuleset(checkPlanPk, cloudPk, id, projectPk, ruleset).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkPlanPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this ruleset. | 
 **projectPk** | **String**|  | 
 **ruleset** | [**Ruleset**](Ruleset.md)|  | 

### Return type

[**Ruleset**](Ruleset.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getChecker"></a>
# **getChecker**
> IfcChecker getChecker(cloudPk, id, ifcPk, projectPk)

Retrieve a checker of a model

A checker is a link between a checkplan and a model. A checker can launch a check multiple time and store all the results Required scopes: check:read, ifc:read

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
var id = 56; // Number | A unique integer value identifying this ifc checker.
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
apiInstance.getChecker(cloudPk, id, ifcPk, projectPk).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this ifc checker. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 

### Return type

[**IfcChecker**](IfcChecker.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCheckerResult"></a>
# **getCheckerResult**
> CheckerResult getCheckerResult(checkerPk, cloudPk, id, ifcPk, projectPk)

Retrieve one CheckerResult

Retrieve one CheckerResult Required scopes: check:read

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
var id = 56; // Number | A unique integer value identifying this checker result.
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
apiInstance.getCheckerResult(checkerPk, cloudPk, id, ifcPk, projectPk).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkerPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this checker result. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 

### Return type

[**CheckerResult**](CheckerResult.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCheckerResults"></a>
# **getCheckerResults**
> [CheckerResult] getCheckerResults(checkerPk, cloudPk, ifcPk, projectPk)

Retrieve all CheckerResults

Retrieve all CheckerResults Required scopes: check:read

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
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
apiInstance.getCheckerResults(checkerPk, cloudPk, ifcPk, projectPk).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkerPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 

### Return type

[**[CheckerResult]**](CheckerResult.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCheckers"></a>
# **getCheckers**
> [IfcChecker] getCheckers(cloudPk, ifcPk, projectPk)

Retrieve all checkers of a model

A checker is a link between a checkplan and a model. A checker can launch a check multiple time and store all the results Required scopes: check:read, ifc:read

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
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
apiInstance.getCheckers(cloudPk, ifcPk, projectPk).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 

### Return type

[**[IfcChecker]**](IfcChecker.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCheckplan"></a>
# **getCheckplan**
> CheckPlan getCheckplan(cloudPk, id, projectPk)

Retrieve one Checkplan

Retrieve one Checkplan Required scopes: check:read

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
var id = 56; // Number | A unique integer value identifying this check plan.
var projectPk = "projectPk_example"; // String | 
apiInstance.getCheckplan(cloudPk, id, projectPk).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this check plan. | 
 **projectPk** | **String**|  | 

### Return type

[**CheckPlan**](CheckPlan.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCheckplans"></a>
# **getCheckplans**
> [CheckPlan] getCheckplans(cloudPk, projectPk)

Retrieve all Checkplans

Retrieve all Checkplans Required scopes: check:read

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
apiInstance.getCheckplans(cloudPk, projectPk).then(function(data) {
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

[**[CheckPlan]**](CheckPlan.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRule"></a>
# **getRule**
> Rule getRule(checkPlanPk, cloudPk, id, projectPk, rulesetPk)

Retrieve one Rule

Retrieve one Rule Required scopes: check:read

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
var id = 56; // Number | A unique integer value identifying this rule.
var projectPk = "projectPk_example"; // String | 
var rulesetPk = "rulesetPk_example"; // String | 
apiInstance.getRule(checkPlanPk, cloudPk, id, projectPk, rulesetPk).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkPlanPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this rule. | 
 **projectPk** | **String**|  | 
 **rulesetPk** | **String**|  | 

### Return type

[**Rule**](Rule.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRuleComponent"></a>
# **getRuleComponent**
> RuleComponent getRuleComponent(checkPlanPk, cloudPk, id, projectPk, rulePk, rulesetPk)

Retrieve one RuleComponent

Retrieve one RuleComponent Required scopes: check:read

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
var id = 56; // Number | A unique integer value identifying this rule component.
var projectPk = "projectPk_example"; // String | 
var rulePk = "rulePk_example"; // String | 
var rulesetPk = "rulesetPk_example"; // String | 
apiInstance.getRuleComponent(checkPlanPk, cloudPk, id, projectPk, rulePk, rulesetPk).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkPlanPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this rule component. | 
 **projectPk** | **String**|  | 
 **rulePk** | **String**|  | 
 **rulesetPk** | **String**|  | 

### Return type

[**RuleComponent**](RuleComponent.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRuleComponents"></a>
# **getRuleComponents**
> [RuleComponent] getRuleComponents(checkPlanPk, cloudPk, projectPk, rulePk, rulesetPk)

Retrieve all RuleComponents

Retrieve all RuleComponents Required scopes: check:read

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
var rulePk = "rulePk_example"; // String | 
var rulesetPk = "rulesetPk_example"; // String | 
apiInstance.getRuleComponents(checkPlanPk, cloudPk, projectPk, rulePk, rulesetPk).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkPlanPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **rulePk** | **String**|  | 
 **rulesetPk** | **String**|  | 

### Return type

[**[RuleComponent]**](RuleComponent.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRules"></a>
# **getRules**
> [Rule] getRules(checkPlanPk, cloudPk, projectPk, rulesetPk)

Retrieve all Rules

Retrieve all Rules Required scopes: check:read

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
var rulesetPk = "rulesetPk_example"; // String | 
apiInstance.getRules(checkPlanPk, cloudPk, projectPk, rulesetPk).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkPlanPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **rulesetPk** | **String**|  | 

### Return type

[**[Rule]**](Rule.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRuleset"></a>
# **getRuleset**
> Ruleset getRuleset(checkPlanPk, cloudPk, id, projectPk)

Retrieve one Ruleset

Retrieve one Ruleset Required scopes: check:read

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
var id = 56; // Number | A unique integer value identifying this ruleset.
var projectPk = "projectPk_example"; // String | 
apiInstance.getRuleset(checkPlanPk, cloudPk, id, projectPk).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkPlanPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this ruleset. | 
 **projectPk** | **String**|  | 

### Return type

[**Ruleset**](Ruleset.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRulesets"></a>
# **getRulesets**
> [Ruleset] getRulesets(checkPlanPk, cloudPk, projectPk)

Retrieve all Rulesets

Retrieve all Rulesets Required scopes: check:read

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
apiInstance.getRulesets(checkPlanPk, cloudPk, projectPk).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkPlanPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 

### Return type

[**[Ruleset]**](Ruleset.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="launchNewCheck"></a>
# **launchNewCheck**
> launchNewCheck(cloudPk, id, ifcPk, projectPk, ifcChecker)

Launch a new check on the model

Starts a new check in the checker Required scopes: check:write, ifc:read

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
var id = 56; // Number | A unique integer value identifying this ifc checker.
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
var ifcChecker = new bimdata.IfcChecker(); // IfcChecker | 
apiInstance.launchNewCheck(cloudPk, id, ifcPk, projectPk, ifcChecker).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this ifc checker. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **ifcChecker** | [**IfcChecker**](IfcChecker.md)|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="updateChecker"></a>
# **updateChecker**
> IfcChecker updateChecker(cloudPk, id, ifcPk, projectPk, ifcChecker)

Update some fields of a checker of a model

A checker is a link between a checkplan and a model. A checker can launch a check multiple time and store all the results Required scopes: check:write, ifc:read

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
var id = 56; // Number | A unique integer value identifying this ifc checker.
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
var ifcChecker = new bimdata.IfcChecker(); // IfcChecker | 
apiInstance.updateChecker(cloudPk, id, ifcPk, projectPk, ifcChecker).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this ifc checker. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **ifcChecker** | [**IfcChecker**](IfcChecker.md)|  | 

### Return type

[**IfcChecker**](IfcChecker.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCheckerResult"></a>
# **updateCheckerResult**
> CheckerResult updateCheckerResult(checkerPk, cloudPk, id, ifcPk, projectPk, checkerResult)

Update some fields of a CheckerResult

Update some fields of a CheckerResult Required scopes: check:write

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
var id = 56; // Number | A unique integer value identifying this checker result.
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
var checkerResult = new bimdata.CheckerResult(); // CheckerResult | 
apiInstance.updateCheckerResult(checkerPk, cloudPk, id, ifcPk, projectPk, checkerResult).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkerPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this checker result. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **checkerResult** | [**CheckerResult**](CheckerResult.md)|  | 

### Return type

[**CheckerResult**](CheckerResult.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCheckplan"></a>
# **updateCheckplan**
> CheckPlan updateCheckplan(cloudPk, id, projectPk, checkPlan)

Update some fields of a Checkplan

Update some fields of a Checkplan Required scopes: check:write

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
var id = 56; // Number | A unique integer value identifying this check plan.
var projectPk = "projectPk_example"; // String | 
var checkPlan = new bimdata.CheckPlan(); // CheckPlan | 
apiInstance.updateCheckplan(cloudPk, id, projectPk, checkPlan).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this check plan. | 
 **projectPk** | **String**|  | 
 **checkPlan** | [**CheckPlan**](CheckPlan.md)|  | 

### Return type

[**CheckPlan**](CheckPlan.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateRule"></a>
# **updateRule**
> Rule updateRule(checkPlanPk, cloudPk, id, projectPk, rulesetPk, rule)

Update some fields of a Rule

Update some fields of a Rule Required scopes: check:write

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
var id = 56; // Number | A unique integer value identifying this rule.
var projectPk = "projectPk_example"; // String | 
var rulesetPk = "rulesetPk_example"; // String | 
var rule = new bimdata.Rule(); // Rule | 
apiInstance.updateRule(checkPlanPk, cloudPk, id, projectPk, rulesetPk, rule).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkPlanPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this rule. | 
 **projectPk** | **String**|  | 
 **rulesetPk** | **String**|  | 
 **rule** | [**Rule**](Rule.md)|  | 

### Return type

[**Rule**](Rule.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateRuleComponent"></a>
# **updateRuleComponent**
> RuleComponent updateRuleComponent(checkPlanPk, cloudPk, id, projectPk, rulePk, rulesetPk, ruleComponent)

Update some fields of a RuleComponent

Update some fields of a RuleComponent Required scopes: check:write

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
var id = 56; // Number | A unique integer value identifying this rule component.
var projectPk = "projectPk_example"; // String | 
var rulePk = "rulePk_example"; // String | 
var rulesetPk = "rulesetPk_example"; // String | 
var ruleComponent = new bimdata.RuleComponent(); // RuleComponent | 
apiInstance.updateRuleComponent(checkPlanPk, cloudPk, id, projectPk, rulePk, rulesetPk, ruleComponent).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkPlanPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this rule component. | 
 **projectPk** | **String**|  | 
 **rulePk** | **String**|  | 
 **rulesetPk** | **String**|  | 
 **ruleComponent** | [**RuleComponent**](RuleComponent.md)|  | 

### Return type

[**RuleComponent**](RuleComponent.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateRuleset"></a>
# **updateRuleset**
> Ruleset updateRuleset(checkPlanPk, cloudPk, id, projectPk, ruleset)

Update some fields of a Ruleset

Update some fields of a Ruleset Required scopes: check:write

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
var id = 56; // Number | A unique integer value identifying this ruleset.
var projectPk = "projectPk_example"; // String | 
var ruleset = new bimdata.Ruleset(); // Ruleset | 
apiInstance.updateRuleset(checkPlanPk, cloudPk, id, projectPk, ruleset).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkPlanPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this ruleset. | 
 **projectPk** | **String**|  | 
 **ruleset** | [**Ruleset**](Ruleset.md)|  | 

### Return type

[**Ruleset**](Ruleset.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


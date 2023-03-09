# bimdata.CheckerApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createChecker**](CheckerApi.md#createChecker) | **POST** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/checker | Create a checker to a model
[**createCheckerResult**](CheckerApi.md#createCheckerResult) | **POST** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/checker/{checker_pk}/result | Create a CheckerResult
[**createCheckplan**](CheckerApi.md#createCheckplan) | **POST** /cloud/{cloud_pk}/project/{project_pk}/checkplan | Create a Checkplan
[**createRule**](CheckerApi.md#createRule) | **POST** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{check_plan_pk}/ruleset/{ruleset_pk}/rule | Create a Rule
[**createRuleComponent**](CheckerApi.md#createRuleComponent) | **POST** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{check_plan_pk}/ruleset/{ruleset_pk}/rule/{rule_pk}/rulecomponent | Create a RuleComponent
[**createRuleset**](CheckerApi.md#createRuleset) | **POST** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{check_plan_pk}/ruleset | Create a Ruleset
[**deleteChecker**](CheckerApi.md#deleteChecker) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/checker/{id} | Delete a checker of a model
[**deleteCheckerResult**](CheckerApi.md#deleteCheckerResult) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/checker/{checker_pk}/result/{id} | Delete a CheckerResult
[**deleteCheckplan**](CheckerApi.md#deleteCheckplan) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{id} | Delete a Checkplan
[**deleteRule**](CheckerApi.md#deleteRule) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{check_plan_pk}/ruleset/{ruleset_pk}/rule/{id} | Delete a Rule
[**deleteRuleComponent**](CheckerApi.md#deleteRuleComponent) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{check_plan_pk}/ruleset/{ruleset_pk}/rule/{rule_pk}/rulecomponent/{id} | Delete a RuleComponent
[**deleteRuleset**](CheckerApi.md#deleteRuleset) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{check_plan_pk}/ruleset/{id} | Delete a Ruleset
[**getChecker**](CheckerApi.md#getChecker) | **GET** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/checker/{id} | Retrieve a checker of a model
[**getCheckerResult**](CheckerApi.md#getCheckerResult) | **GET** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/checker/{checker_pk}/result/{id} | Retrieve one CheckerResult
[**getCheckerResults**](CheckerApi.md#getCheckerResults) | **GET** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/checker/{checker_pk}/result | Retrieve all CheckerResults
[**getCheckers**](CheckerApi.md#getCheckers) | **GET** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/checker | Retrieve all checkers of a model
[**getCheckplan**](CheckerApi.md#getCheckplan) | **GET** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{id} | Retrieve one Checkplan
[**getCheckplans**](CheckerApi.md#getCheckplans) | **GET** /cloud/{cloud_pk}/project/{project_pk}/checkplan | Retrieve all Checkplans
[**getRule**](CheckerApi.md#getRule) | **GET** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{check_plan_pk}/ruleset/{ruleset_pk}/rule/{id} | Retrieve one Rule
[**getRuleComponent**](CheckerApi.md#getRuleComponent) | **GET** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{check_plan_pk}/ruleset/{ruleset_pk}/rule/{rule_pk}/rulecomponent/{id} | Retrieve one RuleComponent
[**getRuleComponents**](CheckerApi.md#getRuleComponents) | **GET** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{check_plan_pk}/ruleset/{ruleset_pk}/rule/{rule_pk}/rulecomponent | Retrieve all RuleComponents
[**getRules**](CheckerApi.md#getRules) | **GET** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{check_plan_pk}/ruleset/{ruleset_pk}/rule | Retrieve all Rules
[**getRuleset**](CheckerApi.md#getRuleset) | **GET** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{check_plan_pk}/ruleset/{id} | Retrieve one Ruleset
[**getRulesets**](CheckerApi.md#getRulesets) | **GET** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{check_plan_pk}/ruleset | Retrieve all Rulesets
[**launchNewCheck**](CheckerApi.md#launchNewCheck) | **POST** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/checker/{id}/launch-check | Launch a new check on the model
[**updateChecker**](CheckerApi.md#updateChecker) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/checker/{id} | Update some fields of a checker of a model
[**updateCheckerResult**](CheckerApi.md#updateCheckerResult) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/checker/{checker_pk}/result/{id} | Update some fields of a CheckerResult
[**updateCheckplan**](CheckerApi.md#updateCheckplan) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{id} | Update some fields of a Checkplan
[**updateRule**](CheckerApi.md#updateRule) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{check_plan_pk}/ruleset/{ruleset_pk}/rule/{id} | Update some fields of a Rule
[**updateRuleComponent**](CheckerApi.md#updateRuleComponent) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{check_plan_pk}/ruleset/{ruleset_pk}/rule/{rule_pk}/rulecomponent/{id} | Update some fields of a RuleComponent
[**updateRuleset**](CheckerApi.md#updateRuleset) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/checkplan/{check_plan_pk}/ruleset/{id} | Update some fields of a Ruleset



## createChecker

> IfcChecker createChecker(cloudPk, modelPk, projectPk, opts)

Create a checker to a model

A checker is a link between a checkplan and a model. A checker can launch a check multiple time and store all the results  Required scopes: check:write, ifc:read

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

let apiInstance = new bimdata.CheckerApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let opts = {
  'ifcCheckerRequest': new bimdata.IfcCheckerRequest() // IfcCheckerRequest | 
};
apiInstance.createChecker(cloudPk, modelPk, projectPk, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **ifcCheckerRequest** | [**IfcCheckerRequest**](IfcCheckerRequest.md)|  | [optional] 

### Return type

[**IfcChecker**](IfcChecker.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## createCheckerResult

> CheckerResult createCheckerResult(checkerPk, cloudPk, modelPk, projectPk, opts)

Create a CheckerResult

TCreate a CheckerResult  Required scopes: check:write

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

let apiInstance = new bimdata.CheckerApi();
let checkerPk = 56; // Number | A unique integer value identifying this ifc checker.
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let opts = {
  'checkerResultRequest': new bimdata.CheckerResultRequest() // CheckerResultRequest | 
};
apiInstance.createCheckerResult(checkerPk, cloudPk, modelPk, projectPk, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkerPk** | **Number**| A unique integer value identifying this ifc checker. | 
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **checkerResultRequest** | [**CheckerResultRequest**](CheckerResultRequest.md)|  | [optional] 

### Return type

[**CheckerResult**](CheckerResult.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## createCheckplan

> CheckPlan createCheckplan(cloudPk, projectPk, checkPlanRequest)

Create a Checkplan

TCreate a Checkplan  Required scopes: check:write

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

let apiInstance = new bimdata.CheckerApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let projectPk = 56; // Number | A unique integer value identifying this project.
let checkPlanRequest = new bimdata.CheckPlanRequest(); // CheckPlanRequest | 
apiInstance.createCheckplan(cloudPk, projectPk, checkPlanRequest).then((data) => {
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
 **checkPlanRequest** | [**CheckPlanRequest**](CheckPlanRequest.md)|  | 

### Return type

[**CheckPlan**](CheckPlan.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## createRule

> Rule createRule(checkPlanPk, cloudPk, projectPk, rulesetPk, ruleRequest)

Create a Rule

TCreate a Rule  Required scopes: check:write

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

let apiInstance = new bimdata.CheckerApi();
let checkPlanPk = 56; // Number | A unique integer value identifying this check plan.
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let projectPk = 56; // Number | A unique integer value identifying this project.
let rulesetPk = 56; // Number | A unique integer value identifying this ruleset.
let ruleRequest = new bimdata.RuleRequest(); // RuleRequest | 
apiInstance.createRule(checkPlanPk, cloudPk, projectPk, rulesetPk, ruleRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkPlanPk** | **Number**| A unique integer value identifying this check plan. | 
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **rulesetPk** | **Number**| A unique integer value identifying this ruleset. | 
 **ruleRequest** | [**RuleRequest**](RuleRequest.md)|  | 

### Return type

[**Rule**](Rule.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## createRuleComponent

> RuleComponent createRuleComponent(checkPlanPk, cloudPk, projectPk, rulePk, rulesetPk, opts)

Create a RuleComponent

TCreate a RuleComponent  Required scopes: check:write

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

let apiInstance = new bimdata.CheckerApi();
let checkPlanPk = 56; // Number | A unique integer value identifying this check plan.
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let projectPk = 56; // Number | A unique integer value identifying this project.
let rulePk = 56; // Number | A unique integer value identifying this rule.
let rulesetPk = 56; // Number | A unique integer value identifying this ruleset.
let opts = {
  'ruleComponentRequest': new bimdata.RuleComponentRequest() // RuleComponentRequest | 
};
apiInstance.createRuleComponent(checkPlanPk, cloudPk, projectPk, rulePk, rulesetPk, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkPlanPk** | **Number**| A unique integer value identifying this check plan. | 
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **rulePk** | **Number**| A unique integer value identifying this rule. | 
 **rulesetPk** | **Number**| A unique integer value identifying this ruleset. | 
 **ruleComponentRequest** | [**RuleComponentRequest**](RuleComponentRequest.md)|  | [optional] 

### Return type

[**RuleComponent**](RuleComponent.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## createRuleset

> Ruleset createRuleset(checkPlanPk, cloudPk, projectPk, rulesetRequest)

Create a Ruleset

TCreate a Ruleset  Required scopes: check:write

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

let apiInstance = new bimdata.CheckerApi();
let checkPlanPk = 56; // Number | A unique integer value identifying this check plan.
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let projectPk = 56; // Number | A unique integer value identifying this project.
let rulesetRequest = new bimdata.RulesetRequest(); // RulesetRequest | 
apiInstance.createRuleset(checkPlanPk, cloudPk, projectPk, rulesetRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkPlanPk** | **Number**| A unique integer value identifying this check plan. | 
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **rulesetRequest** | [**RulesetRequest**](RulesetRequest.md)|  | 

### Return type

[**Ruleset**](Ruleset.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## deleteChecker

> deleteChecker(cloudPk, id, modelPk, projectPk)

Delete a checker of a model

A checker is a link between a checkplan and a model. A checker can launch a check multiple time and store all the results  Required scopes: check:write, ifc:read

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

let apiInstance = new bimdata.CheckerApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this ifc checker.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.deleteChecker(cloudPk, id, modelPk, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this ifc checker. | 
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteCheckerResult

> deleteCheckerResult(checkerPk, cloudPk, id, modelPk, projectPk)

Delete a CheckerResult

Delete a CheckerResult  Required scopes: check:write

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

let apiInstance = new bimdata.CheckerApi();
let checkerPk = 56; // Number | A unique integer value identifying this ifc checker.
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this checker result.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.deleteCheckerResult(checkerPk, cloudPk, id, modelPk, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkerPk** | **Number**| A unique integer value identifying this ifc checker. | 
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this checker result. | 
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteCheckplan

> deleteCheckplan(cloudPk, id, projectPk)

Delete a Checkplan

Delete a Checkplan  Required scopes: check:write

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

let apiInstance = new bimdata.CheckerApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this check plan.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.deleteCheckplan(cloudPk, id, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this check plan. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteRule

> deleteRule(checkPlanPk, cloudPk, id, projectPk, rulesetPk)

Delete a Rule

Delete a Rule  Required scopes: check:write

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

let apiInstance = new bimdata.CheckerApi();
let checkPlanPk = 56; // Number | A unique integer value identifying this check plan.
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this rule.
let projectPk = 56; // Number | A unique integer value identifying this project.
let rulesetPk = 56; // Number | A unique integer value identifying this ruleset.
apiInstance.deleteRule(checkPlanPk, cloudPk, id, projectPk, rulesetPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkPlanPk** | **Number**| A unique integer value identifying this check plan. | 
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this rule. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **rulesetPk** | **Number**| A unique integer value identifying this ruleset. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteRuleComponent

> deleteRuleComponent(checkPlanPk, cloudPk, id, projectPk, rulePk, rulesetPk)

Delete a RuleComponent

Delete a RuleComponent  Required scopes: check:write

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

let apiInstance = new bimdata.CheckerApi();
let checkPlanPk = 56; // Number | A unique integer value identifying this check plan.
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this rule component.
let projectPk = 56; // Number | A unique integer value identifying this project.
let rulePk = 56; // Number | A unique integer value identifying this rule.
let rulesetPk = 56; // Number | A unique integer value identifying this ruleset.
apiInstance.deleteRuleComponent(checkPlanPk, cloudPk, id, projectPk, rulePk, rulesetPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkPlanPk** | **Number**| A unique integer value identifying this check plan. | 
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this rule component. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **rulePk** | **Number**| A unique integer value identifying this rule. | 
 **rulesetPk** | **Number**| A unique integer value identifying this ruleset. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteRuleset

> deleteRuleset(checkPlanPk, cloudPk, id, projectPk)

Delete a Ruleset

Delete a Ruleset  Required scopes: check:write

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

let apiInstance = new bimdata.CheckerApi();
let checkPlanPk = 56; // Number | A unique integer value identifying this check plan.
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this ruleset.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.deleteRuleset(checkPlanPk, cloudPk, id, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkPlanPk** | **Number**| A unique integer value identifying this check plan. | 
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this ruleset. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getChecker

> IfcChecker getChecker(cloudPk, id, modelPk, projectPk)

Retrieve a checker of a model

A checker is a link between a checkplan and a model. A checker can launch a check multiple time and store all the results  Required scopes: check:read, ifc:read

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

let apiInstance = new bimdata.CheckerApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this ifc checker.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getChecker(cloudPk, id, modelPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this ifc checker. | 
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**IfcChecker**](IfcChecker.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCheckerResult

> CheckerResult getCheckerResult(checkerPk, cloudPk, id, modelPk, projectPk)

Retrieve one CheckerResult

Retrieve one CheckerResult  Required scopes: check:read

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

let apiInstance = new bimdata.CheckerApi();
let checkerPk = 56; // Number | A unique integer value identifying this ifc checker.
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this checker result.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getCheckerResult(checkerPk, cloudPk, id, modelPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkerPk** | **Number**| A unique integer value identifying this ifc checker. | 
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this checker result. | 
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**CheckerResult**](CheckerResult.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCheckerResults

> [CheckerResult] getCheckerResults(checkerPk, cloudPk, modelPk, projectPk)

Retrieve all CheckerResults

Retrieve all CheckerResults  Required scopes: check:read

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

let apiInstance = new bimdata.CheckerApi();
let checkerPk = 56; // Number | A unique integer value identifying this ifc checker.
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getCheckerResults(checkerPk, cloudPk, modelPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkerPk** | **Number**| A unique integer value identifying this ifc checker. | 
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**[CheckerResult]**](CheckerResult.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCheckers

> [IfcChecker] getCheckers(cloudPk, modelPk, projectPk)

Retrieve all checkers of a model

A checker is a link between a checkplan and a model. A checker can launch a check multiple time and store all the results  Required scopes: check:read, ifc:read

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

let apiInstance = new bimdata.CheckerApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getCheckers(cloudPk, modelPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**[IfcChecker]**](IfcChecker.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCheckplan

> CheckPlan getCheckplan(cloudPk, id, projectPk)

Retrieve one Checkplan

Retrieve one Checkplan  Required scopes: check:read

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

let apiInstance = new bimdata.CheckerApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this check plan.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getCheckplan(cloudPk, id, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this check plan. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**CheckPlan**](CheckPlan.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCheckplans

> [CheckPlan] getCheckplans(cloudPk, projectPk)

Retrieve all Checkplans

Retrieve all Checkplans  Required scopes: check:read

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

let apiInstance = new bimdata.CheckerApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getCheckplans(cloudPk, projectPk).then((data) => {
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

[**[CheckPlan]**](CheckPlan.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRule

> Rule getRule(checkPlanPk, cloudPk, id, projectPk, rulesetPk)

Retrieve one Rule

Retrieve one Rule  Required scopes: check:read

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

let apiInstance = new bimdata.CheckerApi();
let checkPlanPk = 56; // Number | A unique integer value identifying this check plan.
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this rule.
let projectPk = 56; // Number | A unique integer value identifying this project.
let rulesetPk = 56; // Number | A unique integer value identifying this ruleset.
apiInstance.getRule(checkPlanPk, cloudPk, id, projectPk, rulesetPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkPlanPk** | **Number**| A unique integer value identifying this check plan. | 
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this rule. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **rulesetPk** | **Number**| A unique integer value identifying this ruleset. | 

### Return type

[**Rule**](Rule.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRuleComponent

> RuleComponent getRuleComponent(checkPlanPk, cloudPk, id, projectPk, rulePk, rulesetPk)

Retrieve one RuleComponent

Retrieve one RuleComponent  Required scopes: check:read

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

let apiInstance = new bimdata.CheckerApi();
let checkPlanPk = 56; // Number | A unique integer value identifying this check plan.
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this rule component.
let projectPk = 56; // Number | A unique integer value identifying this project.
let rulePk = 56; // Number | A unique integer value identifying this rule.
let rulesetPk = 56; // Number | A unique integer value identifying this ruleset.
apiInstance.getRuleComponent(checkPlanPk, cloudPk, id, projectPk, rulePk, rulesetPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkPlanPk** | **Number**| A unique integer value identifying this check plan. | 
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this rule component. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **rulePk** | **Number**| A unique integer value identifying this rule. | 
 **rulesetPk** | **Number**| A unique integer value identifying this ruleset. | 

### Return type

[**RuleComponent**](RuleComponent.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRuleComponents

> [RuleComponent] getRuleComponents(checkPlanPk, cloudPk, projectPk, rulePk, rulesetPk)

Retrieve all RuleComponents

Retrieve all RuleComponents  Required scopes: check:read

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

let apiInstance = new bimdata.CheckerApi();
let checkPlanPk = 56; // Number | A unique integer value identifying this check plan.
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let projectPk = 56; // Number | A unique integer value identifying this project.
let rulePk = 56; // Number | A unique integer value identifying this rule.
let rulesetPk = 56; // Number | A unique integer value identifying this ruleset.
apiInstance.getRuleComponents(checkPlanPk, cloudPk, projectPk, rulePk, rulesetPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkPlanPk** | **Number**| A unique integer value identifying this check plan. | 
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **rulePk** | **Number**| A unique integer value identifying this rule. | 
 **rulesetPk** | **Number**| A unique integer value identifying this ruleset. | 

### Return type

[**[RuleComponent]**](RuleComponent.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRules

> [Rule] getRules(checkPlanPk, cloudPk, projectPk, rulesetPk)

Retrieve all Rules

Retrieve all Rules  Required scopes: check:read

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

let apiInstance = new bimdata.CheckerApi();
let checkPlanPk = 56; // Number | A unique integer value identifying this check plan.
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let projectPk = 56; // Number | A unique integer value identifying this project.
let rulesetPk = 56; // Number | A unique integer value identifying this ruleset.
apiInstance.getRules(checkPlanPk, cloudPk, projectPk, rulesetPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkPlanPk** | **Number**| A unique integer value identifying this check plan. | 
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **rulesetPk** | **Number**| A unique integer value identifying this ruleset. | 

### Return type

[**[Rule]**](Rule.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRuleset

> Ruleset getRuleset(checkPlanPk, cloudPk, id, projectPk)

Retrieve one Ruleset

Retrieve one Ruleset  Required scopes: check:read

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

let apiInstance = new bimdata.CheckerApi();
let checkPlanPk = 56; // Number | A unique integer value identifying this check plan.
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this ruleset.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getRuleset(checkPlanPk, cloudPk, id, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkPlanPk** | **Number**| A unique integer value identifying this check plan. | 
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this ruleset. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**Ruleset**](Ruleset.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRulesets

> [Ruleset] getRulesets(checkPlanPk, cloudPk, projectPk)

Retrieve all Rulesets

Retrieve all Rulesets  Required scopes: check:read

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

let apiInstance = new bimdata.CheckerApi();
let checkPlanPk = 56; // Number | A unique integer value identifying this check plan.
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getRulesets(checkPlanPk, cloudPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkPlanPk** | **Number**| A unique integer value identifying this check plan. | 
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**[Ruleset]**](Ruleset.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## launchNewCheck

> launchNewCheck(cloudPk, id, modelPk, projectPk, opts)

Launch a new check on the model

A nex check will be played with the current state of elements, properties, etc.  Required scopes: check:write, ifc:read

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

let apiInstance = new bimdata.CheckerApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this ifc checker.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let opts = {
  'ifcCheckerRequest': new bimdata.IfcCheckerRequest() // IfcCheckerRequest | 
};
apiInstance.launchNewCheck(cloudPk, id, modelPk, projectPk, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this ifc checker. | 
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **ifcCheckerRequest** | [**IfcCheckerRequest**](IfcCheckerRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: Not defined


## updateChecker

> IfcChecker updateChecker(cloudPk, id, modelPk, projectPk, opts)

Update some fields of a checker of a model

A checker is a link between a checkplan and a model. A checker can launch a check multiple time and store all the results  Required scopes: check:write, ifc:read

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

let apiInstance = new bimdata.CheckerApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this ifc checker.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let opts = {
  'patchedIfcCheckerRequest': new bimdata.PatchedIfcCheckerRequest() // PatchedIfcCheckerRequest | 
};
apiInstance.updateChecker(cloudPk, id, modelPk, projectPk, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this ifc checker. | 
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **patchedIfcCheckerRequest** | [**PatchedIfcCheckerRequest**](PatchedIfcCheckerRequest.md)|  | [optional] 

### Return type

[**IfcChecker**](IfcChecker.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## updateCheckerResult

> CheckerResult updateCheckerResult(checkerPk, cloudPk, id, modelPk, projectPk, opts)

Update some fields of a CheckerResult

Update some fields of a CheckerResult  Required scopes: check:write

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

let apiInstance = new bimdata.CheckerApi();
let checkerPk = 56; // Number | A unique integer value identifying this ifc checker.
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this checker result.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let opts = {
  'patchedCheckerResultRequest': new bimdata.PatchedCheckerResultRequest() // PatchedCheckerResultRequest | 
};
apiInstance.updateCheckerResult(checkerPk, cloudPk, id, modelPk, projectPk, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkerPk** | **Number**| A unique integer value identifying this ifc checker. | 
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this checker result. | 
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **patchedCheckerResultRequest** | [**PatchedCheckerResultRequest**](PatchedCheckerResultRequest.md)|  | [optional] 

### Return type

[**CheckerResult**](CheckerResult.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## updateCheckplan

> CheckPlan updateCheckplan(cloudPk, id, projectPk, opts)

Update some fields of a Checkplan

Update some fields of a Checkplan  Required scopes: check:write

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

let apiInstance = new bimdata.CheckerApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this check plan.
let projectPk = 56; // Number | A unique integer value identifying this project.
let opts = {
  'patchedCheckPlanRequest': new bimdata.PatchedCheckPlanRequest() // PatchedCheckPlanRequest | 
};
apiInstance.updateCheckplan(cloudPk, id, projectPk, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this check plan. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **patchedCheckPlanRequest** | [**PatchedCheckPlanRequest**](PatchedCheckPlanRequest.md)|  | [optional] 

### Return type

[**CheckPlan**](CheckPlan.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## updateRule

> Rule updateRule(checkPlanPk, cloudPk, id, projectPk, rulesetPk, opts)

Update some fields of a Rule

Update some fields of a Rule  Required scopes: check:write

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

let apiInstance = new bimdata.CheckerApi();
let checkPlanPk = 56; // Number | A unique integer value identifying this check plan.
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this rule.
let projectPk = 56; // Number | A unique integer value identifying this project.
let rulesetPk = 56; // Number | A unique integer value identifying this ruleset.
let opts = {
  'patchedRuleRequest': new bimdata.PatchedRuleRequest() // PatchedRuleRequest | 
};
apiInstance.updateRule(checkPlanPk, cloudPk, id, projectPk, rulesetPk, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkPlanPk** | **Number**| A unique integer value identifying this check plan. | 
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this rule. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **rulesetPk** | **Number**| A unique integer value identifying this ruleset. | 
 **patchedRuleRequest** | [**PatchedRuleRequest**](PatchedRuleRequest.md)|  | [optional] 

### Return type

[**Rule**](Rule.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## updateRuleComponent

> RuleComponent updateRuleComponent(checkPlanPk, cloudPk, id, projectPk, rulePk, rulesetPk, opts)

Update some fields of a RuleComponent

Update some fields of a RuleComponent  Required scopes: check:write

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

let apiInstance = new bimdata.CheckerApi();
let checkPlanPk = 56; // Number | A unique integer value identifying this check plan.
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this rule component.
let projectPk = 56; // Number | A unique integer value identifying this project.
let rulePk = 56; // Number | A unique integer value identifying this rule.
let rulesetPk = 56; // Number | A unique integer value identifying this ruleset.
let opts = {
  'patchedRuleComponentRequest': new bimdata.PatchedRuleComponentRequest() // PatchedRuleComponentRequest | 
};
apiInstance.updateRuleComponent(checkPlanPk, cloudPk, id, projectPk, rulePk, rulesetPk, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkPlanPk** | **Number**| A unique integer value identifying this check plan. | 
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this rule component. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **rulePk** | **Number**| A unique integer value identifying this rule. | 
 **rulesetPk** | **Number**| A unique integer value identifying this ruleset. | 
 **patchedRuleComponentRequest** | [**PatchedRuleComponentRequest**](PatchedRuleComponentRequest.md)|  | [optional] 

### Return type

[**RuleComponent**](RuleComponent.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## updateRuleset

> Ruleset updateRuleset(checkPlanPk, cloudPk, id, projectPk, opts)

Update some fields of a Ruleset

Update some fields of a Ruleset  Required scopes: check:write

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

let apiInstance = new bimdata.CheckerApi();
let checkPlanPk = 56; // Number | A unique integer value identifying this check plan.
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this ruleset.
let projectPk = 56; // Number | A unique integer value identifying this project.
let opts = {
  'patchedRulesetRequest': new bimdata.PatchedRulesetRequest() // PatchedRulesetRequest | 
};
apiInstance.updateRuleset(checkPlanPk, cloudPk, id, projectPk, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkPlanPk** | **Number**| A unique integer value identifying this check plan. | 
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this ruleset. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **patchedRulesetRequest** | [**PatchedRulesetRequest**](PatchedRulesetRequest.md)|  | [optional] 

### Return type

[**Ruleset**](Ruleset.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


# BimDataApi.CheckplanApi

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



## createChecker

> IfcChecker createChecker(cloudPk, ifcPk, projectPk, data)

Create a checker to a model

A checker is a link between a checkplan and a model. A checker can launch a check multiple time and store all the results Required scopes: check:write, ifc:read

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

let apiInstance = new BimDataApi.CheckplanApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = new BimDataApi.IfcChecker(); // IfcChecker | 
apiInstance.createChecker(cloudPk, ifcPk, projectPk, data, (error, data, response) => {
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
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **data** | [**IfcChecker**](IfcChecker.md)|  | 

### Return type

[**IfcChecker**](IfcChecker.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createCheckerResult

> CheckerResult createCheckerResult(checkerPk, cloudPk, ifcPk, projectPk, data)

Create a CheckerResult

TCreate a CheckerResult Required scopes: check:write

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

let apiInstance = new BimDataApi.CheckplanApi();
let checkerPk = "checkerPk_example"; // String | 
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = new BimDataApi.CheckerResult(); // CheckerResult | 
apiInstance.createCheckerResult(checkerPk, cloudPk, ifcPk, projectPk, data, (error, data, response) => {
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
 **checkerPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **data** | [**CheckerResult**](CheckerResult.md)|  | 

### Return type

[**CheckerResult**](CheckerResult.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createCheckplan

> CheckPlan createCheckplan(cloudPk, projectPk, data)

Create a Checkplan

TCreate a Checkplan Required scopes: check:write

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

let apiInstance = new BimDataApi.CheckplanApi();
let cloudPk = "cloudPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = new BimDataApi.CheckPlan(); // CheckPlan | 
apiInstance.createCheckplan(cloudPk, projectPk, data, (error, data, response) => {
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
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **data** | [**CheckPlan**](CheckPlan.md)|  | 

### Return type

[**CheckPlan**](CheckPlan.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createRule

> Rule createRule(checkPlanPk, cloudPk, projectPk, rulesetPk, data)

Create a Rule

TCreate a Rule Required scopes: check:write

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

let apiInstance = new BimDataApi.CheckplanApi();
let checkPlanPk = "checkPlanPk_example"; // String | 
let cloudPk = "cloudPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let rulesetPk = "rulesetPk_example"; // String | 
let data = new BimDataApi.Rule(); // Rule | 
apiInstance.createRule(checkPlanPk, cloudPk, projectPk, rulesetPk, data, (error, data, response) => {
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
 **checkPlanPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **rulesetPk** | **String**|  | 
 **data** | [**Rule**](Rule.md)|  | 

### Return type

[**Rule**](Rule.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createRuleComponent

> RuleComponent createRuleComponent(checkPlanPk, cloudPk, projectPk, rulePk, rulesetPk, data)

Create a RuleComponent

TCreate a RuleComponent Required scopes: check:write

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

let apiInstance = new BimDataApi.CheckplanApi();
let checkPlanPk = "checkPlanPk_example"; // String | 
let cloudPk = "cloudPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let rulePk = "rulePk_example"; // String | 
let rulesetPk = "rulesetPk_example"; // String | 
let data = new BimDataApi.RuleComponent(); // RuleComponent | 
apiInstance.createRuleComponent(checkPlanPk, cloudPk, projectPk, rulePk, rulesetPk, data, (error, data, response) => {
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
 **checkPlanPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **rulePk** | **String**|  | 
 **rulesetPk** | **String**|  | 
 **data** | [**RuleComponent**](RuleComponent.md)|  | 

### Return type

[**RuleComponent**](RuleComponent.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createRuleset

> Ruleset createRuleset(checkPlanPk, cloudPk, projectPk, data)

Create a Ruleset

TCreate a Ruleset Required scopes: check:write

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

let apiInstance = new BimDataApi.CheckplanApi();
let checkPlanPk = "checkPlanPk_example"; // String | 
let cloudPk = "cloudPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = new BimDataApi.Ruleset(); // Ruleset | 
apiInstance.createRuleset(checkPlanPk, cloudPk, projectPk, data, (error, data, response) => {
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
 **checkPlanPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **data** | [**Ruleset**](Ruleset.md)|  | 

### Return type

[**Ruleset**](Ruleset.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteChecker

> deleteChecker(cloudPk, id, ifcPk, projectPk)

Delete a checker of a model

A checker is a link between a checkplan and a model. A checker can launch a check multiple time and store all the results Required scopes: check:write, ifc:read

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

let apiInstance = new BimDataApi.CheckplanApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this ifc checker.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.deleteChecker(cloudPk, id, ifcPk, projectPk, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteCheckerResult

> deleteCheckerResult(checkerPk, cloudPk, id, ifcPk, projectPk)

Delete a CheckerResult

Delete a CheckerResult Required scopes: check:write

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

let apiInstance = new BimDataApi.CheckplanApi();
let checkerPk = "checkerPk_example"; // String | 
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this checker result.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.deleteCheckerResult(checkerPk, cloudPk, id, ifcPk, projectPk, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteCheckplan

> deleteCheckplan(cloudPk, id, projectPk)

Delete a Checkplan

Delete a Checkplan Required scopes: check:write

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

let apiInstance = new BimDataApi.CheckplanApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this check plan.
let projectPk = "projectPk_example"; // String | 
apiInstance.deleteCheckplan(cloudPk, id, projectPk, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteRule

> deleteRule(checkPlanPk, cloudPk, id, projectPk, rulesetPk)

Delete a Rule

Delete a Rule Required scopes: check:write

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

let apiInstance = new BimDataApi.CheckplanApi();
let checkPlanPk = "checkPlanPk_example"; // String | 
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this rule.
let projectPk = "projectPk_example"; // String | 
let rulesetPk = "rulesetPk_example"; // String | 
apiInstance.deleteRule(checkPlanPk, cloudPk, id, projectPk, rulesetPk, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteRuleComponent

> deleteRuleComponent(checkPlanPk, cloudPk, id, projectPk, rulePk, rulesetPk)

Delete a RuleComponent

Delete a RuleComponent Required scopes: check:write

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

let apiInstance = new BimDataApi.CheckplanApi();
let checkPlanPk = "checkPlanPk_example"; // String | 
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this rule component.
let projectPk = "projectPk_example"; // String | 
let rulePk = "rulePk_example"; // String | 
let rulesetPk = "rulesetPk_example"; // String | 
apiInstance.deleteRuleComponent(checkPlanPk, cloudPk, id, projectPk, rulePk, rulesetPk, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteRuleset

> deleteRuleset(checkPlanPk, cloudPk, id, projectPk)

Delete a Ruleset

Delete a Ruleset Required scopes: check:write

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

let apiInstance = new BimDataApi.CheckplanApi();
let checkPlanPk = "checkPlanPk_example"; // String | 
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this ruleset.
let projectPk = "projectPk_example"; // String | 
apiInstance.deleteRuleset(checkPlanPk, cloudPk, id, projectPk, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## fullUpdateChecker

> IfcChecker fullUpdateChecker(cloudPk, id, ifcPk, projectPk, data)

Update all fields of a checker of a model

A checker is a link between a checkplan and a model. A checker can launch a check multiple time and store all the results Required scopes: check:write, ifc:read

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

let apiInstance = new BimDataApi.CheckplanApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this ifc checker.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = new BimDataApi.IfcChecker(); // IfcChecker | 
apiInstance.fullUpdateChecker(cloudPk, id, ifcPk, projectPk, data, (error, data, response) => {
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
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this ifc checker. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **data** | [**IfcChecker**](IfcChecker.md)|  | 

### Return type

[**IfcChecker**](IfcChecker.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## fullUpdateCheckerResult

> CheckerResult fullUpdateCheckerResult(checkerPk, cloudPk, id, ifcPk, projectPk, data)

Update all fields of a CheckerResult

Update all fields of a CheckerResult Required scopes: check:write

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

let apiInstance = new BimDataApi.CheckplanApi();
let checkerPk = "checkerPk_example"; // String | 
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this checker result.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = new BimDataApi.CheckerResult(); // CheckerResult | 
apiInstance.fullUpdateCheckerResult(checkerPk, cloudPk, id, ifcPk, projectPk, data, (error, data, response) => {
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
 **checkerPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this checker result. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **data** | [**CheckerResult**](CheckerResult.md)|  | 

### Return type

[**CheckerResult**](CheckerResult.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## fullUpdateCheckplan

> CheckPlan fullUpdateCheckplan(cloudPk, id, projectPk, data)

Update all fields of a Checkplan

Update all fields of a Checkplan Required scopes: check:write

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

let apiInstance = new BimDataApi.CheckplanApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this check plan.
let projectPk = "projectPk_example"; // String | 
let data = new BimDataApi.CheckPlan(); // CheckPlan | 
apiInstance.fullUpdateCheckplan(cloudPk, id, projectPk, data, (error, data, response) => {
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
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this check plan. | 
 **projectPk** | **String**|  | 
 **data** | [**CheckPlan**](CheckPlan.md)|  | 

### Return type

[**CheckPlan**](CheckPlan.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## fullUpdateRule

> Rule fullUpdateRule(checkPlanPk, cloudPk, id, projectPk, rulesetPk, data)

Update all fields of a Rule

Update all fields of a Rule Required scopes: check:write

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

let apiInstance = new BimDataApi.CheckplanApi();
let checkPlanPk = "checkPlanPk_example"; // String | 
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this rule.
let projectPk = "projectPk_example"; // String | 
let rulesetPk = "rulesetPk_example"; // String | 
let data = new BimDataApi.Rule(); // Rule | 
apiInstance.fullUpdateRule(checkPlanPk, cloudPk, id, projectPk, rulesetPk, data, (error, data, response) => {
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
 **checkPlanPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this rule. | 
 **projectPk** | **String**|  | 
 **rulesetPk** | **String**|  | 
 **data** | [**Rule**](Rule.md)|  | 

### Return type

[**Rule**](Rule.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## fullUpdateRuleComponent

> RuleComponent fullUpdateRuleComponent(checkPlanPk, cloudPk, id, projectPk, rulePk, rulesetPk, data)

Update all fields of a RuleComponent

Update all fields of a RuleComponent Required scopes: check:write

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

let apiInstance = new BimDataApi.CheckplanApi();
let checkPlanPk = "checkPlanPk_example"; // String | 
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this rule component.
let projectPk = "projectPk_example"; // String | 
let rulePk = "rulePk_example"; // String | 
let rulesetPk = "rulesetPk_example"; // String | 
let data = new BimDataApi.RuleComponent(); // RuleComponent | 
apiInstance.fullUpdateRuleComponent(checkPlanPk, cloudPk, id, projectPk, rulePk, rulesetPk, data, (error, data, response) => {
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
 **checkPlanPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this rule component. | 
 **projectPk** | **String**|  | 
 **rulePk** | **String**|  | 
 **rulesetPk** | **String**|  | 
 **data** | [**RuleComponent**](RuleComponent.md)|  | 

### Return type

[**RuleComponent**](RuleComponent.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## fullUpdateRuleset

> Ruleset fullUpdateRuleset(checkPlanPk, cloudPk, id, projectPk, data)

Update all fields of a Ruleset

Update all fields of a Ruleset Required scopes: check:write

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

let apiInstance = new BimDataApi.CheckplanApi();
let checkPlanPk = "checkPlanPk_example"; // String | 
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this ruleset.
let projectPk = "projectPk_example"; // String | 
let data = new BimDataApi.Ruleset(); // Ruleset | 
apiInstance.fullUpdateRuleset(checkPlanPk, cloudPk, id, projectPk, data, (error, data, response) => {
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
 **checkPlanPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this ruleset. | 
 **projectPk** | **String**|  | 
 **data** | [**Ruleset**](Ruleset.md)|  | 

### Return type

[**Ruleset**](Ruleset.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getChecker

> IfcChecker getChecker(cloudPk, id, ifcPk, projectPk)

Retrieve a checker of a model

A checker is a link between a checkplan and a model. A checker can launch a check multiple time and store all the results Required scopes: check:read, ifc:read

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

let apiInstance = new BimDataApi.CheckplanApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this ifc checker.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.getChecker(cloudPk, id, ifcPk, projectPk, (error, data, response) => {
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
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this ifc checker. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 

### Return type

[**IfcChecker**](IfcChecker.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCheckerResult

> CheckerResult getCheckerResult(checkerPk, cloudPk, id, ifcPk, projectPk)

Retrieve one CheckerResult

Retrieve one CheckerResult Required scopes: check:read

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

let apiInstance = new BimDataApi.CheckplanApi();
let checkerPk = "checkerPk_example"; // String | 
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this checker result.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.getCheckerResult(checkerPk, cloudPk, id, ifcPk, projectPk, (error, data, response) => {
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
 **checkerPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this checker result. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 

### Return type

[**CheckerResult**](CheckerResult.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCheckerResults

> [CheckerResult] getCheckerResults(checkerPk, cloudPk, ifcPk, projectPk)

Retrieve all CheckerResults

Retrieve all CheckerResults Required scopes: check:read

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

let apiInstance = new BimDataApi.CheckplanApi();
let checkerPk = "checkerPk_example"; // String | 
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.getCheckerResults(checkerPk, cloudPk, ifcPk, projectPk, (error, data, response) => {
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
 **checkerPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 

### Return type

[**[CheckerResult]**](CheckerResult.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCheckers

> [IfcChecker] getCheckers(cloudPk, ifcPk, projectPk)

Retrieve all checkers of a model

A checker is a link between a checkplan and a model. A checker can launch a check multiple time and store all the results Required scopes: check:read, ifc:read

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

let apiInstance = new BimDataApi.CheckplanApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.getCheckers(cloudPk, ifcPk, projectPk, (error, data, response) => {
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
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 

### Return type

[**[IfcChecker]**](IfcChecker.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCheckplan

> CheckPlan getCheckplan(cloudPk, id, projectPk)

Retrieve one Checkplan

Retrieve one Checkplan Required scopes: check:read

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

let apiInstance = new BimDataApi.CheckplanApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this check plan.
let projectPk = "projectPk_example"; // String | 
apiInstance.getCheckplan(cloudPk, id, projectPk, (error, data, response) => {
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
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this check plan. | 
 **projectPk** | **String**|  | 

### Return type

[**CheckPlan**](CheckPlan.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCheckplans

> [CheckPlan] getCheckplans(cloudPk, projectPk)

Retrieve all Checkplans

Retrieve all Checkplans Required scopes: check:read

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

let apiInstance = new BimDataApi.CheckplanApi();
let cloudPk = "cloudPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.getCheckplans(cloudPk, projectPk, (error, data, response) => {
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
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 

### Return type

[**[CheckPlan]**](CheckPlan.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRule

> Rule getRule(checkPlanPk, cloudPk, id, projectPk, rulesetPk)

Retrieve one Rule

Retrieve one Rule Required scopes: check:read

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

let apiInstance = new BimDataApi.CheckplanApi();
let checkPlanPk = "checkPlanPk_example"; // String | 
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this rule.
let projectPk = "projectPk_example"; // String | 
let rulesetPk = "rulesetPk_example"; // String | 
apiInstance.getRule(checkPlanPk, cloudPk, id, projectPk, rulesetPk, (error, data, response) => {
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
 **checkPlanPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this rule. | 
 **projectPk** | **String**|  | 
 **rulesetPk** | **String**|  | 

### Return type

[**Rule**](Rule.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRuleComponent

> RuleComponent getRuleComponent(checkPlanPk, cloudPk, id, projectPk, rulePk, rulesetPk)

Retrieve one RuleComponent

Retrieve one RuleComponent Required scopes: check:read

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

let apiInstance = new BimDataApi.CheckplanApi();
let checkPlanPk = "checkPlanPk_example"; // String | 
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this rule component.
let projectPk = "projectPk_example"; // String | 
let rulePk = "rulePk_example"; // String | 
let rulesetPk = "rulesetPk_example"; // String | 
apiInstance.getRuleComponent(checkPlanPk, cloudPk, id, projectPk, rulePk, rulesetPk, (error, data, response) => {
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
 **checkPlanPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this rule component. | 
 **projectPk** | **String**|  | 
 **rulePk** | **String**|  | 
 **rulesetPk** | **String**|  | 

### Return type

[**RuleComponent**](RuleComponent.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRuleComponents

> [RuleComponent] getRuleComponents(checkPlanPk, cloudPk, projectPk, rulePk, rulesetPk)

Retrieve all RuleComponents

Retrieve all RuleComponents Required scopes: check:read

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

let apiInstance = new BimDataApi.CheckplanApi();
let checkPlanPk = "checkPlanPk_example"; // String | 
let cloudPk = "cloudPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let rulePk = "rulePk_example"; // String | 
let rulesetPk = "rulesetPk_example"; // String | 
apiInstance.getRuleComponents(checkPlanPk, cloudPk, projectPk, rulePk, rulesetPk, (error, data, response) => {
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
 **checkPlanPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **rulePk** | **String**|  | 
 **rulesetPk** | **String**|  | 

### Return type

[**[RuleComponent]**](RuleComponent.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRules

> [Rule] getRules(checkPlanPk, cloudPk, projectPk, rulesetPk)

Retrieve all Rules

Retrieve all Rules Required scopes: check:read

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

let apiInstance = new BimDataApi.CheckplanApi();
let checkPlanPk = "checkPlanPk_example"; // String | 
let cloudPk = "cloudPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let rulesetPk = "rulesetPk_example"; // String | 
apiInstance.getRules(checkPlanPk, cloudPk, projectPk, rulesetPk, (error, data, response) => {
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
 **checkPlanPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **rulesetPk** | **String**|  | 

### Return type

[**[Rule]**](Rule.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRuleset

> Ruleset getRuleset(checkPlanPk, cloudPk, id, projectPk)

Retrieve one Ruleset

Retrieve one Ruleset Required scopes: check:read

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

let apiInstance = new BimDataApi.CheckplanApi();
let checkPlanPk = "checkPlanPk_example"; // String | 
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this ruleset.
let projectPk = "projectPk_example"; // String | 
apiInstance.getRuleset(checkPlanPk, cloudPk, id, projectPk, (error, data, response) => {
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
 **checkPlanPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this ruleset. | 
 **projectPk** | **String**|  | 

### Return type

[**Ruleset**](Ruleset.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRulesets

> [Ruleset] getRulesets(checkPlanPk, cloudPk, projectPk)

Retrieve all Rulesets

Retrieve all Rulesets Required scopes: check:read

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

let apiInstance = new BimDataApi.CheckplanApi();
let checkPlanPk = "checkPlanPk_example"; // String | 
let cloudPk = "cloudPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.getRulesets(checkPlanPk, cloudPk, projectPk, (error, data, response) => {
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
 **checkPlanPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 

### Return type

[**[Ruleset]**](Ruleset.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## launchNewCheck

> launchNewCheck(cloudPk, id, ifcPk, projectPk, data)

Launch a new check on the model

Starts a new check in the checker Required scopes: check:write, ifc:read

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

let apiInstance = new BimDataApi.CheckplanApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this ifc checker.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = new BimDataApi.IfcChecker(); // IfcChecker | 
apiInstance.launchNewCheck(cloudPk, id, ifcPk, projectPk, data, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this ifc checker. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **data** | [**IfcChecker**](IfcChecker.md)|  | 

### Return type

null (empty response body)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## updateChecker

> IfcChecker updateChecker(cloudPk, id, ifcPk, projectPk, data)

Update some fields of a checker of a model

A checker is a link between a checkplan and a model. A checker can launch a check multiple time and store all the results Required scopes: check:write, ifc:read

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

let apiInstance = new BimDataApi.CheckplanApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this ifc checker.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = new BimDataApi.IfcChecker(); // IfcChecker | 
apiInstance.updateChecker(cloudPk, id, ifcPk, projectPk, data, (error, data, response) => {
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
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this ifc checker. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **data** | [**IfcChecker**](IfcChecker.md)|  | 

### Return type

[**IfcChecker**](IfcChecker.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateCheckerResult

> CheckerResult updateCheckerResult(checkerPk, cloudPk, id, ifcPk, projectPk, data)

Update some fields of a CheckerResult

Update some fields of a CheckerResult Required scopes: check:write

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

let apiInstance = new BimDataApi.CheckplanApi();
let checkerPk = "checkerPk_example"; // String | 
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this checker result.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = new BimDataApi.CheckerResult(); // CheckerResult | 
apiInstance.updateCheckerResult(checkerPk, cloudPk, id, ifcPk, projectPk, data, (error, data, response) => {
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
 **checkerPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this checker result. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **data** | [**CheckerResult**](CheckerResult.md)|  | 

### Return type

[**CheckerResult**](CheckerResult.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateCheckplan

> CheckPlan updateCheckplan(cloudPk, id, projectPk, data)

Update some fields of a Checkplan

Update some fields of a Checkplan Required scopes: check:write

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

let apiInstance = new BimDataApi.CheckplanApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this check plan.
let projectPk = "projectPk_example"; // String | 
let data = new BimDataApi.CheckPlan(); // CheckPlan | 
apiInstance.updateCheckplan(cloudPk, id, projectPk, data, (error, data, response) => {
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
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this check plan. | 
 **projectPk** | **String**|  | 
 **data** | [**CheckPlan**](CheckPlan.md)|  | 

### Return type

[**CheckPlan**](CheckPlan.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateRule

> Rule updateRule(checkPlanPk, cloudPk, id, projectPk, rulesetPk, data)

Update some fields of a Rule

Update some fields of a Rule Required scopes: check:write

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

let apiInstance = new BimDataApi.CheckplanApi();
let checkPlanPk = "checkPlanPk_example"; // String | 
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this rule.
let projectPk = "projectPk_example"; // String | 
let rulesetPk = "rulesetPk_example"; // String | 
let data = new BimDataApi.Rule(); // Rule | 
apiInstance.updateRule(checkPlanPk, cloudPk, id, projectPk, rulesetPk, data, (error, data, response) => {
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
 **checkPlanPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this rule. | 
 **projectPk** | **String**|  | 
 **rulesetPk** | **String**|  | 
 **data** | [**Rule**](Rule.md)|  | 

### Return type

[**Rule**](Rule.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateRuleComponent

> RuleComponent updateRuleComponent(checkPlanPk, cloudPk, id, projectPk, rulePk, rulesetPk, data)

Update some fields of a RuleComponent

Update some fields of a RuleComponent Required scopes: check:write

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

let apiInstance = new BimDataApi.CheckplanApi();
let checkPlanPk = "checkPlanPk_example"; // String | 
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this rule component.
let projectPk = "projectPk_example"; // String | 
let rulePk = "rulePk_example"; // String | 
let rulesetPk = "rulesetPk_example"; // String | 
let data = new BimDataApi.RuleComponent(); // RuleComponent | 
apiInstance.updateRuleComponent(checkPlanPk, cloudPk, id, projectPk, rulePk, rulesetPk, data, (error, data, response) => {
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
 **checkPlanPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this rule component. | 
 **projectPk** | **String**|  | 
 **rulePk** | **String**|  | 
 **rulesetPk** | **String**|  | 
 **data** | [**RuleComponent**](RuleComponent.md)|  | 

### Return type

[**RuleComponent**](RuleComponent.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateRuleset

> Ruleset updateRuleset(checkPlanPk, cloudPk, id, projectPk, data)

Update some fields of a Ruleset

Update some fields of a Ruleset Required scopes: check:write

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

let apiInstance = new BimDataApi.CheckplanApi();
let checkPlanPk = "checkPlanPk_example"; // String | 
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this ruleset.
let projectPk = "projectPk_example"; // String | 
let data = new BimDataApi.Ruleset(); // Ruleset | 
apiInstance.updateRuleset(checkPlanPk, cloudPk, id, projectPk, data, (error, data, response) => {
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
 **checkPlanPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this ruleset. | 
 **projectPk** | **String**|  | 
 **data** | [**Ruleset**](Ruleset.md)|  | 

### Return type

[**Ruleset**](Ruleset.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


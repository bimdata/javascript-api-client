# bimdata.IfcApi

All URIs are relative to *https://api-staging.bimdata.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bulkDeleteIfcClassifications**](IfcApi.md#bulkDeleteIfcClassifications) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/classification/list_destroy | 
[**bulkDeleteIfcProperties**](IfcApi.md#bulkDeleteIfcProperties) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/property/bulk_destroy | 
[**bulkDeleteIfcPropertyDefinitions**](IfcApi.md#bulkDeleteIfcPropertyDefinitions) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/propertydefinition/bulk_destroy | 
[**bulkDeleteIfcUnits**](IfcApi.md#bulkDeleteIfcUnits) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/unit/bulk_destroy | 
[**bulkDeletePropertySet**](IfcApi.md#bulkDeletePropertySet) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/propertyset/bulk_destroy | 
[**bulkFullUpdateElements**](IfcApi.md#bulkFullUpdateElements) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/bulk_update | 
[**bulkFullUpdateIfcProperty**](IfcApi.md#bulkFullUpdateIfcProperty) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/property/bulk_update | 
[**bulkRemoveClassificationsOfElement**](IfcApi.md#bulkRemoveClassificationsOfElement) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/classification/bulk_destroy | 
[**bulkRemoveElementsFromClassification**](IfcApi.md#bulkRemoveElementsFromClassification) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/classification/{ifc_classification_pk}/element/bulk_destroy | 
[**bulkUpdateElements**](IfcApi.md#bulkUpdateElements) | **PUT** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/bulk_update | 
[**bulkUpdateIfcProperty**](IfcApi.md#bulkUpdateIfcProperty) | **PUT** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/property/bulk_update | 
[**createClassificationElementRelations**](IfcApi.md#createClassificationElementRelations) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/classification-element | 
[**createClassificationsOfElement**](IfcApi.md#createClassificationsOfElement) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/classification | 
[**createElement**](IfcApi.md#createElement) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element | 
[**createElementPropertySet**](IfcApi.md#createElementPropertySet) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/propertyset | 
[**createElementPropertySetProperty**](IfcApi.md#createElementPropertySetProperty) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/propertyset/{propertyset_pk}/property | 
[**createElementPropertySetPropertyDefinition**](IfcApi.md#createElementPropertySetPropertyDefinition) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/propertyset/{propertyset_pk}/property/{property_pk}/propertydefinition | 
[**createElementPropertySetPropertyDefinitionUnit**](IfcApi.md#createElementPropertySetPropertyDefinitionUnit) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/propertyset/{propertyset_pk}/property/{property_pk}/propertydefinition/{propertydefinition_pk}/unit | 
[**createIfcPropertyDefinition**](IfcApi.md#createIfcPropertyDefinition) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/propertydefinition | 
[**createIfcUnit**](IfcApi.md#createIfcUnit) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/unit | 
[**createPropertySet**](IfcApi.md#createPropertySet) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/propertyset | 
[**createPropertySetElementRelations**](IfcApi.md#createPropertySetElementRelations) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/propertyset-element | 
[**createRawElements**](IfcApi.md#createRawElements) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/raw | 
[**createSpace**](IfcApi.md#createSpace) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/space | 
[**createZone**](IfcApi.md#createZone) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/zone | 
[**createZoneSpace**](IfcApi.md#createZoneSpace) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/zone/{zone_pk}/space | 
[**deleteElement**](IfcApi.md#deleteElement) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{uuid} | 
[**deleteIfc**](IfcApi.md#deleteIfc) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{id} | 
[**deleteIfcProperty**](IfcApi.md#deleteIfcProperty) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/property/{id} | 
[**deleteIfcPropertyDefinition**](IfcApi.md#deleteIfcPropertyDefinition) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/propertydefinition/{id} | 
[**deleteIfcUnit**](IfcApi.md#deleteIfcUnit) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/unit/{id} | 
[**deletePropertySet**](IfcApi.md#deletePropertySet) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/propertyset/{id} | 
[**deleteSpace**](IfcApi.md#deleteSpace) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/space/{id} | 
[**deleteZone**](IfcApi.md#deleteZone) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/zone/{id} | 
[**deleteZoneSpace**](IfcApi.md#deleteZoneSpace) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/zone/{zone_pk}/space/{id} | 
[**fullUpdateElement**](IfcApi.md#fullUpdateElement) | **PUT** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{uuid} | 
[**fullUpdateIfc**](IfcApi.md#fullUpdateIfc) | **PUT** /cloud/{cloud_pk}/project/{project_pk}/ifc/{id} | 
[**fullUpdateIfcProperty**](IfcApi.md#fullUpdateIfcProperty) | **PUT** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/property/{id} | 
[**fullUpdateIfcPropertyDefinition**](IfcApi.md#fullUpdateIfcPropertyDefinition) | **PUT** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/propertydefinition/{id} | 
[**fullUpdateIfcUnit**](IfcApi.md#fullUpdateIfcUnit) | **PUT** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/unit/{id} | 
[**fullUpdatePropertySet**](IfcApi.md#fullUpdatePropertySet) | **PUT** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/propertyset/{id} | 
[**fullUpdateSpace**](IfcApi.md#fullUpdateSpace) | **PUT** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/space/{id} | 
[**fullUpdateZone**](IfcApi.md#fullUpdateZone) | **PUT** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/zone/{id} | 
[**fullUpdateZoneSpace**](IfcApi.md#fullUpdateZoneSpace) | **PUT** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/zone/{zone_pk}/space/{id} | 
[**getClassificationsOfElement**](IfcApi.md#getClassificationsOfElement) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/classification | 
[**getElement**](IfcApi.md#getElement) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{uuid} | 
[**getElementPropertySet**](IfcApi.md#getElementPropertySet) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/propertyset/{id} | 
[**getElementPropertySetProperties**](IfcApi.md#getElementPropertySetProperties) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/propertyset/{propertyset_pk}/property | 
[**getElementPropertySetProperty**](IfcApi.md#getElementPropertySetProperty) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/propertyset/{propertyset_pk}/property/{id} | 
[**getElementPropertySetPropertyDefinition**](IfcApi.md#getElementPropertySetPropertyDefinition) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/propertyset/{propertyset_pk}/property/{property_pk}/propertydefinition/{id} | 
[**getElementPropertySetPropertyDefinitionUnit**](IfcApi.md#getElementPropertySetPropertyDefinitionUnit) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/propertyset/{propertyset_pk}/property/{property_pk}/propertydefinition/{propertydefinition_pk}/unit/{id} | 
[**getElementPropertySetPropertyDefinitionUnits**](IfcApi.md#getElementPropertySetPropertyDefinitionUnits) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/propertyset/{propertyset_pk}/property/{property_pk}/propertydefinition/{propertydefinition_pk}/unit | 
[**getElementPropertySetPropertyDefinitions**](IfcApi.md#getElementPropertySetPropertyDefinitions) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/propertyset/{propertyset_pk}/property/{property_pk}/propertydefinition | 
[**getElementPropertySets**](IfcApi.md#getElementPropertySets) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/propertyset | 
[**getElements**](IfcApi.md#getElements) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element | 
[**getElementsFromClassification**](IfcApi.md#getElementsFromClassification) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/classification/{ifc_classification_pk}/element | 
[**getIfc**](IfcApi.md#getIfc) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{id} | 
[**getIfcBVH**](IfcApi.md#getIfcBVH) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{id}/bvh | 
[**getIfcClassifications**](IfcApi.md#getIfcClassifications) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/classification | 
[**getIfcGLTF**](IfcApi.md#getIfcGLTF) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{id}/gltf | 
[**getIfcMap**](IfcApi.md#getIfcMap) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{id}/map | 
[**getIfcProperties**](IfcApi.md#getIfcProperties) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/property | 
[**getIfcProperty**](IfcApi.md#getIfcProperty) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/property/{id} | 
[**getIfcPropertyDefinition**](IfcApi.md#getIfcPropertyDefinition) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/propertydefinition/{id} | 
[**getIfcPropertyDefinitions**](IfcApi.md#getIfcPropertyDefinitions) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/propertydefinition | 
[**getIfcStructure**](IfcApi.md#getIfcStructure) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{id}/structure | 
[**getIfcSystems**](IfcApi.md#getIfcSystems) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{id}/systems | 
[**getIfcUnit**](IfcApi.md#getIfcUnit) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/unit/{id} | 
[**getIfcUnits**](IfcApi.md#getIfcUnits) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/unit | 
[**getIfcs**](IfcApi.md#getIfcs) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc | 
[**getPropertySet**](IfcApi.md#getPropertySet) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/propertyset/{id} | 
[**getPropertySets**](IfcApi.md#getPropertySets) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/propertyset | 
[**getRawElements**](IfcApi.md#getRawElements) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/raw | 
[**getSpace**](IfcApi.md#getSpace) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/space/{id} | 
[**getSpaces**](IfcApi.md#getSpaces) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/space | 
[**getZone**](IfcApi.md#getZone) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/zone/{id} | 
[**getZoneSpace**](IfcApi.md#getZoneSpace) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/zone/{zone_pk}/space/{id} | 
[**getZoneSpaces**](IfcApi.md#getZoneSpaces) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/zone/{zone_pk}/space | 
[**getZones**](IfcApi.md#getZones) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/zone | 
[**removeClassificationOfElement**](IfcApi.md#removeClassificationOfElement) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/classification/{id} | 
[**removeElementPropertySet**](IfcApi.md#removeElementPropertySet) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/propertyset/{id} | 
[**removeElementPropertySetProperty**](IfcApi.md#removeElementPropertySetProperty) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/propertyset/{propertyset_pk}/property/{id} | 
[**removeElementPropertySetPropertyDefinition**](IfcApi.md#removeElementPropertySetPropertyDefinition) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/propertyset/{propertyset_pk}/property/{property_pk}/propertydefinition/{id} | 
[**removeElementPropertySetPropertyDefinitionUnit**](IfcApi.md#removeElementPropertySetPropertyDefinitionUnit) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/propertyset/{propertyset_pk}/property/{property_pk}/propertydefinition/{propertydefinition_pk}/unit/{id} | 
[**removeElementsFromClassification**](IfcApi.md#removeElementsFromClassification) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/classification/{ifc_classification_pk}/element/{uuid} | 
[**updateElement**](IfcApi.md#updateElement) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{uuid} | 
[**updateIfc**](IfcApi.md#updateIfc) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{id} | 
[**updateIfcFiles**](IfcApi.md#updateIfcFiles) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{id}/files | 
[**updateIfcProperty**](IfcApi.md#updateIfcProperty) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/property/{id} | 
[**updateIfcPropertyDefinition**](IfcApi.md#updateIfcPropertyDefinition) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/propertydefinition/{id} | 
[**updateIfcUnit**](IfcApi.md#updateIfcUnit) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/unit/{id} | 
[**updatePropertySet**](IfcApi.md#updatePropertySet) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/propertyset/{id} | 
[**updateSpace**](IfcApi.md#updateSpace) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/space/{id} | 
[**updateZone**](IfcApi.md#updateZone) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/zone/{id} | 
[**updateZoneSpace**](IfcApi.md#updateZoneSpace) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/zone/{zone_pk}/space/{id} | 


<a name="bulkDeleteIfcClassifications"></a>
# **bulkDeleteIfcClassifications**
> bulkDeleteIfcClassifications(projectPk, cloudPk, ifcPk)



             Delete relation between filtered classifications (eg. /classifications?name&#x3D;untec) and all ifc&#39;s elements.             No classification will be deleted on this endpoint, only the relation between ifc&#39;s elements and their classification.         

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.bulkDeleteIfcClassifications(projectPk, cloudPk, ifcPk, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bulkDeleteIfcProperties"></a>
# **bulkDeleteIfcProperties**
> bulkDeleteIfcProperties(projectPk, cloudPk, ifcPk)



         Bulk delete.         You should send a list of ids in the body.         These ids (or relations with these ids in case of many-to-many relation deletion) will be deleted     

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.bulkDeleteIfcProperties(projectPk, cloudPk, ifcPk, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bulkDeleteIfcPropertyDefinitions"></a>
# **bulkDeleteIfcPropertyDefinitions**
> bulkDeleteIfcPropertyDefinitions(projectPk, cloudPk, ifcPk)



         Bulk delete.         You should send a list of ids in the body.         These ids (or relations with these ids in case of many-to-many relation deletion) will be deleted     

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.bulkDeleteIfcPropertyDefinitions(projectPk, cloudPk, ifcPk, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bulkDeleteIfcUnits"></a>
# **bulkDeleteIfcUnits**
> bulkDeleteIfcUnits(projectPk, cloudPk, ifcPk)



         Bulk delete.         You should send a list of ids in the body.         These ids (or relations with these ids in case of many-to-many relation deletion) will be deleted     

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.bulkDeleteIfcUnits(projectPk, cloudPk, ifcPk, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bulkDeletePropertySet"></a>
# **bulkDeletePropertySet**
> bulkDeletePropertySet(projectPk, cloudPk, ifcPk)



         Bulk delete.         You should send a list of ids in the body.         These ids (or relations with these ids in case of many-to-many relation deletion) will be deleted     

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.bulkDeletePropertySet(projectPk, cloudPk, ifcPk, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bulkFullUpdateElements"></a>
# **bulkFullUpdateElements**
> [Element] bulkFullUpdateElements(projectPk, cloudPk, ifcPk, data)



         Bulk update.         Similar to update, but the body should be a list of objects to patch or put         The response will be a list (in the same order) of updated objects or of errors if any         If at least one update succeeded, the status code will be 200. If every update failed, the status code we&#39;ll be 400 with the list of errors     

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var data = [new bimdata.Element()]; // [Element] | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bulkFullUpdateElements(projectPk, cloudPk, ifcPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **data** | [**[Element]**](Element.md)|  | 

### Return type

[**[Element]**](Element.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bulkFullUpdateIfcProperty"></a>
# **bulkFullUpdateIfcProperty**
> [Property] bulkFullUpdateIfcProperty(projectPk, cloudPk, ifcPk, data)



         Bulk update.         Similar to update, but the body should be a list of objects to patch or put         The response will be a list (in the same order) of updated objects or of errors if any         If at least one update succeeded, the status code will be 200. If every update failed, the status code we&#39;ll be 400 with the list of errors     

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var data = [new bimdata.Property()]; // [Property] | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bulkFullUpdateIfcProperty(projectPk, cloudPk, ifcPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **data** | [**[Property]**](Property.md)|  | 

### Return type

[**[Property]**](Property.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bulkRemoveClassificationsOfElement"></a>
# **bulkRemoveClassificationsOfElement**
> bulkRemoveClassificationsOfElement(projectPk, elementUuid, cloudPk, ifcPk)



         Bulk delete.         You should send a list of ids in the body.         These ids (or relations with these ids in case of many-to-many relation deletion) will be deleted     

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var projectPk = "projectPk_example"; // String | 

var elementUuid = "elementUuid_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.bulkRemoveClassificationsOfElement(projectPk, elementUuid, cloudPk, ifcPk, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **elementUuid** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bulkRemoveElementsFromClassification"></a>
# **bulkRemoveElementsFromClassification**
> bulkRemoveElementsFromClassification(projectPk, cloudPk, ifcPk, ifcClassificationPk)



         Bulk delete.         You should send a list of ids in the body.         These ids (or relations with these ids in case of many-to-many relation deletion) will be deleted     

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var ifcClassificationPk = "ifcClassificationPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.bulkRemoveElementsFromClassification(projectPk, cloudPk, ifcPk, ifcClassificationPk, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **ifcClassificationPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bulkUpdateElements"></a>
# **bulkUpdateElements**
> [Element] bulkUpdateElements(projectPk, cloudPk, ifcPk, data)



         Bulk update.         Similar to update, but the body should be a list of objects to patch or put         The response will be a list (in the same order) of updated objects or of errors if any         If at least one update succeeded, the status code will be 200. If every update failed, the status code we&#39;ll be 400 with the list of errors     

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var data = [new bimdata.Element()]; // [Element] | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bulkUpdateElements(projectPk, cloudPk, ifcPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **data** | [**[Element]**](Element.md)|  | 

### Return type

[**[Element]**](Element.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bulkUpdateIfcProperty"></a>
# **bulkUpdateIfcProperty**
> [Property] bulkUpdateIfcProperty(projectPk, cloudPk, ifcPk, data)



         Bulk update.         Similar to update, but the body should be a list of objects to patch or put         The response will be a list (in the same order) of updated objects or of errors if any         If at least one update succeeded, the status code will be 200. If every update failed, the status code we&#39;ll be 400 with the list of errors     

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var data = [new bimdata.Property()]; // [Property] | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bulkUpdateIfcProperty(projectPk, cloudPk, ifcPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **data** | [**[Property]**](Property.md)|  | 

### Return type

[**[Property]**](Property.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createClassificationElementRelations"></a>
# **createClassificationElementRelations**
> createClassificationElementRelations(projectPk, cloudPk, ifcPk, data)



         create association between existing classification and existing element     

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var data = [new bimdata.ElementClassificationRelation()]; // [ElementClassificationRelation] | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createClassificationElementRelations(projectPk, cloudPk, ifcPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **data** | [**[ElementClassificationRelation]**](ElementClassificationRelation.md)|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createClassificationsOfElement"></a>
# **createClassificationsOfElement**
> [Classification] createClassificationsOfElement(projectPk, elementUuid, cloudPk, ifcPk, data)



         Bulk create available.         You can either post an object or a list of objects.         Is you post a list, the response will be a list (in the same order) of created objects or of errors if any         If at least one create succeeded, the status code will be 201. If every create failed, the status code we&#39;ll be 400 with the list of errors          If classification created already exists, it will just be added to item&#39;s classifications and will not be duplicated     

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var projectPk = "projectPk_example"; // String | 

var elementUuid = "elementUuid_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var data = [new bimdata.Classification()]; // [Classification] | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createClassificationsOfElement(projectPk, elementUuid, cloudPk, ifcPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **elementUuid** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **data** | [**[Classification]**](Classification.md)|  | 

### Return type

[**[Classification]**](Classification.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createElement"></a>
# **createElement**
> [Element] createElement(projectPk, cloudPk, ifcPk, data)



         Bulk create available.         You can either post an object or a list of objects.         Is you post a list, the response will be a list (in the same order) of created objects or of errors if any         If at least one create succeeded, the status code will be 201. If every create failed, the status code we&#39;ll be 400 with the list of errors     

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var data = [new bimdata.Element()]; // [Element] | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createElement(projectPk, cloudPk, ifcPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **data** | [**[Element]**](Element.md)|  | 

### Return type

[**[Element]**](Element.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createElementPropertySet"></a>
# **createElementPropertySet**
> createElementPropertySet(projectPk, elementUuid, cloudPk, ifcPk, data)



         Create an property_set that will be automatically linked to the element     

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var projectPk = "projectPk_example"; // String | 

var elementUuid = "elementUuid_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var data = new bimdata.PropertySet(); // PropertySet | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createElementPropertySet(projectPk, elementUuid, cloudPk, ifcPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **elementUuid** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **data** | [**PropertySet**](PropertySet.md)|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createElementPropertySetProperty"></a>
# **createElementPropertySetProperty**
> Property createElementPropertySetProperty(elementUuid, propertysetPk, projectPk, cloudPk, ifcPk, data)





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var elementUuid = "elementUuid_example"; // String | 

var propertysetPk = "propertysetPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var data = new bimdata.Property(); // Property | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createElementPropertySetProperty(elementUuid, propertysetPk, projectPk, cloudPk, ifcPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **elementUuid** | **String**|  | 
 **propertysetPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **data** | [**Property**](Property.md)|  | 

### Return type

[**Property**](Property.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createElementPropertySetPropertyDefinition"></a>
# **createElementPropertySetPropertyDefinition**
> PropertyDefinition createElementPropertySetPropertyDefinition(elementUuid, propertysetPk, projectPk, propertyPk, cloudPk, ifcPk, data)





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var elementUuid = "elementUuid_example"; // String | 

var propertysetPk = "propertysetPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var propertyPk = "propertyPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var data = new bimdata.PropertyDefinition(); // PropertyDefinition | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createElementPropertySetPropertyDefinition(elementUuid, propertysetPk, projectPk, propertyPk, cloudPk, ifcPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **elementUuid** | **String**|  | 
 **propertysetPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **propertyPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **data** | [**PropertyDefinition**](PropertyDefinition.md)|  | 

### Return type

[**PropertyDefinition**](PropertyDefinition.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createElementPropertySetPropertyDefinitionUnit"></a>
# **createElementPropertySetPropertyDefinitionUnit**
> Unit createElementPropertySetPropertyDefinitionUnit(elementUuid, propertydefinitionPk, propertysetPk, projectPk, propertyPk, cloudPk, ifcPk, data)





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var elementUuid = "elementUuid_example"; // String | 

var propertydefinitionPk = "propertydefinitionPk_example"; // String | 

var propertysetPk = "propertysetPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var propertyPk = "propertyPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var data = new bimdata.Unit(); // Unit | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createElementPropertySetPropertyDefinitionUnit(elementUuid, propertydefinitionPk, propertysetPk, projectPk, propertyPk, cloudPk, ifcPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **elementUuid** | **String**|  | 
 **propertydefinitionPk** | **String**|  | 
 **propertysetPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **propertyPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **data** | [**Unit**](Unit.md)|  | 

### Return type

[**Unit**](Unit.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createIfcPropertyDefinition"></a>
# **createIfcPropertyDefinition**
> [PropertyDefinition] createIfcPropertyDefinition(projectPk, cloudPk, ifcPk, data)



         Bulk create available.         You can either post an object or a list of objects.         Is you post a list, the response will be a list (in the same order) of created objects or of errors if any         If at least one create succeeded, the status code will be 201. If every create failed, the status code we&#39;ll be 400 with the list of errors          If classification created already exists, it will just be added to item&#39;s classifications and will not be duplicated     

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var data = [new bimdata.PropertyDefinition()]; // [PropertyDefinition] | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createIfcPropertyDefinition(projectPk, cloudPk, ifcPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **data** | [**[PropertyDefinition]**](PropertyDefinition.md)|  | 

### Return type

[**[PropertyDefinition]**](PropertyDefinition.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createIfcUnit"></a>
# **createIfcUnit**
> [Unit] createIfcUnit(projectPk, cloudPk, ifcPk, data)



         Bulk create available.         You can either post an object or a list of objects.         Is you post a list, the response will be a list (in the same order) of created objects or of errors if any         If at least one create succeeded, the status code will be 201. If every create failed, the status code we&#39;ll be 400 with the list of errors          If classification created already exists, it will just be added to item&#39;s classifications and will not be duplicated     

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var data = [new bimdata.Unit()]; // [Unit] | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createIfcUnit(projectPk, cloudPk, ifcPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **data** | [**[Unit]**](Unit.md)|  | 

### Return type

[**[Unit]**](Unit.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createPropertySet"></a>
# **createPropertySet**
> [PropertySet] createPropertySet(projectPk, cloudPk, ifcPk, data)



         Bulk create available.         You can either post an object or a list of objects.         Is you post a list, the response will be a list (in the same order) of created objects or of errors if any         If at least one create succeeded, the status code will be 201. If every create failed, the status code we&#39;ll be 400 with the list of errors          If classification created already exists, it will just be added to item&#39;s classifications and will not be duplicated     

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var data = [new bimdata.PropertySet()]; // [PropertySet] | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createPropertySet(projectPk, cloudPk, ifcPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **data** | [**[PropertySet]**](PropertySet.md)|  | 

### Return type

[**[PropertySet]**](PropertySet.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createPropertySetElementRelations"></a>
# **createPropertySetElementRelations**
> createPropertySetElementRelations(projectPk, cloudPk, ifcPk, data)



         create association between existing classification and existing element     

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var data = [new bimdata.ElementPropertySetRelation()]; // [ElementPropertySetRelation] | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createPropertySetElementRelations(projectPk, cloudPk, ifcPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **data** | [**[ElementPropertySetRelation]**](ElementPropertySetRelation.md)|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createRawElements"></a>
# **createRawElements**
> createRawElements(projectPk, cloudPk, ifcPk, data)



         You can use the same optimized structure to post multiple elements ,property_sets, properties, definitions and units at once.         If the structure is malformed, an error 500 without more explaination will be returned         

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var data = new bimdata.Element(); // Element | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createRawElements(projectPk, cloudPk, ifcPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **data** | [**Element**](Element.md)|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createSpace"></a>
# **createSpace**
> Space createSpace(projectPk, cloudPk, ifcPk, data)





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var data = new bimdata.Space(); // Space | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createSpace(projectPk, cloudPk, ifcPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **data** | [**Space**](Space.md)|  | 

### Return type

[**Space**](Space.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createZone"></a>
# **createZone**
> [Zone] createZone(projectPk, cloudPk, ifcPk, data)



         Bulk create available.         You can either post an object or a list of objects.         Is you post a list, the response will be a list (in the same order) of created objects or of errors if any         If at least one create succeeded, the status code will be 201. If every create failed, the status code we&#39;ll be 400 with the list of errors     

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var data = [new bimdata.Element()]; // [Element] | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createZone(projectPk, cloudPk, ifcPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **data** | [**[Element]**](Element.md)|  | 

### Return type

[**[Zone]**](Zone.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createZoneSpace"></a>
# **createZoneSpace**
> ZoneSpace createZoneSpace(projectPk, cloudPk, zonePk, ifcPk, data)





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var zonePk = "zonePk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var data = new bimdata.ZoneSpace(); // ZoneSpace | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createZoneSpace(projectPk, cloudPk, zonePk, ifcPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **zonePk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **data** | [**ZoneSpace**](ZoneSpace.md)|  | 

### Return type

[**ZoneSpace**](ZoneSpace.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteElement"></a>
# **deleteElement**
> deleteElement(projectPk, uuid, cloudPk, ifcPk, )





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var projectPk = "projectPk_example"; // String | 

var uuid = "uuid_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteElement(projectPk, uuid, cloudPk, ifcPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **uuid** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteIfc"></a>
# **deleteIfc**
> deleteIfc(projectPk, cloudPk, id, )





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

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
apiInstance.deleteIfc(projectPk, cloudPk, id, , callback);
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

<a name="deleteIfcProperty"></a>
# **deleteIfcProperty**
> deleteIfcProperty(projectPk, cloudPk, ifcPk, id, )





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

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
apiInstance.deleteIfcProperty(projectPk, cloudPk, ifcPk, id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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

<a name="deleteIfcPropertyDefinition"></a>
# **deleteIfcPropertyDefinition**
> deleteIfcPropertyDefinition(projectPk, cloudPk, ifcPk, id, )





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

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
apiInstance.deleteIfcPropertyDefinition(projectPk, cloudPk, ifcPk, id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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

<a name="deleteIfcUnit"></a>
# **deleteIfcUnit**
> deleteIfcUnit(projectPk, cloudPk, ifcPk, id, )





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

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
apiInstance.deleteIfcUnit(projectPk, cloudPk, ifcPk, id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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

<a name="deletePropertySet"></a>
# **deletePropertySet**
> deletePropertySet(projectPk, cloudPk, ifcPk, id, )





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

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
apiInstance.deletePropertySet(projectPk, cloudPk, ifcPk, id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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

<a name="deleteSpace"></a>
# **deleteSpace**
> deleteSpace(projectPk, cloudPk, ifcPk, id, )





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

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
apiInstance.deleteSpace(projectPk, cloudPk, ifcPk, id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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

<a name="deleteZone"></a>
# **deleteZone**
> deleteZone(projectPk, cloudPk, ifcPk, id, )





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

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
apiInstance.deleteZone(projectPk, cloudPk, ifcPk, id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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

<a name="deleteZoneSpace"></a>
# **deleteZoneSpace**
> deleteZoneSpace(zonePk, projectPk, cloudPk, ifcPk, id, )





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var zonePk = "zonePk_example"; // String | 

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
apiInstance.deleteZoneSpace(zonePk, projectPk, cloudPk, ifcPk, id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zonePk** | **String**|  | 
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

<a name="fullUpdateElement"></a>
# **fullUpdateElement**
> Element fullUpdateElement(projectPk, uuid, cloudPk, ifcPk, data)





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var projectPk = "projectPk_example"; // String | 

var uuid = "uuid_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var data = new bimdata.Element(); // Element | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fullUpdateElement(projectPk, uuid, cloudPk, ifcPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **uuid** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **data** | [**Element**](Element.md)|  | 

### Return type

[**Element**](Element.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdateIfc"></a>
# **fullUpdateIfc**
> Ifc fullUpdateIfc(projectPk, cloudPk, id, data)





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var id = "id_example"; // String | 

var data = new bimdata.Ifc(); // Ifc | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fullUpdateIfc(projectPk, cloudPk, id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **data** | [**Ifc**](Ifc.md)|  | 

### Return type

[**Ifc**](Ifc.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdateIfcProperty"></a>
# **fullUpdateIfcProperty**
> Property fullUpdateIfcProperty(projectPk, cloudPk, ifcPk, id, data)





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var id = "id_example"; // String | 

var data = new bimdata.Property(); // Property | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fullUpdateIfcProperty(projectPk, cloudPk, ifcPk, id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **id** | **String**|  | 
 **data** | [**Property**](Property.md)|  | 

### Return type

[**Property**](Property.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdateIfcPropertyDefinition"></a>
# **fullUpdateIfcPropertyDefinition**
> PropertyDefinition fullUpdateIfcPropertyDefinition(projectPk, cloudPk, ifcPk, id, data)





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var id = "id_example"; // String | 

var data = new bimdata.PropertyDefinition(); // PropertyDefinition | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fullUpdateIfcPropertyDefinition(projectPk, cloudPk, ifcPk, id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **id** | **String**|  | 
 **data** | [**PropertyDefinition**](PropertyDefinition.md)|  | 

### Return type

[**PropertyDefinition**](PropertyDefinition.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdateIfcUnit"></a>
# **fullUpdateIfcUnit**
> Unit fullUpdateIfcUnit(projectPk, cloudPk, ifcPk, id, data)





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var id = "id_example"; // String | 

var data = new bimdata.Unit(); // Unit | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fullUpdateIfcUnit(projectPk, cloudPk, ifcPk, id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **id** | **String**|  | 
 **data** | [**Unit**](Unit.md)|  | 

### Return type

[**Unit**](Unit.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdatePropertySet"></a>
# **fullUpdatePropertySet**
> PropertySet fullUpdatePropertySet(projectPk, cloudPk, ifcPk, id, data)





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var id = "id_example"; // String | 

var data = new bimdata.PropertySet(); // PropertySet | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fullUpdatePropertySet(projectPk, cloudPk, ifcPk, id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **id** | **String**|  | 
 **data** | [**PropertySet**](PropertySet.md)|  | 

### Return type

[**PropertySet**](PropertySet.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdateSpace"></a>
# **fullUpdateSpace**
> Space fullUpdateSpace(projectPk, cloudPk, ifcPk, id, data)





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var id = "id_example"; // String | 

var data = new bimdata.Space(); // Space | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fullUpdateSpace(projectPk, cloudPk, ifcPk, id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **id** | **String**|  | 
 **data** | [**Space**](Space.md)|  | 

### Return type

[**Space**](Space.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdateZone"></a>
# **fullUpdateZone**
> Zone fullUpdateZone(projectPk, cloudPk, ifcPk, id, data)





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var id = "id_example"; // String | 

var data = new bimdata.Zone(); // Zone | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fullUpdateZone(projectPk, cloudPk, ifcPk, id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **id** | **String**|  | 
 **data** | [**Zone**](Zone.md)|  | 

### Return type

[**Zone**](Zone.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdateZoneSpace"></a>
# **fullUpdateZoneSpace**
> ZoneSpace fullUpdateZoneSpace(zonePk, projectPk, cloudPk, ifcPk, id, data)





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var zonePk = "zonePk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var id = "id_example"; // String | 

var data = new bimdata.ZoneSpace(); // ZoneSpace | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fullUpdateZoneSpace(zonePk, projectPk, cloudPk, ifcPk, id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zonePk** | **String**|  | 
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **id** | **String**|  | 
 **data** | [**ZoneSpace**](ZoneSpace.md)|  | 

### Return type

[**ZoneSpace**](ZoneSpace.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getClassificationsOfElement"></a>
# **getClassificationsOfElement**
> [Classification] getClassificationsOfElement(projectPk, elementUuid, cloudPk, ifcPk, )





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var projectPk = "projectPk_example"; // String | 

var elementUuid = "elementUuid_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getClassificationsOfElement(projectPk, elementUuid, cloudPk, ifcPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **elementUuid** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 

### Return type

[**[Classification]**](Classification.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getElement"></a>
# **getElement**
> Element getElement(projectPk, uuid, cloudPk, ifcPk, )





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var projectPk = "projectPk_example"; // String | 

var uuid = "uuid_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getElement(projectPk, uuid, cloudPk, ifcPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **uuid** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 

### Return type

[**Element**](Element.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getElementPropertySet"></a>
# **getElementPropertySet**
> PropertySet getElementPropertySet(elementUuid, projectPk, cloudPk, ifcPk, id)





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var elementUuid = "elementUuid_example"; // String | 

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
apiInstance.getElementPropertySet(elementUuid, projectPk, cloudPk, ifcPk, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **elementUuid** | **String**|  | 
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **id** | **String**|  | 

### Return type

[**PropertySet**](PropertySet.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getElementPropertySetProperties"></a>
# **getElementPropertySetProperties**
> [Property] getElementPropertySetProperties(elementUuid, propertysetPk, projectPk, cloudPk, ifcPk, )





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var elementUuid = "elementUuid_example"; // String | 

var propertysetPk = "propertysetPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getElementPropertySetProperties(elementUuid, propertysetPk, projectPk, cloudPk, ifcPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **elementUuid** | **String**|  | 
 **propertysetPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 

### Return type

[**[Property]**](Property.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getElementPropertySetProperty"></a>
# **getElementPropertySetProperty**
> Property getElementPropertySetProperty(elementUuid, propertysetPk, projectPk, cloudPk, ifcPk, id)





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var elementUuid = "elementUuid_example"; // String | 

var propertysetPk = "propertysetPk_example"; // String | 

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
apiInstance.getElementPropertySetProperty(elementUuid, propertysetPk, projectPk, cloudPk, ifcPk, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **elementUuid** | **String**|  | 
 **propertysetPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **id** | **String**|  | 

### Return type

[**Property**](Property.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getElementPropertySetPropertyDefinition"></a>
# **getElementPropertySetPropertyDefinition**
> PropertyDefinition getElementPropertySetPropertyDefinition(elementUuid, propertysetPk, projectPk, propertyPk, cloudPk, ifcPk, id)





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var elementUuid = "elementUuid_example"; // String | 

var propertysetPk = "propertysetPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var propertyPk = "propertyPk_example"; // String | 

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
apiInstance.getElementPropertySetPropertyDefinition(elementUuid, propertysetPk, projectPk, propertyPk, cloudPk, ifcPk, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **elementUuid** | **String**|  | 
 **propertysetPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **propertyPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **id** | **String**|  | 

### Return type

[**PropertyDefinition**](PropertyDefinition.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getElementPropertySetPropertyDefinitionUnit"></a>
# **getElementPropertySetPropertyDefinitionUnit**
> Unit getElementPropertySetPropertyDefinitionUnit(elementUuid, propertydefinitionPk, propertysetPk, projectPk, propertyPk, cloudPk, ifcPk, id)





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var elementUuid = "elementUuid_example"; // String | 

var propertydefinitionPk = "propertydefinitionPk_example"; // String | 

var propertysetPk = "propertysetPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var propertyPk = "propertyPk_example"; // String | 

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
apiInstance.getElementPropertySetPropertyDefinitionUnit(elementUuid, propertydefinitionPk, propertysetPk, projectPk, propertyPk, cloudPk, ifcPk, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **elementUuid** | **String**|  | 
 **propertydefinitionPk** | **String**|  | 
 **propertysetPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **propertyPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **id** | **String**|  | 

### Return type

[**Unit**](Unit.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getElementPropertySetPropertyDefinitionUnits"></a>
# **getElementPropertySetPropertyDefinitionUnits**
> [Unit] getElementPropertySetPropertyDefinitionUnits(elementUuid, propertydefinitionPk, propertysetPk, projectPk, propertyPk, cloudPk, ifcPk, )





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var elementUuid = "elementUuid_example"; // String | 

var propertydefinitionPk = "propertydefinitionPk_example"; // String | 

var propertysetPk = "propertysetPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var propertyPk = "propertyPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getElementPropertySetPropertyDefinitionUnits(elementUuid, propertydefinitionPk, propertysetPk, projectPk, propertyPk, cloudPk, ifcPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **elementUuid** | **String**|  | 
 **propertydefinitionPk** | **String**|  | 
 **propertysetPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **propertyPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 

### Return type

[**[Unit]**](Unit.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getElementPropertySetPropertyDefinitions"></a>
# **getElementPropertySetPropertyDefinitions**
> [PropertyDefinition] getElementPropertySetPropertyDefinitions(elementUuid, propertysetPk, projectPk, propertyPk, cloudPk, ifcPk, )





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var elementUuid = "elementUuid_example"; // String | 

var propertysetPk = "propertysetPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var propertyPk = "propertyPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getElementPropertySetPropertyDefinitions(elementUuid, propertysetPk, projectPk, propertyPk, cloudPk, ifcPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **elementUuid** | **String**|  | 
 **propertysetPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **propertyPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 

### Return type

[**[PropertyDefinition]**](PropertyDefinition.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getElementPropertySets"></a>
# **getElementPropertySets**
> [PropertySet] getElementPropertySets(projectPk, elementUuid, cloudPk, ifcPk, )





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var projectPk = "projectPk_example"; // String | 

var elementUuid = "elementUuid_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getElementPropertySets(projectPk, elementUuid, cloudPk, ifcPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **elementUuid** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 

### Return type

[**[PropertySet]**](PropertySet.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getElements"></a>
# **getElements**
> [Element] getElements(projectPk, cloudPk, ifcPk, )





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getElements(projectPk, cloudPk, ifcPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 

### Return type

[**[Element]**](Element.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getElementsFromClassification"></a>
# **getElementsFromClassification**
> [Element] getElementsFromClassification(projectPk, cloudPk, ifcPk, ifcClassificationPk)





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var ifcClassificationPk = "ifcClassificationPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getElementsFromClassification(projectPk, cloudPk, ifcPk, ifcClassificationPk, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **ifcClassificationPk** | **String**|  | 

### Return type

[**[Element]**](Element.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getIfc"></a>
# **getIfc**
> Ifc getIfc(projectPk, cloudPk, id, )





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

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
apiInstance.getIfc(projectPk, cloudPk, id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 

### Return type

[**Ifc**](Ifc.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getIfcBVH"></a>
# **getIfcBVH**
> getIfcBVH(projectPk, cloudPk, id)



         DEPRECATED: Now, retrieve the file url in the ifc object itself         Returns the bvh file         

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

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
apiInstance.getIfcBVH(projectPk, cloudPk, id, callback);
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

<a name="getIfcClassifications"></a>
# **getIfcClassifications**
> [Classification] getIfcClassifications(projectPk, cloudPk, ifcPk)





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getIfcClassifications(projectPk, cloudPk, ifcPk, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 

### Return type

[**[Classification]**](Classification.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getIfcGLTF"></a>
# **getIfcGLTF**
> getIfcGLTF(projectPk, cloudPk, id)



         DEPRECATED: Now, retrieve the file url in the ifc object itself         Returns the gltf file         

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

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
apiInstance.getIfcGLTF(projectPk, cloudPk, id, callback);
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

<a name="getIfcMap"></a>
# **getIfcMap**
> getIfcMap(projectPk, cloudPk, id)



         DEPRECATED: Now, retrieve the file url in the ifc object itself         Returns the map file         

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

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
apiInstance.getIfcMap(projectPk, cloudPk, id, callback);
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

<a name="getIfcProperties"></a>
# **getIfcProperties**
> [Property] getIfcProperties(projectPk, cloudPk, ifcPk)





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getIfcProperties(projectPk, cloudPk, ifcPk, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 

### Return type

[**[Property]**](Property.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getIfcProperty"></a>
# **getIfcProperty**
> Property getIfcProperty(projectPk, cloudPk, ifcPk, id, )





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

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
apiInstance.getIfcProperty(projectPk, cloudPk, ifcPk, id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **id** | **String**|  | 

### Return type

[**Property**](Property.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getIfcPropertyDefinition"></a>
# **getIfcPropertyDefinition**
> PropertyDefinition getIfcPropertyDefinition(projectPk, cloudPk, ifcPk, id, )





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

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
apiInstance.getIfcPropertyDefinition(projectPk, cloudPk, ifcPk, id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **id** | **String**|  | 

### Return type

[**PropertyDefinition**](PropertyDefinition.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getIfcPropertyDefinitions"></a>
# **getIfcPropertyDefinitions**
> [PropertyDefinition] getIfcPropertyDefinitions(projectPk, cloudPk, ifcPk, )





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getIfcPropertyDefinitions(projectPk, cloudPk, ifcPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 

### Return type

[**[PropertyDefinition]**](PropertyDefinition.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getIfcStructure"></a>
# **getIfcStructure**
> getIfcStructure(projectPk, cloudPk, id)



         DEPRECATED: Now, retrieve the file url in the ifc object itself         Returns the structure file         

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

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
apiInstance.getIfcStructure(projectPk, cloudPk, id, callback);
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

<a name="getIfcSystems"></a>
# **getIfcSystems**
> getIfcSystems(projectPk, cloudPk, id)



         DEPRECATED: Now, retrieve the file url in the ifc object itself         Returns the system file         

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

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
apiInstance.getIfcSystems(projectPk, cloudPk, id, callback);
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

<a name="getIfcUnit"></a>
# **getIfcUnit**
> Unit getIfcUnit(projectPk, cloudPk, ifcPk, id, )





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

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
apiInstance.getIfcUnit(projectPk, cloudPk, ifcPk, id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **id** | **String**|  | 

### Return type

[**Unit**](Unit.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getIfcUnits"></a>
# **getIfcUnits**
> [Unit] getIfcUnits(projectPk, cloudPk, ifcPk, )





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getIfcUnits(projectPk, cloudPk, ifcPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 

### Return type

[**[Unit]**](Unit.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getIfcs"></a>
# **getIfcs**
> [Ifc] getIfcs(projectPk, cloudPk)





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getIfcs(projectPk, cloudPk, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 

### Return type

[**[Ifc]**](Ifc.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPropertySet"></a>
# **getPropertySet**
> PropertySet getPropertySet(projectPk, cloudPk, ifcPk, id, )





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

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
apiInstance.getPropertySet(projectPk, cloudPk, ifcPk, id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **id** | **String**|  | 

### Return type

[**PropertySet**](PropertySet.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPropertySets"></a>
# **getPropertySets**
> [PropertySet] getPropertySets(projectPk, cloudPk, ifcPk, )





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPropertySets(projectPk, cloudPk, ifcPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 

### Return type

[**[PropertySet]**](PropertySet.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRawElements"></a>
# **getRawElements**
> getRawElements(projectPk, cloudPk, ifcPk, )



         Returns elements ,property_sets, properties, definitions and units in a optimized structure         

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getRawElements(projectPk, cloudPk, ifcPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSpace"></a>
# **getSpace**
> Space getSpace(projectPk, cloudPk, ifcPk, id, )





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

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
apiInstance.getSpace(projectPk, cloudPk, ifcPk, id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **id** | **String**|  | 

### Return type

[**Space**](Space.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSpaces"></a>
# **getSpaces**
> [Space] getSpaces(projectPk, cloudPk, ifcPk, )





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSpaces(projectPk, cloudPk, ifcPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 

### Return type

[**[Space]**](Space.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getZone"></a>
# **getZone**
> Zone getZone(projectPk, cloudPk, ifcPk, id, )





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

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
apiInstance.getZone(projectPk, cloudPk, ifcPk, id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **id** | **String**|  | 

### Return type

[**Zone**](Zone.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getZoneSpace"></a>
# **getZoneSpace**
> ZoneSpace getZoneSpace(zonePk, projectPk, cloudPk, ifcPk, id, )





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var zonePk = "zonePk_example"; // String | 

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
apiInstance.getZoneSpace(zonePk, projectPk, cloudPk, ifcPk, id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zonePk** | **String**|  | 
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **id** | **String**|  | 

### Return type

[**ZoneSpace**](ZoneSpace.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getZoneSpaces"></a>
# **getZoneSpaces**
> [ZoneSpace] getZoneSpaces(projectPk, cloudPk, zonePk, ifcPk, )





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var zonePk = "zonePk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getZoneSpaces(projectPk, cloudPk, zonePk, ifcPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **zonePk** | **String**|  | 
 **ifcPk** | **String**|  | 

### Return type

[**[ZoneSpace]**](ZoneSpace.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getZones"></a>
# **getZones**
> [Zone] getZones(projectPk, cloudPk, ifcPk, )





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getZones(projectPk, cloudPk, ifcPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 

### Return type

[**[Zone]**](Zone.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeClassificationOfElement"></a>
# **removeClassificationOfElement**
> removeClassificationOfElement(elementUuid, projectPk, cloudPk, ifcPk, id)





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var elementUuid = "elementUuid_example"; // String | 

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
apiInstance.removeClassificationOfElement(elementUuid, projectPk, cloudPk, ifcPk, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **elementUuid** | **String**|  | 
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

<a name="removeElementPropertySet"></a>
# **removeElementPropertySet**
> removeElementPropertySet(elementUuid, projectPk, cloudPk, ifcPk, id)



         Delete the relation between the element and the property set. Does not delete any object     

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var elementUuid = "elementUuid_example"; // String | 

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
apiInstance.removeElementPropertySet(elementUuid, projectPk, cloudPk, ifcPk, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **elementUuid** | **String**|  | 
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

<a name="removeElementPropertySetProperty"></a>
# **removeElementPropertySetProperty**
> removeElementPropertySetProperty(elementUuid, propertysetPk, projectPk, cloudPk, ifcPk, id)





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var elementUuid = "elementUuid_example"; // String | 

var propertysetPk = "propertysetPk_example"; // String | 

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
apiInstance.removeElementPropertySetProperty(elementUuid, propertysetPk, projectPk, cloudPk, ifcPk, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **elementUuid** | **String**|  | 
 **propertysetPk** | **String**|  | 
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

<a name="removeElementPropertySetPropertyDefinition"></a>
# **removeElementPropertySetPropertyDefinition**
> removeElementPropertySetPropertyDefinition(elementUuid, propertysetPk, projectPk, propertyPk, cloudPk, ifcPk, id)





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var elementUuid = "elementUuid_example"; // String | 

var propertysetPk = "propertysetPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var propertyPk = "propertyPk_example"; // String | 

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
apiInstance.removeElementPropertySetPropertyDefinition(elementUuid, propertysetPk, projectPk, propertyPk, cloudPk, ifcPk, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **elementUuid** | **String**|  | 
 **propertysetPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **propertyPk** | **String**|  | 
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

<a name="removeElementPropertySetPropertyDefinitionUnit"></a>
# **removeElementPropertySetPropertyDefinitionUnit**
> removeElementPropertySetPropertyDefinitionUnit(elementUuid, propertydefinitionPk, propertysetPk, projectPk, propertyPk, cloudPk, ifcPk, id)





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var elementUuid = "elementUuid_example"; // String | 

var propertydefinitionPk = "propertydefinitionPk_example"; // String | 

var propertysetPk = "propertysetPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var propertyPk = "propertyPk_example"; // String | 

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
apiInstance.removeElementPropertySetPropertyDefinitionUnit(elementUuid, propertydefinitionPk, propertysetPk, projectPk, propertyPk, cloudPk, ifcPk, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **elementUuid** | **String**|  | 
 **propertydefinitionPk** | **String**|  | 
 **propertysetPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **propertyPk** | **String**|  | 
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

<a name="removeElementsFromClassification"></a>
# **removeElementsFromClassification**
> removeElementsFromClassification(projectPk, uuid, cloudPk, ifcPk, ifcClassificationPk)





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var projectPk = "projectPk_example"; // String | 

var uuid = "uuid_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var ifcClassificationPk = "ifcClassificationPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.removeElementsFromClassification(projectPk, uuid, cloudPk, ifcPk, ifcClassificationPk, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **uuid** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **ifcClassificationPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateElement"></a>
# **updateElement**
> Element updateElement(projectPk, uuid, cloudPk, ifcPk, data)





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var projectPk = "projectPk_example"; // String | 

var uuid = "uuid_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var data = new bimdata.Element(); // Element | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateElement(projectPk, uuid, cloudPk, ifcPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **uuid** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **data** | [**Element**](Element.md)|  | 

### Return type

[**Element**](Element.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateIfc"></a>
# **updateIfc**
> Ifc updateIfc(projectPk, cloudPk, id, data)





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var id = "id_example"; // String | 

var data = new bimdata.Ifc(); // Ifc | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateIfc(projectPk, cloudPk, id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **data** | [**Ifc**](Ifc.md)|  | 

### Return type

[**Ifc**](Ifc.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateIfcFiles"></a>
# **updateIfcFiles**
> IfcFiles updateIfcFiles(projectPk, cloudPk, id, opts)



         Patch ifc files (gltf, structure, svg, etc)         

### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var id = "id_example"; // String | 

var opts = { 
  'structureFile': "/path/to/file.txt", // File | 
  'systemsFile': "/path/to/file.txt", // File | 
  'mapFile': "/path/to/file.txt", // File | 
  'gltfFile': "/path/to/file.txt", // File | 
  'bvhTreeFile': "/path/to/file.txt" // File | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateIfcFiles(projectPk, cloudPk, id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **structureFile** | **File**|  | [optional] 
 **systemsFile** | **File**|  | [optional] 
 **mapFile** | **File**|  | [optional] 
 **gltfFile** | **File**|  | [optional] 
 **bvhTreeFile** | **File**|  | [optional] 

### Return type

[**IfcFiles**](IfcFiles.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="updateIfcProperty"></a>
# **updateIfcProperty**
> Property updateIfcProperty(projectPk, cloudPk, ifcPk, id, data)





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var id = "id_example"; // String | 

var data = new bimdata.Property(); // Property | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateIfcProperty(projectPk, cloudPk, ifcPk, id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **id** | **String**|  | 
 **data** | [**Property**](Property.md)|  | 

### Return type

[**Property**](Property.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateIfcPropertyDefinition"></a>
# **updateIfcPropertyDefinition**
> PropertyDefinition updateIfcPropertyDefinition(projectPk, cloudPk, ifcPk, id, data)





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var id = "id_example"; // String | 

var data = new bimdata.PropertyDefinition(); // PropertyDefinition | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateIfcPropertyDefinition(projectPk, cloudPk, ifcPk, id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **id** | **String**|  | 
 **data** | [**PropertyDefinition**](PropertyDefinition.md)|  | 

### Return type

[**PropertyDefinition**](PropertyDefinition.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateIfcUnit"></a>
# **updateIfcUnit**
> Unit updateIfcUnit(projectPk, cloudPk, ifcPk, id, data)





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var id = "id_example"; // String | 

var data = new bimdata.Unit(); // Unit | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateIfcUnit(projectPk, cloudPk, ifcPk, id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **id** | **String**|  | 
 **data** | [**Unit**](Unit.md)|  | 

### Return type

[**Unit**](Unit.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updatePropertySet"></a>
# **updatePropertySet**
> PropertySet updatePropertySet(projectPk, cloudPk, ifcPk, id, data)





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var id = "id_example"; // String | 

var data = new bimdata.PropertySet(); // PropertySet | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updatePropertySet(projectPk, cloudPk, ifcPk, id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **id** | **String**|  | 
 **data** | [**PropertySet**](PropertySet.md)|  | 

### Return type

[**PropertySet**](PropertySet.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateSpace"></a>
# **updateSpace**
> Space updateSpace(projectPk, cloudPk, ifcPk, id, data)





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var id = "id_example"; // String | 

var data = new bimdata.Space(); // Space | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateSpace(projectPk, cloudPk, ifcPk, id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **id** | **String**|  | 
 **data** | [**Space**](Space.md)|  | 

### Return type

[**Space**](Space.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateZone"></a>
# **updateZone**
> Zone updateZone(projectPk, cloudPk, ifcPk, id, data)





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var id = "id_example"; // String | 

var data = new bimdata.Zone(); // Zone | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateZone(projectPk, cloudPk, ifcPk, id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **id** | **String**|  | 
 **data** | [**Zone**](Zone.md)|  | 

### Return type

[**Zone**](Zone.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateZoneSpace"></a>
# **updateZoneSpace**
> ZoneSpace updateZoneSpace(zonePk, projectPk, cloudPk, ifcPk, id, data)





### Example
```javascript
var bimdata = require('@bimdata/bimdata-api-client');
var defaultClient = bimdata.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new bimdata.IfcApi();

var zonePk = "zonePk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var id = "id_example"; // String | 

var data = new bimdata.ZoneSpace(); // ZoneSpace | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateZoneSpace(zonePk, projectPk, cloudPk, ifcPk, id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zonePk** | **String**|  | 
 **projectPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **id** | **String**|  | 
 **data** | [**ZoneSpace**](ZoneSpace.md)|  | 

### Return type

[**ZoneSpace**](ZoneSpace.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


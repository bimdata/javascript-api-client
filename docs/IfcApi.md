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
> bulkDeleteIfcClassifications(cloudPk, projectPk, ifcPk)



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

var cloudPk = "cloudPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.bulkDeleteIfcClassifications(cloudPk, projectPk, ifcPk, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 
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
> bulkDeleteIfcProperties(cloudPk, projectPk, ifcPk)



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

var cloudPk = "cloudPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.bulkDeleteIfcProperties(cloudPk, projectPk, ifcPk, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 
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
> bulkDeleteIfcPropertyDefinitions(cloudPk, projectPk, ifcPk)



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

var cloudPk = "cloudPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.bulkDeleteIfcPropertyDefinitions(cloudPk, projectPk, ifcPk, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 
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
> bulkDeleteIfcUnits(cloudPk, projectPk, ifcPk)



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

var cloudPk = "cloudPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.bulkDeleteIfcUnits(cloudPk, projectPk, ifcPk, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 
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
> bulkDeletePropertySet(cloudPk, projectPk, ifcPk)



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

var cloudPk = "cloudPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.bulkDeletePropertySet(cloudPk, projectPk, ifcPk, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 
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
> [WrappedClass] bulkFullUpdateElements(cloudPk, projectPk, ifcPk, data)



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

var cloudPk = "cloudPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var data = [new bimdata.WrappedClass()]; // [WrappedClass] | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bulkFullUpdateElements(cloudPk, projectPk, ifcPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **data** | [**[WrappedClass]**](WrappedClass.md)|  | 

### Return type

[**[WrappedClass]**](WrappedClass.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bulkFullUpdateIfcProperty"></a>
# **bulkFullUpdateIfcProperty**
> [WrappedClass] bulkFullUpdateIfcProperty(cloudPk, projectPk, ifcPk, data)



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

var cloudPk = "cloudPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var data = [new bimdata.WrappedClass()]; // [WrappedClass] | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bulkFullUpdateIfcProperty(cloudPk, projectPk, ifcPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **data** | [**[WrappedClass]**](WrappedClass.md)|  | 

### Return type

[**[WrappedClass]**](WrappedClass.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bulkRemoveClassificationsOfElement"></a>
# **bulkRemoveClassificationsOfElement**
> bulkRemoveClassificationsOfElement(cloudPk, projectPk, ifcPk, elementUuid)



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

var cloudPk = "cloudPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var elementUuid = "elementUuid_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.bulkRemoveClassificationsOfElement(cloudPk, projectPk, ifcPk, elementUuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **elementUuid** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bulkRemoveElementsFromClassification"></a>
# **bulkRemoveElementsFromClassification**
> bulkRemoveElementsFromClassification(ifcClassificationPk, cloudPk, projectPk, ifcPk)



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

var ifcClassificationPk = "ifcClassificationPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.bulkRemoveElementsFromClassification(ifcClassificationPk, cloudPk, projectPk, ifcPk, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ifcClassificationPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **ifcPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bulkUpdateElements"></a>
# **bulkUpdateElements**
> [WrappedClass] bulkUpdateElements(cloudPk, projectPk, ifcPk, data)



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

var cloudPk = "cloudPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var data = [new bimdata.WrappedClass()]; // [WrappedClass] | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bulkUpdateElements(cloudPk, projectPk, ifcPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **data** | [**[WrappedClass]**](WrappedClass.md)|  | 

### Return type

[**[WrappedClass]**](WrappedClass.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bulkUpdateIfcProperty"></a>
# **bulkUpdateIfcProperty**
> [WrappedClass] bulkUpdateIfcProperty(cloudPk, projectPk, ifcPk, data)



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

var cloudPk = "cloudPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var data = [new bimdata.WrappedClass()]; // [WrappedClass] | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bulkUpdateIfcProperty(cloudPk, projectPk, ifcPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **data** | [**[WrappedClass]**](WrappedClass.md)|  | 

### Return type

[**[WrappedClass]**](WrappedClass.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createClassificationElementRelations"></a>
# **createClassificationElementRelations**
> createClassificationElementRelations(cloudPk, projectPk, ifcPk, data)



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

var cloudPk = "cloudPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var data = [new bimdata.ElementClassificationRelation()]; // [ElementClassificationRelation] | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createClassificationElementRelations(cloudPk, projectPk, ifcPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 
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
> [WrappedClass] createClassificationsOfElement(cloudPk, projectPk, ifcPk, elementUuid, data)



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

var cloudPk = "cloudPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var elementUuid = "elementUuid_example"; // String | 

var data = [new bimdata.WrappedClass()]; // [WrappedClass] | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createClassificationsOfElement(cloudPk, projectPk, ifcPk, elementUuid, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **elementUuid** | **String**|  | 
 **data** | [**[WrappedClass]**](WrappedClass.md)|  | 

### Return type

[**[WrappedClass]**](WrappedClass.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createElement"></a>
# **createElement**
> [WrappedClass] createElement(cloudPk, projectPk, ifcPk, data)



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

var cloudPk = "cloudPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var data = [new bimdata.WrappedClass()]; // [WrappedClass] | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createElement(cloudPk, projectPk, ifcPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **data** | [**[WrappedClass]**](WrappedClass.md)|  | 

### Return type

[**[WrappedClass]**](WrappedClass.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createElementPropertySet"></a>
# **createElementPropertySet**
> createElementPropertySet(cloudPk, projectPk, ifcPk, elementUuid, data)



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

var cloudPk = "cloudPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var elementUuid = "elementUuid_example"; // String | 

var data = new bimdata.WrappedClass(); // WrappedClass | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createElementPropertySet(cloudPk, projectPk, ifcPk, elementUuid, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **elementUuid** | **String**|  | 
 **data** | [**WrappedClass**](WrappedClass.md)|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createElementPropertySetProperty"></a>
# **createElementPropertySetProperty**
> WrappedClass createElementPropertySetProperty(cloudPk, propertysetPk, projectPk, ifcPk, elementUuid, data)





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

var cloudPk = "cloudPk_example"; // String | 

var propertysetPk = "propertysetPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var elementUuid = "elementUuid_example"; // String | 

var data = new bimdata.WrappedClass(); // WrappedClass | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createElementPropertySetProperty(cloudPk, propertysetPk, projectPk, ifcPk, elementUuid, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **propertysetPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **elementUuid** | **String**|  | 
 **data** | [**WrappedClass**](WrappedClass.md)|  | 

### Return type

[**WrappedClass**](WrappedClass.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createElementPropertySetPropertyDefinition"></a>
# **createElementPropertySetPropertyDefinition**
> WrappedClass createElementPropertySetPropertyDefinition(cloudPk, propertyPk, propertysetPk, projectPk, ifcPk, elementUuid, data)





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

var cloudPk = "cloudPk_example"; // String | 

var propertyPk = "propertyPk_example"; // String | 

var propertysetPk = "propertysetPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var elementUuid = "elementUuid_example"; // String | 

var data = new bimdata.WrappedClass(); // WrappedClass | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createElementPropertySetPropertyDefinition(cloudPk, propertyPk, propertysetPk, projectPk, ifcPk, elementUuid, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **propertyPk** | **String**|  | 
 **propertysetPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **elementUuid** | **String**|  | 
 **data** | [**WrappedClass**](WrappedClass.md)|  | 

### Return type

[**WrappedClass**](WrappedClass.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createElementPropertySetPropertyDefinitionUnit"></a>
# **createElementPropertySetPropertyDefinitionUnit**
> WrappedClass createElementPropertySetPropertyDefinitionUnit(cloudPk, propertyPk, propertysetPk, ifcPk, projectPk, propertydefinitionPk, elementUuid, data)





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

var cloudPk = "cloudPk_example"; // String | 

var propertyPk = "propertyPk_example"; // String | 

var propertysetPk = "propertysetPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var propertydefinitionPk = "propertydefinitionPk_example"; // String | 

var elementUuid = "elementUuid_example"; // String | 

var data = new bimdata.WrappedClass(); // WrappedClass | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createElementPropertySetPropertyDefinitionUnit(cloudPk, propertyPk, propertysetPk, ifcPk, projectPk, propertydefinitionPk, elementUuid, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **propertyPk** | **String**|  | 
 **propertysetPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **propertydefinitionPk** | **String**|  | 
 **elementUuid** | **String**|  | 
 **data** | [**WrappedClass**](WrappedClass.md)|  | 

### Return type

[**WrappedClass**](WrappedClass.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createIfcPropertyDefinition"></a>
# **createIfcPropertyDefinition**
> [WrappedClass] createIfcPropertyDefinition(cloudPk, projectPk, ifcPk, data)



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

var cloudPk = "cloudPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var data = [new bimdata.WrappedClass()]; // [WrappedClass] | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createIfcPropertyDefinition(cloudPk, projectPk, ifcPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **data** | [**[WrappedClass]**](WrappedClass.md)|  | 

### Return type

[**[WrappedClass]**](WrappedClass.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createIfcUnit"></a>
# **createIfcUnit**
> [WrappedClass] createIfcUnit(cloudPk, projectPk, ifcPk, data)



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

var cloudPk = "cloudPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var data = [new bimdata.WrappedClass()]; // [WrappedClass] | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createIfcUnit(cloudPk, projectPk, ifcPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **data** | [**[WrappedClass]**](WrappedClass.md)|  | 

### Return type

[**[WrappedClass]**](WrappedClass.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createPropertySet"></a>
# **createPropertySet**
> [WrappedClass] createPropertySet(cloudPk, projectPk, ifcPk, data)



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

var cloudPk = "cloudPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var data = [new bimdata.WrappedClass()]; // [WrappedClass] | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createPropertySet(cloudPk, projectPk, ifcPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **data** | [**[WrappedClass]**](WrappedClass.md)|  | 

### Return type

[**[WrappedClass]**](WrappedClass.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createPropertySetElementRelations"></a>
# **createPropertySetElementRelations**
> createPropertySetElementRelations(cloudPk, projectPk, ifcPk, data)



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

var cloudPk = "cloudPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var data = [new bimdata.ElementPropertySetRelation()]; // [ElementPropertySetRelation] | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createPropertySetElementRelations(cloudPk, projectPk, ifcPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 
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
> createRawElements(cloudPk, projectPk, ifcPk, data)



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

var cloudPk = "cloudPk_example"; // String | 

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
apiInstance.createRawElements(cloudPk, projectPk, ifcPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
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

<a name="createSpace"></a>
# **createSpace**
> WrappedClass createSpace(cloudPk, projectPk, ifcPk, data)





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
apiInstance.createSpace(cloudPk, projectPk, ifcPk, data, callback);
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

<a name="createZone"></a>
# **createZone**
> [WrappedClass] createZone(cloudPk, projectPk, ifcPk, data)



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

var cloudPk = "cloudPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var data = [new bimdata.WrappedClass()]; // [WrappedClass] | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createZone(cloudPk, projectPk, ifcPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **data** | [**[WrappedClass]**](WrappedClass.md)|  | 

### Return type

[**[WrappedClass]**](WrappedClass.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createZoneSpace"></a>
# **createZoneSpace**
> WrappedClass createZoneSpace(cloudPk, zonePk, projectPk, ifcPk, data)





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

var cloudPk = "cloudPk_example"; // String | 

var zonePk = "zonePk_example"; // String | 

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
apiInstance.createZoneSpace(cloudPk, zonePk, projectPk, ifcPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **zonePk** | **String**|  | 
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

<a name="deleteElement"></a>
# **deleteElement**
> deleteElement(uuid, cloudPk, projectPk, ifcPk, )





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

var uuid = "uuid_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteElement(uuid, cloudPk, projectPk, ifcPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**|  | 
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 
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
> deleteIfc(cloudPk, id, projectPk, )





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
apiInstance.deleteIfc(cloudPk, id, projectPk, , callback);
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

<a name="deleteIfcProperty"></a>
# **deleteIfcProperty**
> deleteIfcProperty(cloudPk, id, projectPk, ifcPk, )





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
apiInstance.deleteIfcProperty(cloudPk, id, projectPk, ifcPk, , callback);
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

<a name="deleteIfcPropertyDefinition"></a>
# **deleteIfcPropertyDefinition**
> deleteIfcPropertyDefinition(cloudPk, id, projectPk, ifcPk, )





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
apiInstance.deleteIfcPropertyDefinition(cloudPk, id, projectPk, ifcPk, , callback);
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

<a name="deleteIfcUnit"></a>
# **deleteIfcUnit**
> deleteIfcUnit(cloudPk, id, projectPk, ifcPk, )





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
apiInstance.deleteIfcUnit(cloudPk, id, projectPk, ifcPk, , callback);
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

<a name="deletePropertySet"></a>
# **deletePropertySet**
> deletePropertySet(cloudPk, id, projectPk, ifcPk, )





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
apiInstance.deletePropertySet(cloudPk, id, projectPk, ifcPk, , callback);
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

<a name="deleteSpace"></a>
# **deleteSpace**
> deleteSpace(cloudPk, id, projectPk, ifcPk, )





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
apiInstance.deleteSpace(cloudPk, id, projectPk, ifcPk, , callback);
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

<a name="deleteZone"></a>
# **deleteZone**
> deleteZone(cloudPk, id, projectPk, ifcPk, )





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
apiInstance.deleteZone(cloudPk, id, projectPk, ifcPk, , callback);
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

<a name="deleteZoneSpace"></a>
# **deleteZoneSpace**
> deleteZoneSpace(cloudPk, id, projectPk, zonePk, ifcPk, )





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

var cloudPk = "cloudPk_example"; // String | 

var id = "id_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var zonePk = "zonePk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteZoneSpace(cloudPk, id, projectPk, zonePk, ifcPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **projectPk** | **String**|  | 
 **zonePk** | **String**|  | 
 **ifcPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdateElement"></a>
# **fullUpdateElement**
> WrappedClass fullUpdateElement(uuid, cloudPk, projectPk, ifcPk, data)





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

var uuid = "uuid_example"; // String | 

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
apiInstance.fullUpdateElement(uuid, cloudPk, projectPk, ifcPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**|  | 
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

<a name="fullUpdateIfc"></a>
# **fullUpdateIfc**
> WrappedClass fullUpdateIfc(cloudPk, id, projectPk, data)





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
apiInstance.fullUpdateIfc(cloudPk, id, projectPk, data, callback);
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

<a name="fullUpdateIfcProperty"></a>
# **fullUpdateIfcProperty**
> WrappedClass fullUpdateIfcProperty(cloudPk, id, projectPk, ifcPk, data)





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
apiInstance.fullUpdateIfcProperty(cloudPk, id, projectPk, ifcPk, data, callback);
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

<a name="fullUpdateIfcPropertyDefinition"></a>
# **fullUpdateIfcPropertyDefinition**
> WrappedClass fullUpdateIfcPropertyDefinition(cloudPk, id, projectPk, ifcPk, data)





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
apiInstance.fullUpdateIfcPropertyDefinition(cloudPk, id, projectPk, ifcPk, data, callback);
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

<a name="fullUpdateIfcUnit"></a>
# **fullUpdateIfcUnit**
> WrappedClass fullUpdateIfcUnit(cloudPk, id, projectPk, ifcPk, data)





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
apiInstance.fullUpdateIfcUnit(cloudPk, id, projectPk, ifcPk, data, callback);
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

<a name="fullUpdatePropertySet"></a>
# **fullUpdatePropertySet**
> WrappedClass fullUpdatePropertySet(cloudPk, id, projectPk, ifcPk, data)





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
apiInstance.fullUpdatePropertySet(cloudPk, id, projectPk, ifcPk, data, callback);
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

<a name="fullUpdateSpace"></a>
# **fullUpdateSpace**
> WrappedClass fullUpdateSpace(cloudPk, id, projectPk, ifcPk, data)





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
apiInstance.fullUpdateSpace(cloudPk, id, projectPk, ifcPk, data, callback);
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

<a name="fullUpdateZone"></a>
# **fullUpdateZone**
> WrappedClass fullUpdateZone(cloudPk, id, projectPk, ifcPk, data)





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
apiInstance.fullUpdateZone(cloudPk, id, projectPk, ifcPk, data, callback);
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

<a name="fullUpdateZoneSpace"></a>
# **fullUpdateZoneSpace**
> WrappedClass fullUpdateZoneSpace(cloudPk, id, projectPk, zonePk, ifcPk, data)





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

var cloudPk = "cloudPk_example"; // String | 

var id = "id_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var zonePk = "zonePk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var data = new bimdata.WrappedClass(); // WrappedClass | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fullUpdateZoneSpace(cloudPk, id, projectPk, zonePk, ifcPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **projectPk** | **String**|  | 
 **zonePk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **data** | [**WrappedClass**](WrappedClass.md)|  | 

### Return type

[**WrappedClass**](WrappedClass.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getClassificationsOfElement"></a>
# **getClassificationsOfElement**
> [WrappedClass] getClassificationsOfElement(cloudPk, projectPk, ifcPk, elementUuid, )





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

var cloudPk = "cloudPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var elementUuid = "elementUuid_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getClassificationsOfElement(cloudPk, projectPk, ifcPk, elementUuid, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **elementUuid** | **String**|  | 

### Return type

[**[WrappedClass]**](WrappedClass.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getElement"></a>
# **getElement**
> WrappedClass getElement(uuid, cloudPk, projectPk, ifcPk, )





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

var uuid = "uuid_example"; // String | 

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
apiInstance.getElement(uuid, cloudPk, projectPk, ifcPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**|  | 
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **ifcPk** | **String**|  | 

### Return type

[**WrappedClass**](WrappedClass.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getElementPropertySet"></a>
# **getElementPropertySet**
> WrappedClass getElementPropertySet(cloudPk, id, projectPk, ifcPk, elementUuid)





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

var cloudPk = "cloudPk_example"; // String | 

var id = "id_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var elementUuid = "elementUuid_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getElementPropertySet(cloudPk, id, projectPk, ifcPk, elementUuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **projectPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **elementUuid** | **String**|  | 

### Return type

[**WrappedClass**](WrappedClass.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getElementPropertySetProperties"></a>
# **getElementPropertySetProperties**
> [WrappedClass] getElementPropertySetProperties(cloudPk, propertysetPk, projectPk, ifcPk, elementUuid, )





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

var cloudPk = "cloudPk_example"; // String | 

var propertysetPk = "propertysetPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var elementUuid = "elementUuid_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getElementPropertySetProperties(cloudPk, propertysetPk, projectPk, ifcPk, elementUuid, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **propertysetPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **elementUuid** | **String**|  | 

### Return type

[**[WrappedClass]**](WrappedClass.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getElementPropertySetProperty"></a>
# **getElementPropertySetProperty**
> WrappedClass getElementPropertySetProperty(cloudPk, id, propertysetPk, projectPk, ifcPk, elementUuid)





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

var cloudPk = "cloudPk_example"; // String | 

var id = "id_example"; // String | 

var propertysetPk = "propertysetPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var elementUuid = "elementUuid_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getElementPropertySetProperty(cloudPk, id, propertysetPk, projectPk, ifcPk, elementUuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **propertysetPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **elementUuid** | **String**|  | 

### Return type

[**WrappedClass**](WrappedClass.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getElementPropertySetPropertyDefinition"></a>
# **getElementPropertySetPropertyDefinition**
> WrappedClass getElementPropertySetPropertyDefinition(cloudPk, id, propertyPk, propertysetPk, projectPk, ifcPk, elementUuid)





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

var cloudPk = "cloudPk_example"; // String | 

var id = "id_example"; // String | 

var propertyPk = "propertyPk_example"; // String | 

var propertysetPk = "propertysetPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var elementUuid = "elementUuid_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getElementPropertySetPropertyDefinition(cloudPk, id, propertyPk, propertysetPk, projectPk, ifcPk, elementUuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **propertyPk** | **String**|  | 
 **propertysetPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **elementUuid** | **String**|  | 

### Return type

[**WrappedClass**](WrappedClass.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getElementPropertySetPropertyDefinitionUnit"></a>
# **getElementPropertySetPropertyDefinitionUnit**
> WrappedClass getElementPropertySetPropertyDefinitionUnit(id, propertysetPk, propertydefinitionPk, ifcPk, cloudPk, propertyPk, projectPk, elementUuid)





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

var id = "id_example"; // String | 

var propertysetPk = "propertysetPk_example"; // String | 

var propertydefinitionPk = "propertydefinitionPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var propertyPk = "propertyPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var elementUuid = "elementUuid_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getElementPropertySetPropertyDefinitionUnit(id, propertysetPk, propertydefinitionPk, ifcPk, cloudPk, propertyPk, projectPk, elementUuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **propertysetPk** | **String**|  | 
 **propertydefinitionPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **propertyPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **elementUuid** | **String**|  | 

### Return type

[**WrappedClass**](WrappedClass.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getElementPropertySetPropertyDefinitionUnits"></a>
# **getElementPropertySetPropertyDefinitionUnits**
> [WrappedClass] getElementPropertySetPropertyDefinitionUnits(cloudPk, propertyPk, propertysetPk, ifcPk, projectPk, propertydefinitionPk, elementUuid, )





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

var cloudPk = "cloudPk_example"; // String | 

var propertyPk = "propertyPk_example"; // String | 

var propertysetPk = "propertysetPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var propertydefinitionPk = "propertydefinitionPk_example"; // String | 

var elementUuid = "elementUuid_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getElementPropertySetPropertyDefinitionUnits(cloudPk, propertyPk, propertysetPk, ifcPk, projectPk, propertydefinitionPk, elementUuid, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **propertyPk** | **String**|  | 
 **propertysetPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **propertydefinitionPk** | **String**|  | 
 **elementUuid** | **String**|  | 

### Return type

[**[WrappedClass]**](WrappedClass.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getElementPropertySetPropertyDefinitions"></a>
# **getElementPropertySetPropertyDefinitions**
> [WrappedClass] getElementPropertySetPropertyDefinitions(cloudPk, propertyPk, propertysetPk, projectPk, ifcPk, elementUuid, )





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

var cloudPk = "cloudPk_example"; // String | 

var propertyPk = "propertyPk_example"; // String | 

var propertysetPk = "propertysetPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var elementUuid = "elementUuid_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getElementPropertySetPropertyDefinitions(cloudPk, propertyPk, propertysetPk, projectPk, ifcPk, elementUuid, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **propertyPk** | **String**|  | 
 **propertysetPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **elementUuid** | **String**|  | 

### Return type

[**[WrappedClass]**](WrappedClass.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getElementPropertySets"></a>
# **getElementPropertySets**
> [WrappedClass] getElementPropertySets(cloudPk, projectPk, ifcPk, elementUuid, )





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

var cloudPk = "cloudPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var elementUuid = "elementUuid_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getElementPropertySets(cloudPk, projectPk, ifcPk, elementUuid, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **elementUuid** | **String**|  | 

### Return type

[**[WrappedClass]**](WrappedClass.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getElements"></a>
# **getElements**
> [WrappedClass] getElements(cloudPk, projectPk, ifcPk, )





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
apiInstance.getElements(cloudPk, projectPk, ifcPk, , callback);
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

<a name="getElementsFromClassification"></a>
# **getElementsFromClassification**
> [WrappedClass] getElementsFromClassification(ifcClassificationPk, cloudPk, projectPk, ifcPk)





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

var ifcClassificationPk = "ifcClassificationPk_example"; // String | 

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
apiInstance.getElementsFromClassification(ifcClassificationPk, cloudPk, projectPk, ifcPk, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ifcClassificationPk** | **String**|  | 
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

<a name="getIfc"></a>
# **getIfc**
> WrappedClass getIfc(cloudPk, id, projectPk, )





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
apiInstance.getIfc(cloudPk, id, projectPk, , callback);
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

<a name="getIfcBVH"></a>
# **getIfcBVH**
> getIfcBVH(cloudPk, id, projectPk)



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
apiInstance.getIfcBVH(cloudPk, id, projectPk, callback);
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

<a name="getIfcClassifications"></a>
# **getIfcClassifications**
> [WrappedClass] getIfcClassifications(cloudPk, projectPk, ifcPk)





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
apiInstance.getIfcClassifications(cloudPk, projectPk, ifcPk, callback);
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

<a name="getIfcGLTF"></a>
# **getIfcGLTF**
> getIfcGLTF(cloudPk, id, projectPk)



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
apiInstance.getIfcGLTF(cloudPk, id, projectPk, callback);
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

<a name="getIfcMap"></a>
# **getIfcMap**
> getIfcMap(cloudPk, id, projectPk)



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
apiInstance.getIfcMap(cloudPk, id, projectPk, callback);
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

<a name="getIfcProperties"></a>
# **getIfcProperties**
> [WrappedClass] getIfcProperties(cloudPk, projectPk, ifcPk)





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
apiInstance.getIfcProperties(cloudPk, projectPk, ifcPk, callback);
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

<a name="getIfcProperty"></a>
# **getIfcProperty**
> WrappedClass getIfcProperty(cloudPk, id, projectPk, ifcPk, )





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
apiInstance.getIfcProperty(cloudPk, id, projectPk, ifcPk, , callback);
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

<a name="getIfcPropertyDefinition"></a>
# **getIfcPropertyDefinition**
> WrappedClass getIfcPropertyDefinition(cloudPk, id, projectPk, ifcPk, )





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
apiInstance.getIfcPropertyDefinition(cloudPk, id, projectPk, ifcPk, , callback);
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

<a name="getIfcPropertyDefinitions"></a>
# **getIfcPropertyDefinitions**
> [WrappedClass] getIfcPropertyDefinitions(cloudPk, projectPk, ifcPk, )





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
apiInstance.getIfcPropertyDefinitions(cloudPk, projectPk, ifcPk, , callback);
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

<a name="getIfcStructure"></a>
# **getIfcStructure**
> getIfcStructure(cloudPk, id, projectPk)



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
apiInstance.getIfcStructure(cloudPk, id, projectPk, callback);
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

<a name="getIfcSystems"></a>
# **getIfcSystems**
> getIfcSystems(cloudPk, id, projectPk)



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
apiInstance.getIfcSystems(cloudPk, id, projectPk, callback);
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

<a name="getIfcUnit"></a>
# **getIfcUnit**
> WrappedClass getIfcUnit(cloudPk, id, projectPk, ifcPk, )





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
apiInstance.getIfcUnit(cloudPk, id, projectPk, ifcPk, , callback);
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

<a name="getIfcUnits"></a>
# **getIfcUnits**
> [WrappedClass] getIfcUnits(cloudPk, projectPk, ifcPk, )





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
apiInstance.getIfcUnits(cloudPk, projectPk, ifcPk, , callback);
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

<a name="getIfcs"></a>
# **getIfcs**
> [WrappedClass] getIfcs(cloudPk, projectPk)





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

var cloudPk = "cloudPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getIfcs(cloudPk, projectPk, callback);
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

<a name="getPropertySet"></a>
# **getPropertySet**
> WrappedClass getPropertySet(cloudPk, id, projectPk, ifcPk, )





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
apiInstance.getPropertySet(cloudPk, id, projectPk, ifcPk, , callback);
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

<a name="getPropertySets"></a>
# **getPropertySets**
> [WrappedClass] getPropertySets(cloudPk, projectPk, ifcPk, )





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
apiInstance.getPropertySets(cloudPk, projectPk, ifcPk, , callback);
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

<a name="getRawElements"></a>
# **getRawElements**
> getRawElements(cloudPk, projectPk, ifcPk, )



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

var cloudPk = "cloudPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getRawElements(cloudPk, projectPk, ifcPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 
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
> WrappedClass getSpace(cloudPk, id, projectPk, ifcPk, )





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
apiInstance.getSpace(cloudPk, id, projectPk, ifcPk, , callback);
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

<a name="getSpaces"></a>
# **getSpaces**
> [WrappedClass] getSpaces(cloudPk, projectPk, ifcPk, )





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
apiInstance.getSpaces(cloudPk, projectPk, ifcPk, , callback);
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

<a name="getZone"></a>
# **getZone**
> WrappedClass getZone(cloudPk, id, projectPk, ifcPk, )





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
apiInstance.getZone(cloudPk, id, projectPk, ifcPk, , callback);
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

<a name="getZoneSpace"></a>
# **getZoneSpace**
> WrappedClass getZoneSpace(cloudPk, id, projectPk, zonePk, ifcPk, )





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

var cloudPk = "cloudPk_example"; // String | 

var id = "id_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var zonePk = "zonePk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getZoneSpace(cloudPk, id, projectPk, zonePk, ifcPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **projectPk** | **String**|  | 
 **zonePk** | **String**|  | 
 **ifcPk** | **String**|  | 

### Return type

[**WrappedClass**](WrappedClass.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getZoneSpaces"></a>
# **getZoneSpaces**
> [WrappedClass] getZoneSpaces(cloudPk, zonePk, projectPk, ifcPk, )





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

var cloudPk = "cloudPk_example"; // String | 

var zonePk = "zonePk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getZoneSpaces(cloudPk, zonePk, projectPk, ifcPk, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **zonePk** | **String**|  | 
 **projectPk** | **String**|  | 
 **ifcPk** | **String**|  | 

### Return type

[**[WrappedClass]**](WrappedClass.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getZones"></a>
# **getZones**
> [WrappedClass] getZones(cloudPk, projectPk, ifcPk, )





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
apiInstance.getZones(cloudPk, projectPk, ifcPk, , callback);
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

<a name="removeClassificationOfElement"></a>
# **removeClassificationOfElement**
> removeClassificationOfElement(cloudPk, id, projectPk, ifcPk, elementUuid)





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

var cloudPk = "cloudPk_example"; // String | 

var id = "id_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var elementUuid = "elementUuid_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.removeClassificationOfElement(cloudPk, id, projectPk, ifcPk, elementUuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **projectPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **elementUuid** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeElementPropertySet"></a>
# **removeElementPropertySet**
> removeElementPropertySet(cloudPk, id, projectPk, ifcPk, elementUuid)



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

var cloudPk = "cloudPk_example"; // String | 

var id = "id_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var elementUuid = "elementUuid_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.removeElementPropertySet(cloudPk, id, projectPk, ifcPk, elementUuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **projectPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **elementUuid** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeElementPropertySetProperty"></a>
# **removeElementPropertySetProperty**
> removeElementPropertySetProperty(cloudPk, id, propertysetPk, projectPk, ifcPk, elementUuid)





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

var cloudPk = "cloudPk_example"; // String | 

var id = "id_example"; // String | 

var propertysetPk = "propertysetPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var elementUuid = "elementUuid_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.removeElementPropertySetProperty(cloudPk, id, propertysetPk, projectPk, ifcPk, elementUuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **propertysetPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **elementUuid** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeElementPropertySetPropertyDefinition"></a>
# **removeElementPropertySetPropertyDefinition**
> removeElementPropertySetPropertyDefinition(cloudPk, id, propertyPk, propertysetPk, projectPk, ifcPk, elementUuid)





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

var cloudPk = "cloudPk_example"; // String | 

var id = "id_example"; // String | 

var propertyPk = "propertyPk_example"; // String | 

var propertysetPk = "propertysetPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var elementUuid = "elementUuid_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.removeElementPropertySetPropertyDefinition(cloudPk, id, propertyPk, propertysetPk, projectPk, ifcPk, elementUuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **propertyPk** | **String**|  | 
 **propertysetPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **elementUuid** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeElementPropertySetPropertyDefinitionUnit"></a>
# **removeElementPropertySetPropertyDefinitionUnit**
> removeElementPropertySetPropertyDefinitionUnit(id, propertysetPk, propertydefinitionPk, ifcPk, cloudPk, propertyPk, projectPk, elementUuid)





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

var id = "id_example"; // String | 

var propertysetPk = "propertysetPk_example"; // String | 

var propertydefinitionPk = "propertydefinitionPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var propertyPk = "propertyPk_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var elementUuid = "elementUuid_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.removeElementPropertySetPropertyDefinitionUnit(id, propertysetPk, propertydefinitionPk, ifcPk, cloudPk, propertyPk, projectPk, elementUuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **propertysetPk** | **String**|  | 
 **propertydefinitionPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **propertyPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **elementUuid** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeElementsFromClassification"></a>
# **removeElementsFromClassification**
> removeElementsFromClassification(ifcClassificationPk, cloudPk, uuid, projectPk, ifcPk)





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

var ifcClassificationPk = "ifcClassificationPk_example"; // String | 

var cloudPk = "cloudPk_example"; // String | 

var uuid = "uuid_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.removeElementsFromClassification(ifcClassificationPk, cloudPk, uuid, projectPk, ifcPk, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ifcClassificationPk** | **String**|  | 
 **cloudPk** | **String**|  | 
 **uuid** | **String**|  | 
 **projectPk** | **String**|  | 
 **ifcPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateElement"></a>
# **updateElement**
> WrappedClass updateElement(uuid, cloudPk, projectPk, ifcPk, data)





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

var uuid = "uuid_example"; // String | 

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
apiInstance.updateElement(uuid, cloudPk, projectPk, ifcPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**|  | 
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

<a name="updateIfc"></a>
# **updateIfc**
> WrappedClass updateIfc(cloudPk, id, projectPk, data)





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
apiInstance.updateIfc(cloudPk, id, projectPk, data, callback);
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

<a name="updateIfcFiles"></a>
# **updateIfcFiles**
> IfcFiles updateIfcFiles(cloudPk, id, projectPk, opts)



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

var cloudPk = "cloudPk_example"; // String | 

var id = "id_example"; // String | 

var projectPk = "projectPk_example"; // String | 

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
apiInstance.updateIfcFiles(cloudPk, id, projectPk, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **projectPk** | **String**|  | 
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
> WrappedClass updateIfcProperty(cloudPk, id, projectPk, ifcPk, data)





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
apiInstance.updateIfcProperty(cloudPk, id, projectPk, ifcPk, data, callback);
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

<a name="updateIfcPropertyDefinition"></a>
# **updateIfcPropertyDefinition**
> WrappedClass updateIfcPropertyDefinition(cloudPk, id, projectPk, ifcPk, data)





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
apiInstance.updateIfcPropertyDefinition(cloudPk, id, projectPk, ifcPk, data, callback);
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

<a name="updateIfcUnit"></a>
# **updateIfcUnit**
> WrappedClass updateIfcUnit(cloudPk, id, projectPk, ifcPk, data)





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
apiInstance.updateIfcUnit(cloudPk, id, projectPk, ifcPk, data, callback);
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

<a name="updatePropertySet"></a>
# **updatePropertySet**
> WrappedClass updatePropertySet(cloudPk, id, projectPk, ifcPk, data)





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
apiInstance.updatePropertySet(cloudPk, id, projectPk, ifcPk, data, callback);
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

<a name="updateSpace"></a>
# **updateSpace**
> WrappedClass updateSpace(cloudPk, id, projectPk, ifcPk, data)





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
apiInstance.updateSpace(cloudPk, id, projectPk, ifcPk, data, callback);
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

<a name="updateZone"></a>
# **updateZone**
> WrappedClass updateZone(cloudPk, id, projectPk, ifcPk, data)





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
apiInstance.updateZone(cloudPk, id, projectPk, ifcPk, data, callback);
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

<a name="updateZoneSpace"></a>
# **updateZoneSpace**
> WrappedClass updateZoneSpace(cloudPk, id, projectPk, zonePk, ifcPk, data)





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

var cloudPk = "cloudPk_example"; // String | 

var id = "id_example"; // String | 

var projectPk = "projectPk_example"; // String | 

var zonePk = "zonePk_example"; // String | 

var ifcPk = "ifcPk_example"; // String | 

var data = new bimdata.WrappedClass(); // WrappedClass | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateZoneSpace(cloudPk, id, projectPk, zonePk, ifcPk, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **String**|  | 
 **projectPk** | **String**|  | 
 **zonePk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **data** | [**WrappedClass**](WrappedClass.md)|  | 

### Return type

[**WrappedClass**](WrappedClass.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


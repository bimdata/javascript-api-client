# bimdata.IfcApi

All URIs are relative to *https://api-beta.bimdata.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bulkDeleteIfcClassifications**](IfcApi.md#bulkDeleteIfcClassifications) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/classification/list_destroy | Remove all classifications from model&#39;s elements
[**bulkDeleteIfcProperties**](IfcApi.md#bulkDeleteIfcProperties) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/property/bulk_destroy | Delete many Property of a model
[**bulkDeleteIfcPropertyDefinitions**](IfcApi.md#bulkDeleteIfcPropertyDefinitions) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/propertydefinition/bulk_destroy | Delete many PropertyDefinitions of a model
[**bulkDeleteIfcUnits**](IfcApi.md#bulkDeleteIfcUnits) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/unit/bulk_destroy | Delete many Units of a model
[**bulkDeletePropertySet**](IfcApi.md#bulkDeletePropertySet) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/propertyset/bulk_destroy | Delete many PropertySet of a model
[**bulkFullUpdateElements**](IfcApi.md#bulkFullUpdateElements) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/bulk_update | Update many elements at once (only changing fields may be defined)
[**bulkFullUpdateIfcProperty**](IfcApi.md#bulkFullUpdateIfcProperty) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/property/bulk_update | Update some fields of many properties of a model
[**bulkRemoveClassificationsOfElement**](IfcApi.md#bulkRemoveClassificationsOfElement) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/classification/bulk_destroy | Remove many classifications from an element
[**bulkRemoveElementsFromClassification**](IfcApi.md#bulkRemoveElementsFromClassification) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/classification/{ifc_classification_pk}/element/bulk_destroy | Remove the classifications from all elements
[**bulkUpdateElements**](IfcApi.md#bulkUpdateElements) | **PUT** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/bulk_update | Update many elements at once (all field must be defined)
[**bulkUpdateIfcProperty**](IfcApi.md#bulkUpdateIfcProperty) | **PUT** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/property/bulk_update | Update all fields of many properties of a model
[**createClassificationElementRelations**](IfcApi.md#createClassificationElementRelations) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/classification-element | Create association between existing classification and existing element
[**createClassificationsOfElement**](IfcApi.md#createClassificationsOfElement) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/classification | Create one or many classifications to an element
[**createElement**](IfcApi.md#createElement) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element | Create an element in the model
[**createElementPropertySet**](IfcApi.md#createElementPropertySet) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/propertyset | Create a PropertySets to an element
[**createElementPropertySetProperty**](IfcApi.md#createElementPropertySetProperty) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/propertyset/{propertyset_pk}/property | Create a property to a PropertySet
[**createElementPropertySetPropertyDefinition**](IfcApi.md#createElementPropertySetPropertyDefinition) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/propertyset/{propertyset_pk}/property/{property_pk}/propertydefinition | Create a Definition to a Property
[**createElementPropertySetPropertyDefinitionUnit**](IfcApi.md#createElementPropertySetPropertyDefinitionUnit) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/propertyset/{propertyset_pk}/property/{property_pk}/propertydefinition/{propertydefinition_pk}/unit | Create a Unit to a Definition
[**createIfcPropertyDefinition**](IfcApi.md#createIfcPropertyDefinition) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/propertydefinition | Create a PropertyDefinition on the model
[**createIfcUnit**](IfcApi.md#createIfcUnit) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/unit | Create a Unit on a model
[**createPropertySet**](IfcApi.md#createPropertySet) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/propertyset | Create a PropertySet
[**createPropertySetElementRelations**](IfcApi.md#createPropertySetElementRelations) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/propertyset-element | Create association between PropertySet and element
[**createRawElements**](IfcApi.md#createRawElements) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/raw | Create elements in an optimized format
[**createSpace**](IfcApi.md#createSpace) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/space | Create a space in the model
[**createZone**](IfcApi.md#createZone) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/zone | Create a zone in the model
[**createZoneSpace**](IfcApi.md#createZoneSpace) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/zone/{zone_pk}/space | Create a space in a zone
[**deleteElement**](IfcApi.md#deleteElement) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{uuid} | Delete a zone of a model
[**deleteIfc**](IfcApi.md#deleteIfc) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{id} | Delete a model
[**deleteIfcProperty**](IfcApi.md#deleteIfcProperty) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/property/{id} | Delete a Property of a model
[**deleteIfcPropertyDefinition**](IfcApi.md#deleteIfcPropertyDefinition) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/propertydefinition/{id} | Delete a PropertyDefinitions of a model
[**deleteIfcUnit**](IfcApi.md#deleteIfcUnit) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/unit/{id} | Delete a Unit of a model
[**deletePropertySet**](IfcApi.md#deletePropertySet) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/propertyset/{id} | Delete a PropertySet of a model
[**deleteSpace**](IfcApi.md#deleteSpace) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/space/{id} | Delete a space
[**deleteZone**](IfcApi.md#deleteZone) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/zone/{id} | Delete a zone of a model
[**deleteZoneSpace**](IfcApi.md#deleteZoneSpace) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/zone/{zone_pk}/space/{id} | Delete a space of a zone
[**fullUpdateElement**](IfcApi.md#fullUpdateElement) | **PUT** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{uuid} | Update all fields of an element
[**fullUpdateIfc**](IfcApi.md#fullUpdateIfc) | **PUT** /cloud/{cloud_pk}/project/{project_pk}/ifc/{id} | Update all fields of a model
[**fullUpdateIfcProperty**](IfcApi.md#fullUpdateIfcProperty) | **PUT** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/property/{id} | Update some fields of a Property
[**fullUpdateIfcPropertyDefinition**](IfcApi.md#fullUpdateIfcPropertyDefinition) | **PUT** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/propertydefinition/{id} | Update all fields of many PropertyDefinitions of a model
[**fullUpdateIfcUnit**](IfcApi.md#fullUpdateIfcUnit) | **PUT** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/unit/{id} | Update all fields of a Unit of a model
[**fullUpdatePropertySet**](IfcApi.md#fullUpdatePropertySet) | **PUT** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/propertyset/{id} | Update all fields of a PropertySet
[**fullUpdateSpace**](IfcApi.md#fullUpdateSpace) | **PUT** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/space/{id} | Update all fields of a space
[**fullUpdateZone**](IfcApi.md#fullUpdateZone) | **PUT** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/zone/{id} | Update all fields of a zone
[**fullUpdateZoneSpace**](IfcApi.md#fullUpdateZoneSpace) | **PUT** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/zone/{zone_pk}/space/{id} | Update all fields of a space
[**getClassificationsOfElement**](IfcApi.md#getClassificationsOfElement) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/classification | Retrieve all classifications of an element
[**getElement**](IfcApi.md#getElement) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{uuid} | Retrieve an element of a model
[**getElementPropertySet**](IfcApi.md#getElementPropertySet) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/propertyset/{id} | Retrieve a PropertySet of an element
[**getElementPropertySetProperties**](IfcApi.md#getElementPropertySetProperties) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/propertyset/{propertyset_pk}/property | Retrieve all Properties of a PropertySet
[**getElementPropertySetProperty**](IfcApi.md#getElementPropertySetProperty) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/propertyset/{propertyset_pk}/property/{id} | Retrieve a Property of a PropertySet
[**getElementPropertySetPropertyDefinition**](IfcApi.md#getElementPropertySetPropertyDefinition) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/propertyset/{propertyset_pk}/property/{property_pk}/propertydefinition/{id} | Retrieve a Definition of a Property
[**getElementPropertySetPropertyDefinitionUnit**](IfcApi.md#getElementPropertySetPropertyDefinitionUnit) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/propertyset/{propertyset_pk}/property/{property_pk}/propertydefinition/{propertydefinition_pk}/unit/{id} | Retrieve a Unit of a Definition
[**getElementPropertySetPropertyDefinitionUnits**](IfcApi.md#getElementPropertySetPropertyDefinitionUnits) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/propertyset/{propertyset_pk}/property/{property_pk}/propertydefinition/{propertydefinition_pk}/unit | Retrieve all Units of a Definition
[**getElementPropertySetPropertyDefinitions**](IfcApi.md#getElementPropertySetPropertyDefinitions) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/propertyset/{propertyset_pk}/property/{property_pk}/propertydefinition | Retrieve all Definitions of a PropertySet
[**getElementPropertySets**](IfcApi.md#getElementPropertySets) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/propertyset | Retrieve all PropertySets of an element
[**getElements**](IfcApi.md#getElements) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element | Retrieve all elements of a model
[**getElementsFromClassification**](IfcApi.md#getElementsFromClassification) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/classification/{ifc_classification_pk}/element | Retrieve all elements with the classification
[**getIfc**](IfcApi.md#getIfc) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{id} | Retrieve one model
[**getIfcBVH**](IfcApi.md#getIfcBVH) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{id}/map | Get svg file
[**getIfcClassifications**](IfcApi.md#getIfcClassifications) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/classification | Retrieve all classifications in a model
[**getIfcGLTF**](IfcApi.md#getIfcGLTF) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{id}/gltf | Get gltf file
[**getIfcMap**](IfcApi.md#getIfcMap) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{id}/bvh | Get bvh file
[**getIfcProperties**](IfcApi.md#getIfcProperties) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/property | Retrieve all Properties of a model
[**getIfcProperty**](IfcApi.md#getIfcProperty) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/property/{id} | Retrieve a Property of a model
[**getIfcPropertyDefinition**](IfcApi.md#getIfcPropertyDefinition) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/propertydefinition/{id} | Retrieve a PropertyDefinition of a model
[**getIfcPropertyDefinitions**](IfcApi.md#getIfcPropertyDefinitions) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/propertydefinition | Retrieve all PropertyDefinitions of a model
[**getIfcStructure**](IfcApi.md#getIfcStructure) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{id}/structure | Get structure file
[**getIfcSystems**](IfcApi.md#getIfcSystems) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{id}/systems | Get systems file
[**getIfcUnit**](IfcApi.md#getIfcUnit) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/unit/{id} | Retrieve a Unit of a model
[**getIfcUnits**](IfcApi.md#getIfcUnits) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/unit | Retrieve all Units of a model
[**getIfcs**](IfcApi.md#getIfcs) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc | Retrieve all models
[**getPropertySet**](IfcApi.md#getPropertySet) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/propertyset/{id} | Retrieve a PropertySet of a model
[**getPropertySets**](IfcApi.md#getPropertySets) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/propertyset | Retrieve all PropertySets of a model
[**getRawElements**](IfcApi.md#getRawElements) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/raw | Retrieve all elements in a optimized format
[**getSpace**](IfcApi.md#getSpace) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/space/{id} | Retrieve one space of the model
[**getSpaces**](IfcApi.md#getSpaces) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/space | Retrieve all spaces of the model
[**getZone**](IfcApi.md#getZone) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/zone/{id} | Retrieve one zone of a model
[**getZoneSpace**](IfcApi.md#getZoneSpace) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/zone/{zone_pk}/space/{id} | Retrieve one space of a zone
[**getZoneSpaces**](IfcApi.md#getZoneSpaces) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/zone/{zone_pk}/space | Retrieve all spaces of a zone
[**getZones**](IfcApi.md#getZones) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/zone | Retrieve all zones of a model
[**listClassificationElementRelations**](IfcApi.md#listClassificationElementRelations) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/classification-element | List all associations between classifications and elements
[**removeClassificationOfElement**](IfcApi.md#removeClassificationOfElement) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/classification/{id} | Remove a classification from an element
[**removeElementPropertySet**](IfcApi.md#removeElementPropertySet) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/propertyset/{id} | Remove a PropertySet from an element
[**removeElementPropertySetProperty**](IfcApi.md#removeElementPropertySetProperty) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/propertyset/{propertyset_pk}/property/{id} | Remove a property from a PropertySet
[**removeElementPropertySetPropertyDefinition**](IfcApi.md#removeElementPropertySetPropertyDefinition) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/propertyset/{propertyset_pk}/property/{property_pk}/propertydefinition/{id} | Remove a Definition from a Property
[**removeElementPropertySetPropertyDefinitionUnit**](IfcApi.md#removeElementPropertySetPropertyDefinitionUnit) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/propertyset/{propertyset_pk}/property/{property_pk}/propertydefinition/{propertydefinition_pk}/unit/{id} | Remove a Unit from a Definition
[**removeElementsFromClassification**](IfcApi.md#removeElementsFromClassification) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/classification/{ifc_classification_pk}/element/{uuid} | Remove the classification from all elements
[**updateElement**](IfcApi.md#updateElement) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{uuid} | Update some fields of a zone
[**updateIfc**](IfcApi.md#updateIfc) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{id} | Update some fields of a model
[**updateIfcFiles**](IfcApi.md#updateIfcFiles) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{id}/files | Update models file (gltf, svg, structure, etc)
[**updateIfcProperty**](IfcApi.md#updateIfcProperty) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/property/{id} | Update some fields of a Property
[**updateIfcPropertyDefinition**](IfcApi.md#updateIfcPropertyDefinition) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/propertydefinition/{id} | Update some fields of many PropertyDefinitions of a model
[**updateIfcUnit**](IfcApi.md#updateIfcUnit) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/unit/{id} | Update some fields of a Unit of a model
[**updatePropertySet**](IfcApi.md#updatePropertySet) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/propertyset/{id} | Update some fields of a PropertySet
[**updateSpace**](IfcApi.md#updateSpace) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/space/{id} | Update some fields of a space
[**updateZone**](IfcApi.md#updateZone) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/zone/{id} | Update some fields of a zone
[**updateZoneSpace**](IfcApi.md#updateZoneSpace) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/zone/{zone_pk}/space/{id} | Update some fields of a space


<a name="bulkDeleteIfcClassifications"></a>
# **bulkDeleteIfcClassifications**
> bulkDeleteIfcClassifications(cloudPk, ifcPk, projectPk)

Remove all classifications from model&#39;s elements

             Delete relation between filtered classifications (eg. /classifications?name&#x3D;untec) and all ifc&#39;s elements.             No classification will be deleted on this endpoint, only the relation between ifc&#39;s elements and their classification.          Required scopes: ifc:write

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
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
apiInstance.bulkDeleteIfcClassifications(cloudPk, ifcPk, projectPk).then(function() {
  console.log('API called successfully.');
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

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="bulkDeleteIfcProperties"></a>
# **bulkDeleteIfcProperties**
> bulkDeleteIfcProperties(cloudPk, ifcPk, projectPk)

Delete many Property of a model

         Bulk delete.         You should send a list of ids in the body.         These ids (or relations with these ids in case of many-to-many relation deletion) will be deleted      Required scopes: ifc:write

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
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
apiInstance.bulkDeleteIfcProperties(cloudPk, ifcPk, projectPk).then(function() {
  console.log('API called successfully.');
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

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="bulkDeleteIfcPropertyDefinitions"></a>
# **bulkDeleteIfcPropertyDefinitions**
> bulkDeleteIfcPropertyDefinitions(cloudPk, ifcPk, projectPk)

Delete many PropertyDefinitions of a model

         Bulk delete.         You should send a list of ids in the body.         These ids (or relations with these ids in case of many-to-many relation deletion) will be deleted      Required scopes: ifc:write

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
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
apiInstance.bulkDeleteIfcPropertyDefinitions(cloudPk, ifcPk, projectPk).then(function() {
  console.log('API called successfully.');
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

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="bulkDeleteIfcUnits"></a>
# **bulkDeleteIfcUnits**
> bulkDeleteIfcUnits(cloudPk, ifcPk, projectPk)

Delete many Units of a model

         Bulk delete.         You should send a list of ids in the body.         These ids (or relations with these ids in case of many-to-many relation deletion) will be deleted      Required scopes: ifc:write

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
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
apiInstance.bulkDeleteIfcUnits(cloudPk, ifcPk, projectPk).then(function() {
  console.log('API called successfully.');
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

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="bulkDeletePropertySet"></a>
# **bulkDeletePropertySet**
> bulkDeletePropertySet(cloudPk, ifcPk, projectPk)

Delete many PropertySet of a model

         Bulk delete.         You should send a list of ids in the body.         These ids (or relations with these ids in case of many-to-many relation deletion) will be deleted      Required scopes: ifc:write

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
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
apiInstance.bulkDeletePropertySet(cloudPk, ifcPk, projectPk).then(function() {
  console.log('API called successfully.');
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

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="bulkFullUpdateElements"></a>
# **bulkFullUpdateElements**
> [Element] bulkFullUpdateElements(cloudPk, ifcPk, projectPk, element)

Update many elements at once (only changing fields may be defined)

         Bulk update.         Similar to update, but the body should be a list of objects to patch or put         The response will be a list (in the same order) of updated objects or of errors if any         If at least one update succeeded, the status code will be 200. If every update failed, the status code we&#39;ll be 400 with the list of errors      Required scopes: ifc:write

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
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
var element = [new bimdata.Element()]; // [Element] | 
apiInstance.bulkFullUpdateElements(cloudPk, ifcPk, projectPk, element).then(function(data) {
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
 **element** | [**[Element]**](Array.md)|  | 

### Return type

[**[Element]**](Element.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bulkFullUpdateIfcProperty"></a>
# **bulkFullUpdateIfcProperty**
> [Property] bulkFullUpdateIfcProperty(cloudPk, ifcPk, projectPk, property)

Update some fields of many properties of a model

         Bulk update.         Similar to update, but the body should be a list of objects to patch or put         The response will be a list (in the same order) of updated objects or of errors if any         If at least one update succeeded, the status code will be 200. If every update failed, the status code we&#39;ll be 400 with the list of errors      Required scopes: ifc:write

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
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
var property = [new bimdata.Property()]; // [Property] | 
apiInstance.bulkFullUpdateIfcProperty(cloudPk, ifcPk, projectPk, property).then(function(data) {
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
 **property** | [**[Property]**](Array.md)|  | 

### Return type

[**[Property]**](Property.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bulkRemoveClassificationsOfElement"></a>
# **bulkRemoveClassificationsOfElement**
> bulkRemoveClassificationsOfElement(cloudPk, elementUuid, ifcPk, projectPk)

Remove many classifications from an element

         Bulk delete.         You should send a list of ids in the body.         These ids (or relations with these ids in case of many-to-many relation deletion) will be deleted      Required scopes: ifc:write

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
var elementUuid = "elementUuid_example"; // String | 
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
apiInstance.bulkRemoveClassificationsOfElement(cloudPk, elementUuid, ifcPk, projectPk).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **elementUuid** | **String**|  | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="bulkRemoveElementsFromClassification"></a>
# **bulkRemoveElementsFromClassification**
> bulkRemoveElementsFromClassification(cloudPk, ifcClassificationPk, ifcPk, projectPk)

Remove the classifications from all elements

         Bulk delete.         You should send a list of ids in the body.         These ids (or relations with these ids in case of many-to-many relation deletion) will be deleted      Required scopes: ifc:write

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
var ifcClassificationPk = "ifcClassificationPk_example"; // String | 
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
apiInstance.bulkRemoveElementsFromClassification(cloudPk, ifcClassificationPk, ifcPk, projectPk).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **ifcClassificationPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="bulkUpdateElements"></a>
# **bulkUpdateElements**
> [Element] bulkUpdateElements(cloudPk, ifcPk, projectPk, element)

Update many elements at once (all field must be defined)

         Bulk update.         Similar to update, but the body should be a list of objects to patch or put         The response will be a list (in the same order) of updated objects or of errors if any         If at least one update succeeded, the status code will be 200. If every update failed, the status code we&#39;ll be 400 with the list of errors      Required scopes: ifc:write

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
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
var element = [new bimdata.Element()]; // [Element] | 
apiInstance.bulkUpdateElements(cloudPk, ifcPk, projectPk, element).then(function(data) {
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
 **element** | [**[Element]**](Array.md)|  | 

### Return type

[**[Element]**](Element.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bulkUpdateIfcProperty"></a>
# **bulkUpdateIfcProperty**
> [Property] bulkUpdateIfcProperty(cloudPk, ifcPk, projectPk, property)

Update all fields of many properties of a model

         Bulk update.         Similar to update, but the body should be a list of objects to patch or put         The response will be a list (in the same order) of updated objects or of errors if any         If at least one update succeeded, the status code will be 200. If every update failed, the status code we&#39;ll be 400 with the list of errors      Required scopes: ifc:write

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
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
var property = [new bimdata.Property()]; // [Property] | 
apiInstance.bulkUpdateIfcProperty(cloudPk, ifcPk, projectPk, property).then(function(data) {
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
 **property** | [**[Property]**](Array.md)|  | 

### Return type

[**[Property]**](Property.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createClassificationElementRelations"></a>
# **createClassificationElementRelations**
> createClassificationElementRelations(cloudPk, ifcPk, projectPk, elementClassificationRelation)

Create association between existing classification and existing element

Create association between existing classification and existing element Required scopes: ifc:write

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
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
var elementClassificationRelation = [new bimdata.ElementClassificationRelation()]; // [ElementClassificationRelation] | 
apiInstance.createClassificationElementRelations(cloudPk, ifcPk, projectPk, elementClassificationRelation).then(function() {
  console.log('API called successfully.');
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
 **elementClassificationRelation** | [**[ElementClassificationRelation]**](Array.md)|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="createClassificationsOfElement"></a>
# **createClassificationsOfElement**
> [Classification] createClassificationsOfElement(cloudPk, elementUuid, ifcPk, projectPk, classification)

Create one or many classifications to an element

         Bulk create available.         You can either post an object or a list of objects.         Is you post a list, the response will be a list (in the same order) of created objects or of errors if any         If at least one create succeeded, the status code will be 201. If every create failed, the status code we&#39;ll be 400 with the list of errors          If classification created already exists, it will just be added to item&#39;s classifications and will not be duplicated      Required scopes: ifc:write

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
var elementUuid = "elementUuid_example"; // String | 
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
var classification = [new bimdata.Classification()]; // [Classification] | 
apiInstance.createClassificationsOfElement(cloudPk, elementUuid, ifcPk, projectPk, classification).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **elementUuid** | **String**|  | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **classification** | [**[Classification]**](Array.md)|  | 

### Return type

[**[Classification]**](Classification.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createElement"></a>
# **createElement**
> [Element] createElement(cloudPk, ifcPk, projectPk, element)

Create an element in the model

         Bulk create available.         You can either post an object or a list of objects.         Is you post a list, the response will be a list (in the same order) of created objects or of errors if any         If at least one create succeeded, the status code will be 201. If every create failed, the status code we&#39;ll be 400 with the list of errors      Required scopes: ifc:write

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
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
var element = [new bimdata.Element()]; // [Element] | 
apiInstance.createElement(cloudPk, ifcPk, projectPk, element).then(function(data) {
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
 **element** | [**[Element]**](Array.md)|  | 

### Return type

[**[Element]**](Element.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createElementPropertySet"></a>
# **createElementPropertySet**
> PropertySet createElementPropertySet(cloudPk, elementUuid, ifcPk, projectPk, propertySet)

Create a PropertySets to an element

Create a PropertySets that will be automatically linked to the element Required scopes: ifc:write

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
var elementUuid = "elementUuid_example"; // String | 
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
var propertySet = new bimdata.PropertySet(); // PropertySet | 
apiInstance.createElementPropertySet(cloudPk, elementUuid, ifcPk, projectPk, propertySet).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **elementUuid** | **String**|  | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **propertySet** | [**PropertySet**](PropertySet.md)|  | 

### Return type

[**PropertySet**](PropertySet.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createElementPropertySetProperty"></a>
# **createElementPropertySetProperty**
> Property createElementPropertySetProperty(cloudPk, elementUuid, ifcPk, projectPk, propertysetPk, property)

Create a property to a PropertySet

 Required scopes: ifc:write

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
var elementUuid = "elementUuid_example"; // String | 
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
var propertysetPk = "propertysetPk_example"; // String | 
var property = new bimdata.Property(); // Property | 
apiInstance.createElementPropertySetProperty(cloudPk, elementUuid, ifcPk, projectPk, propertysetPk, property).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **elementUuid** | **String**|  | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **propertysetPk** | **String**|  | 
 **property** | [**Property**](Property.md)|  | 

### Return type

[**Property**](Property.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createElementPropertySetPropertyDefinition"></a>
# **createElementPropertySetPropertyDefinition**
> PropertyDefinition createElementPropertySetPropertyDefinition(cloudPk, elementUuid, ifcPk, projectPk, propertyPk, propertysetPk, propertyDefinition)

Create a Definition to a Property

 Required scopes: ifc:write

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
var elementUuid = "elementUuid_example"; // String | 
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
var propertyPk = "propertyPk_example"; // String | 
var propertysetPk = "propertysetPk_example"; // String | 
var propertyDefinition = new bimdata.PropertyDefinition(); // PropertyDefinition | 
apiInstance.createElementPropertySetPropertyDefinition(cloudPk, elementUuid, ifcPk, projectPk, propertyPk, propertysetPk, propertyDefinition).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **elementUuid** | **String**|  | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **propertyPk** | **String**|  | 
 **propertysetPk** | **String**|  | 
 **propertyDefinition** | [**PropertyDefinition**](PropertyDefinition.md)|  | 

### Return type

[**PropertyDefinition**](PropertyDefinition.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createElementPropertySetPropertyDefinitionUnit"></a>
# **createElementPropertySetPropertyDefinitionUnit**
> Unit createElementPropertySetPropertyDefinitionUnit(cloudPk, elementUuid, ifcPk, projectPk, propertyPk, propertydefinitionPk, propertysetPk, unit)

Create a Unit to a Definition

Create a Unit to a Definition Required scopes: ifc:write

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
var elementUuid = "elementUuid_example"; // String | 
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
var propertyPk = "propertyPk_example"; // String | 
var propertydefinitionPk = "propertydefinitionPk_example"; // String | 
var propertysetPk = "propertysetPk_example"; // String | 
var unit = new bimdata.Unit(); // Unit | 
apiInstance.createElementPropertySetPropertyDefinitionUnit(cloudPk, elementUuid, ifcPk, projectPk, propertyPk, propertydefinitionPk, propertysetPk, unit).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **elementUuid** | **String**|  | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **propertyPk** | **String**|  | 
 **propertydefinitionPk** | **String**|  | 
 **propertysetPk** | **String**|  | 
 **unit** | [**Unit**](Unit.md)|  | 

### Return type

[**Unit**](Unit.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createIfcPropertyDefinition"></a>
# **createIfcPropertyDefinition**
> [PropertyDefinition] createIfcPropertyDefinition(cloudPk, ifcPk, projectPk, propertyDefinition)

Create a PropertyDefinition on the model

         Bulk create available.         You can either post an object or a list of objects.         Is you post a list, the response will be a list (in the same order) of created objects or of errors if any         If at least one create succeeded, the status code will be 201. If every create failed, the status code we&#39;ll be 400 with the list of errors      Required scopes: ifc:write

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
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
var propertyDefinition = [new bimdata.PropertyDefinition()]; // [PropertyDefinition] | 
apiInstance.createIfcPropertyDefinition(cloudPk, ifcPk, projectPk, propertyDefinition).then(function(data) {
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
 **propertyDefinition** | [**[PropertyDefinition]**](Array.md)|  | 

### Return type

[**[PropertyDefinition]**](PropertyDefinition.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createIfcUnit"></a>
# **createIfcUnit**
> [Unit] createIfcUnit(cloudPk, ifcPk, projectPk, unit)

Create a Unit on a model

         Bulk create available.         You can either post an object or a list of objects.         Is you post a list, the response will be a list (in the same order) of created objects or of errors if any         If at least one create succeeded, the status code will be 201. If every create failed, the status code we&#39;ll be 400 with the list of errors      Required scopes: ifc:write

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
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
var unit = [new bimdata.Unit()]; // [Unit] | 
apiInstance.createIfcUnit(cloudPk, ifcPk, projectPk, unit).then(function(data) {
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
 **unit** | [**[Unit]**](Array.md)|  | 

### Return type

[**[Unit]**](Unit.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createPropertySet"></a>
# **createPropertySet**
> [PropertySet] createPropertySet(cloudPk, ifcPk, projectPk, propertySet)

Create a PropertySet

         Bulk create available.         You can either post an object or a list of objects.         Is you post a list, the response will be a list (in the same order) of created objects or of errors if any         If at least one create succeeded, the status code will be 201. If every create failed, the status code we&#39;ll be 400 with the list of errors      Required scopes: ifc:write

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
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
var propertySet = [new bimdata.PropertySet()]; // [PropertySet] | 
apiInstance.createPropertySet(cloudPk, ifcPk, projectPk, propertySet).then(function(data) {
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
 **propertySet** | [**[PropertySet]**](Array.md)|  | 

### Return type

[**[PropertySet]**](PropertySet.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createPropertySetElementRelations"></a>
# **createPropertySetElementRelations**
> createPropertySetElementRelations(cloudPk, ifcPk, projectPk, elementPropertySetRelation)

Create association between PropertySet and element

Create association between existing PropertySet and existing element Required scopes: ifc:write

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
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
var elementPropertySetRelation = [new bimdata.ElementPropertySetRelation()]; // [ElementPropertySetRelation] | 
apiInstance.createPropertySetElementRelations(cloudPk, ifcPk, projectPk, elementPropertySetRelation).then(function() {
  console.log('API called successfully.');
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
 **elementPropertySetRelation** | [**[ElementPropertySetRelation]**](Array.md)|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="createRawElements"></a>
# **createRawElements**
> createRawElements(cloudPk, ifcPk, projectPk, rawElements)

Create elements in an optimized format

         You can use the same optimized structure to post multiple elements, property_sets, properties, definitions and units at once.         If the structure is malformed, an error 500 without more explaination may be returned          Required scopes: ifc:write

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
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
var rawElements = new bimdata.RawElements(); // RawElements | 
apiInstance.createRawElements(cloudPk, ifcPk, projectPk, rawElements).then(function() {
  console.log('API called successfully.');
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
 **rawElements** | [**RawElements**](RawElements.md)|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="createSpace"></a>
# **createSpace**
> [Space] createSpace(cloudPk, ifcPk, projectPk, space)

Create a space in the model

         Bulk create available.         You can either post an object or a list of objects.         Is you post a list, the response will be a list (in the same order) of created objects or of errors if any         If at least one create succeeded, the status code will be 201. If every create failed, the status code we&#39;ll be 400 with the list of errors      Required scopes: ifc:write

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
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
var space = [new bimdata.Space()]; // [Space] | 
apiInstance.createSpace(cloudPk, ifcPk, projectPk, space).then(function(data) {
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
 **space** | [**[Space]**](Array.md)|  | 

### Return type

[**[Space]**](Space.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createZone"></a>
# **createZone**
> [Zone] createZone(cloudPk, ifcPk, projectPk, zone)

Create a zone in the model

         Bulk create available.         You can either post an object or a list of objects.         Is you post a list, the response will be a list (in the same order) of created objects or of errors if any         If at least one create succeeded, the status code will be 201. If every create failed, the status code we&#39;ll be 400 with the list of errors      Required scopes: ifc:write

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
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
var zone = [new bimdata.Zone()]; // [Zone] | 
apiInstance.createZone(cloudPk, ifcPk, projectPk, zone).then(function(data) {
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
 **zone** | [**[Zone]**](Array.md)|  | 

### Return type

[**[Zone]**](Zone.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createZoneSpace"></a>
# **createZoneSpace**
> ZoneSpace createZoneSpace(cloudPk, ifcPk, projectPk, zonePk, zoneSpace)

Create a space in a zone

The IFC file will not be updated. The created space will be accessible over the API and when exporting an IFC file Required scopes: ifc:write

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
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
var zonePk = "zonePk_example"; // String | 
var zoneSpace = new bimdata.ZoneSpace(); // ZoneSpace | 
apiInstance.createZoneSpace(cloudPk, ifcPk, projectPk, zonePk, zoneSpace).then(function(data) {
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
 **zonePk** | **String**|  | 
 **zoneSpace** | [**ZoneSpace**](ZoneSpace.md)|  | 

### Return type

[**ZoneSpace**](ZoneSpace.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteElement"></a>
# **deleteElement**
> deleteElement(cloudPk, ifcPk, projectPk, uuid)

Delete a zone of a model

The IFC file will not be updated. The remaining elements are available in API and will be available when exporting an IFC file Required scopes: ifc:write

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
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
var uuid = "uuid_example"; // String | IFC element or element type UUID
apiInstance.deleteElement(cloudPk, ifcPk, projectPk, uuid).then(function() {
  console.log('API called successfully.');
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
 **uuid** | **String**| IFC element or element type UUID | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteIfc"></a>
# **deleteIfc**
> deleteIfc(cloudPk, id, projectPk)

Delete a model

It will delete the related document too Required scopes: ifc:write

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
var id = 56; // Number | A unique integer value identifying this ifc.
var projectPk = "projectPk_example"; // String | 
apiInstance.deleteIfc(cloudPk, id, projectPk).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this ifc. | 
 **projectPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteIfcProperty"></a>
# **deleteIfcProperty**
> deleteIfcProperty(cloudPk, id, ifcPk, projectPk)

Delete a Property of a model

Delete a Property of a model Required scopes: ifc:write

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
var id = 56; // Number | A unique integer value identifying this property.
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
apiInstance.deleteIfcProperty(cloudPk, id, ifcPk, projectPk).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this property. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteIfcPropertyDefinition"></a>
# **deleteIfcPropertyDefinition**
> deleteIfcPropertyDefinition(cloudPk, id, ifcPk, projectPk)

Delete a PropertyDefinitions of a model

Delete a PropertyDefinitions of a model Required scopes: ifc:write

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
var id = 56; // Number | A unique integer value identifying this property definition.
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
apiInstance.deleteIfcPropertyDefinition(cloudPk, id, ifcPk, projectPk).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this property definition. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteIfcUnit"></a>
# **deleteIfcUnit**
> deleteIfcUnit(cloudPk, id, ifcPk, projectPk)

Delete a Unit of a model

Delete a Unit of a model Required scopes: ifc:write

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
var id = 56; // Number | A unique integer value identifying this unit.
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
apiInstance.deleteIfcUnit(cloudPk, id, ifcPk, projectPk).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this unit. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deletePropertySet"></a>
# **deletePropertySet**
> deletePropertySet(cloudPk, id, ifcPk, projectPk)

Delete a PropertySet of a model

Delete a PropertySet of a model Required scopes: ifc:write

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
var id = 56; // Number | A unique integer value identifying this property set.
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
apiInstance.deletePropertySet(cloudPk, id, ifcPk, projectPk).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this property set. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteSpace"></a>
# **deleteSpace**
> deleteSpace(cloudPk, id, ifcPk, projectPk)

Delete a space

It will not delete related zones. The IFC file will not be updated. The remaining spaces are available in API and will be available when exporting an IFC file Required scopes: ifc:write

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
var id = 56; // Number | A unique integer value identifying this space.
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
apiInstance.deleteSpace(cloudPk, id, ifcPk, projectPk).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this space. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteZone"></a>
# **deleteZone**
> deleteZone(cloudPk, id, ifcPk, projectPk)

Delete a zone of a model

The IFC file will not be updated. The remaining zones are available in API and will be available when exporting an IFC file Required scopes: ifc:write

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
var id = 56; // Number | A unique integer value identifying this zone.
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
apiInstance.deleteZone(cloudPk, id, ifcPk, projectPk).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this zone. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteZoneSpace"></a>
# **deleteZoneSpace**
> deleteZoneSpace(cloudPk, id, ifcPk, projectPk, zonePk)

Delete a space of a zone

The IFC file will not be updated. The remaining spaces are available in API and will be available when exporting an IFC file Required scopes: ifc:write

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
var id = 56; // Number | A unique integer value identifying this space.
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
var zonePk = "zonePk_example"; // String | 
apiInstance.deleteZoneSpace(cloudPk, id, ifcPk, projectPk, zonePk).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this space. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **zonePk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="fullUpdateElement"></a>
# **fullUpdateElement**
> Element fullUpdateElement(cloudPk, ifcPk, projectPk, uuid, element)

Update all fields of an element

Update all fields of a element. The IFC file will not be updated. The created element will be accessible over the API and when exporting an IFC file Required scopes: ifc:write

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
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
var uuid = "uuid_example"; // String | IFC element or element type UUID
var element = new bimdata.Element(); // Element | 
apiInstance.fullUpdateElement(cloudPk, ifcPk, projectPk, uuid, element).then(function(data) {
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
 **uuid** | **String**| IFC element or element type UUID | 
 **element** | [**Element**](Element.md)|  | 

### Return type

[**Element**](Element.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdateIfc"></a>
# **fullUpdateIfc**
> Ifc fullUpdateIfc(cloudPk, id, projectPk, ifc)

Update all fields of a model

Update all fields of a model Required scopes: ifc:write

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
var id = 56; // Number | A unique integer value identifying this ifc.
var projectPk = "projectPk_example"; // String | 
var ifc = new bimdata.Ifc(); // Ifc | 
apiInstance.fullUpdateIfc(cloudPk, id, projectPk, ifc).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this ifc. | 
 **projectPk** | **String**|  | 
 **ifc** | [**Ifc**](Ifc.md)|  | 

### Return type

[**Ifc**](Ifc.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdateIfcProperty"></a>
# **fullUpdateIfcProperty**
> Property fullUpdateIfcProperty(cloudPk, id, ifcPk, projectPk, property)

Update some fields of a Property

Update some fields of a Property Required scopes: ifc:write

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
var id = 56; // Number | A unique integer value identifying this property.
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
var property = new bimdata.Property(); // Property | 
apiInstance.fullUpdateIfcProperty(cloudPk, id, ifcPk, projectPk, property).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this property. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **property** | [**Property**](Property.md)|  | 

### Return type

[**Property**](Property.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdateIfcPropertyDefinition"></a>
# **fullUpdateIfcPropertyDefinition**
> PropertyDefinition fullUpdateIfcPropertyDefinition(cloudPk, id, ifcPk, projectPk, propertyDefinition)

Update all fields of many PropertyDefinitions of a model

 Required scopes: ifc:write

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
var id = 56; // Number | A unique integer value identifying this property definition.
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
var propertyDefinition = new bimdata.PropertyDefinition(); // PropertyDefinition | 
apiInstance.fullUpdateIfcPropertyDefinition(cloudPk, id, ifcPk, projectPk, propertyDefinition).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this property definition. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **propertyDefinition** | [**PropertyDefinition**](PropertyDefinition.md)|  | 

### Return type

[**PropertyDefinition**](PropertyDefinition.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdateIfcUnit"></a>
# **fullUpdateIfcUnit**
> Unit fullUpdateIfcUnit(cloudPk, id, ifcPk, projectPk, unit)

Update all fields of a Unit of a model

 Required scopes: ifc:write

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
var id = 56; // Number | A unique integer value identifying this unit.
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
var unit = new bimdata.Unit(); // Unit | 
apiInstance.fullUpdateIfcUnit(cloudPk, id, ifcPk, projectPk, unit).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this unit. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **unit** | [**Unit**](Unit.md)|  | 

### Return type

[**Unit**](Unit.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdatePropertySet"></a>
# **fullUpdatePropertySet**
> PropertySet fullUpdatePropertySet(cloudPk, id, ifcPk, projectPk, propertySet)

Update all fields of a PropertySet

Update all fields of a PropertySet Required scopes: ifc:write

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
var id = 56; // Number | A unique integer value identifying this property set.
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
var propertySet = new bimdata.PropertySet(); // PropertySet | 
apiInstance.fullUpdatePropertySet(cloudPk, id, ifcPk, projectPk, propertySet).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this property set. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **propertySet** | [**PropertySet**](PropertySet.md)|  | 

### Return type

[**PropertySet**](PropertySet.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdateSpace"></a>
# **fullUpdateSpace**
> Space fullUpdateSpace(cloudPk, id, ifcPk, projectPk, space)

Update all fields of a space

Update all fields of a space. The IFC file will not be updated. The created space will be accessible over the API and when exporting an IFC file Required scopes: ifc:write

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
var id = 56; // Number | A unique integer value identifying this space.
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
var space = new bimdata.Space(); // Space | 
apiInstance.fullUpdateSpace(cloudPk, id, ifcPk, projectPk, space).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this space. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **space** | [**Space**](Space.md)|  | 

### Return type

[**Space**](Space.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdateZone"></a>
# **fullUpdateZone**
> Zone fullUpdateZone(cloudPk, id, ifcPk, projectPk, zone)

Update all fields of a zone

Update all fields of a zone. The IFC file will not be updated. The created zone will be accessible over the API and when exporting an IFC file Required scopes: ifc:write

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
var id = 56; // Number | A unique integer value identifying this zone.
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
var zone = new bimdata.Zone(); // Zone | 
apiInstance.fullUpdateZone(cloudPk, id, ifcPk, projectPk, zone).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this zone. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **zone** | [**Zone**](Zone.md)|  | 

### Return type

[**Zone**](Zone.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fullUpdateZoneSpace"></a>
# **fullUpdateZoneSpace**
> ZoneSpace fullUpdateZoneSpace(cloudPk, id, ifcPk, projectPk, zonePk, zoneSpace)

Update all fields of a space

Update all fields of a space. The IFC file will not be updated. The created space will be accessible over the API and when exporting an IFC file Required scopes: ifc:write

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
var id = 56; // Number | A unique integer value identifying this space.
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
var zonePk = "zonePk_example"; // String | 
var zoneSpace = new bimdata.ZoneSpace(); // ZoneSpace | 
apiInstance.fullUpdateZoneSpace(cloudPk, id, ifcPk, projectPk, zonePk, zoneSpace).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this space. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **zonePk** | **String**|  | 
 **zoneSpace** | [**ZoneSpace**](ZoneSpace.md)|  | 

### Return type

[**ZoneSpace**](ZoneSpace.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getClassificationsOfElement"></a>
# **getClassificationsOfElement**
> [Classification] getClassificationsOfElement(cloudPk, elementUuid, ifcPk, projectPk)

Retrieve all classifications of an element

Retrieve all classifications of an element Required scopes: ifc:read

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
var elementUuid = "elementUuid_example"; // String | 
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
apiInstance.getClassificationsOfElement(cloudPk, elementUuid, ifcPk, projectPk).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **elementUuid** | **String**|  | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 

### Return type

[**[Classification]**](Classification.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getElement"></a>
# **getElement**
> Element getElement(cloudPk, ifcPk, projectPk, uuid)

Retrieve an element of a model

Retrieve an element of a model Required scopes: ifc:read

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
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
var uuid = "uuid_example"; // String | IFC element or element type UUID
apiInstance.getElement(cloudPk, ifcPk, projectPk, uuid).then(function(data) {
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
 **uuid** | **String**| IFC element or element type UUID | 

### Return type

[**Element**](Element.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getElementPropertySet"></a>
# **getElementPropertySet**
> PropertySet getElementPropertySet(cloudPk, elementUuid, id, ifcPk, projectPk)

Retrieve a PropertySet of an element

Retrieve a PropertySet of an element Required scopes: ifc:read

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
var elementUuid = "elementUuid_example"; // String | 
var id = 56; // Number | A unique integer value identifying this property set.
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
apiInstance.getElementPropertySet(cloudPk, elementUuid, id, ifcPk, projectPk).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **elementUuid** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this property set. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 

### Return type

[**PropertySet**](PropertySet.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getElementPropertySetProperties"></a>
# **getElementPropertySetProperties**
> [Property] getElementPropertySetProperties(cloudPk, elementUuid, ifcPk, projectPk, propertysetPk)

Retrieve all Properties of a PropertySet

Retrieve all Properties of a PropertySet Required scopes: ifc:read

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
var elementUuid = "elementUuid_example"; // String | 
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
var propertysetPk = "propertysetPk_example"; // String | 
apiInstance.getElementPropertySetProperties(cloudPk, elementUuid, ifcPk, projectPk, propertysetPk).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **elementUuid** | **String**|  | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **propertysetPk** | **String**|  | 

### Return type

[**[Property]**](Property.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getElementPropertySetProperty"></a>
# **getElementPropertySetProperty**
> Property getElementPropertySetProperty(cloudPk, elementUuid, id, ifcPk, projectPk, propertysetPk)

Retrieve a Property of a PropertySet

Retrieve a Property of a PropertySet Required scopes: ifc:read

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
var elementUuid = "elementUuid_example"; // String | 
var id = 56; // Number | A unique integer value identifying this property.
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
var propertysetPk = "propertysetPk_example"; // String | 
apiInstance.getElementPropertySetProperty(cloudPk, elementUuid, id, ifcPk, projectPk, propertysetPk).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **elementUuid** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this property. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **propertysetPk** | **String**|  | 

### Return type

[**Property**](Property.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getElementPropertySetPropertyDefinition"></a>
# **getElementPropertySetPropertyDefinition**
> PropertyDefinition getElementPropertySetPropertyDefinition(cloudPk, elementUuid, id, ifcPk, projectPk, propertyPk, propertysetPk)

Retrieve a Definition of a Property

Retrieve a Definition of a Property Required scopes: ifc:read

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
var elementUuid = "elementUuid_example"; // String | 
var id = 56; // Number | A unique integer value identifying this property definition.
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
var propertyPk = "propertyPk_example"; // String | 
var propertysetPk = "propertysetPk_example"; // String | 
apiInstance.getElementPropertySetPropertyDefinition(cloudPk, elementUuid, id, ifcPk, projectPk, propertyPk, propertysetPk).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **elementUuid** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this property definition. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **propertyPk** | **String**|  | 
 **propertysetPk** | **String**|  | 

### Return type

[**PropertyDefinition**](PropertyDefinition.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getElementPropertySetPropertyDefinitionUnit"></a>
# **getElementPropertySetPropertyDefinitionUnit**
> Unit getElementPropertySetPropertyDefinitionUnit(cloudPk, elementUuid, id, ifcPk, projectPk, propertyPk, propertydefinitionPk, propertysetPk)

Retrieve a Unit of a Definition

Retrieve a Unit of a Definition Required scopes: ifc:read

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
var elementUuid = "elementUuid_example"; // String | 
var id = 56; // Number | A unique integer value identifying this unit.
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
var propertyPk = "propertyPk_example"; // String | 
var propertydefinitionPk = "propertydefinitionPk_example"; // String | 
var propertysetPk = "propertysetPk_example"; // String | 
apiInstance.getElementPropertySetPropertyDefinitionUnit(cloudPk, elementUuid, id, ifcPk, projectPk, propertyPk, propertydefinitionPk, propertysetPk).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **elementUuid** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this unit. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **propertyPk** | **String**|  | 
 **propertydefinitionPk** | **String**|  | 
 **propertysetPk** | **String**|  | 

### Return type

[**Unit**](Unit.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getElementPropertySetPropertyDefinitionUnits"></a>
# **getElementPropertySetPropertyDefinitionUnits**
> [Unit] getElementPropertySetPropertyDefinitionUnits(cloudPk, elementUuid, ifcPk, projectPk, propertyPk, propertydefinitionPk, propertysetPk)

Retrieve all Units of a Definition

Retrieve all Units of a Definition Required scopes: ifc:read

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
var elementUuid = "elementUuid_example"; // String | 
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
var propertyPk = "propertyPk_example"; // String | 
var propertydefinitionPk = "propertydefinitionPk_example"; // String | 
var propertysetPk = "propertysetPk_example"; // String | 
apiInstance.getElementPropertySetPropertyDefinitionUnits(cloudPk, elementUuid, ifcPk, projectPk, propertyPk, propertydefinitionPk, propertysetPk).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **elementUuid** | **String**|  | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **propertyPk** | **String**|  | 
 **propertydefinitionPk** | **String**|  | 
 **propertysetPk** | **String**|  | 

### Return type

[**[Unit]**](Unit.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getElementPropertySetPropertyDefinitions"></a>
# **getElementPropertySetPropertyDefinitions**
> [PropertyDefinition] getElementPropertySetPropertyDefinitions(cloudPk, elementUuid, ifcPk, projectPk, propertyPk, propertysetPk)

Retrieve all Definitions of a PropertySet

Retrieve all Definitions of a PropertySet Required scopes: ifc:read

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
var elementUuid = "elementUuid_example"; // String | 
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
var propertyPk = "propertyPk_example"; // String | 
var propertysetPk = "propertysetPk_example"; // String | 
apiInstance.getElementPropertySetPropertyDefinitions(cloudPk, elementUuid, ifcPk, projectPk, propertyPk, propertysetPk).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **elementUuid** | **String**|  | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **propertyPk** | **String**|  | 
 **propertysetPk** | **String**|  | 

### Return type

[**[PropertyDefinition]**](PropertyDefinition.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getElementPropertySets"></a>
# **getElementPropertySets**
> [PropertySet] getElementPropertySets(cloudPk, elementUuid, ifcPk, projectPk)

Retrieve all PropertySets of an element

Retrieve all PropertySets of an element Required scopes: ifc:read

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
var elementUuid = "elementUuid_example"; // String | 
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
apiInstance.getElementPropertySets(cloudPk, elementUuid, ifcPk, projectPk).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **elementUuid** | **String**|  | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 

### Return type

[**[PropertySet]**](PropertySet.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getElements"></a>
# **getElements**
> [Element] getElements(cloudPk, ifcPk, projectPk, opts)

Retrieve all elements of a model

Retrieve all elements of a model. If not filtered, the json may be very large. To efficently retrieve all elements and their data, see getRawElements Required scopes: ifc:read

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
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
var opts = {
  'type': "type_example", // String | Filter the returned list by type
  'classification': "classification_example", // String | Filter the returned list by classification
  'classificationNotation': "classificationNotation_example" // String | Filter the returned list by classification__notation
};
apiInstance.getElements(cloudPk, ifcPk, projectPk, opts).then(function(data) {
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
 **type** | **String**| Filter the returned list by type | [optional] 
 **classification** | **String**| Filter the returned list by classification | [optional] 
 **classificationNotation** | **String**| Filter the returned list by classification__notation | [optional] 

### Return type

[**[Element]**](Element.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getElementsFromClassification"></a>
# **getElementsFromClassification**
> [Element] getElementsFromClassification(cloudPk, ifcClassificationPk, ifcPk, projectPk)

Retrieve all elements with the classification

Retrieve all elements with the classification Required scopes: ifc:read

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
var ifcClassificationPk = "ifcClassificationPk_example"; // String | 
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
apiInstance.getElementsFromClassification(cloudPk, ifcClassificationPk, ifcPk, projectPk).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **ifcClassificationPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 

### Return type

[**[Element]**](Element.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getIfc"></a>
# **getIfc**
> Ifc getIfc(cloudPk, id, projectPk)

Retrieve one model

 Required scopes: ifc:read

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
var id = 56; // Number | A unique integer value identifying this ifc.
var projectPk = "projectPk_example"; // String | 
apiInstance.getIfc(cloudPk, id, projectPk).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this ifc. | 
 **projectPk** | **String**|  | 

### Return type

[**Ifc**](Ifc.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getIfcBVH"></a>
# **getIfcBVH**
> getIfcBVH(cloudPk, id, projectPk)

Get svg file

         DEPRECATED: Now, retrieve the file url in the ifc object itself         Returns the map file          Required scopes: ifc:read

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
var id = 56; // Number | A unique integer value identifying this ifc.
var projectPk = "projectPk_example"; // String | 
apiInstance.getIfcBVH(cloudPk, id, projectPk).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this ifc. | 
 **projectPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getIfcClassifications"></a>
# **getIfcClassifications**
> [Classification] getIfcClassifications(cloudPk, ifcPk, projectPk)

Retrieve all classifications in a model

Retrieve all classifications in a model Required scopes: ifc:read

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
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
apiInstance.getIfcClassifications(cloudPk, ifcPk, projectPk).then(function(data) {
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

[**[Classification]**](Classification.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getIfcGLTF"></a>
# **getIfcGLTF**
> getIfcGLTF(cloudPk, id, projectPk)

Get gltf file

         DEPRECATED: Now, retrieve the file url in the ifc object itself         Returns the gltf file          Required scopes: ifc:read

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
var id = 56; // Number | A unique integer value identifying this ifc.
var projectPk = "projectPk_example"; // String | 
apiInstance.getIfcGLTF(cloudPk, id, projectPk).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this ifc. | 
 **projectPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getIfcMap"></a>
# **getIfcMap**
> getIfcMap(cloudPk, id, projectPk)

Get bvh file

         DEPRECATED: Now, retrieve the file url in the ifc object itself         Returns the bvh file          Required scopes: ifc:read

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
var id = 56; // Number | A unique integer value identifying this ifc.
var projectPk = "projectPk_example"; // String | 
apiInstance.getIfcMap(cloudPk, id, projectPk).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this ifc. | 
 **projectPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getIfcProperties"></a>
# **getIfcProperties**
> [Property] getIfcProperties(cloudPk, ifcPk, projectPk)

Retrieve all Properties of a model

Retrieve all PropertySets of a model Required scopes: ifc:read

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
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
apiInstance.getIfcProperties(cloudPk, ifcPk, projectPk).then(function(data) {
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

[**[Property]**](Property.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getIfcProperty"></a>
# **getIfcProperty**
> Property getIfcProperty(cloudPk, id, ifcPk, projectPk)

Retrieve a Property of a model

Retrieve a Property of a model Required scopes: ifc:read

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
var id = 56; // Number | A unique integer value identifying this property.
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
apiInstance.getIfcProperty(cloudPk, id, ifcPk, projectPk).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this property. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 

### Return type

[**Property**](Property.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getIfcPropertyDefinition"></a>
# **getIfcPropertyDefinition**
> PropertyDefinition getIfcPropertyDefinition(cloudPk, id, ifcPk, projectPk)

Retrieve a PropertyDefinition of a model

Retrieve a PropertyDefinition of a model Required scopes: ifc:read

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
var id = 56; // Number | A unique integer value identifying this property definition.
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
apiInstance.getIfcPropertyDefinition(cloudPk, id, ifcPk, projectPk).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this property definition. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 

### Return type

[**PropertyDefinition**](PropertyDefinition.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getIfcPropertyDefinitions"></a>
# **getIfcPropertyDefinitions**
> [PropertyDefinition] getIfcPropertyDefinitions(cloudPk, ifcPk, projectPk)

Retrieve all PropertyDefinitions of a model

Retrieve all PropertyDefinitions of a model Required scopes: ifc:read

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
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
apiInstance.getIfcPropertyDefinitions(cloudPk, ifcPk, projectPk).then(function(data) {
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

[**[PropertyDefinition]**](PropertyDefinition.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getIfcStructure"></a>
# **getIfcStructure**
> getIfcStructure(cloudPk, id, projectPk)

Get structure file

         DEPRECATED: Now, retrieve the file url in the ifc object itself         Returns the structure file          Required scopes: ifc:read

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
var id = 56; // Number | A unique integer value identifying this ifc.
var projectPk = "projectPk_example"; // String | 
apiInstance.getIfcStructure(cloudPk, id, projectPk).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this ifc. | 
 **projectPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getIfcSystems"></a>
# **getIfcSystems**
> getIfcSystems(cloudPk, id, projectPk)

Get systems file

         DEPRECATED: Now, retrieve the file url in the ifc object itself         Returns the system file          Required scopes: ifc:read

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
var id = 56; // Number | A unique integer value identifying this ifc.
var projectPk = "projectPk_example"; // String | 
apiInstance.getIfcSystems(cloudPk, id, projectPk).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this ifc. | 
 **projectPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getIfcUnit"></a>
# **getIfcUnit**
> Unit getIfcUnit(cloudPk, id, ifcPk, projectPk)

Retrieve a Unit of a model

Retrieve a Unit of a model Required scopes: ifc:read

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
var id = 56; // Number | A unique integer value identifying this unit.
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
apiInstance.getIfcUnit(cloudPk, id, ifcPk, projectPk).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this unit. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 

### Return type

[**Unit**](Unit.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getIfcUnits"></a>
# **getIfcUnits**
> [Unit] getIfcUnits(cloudPk, ifcPk, projectPk)

Retrieve all Units of a model

Retrieve all Units of a model Required scopes: ifc:read

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
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
apiInstance.getIfcUnits(cloudPk, ifcPk, projectPk).then(function(data) {
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

[**[Unit]**](Unit.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getIfcs"></a>
# **getIfcs**
> [Ifc] getIfcs(cloudPk, projectPk, opts)

Retrieve all models

Retrieve all models Required scopes: ifc:read

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
var opts = {
  'status': "status_example" // String | Filter the returned list by status
};
apiInstance.getIfcs(cloudPk, projectPk, opts).then(function(data) {
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
 **status** | **String**| Filter the returned list by status | [optional] 

### Return type

[**[Ifc]**](Ifc.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPropertySet"></a>
# **getPropertySet**
> PropertySet getPropertySet(cloudPk, id, ifcPk, projectPk)

Retrieve a PropertySet of a model

Retrieve a PropertySet of a model Required scopes: ifc:read

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
var id = 56; // Number | A unique integer value identifying this property set.
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
apiInstance.getPropertySet(cloudPk, id, ifcPk, projectPk).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this property set. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 

### Return type

[**PropertySet**](PropertySet.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPropertySets"></a>
# **getPropertySets**
> [PropertySet] getPropertySets(cloudPk, ifcPk, projectPk)

Retrieve all PropertySets of a model

Retrieve all PropertySets of a model Required scopes: ifc:read

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
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
apiInstance.getPropertySets(cloudPk, ifcPk, projectPk).then(function(data) {
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

[**[PropertySet]**](PropertySet.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRawElements"></a>
# **getRawElements**
> RawElements getRawElements(cloudPk, ifcPk, projectPk, opts)

Retrieve all elements in a optimized format

         Returns elements, property_sets, properties, definitions and units in a JSON optimized structure          Required scopes: ifc:read

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
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
var opts = {
  'type': "type_example", // String | Filter the returned list by type
  'classification': "classification_example", // String | Filter the returned list by classification
  'classificationNotation': "classificationNotation_example" // String | Filter the returned list by classification__notation
};
apiInstance.getRawElements(cloudPk, ifcPk, projectPk, opts).then(function(data) {
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
 **type** | **String**| Filter the returned list by type | [optional] 
 **classification** | **String**| Filter the returned list by classification | [optional] 
 **classificationNotation** | **String**| Filter the returned list by classification__notation | [optional] 

### Return type

[**RawElements**](RawElements.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSpace"></a>
# **getSpace**
> Space getSpace(cloudPk, id, ifcPk, projectPk)

Retrieve one space of the model

Retrieve one space of the model Required scopes: ifc:read

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
var id = 56; // Number | A unique integer value identifying this space.
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
apiInstance.getSpace(cloudPk, id, ifcPk, projectPk).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this space. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 

### Return type

[**Space**](Space.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSpaces"></a>
# **getSpaces**
> [Space] getSpaces(cloudPk, ifcPk, projectPk)

Retrieve all spaces of the model

Retrieve all spaces of the model Required scopes: ifc:read

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
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
apiInstance.getSpaces(cloudPk, ifcPk, projectPk).then(function(data) {
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

[**[Space]**](Space.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getZone"></a>
# **getZone**
> Zone getZone(cloudPk, id, ifcPk, projectPk)

Retrieve one zone of a model

Retrieve one zone of a model Required scopes: ifc:read

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
var id = 56; // Number | A unique integer value identifying this zone.
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
apiInstance.getZone(cloudPk, id, ifcPk, projectPk).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this zone. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 

### Return type

[**Zone**](Zone.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getZoneSpace"></a>
# **getZoneSpace**
> ZoneSpace getZoneSpace(cloudPk, id, ifcPk, projectPk, zonePk)

Retrieve one space of a zone

Retrieve one space of a zone Required scopes: ifc:read

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
var id = 56; // Number | A unique integer value identifying this space.
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
var zonePk = "zonePk_example"; // String | 
apiInstance.getZoneSpace(cloudPk, id, ifcPk, projectPk, zonePk).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this space. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **zonePk** | **String**|  | 

### Return type

[**ZoneSpace**](ZoneSpace.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getZoneSpaces"></a>
# **getZoneSpaces**
> [ZoneSpace] getZoneSpaces(cloudPk, ifcPk, projectPk, zonePk)

Retrieve all spaces of a zone

Retrieve all spaces of a zone Required scopes: ifc:read

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
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
var zonePk = "zonePk_example"; // String | 
apiInstance.getZoneSpaces(cloudPk, ifcPk, projectPk, zonePk).then(function(data) {
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
 **zonePk** | **String**|  | 

### Return type

[**[ZoneSpace]**](ZoneSpace.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getZones"></a>
# **getZones**
> [Zone] getZones(cloudPk, ifcPk, projectPk, opts)

Retrieve all zones of a model

Retrieve all zones of a model Required scopes: ifc:read

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
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
var opts = {
  'color': "color_example" // String | Filter the returned list by color
};
apiInstance.getZones(cloudPk, ifcPk, projectPk, opts).then(function(data) {
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
 **color** | **String**| Filter the returned list by color | [optional] 

### Return type

[**[Zone]**](Zone.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listClassificationElementRelations"></a>
# **listClassificationElementRelations**
> [ElementClassificationRelation] listClassificationElementRelations(cloudPk, ifcPk, projectPk)

List all associations between classifications and elements

List all associations between classifications and elements Required scopes: ifc:read

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
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
apiInstance.listClassificationElementRelations(cloudPk, ifcPk, projectPk).then(function(data) {
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

[**[ElementClassificationRelation]**](ElementClassificationRelation.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="removeClassificationOfElement"></a>
# **removeClassificationOfElement**
> removeClassificationOfElement(cloudPk, elementUuid, id, ifcPk, projectPk)

Remove a classification from an element

The classification will not be deleted Required scopes: ifc:write

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
var elementUuid = "elementUuid_example"; // String | 
var id = 56; // Number | A unique integer value identifying this classification.
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
apiInstance.removeClassificationOfElement(cloudPk, elementUuid, id, ifcPk, projectPk).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **elementUuid** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this classification. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="removeElementPropertySet"></a>
# **removeElementPropertySet**
> removeElementPropertySet(cloudPk, elementUuid, id, ifcPk, projectPk)

Remove a PropertySet from an element

Delete the relation between the element and the property set. Does not delete any object Required scopes: ifc:write

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
var elementUuid = "elementUuid_example"; // String | 
var id = 56; // Number | A unique integer value identifying this property set.
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
apiInstance.removeElementPropertySet(cloudPk, elementUuid, id, ifcPk, projectPk).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **elementUuid** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this property set. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="removeElementPropertySetProperty"></a>
# **removeElementPropertySetProperty**
> removeElementPropertySetProperty(cloudPk, elementUuid, id, ifcPk, projectPk, propertysetPk)

Remove a property from a PropertySet

 Required scopes: ifc:write

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
var elementUuid = "elementUuid_example"; // String | 
var id = 56; // Number | A unique integer value identifying this property.
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
var propertysetPk = "propertysetPk_example"; // String | 
apiInstance.removeElementPropertySetProperty(cloudPk, elementUuid, id, ifcPk, projectPk, propertysetPk).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **elementUuid** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this property. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **propertysetPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="removeElementPropertySetPropertyDefinition"></a>
# **removeElementPropertySetPropertyDefinition**
> removeElementPropertySetPropertyDefinition(cloudPk, elementUuid, id, ifcPk, projectPk, propertyPk, propertysetPk)

Remove a Definition from a Property

 Required scopes: ifc:write

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
var elementUuid = "elementUuid_example"; // String | 
var id = 56; // Number | A unique integer value identifying this property definition.
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
var propertyPk = "propertyPk_example"; // String | 
var propertysetPk = "propertysetPk_example"; // String | 
apiInstance.removeElementPropertySetPropertyDefinition(cloudPk, elementUuid, id, ifcPk, projectPk, propertyPk, propertysetPk).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **elementUuid** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this property definition. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **propertyPk** | **String**|  | 
 **propertysetPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="removeElementPropertySetPropertyDefinitionUnit"></a>
# **removeElementPropertySetPropertyDefinitionUnit**
> removeElementPropertySetPropertyDefinitionUnit(cloudPk, elementUuid, id, ifcPk, projectPk, propertyPk, propertydefinitionPk, propertysetPk)

Remove a Unit from a Definition

Remove a Unit from a Definition Required scopes: ifc:write

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
var elementUuid = "elementUuid_example"; // String | 
var id = 56; // Number | A unique integer value identifying this unit.
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
var propertyPk = "propertyPk_example"; // String | 
var propertydefinitionPk = "propertydefinitionPk_example"; // String | 
var propertysetPk = "propertysetPk_example"; // String | 
apiInstance.removeElementPropertySetPropertyDefinitionUnit(cloudPk, elementUuid, id, ifcPk, projectPk, propertyPk, propertydefinitionPk, propertysetPk).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **elementUuid** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this unit. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **propertyPk** | **String**|  | 
 **propertydefinitionPk** | **String**|  | 
 **propertysetPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="removeElementsFromClassification"></a>
# **removeElementsFromClassification**
> removeElementsFromClassification(cloudPk, ifcClassificationPk, ifcPk, projectPk, uuid)

Remove the classification from all elements

Remove the classification from all elements. No element nor classification will be deleted Required scopes: ifc:write

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
var ifcClassificationPk = "ifcClassificationPk_example"; // String | 
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
var uuid = "uuid_example"; // String | IFC element or element type UUID
apiInstance.removeElementsFromClassification(cloudPk, ifcClassificationPk, ifcPk, projectPk, uuid).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **ifcClassificationPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **uuid** | **String**| IFC element or element type UUID | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="updateElement"></a>
# **updateElement**
> Element updateElement(cloudPk, ifcPk, projectPk, uuid, element)

Update some fields of a zone

Update some fields of a zone. The IFC file will not be updated. The created element will be accessible over the API and when exporting an IFC file Required scopes: ifc:write

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
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
var uuid = "uuid_example"; // String | IFC element or element type UUID
var element = new bimdata.Element(); // Element | 
apiInstance.updateElement(cloudPk, ifcPk, projectPk, uuid, element).then(function(data) {
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
 **uuid** | **String**| IFC element or element type UUID | 
 **element** | [**Element**](Element.md)|  | 

### Return type

[**Element**](Element.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateIfc"></a>
# **updateIfc**
> Ifc updateIfc(cloudPk, id, projectPk, ifc)

Update some fields of a model

Update some fields of a model Required scopes: ifc:write

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
var id = 56; // Number | A unique integer value identifying this ifc.
var projectPk = "projectPk_example"; // String | 
var ifc = new bimdata.Ifc(); // Ifc | 
apiInstance.updateIfc(cloudPk, id, projectPk, ifc).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this ifc. | 
 **projectPk** | **String**|  | 
 **ifc** | [**Ifc**](Ifc.md)|  | 

### Return type

[**Ifc**](Ifc.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateIfcFiles"></a>
# **updateIfcFiles**
> IfcFiles updateIfcFiles(cloudPk, id, projectPk, opts)

Update models file (gltf, svg, structure, etc)

         Patch ifc files (gltf, structure, svg, etc)          Required scopes: ifc:write

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
var id = 56; // Number | A unique integer value identifying this ifc.
var projectPk = "projectPk_example"; // String | 
var opts = {
  'structureFile': "/path/to/file", // File | 
  'systemsFile': "/path/to/file", // File | 
  'mapFile': "/path/to/file", // File | 
  'gltfFile': "/path/to/file", // File | 
  'bvhTreeFile': "/path/to/file", // File | 
  'viewer360File': "/path/to/file" // File | 
};
apiInstance.updateIfcFiles(cloudPk, id, projectPk, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this ifc. | 
 **projectPk** | **String**|  | 
 **structureFile** | **File**|  | [optional] 
 **systemsFile** | **File**|  | [optional] 
 **mapFile** | **File**|  | [optional] 
 **gltfFile** | **File**|  | [optional] 
 **bvhTreeFile** | **File**|  | [optional] 
 **viewer360File** | **File**|  | [optional] 

### Return type

[**IfcFiles**](IfcFiles.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="updateIfcProperty"></a>
# **updateIfcProperty**
> Property updateIfcProperty(cloudPk, id, ifcPk, projectPk, property)

Update some fields of a Property

Update some fields of a Property Required scopes: ifc:write

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
var id = 56; // Number | A unique integer value identifying this property.
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
var property = new bimdata.Property(); // Property | 
apiInstance.updateIfcProperty(cloudPk, id, ifcPk, projectPk, property).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this property. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **property** | [**Property**](Property.md)|  | 

### Return type

[**Property**](Property.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateIfcPropertyDefinition"></a>
# **updateIfcPropertyDefinition**
> PropertyDefinition updateIfcPropertyDefinition(cloudPk, id, ifcPk, projectPk, propertyDefinition)

Update some fields of many PropertyDefinitions of a model

 Required scopes: ifc:write

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
var id = 56; // Number | A unique integer value identifying this property definition.
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
var propertyDefinition = new bimdata.PropertyDefinition(); // PropertyDefinition | 
apiInstance.updateIfcPropertyDefinition(cloudPk, id, ifcPk, projectPk, propertyDefinition).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this property definition. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **propertyDefinition** | [**PropertyDefinition**](PropertyDefinition.md)|  | 

### Return type

[**PropertyDefinition**](PropertyDefinition.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateIfcUnit"></a>
# **updateIfcUnit**
> Unit updateIfcUnit(cloudPk, id, ifcPk, projectPk, unit)

Update some fields of a Unit of a model

 Required scopes: ifc:write

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
var id = 56; // Number | A unique integer value identifying this unit.
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
var unit = new bimdata.Unit(); // Unit | 
apiInstance.updateIfcUnit(cloudPk, id, ifcPk, projectPk, unit).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this unit. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **unit** | [**Unit**](Unit.md)|  | 

### Return type

[**Unit**](Unit.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updatePropertySet"></a>
# **updatePropertySet**
> PropertySet updatePropertySet(cloudPk, id, ifcPk, projectPk, propertySet)

Update some fields of a PropertySet

Update some fields of a PropertySet Required scopes: ifc:write

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
var id = 56; // Number | A unique integer value identifying this property set.
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
var propertySet = new bimdata.PropertySet(); // PropertySet | 
apiInstance.updatePropertySet(cloudPk, id, ifcPk, projectPk, propertySet).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this property set. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **propertySet** | [**PropertySet**](PropertySet.md)|  | 

### Return type

[**PropertySet**](PropertySet.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateSpace"></a>
# **updateSpace**
> Space updateSpace(cloudPk, id, ifcPk, projectPk, space)

Update some fields of a space

Update some fields of a space. The IFC file will not be updated. The created space will be accessible over the API and when exporting an IFC file Required scopes: ifc:write

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
var id = 56; // Number | A unique integer value identifying this space.
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
var space = new bimdata.Space(); // Space | 
apiInstance.updateSpace(cloudPk, id, ifcPk, projectPk, space).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this space. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **space** | [**Space**](Space.md)|  | 

### Return type

[**Space**](Space.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateZone"></a>
# **updateZone**
> Zone updateZone(cloudPk, id, ifcPk, projectPk, zone)

Update some fields of a zone

Update some fields of a zone. The IFC file will not be updated. The created zone will be accessible over the API and when exporting an IFC file Required scopes: ifc:write

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
var id = 56; // Number | A unique integer value identifying this zone.
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
var zone = new bimdata.Zone(); // Zone | 
apiInstance.updateZone(cloudPk, id, ifcPk, projectPk, zone).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this zone. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **zone** | [**Zone**](Zone.md)|  | 

### Return type

[**Zone**](Zone.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateZoneSpace"></a>
# **updateZoneSpace**
> ZoneSpace updateZoneSpace(cloudPk, id, ifcPk, projectPk, zonePk, zoneSpace)

Update some fields of a space

Update some fields of a space. The IFC file will not be updated. The created space will be accessible over the API and when exporting an IFC file Required scopes: ifc:write

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
var id = 56; // Number | A unique integer value identifying this space.
var ifcPk = "ifcPk_example"; // String | 
var projectPk = "projectPk_example"; // String | 
var zonePk = "zonePk_example"; // String | 
var zoneSpace = new bimdata.ZoneSpace(); // ZoneSpace | 
apiInstance.updateZoneSpace(cloudPk, id, ifcPk, projectPk, zonePk, zoneSpace).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this space. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **zonePk** | **String**|  | 
 **zoneSpace** | [**ZoneSpace**](ZoneSpace.md)|  | 

### Return type

[**ZoneSpace**](ZoneSpace.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


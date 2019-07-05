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
[**cloudProjectIfcClassificationCreate**](IfcApi.md#cloudProjectIfcClassificationCreate) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/classification | 
[**cloudProjectIfcClassificationElementCreate**](IfcApi.md#cloudProjectIfcClassificationElementCreate) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/classification/{ifc_classification_pk}/element | 
[**cloudProjectIfcCreate**](IfcApi.md#cloudProjectIfcCreate) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc | 
[**cloudProjectIfcProcessorhandlerCreate**](IfcApi.md#cloudProjectIfcProcessorhandlerCreate) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/processorhandler | 
[**cloudProjectIfcProcessorhandlerPartialUpdate**](IfcApi.md#cloudProjectIfcProcessorhandlerPartialUpdate) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/processorhandler/{id} | 
[**cloudProjectIfcPropertyCreate**](IfcApi.md#cloudProjectIfcPropertyCreate) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/property | 
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
[**exportIfc**](IfcApi.md#exportIfc) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{id}/export | Export IFC
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
[**getProcessorHandler**](IfcApi.md#getProcessorHandler) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/processorhandler/{id} | Retrieve a processor handler
[**getProcessorHandlers**](IfcApi.md#getProcessorHandlers) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/processorhandler | Get all processor handlers
[**getPropertySet**](IfcApi.md#getPropertySet) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/propertyset/{id} | Retrieve a PropertySet of a model
[**getPropertySets**](IfcApi.md#getPropertySets) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/propertyset | Retrieve all PropertySets of a model
[**getRawElements**](IfcApi.md#getRawElements) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/raw | Retrieve all elements in a optimized format
[**getSpace**](IfcApi.md#getSpace) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/space/{id} | Retrieve one space of the model
[**getSpaces**](IfcApi.md#getSpaces) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/space | Retrieve all spaces of the model
[**getZone**](IfcApi.md#getZone) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/zone/{id} | Retrieve one zone of a model
[**getZoneSpace**](IfcApi.md#getZoneSpace) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/zone/{zone_pk}/space/{id} | Retrieve one space of a zone
[**getZoneSpaces**](IfcApi.md#getZoneSpaces) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/zone/{zone_pk}/space | Retrieve all spaces of a zone
[**getZones**](IfcApi.md#getZones) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/zone | Retrieve zones of a model
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
[**updateProcessorHandler**](IfcApi.md#updateProcessorHandler) | **PUT** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/processorhandler/{id} | Update the status of a processor handler
[**updatePropertySet**](IfcApi.md#updatePropertySet) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/propertyset/{id} | Update some fields of a PropertySet
[**updateSpace**](IfcApi.md#updateSpace) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/space/{id} | Update some fields of a space
[**updateZone**](IfcApi.md#updateZone) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/zone/{id} | Update some fields of a zone
[**updateZoneSpace**](IfcApi.md#updateZoneSpace) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/zone/{zone_pk}/space/{id} | Update some fields of a space



## bulkDeleteIfcClassifications

> bulkDeleteIfcClassifications(cloudPk, ifcPk, projectPk)

Remove all classifications from model&#39;s elements

             Delete relation between filtered classifications (eg. /classifications?name&#x3D;untec) and all ifc&#39;s elements.             No classification will be deleted on this endpoint, only the relation between ifc&#39;s elements and their classification.          Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.bulkDeleteIfcClassifications(cloudPk, ifcPk, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## bulkDeleteIfcProperties

> bulkDeleteIfcProperties(cloudPk, ifcPk, projectPk)

Delete many Property of a model

         Bulk delete.         You should send a list of ids in the body.         These ids (or relations with these ids in case of many-to-many relation deletion) will be deleted      Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.bulkDeleteIfcProperties(cloudPk, ifcPk, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## bulkDeleteIfcPropertyDefinitions

> bulkDeleteIfcPropertyDefinitions(cloudPk, ifcPk, projectPk)

Delete many PropertyDefinitions of a model

         Bulk delete.         You should send a list of ids in the body.         These ids (or relations with these ids in case of many-to-many relation deletion) will be deleted      Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.bulkDeleteIfcPropertyDefinitions(cloudPk, ifcPk, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## bulkDeleteIfcUnits

> bulkDeleteIfcUnits(cloudPk, ifcPk, projectPk)

Delete many Units of a model

         Bulk delete.         You should send a list of ids in the body.         These ids (or relations with these ids in case of many-to-many relation deletion) will be deleted      Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.bulkDeleteIfcUnits(cloudPk, ifcPk, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## bulkDeletePropertySet

> bulkDeletePropertySet(cloudPk, ifcPk, projectPk)

Delete many PropertySet of a model

         Bulk delete.         You should send a list of ids in the body.         These ids (or relations with these ids in case of many-to-many relation deletion) will be deleted      Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.bulkDeletePropertySet(cloudPk, ifcPk, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## bulkFullUpdateElements

> [Element] bulkFullUpdateElements(cloudPk, ifcPk, projectPk, data)

Update many elements at once (only changing fields may be defined)

         Bulk update.         Similar to update, but the body should be a list of objects to patch or put         The response will be a list (in the same order) of updated objects or of errors if any         If at least one update succeeded, the status code will be 200. If every update failed, the status code we&#39;ll be 400 with the list of errors      Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = [new bimdata.Element()]; // [Element] | 
apiInstance.bulkFullUpdateElements(cloudPk, ifcPk, projectPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **data** | [**[Element]**](Element.md)|  | 

### Return type

[**[Element]**](Element.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## bulkFullUpdateIfcProperty

> [Property] bulkFullUpdateIfcProperty(cloudPk, ifcPk, projectPk, data)

Update some fields of many properties of a model

         Bulk update.         Similar to update, but the body should be a list of objects to patch or put         The response will be a list (in the same order) of updated objects or of errors if any         If at least one update succeeded, the status code will be 200. If every update failed, the status code we&#39;ll be 400 with the list of errors      Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = [new bimdata.Property()]; // [Property] | 
apiInstance.bulkFullUpdateIfcProperty(cloudPk, ifcPk, projectPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **data** | [**[Property]**](Property.md)|  | 

### Return type

[**[Property]**](Property.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## bulkRemoveClassificationsOfElement

> bulkRemoveClassificationsOfElement(cloudPk, elementUuid, ifcPk, projectPk)

Remove many classifications from an element

         Bulk delete.         You should send a list of ids in the body.         These ids (or relations with these ids in case of many-to-many relation deletion) will be deleted      Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let elementUuid = "elementUuid_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.bulkRemoveClassificationsOfElement(cloudPk, elementUuid, ifcPk, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## bulkRemoveElementsFromClassification

> bulkRemoveElementsFromClassification(cloudPk, ifcClassificationPk, ifcPk, projectPk)

Remove the classifications from all elements

         Bulk delete.         You should send a list of ids in the body.         These ids (or relations with these ids in case of many-to-many relation deletion) will be deleted      Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcClassificationPk = "ifcClassificationPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.bulkRemoveElementsFromClassification(cloudPk, ifcClassificationPk, ifcPk, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## bulkUpdateElements

> [Element] bulkUpdateElements(cloudPk, ifcPk, projectPk, data)

Update many elements at once (all field must be defined)

         Bulk update.         Similar to update, but the body should be a list of objects to patch or put         The response will be a list (in the same order) of updated objects or of errors if any         If at least one update succeeded, the status code will be 200. If every update failed, the status code we&#39;ll be 400 with the list of errors      Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = [new bimdata.Element()]; // [Element] | 
apiInstance.bulkUpdateElements(cloudPk, ifcPk, projectPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **data** | [**[Element]**](Element.md)|  | 

### Return type

[**[Element]**](Element.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## bulkUpdateIfcProperty

> [Property] bulkUpdateIfcProperty(cloudPk, ifcPk, projectPk, data)

Update all fields of many properties of a model

         Bulk update.         Similar to update, but the body should be a list of objects to patch or put         The response will be a list (in the same order) of updated objects or of errors if any         If at least one update succeeded, the status code will be 200. If every update failed, the status code we&#39;ll be 400 with the list of errors      Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = [new bimdata.Property()]; // [Property] | 
apiInstance.bulkUpdateIfcProperty(cloudPk, ifcPk, projectPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **data** | [**[Property]**](Property.md)|  | 

### Return type

[**[Property]**](Property.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## cloudProjectIfcClassificationCreate

> Classification cloudProjectIfcClassificationCreate(cloudPk, ifcPk, projectPk, data)



### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.Classification(); // Classification | 
apiInstance.cloudProjectIfcClassificationCreate(cloudPk, ifcPk, projectPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **data** | [**Classification**](Classification.md)|  | 

### Return type

[**Classification**](Classification.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## cloudProjectIfcClassificationElementCreate

> Element cloudProjectIfcClassificationElementCreate(cloudPk, ifcClassificationPk, ifcPk, projectPk, data)



### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcClassificationPk = "ifcClassificationPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.Element(); // Element | 
apiInstance.cloudProjectIfcClassificationElementCreate(cloudPk, ifcClassificationPk, ifcPk, projectPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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
 **data** | [**Element**](Element.md)|  | 

### Return type

[**Element**](Element.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## cloudProjectIfcCreate

> Ifc cloudProjectIfcCreate(cloudPk, projectPk, data)



 Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.Ifc(); // Ifc | 
apiInstance.cloudProjectIfcCreate(cloudPk, projectPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **data** | [**Ifc**](Ifc.md)|  | 

### Return type

[**Ifc**](Ifc.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## cloudProjectIfcProcessorhandlerCreate

> ProcessorHandler cloudProjectIfcProcessorhandlerCreate(cloudPk, ifcPk, projectPk, data)



### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.ProcessorHandler(); // ProcessorHandler | 
apiInstance.cloudProjectIfcProcessorhandlerCreate(cloudPk, ifcPk, projectPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **data** | [**ProcessorHandler**](ProcessorHandler.md)|  | 

### Return type

[**ProcessorHandler**](ProcessorHandler.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## cloudProjectIfcProcessorhandlerPartialUpdate

> ProcessorHandler cloudProjectIfcProcessorhandlerPartialUpdate(cloudPk, id, ifcPk, projectPk, data)



 Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this processor handler.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.ProcessorHandler(); // ProcessorHandler | 
apiInstance.cloudProjectIfcProcessorhandlerPartialUpdate(cloudPk, id, ifcPk, projectPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this processor handler. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **data** | [**ProcessorHandler**](ProcessorHandler.md)|  | 

### Return type

[**ProcessorHandler**](ProcessorHandler.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## cloudProjectIfcPropertyCreate

> Property cloudProjectIfcPropertyCreate(cloudPk, ifcPk, projectPk, data)



### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.Property(); // Property | 
apiInstance.cloudProjectIfcPropertyCreate(cloudPk, ifcPk, projectPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **data** | [**Property**](Property.md)|  | 

### Return type

[**Property**](Property.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createClassificationElementRelations

> createClassificationElementRelations(cloudPk, ifcPk, projectPk, data)

Create association between existing classification and existing element

Create association between existing classification and existing element Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = [new bimdata.ElementClassificationRelation()]; // [ElementClassificationRelation] | 
apiInstance.createClassificationElementRelations(cloudPk, ifcPk, projectPk, data).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **data** | [**[ElementClassificationRelation]**](ElementClassificationRelation.md)|  | 

### Return type

null (empty response body)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## createClassificationsOfElement

> [Classification] createClassificationsOfElement(cloudPk, elementUuid, ifcPk, projectPk, data)

Create one or many classifications to an element

         Bulk create available.         You can either post an object or a list of objects.         Is you post a list, the response will be a list (in the same order) of created objects or of errors if any         If at least one create succeeded, the status code will be 201. If every create failed, the status code we&#39;ll be 400 with the list of errors          If classification created already exists, it will just be added to item&#39;s classifications and will not be duplicated      Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let elementUuid = "elementUuid_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = [new bimdata.Classification()]; // [Classification] | 
apiInstance.createClassificationsOfElement(cloudPk, elementUuid, ifcPk, projectPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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
 **data** | [**[Classification]**](Classification.md)|  | 

### Return type

[**[Classification]**](Classification.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createElement

> [Element] createElement(cloudPk, ifcPk, projectPk, data)

Create an element in the model

         Bulk create available.         You can either post an object or a list of objects.         Is you post a list, the response will be a list (in the same order) of created objects or of errors if any         If at least one create succeeded, the status code will be 201. If every create failed, the status code we&#39;ll be 400 with the list of errors      Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = [new bimdata.Element()]; // [Element] | 
apiInstance.createElement(cloudPk, ifcPk, projectPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **data** | [**[Element]**](Element.md)|  | 

### Return type

[**[Element]**](Element.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createElementPropertySet

> PropertySet createElementPropertySet(cloudPk, elementUuid, ifcPk, projectPk, data)

Create a PropertySets to an element

Create a PropertySets that will be automatically linked to the element Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let elementUuid = "elementUuid_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.PropertySet(); // PropertySet | 
apiInstance.createElementPropertySet(cloudPk, elementUuid, ifcPk, projectPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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
 **data** | [**PropertySet**](PropertySet.md)|  | 

### Return type

[**PropertySet**](PropertySet.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createElementPropertySetProperty

> Property createElementPropertySetProperty(cloudPk, elementUuid, ifcPk, projectPk, propertysetPk, data)

Create a property to a PropertySet

 Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let elementUuid = "elementUuid_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let propertysetPk = "propertysetPk_example"; // String | 
let data = new bimdata.Property(); // Property | 
apiInstance.createElementPropertySetProperty(cloudPk, elementUuid, ifcPk, projectPk, propertysetPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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
 **data** | [**Property**](Property.md)|  | 

### Return type

[**Property**](Property.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createElementPropertySetPropertyDefinition

> PropertyDefinition createElementPropertySetPropertyDefinition(cloudPk, elementUuid, ifcPk, projectPk, propertyPk, propertysetPk, data)

Create a Definition to a Property

 Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let elementUuid = "elementUuid_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let propertyPk = "propertyPk_example"; // String | 
let propertysetPk = "propertysetPk_example"; // String | 
let data = new bimdata.PropertyDefinition(); // PropertyDefinition | 
apiInstance.createElementPropertySetPropertyDefinition(cloudPk, elementUuid, ifcPk, projectPk, propertyPk, propertysetPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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
 **data** | [**PropertyDefinition**](PropertyDefinition.md)|  | 

### Return type

[**PropertyDefinition**](PropertyDefinition.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createElementPropertySetPropertyDefinitionUnit

> Unit createElementPropertySetPropertyDefinitionUnit(cloudPk, elementUuid, ifcPk, projectPk, propertyPk, propertydefinitionPk, propertysetPk, data)

Create a Unit to a Definition

Create a Unit to a Definition Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let elementUuid = "elementUuid_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let propertyPk = "propertyPk_example"; // String | 
let propertydefinitionPk = "propertydefinitionPk_example"; // String | 
let propertysetPk = "propertysetPk_example"; // String | 
let data = new bimdata.Unit(); // Unit | 
apiInstance.createElementPropertySetPropertyDefinitionUnit(cloudPk, elementUuid, ifcPk, projectPk, propertyPk, propertydefinitionPk, propertysetPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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
 **data** | [**Unit**](Unit.md)|  | 

### Return type

[**Unit**](Unit.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createIfcPropertyDefinition

> [PropertyDefinition] createIfcPropertyDefinition(cloudPk, ifcPk, projectPk, data)

Create a PropertyDefinition on the model

         Bulk create available.         You can either post an object or a list of objects.         Is you post a list, the response will be a list (in the same order) of created objects or of errors if any         If at least one create succeeded, the status code will be 201. If every create failed, the status code we&#39;ll be 400 with the list of errors      Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = [new bimdata.PropertyDefinition()]; // [PropertyDefinition] | 
apiInstance.createIfcPropertyDefinition(cloudPk, ifcPk, projectPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **data** | [**[PropertyDefinition]**](PropertyDefinition.md)|  | 

### Return type

[**[PropertyDefinition]**](PropertyDefinition.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createIfcUnit

> [Unit] createIfcUnit(cloudPk, ifcPk, projectPk, data)

Create a Unit on a model

         Bulk create available.         You can either post an object or a list of objects.         Is you post a list, the response will be a list (in the same order) of created objects or of errors if any         If at least one create succeeded, the status code will be 201. If every create failed, the status code we&#39;ll be 400 with the list of errors      Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = [new bimdata.Unit()]; // [Unit] | 
apiInstance.createIfcUnit(cloudPk, ifcPk, projectPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **data** | [**[Unit]**](Unit.md)|  | 

### Return type

[**[Unit]**](Unit.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createPropertySet

> [PropertySet] createPropertySet(cloudPk, ifcPk, projectPk, data)

Create a PropertySet

         Bulk create available.         You can either post an object or a list of objects.         Is you post a list, the response will be a list (in the same order) of created objects or of errors if any         If at least one create succeeded, the status code will be 201. If every create failed, the status code we&#39;ll be 400 with the list of errors      Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = [new bimdata.PropertySet()]; // [PropertySet] | 
apiInstance.createPropertySet(cloudPk, ifcPk, projectPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **data** | [**[PropertySet]**](PropertySet.md)|  | 

### Return type

[**[PropertySet]**](PropertySet.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createPropertySetElementRelations

> createPropertySetElementRelations(cloudPk, ifcPk, projectPk, data)

Create association between PropertySet and element

Create association between existing PropertySet and existing element Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = [new bimdata.ElementPropertySetRelation()]; // [ElementPropertySetRelation] | 
apiInstance.createPropertySetElementRelations(cloudPk, ifcPk, projectPk, data).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **data** | [**[ElementPropertySetRelation]**](ElementPropertySetRelation.md)|  | 

### Return type

null (empty response body)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## createRawElements

> createRawElements(cloudPk, ifcPk, projectPk, data)

Create elements in an optimized format

         You can use the same optimized structure to post multiple elements, property_sets, properties, definitions and units at once.         If the structure is malformed, an error 500 without more explaination may be returned          Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.RawElements(); // RawElements | 
apiInstance.createRawElements(cloudPk, ifcPk, projectPk, data).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **data** | [**RawElements**](RawElements.md)|  | 

### Return type

null (empty response body)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## createSpace

> [Space] createSpace(cloudPk, ifcPk, projectPk, data)

Create a space in the model

         Bulk create available.         You can either post an object or a list of objects.         Is you post a list, the response will be a list (in the same order) of created objects or of errors if any         If at least one create succeeded, the status code will be 201. If every create failed, the status code we&#39;ll be 400 with the list of errors      Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = [new bimdata.Space()]; // [Space] | 
apiInstance.createSpace(cloudPk, ifcPk, projectPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **data** | [**[Space]**](Space.md)|  | 

### Return type

[**[Space]**](Space.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createZone

> [Zone] createZone(cloudPk, ifcPk, projectPk, data)

Create a zone in the model

         Bulk create available.         You can either post an object or a list of objects.         Is you post a list, the response will be a list (in the same order) of created objects or of errors if any         If at least one create succeeded, the status code will be 201. If every create failed, the status code we&#39;ll be 400 with the list of errors      Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = [new bimdata.Zone()]; // [Zone] | 
apiInstance.createZone(cloudPk, ifcPk, projectPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **data** | [**[Zone]**](Zone.md)|  | 

### Return type

[**[Zone]**](Zone.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createZoneSpace

> ZoneSpace createZoneSpace(cloudPk, ifcPk, projectPk, zonePk, data)

Create a space in a zone

The IFC file will not be updated. The created space will be accessible over the API and when exporting an IFC file Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let zonePk = "zonePk_example"; // String | 
let data = new bimdata.ZoneSpace(); // ZoneSpace | 
apiInstance.createZoneSpace(cloudPk, ifcPk, projectPk, zonePk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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
 **data** | [**ZoneSpace**](ZoneSpace.md)|  | 

### Return type

[**ZoneSpace**](ZoneSpace.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteElement

> deleteElement(cloudPk, ifcPk, projectPk, uuid)

Delete a zone of a model

The IFC file will not be updated. The remaining elements are available in API and will be available when exporting an IFC file Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let uuid = "uuid_example"; // String | IFC element or element type UUID
apiInstance.deleteElement(cloudPk, ifcPk, projectPk, uuid).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteIfc

> deleteIfc(cloudPk, id, projectPk)

Delete a model

It will delete the related document too Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this ifc.
let projectPk = "projectPk_example"; // String | 
apiInstance.deleteIfc(cloudPk, id, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteIfcProperty

> deleteIfcProperty(cloudPk, id, ifcPk, projectPk)

Delete a Property of a model

Delete a Property of a model Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this property.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.deleteIfcProperty(cloudPk, id, ifcPk, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteIfcPropertyDefinition

> deleteIfcPropertyDefinition(cloudPk, id, ifcPk, projectPk)

Delete a PropertyDefinitions of a model

Delete a PropertyDefinitions of a model Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this property definition.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.deleteIfcPropertyDefinition(cloudPk, id, ifcPk, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteIfcUnit

> deleteIfcUnit(cloudPk, id, ifcPk, projectPk)

Delete a Unit of a model

Delete a Unit of a model Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this unit.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.deleteIfcUnit(cloudPk, id, ifcPk, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deletePropertySet

> deletePropertySet(cloudPk, id, ifcPk, projectPk)

Delete a PropertySet of a model

Delete a PropertySet of a model Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this property set.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.deletePropertySet(cloudPk, id, ifcPk, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteSpace

> deleteSpace(cloudPk, id, ifcPk, projectPk)

Delete a space

It will not delete related zones. The IFC file will not be updated. The remaining spaces are available in API and will be available when exporting an IFC file Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this space.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.deleteSpace(cloudPk, id, ifcPk, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteZone

> deleteZone(cloudPk, id, ifcPk, projectPk)

Delete a zone of a model

The IFC file will not be updated. The remaining zones are available in API and will be available when exporting an IFC file Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this zone.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.deleteZone(cloudPk, id, ifcPk, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteZoneSpace

> deleteZoneSpace(cloudPk, id, ifcPk, projectPk, zonePk)

Delete a space of a zone

The IFC file will not be updated. The remaining spaces are available in API and will be available when exporting an IFC file Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this space.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let zonePk = "zonePk_example"; // String | 
apiInstance.deleteZoneSpace(cloudPk, id, ifcPk, projectPk, zonePk).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## exportIfc

> IfcExport exportIfc(cloudPk, id, projectPk, data)

Export IFC

Export IFC as requested in parameters. This call doesn&#39;t return the IFC. When the export is finished, a new IFC file with &#39;_export_DD_MM_YYYY&#39; suffix will be created in the same folder than the original IFC. You can query the folder or subscribe to the new document webhook to retrieve the result Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this ifc.
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.IfcExport(); // IfcExport | 
apiInstance.exportIfc(cloudPk, id, projectPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this ifc. | 
 **projectPk** | **String**|  | 
 **data** | [**IfcExport**](IfcExport.md)|  | 

### Return type

[**IfcExport**](IfcExport.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## fullUpdateElement

> Element fullUpdateElement(cloudPk, ifcPk, projectPk, uuid, data)

Update all fields of an element

Update all fields of a element. The IFC file will not be updated. The created element will be accessible over the API and when exporting an IFC file Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let uuid = "uuid_example"; // String | IFC element or element type UUID
let data = new bimdata.Element(); // Element | 
apiInstance.fullUpdateElement(cloudPk, ifcPk, projectPk, uuid, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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
 **data** | [**Element**](Element.md)|  | 

### Return type

[**Element**](Element.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## fullUpdateIfc

> Ifc fullUpdateIfc(cloudPk, id, projectPk, data)

Update all fields of a model

Update all fields of a model Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this ifc.
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.Ifc(); // Ifc | 
apiInstance.fullUpdateIfc(cloudPk, id, projectPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this ifc. | 
 **projectPk** | **String**|  | 
 **data** | [**Ifc**](Ifc.md)|  | 

### Return type

[**Ifc**](Ifc.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## fullUpdateIfcProperty

> Property fullUpdateIfcProperty(cloudPk, id, ifcPk, projectPk, data)

Update some fields of a Property

Update some fields of a Property Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this property.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.Property(); // Property | 
apiInstance.fullUpdateIfcProperty(cloudPk, id, ifcPk, projectPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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
 **data** | [**Property**](Property.md)|  | 

### Return type

[**Property**](Property.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## fullUpdateIfcPropertyDefinition

> PropertyDefinition fullUpdateIfcPropertyDefinition(cloudPk, id, ifcPk, projectPk, data)

Update all fields of many PropertyDefinitions of a model

 Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this property definition.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.PropertyDefinition(); // PropertyDefinition | 
apiInstance.fullUpdateIfcPropertyDefinition(cloudPk, id, ifcPk, projectPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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
 **data** | [**PropertyDefinition**](PropertyDefinition.md)|  | 

### Return type

[**PropertyDefinition**](PropertyDefinition.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## fullUpdateIfcUnit

> Unit fullUpdateIfcUnit(cloudPk, id, ifcPk, projectPk, data)

Update all fields of a Unit of a model

 Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this unit.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.Unit(); // Unit | 
apiInstance.fullUpdateIfcUnit(cloudPk, id, ifcPk, projectPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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
 **data** | [**Unit**](Unit.md)|  | 

### Return type

[**Unit**](Unit.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## fullUpdatePropertySet

> PropertySet fullUpdatePropertySet(cloudPk, id, ifcPk, projectPk, data)

Update all fields of a PropertySet

Update all fields of a PropertySet Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this property set.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.PropertySet(); // PropertySet | 
apiInstance.fullUpdatePropertySet(cloudPk, id, ifcPk, projectPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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
 **data** | [**PropertySet**](PropertySet.md)|  | 

### Return type

[**PropertySet**](PropertySet.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## fullUpdateSpace

> Space fullUpdateSpace(cloudPk, id, ifcPk, projectPk, data)

Update all fields of a space

Update all fields of a space. The IFC file will not be updated. The created space will be accessible over the API and when exporting an IFC file Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this space.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.Space(); // Space | 
apiInstance.fullUpdateSpace(cloudPk, id, ifcPk, projectPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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
 **data** | [**Space**](Space.md)|  | 

### Return type

[**Space**](Space.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## fullUpdateZone

> Zone fullUpdateZone(cloudPk, id, ifcPk, projectPk, data)

Update all fields of a zone

Update all fields of a zone. The IFC file will not be updated. The created zone will be accessible over the API and when exporting an IFC file Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this zone.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.Zone(); // Zone | 
apiInstance.fullUpdateZone(cloudPk, id, ifcPk, projectPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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
 **data** | [**Zone**](Zone.md)|  | 

### Return type

[**Zone**](Zone.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## fullUpdateZoneSpace

> ZoneSpace fullUpdateZoneSpace(cloudPk, id, ifcPk, projectPk, zonePk, data)

Update all fields of a space

Update all fields of a space. The IFC file will not be updated. The created space will be accessible over the API and when exporting an IFC file Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this space.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let zonePk = "zonePk_example"; // String | 
let data = new bimdata.ZoneSpace(); // ZoneSpace | 
apiInstance.fullUpdateZoneSpace(cloudPk, id, ifcPk, projectPk, zonePk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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
 **data** | [**ZoneSpace**](ZoneSpace.md)|  | 

### Return type

[**ZoneSpace**](ZoneSpace.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getClassificationsOfElement

> [Classification] getClassificationsOfElement(cloudPk, elementUuid, ifcPk, projectPk)

Retrieve all classifications of an element

Retrieve all classifications of an element Required scopes: ifc:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let elementUuid = "elementUuid_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.getClassificationsOfElement(cloudPk, elementUuid, ifcPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getElement

> Element getElement(cloudPk, ifcPk, projectPk, uuid)

Retrieve an element of a model

Retrieve an element of a model Required scopes: ifc:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let uuid = "uuid_example"; // String | IFC element or element type UUID
apiInstance.getElement(cloudPk, ifcPk, projectPk, uuid).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getElementPropertySet

> PropertySet getElementPropertySet(cloudPk, elementUuid, id, ifcPk, projectPk)

Retrieve a PropertySet of an element

Retrieve a PropertySet of an element Required scopes: ifc:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let elementUuid = "elementUuid_example"; // String | 
let id = 56; // Number | A unique integer value identifying this property set.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.getElementPropertySet(cloudPk, elementUuid, id, ifcPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getElementPropertySetProperties

> [Property] getElementPropertySetProperties(cloudPk, elementUuid, ifcPk, projectPk, propertysetPk)

Retrieve all Properties of a PropertySet

Retrieve all Properties of a PropertySet Required scopes: ifc:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let elementUuid = "elementUuid_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let propertysetPk = "propertysetPk_example"; // String | 
apiInstance.getElementPropertySetProperties(cloudPk, elementUuid, ifcPk, projectPk, propertysetPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getElementPropertySetProperty

> Property getElementPropertySetProperty(cloudPk, elementUuid, id, ifcPk, projectPk, propertysetPk)

Retrieve a Property of a PropertySet

Retrieve a Property of a PropertySet Required scopes: ifc:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let elementUuid = "elementUuid_example"; // String | 
let id = 56; // Number | A unique integer value identifying this property.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let propertysetPk = "propertysetPk_example"; // String | 
apiInstance.getElementPropertySetProperty(cloudPk, elementUuid, id, ifcPk, projectPk, propertysetPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getElementPropertySetPropertyDefinition

> PropertyDefinition getElementPropertySetPropertyDefinition(cloudPk, elementUuid, id, ifcPk, projectPk, propertyPk, propertysetPk)

Retrieve a Definition of a Property

Retrieve a Definition of a Property Required scopes: ifc:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let elementUuid = "elementUuid_example"; // String | 
let id = 56; // Number | A unique integer value identifying this property definition.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let propertyPk = "propertyPk_example"; // String | 
let propertysetPk = "propertysetPk_example"; // String | 
apiInstance.getElementPropertySetPropertyDefinition(cloudPk, elementUuid, id, ifcPk, projectPk, propertyPk, propertysetPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getElementPropertySetPropertyDefinitionUnit

> Unit getElementPropertySetPropertyDefinitionUnit(cloudPk, elementUuid, id, ifcPk, projectPk, propertyPk, propertydefinitionPk, propertysetPk)

Retrieve a Unit of a Definition

Retrieve a Unit of a Definition Required scopes: ifc:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let elementUuid = "elementUuid_example"; // String | 
let id = 56; // Number | A unique integer value identifying this unit.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let propertyPk = "propertyPk_example"; // String | 
let propertydefinitionPk = "propertydefinitionPk_example"; // String | 
let propertysetPk = "propertysetPk_example"; // String | 
apiInstance.getElementPropertySetPropertyDefinitionUnit(cloudPk, elementUuid, id, ifcPk, projectPk, propertyPk, propertydefinitionPk, propertysetPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getElementPropertySetPropertyDefinitionUnits

> [Unit] getElementPropertySetPropertyDefinitionUnits(cloudPk, elementUuid, ifcPk, projectPk, propertyPk, propertydefinitionPk, propertysetPk)

Retrieve all Units of a Definition

Retrieve all Units of a Definition Required scopes: ifc:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let elementUuid = "elementUuid_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let propertyPk = "propertyPk_example"; // String | 
let propertydefinitionPk = "propertydefinitionPk_example"; // String | 
let propertysetPk = "propertysetPk_example"; // String | 
apiInstance.getElementPropertySetPropertyDefinitionUnits(cloudPk, elementUuid, ifcPk, projectPk, propertyPk, propertydefinitionPk, propertysetPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getElementPropertySetPropertyDefinitions

> [PropertyDefinition] getElementPropertySetPropertyDefinitions(cloudPk, elementUuid, ifcPk, projectPk, propertyPk, propertysetPk)

Retrieve all Definitions of a PropertySet

Retrieve all Definitions of a PropertySet Required scopes: ifc:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let elementUuid = "elementUuid_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let propertyPk = "propertyPk_example"; // String | 
let propertysetPk = "propertysetPk_example"; // String | 
apiInstance.getElementPropertySetPropertyDefinitions(cloudPk, elementUuid, ifcPk, projectPk, propertyPk, propertysetPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getElementPropertySets

> [PropertySet] getElementPropertySets(cloudPk, elementUuid, ifcPk, projectPk)

Retrieve all PropertySets of an element

Retrieve all PropertySets of an element Required scopes: ifc:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let elementUuid = "elementUuid_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.getElementPropertySets(cloudPk, elementUuid, ifcPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getElements

> [Element] getElements(cloudPk, ifcPk, projectPk, opts)

Retrieve all elements of a model

Retrieve all elements of a model. If not filtered, the json may be very large. To efficently retrieve all elements and their data, see getRawElements Required scopes: ifc:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let opts = {
  'type': "type_example", // String | Filter the returned list by type
  'classification': "classification_example", // String | Filter the returned list by classification
  'classificationNotation': "classificationNotation_example" // String | Filter the returned list by classification__notation
};
apiInstance.getElements(cloudPk, ifcPk, projectPk, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getElementsFromClassification

> [Element] getElementsFromClassification(cloudPk, ifcClassificationPk, ifcPk, projectPk)

Retrieve all elements with the classification

Retrieve all elements with the classification Required scopes: ifc:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcClassificationPk = "ifcClassificationPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.getElementsFromClassification(cloudPk, ifcClassificationPk, ifcPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getIfc

> Ifc getIfc(cloudPk, id, projectPk)

Retrieve one model

 Required scopes: ifc:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this ifc.
let projectPk = "projectPk_example"; // String | 
apiInstance.getIfc(cloudPk, id, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getIfcBVH

> getIfcBVH(cloudPk, id, projectPk)

Get svg file

         DEPRECATED: Now, retrieve the file url in the ifc object itself         Returns the map file          Required scopes: ifc:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this ifc.
let projectPk = "projectPk_example"; // String | 
apiInstance.getIfcBVH(cloudPk, id, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getIfcClassifications

> [Classification] getIfcClassifications(cloudPk, ifcPk, projectPk)

Retrieve all classifications in a model

Retrieve all classifications in a model Required scopes: ifc:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.getIfcClassifications(cloudPk, ifcPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getIfcGLTF

> getIfcGLTF(cloudPk, id, projectPk)

Get gltf file

         DEPRECATED: Now, retrieve the file url in the ifc object itself         Returns the gltf file          Required scopes: ifc:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this ifc.
let projectPk = "projectPk_example"; // String | 
apiInstance.getIfcGLTF(cloudPk, id, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getIfcMap

> getIfcMap(cloudPk, id, projectPk)

Get bvh file

         DEPRECATED: Now, retrieve the file url in the ifc object itself         Returns the bvh file          Required scopes: ifc:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this ifc.
let projectPk = "projectPk_example"; // String | 
apiInstance.getIfcMap(cloudPk, id, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getIfcProperties

> [Property] getIfcProperties(cloudPk, ifcPk, projectPk)

Retrieve all Properties of a model

Retrieve all PropertySets of a model Required scopes: ifc:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.getIfcProperties(cloudPk, ifcPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getIfcProperty

> Property getIfcProperty(cloudPk, id, ifcPk, projectPk)

Retrieve a Property of a model

Retrieve a Property of a model Required scopes: ifc:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this property.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.getIfcProperty(cloudPk, id, ifcPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getIfcPropertyDefinition

> PropertyDefinition getIfcPropertyDefinition(cloudPk, id, ifcPk, projectPk)

Retrieve a PropertyDefinition of a model

Retrieve a PropertyDefinition of a model Required scopes: ifc:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this property definition.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.getIfcPropertyDefinition(cloudPk, id, ifcPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getIfcPropertyDefinitions

> [PropertyDefinition] getIfcPropertyDefinitions(cloudPk, ifcPk, projectPk)

Retrieve all PropertyDefinitions of a model

Retrieve all PropertyDefinitions of a model Required scopes: ifc:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.getIfcPropertyDefinitions(cloudPk, ifcPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getIfcStructure

> getIfcStructure(cloudPk, id, projectPk)

Get structure file

         DEPRECATED: Now, retrieve the file url in the ifc object itself         Returns the structure file          Required scopes: ifc:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this ifc.
let projectPk = "projectPk_example"; // String | 
apiInstance.getIfcStructure(cloudPk, id, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getIfcSystems

> getIfcSystems(cloudPk, id, projectPk)

Get systems file

         DEPRECATED: Now, retrieve the file url in the ifc object itself         Returns the system file          Required scopes: ifc:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this ifc.
let projectPk = "projectPk_example"; // String | 
apiInstance.getIfcSystems(cloudPk, id, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getIfcUnit

> Unit getIfcUnit(cloudPk, id, ifcPk, projectPk)

Retrieve a Unit of a model

Retrieve a Unit of a model Required scopes: ifc:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this unit.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.getIfcUnit(cloudPk, id, ifcPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getIfcUnits

> [Unit] getIfcUnits(cloudPk, ifcPk, projectPk)

Retrieve all Units of a model

Retrieve all Units of a model Required scopes: ifc:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.getIfcUnits(cloudPk, ifcPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getIfcs

> [Ifc] getIfcs(cloudPk, projectPk, opts)

Retrieve all models

Retrieve all models Required scopes: ifc:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let opts = {
  'status': "status_example" // String | Filter the returned list by status
};
apiInstance.getIfcs(cloudPk, projectPk, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProcessorHandler

> ProcessorHandler getProcessorHandler(cloudPk, id, ifcPk, projectPk)

Retrieve a processor handler

 Required scopes: ifc:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this processor handler.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.getProcessorHandler(cloudPk, id, ifcPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this processor handler. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 

### Return type

[**ProcessorHandler**](ProcessorHandler.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProcessorHandlers

> [ProcessorHandler] getProcessorHandlers(cloudPk, ifcPk, projectPk)

Get all processor handlers

 Required scopes: ifc:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.getProcessorHandlers(cloudPk, ifcPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[**[ProcessorHandler]**](ProcessorHandler.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPropertySet

> PropertySet getPropertySet(cloudPk, id, ifcPk, projectPk)

Retrieve a PropertySet of a model

Retrieve a PropertySet of a model Required scopes: ifc:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this property set.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.getPropertySet(cloudPk, id, ifcPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPropertySets

> [PropertySet] getPropertySets(cloudPk, ifcPk, projectPk)

Retrieve all PropertySets of a model

Retrieve all PropertySets of a model Required scopes: ifc:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.getPropertySets(cloudPk, ifcPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRawElements

> RawElements getRawElements(cloudPk, ifcPk, projectPk, opts)

Retrieve all elements in a optimized format

         Returns elements, property_sets, properties, definitions and units in a JSON optimized structure          Required scopes: ifc:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let opts = {
  'type': "type_example", // String | Filter the returned list by type
  'classification': "classification_example", // String | Filter the returned list by classification
  'classificationNotation': "classificationNotation_example" // String | Filter the returned list by classification__notation
};
apiInstance.getRawElements(cloudPk, ifcPk, projectPk, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSpace

> Space getSpace(cloudPk, id, ifcPk, projectPk)

Retrieve one space of the model

Retrieve one space of the model Required scopes: ifc:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this space.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.getSpace(cloudPk, id, ifcPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSpaces

> [Space] getSpaces(cloudPk, ifcPk, projectPk)

Retrieve all spaces of the model

Retrieve all spaces of the model Required scopes: ifc:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.getSpaces(cloudPk, ifcPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getZone

> Zone getZone(cloudPk, id, ifcPk, projectPk)

Retrieve one zone of a model

Retrieve one zone of a model Required scopes: ifc:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this zone.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.getZone(cloudPk, id, ifcPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getZoneSpace

> ZoneSpace getZoneSpace(cloudPk, id, ifcPk, projectPk, zonePk)

Retrieve one space of a zone

Retrieve one space of a zone Required scopes: ifc:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this space.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let zonePk = "zonePk_example"; // String | 
apiInstance.getZoneSpace(cloudPk, id, ifcPk, projectPk, zonePk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getZoneSpaces

> [ZoneSpace] getZoneSpaces(cloudPk, ifcPk, projectPk, zonePk)

Retrieve all spaces of a zone

Retrieve all spaces of a zone Required scopes: ifc:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let zonePk = "zonePk_example"; // String | 
apiInstance.getZoneSpaces(cloudPk, ifcPk, projectPk, zonePk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getZones

> [Zone] getZones(cloudPk, ifcPk, projectPk, opts)

Retrieve zones of a model

Retrieve parent zones of a model. Children zones we&#39;ll be in the &#39;zones&#39; field Required scopes: ifc:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let opts = {
  'color': "color_example" // String | Filter the returned list by color
};
apiInstance.getZones(cloudPk, ifcPk, projectPk, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listClassificationElementRelations

> [ElementClassificationRelation] listClassificationElementRelations(cloudPk, ifcPk, projectPk)

List all associations between classifications and elements

List all associations between classifications and elements Required scopes: ifc:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.listClassificationElementRelations(cloudPk, ifcPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## removeClassificationOfElement

> removeClassificationOfElement(cloudPk, elementUuid, id, ifcPk, projectPk)

Remove a classification from an element

The classification will not be deleted Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let elementUuid = "elementUuid_example"; // String | 
let id = 56; // Number | A unique integer value identifying this classification.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.removeClassificationOfElement(cloudPk, elementUuid, id, ifcPk, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## removeElementPropertySet

> removeElementPropertySet(cloudPk, elementUuid, id, ifcPk, projectPk)

Remove a PropertySet from an element

Delete the relation between the element and the property set. Does not delete any object Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let elementUuid = "elementUuid_example"; // String | 
let id = 56; // Number | A unique integer value identifying this property set.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.removeElementPropertySet(cloudPk, elementUuid, id, ifcPk, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## removeElementPropertySetProperty

> removeElementPropertySetProperty(cloudPk, elementUuid, id, ifcPk, projectPk, propertysetPk)

Remove a property from a PropertySet

 Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let elementUuid = "elementUuid_example"; // String | 
let id = 56; // Number | A unique integer value identifying this property.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let propertysetPk = "propertysetPk_example"; // String | 
apiInstance.removeElementPropertySetProperty(cloudPk, elementUuid, id, ifcPk, projectPk, propertysetPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## removeElementPropertySetPropertyDefinition

> removeElementPropertySetPropertyDefinition(cloudPk, elementUuid, id, ifcPk, projectPk, propertyPk, propertysetPk)

Remove a Definition from a Property

 Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let elementUuid = "elementUuid_example"; // String | 
let id = 56; // Number | A unique integer value identifying this property definition.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let propertyPk = "propertyPk_example"; // String | 
let propertysetPk = "propertysetPk_example"; // String | 
apiInstance.removeElementPropertySetPropertyDefinition(cloudPk, elementUuid, id, ifcPk, projectPk, propertyPk, propertysetPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## removeElementPropertySetPropertyDefinitionUnit

> removeElementPropertySetPropertyDefinitionUnit(cloudPk, elementUuid, id, ifcPk, projectPk, propertyPk, propertydefinitionPk, propertysetPk)

Remove a Unit from a Definition

Remove a Unit from a Definition Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let elementUuid = "elementUuid_example"; // String | 
let id = 56; // Number | A unique integer value identifying this unit.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let propertyPk = "propertyPk_example"; // String | 
let propertydefinitionPk = "propertydefinitionPk_example"; // String | 
let propertysetPk = "propertysetPk_example"; // String | 
apiInstance.removeElementPropertySetPropertyDefinitionUnit(cloudPk, elementUuid, id, ifcPk, projectPk, propertyPk, propertydefinitionPk, propertysetPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## removeElementsFromClassification

> removeElementsFromClassification(cloudPk, ifcClassificationPk, ifcPk, projectPk, uuid)

Remove the classification from all elements

Remove the classification from all elements. No element nor classification will be deleted Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcClassificationPk = "ifcClassificationPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let uuid = "uuid_example"; // String | IFC element or element type UUID
apiInstance.removeElementsFromClassification(cloudPk, ifcClassificationPk, ifcPk, projectPk, uuid).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## updateElement

> Element updateElement(cloudPk, ifcPk, projectPk, uuid, data)

Update some fields of a zone

Update some fields of a zone. The IFC file will not be updated. The created element will be accessible over the API and when exporting an IFC file Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let uuid = "uuid_example"; // String | IFC element or element type UUID
let data = new bimdata.Element(); // Element | 
apiInstance.updateElement(cloudPk, ifcPk, projectPk, uuid, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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
 **data** | [**Element**](Element.md)|  | 

### Return type

[**Element**](Element.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateIfc

> Ifc updateIfc(cloudPk, id, projectPk, data)

Update some fields of a model

Update some fields of a model Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this ifc.
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.Ifc(); // Ifc | 
apiInstance.updateIfc(cloudPk, id, projectPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this ifc. | 
 **projectPk** | **String**|  | 
 **data** | [**Ifc**](Ifc.md)|  | 

### Return type

[**Ifc**](Ifc.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateIfcFiles

> IfcFiles updateIfcFiles(cloudPk, id, projectPk, opts)

Update models file (gltf, svg, structure, etc)

         Patch ifc files (gltf, structure, svg, etc)          Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this ifc.
let projectPk = "projectPk_example"; // String | 
let opts = {
  'structureFile': "/path/to/file", // File | 
  'systemsFile': "/path/to/file", // File | 
  'mapFile': "/path/to/file", // File | 
  'gltfFile': "/path/to/file", // File | 
  'bvhTreeFile': "/path/to/file", // File | 
  'viewer360File': "/path/to/file" // File | 
};
apiInstance.updateIfcFiles(cloudPk, id, projectPk, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: multipart/form-data, application/x-www-form-urlencoded
- **Accept**: application/json


## updateIfcProperty

> Property updateIfcProperty(cloudPk, id, ifcPk, projectPk, data)

Update some fields of a Property

Update some fields of a Property Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this property.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.Property(); // Property | 
apiInstance.updateIfcProperty(cloudPk, id, ifcPk, projectPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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
 **data** | [**Property**](Property.md)|  | 

### Return type

[**Property**](Property.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateIfcPropertyDefinition

> PropertyDefinition updateIfcPropertyDefinition(cloudPk, id, ifcPk, projectPk, data)

Update some fields of many PropertyDefinitions of a model

 Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this property definition.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.PropertyDefinition(); // PropertyDefinition | 
apiInstance.updateIfcPropertyDefinition(cloudPk, id, ifcPk, projectPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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
 **data** | [**PropertyDefinition**](PropertyDefinition.md)|  | 

### Return type

[**PropertyDefinition**](PropertyDefinition.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateIfcUnit

> Unit updateIfcUnit(cloudPk, id, ifcPk, projectPk, data)

Update some fields of a Unit of a model

 Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this unit.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.Unit(); // Unit | 
apiInstance.updateIfcUnit(cloudPk, id, ifcPk, projectPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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
 **data** | [**Unit**](Unit.md)|  | 

### Return type

[**Unit**](Unit.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateProcessorHandler

> ProcessorHandler updateProcessorHandler(cloudPk, id, ifcPk, projectPk, data)

Update the status of a processor handler

 Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this processor handler.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.ProcessorHandler(); // ProcessorHandler | 
apiInstance.updateProcessorHandler(cloudPk, id, ifcPk, projectPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this processor handler. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **data** | [**ProcessorHandler**](ProcessorHandler.md)|  | 

### Return type

[**ProcessorHandler**](ProcessorHandler.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updatePropertySet

> PropertySet updatePropertySet(cloudPk, id, ifcPk, projectPk, data)

Update some fields of a PropertySet

Update some fields of a PropertySet Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this property set.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.PropertySet(); // PropertySet | 
apiInstance.updatePropertySet(cloudPk, id, ifcPk, projectPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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
 **data** | [**PropertySet**](PropertySet.md)|  | 

### Return type

[**PropertySet**](PropertySet.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateSpace

> Space updateSpace(cloudPk, id, ifcPk, projectPk, data)

Update some fields of a space

Update some fields of a space. The IFC file will not be updated. The created space will be accessible over the API and when exporting an IFC file Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this space.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.Space(); // Space | 
apiInstance.updateSpace(cloudPk, id, ifcPk, projectPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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
 **data** | [**Space**](Space.md)|  | 

### Return type

[**Space**](Space.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateZone

> Zone updateZone(cloudPk, id, ifcPk, projectPk, data)

Update some fields of a zone

Update some fields of a zone. The IFC file will not be updated. The created zone will be accessible over the API and when exporting an IFC file Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this zone.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.Zone(); // Zone | 
apiInstance.updateZone(cloudPk, id, ifcPk, projectPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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
 **data** | [**Zone**](Zone.md)|  | 

### Return type

[**Zone**](Zone.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateZoneSpace

> ZoneSpace updateZoneSpace(cloudPk, id, ifcPk, projectPk, zonePk, data)

Update some fields of a space

Update some fields of a space. The IFC file will not be updated. The created space will be accessible over the API and when exporting an IFC file Required scopes: ifc:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
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

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this space.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let zonePk = "zonePk_example"; // String | 
let data = new bimdata.ZoneSpace(); // ZoneSpace | 
apiInstance.updateZoneSpace(cloudPk, id, ifcPk, projectPk, zonePk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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
 **data** | [**ZoneSpace**](ZoneSpace.md)|  | 

### Return type

[**ZoneSpace**](ZoneSpace.md)

### Authorization

[BIMDataConnect](../README.md#BIMDataConnect), [Bearer](../README.md#Bearer), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


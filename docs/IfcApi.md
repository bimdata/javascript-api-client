# bimdata.IfcApi

All URIs are relative to *https://api.bimdata.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addIfcErrorsDeprecated**](IfcApi.md#addIfcErrorsDeprecated) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{id}/errors | Add errors to model
[**bulkDeleteIfcClassificationsDeprecated**](IfcApi.md#bulkDeleteIfcClassificationsDeprecated) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/classification/list_destroy | Remove all classifications from model&#39;s elements
[**bulkDeleteIfcPropertiesDeprecated**](IfcApi.md#bulkDeleteIfcPropertiesDeprecated) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/property/bulk_destroy | Delete many Property of a model
[**bulkDeleteIfcPropertyDefinitionsDeprecated**](IfcApi.md#bulkDeleteIfcPropertyDefinitionsDeprecated) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/propertydefinition/bulk_destroy | Delete many PropertyDefinitions of a model
[**bulkDeleteIfcUnitsDeprecated**](IfcApi.md#bulkDeleteIfcUnitsDeprecated) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/unit/bulk_destroy | Delete many Units of a model
[**bulkDeletePropertySetDeprecated**](IfcApi.md#bulkDeletePropertySetDeprecated) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/propertyset/bulk_destroy | Delete many PropertySet of a model
[**bulkFullUpdateElementsDeprecated**](IfcApi.md#bulkFullUpdateElementsDeprecated) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/bulk_update | Update many elements at once (only changing fields may be defined)
[**bulkFullUpdateIfcPropertyDeprecated**](IfcApi.md#bulkFullUpdateIfcPropertyDeprecated) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/property/bulk_update | Update some fields of many properties of a model
[**bulkRemoveClassificationsOfElementDeprecated**](IfcApi.md#bulkRemoveClassificationsOfElementDeprecated) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/classification/bulk_destroy | Remove many classifications from an element
[**bulkRemoveDocumentsOfElementDeprecated**](IfcApi.md#bulkRemoveDocumentsOfElementDeprecated) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/documents/bulk_destroy | Remove many documents from an element
[**bulkRemoveElementsFromClassificationDeprecated**](IfcApi.md#bulkRemoveElementsFromClassificationDeprecated) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/classification/{model_classification_pk}/element/bulk_destroy | Remove the classifications from all elements
[**bulkUpdateElementsDeprecated**](IfcApi.md#bulkUpdateElementsDeprecated) | **PUT** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/bulk_update | Update many elements at once (all field must be defined)
[**bulkUpdateIfcPropertyDeprecated**](IfcApi.md#bulkUpdateIfcPropertyDeprecated) | **PUT** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/property/bulk_update | Update all fields of many properties of a model
[**createAccessTokenDeprecated**](IfcApi.md#createAccessTokenDeprecated) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/access_token | Create a token for this model
[**createCheckerDeprecated**](IfcApi.md#createCheckerDeprecated) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/checker | Create a checker to a model
[**createCheckerResultDeprecated**](IfcApi.md#createCheckerResultDeprecated) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/checker/{checker_pk}/result | Create a CheckerResult
[**createClassificationElementRelationsDeprecated**](IfcApi.md#createClassificationElementRelationsDeprecated) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/classification-element | Create association between existing classification and existing element
[**createClassificationsOfElementDeprecated**](IfcApi.md#createClassificationsOfElementDeprecated) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/classification | Create one or many classifications to an element
[**createElementDeprecated**](IfcApi.md#createElementDeprecated) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element | Create an element in the model
[**createElementPropertySetDeprecated**](IfcApi.md#createElementPropertySetDeprecated) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/propertyset | Create a PropertySets to an element
[**createElementPropertySetPropertyDefinitionDeprecated**](IfcApi.md#createElementPropertySetPropertyDefinitionDeprecated) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/propertyset/{propertyset_pk}/property/{property_pk}/propertydefinition | Create a Definition to a Property
[**createElementPropertySetPropertyDefinitionUnitDeprecated**](IfcApi.md#createElementPropertySetPropertyDefinitionUnitDeprecated) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/propertyset/{propertyset_pk}/property/{property_pk}/propertydefinition/{propertydefinition_pk}/unit | Create a Unit to a Definition
[**createElementPropertySetPropertyDeprecated**](IfcApi.md#createElementPropertySetPropertyDeprecated) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/propertyset/{propertyset_pk}/property | Create a property to a PropertySet
[**createIfcDeprecated**](IfcApi.md#createIfcDeprecated) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/create-model | Make a PDF or Image file a Model
[**createIfcPropertyDefinitionDeprecated**](IfcApi.md#createIfcPropertyDefinitionDeprecated) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/propertydefinition | Create a PropertyDefinition on the model
[**createIfcUnitDeprecated**](IfcApi.md#createIfcUnitDeprecated) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/unit | Create a Unit on a model
[**createLayerDeprecated**](IfcApi.md#createLayerDeprecated) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/layer | Create a layer in the model
[**createMetaBuildingDeprecated**](IfcApi.md#createMetaBuildingDeprecated) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/create-metabuilding | Create an empty 3D Model
[**createPropertySetDeprecated**](IfcApi.md#createPropertySetDeprecated) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/propertyset | Create a PropertySet
[**createPropertySetElementRelationsDeprecated**](IfcApi.md#createPropertySetElementRelationsDeprecated) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/propertyset-element | Create association between PropertySet and element
[**createRawElementsDeprecated**](IfcApi.md#createRawElementsDeprecated) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/raw | Create elements in an optimized format
[**createSpaceDeprecated**](IfcApi.md#createSpaceDeprecated) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/space | Create a space in the model
[**createStoreyPlanDeprecated**](IfcApi.md#createStoreyPlanDeprecated) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/storey/{storey_pk}/plan/add | Create a relation between a 2d model and a storey
[**createSystemDeprecated**](IfcApi.md#createSystemDeprecated) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/system | Create a system in the model
[**createZoneDeprecated**](IfcApi.md#createZoneDeprecated) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/zone | Create a zone in the model
[**createZoneSpaceDeprecated**](IfcApi.md#createZoneSpaceDeprecated) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/zone/{zone_pk}/space | Create a space in a zone
[**deleteAccessTokenDeprecated**](IfcApi.md#deleteAccessTokenDeprecated) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/access_token/{token} | Delete a token
[**deleteCheckerDeprecated**](IfcApi.md#deleteCheckerDeprecated) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/checker/{id} | Delete a checker of a model
[**deleteCheckerResultDeprecated**](IfcApi.md#deleteCheckerResultDeprecated) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/checker/{checker_pk}/result/{id} | Delete a CheckerResult
[**deleteElementDeprecated**](IfcApi.md#deleteElementDeprecated) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{uuid} | Delete an element of a model
[**deleteIfcDeprecated**](IfcApi.md#deleteIfcDeprecated) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{id} | Delete a model
[**deleteIfcPropertyDefinitionDeprecated**](IfcApi.md#deleteIfcPropertyDefinitionDeprecated) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/propertydefinition/{id} | Delete a PropertyDefinitions of a model
[**deleteIfcPropertyDeprecated**](IfcApi.md#deleteIfcPropertyDeprecated) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/property/{id} | Delete a Property of a model
[**deleteIfcUnitDeprecated**](IfcApi.md#deleteIfcUnitDeprecated) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/unit/{id} | Delete a Unit of a model
[**deleteIfcWithoutDocDeprecated**](IfcApi.md#deleteIfcWithoutDocDeprecated) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{id}/delete-model | Delete the Model without deleting the related document
[**deleteLayerDeprecated**](IfcApi.md#deleteLayerDeprecated) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/layer/{id} | Delete a layer of a model
[**deletePropertySetDeprecated**](IfcApi.md#deletePropertySetDeprecated) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/propertyset/{id} | Delete a PropertySet of a model
[**deleteSpaceDeprecated**](IfcApi.md#deleteSpaceDeprecated) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/space/{id} | Delete a space
[**deleteStoreyDeprecated**](IfcApi.md#deleteStoreyDeprecated) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/storey/{id} | Delete a storey of a model
[**deleteStoreyPlanDeprecated**](IfcApi.md#deleteStoreyPlanDeprecated) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/storey/{storey_pk}/plan/{id} | Delete the relation between a 2d model and a storey
[**deleteSystemDeprecated**](IfcApi.md#deleteSystemDeprecated) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/system/{uuid} | Delete a system of a model
[**deleteZoneDeprecated**](IfcApi.md#deleteZoneDeprecated) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/zone/{id} | Delete a zone of a model
[**deleteZoneSpaceDeprecated**](IfcApi.md#deleteZoneSpaceDeprecated) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/zone/{zone_pk}/space/{id} | Delete a space of a zone
[**exportIfcDeprecated**](IfcApi.md#exportIfcDeprecated) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{id}/export | Export IFC
[**fullUpdateElementDeprecated**](IfcApi.md#fullUpdateElementDeprecated) | **PUT** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{uuid} | Update all fields of an element
[**fullUpdateStoreysDeprecated**](IfcApi.md#fullUpdateStoreysDeprecated) | **PUT** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/storey/full_update | Update all fields of all storeys
[**getAccessTokenDeprecated**](IfcApi.md#getAccessTokenDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/access_token/{token} | Retrieve one token created for this model
[**getAccessTokensDeprecated**](IfcApi.md#getAccessTokensDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/access_token | Retrieve all tokens created for this model
[**getCheckerDeprecated**](IfcApi.md#getCheckerDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/checker/{id} | Retrieve a checker of a model
[**getCheckerResultDeprecated**](IfcApi.md#getCheckerResultDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/checker/{checker_pk}/result/{id} | Retrieve one CheckerResult
[**getCheckerResultsDeprecated**](IfcApi.md#getCheckerResultsDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/checker/{checker_pk}/result | Retrieve all CheckerResults
[**getCheckersDeprecated**](IfcApi.md#getCheckersDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/checker | Retrieve all checkers of a model
[**getClassificationsOfElementDeprecated**](IfcApi.md#getClassificationsOfElementDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/classification | Retrieve all classifications of an element
[**getDocumentsOfElementDeprecated**](IfcApi.md#getDocumentsOfElementDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/documents | Retrieve all documents of an element
[**getElementDeprecated**](IfcApi.md#getElementDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{uuid} | Retrieve an element of a model
[**getElementLinkedDocumentsDeprecated**](IfcApi.md#getElementLinkedDocumentsDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/documents | Retrieve all documents linked to any element
[**getElementPropertySetDeprecated**](IfcApi.md#getElementPropertySetDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/propertyset/{id} | Retrieve a PropertySet of an element
[**getElementPropertySetPropertiesDeprecated**](IfcApi.md#getElementPropertySetPropertiesDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/propertyset/{propertyset_pk}/property | Retrieve all Properties of a PropertySet
[**getElementPropertySetPropertyDefinitionDeprecated**](IfcApi.md#getElementPropertySetPropertyDefinitionDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/propertyset/{propertyset_pk}/property/{property_pk}/propertydefinition/{id} | Retrieve a Definition of a Property
[**getElementPropertySetPropertyDefinitionUnitDeprecated**](IfcApi.md#getElementPropertySetPropertyDefinitionUnitDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/propertyset/{propertyset_pk}/property/{property_pk}/propertydefinition/{propertydefinition_pk}/unit/{id} | Retrieve a Unit of a Definition
[**getElementPropertySetPropertyDefinitionUnitsDeprecated**](IfcApi.md#getElementPropertySetPropertyDefinitionUnitsDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/propertyset/{propertyset_pk}/property/{property_pk}/propertydefinition/{propertydefinition_pk}/unit | Retrieve all Units of a Definition
[**getElementPropertySetPropertyDefinitionsDeprecated**](IfcApi.md#getElementPropertySetPropertyDefinitionsDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/propertyset/{propertyset_pk}/property/{property_pk}/propertydefinition | Retrieve all Definitions of a PropertySet
[**getElementPropertySetPropertyDeprecated**](IfcApi.md#getElementPropertySetPropertyDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/propertyset/{propertyset_pk}/property/{id} | Retrieve a Property of a PropertySet
[**getElementPropertySetsDeprecated**](IfcApi.md#getElementPropertySetsDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/propertyset | Retrieve all PropertySets of an element
[**getElementsDeprecated**](IfcApi.md#getElementsDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element | Retrieve all elements of a model
[**getElementsFromClassificationDeprecated**](IfcApi.md#getElementsFromClassificationDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/classification/{model_classification_pk}/element | Retrieve all elements with the classification
[**getIfcClassificationsDeprecated**](IfcApi.md#getIfcClassificationsDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/classification | Retrieve all classifications in a model
[**getIfcDeprecated**](IfcApi.md#getIfcDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{id} | Retrieve one model
[**getIfcMaterialDeprecated**](IfcApi.md#getIfcMaterialDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/material/{id} | Retrieve a material of a model
[**getIfcMaterialsDeprecated**](IfcApi.md#getIfcMaterialsDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/material | Retrieve all materials of a model
[**getIfcPropertiesDeprecated**](IfcApi.md#getIfcPropertiesDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/property | Retrieve all Properties of a model
[**getIfcPropertyDefinitionDeprecated**](IfcApi.md#getIfcPropertyDefinitionDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/propertydefinition/{id} | Retrieve a PropertyDefinition of a model
[**getIfcPropertyDefinitionsDeprecated**](IfcApi.md#getIfcPropertyDefinitionsDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/propertydefinition | Retrieve all PropertyDefinitions of a model
[**getIfcPropertyDeprecated**](IfcApi.md#getIfcPropertyDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/property/{id} | Retrieve a Property of a model
[**getIfcUnitDeprecated**](IfcApi.md#getIfcUnitDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/unit/{id} | Retrieve a Unit of a model
[**getIfcUnitsDeprecated**](IfcApi.md#getIfcUnitsDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/unit | Retrieve all Units of a model
[**getIfcsDeprecated**](IfcApi.md#getIfcsDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc | Retrieve all models
[**getLayerDeprecated**](IfcApi.md#getLayerDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/layer/{id} | Retrieve a layer of a model
[**getLayersDeprecated**](IfcApi.md#getLayersDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/layer | Retrieve all layers of a model
[**getMaterialDeprecated**](IfcApi.md#getMaterialDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/material/{id} | Retrieve a material of a model
[**getMaterialsDeprecated**](IfcApi.md#getMaterialsDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/material | Retrieve all materials of a model
[**getPlanPositioningDeprecated**](IfcApi.md#getPlanPositioningDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/storey/{storey_pk}/plan/{id}/positioning | Retrieve the postioning of the plan in the storey
[**getProcessorHandlerDeprecated**](IfcApi.md#getProcessorHandlerDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/processorhandler/{id} | Retrieve a processor handler
[**getProcessorHandlersDeprecated**](IfcApi.md#getProcessorHandlersDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/processorhandler | Get all processor handlers
[**getPropertySetDeprecated**](IfcApi.md#getPropertySetDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/propertyset/{id} | Retrieve a PropertySet of a model
[**getPropertySetsDeprecated**](IfcApi.md#getPropertySetsDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/propertyset | Retrieve all PropertySets of a model
[**getRawElementsDeprecated**](IfcApi.md#getRawElementsDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/raw | Retrieve all elements in a optimized format
[**getSimpleElementDeprecated**](IfcApi.md#getSimpleElementDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{uuid}/simple | Retrieve an element of a model with a simple value representation
[**getSimpleElementsDeprecated**](IfcApi.md#getSimpleElementsDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/simple | Retrieve all elements of a model with a simple value representation
[**getSpaceDeprecated**](IfcApi.md#getSpaceDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/space/{id} | Retrieve one space of the model
[**getSpacesDeprecated**](IfcApi.md#getSpacesDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/space | Retrieve all spaces of the model
[**getStoreyDeprecated**](IfcApi.md#getStoreyDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/storey/{id} | Retrieve a storey of a model
[**getStoreysDeprecated**](IfcApi.md#getStoreysDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/storey | Retrieve all storeys of a model
[**getSystemDeprecated**](IfcApi.md#getSystemDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/system/{uuid} | Retrieve a system of a model
[**getSystemsDeprecated**](IfcApi.md#getSystemsDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/system | Retrieve all systems of a model
[**getZoneDeprecated**](IfcApi.md#getZoneDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/zone/{id} | Retrieve one zone of a model
[**getZoneSpaceDeprecated**](IfcApi.md#getZoneSpaceDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/zone/{zone_pk}/space/{id} | Retrieve one space of a zone
[**getZoneSpacesDeprecated**](IfcApi.md#getZoneSpacesDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/zone/{zone_pk}/space | Retrieve all spaces of a zone
[**getZonesDeprecated**](IfcApi.md#getZonesDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/zone | Retrieve zones of a model
[**launchNewCheckDeprecated**](IfcApi.md#launchNewCheckDeprecated) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/checker/{id}/launch-check | Launch a new check on the model
[**linkDocumentsOfElementDeprecated**](IfcApi.md#linkDocumentsOfElementDeprecated) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/documents | Link one or many documents to an element
[**listClassificationElementRelationsDeprecated**](IfcApi.md#listClassificationElementRelationsDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/classification-element | List all associations between classifications and elements
[**mergeIfcsDeprecated**](IfcApi.md#mergeIfcsDeprecated) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/merge | Merge IFC files
[**optimizeIfcDeprecated**](IfcApi.md#optimizeIfcDeprecated) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{id}/optimize | Optimize the IFC
[**removeAllElementPropertySetDeprecated**](IfcApi.md#removeAllElementPropertySetDeprecated) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/propertyset/all | Remove all property sets from element
[**removeClassificationOfElementDeprecated**](IfcApi.md#removeClassificationOfElementDeprecated) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/classification/{id} | Remove a classification from an element
[**removeDocumentOfElementDeprecated**](IfcApi.md#removeDocumentOfElementDeprecated) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/documents/{id} | Remove a documents from an element
[**removeElementPropertySetDeprecated**](IfcApi.md#removeElementPropertySetDeprecated) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/propertyset/{id} | Remove a PropertySet from an element
[**removeElementPropertySetPropertyDefinitionDeprecated**](IfcApi.md#removeElementPropertySetPropertyDefinitionDeprecated) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/propertyset/{propertyset_pk}/property/{property_pk}/propertydefinition/{id} | Remove a Definition from a Property
[**removeElementPropertySetPropertyDefinitionUnitDeprecated**](IfcApi.md#removeElementPropertySetPropertyDefinitionUnitDeprecated) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/propertyset/{propertyset_pk}/property/{property_pk}/propertydefinition/{propertydefinition_pk}/unit/{id} | Remove a Unit from a Definition
[**removeElementPropertySetPropertyDeprecated**](IfcApi.md#removeElementPropertySetPropertyDeprecated) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/propertyset/{propertyset_pk}/property/{id} | Remove a property from a PropertySet
[**removeElementsFromClassificationDeprecated**](IfcApi.md#removeElementsFromClassificationDeprecated) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/classification/{model_classification_pk}/element/{uuid} | Remove the classification from all elements
[**reprocessIfcDeprecated**](IfcApi.md#reprocessIfcDeprecated) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{id}/reprocess | Reprocess Model file
[**updateAccessTokenDeprecated**](IfcApi.md#updateAccessTokenDeprecated) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/access_token/{token} | Update some fields of a token
[**updateCheckerDeprecated**](IfcApi.md#updateCheckerDeprecated) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/checker/{id} | Update some fields of a checker of a model
[**updateCheckerResultDeprecated**](IfcApi.md#updateCheckerResultDeprecated) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/checker/{checker_pk}/result/{id} | Update some fields of a CheckerResult
[**updateElementDeprecated**](IfcApi.md#updateElementDeprecated) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{uuid} | Update some fields of an element
[**updateElementPropertySetPropertyDeprecated**](IfcApi.md#updateElementPropertySetPropertyDeprecated) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/propertyset/{propertyset_pk}/property/{id} | Update a property from an element
[**updateIfcDeprecated**](IfcApi.md#updateIfcDeprecated) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{id} | Update some fields of a model
[**updateIfcFilesDeprecated**](IfcApi.md#updateIfcFilesDeprecated) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{id}/files | Update models file (gltf, svg, structure, etc)
[**updateIfcPropertyDefinitionDeprecated**](IfcApi.md#updateIfcPropertyDefinitionDeprecated) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/propertydefinition/{id} | Update some fields of many PropertyDefinitions of a model
[**updateIfcPropertyDeprecated**](IfcApi.md#updateIfcPropertyDeprecated) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/property/{id} | Update some fields of a Property
[**updateIfcUnitDeprecated**](IfcApi.md#updateIfcUnitDeprecated) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/unit/{id} | Update some fields of a Unit of a model
[**updateLayerDeprecated**](IfcApi.md#updateLayerDeprecated) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/layer/{id} | Update some fields of a layer
[**updatePlanPositioningDeprecated**](IfcApi.md#updatePlanPositioningDeprecated) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/storey/{storey_pk}/plan/{id}/positioning | Update the postioning of the plan in the storey
[**updateProcessorHandlerDeprecated**](IfcApi.md#updateProcessorHandlerDeprecated) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/processorhandler/{id} | Update the status of a processor handler
[**updatePropertySetDeprecated**](IfcApi.md#updatePropertySetDeprecated) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/propertyset/{id} | Update some fields of a PropertySet
[**updateSpaceDeprecated**](IfcApi.md#updateSpaceDeprecated) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/space/{id} | Update some fields of a space
[**updateStoreyDeprecated**](IfcApi.md#updateStoreyDeprecated) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/storey/{id} | Update some fields of a storey
[**updateSystemDeprecated**](IfcApi.md#updateSystemDeprecated) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/system/{uuid} | Update some fields of a system
[**updateZoneDeprecated**](IfcApi.md#updateZoneDeprecated) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/zone/{id} | Update some fields of a zone
[**updateZoneSpaceDeprecated**](IfcApi.md#updateZoneSpaceDeprecated) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/zone/{zone_pk}/space/{id} | Update some fields of a space



## addIfcErrorsDeprecated

> ModelErrors addIfcErrorsDeprecated(cloudPk, id, projectPk, data)

Add errors to model

Model errors are warnings and errors during model process. They alert about missing elements or malformed files Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this model.
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.ModelErrors(); // ModelErrors | 
apiInstance.addIfcErrorsDeprecated(cloudPk, id, projectPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **String**|  | 
 **data** | [**ModelErrors**](ModelErrors.md)|  | 

### Return type

[**ModelErrors**](ModelErrors.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## bulkDeleteIfcClassificationsDeprecated

> bulkDeleteIfcClassificationsDeprecated(cloudPk, ifcPk, projectPk)

Remove all classifications from model&#39;s elements

             Delete relation between filtered classifications (eg. /classifications?name&#x3D;untec) and all mode&#39;s elements.             No classification will be deleted on this endpoint, only the relation between model&#39;s elements and their classification.  Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.bulkDeleteIfcClassificationsDeprecated(cloudPk, ifcPk, projectPk).then(() => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## bulkDeleteIfcPropertiesDeprecated

> bulkDeleteIfcPropertiesDeprecated(cloudPk, ifcPk, projectPk, data)

Delete many Property of a model

         Bulk delete.         You must send a list of ids in the body.         These ids (or relations with these ids in case of many-to-many relation deletion) will be deleted  Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = [null]; // [Number] | 
apiInstance.bulkDeleteIfcPropertiesDeprecated(cloudPk, ifcPk, projectPk, data).then(() => {
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
 **data** | [**[Number]**](Number.md)|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## bulkDeleteIfcPropertyDefinitionsDeprecated

> bulkDeleteIfcPropertyDefinitionsDeprecated(cloudPk, ifcPk, projectPk, data)

Delete many PropertyDefinitions of a model

         Bulk delete.         You must send a list of ids in the body.         These ids (or relations with these ids in case of many-to-many relation deletion) will be deleted  Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = [null]; // [Number] | 
apiInstance.bulkDeleteIfcPropertyDefinitionsDeprecated(cloudPk, ifcPk, projectPk, data).then(() => {
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
 **data** | [**[Number]**](Number.md)|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## bulkDeleteIfcUnitsDeprecated

> bulkDeleteIfcUnitsDeprecated(cloudPk, ifcPk, projectPk, data)

Delete many Units of a model

         Bulk delete.         You must send a list of ids in the body.         These ids (or relations with these ids in case of many-to-many relation deletion) will be deleted  Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = [null]; // [Number] | 
apiInstance.bulkDeleteIfcUnitsDeprecated(cloudPk, ifcPk, projectPk, data).then(() => {
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
 **data** | [**[Number]**](Number.md)|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## bulkDeletePropertySetDeprecated

> bulkDeletePropertySetDeprecated(cloudPk, ifcPk, projectPk, data)

Delete many PropertySet of a model

         Bulk delete.         You must send a list of ids in the body.         These ids (or relations with these ids in case of many-to-many relation deletion) will be deleted  Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = [null]; // [Number] | 
apiInstance.bulkDeletePropertySetDeprecated(cloudPk, ifcPk, projectPk, data).then(() => {
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
 **data** | [**[Number]**](Number.md)|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## bulkFullUpdateElementsDeprecated

> [Element] bulkFullUpdateElementsDeprecated(cloudPk, ifcPk, projectPk, data)

Update many elements at once (only changing fields may be defined)

         Bulk update.         Similar to update, but the body should be a list of objects to patch or put         The response will be a list (in the same order) of updated objects or of errors if any         If at least one update succeeded, the status code will be 200. If every update failed, the status code we&#39;ll be 400 with the list of errors  Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = [new bimdata.Element()]; // [Element] | 
apiInstance.bulkFullUpdateElementsDeprecated(cloudPk, ifcPk, projectPk, data).then((data) => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## bulkFullUpdateIfcPropertyDeprecated

> [Property] bulkFullUpdateIfcPropertyDeprecated(cloudPk, ifcPk, projectPk, data)

Update some fields of many properties of a model

         Bulk update.         Similar to update, but the body should be a list of objects to patch or put         The response will be a list (in the same order) of updated objects or of errors if any         If at least one update succeeded, the status code will be 200. If every update failed, the status code we&#39;ll be 400 with the list of errors  Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = [new bimdata.Property()]; // [Property] | 
apiInstance.bulkFullUpdateIfcPropertyDeprecated(cloudPk, ifcPk, projectPk, data).then((data) => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## bulkRemoveClassificationsOfElementDeprecated

> bulkRemoveClassificationsOfElementDeprecated(cloudPk, elementUuid, ifcPk, projectPk, data)

Remove many classifications from an element

         Bulk delete.         You must send a list of ids in the body.         These ids (or relations with these ids in case of many-to-many relation deletion) will be deleted  Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let elementUuid = "elementUuid_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = [null]; // [Number] | 
apiInstance.bulkRemoveClassificationsOfElementDeprecated(cloudPk, elementUuid, ifcPk, projectPk, data).then(() => {
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
 **data** | [**[Number]**](Number.md)|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## bulkRemoveDocumentsOfElementDeprecated

> bulkRemoveDocumentsOfElementDeprecated(cloudPk, elementUuid, ifcPk, projectPk, data)

Remove many documents from an element

         Bulk delete.         You must send a list of ids in the body.         These ids (or relations with these ids in case of many-to-many relation deletion) will be deleted  Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let elementUuid = "elementUuid_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = [null]; // [Number] | 
apiInstance.bulkRemoveDocumentsOfElementDeprecated(cloudPk, elementUuid, ifcPk, projectPk, data).then(() => {
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
 **data** | [**[Number]**](Number.md)|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## bulkRemoveElementsFromClassificationDeprecated

> bulkRemoveElementsFromClassificationDeprecated(cloudPk, ifcPk, modelClassificationPk, projectPk, data)

Remove the classifications from all elements

         Bulk delete.         You must send a list of ids in the body.         These ids (or relations with these ids in case of many-to-many relation deletion) will be deleted  Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let modelClassificationPk = "modelClassificationPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = [null]; // [Number] | 
apiInstance.bulkRemoveElementsFromClassificationDeprecated(cloudPk, ifcPk, modelClassificationPk, projectPk, data).then(() => {
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
 **modelClassificationPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **data** | [**[Number]**](Number.md)|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## bulkUpdateElementsDeprecated

> [Element] bulkUpdateElementsDeprecated(cloudPk, ifcPk, projectPk, data)

Update many elements at once (all field must be defined)

         Bulk update.         Similar to update, but the body should be a list of objects to patch or put         The response will be a list (in the same order) of updated objects or of errors if any         If at least one update succeeded, the status code will be 200. If every update failed, the status code we&#39;ll be 400 with the list of errors  Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = [new bimdata.Element()]; // [Element] | 
apiInstance.bulkUpdateElementsDeprecated(cloudPk, ifcPk, projectPk, data).then((data) => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## bulkUpdateIfcPropertyDeprecated

> [Property] bulkUpdateIfcPropertyDeprecated(cloudPk, ifcPk, projectPk, data)

Update all fields of many properties of a model

 Bulk update. Similar to update, but the body should be a list of objects to patch or put The response will be a list (in the same order) of updated objects or of errors if any If at least one update succeeded, the status code will be 200. If every update failed, the status code we&#39;ll be 400 with the list of errors 

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = [new bimdata.Property()]; // [Property] | 
apiInstance.bulkUpdateIfcPropertyDeprecated(cloudPk, ifcPk, projectPk, data).then((data) => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createAccessTokenDeprecated

> IfcAccessToken createAccessTokenDeprecated(cloudPk, ifcPk, projectPk, data)

Create a token for this model

Tokens are read_only by default and are valid 1 day Required scopes: ifc:token_manage, model:token_manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.IfcAccessToken(); // IfcAccessToken | 
apiInstance.createAccessTokenDeprecated(cloudPk, ifcPk, projectPk, data).then((data) => {
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
 **data** | [**IfcAccessToken**](IfcAccessToken.md)|  | 

### Return type

[**IfcAccessToken**](IfcAccessToken.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createCheckerDeprecated

> IfcChecker createCheckerDeprecated(cloudPk, ifcPk, projectPk, data)

Create a checker to a model

A checker is a link between a checkplan and a model. A checker can launch a check multiple time and store all the results Required scopes: check:write, ifc:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.IfcChecker(); // IfcChecker | 
apiInstance.createCheckerDeprecated(cloudPk, ifcPk, projectPk, data).then((data) => {
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
 **data** | [**IfcChecker**](IfcChecker.md)|  | 

### Return type

[**IfcChecker**](IfcChecker.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createCheckerResultDeprecated

> CheckerResult createCheckerResultDeprecated(checkerPk, cloudPk, ifcPk, projectPk, data)

Create a CheckerResult

TCreate a CheckerResult Required scopes: check:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let checkerPk = "checkerPk_example"; // String | 
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.CheckerResult(); // CheckerResult | 
apiInstance.createCheckerResultDeprecated(checkerPk, cloudPk, ifcPk, projectPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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
 **data** | [**CheckerResult**](CheckerResult.md)|  | 

### Return type

[**CheckerResult**](CheckerResult.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createClassificationElementRelationsDeprecated

> createClassificationElementRelationsDeprecated(cloudPk, ifcPk, projectPk, data)

Create association between existing classification and existing element

Create association between existing classification and existing element Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = [new bimdata.ElementClassificationRelation()]; // [ElementClassificationRelation] | 
apiInstance.createClassificationElementRelationsDeprecated(cloudPk, ifcPk, projectPk, data).then(() => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## createClassificationsOfElementDeprecated

> [Classification] createClassificationsOfElementDeprecated(cloudPk, elementUuid, ifcPk, projectPk, data)

Create one or many classifications to an element

         Bulk create available.         You can either post an object or a list of objects.         Is you post a list, the response will be a list (in the same order) of created objects or of errors if any         If at least one create succeeded, the status code will be 201. If every create failed, the status code we&#39;ll be 400 with the list of errors      If classification created already exists, it will just be added to item&#39;s classifications and will not be duplicated  Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let elementUuid = "elementUuid_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = [new bimdata.Classification()]; // [Classification] | 
apiInstance.createClassificationsOfElementDeprecated(cloudPk, elementUuid, ifcPk, projectPk, data).then((data) => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createElementDeprecated

> [Element] createElementDeprecated(cloudPk, ifcPk, projectPk, data)

Create an element in the model

         Bulk create available.         You can either post an object or a list of objects.         Is you post a list, the response will be a list (in the same order) of created objects or of errors if any         If at least one create succeeded, the status code will be 201. If every create failed, the status code we&#39;ll be 400 with the list of errors  Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = [new bimdata.Element()]; // [Element] | 
apiInstance.createElementDeprecated(cloudPk, ifcPk, projectPk, data).then((data) => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createElementPropertySetDeprecated

> PropertySet createElementPropertySetDeprecated(cloudPk, elementUuid, ifcPk, projectPk, data)

Create a PropertySets to an element

Create a PropertySets that will be automatically linked to the element Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let elementUuid = "elementUuid_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.PropertySet(); // PropertySet | 
apiInstance.createElementPropertySetDeprecated(cloudPk, elementUuid, ifcPk, projectPk, data).then((data) => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createElementPropertySetPropertyDefinitionDeprecated

> PropertyDefinition createElementPropertySetPropertyDefinitionDeprecated(cloudPk, elementUuid, ifcPk, projectPk, propertyPk, propertysetPk, data)

Create a Definition to a Property

 Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
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
apiInstance.createElementPropertySetPropertyDefinitionDeprecated(cloudPk, elementUuid, ifcPk, projectPk, propertyPk, propertysetPk, data).then((data) => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createElementPropertySetPropertyDefinitionUnitDeprecated

> Unit createElementPropertySetPropertyDefinitionUnitDeprecated(cloudPk, elementUuid, ifcPk, projectPk, propertyPk, propertydefinitionPk, propertysetPk, data)

Create a Unit to a Definition

Create a Unit to a Definition Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
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
apiInstance.createElementPropertySetPropertyDefinitionUnitDeprecated(cloudPk, elementUuid, ifcPk, projectPk, propertyPk, propertydefinitionPk, propertysetPk, data).then((data) => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createElementPropertySetPropertyDeprecated

> Property createElementPropertySetPropertyDeprecated(cloudPk, elementUuid, ifcPk, projectPk, propertysetPk, data)

Create a property to a PropertySet

 Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
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
apiInstance.createElementPropertySetPropertyDeprecated(cloudPk, elementUuid, ifcPk, projectPk, propertysetPk, data).then((data) => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createIfcDeprecated

> Model createIfcDeprecated(cloudPk, projectPk, data)

Make a PDF or Image file a Model

Make a PDF or Image file a Model to be used in BIMData services. If a model already exists, this route does nothing and returns a 201 with the model Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.CreateModel(); // CreateModel | 
apiInstance.createIfcDeprecated(cloudPk, projectPk, data).then((data) => {
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
 **data** | [**CreateModel**](CreateModel.md)|  | 

### Return type

[**Model**](Model.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createIfcPropertyDefinitionDeprecated

> [PropertyDefinition] createIfcPropertyDefinitionDeprecated(cloudPk, ifcPk, projectPk, data)

Create a PropertyDefinition on the model

         Bulk create available.         You can either post an object or a list of objects.         Is you post a list, the response will be a list (in the same order) of created objects or of errors if any         If at least one create succeeded, the status code will be 201. If every create failed, the status code we&#39;ll be 400 with the list of errors  Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = [new bimdata.PropertyDefinition()]; // [PropertyDefinition] | 
apiInstance.createIfcPropertyDefinitionDeprecated(cloudPk, ifcPk, projectPk, data).then((data) => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createIfcUnitDeprecated

> [Unit] createIfcUnitDeprecated(cloudPk, ifcPk, projectPk, data)

Create a Unit on a model

         Bulk create available.         You can either post an object or a list of objects.         Is you post a list, the response will be a list (in the same order) of created objects or of errors if any         If at least one create succeeded, the status code will be 201. If every create failed, the status code we&#39;ll be 400 with the list of errors  Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = [new bimdata.Unit()]; // [Unit] | 
apiInstance.createIfcUnitDeprecated(cloudPk, ifcPk, projectPk, data).then((data) => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createLayerDeprecated

> Layer createLayerDeprecated(cloudPk, ifcPk, projectPk, data)

Create a layer in the model

The IFC file will not be updated. The created layer will be accessible over the API and when exporting an IFC file Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.Layer(); // Layer | 
apiInstance.createLayerDeprecated(cloudPk, ifcPk, projectPk, data).then((data) => {
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
 **data** | [**Layer**](Layer.md)|  | 

### Return type

[**Layer**](Layer.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createMetaBuildingDeprecated

> Model createMetaBuildingDeprecated(cloudPk, projectPk, data)

Create an empty 3D Model

Create an empty 3D Model to be used in BIMData services Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.CreateBuilding(); // CreateBuilding | 
apiInstance.createMetaBuildingDeprecated(cloudPk, projectPk, data).then((data) => {
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
 **data** | [**CreateBuilding**](CreateBuilding.md)|  | 

### Return type

[**Model**](Model.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createPropertySetDeprecated

> [PropertySet] createPropertySetDeprecated(cloudPk, ifcPk, projectPk, data)

Create a PropertySet

         Bulk create available.         You can either post an object or a list of objects.         Is you post a list, the response will be a list (in the same order) of created objects or of errors if any         If at least one create succeeded, the status code will be 201. If every create failed, the status code we&#39;ll be 400 with the list of errors  Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = [new bimdata.PropertySet()]; // [PropertySet] | 
apiInstance.createPropertySetDeprecated(cloudPk, ifcPk, projectPk, data).then((data) => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createPropertySetElementRelationsDeprecated

> createPropertySetElementRelationsDeprecated(cloudPk, ifcPk, projectPk, data)

Create association between PropertySet and element

Create association between existing PropertySet and existing element Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = [new bimdata.ElementPropertySetRelation()]; // [ElementPropertySetRelation] | 
apiInstance.createPropertySetElementRelationsDeprecated(cloudPk, ifcPk, projectPk, data).then(() => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## createRawElementsDeprecated

> createRawElementsDeprecated(cloudPk, ifcPk, projectPk, data)

Create elements in an optimized format

         You can use the same optimized structure to post multiple elements, property_sets, properties, definitions and units at once.         For performance reasons, we do not check the validity of the json. If the json is malformed, an error 500 without more explaination may be returned instead of a 400.  Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.RawElements(); // RawElements | 
apiInstance.createRawElementsDeprecated(cloudPk, ifcPk, projectPk, data).then(() => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## createSpaceDeprecated

> [Space] createSpaceDeprecated(cloudPk, ifcPk, projectPk, data)

Create a space in the model

         Bulk create available.         You can either post an object or a list of objects.         Is you post a list, the response will be a list (in the same order) of created objects or of errors if any         If at least one create succeeded, the status code will be 201. If every create failed, the status code we&#39;ll be 400 with the list of errors  Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = [new bimdata.Space()]; // [Space] | 
apiInstance.createSpaceDeprecated(cloudPk, ifcPk, projectPk, data).then((data) => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createStoreyPlanDeprecated

> Storey createStoreyPlanDeprecated(cloudPk, ifcPk, projectPk, storeyPk, data)

Create a relation between a 2d model and a storey

Create a relation between a 2d model and a storey. The model type must be one of : (&#39;DWG&#39;, &#39;DXF&#39;, &#39;PDF&#39;, &#39;JPEG&#39;, &#39;PNG&#39;) Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let storeyPk = "storeyPk_example"; // String | 
let data = new bimdata.InlineObject4(); // InlineObject4 | 
apiInstance.createStoreyPlanDeprecated(cloudPk, ifcPk, projectPk, storeyPk, data).then((data) => {
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
 **storeyPk** | **String**|  | 
 **data** | [**InlineObject4**](InlineObject4.md)|  | 

### Return type

[**Storey**](Storey.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createSystemDeprecated

> System createSystemDeprecated(cloudPk, ifcPk, projectPk, data)

Create a system in the model

The IFC file will not be updated. The created system will be accessible over the API and when exporting an IFC file Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.System(); // System | 
apiInstance.createSystemDeprecated(cloudPk, ifcPk, projectPk, data).then((data) => {
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
 **data** | [**System**](System.md)|  | 

### Return type

[**System**](System.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createZoneDeprecated

> [Zone] createZoneDeprecated(cloudPk, ifcPk, projectPk, data)

Create a zone in the model

         Bulk create available.         You can either post an object or a list of objects.         Is you post a list, the response will be a list (in the same order) of created objects or of errors if any         If at least one create succeeded, the status code will be 201. If every create failed, the status code we&#39;ll be 400 with the list of errors  The IFC file will not be updated. The created zone will be accessible over the API and when exporting an IFC file Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = [new bimdata.Zone()]; // [Zone] | 
apiInstance.createZoneDeprecated(cloudPk, ifcPk, projectPk, data).then((data) => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createZoneSpaceDeprecated

> ZoneSpace createZoneSpaceDeprecated(cloudPk, ifcPk, projectPk, zonePk, data)

Create a space in a zone

The IFC file will not be updated. The created space will be accessible over the API and when exporting an IFC file Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let zonePk = "zonePk_example"; // String | 
let data = new bimdata.ZoneSpace(); // ZoneSpace | 
apiInstance.createZoneSpaceDeprecated(cloudPk, ifcPk, projectPk, zonePk, data).then((data) => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteAccessTokenDeprecated

> deleteAccessTokenDeprecated(cloudPk, ifcPk, projectPk, token)

Delete a token

Deleting a token will revoke it. Required scopes: ifc:token_manage, model:token_manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let token = "token_example"; // String | 
apiInstance.deleteAccessTokenDeprecated(cloudPk, ifcPk, projectPk, token).then(() => {
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
 **token** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteCheckerDeprecated

> deleteCheckerDeprecated(cloudPk, id, ifcPk, projectPk)

Delete a checker of a model

A checker is a link between a checkplan and a model. A checker can launch a check multiple time and store all the results Required scopes: check:write, ifc:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this ifc checker.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.deleteCheckerDeprecated(cloudPk, id, ifcPk, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteCheckerResultDeprecated

> deleteCheckerResultDeprecated(checkerPk, cloudPk, id, ifcPk, projectPk)

Delete a CheckerResult

Delete a CheckerResult Required scopes: check:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let checkerPk = "checkerPk_example"; // String | 
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this checker result.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.deleteCheckerResultDeprecated(checkerPk, cloudPk, id, ifcPk, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteElementDeprecated

> deleteElementDeprecated(cloudPk, ifcPk, projectPk, uuid)

Delete an element of a model

The IFC file will not be updated. The remaining elements are available in API and will be available when exporting an IFC file Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let uuid = "uuid_example"; // String | IFC element or element type UUID
apiInstance.deleteElementDeprecated(cloudPk, ifcPk, projectPk, uuid).then(() => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteIfcDeprecated

> deleteIfcDeprecated(cloudPk, id, projectPk)

Delete a model

It will also delete the related document Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this model.
let projectPk = "projectPk_example"; // String | 
apiInstance.deleteIfcDeprecated(cloudPk, id, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteIfcPropertyDefinitionDeprecated

> deleteIfcPropertyDefinitionDeprecated(cloudPk, id, ifcPk, projectPk)

Delete a PropertyDefinitions of a model

Delete a PropertyDefinitions of a model Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this property definition.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.deleteIfcPropertyDefinitionDeprecated(cloudPk, id, ifcPk, projectPk).then(() => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteIfcPropertyDeprecated

> deleteIfcPropertyDeprecated(cloudPk, id, ifcPk, projectPk)

Delete a Property of a model

Delete a Property of a model Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this property.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.deleteIfcPropertyDeprecated(cloudPk, id, ifcPk, projectPk).then(() => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteIfcUnitDeprecated

> deleteIfcUnitDeprecated(cloudPk, id, ifcPk, projectPk)

Delete a Unit of a model

Delete a Unit of a model Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this unit.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.deleteIfcUnitDeprecated(cloudPk, id, ifcPk, projectPk).then(() => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteIfcWithoutDocDeprecated

> deleteIfcWithoutDocDeprecated(cloudPk, id, projectPk)

Delete the Model without deleting the related document

Delete the Model without deleting the related document Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this model.
let projectPk = "projectPk_example"; // String | 
apiInstance.deleteIfcWithoutDocDeprecated(cloudPk, id, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteLayerDeprecated

> deleteLayerDeprecated(cloudPk, id, ifcPk, projectPk)

Delete a layer of a model

The IFC file will not be updated. The remaining layers are available in API and will be available when exporting an IFC file Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this layer.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.deleteLayerDeprecated(cloudPk, id, ifcPk, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this layer. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deletePropertySetDeprecated

> deletePropertySetDeprecated(cloudPk, id, ifcPk, projectPk)

Delete a PropertySet of a model

Delete a PropertySet of a model Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this property set.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.deletePropertySetDeprecated(cloudPk, id, ifcPk, projectPk).then(() => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteSpaceDeprecated

> deleteSpaceDeprecated(cloudPk, id, ifcPk, projectPk)

Delete a space

It will not delete related zones. The IFC file will not be updated. The remaining spaces are available in API and will be available when exporting an IFC file Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this space.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.deleteSpaceDeprecated(cloudPk, id, ifcPk, projectPk).then(() => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteStoreyDeprecated

> deleteStoreyDeprecated(cloudPk, id, ifcPk, projectPk)

Delete a storey of a model

Delete a storey of a model Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this storey.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.deleteStoreyDeprecated(cloudPk, id, ifcPk, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this storey. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteStoreyPlanDeprecated

> deleteStoreyPlanDeprecated(cloudPk, id, ifcPk, projectPk, storeyPk)

Delete the relation between a 2d model and a storey

Delete the relation between a 2d model and a storey Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this storey.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let storeyPk = "storeyPk_example"; // String | 
apiInstance.deleteStoreyPlanDeprecated(cloudPk, id, ifcPk, projectPk, storeyPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this storey. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **storeyPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteSystemDeprecated

> deleteSystemDeprecated(cloudPk, ifcPk, projectPk, uuid)

Delete a system of a model

The IFC file will not be updated. The remaining systems are available in API and will be available when exporting an IFC file Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let uuid = "uuid_example"; // String | IFC sytem or system type UUID
apiInstance.deleteSystemDeprecated(cloudPk, ifcPk, projectPk, uuid).then(() => {
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
 **uuid** | **String**| IFC sytem or system type UUID | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteZoneDeprecated

> deleteZoneDeprecated(cloudPk, id, ifcPk, projectPk)

Delete a zone of a model

The IFC file will not be updated. The remaining zones are available in API and will be available when exporting an IFC file Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this zone.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.deleteZoneDeprecated(cloudPk, id, ifcPk, projectPk).then(() => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteZoneSpaceDeprecated

> deleteZoneSpaceDeprecated(cloudPk, id, ifcPk, projectPk, zonePk)

Delete a space of a zone

The IFC file will not be updated. The remaining spaces are available in API and will be available when exporting an IFC file Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this space.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let zonePk = "zonePk_example"; // String | 
apiInstance.deleteZoneSpaceDeprecated(cloudPk, id, ifcPk, projectPk, zonePk).then(() => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## exportIfcDeprecated

> IfcExport exportIfcDeprecated(cloudPk, id, projectPk, data)

Export IFC

Only works for IFC files. Export IFC as requested in parameters. When the export is finished, a new IFC file with will be created in the same folder than the original IFC. You can query the folder or subscribe to the new document webhook to retrieve the result Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this model.
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.IfcExport(); // IfcExport | 
apiInstance.exportIfcDeprecated(cloudPk, id, projectPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **String**|  | 
 **data** | [**IfcExport**](IfcExport.md)|  | 

### Return type

[**IfcExport**](IfcExport.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## fullUpdateElementDeprecated

> Element fullUpdateElementDeprecated(cloudPk, ifcPk, projectPk, uuid, data)

Update all fields of an element

Update all fields of an element. The IFC file will not be updated. The created element will be accessible over the API and when exporting an IFC file Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let uuid = "uuid_example"; // String | IFC element or element type UUID
let data = new bimdata.Element(); // Element | 
apiInstance.fullUpdateElementDeprecated(cloudPk, ifcPk, projectPk, uuid, data).then((data) => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## fullUpdateStoreysDeprecated

> [Storey] fullUpdateStoreysDeprecated(cloudPk, ifcPk, projectPk, data)

Update all fields of all storeys

         This route allows you to create storeys, modify them, delete them and organize them by order.         If the optional field \&quot;id\&quot; is present, the storey will be modified. Otherwise, a new storey will be created.         If an \&quot;id\&quot; present in the api is not present in the list passed in parameter, the corresponding storey will be deleted.         A storey with \&quot;is_site&#x3D;True\&quot; will be stored without order. There can be only one storey with \&quot;is_site&#x3D;True\&quot;\&quot;  Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = [new bimdata.StoreyRequest()]; // [StoreyRequest] | 
apiInstance.fullUpdateStoreysDeprecated(cloudPk, ifcPk, projectPk, data).then((data) => {
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
 **data** | [**[StoreyRequest]**](StoreyRequest.md)|  | 

### Return type

[**[Storey]**](Storey.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getAccessTokenDeprecated

> IfcAccessToken getAccessTokenDeprecated(cloudPk, ifcPk, projectPk, token)

Retrieve one token created for this model

Retrieve one token created for this model Required scopes: ifc:token_manage, model:token_manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let token = "token_example"; // String | 
apiInstance.getAccessTokenDeprecated(cloudPk, ifcPk, projectPk, token).then((data) => {
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
 **token** | **String**|  | 

### Return type

[**IfcAccessToken**](IfcAccessToken.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAccessTokensDeprecated

> [IfcAccessToken] getAccessTokensDeprecated(cloudPk, ifcPk, projectPk)

Retrieve all tokens created for this model

Retrieve all tokens created for this model Required scopes: ifc:token_manage, model:token_manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.getAccessTokensDeprecated(cloudPk, ifcPk, projectPk).then((data) => {
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

[**[IfcAccessToken]**](IfcAccessToken.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCheckerDeprecated

> IfcChecker getCheckerDeprecated(cloudPk, id, ifcPk, projectPk)

Retrieve a checker of a model

A checker is a link between a checkplan and a model. A checker can launch a check multiple time and store all the results Required scopes: check:read, ifc:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this ifc checker.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.getCheckerDeprecated(cloudPk, id, ifcPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCheckerResultDeprecated

> CheckerResult getCheckerResultDeprecated(checkerPk, cloudPk, id, ifcPk, projectPk)

Retrieve one CheckerResult

Retrieve one CheckerResult Required scopes: check:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let checkerPk = "checkerPk_example"; // String | 
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this checker result.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.getCheckerResultDeprecated(checkerPk, cloudPk, id, ifcPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCheckerResultsDeprecated

> [CheckerResult] getCheckerResultsDeprecated(checkerPk, cloudPk, ifcPk, projectPk)

Retrieve all CheckerResults

Retrieve all CheckerResults Required scopes: check:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let checkerPk = "checkerPk_example"; // String | 
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.getCheckerResultsDeprecated(checkerPk, cloudPk, ifcPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCheckersDeprecated

> [IfcChecker] getCheckersDeprecated(cloudPk, ifcPk, projectPk)

Retrieve all checkers of a model

A checker is a link between a checkplan and a model. A checker can launch a check multiple time and store all the results Required scopes: check:read, ifc:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.getCheckersDeprecated(cloudPk, ifcPk, projectPk).then((data) => {
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

[**[IfcChecker]**](IfcChecker.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getClassificationsOfElementDeprecated

> [Classification] getClassificationsOfElementDeprecated(cloudPk, elementUuid, ifcPk, projectPk)

Retrieve all classifications of an element

Retrieve all classifications of an element Required scopes: ifc:read, model:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let elementUuid = "elementUuid_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.getClassificationsOfElementDeprecated(cloudPk, elementUuid, ifcPk, projectPk).then((data) => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDocumentsOfElementDeprecated

> [Document] getDocumentsOfElementDeprecated(cloudPk, elementUuid, ifcPk, projectPk)

Retrieve all documents of an element

Retrieve all documents of an element Required scopes: ifc:read, model:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let elementUuid = "elementUuid_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.getDocumentsOfElementDeprecated(cloudPk, elementUuid, ifcPk, projectPk).then((data) => {
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

[**[Document]**](Document.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getElementDeprecated

> Element getElementDeprecated(cloudPk, ifcPk, projectPk, uuid)

Retrieve an element of a model

Retrieve an element of a model Required scopes: ifc:read, model:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let uuid = "uuid_example"; // String | IFC element or element type UUID
apiInstance.getElementDeprecated(cloudPk, ifcPk, projectPk, uuid).then((data) => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getElementLinkedDocumentsDeprecated

> [DocumentWithElementList] getElementLinkedDocumentsDeprecated(cloudPk, ifcPk, projectPk, opts)

Retrieve all documents linked to any element

Retrieve all documents linked to any element with the list of uuids Required scopes: ifc:read, model:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
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
apiInstance.getElementLinkedDocumentsDeprecated(cloudPk, ifcPk, projectPk, opts).then((data) => {
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

[**[DocumentWithElementList]**](DocumentWithElementList.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getElementPropertySetDeprecated

> PropertySet getElementPropertySetDeprecated(cloudPk, elementUuid, id, ifcPk, projectPk)

Retrieve a PropertySet of an element

Retrieve a PropertySet of an element Required scopes: ifc:read, model:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let elementUuid = "elementUuid_example"; // String | 
let id = 56; // Number | A unique integer value identifying this property set.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.getElementPropertySetDeprecated(cloudPk, elementUuid, id, ifcPk, projectPk).then((data) => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getElementPropertySetPropertiesDeprecated

> [Property] getElementPropertySetPropertiesDeprecated(cloudPk, elementUuid, ifcPk, projectPk, propertysetPk)

Retrieve all Properties of a PropertySet

Retrieve all Properties of a PropertySet Required scopes: ifc:read, model:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let elementUuid = "elementUuid_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let propertysetPk = "propertysetPk_example"; // String | 
apiInstance.getElementPropertySetPropertiesDeprecated(cloudPk, elementUuid, ifcPk, projectPk, propertysetPk).then((data) => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getElementPropertySetPropertyDefinitionDeprecated

> PropertyDefinition getElementPropertySetPropertyDefinitionDeprecated(cloudPk, elementUuid, id, ifcPk, projectPk, propertyPk, propertysetPk)

Retrieve a Definition of a Property

Retrieve a Definition of a Property Required scopes: ifc:read, model:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
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
apiInstance.getElementPropertySetPropertyDefinitionDeprecated(cloudPk, elementUuid, id, ifcPk, projectPk, propertyPk, propertysetPk).then((data) => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getElementPropertySetPropertyDefinitionUnitDeprecated

> Unit getElementPropertySetPropertyDefinitionUnitDeprecated(cloudPk, elementUuid, id, ifcPk, projectPk, propertyPk, propertydefinitionPk, propertysetPk)

Retrieve a Unit of a Definition

Retrieve a Unit of a Definition Required scopes: ifc:read, model:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
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
apiInstance.getElementPropertySetPropertyDefinitionUnitDeprecated(cloudPk, elementUuid, id, ifcPk, projectPk, propertyPk, propertydefinitionPk, propertysetPk).then((data) => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getElementPropertySetPropertyDefinitionUnitsDeprecated

> [Unit] getElementPropertySetPropertyDefinitionUnitsDeprecated(cloudPk, elementUuid, ifcPk, projectPk, propertyPk, propertydefinitionPk, propertysetPk)

Retrieve all Units of a Definition

Retrieve all Units of a Definition Required scopes: ifc:read, model:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
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
apiInstance.getElementPropertySetPropertyDefinitionUnitsDeprecated(cloudPk, elementUuid, ifcPk, projectPk, propertyPk, propertydefinitionPk, propertysetPk).then((data) => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getElementPropertySetPropertyDefinitionsDeprecated

> [PropertyDefinition] getElementPropertySetPropertyDefinitionsDeprecated(cloudPk, elementUuid, ifcPk, projectPk, propertyPk, propertysetPk)

Retrieve all Definitions of a PropertySet

Retrieve all Definitions of a PropertySet Required scopes: ifc:read, model:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
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
apiInstance.getElementPropertySetPropertyDefinitionsDeprecated(cloudPk, elementUuid, ifcPk, projectPk, propertyPk, propertysetPk).then((data) => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getElementPropertySetPropertyDeprecated

> Property getElementPropertySetPropertyDeprecated(cloudPk, elementUuid, id, ifcPk, projectPk, propertysetPk)

Retrieve a Property of a PropertySet

Retrieve a Property of a PropertySet Required scopes: ifc:read, model:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
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
apiInstance.getElementPropertySetPropertyDeprecated(cloudPk, elementUuid, id, ifcPk, projectPk, propertysetPk).then((data) => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getElementPropertySetsDeprecated

> [PropertySet] getElementPropertySetsDeprecated(cloudPk, elementUuid, ifcPk, projectPk)

Retrieve all PropertySets of an element

Retrieve all PropertySets of an element Required scopes: ifc:read, model:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let elementUuid = "elementUuid_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.getElementPropertySetsDeprecated(cloudPk, elementUuid, ifcPk, projectPk).then((data) => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getElementsDeprecated

> [Element] getElementsDeprecated(cloudPk, ifcPk, projectPk, opts)

Retrieve all elements of a model

Retrieve all elements of a model. If not filtered, the json may be very large. To efficently retrieve all elements and their data, see getRawElements Required scopes: ifc:read, model:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
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
apiInstance.getElementsDeprecated(cloudPk, ifcPk, projectPk, opts).then((data) => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getElementsFromClassificationDeprecated

> [Element] getElementsFromClassificationDeprecated(cloudPk, ifcPk, modelClassificationPk, projectPk)

Retrieve all elements with the classification

Retrieve all elements with the classification Required scopes: ifc:read, model:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let modelClassificationPk = "modelClassificationPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.getElementsFromClassificationDeprecated(cloudPk, ifcPk, modelClassificationPk, projectPk).then((data) => {
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
 **modelClassificationPk** | **String**|  | 
 **projectPk** | **String**|  | 

### Return type

[**[Element]**](Element.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getIfcClassificationsDeprecated

> [Classification] getIfcClassificationsDeprecated(cloudPk, ifcPk, projectPk)

Retrieve all classifications in a model

Retrieve all classifications in a model Required scopes: ifc:read, model:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.getIfcClassificationsDeprecated(cloudPk, ifcPk, projectPk).then((data) => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getIfcDeprecated

> Model getIfcDeprecated(cloudPk, id, projectPk)

Retrieve one model

 Required scopes: ifc:read, model:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this model.
let projectPk = "projectPk_example"; // String | 
apiInstance.getIfcDeprecated(cloudPk, id, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **String**|  | 

### Return type

[**Model**](Model.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getIfcMaterialDeprecated

> Material getIfcMaterialDeprecated(cloudPk, id, ifcPk, projectPk)

Retrieve a material of a model

Retrieve a material of a model Required scopes: ifc:read, model:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this material.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.getIfcMaterialDeprecated(cloudPk, id, ifcPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this material. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 

### Return type

[**Material**](Material.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getIfcMaterialsDeprecated

> [Material] getIfcMaterialsDeprecated(cloudPk, ifcPk, projectPk)

Retrieve all materials of a model

Retrieve all materials of a model. Required scopes: ifc:read, model:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.getIfcMaterialsDeprecated(cloudPk, ifcPk, projectPk).then((data) => {
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

[**[Material]**](Material.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getIfcPropertiesDeprecated

> [Property] getIfcPropertiesDeprecated(cloudPk, ifcPk, projectPk)

Retrieve all Properties of a model

Retrieve all PropertySets of a model Required scopes: ifc:read, model:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.getIfcPropertiesDeprecated(cloudPk, ifcPk, projectPk).then((data) => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getIfcPropertyDefinitionDeprecated

> PropertyDefinition getIfcPropertyDefinitionDeprecated(cloudPk, id, ifcPk, projectPk)

Retrieve a PropertyDefinition of a model

Retrieve a PropertyDefinition of a model Required scopes: ifc:read, model:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this property definition.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.getIfcPropertyDefinitionDeprecated(cloudPk, id, ifcPk, projectPk).then((data) => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getIfcPropertyDefinitionsDeprecated

> [PropertyDefinition] getIfcPropertyDefinitionsDeprecated(cloudPk, ifcPk, projectPk)

Retrieve all PropertyDefinitions of a model

Retrieve all PropertyDefinitions of a model Required scopes: ifc:read, model:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.getIfcPropertyDefinitionsDeprecated(cloudPk, ifcPk, projectPk).then((data) => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getIfcPropertyDeprecated

> Property getIfcPropertyDeprecated(cloudPk, id, ifcPk, projectPk)

Retrieve a Property of a model

Retrieve a Property of a model Required scopes: ifc:read, model:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this property.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.getIfcPropertyDeprecated(cloudPk, id, ifcPk, projectPk).then((data) => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getIfcUnitDeprecated

> Unit getIfcUnitDeprecated(cloudPk, id, ifcPk, projectPk)

Retrieve a Unit of a model

Retrieve a Unit of a model Required scopes: ifc:read, model:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this unit.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.getIfcUnitDeprecated(cloudPk, id, ifcPk, projectPk).then((data) => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getIfcUnitsDeprecated

> [Unit] getIfcUnitsDeprecated(cloudPk, ifcPk, projectPk)

Retrieve all Units of a model

Retrieve all Units of a model Required scopes: ifc:read, model:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.getIfcUnitsDeprecated(cloudPk, ifcPk, projectPk).then((data) => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getIfcsDeprecated

> [Model] getIfcsDeprecated(cloudPk, projectPk, opts)

Retrieve all models

Retrieve all models. The field &#x60;type&#x60; allows you to discriminate which kind of model it is. Required scopes: ifc:read, model:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let opts = {
  'status': "status_example", // String | Filter the returned list by status
  'source': "source_example", // String | Filter the returned list by source
  'type': "type_example" // String | Filter the returned list by type
};
apiInstance.getIfcsDeprecated(cloudPk, projectPk, opts).then((data) => {
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
 **source** | **String**| Filter the returned list by source | [optional] 
 **type** | **String**| Filter the returned list by type | [optional] 

### Return type

[**[Model]**](Model.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLayerDeprecated

> Layer getLayerDeprecated(cloudPk, id, ifcPk, projectPk)

Retrieve a layer of a model

Retrieve a layer of a model Required scopes: ifc:read, model:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this layer.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.getLayerDeprecated(cloudPk, id, ifcPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this layer. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 

### Return type

[**Layer**](Layer.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLayersDeprecated

> [Layer] getLayersDeprecated(cloudPk, ifcPk, projectPk)

Retrieve all layers of a model

Retrieve all layers of a model. Required scopes: ifc:read, model:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.getLayersDeprecated(cloudPk, ifcPk, projectPk).then((data) => {
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

[**[Layer]**](Layer.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMaterialDeprecated

> Material getMaterialDeprecated(cloudPk, elementUuid, id, ifcPk, projectPk)

Retrieve a material of a model

Retrieve a material of a model Required scopes: ifc:read, model:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let elementUuid = "elementUuid_example"; // String | 
let id = 56; // Number | A unique integer value identifying this material.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.getMaterialDeprecated(cloudPk, elementUuid, id, ifcPk, projectPk).then((data) => {
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
 **id** | **Number**| A unique integer value identifying this material. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 

### Return type

[**Material**](Material.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMaterialsDeprecated

> [Material] getMaterialsDeprecated(cloudPk, elementUuid, ifcPk, projectPk)

Retrieve all materials of a model

Retrieve all materials of a model. Required scopes: ifc:read, model:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let elementUuid = "elementUuid_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.getMaterialsDeprecated(cloudPk, elementUuid, ifcPk, projectPk).then((data) => {
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

[**[Material]**](Material.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPlanPositioningDeprecated

> PositioningPlan getPlanPositioningDeprecated(cloudPk, id, ifcPk, projectPk, storeyPk)

Retrieve the postioning of the plan in the storey

Retrieve the postioning of the plan in the storey Required scopes: ifc:read, model:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this storey.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let storeyPk = "storeyPk_example"; // String | 
apiInstance.getPlanPositioningDeprecated(cloudPk, id, ifcPk, projectPk, storeyPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this storey. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **storeyPk** | **String**|  | 

### Return type

[**PositioningPlan**](PositioningPlan.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProcessorHandlerDeprecated

> ProcessorHandler getProcessorHandlerDeprecated(cloudPk, id, ifcPk, projectPk)

Retrieve a processor handler

 Required scopes: ifc:read, model:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this processor handler.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.getProcessorHandlerDeprecated(cloudPk, id, ifcPk, projectPk).then((data) => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProcessorHandlersDeprecated

> [ProcessorHandler] getProcessorHandlersDeprecated(cloudPk, ifcPk, projectPk)

Get all processor handlers

 Required scopes: ifc:read, model:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.getProcessorHandlersDeprecated(cloudPk, ifcPk, projectPk).then((data) => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPropertySetDeprecated

> PropertySet getPropertySetDeprecated(cloudPk, id, ifcPk, projectPk)

Retrieve a PropertySet of a model

Retrieve a PropertySet of a model Required scopes: ifc:read, model:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this property set.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.getPropertySetDeprecated(cloudPk, id, ifcPk, projectPk).then((data) => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPropertySetsDeprecated

> [PropertySet] getPropertySetsDeprecated(cloudPk, ifcPk, projectPk)

Retrieve all PropertySets of a model

Retrieve all PropertySets of a model Required scopes: ifc:read, model:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.getPropertySetsDeprecated(cloudPk, ifcPk, projectPk).then((data) => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRawElementsDeprecated

> RawElements getRawElementsDeprecated(cloudPk, ifcPk, projectPk, opts)

Retrieve all elements in a optimized format

         Returns elements, property_sets, properties, definitions and units in a JSON optimized structure  Required scopes: ifc:read, model:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
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
apiInstance.getRawElementsDeprecated(cloudPk, ifcPk, projectPk, opts).then((data) => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSimpleElementDeprecated

> SimpleElement getSimpleElementDeprecated(cloudPk, ifcPk, projectPk, uuid)

Retrieve an element of a model with a simple value representation

         Retrieve an element of a model with a simple value representation         Format response :             {                 :element_uuid: {                     \&quot;attributes\&quot;: {                         :property_name: value,                         :property_name: value                     },                     :property_set_name: {                         :property_name: value,                         :property_name: value                     }                 }             }  Required scopes: ifc:read, model:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let uuid = "uuid_example"; // String | IFC element or element type UUID
apiInstance.getSimpleElementDeprecated(cloudPk, ifcPk, projectPk, uuid).then((data) => {
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

[**SimpleElement**](SimpleElement.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSimpleElementsDeprecated

> SimpleElement getSimpleElementsDeprecated(cloudPk, ifcPk, projectPk, opts)

Retrieve all elements of a model with a simple value representation

         Retrieve all elements of a model with a simple value representation         Format response :             {                 :element_uuid: {                     \&quot;attributes\&quot;: {                         :property_name: value,                         :property_name: value                     },                     :property_set_name: {                         :property_name: value,                         :property_name: value                     }                 }             }  Required scopes: ifc:read, model:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
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
apiInstance.getSimpleElementsDeprecated(cloudPk, ifcPk, projectPk, opts).then((data) => {
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

[**SimpleElement**](SimpleElement.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSpaceDeprecated

> Space getSpaceDeprecated(cloudPk, id, ifcPk, projectPk)

Retrieve one space of the model

Retrieve one space of the model Required scopes: ifc:read, model:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this space.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.getSpaceDeprecated(cloudPk, id, ifcPk, projectPk).then((data) => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSpacesDeprecated

> [Space] getSpacesDeprecated(cloudPk, ifcPk, projectPk)

Retrieve all spaces of the model

Retrieve all spaces of the model Required scopes: ifc:read, model:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.getSpacesDeprecated(cloudPk, ifcPk, projectPk).then((data) => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getStoreyDeprecated

> Storey getStoreyDeprecated(cloudPk, id, ifcPk, projectPk)

Retrieve a storey of a model

Retrieve a storey of a model Required scopes: ifc:read, model:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this storey.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.getStoreyDeprecated(cloudPk, id, ifcPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this storey. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 

### Return type

[**Storey**](Storey.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getStoreysDeprecated

> [Storey] getStoreysDeprecated(cloudPk, ifcPk, projectPk)

Retrieve all storeys of a model

Retrieve all storeys of a model. Required scopes: ifc:read, model:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.getStoreysDeprecated(cloudPk, ifcPk, projectPk).then((data) => {
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

[**[Storey]**](Storey.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSystemDeprecated

> System getSystemDeprecated(cloudPk, ifcPk, projectPk, uuid)

Retrieve a system of a model

Retrieve a system of a model Required scopes: ifc:read, model:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let uuid = "uuid_example"; // String | IFC sytem or system type UUID
apiInstance.getSystemDeprecated(cloudPk, ifcPk, projectPk, uuid).then((data) => {
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
 **uuid** | **String**| IFC sytem or system type UUID | 

### Return type

[**System**](System.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSystemsDeprecated

> [System] getSystemsDeprecated(cloudPk, ifcPk, projectPk)

Retrieve all systems of a model

Retrieve all systems of a model. Required scopes: ifc:read, model:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.getSystemsDeprecated(cloudPk, ifcPk, projectPk).then((data) => {
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

[**[System]**](System.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getZoneDeprecated

> Zone getZoneDeprecated(cloudPk, id, ifcPk, projectPk)

Retrieve one zone of a model

Retrieve one zone of a model Required scopes: ifc:read, model:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this zone.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.getZoneDeprecated(cloudPk, id, ifcPk, projectPk).then((data) => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getZoneSpaceDeprecated

> ZoneSpace getZoneSpaceDeprecated(cloudPk, id, ifcPk, projectPk, zonePk)

Retrieve one space of a zone

Retrieve one space of a zone Required scopes: ifc:read, model:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this space.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let zonePk = "zonePk_example"; // String | 
apiInstance.getZoneSpaceDeprecated(cloudPk, id, ifcPk, projectPk, zonePk).then((data) => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getZoneSpacesDeprecated

> [ZoneSpace] getZoneSpacesDeprecated(cloudPk, ifcPk, projectPk, zonePk)

Retrieve all spaces of a zone

Retrieve all spaces of a zone Required scopes: ifc:read, model:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let zonePk = "zonePk_example"; // String | 
apiInstance.getZoneSpacesDeprecated(cloudPk, ifcPk, projectPk, zonePk).then((data) => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getZonesDeprecated

> [Zone] getZonesDeprecated(cloudPk, ifcPk, projectPk, opts)

Retrieve zones of a model

Retrieve parent zones of a model. Children zones we&#39;ll be in the &#39;zones&#39; field Required scopes: ifc:read, model:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
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
apiInstance.getZonesDeprecated(cloudPk, ifcPk, projectPk, opts).then((data) => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## launchNewCheckDeprecated

> launchNewCheckDeprecated(cloudPk, id, ifcPk, projectPk, data)

Launch a new check on the model

Starts a new check in the checker Required scopes: check:write, ifc:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this ifc checker.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.IfcChecker(); // IfcChecker | 
apiInstance.launchNewCheckDeprecated(cloudPk, id, ifcPk, projectPk, data).then(() => {
  console.log('API called successfully.');
}, (error) => {
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
 **data** | [**IfcChecker**](IfcChecker.md)|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## linkDocumentsOfElementDeprecated

> [Document] linkDocumentsOfElementDeprecated(cloudPk, elementUuid, ifcPk, projectPk, data)

Link one or many documents to an element

         Bulk create available.         You can either post an object or a list of objects.         Is you post a list, the response will be a list (in the same order) of created objects or of errors if any         If at least one create succeeded, the status code will be 201. If every create failed, the status code we&#39;ll be 400 with the list of errors  Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let elementUuid = "elementUuid_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = [null]; // [Number] | 
apiInstance.linkDocumentsOfElementDeprecated(cloudPk, elementUuid, ifcPk, projectPk, data).then((data) => {
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
 **data** | [**[Number]**](Number.md)|  | 

### Return type

[**[Document]**](Document.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## listClassificationElementRelationsDeprecated

> [ElementClassificationRelation] listClassificationElementRelationsDeprecated(cloudPk, ifcPk, projectPk)

List all associations between classifications and elements

List all associations between classifications and elements Required scopes: ifc:read, model:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.listClassificationElementRelationsDeprecated(cloudPk, ifcPk, projectPk).then((data) => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## mergeIfcsDeprecated

> mergeIfcsDeprecated(cloudPk, projectPk, data)

Merge IFC files

Only works for IFC files. Merge IFC files. The merged IFC file will be put in the same folder that the first IFC of the list Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.IfcMerge(); // IfcMerge | 
apiInstance.mergeIfcsDeprecated(cloudPk, projectPk, data).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **data** | [**IfcMerge**](IfcMerge.md)|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## optimizeIfcDeprecated

> optimizeIfcDeprecated(cloudPk, id, projectPk, data)

Optimize the IFC

Only works for IFC files. Optimize the IFC. A new optimized IFC file will be put in the same folder that the original IFC Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this model.
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.IfcOptimize(); // IfcOptimize | 
apiInstance.optimizeIfcDeprecated(cloudPk, id, projectPk, data).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **String**|  | 
 **data** | [**IfcOptimize**](IfcOptimize.md)|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## removeAllElementPropertySetDeprecated

> removeAllElementPropertySetDeprecated(cloudPk, elementUuid, ifcPk, projectPk)

Remove all property sets from element

Remove all property sets from element. Property Sets will not be deleted, just detached from element Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let elementUuid = "elementUuid_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.removeAllElementPropertySetDeprecated(cloudPk, elementUuid, ifcPk, projectPk).then(() => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## removeClassificationOfElementDeprecated

> removeClassificationOfElementDeprecated(cloudPk, elementUuid, id, ifcPk, projectPk)

Remove a classification from an element

The classification will not be deleted Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let elementUuid = "elementUuid_example"; // String | 
let id = 56; // Number | A unique integer value identifying this classification.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.removeClassificationOfElementDeprecated(cloudPk, elementUuid, id, ifcPk, projectPk).then(() => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## removeDocumentOfElementDeprecated

> removeDocumentOfElementDeprecated(cloudPk, elementUuid, id, ifcPk, projectPk)

Remove a documents from an element

The document will not be deleted Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let elementUuid = "elementUuid_example"; // String | 
let id = 56; // Number | A unique integer value identifying this document.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.removeDocumentOfElementDeprecated(cloudPk, elementUuid, id, ifcPk, projectPk).then(() => {
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
 **id** | **Number**| A unique integer value identifying this document. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## removeElementPropertySetDeprecated

> removeElementPropertySetDeprecated(cloudPk, elementUuid, id, ifcPk, projectPk)

Remove a PropertySet from an element

Delete the relation between the element and the property set. Does not delete any object Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let elementUuid = "elementUuid_example"; // String | 
let id = 56; // Number | A unique integer value identifying this property set.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
apiInstance.removeElementPropertySetDeprecated(cloudPk, elementUuid, id, ifcPk, projectPk).then(() => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## removeElementPropertySetPropertyDefinitionDeprecated

> removeElementPropertySetPropertyDefinitionDeprecated(cloudPk, elementUuid, id, ifcPk, projectPk, propertyPk, propertysetPk)

Remove a Definition from a Property

 Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
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
apiInstance.removeElementPropertySetPropertyDefinitionDeprecated(cloudPk, elementUuid, id, ifcPk, projectPk, propertyPk, propertysetPk).then(() => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## removeElementPropertySetPropertyDefinitionUnitDeprecated

> removeElementPropertySetPropertyDefinitionUnitDeprecated(cloudPk, elementUuid, id, ifcPk, projectPk, propertyPk, propertydefinitionPk, propertysetPk)

Remove a Unit from a Definition

Remove a Unit from a Definition Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
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
apiInstance.removeElementPropertySetPropertyDefinitionUnitDeprecated(cloudPk, elementUuid, id, ifcPk, projectPk, propertyPk, propertydefinitionPk, propertysetPk).then(() => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## removeElementPropertySetPropertyDeprecated

> removeElementPropertySetPropertyDeprecated(cloudPk, elementUuid, id, ifcPk, projectPk, propertysetPk)

Remove a property from a PropertySet

 Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
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
apiInstance.removeElementPropertySetPropertyDeprecated(cloudPk, elementUuid, id, ifcPk, projectPk, propertysetPk).then(() => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## removeElementsFromClassificationDeprecated

> removeElementsFromClassificationDeprecated(cloudPk, ifcPk, modelClassificationPk, projectPk, uuid)

Remove the classification from all elements

Remove the classification from all elements. No element nor classification will be deleted Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let modelClassificationPk = "modelClassificationPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let uuid = "uuid_example"; // String | IFC element or element type UUID
apiInstance.removeElementsFromClassificationDeprecated(cloudPk, ifcPk, modelClassificationPk, projectPk, uuid).then(() => {
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
 **modelClassificationPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **uuid** | **String**| IFC element or element type UUID | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## reprocessIfcDeprecated

> reprocessIfcDeprecated(cloudPk, id, projectPk)

Reprocess Model file

Reprocess the model. All data that are not in the original model files will be lost Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this model.
let projectPk = "projectPk_example"; // String | 
apiInstance.reprocessIfcDeprecated(cloudPk, id, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## updateAccessTokenDeprecated

> IfcAccessToken updateAccessTokenDeprecated(cloudPk, ifcPk, projectPk, token, data)

Update some fields of a token

You can update the expiration date or the read_only field Required scopes: ifc:token_manage, model:token_manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let token = "token_example"; // String | 
let data = new bimdata.IfcAccessToken(); // IfcAccessToken | 
apiInstance.updateAccessTokenDeprecated(cloudPk, ifcPk, projectPk, token, data).then((data) => {
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
 **token** | **String**|  | 
 **data** | [**IfcAccessToken**](IfcAccessToken.md)|  | 

### Return type

[**IfcAccessToken**](IfcAccessToken.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateCheckerDeprecated

> IfcChecker updateCheckerDeprecated(cloudPk, id, ifcPk, projectPk, data)

Update some fields of a checker of a model

A checker is a link between a checkplan and a model. A checker can launch a check multiple time and store all the results Required scopes: check:write, ifc:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this ifc checker.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.IfcChecker(); // IfcChecker | 
apiInstance.updateCheckerDeprecated(cloudPk, id, ifcPk, projectPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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
 **data** | [**IfcChecker**](IfcChecker.md)|  | 

### Return type

[**IfcChecker**](IfcChecker.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateCheckerResultDeprecated

> CheckerResult updateCheckerResultDeprecated(checkerPk, cloudPk, id, ifcPk, projectPk, data)

Update some fields of a CheckerResult

Update some fields of a CheckerResult Required scopes: check:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let checkerPk = "checkerPk_example"; // String | 
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this checker result.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.CheckerResult(); // CheckerResult | 
apiInstance.updateCheckerResultDeprecated(checkerPk, cloudPk, id, ifcPk, projectPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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
 **data** | [**CheckerResult**](CheckerResult.md)|  | 

### Return type

[**CheckerResult**](CheckerResult.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateElementDeprecated

> Element updateElementDeprecated(cloudPk, ifcPk, projectPk, uuid, data)

Update some fields of an element

Update some fields of an element. The IFC file will not be updated. The created element will be accessible over the API and when exporting an IFC file Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let uuid = "uuid_example"; // String | IFC element or element type UUID
let data = new bimdata.Element(); // Element | 
apiInstance.updateElementDeprecated(cloudPk, ifcPk, projectPk, uuid, data).then((data) => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateElementPropertySetPropertyDeprecated

> Property updateElementPropertySetPropertyDeprecated(cloudPk, elementUuid, id, ifcPk, projectPk, propertysetPk, data)

Update a property from an element

Update a property value from an element. If the element is the only one to have this property, the property will be update in place. If many elements share this property, a new property will be created to replace the property for this element. Keeping the property for all other elements. If you want to update the property of all elements, see updateIfcProperty Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
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
let data = new bimdata.Property(); // Property | 
apiInstance.updateElementPropertySetPropertyDeprecated(cloudPk, elementUuid, id, ifcPk, projectPk, propertysetPk, data).then((data) => {
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
 **data** | [**Property**](Property.md)|  | 

### Return type

[**Property**](Property.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateIfcDeprecated

> Model updateIfcDeprecated(cloudPk, id, projectPk, data)

Update some fields of a model

Update some fields of a model Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this model.
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.Model(); // Model | 
apiInstance.updateIfcDeprecated(cloudPk, id, projectPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **String**|  | 
 **data** | [**Model**](Model.md)|  | 

### Return type

[**Model**](Model.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateIfcFilesDeprecated

> ModelFiles updateIfcFilesDeprecated(cloudPk, id, projectPk, opts)

Update models file (gltf, svg, structure, etc)

         Patch model files (gltf, structure, svg, etc)  Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this model.
let projectPk = "projectPk_example"; // String | 
let opts = {
  'structureFile': "/path/to/file", // File | 
  'systemsFile': "/path/to/file", // File | 
  'mapFile': "/path/to/file", // File | 
  'gltfFile': "/path/to/file", // File | 
  'gltfWithOpeningsFile': "/path/to/file", // File | 
  'bvhTreeFile': "/path/to/file", // File | 
  'viewer360File': "/path/to/file", // File | 
  'xktFile': "/path/to/file" // File | 
};
apiInstance.updateIfcFilesDeprecated(cloudPk, id, projectPk, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **String**|  | 
 **structureFile** | **File**|  | [optional] 
 **systemsFile** | **File**|  | [optional] 
 **mapFile** | **File**|  | [optional] 
 **gltfFile** | **File**|  | [optional] 
 **gltfWithOpeningsFile** | **File**|  | [optional] 
 **bvhTreeFile** | **File**|  | [optional] 
 **viewer360File** | **File**|  | [optional] 
 **xktFile** | **File**|  | [optional] 

### Return type

[**ModelFiles**](ModelFiles.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: multipart/form-data, application/x-www-form-urlencoded
- **Accept**: application/json


## updateIfcPropertyDefinitionDeprecated

> PropertyDefinition updateIfcPropertyDefinitionDeprecated(cloudPk, id, ifcPk, projectPk, data)

Update some fields of many PropertyDefinitions of a model

 Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this property definition.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.PropertyDefinition(); // PropertyDefinition | 
apiInstance.updateIfcPropertyDefinitionDeprecated(cloudPk, id, ifcPk, projectPk, data).then((data) => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateIfcPropertyDeprecated

> Property updateIfcPropertyDeprecated(cloudPk, id, ifcPk, projectPk, data)

Update some fields of a Property

Update some fields of a Property Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this property.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.Property(); // Property | 
apiInstance.updateIfcPropertyDeprecated(cloudPk, id, ifcPk, projectPk, data).then((data) => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateIfcUnitDeprecated

> Unit updateIfcUnitDeprecated(cloudPk, id, ifcPk, projectPk, data)

Update some fields of a Unit of a model

 Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this unit.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.Unit(); // Unit | 
apiInstance.updateIfcUnitDeprecated(cloudPk, id, ifcPk, projectPk, data).then((data) => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateLayerDeprecated

> Layer updateLayerDeprecated(cloudPk, id, ifcPk, projectPk, data)

Update some fields of a layer

Update some fields of a layer. The IFC file will not be updated. The created layer will be accessible over the API and when exporting an IFC file Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this layer.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.Layer(); // Layer | 
apiInstance.updateLayerDeprecated(cloudPk, id, ifcPk, projectPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this layer. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **data** | [**Layer**](Layer.md)|  | 

### Return type

[**Layer**](Layer.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updatePlanPositioningDeprecated

> PositioningPlan updatePlanPositioningDeprecated(cloudPk, id, ifcPk, projectPk, storeyPk, data)

Update the postioning of the plan in the storey

Update the postioning of the plan in the storey Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this storey.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let storeyPk = "storeyPk_example"; // String | 
let data = new bimdata.PositioningPlan(); // PositioningPlan | 
apiInstance.updatePlanPositioningDeprecated(cloudPk, id, ifcPk, projectPk, storeyPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this storey. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **storeyPk** | **String**|  | 
 **data** | [**PositioningPlan**](PositioningPlan.md)|  | 

### Return type

[**PositioningPlan**](PositioningPlan.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateProcessorHandlerDeprecated

> ProcessorHandler updateProcessorHandlerDeprecated(cloudPk, id, ifcPk, projectPk, data)

Update the status of a processor handler

 Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this processor handler.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.ProcessorHandler(); // ProcessorHandler | 
apiInstance.updateProcessorHandlerDeprecated(cloudPk, id, ifcPk, projectPk, data).then((data) => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updatePropertySetDeprecated

> PropertySet updatePropertySetDeprecated(cloudPk, id, ifcPk, projectPk, data)

Update some fields of a PropertySet

Update some fields of a PropertySet Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this property set.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.PropertySet(); // PropertySet | 
apiInstance.updatePropertySetDeprecated(cloudPk, id, ifcPk, projectPk, data).then((data) => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateSpaceDeprecated

> Space updateSpaceDeprecated(cloudPk, id, ifcPk, projectPk, data)

Update some fields of a space

Update some fields of a space. The IFC file will not be updated. The created space will be accessible over the API and when exporting an IFC file Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this space.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.Space(); // Space | 
apiInstance.updateSpaceDeprecated(cloudPk, id, ifcPk, projectPk, data).then((data) => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateStoreyDeprecated

> Storey updateStoreyDeprecated(cloudPk, id, ifcPk, projectPk, data)

Update some fields of a storey

Update some fields of a storey Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this storey.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.Storey(); // Storey | 
apiInstance.updateStoreyDeprecated(cloudPk, id, ifcPk, projectPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this storey. | 
 **ifcPk** | **String**|  | 
 **projectPk** | **String**|  | 
 **data** | [**Storey**](Storey.md)|  | 

### Return type

[**Storey**](Storey.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateSystemDeprecated

> System updateSystemDeprecated(cloudPk, ifcPk, projectPk, uuid, data)

Update some fields of a system

Update some fields of a system. The IFC file will not be updated. The created system will be accessible over the API and when exporting an IFC file Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let uuid = "uuid_example"; // String | IFC sytem or system type UUID
let data = new bimdata.System(); // System | 
apiInstance.updateSystemDeprecated(cloudPk, ifcPk, projectPk, uuid, data).then((data) => {
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
 **uuid** | **String**| IFC sytem or system type UUID | 
 **data** | [**System**](System.md)|  | 

### Return type

[**System**](System.md)

### Authorization

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateZoneDeprecated

> Zone updateZoneDeprecated(cloudPk, id, ifcPk, projectPk, data)

Update some fields of a zone

Update some fields of a zone. The IFC file will not be updated. The created zone will be accessible over the API and when exporting an IFC file Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
// Configure OAuth2 access token for authorization: client_credentials
let client_credentials = defaultClient.authentications['client_credentials'];
client_credentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new bimdata.IfcApi();
let cloudPk = "cloudPk_example"; // String | 
let id = 56; // Number | A unique integer value identifying this zone.
let ifcPk = "ifcPk_example"; // String | 
let projectPk = "projectPk_example"; // String | 
let data = new bimdata.Zone(); // Zone | 
apiInstance.updateZoneDeprecated(cloudPk, id, ifcPk, projectPk, data).then((data) => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateZoneSpaceDeprecated

> ZoneSpace updateZoneSpaceDeprecated(cloudPk, id, ifcPk, projectPk, zonePk, data)

Update some fields of a space

Update some fields of a space. The IFC file will not be updated. The created space will be accessible over the API and when exporting an IFC file Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: bimdata_connect
let bimdata_connect = defaultClient.authentications['bimdata_connect'];
bimdata_connect.accessToken = 'YOUR ACCESS TOKEN';
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
apiInstance.updateZoneSpaceDeprecated(cloudPk, id, ifcPk, projectPk, zonePk, data).then((data) => {
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

[Bearer](../README.md#Bearer), [bimdata_connect](../README.md#bimdata_connect), [client_credentials](../README.md#client_credentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


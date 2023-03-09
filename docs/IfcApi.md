# bimdata.IfcApi

All URIs are relative to *http://localhost*

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
[**createBuildingDeprecated**](IfcApi.md#createBuildingDeprecated) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/building | Create a building of a model
[**createBuildingPlanDeprecated**](IfcApi.md#createBuildingPlanDeprecated) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/building/{building_uuid}/plan/add | Create a relation between a 2d model and a building
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
[**createMultiPageIfcDeprecated**](IfcApi.md#createMultiPageIfcDeprecated) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{id}/create-multipage-model | Create a multi page model
[**createPropertySetDeprecated**](IfcApi.md#createPropertySetDeprecated) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/propertyset | Create one or many PropertySet
[**createPropertySetElementRelationsDeprecated**](IfcApi.md#createPropertySetElementRelationsDeprecated) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/propertyset-element | Create association between PropertySet and element
[**createRawElementsDeprecated**](IfcApi.md#createRawElementsDeprecated) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/raw | Create elements in an optimized format
[**createSpaceDeprecated**](IfcApi.md#createSpaceDeprecated) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/space | Create a space in the model
[**createStoreyDeprecated**](IfcApi.md#createStoreyDeprecated) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/storey | Create a storey of a model
[**createStoreyPlanDeprecated**](IfcApi.md#createStoreyPlanDeprecated) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/storey/{storey_uuid}/plan/add | Create a relation between a 2d model and a storey
[**createSystemDeprecated**](IfcApi.md#createSystemDeprecated) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/system | Create a system in the model
[**createTilesetDeprecated**](IfcApi.md#createTilesetDeprecated) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{id}/tileset | Create the tileset of the model and upload all files
[**createZoneDeprecated**](IfcApi.md#createZoneDeprecated) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/zone | Create a zone in the model
[**createZoneSpaceDeprecated**](IfcApi.md#createZoneSpaceDeprecated) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/zone/{zone_pk}/space | Create a space in a zone
[**deleteAccessTokenDeprecated**](IfcApi.md#deleteAccessTokenDeprecated) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/access_token/{token} | Delete a token
[**deleteBuildingDeprecated**](IfcApi.md#deleteBuildingDeprecated) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/building/{uuid} | Delete a building of a model
[**deleteBuildingPlanDeprecated**](IfcApi.md#deleteBuildingPlanDeprecated) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/building/{building_uuid}/plan/{id} | Delete the relation between a 2d model and a building
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
[**deleteStoreyDeprecated**](IfcApi.md#deleteStoreyDeprecated) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/storey/{uuid} | Delete a storey of a model
[**deleteStoreyPlanDeprecated**](IfcApi.md#deleteStoreyPlanDeprecated) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/storey/{storey_uuid}/plan/{id} | Delete the relation between a 2d model and a storey
[**deleteSystemDeprecated**](IfcApi.md#deleteSystemDeprecated) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/system/{uuid} | Delete a system of a model
[**deleteZoneDeprecated**](IfcApi.md#deleteZoneDeprecated) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/zone/{id} | Delete a zone of a model
[**deleteZoneSpaceDeprecated**](IfcApi.md#deleteZoneSpaceDeprecated) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/zone/{zone_pk}/space/{id} | Delete a space of a zone
[**exportIfcDeprecated**](IfcApi.md#exportIfcDeprecated) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{id}/export | Export IFC
[**fullUpdateElementDeprecated**](IfcApi.md#fullUpdateElementDeprecated) | **PUT** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{uuid} | Update all fields of an element
[**getAccessTokenDeprecated**](IfcApi.md#getAccessTokenDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/access_token/{token} | Retrieve one token created for this model
[**getAccessTokensDeprecated**](IfcApi.md#getAccessTokensDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/access_token | Retrieve all tokens created for this model
[**getBuildingDeprecated**](IfcApi.md#getBuildingDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/building/{uuid} | Retrieve a building of a model
[**getBuildingPlanPositioningDeprecated**](IfcApi.md#getBuildingPlanPositioningDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/building/{building_uuid}/plan/{id}/positioning | Retrieve the postioning of the plan in the building
[**getBuildingsDeprecated**](IfcApi.md#getBuildingsDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/building | Retrieve all buildings of a model
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
[**getProcessorHandlerDeprecated**](IfcApi.md#getProcessorHandlerDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/processorhandler/{id} | Retrieve a processor handler
[**getProcessorHandlersDeprecated**](IfcApi.md#getProcessorHandlersDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/processorhandler | Get all processor handlers
[**getPropertySetDeprecated**](IfcApi.md#getPropertySetDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/propertyset/{id} | Retrieve a PropertySet of a model
[**getPropertySetsDeprecated**](IfcApi.md#getPropertySetsDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/propertyset | Retrieve all PropertySets of a model
[**getRawElementsDeprecated**](IfcApi.md#getRawElementsDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/raw | Retrieve all elements in a optimized format
[**getSimpleElementDeprecated**](IfcApi.md#getSimpleElementDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{uuid}/simple | Retrieve an element of a model with a simple value representation
[**getSimpleElementsDeprecated**](IfcApi.md#getSimpleElementsDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/simple | Retrieve all elements of a model with a simple value representation
[**getSpaceDeprecated**](IfcApi.md#getSpaceDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/space/{id} | Retrieve one space of the model
[**getSpacesDeprecated**](IfcApi.md#getSpacesDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/space | Retrieve all spaces of the model
[**getStoreyDeprecated**](IfcApi.md#getStoreyDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/storey/{uuid} | Retrieve a storey of a model
[**getStoreyPlanPositioningDeprecated**](IfcApi.md#getStoreyPlanPositioningDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/storey/{storey_uuid}/plan/{id}/positioning | Retrieve the postioning of the plan in the storey
[**getStoreysDeprecated**](IfcApi.md#getStoreysDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/storey | Retrieve all storeys of a model
[**getSystemDeprecated**](IfcApi.md#getSystemDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/system/{uuid} | Retrieve a system of a model
[**getSystemsDeprecated**](IfcApi.md#getSystemsDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/system | Retrieve all systems of a model
[**getTilesetDeprecated**](IfcApi.md#getTilesetDeprecated) | **GET** /cloud/{cloud_pk}/project/{project_pk}/ifc/{id}/tileset | Retrieve the tileset of the model
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
[**removeElementPropertySetPropertyDefinitionDeprecated**](IfcApi.md#removeElementPropertySetPropertyDefinitionDeprecated) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/propertyset/{propertyset_pk}/property/{property_pk}/propertydefinition/{id} | Delete a Definition to a Property
[**removeElementPropertySetPropertyDefinitionUnitDeprecated**](IfcApi.md#removeElementPropertySetPropertyDefinitionUnitDeprecated) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/propertyset/{propertyset_pk}/property/{property_pk}/propertydefinition/{propertydefinition_pk}/unit/{id} | Remove a Unit from a Definition
[**removeElementPropertySetPropertyDeprecated**](IfcApi.md#removeElementPropertySetPropertyDeprecated) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/element/{element_uuid}/propertyset/{propertyset_pk}/property/{id} | Remove a property from a PropertySet
[**removeElementsFromClassificationDeprecated**](IfcApi.md#removeElementsFromClassificationDeprecated) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/classification/{model_classification_pk}/element/{uuid} | Remove the classification from all elements
[**reprocessIfcDeprecated**](IfcApi.md#reprocessIfcDeprecated) | **POST** /cloud/{cloud_pk}/project/{project_pk}/ifc/{id}/reprocess | Reprocess Model file
[**updateAccessTokenDeprecated**](IfcApi.md#updateAccessTokenDeprecated) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/access_token/{token} | Update some fields of a token
[**updateBuildingDeprecated**](IfcApi.md#updateBuildingDeprecated) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/building/{uuid} | Update some fields of a building
[**updateBuildingPlanPositioningDeprecated**](IfcApi.md#updateBuildingPlanPositioningDeprecated) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/building/{building_uuid}/plan/{id}/positioning | Update the postioning of the plan in the building
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
[**updateOrderBuildingPlanDeprecated**](IfcApi.md#updateOrderBuildingPlanDeprecated) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/building/{building_uuid}/plan/order | Update order of all plan of a building
[**updateOrderStoreyPlanDeprecated**](IfcApi.md#updateOrderStoreyPlanDeprecated) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/storey/{storey_uuid}/plan/order | Update order of all plan of a storey
[**updateOrderStoreysDeprecated**](IfcApi.md#updateOrderStoreysDeprecated) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/storey/order | Update order of all storey of a model
[**updateProcessorHandlerDeprecated**](IfcApi.md#updateProcessorHandlerDeprecated) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/processorhandler/{id} | Update the status of a processor handler
[**updatePropertySetDeprecated**](IfcApi.md#updatePropertySetDeprecated) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/propertyset/{id} | Update some fields of a PropertySet
[**updateSpaceDeprecated**](IfcApi.md#updateSpaceDeprecated) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/space/{id} | Update some fields of a space
[**updateStoreyDeprecated**](IfcApi.md#updateStoreyDeprecated) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/storey/{uuid} | Update some fields of a storey
[**updateStoreyPlanPositioningDeprecated**](IfcApi.md#updateStoreyPlanPositioningDeprecated) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/storey/{storey_uuid}/plan/{id}/positioning | Update the postioning of the plan in the storey
[**updateSystemDeprecated**](IfcApi.md#updateSystemDeprecated) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/system/{uuid} | Update some fields of a system
[**updateZoneDeprecated**](IfcApi.md#updateZoneDeprecated) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/zone/{id} | Update some fields of a zone
[**updateZoneSpaceDeprecated**](IfcApi.md#updateZoneSpaceDeprecated) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/ifc/{ifc_pk}/zone/{zone_pk}/space/{id} | Update some fields of a space



## addIfcErrorsDeprecated

> ModelErrors addIfcErrorsDeprecated(cloudPk, id, projectPk, opts)

Add errors to model

Model errors are warnings and errors during model process. They alert about missing elements or malformed files  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | 
let id = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | 
let opts = {
  'modelErrorsRequest': new bimdata.ModelErrorsRequest() // ModelErrorsRequest | 
};
apiInstance.addIfcErrorsDeprecated(cloudPk, id, projectPk, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**|  | 
 **id** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**|  | 
 **modelErrorsRequest** | [**ModelErrorsRequest**](ModelErrorsRequest.md)|  | [optional] 

### Return type

[**ModelErrors**](ModelErrors.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## bulkDeleteIfcClassificationsDeprecated

> bulkDeleteIfcClassificationsDeprecated(cloudPk, ifcPk, projectPk, opts)

Remove all classifications from model&#39;s elements

Delete relation between filtered classifications (eg. /classifications?name&#x3D;untec) and all mode&#39;s elements. No classification will be deleted on this endpoint, only the relation between model&#39;s elements and their classification.  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | 
let ifcPk = 56; // Number | 
let projectPk = 56; // Number | 
let opts = {
  'classificationRequest': new bimdata.ClassificationRequest() // ClassificationRequest | 
};
apiInstance.bulkDeleteIfcClassificationsDeprecated(cloudPk, ifcPk, projectPk, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**|  | 
 **ifcPk** | **Number**|  | 
 **projectPk** | **Number**|  | 
 **classificationRequest** | [**ClassificationRequest**](ClassificationRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: Not defined


## bulkDeleteIfcPropertiesDeprecated

> bulkDeleteIfcPropertiesDeprecated(cloudPk, ifcPk, projectPk, requestBody)

Delete many Property of a model

 Bulk delete. You must send a list of ids in the body. These ids (or relations with these ids in case of many-to-many relation deletion) will be deleted   Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let requestBody = [null]; // [Number] | 
apiInstance.bulkDeleteIfcPropertiesDeprecated(cloudPk, ifcPk, projectPk, requestBody).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **requestBody** | [**[Number]**](Number.md)|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: Not defined


## bulkDeleteIfcPropertyDefinitionsDeprecated

> bulkDeleteIfcPropertyDefinitionsDeprecated(cloudPk, ifcPk, projectPk, requestBody)

Delete many PropertyDefinitions of a model

 Bulk delete. You must send a list of ids in the body. These ids (or relations with these ids in case of many-to-many relation deletion) will be deleted   Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let requestBody = [null]; // [Number] | 
apiInstance.bulkDeleteIfcPropertyDefinitionsDeprecated(cloudPk, ifcPk, projectPk, requestBody).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **requestBody** | [**[Number]**](Number.md)|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: Not defined


## bulkDeleteIfcUnitsDeprecated

> bulkDeleteIfcUnitsDeprecated(cloudPk, ifcPk, projectPk, requestBody)

Delete many Units of a model

 Bulk delete. You must send a list of ids in the body. These ids (or relations with these ids in case of many-to-many relation deletion) will be deleted   Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let requestBody = [null]; // [Number] | 
apiInstance.bulkDeleteIfcUnitsDeprecated(cloudPk, ifcPk, projectPk, requestBody).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **requestBody** | [**[Number]**](Number.md)|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: Not defined


## bulkDeletePropertySetDeprecated

> bulkDeletePropertySetDeprecated(cloudPk, ifcPk, projectPk, requestBody)

Delete many PropertySet of a model

 Bulk delete. You must send a list of ids in the body. These ids (or relations with these ids in case of many-to-many relation deletion) will be deleted   Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let requestBody = [null]; // [Number] | 
apiInstance.bulkDeletePropertySetDeprecated(cloudPk, ifcPk, projectPk, requestBody).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **requestBody** | [**[Number]**](Number.md)|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: Not defined


## bulkFullUpdateElementsDeprecated

> [Element] bulkFullUpdateElementsDeprecated(cloudPk, ifcPk, projectPk, elementRequest, opts)

Update many elements at once (only changing fields may be defined)

 Bulk update. Similar to update, but the body should be a list of objects to patch or put The response will be a list (in the same order) of updated objects or of errors if any If at least one update succeeded, the status code will be 200. If every update failed, the status code we&#39;ll be 400 with the list of errors   Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let elementRequest = [new bimdata.ElementRequest()]; // [ElementRequest] | 
let opts = {
  'classification': "classification_example", // String | 
  'classificationNotation': "classificationNotation_example", // String | 
  'type': "type_example" // String | 
};
apiInstance.bulkFullUpdateElementsDeprecated(cloudPk, ifcPk, projectPk, elementRequest, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **elementRequest** | [**[ElementRequest]**](ElementRequest.md)|  | 
 **classification** | **String**|  | [optional] 
 **classificationNotation** | **String**|  | [optional] 
 **type** | **String**|  | [optional] 

### Return type

[**[Element]**](Element.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## bulkFullUpdateIfcPropertyDeprecated

> [Property] bulkFullUpdateIfcPropertyDeprecated(cloudPk, ifcPk, projectPk, propertyRequest)

Update some fields of many properties of a model

 Bulk update. Similar to update, but the body should be a list of objects to patch or put The response will be a list (in the same order) of updated objects or of errors if any If at least one update succeeded, the status code will be 200. If every update failed, the status code we&#39;ll be 400 with the list of errors   Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let propertyRequest = [new bimdata.PropertyRequest()]; // [PropertyRequest] | 
apiInstance.bulkFullUpdateIfcPropertyDeprecated(cloudPk, ifcPk, projectPk, propertyRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **propertyRequest** | [**[PropertyRequest]**](PropertyRequest.md)|  | 

### Return type

[**[Property]**](Property.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## bulkRemoveClassificationsOfElementDeprecated

> bulkRemoveClassificationsOfElementDeprecated(cloudPk, elementUuid, ifcPk, projectPk, requestBody)

Remove many classifications from an element

 Bulk delete. You must send a list of ids in the body. These ids (or relations with these ids in case of many-to-many relation deletion) will be deleted   Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let elementUuid = "elementUuid_example"; // String | 
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let requestBody = [null]; // [Number] | 
apiInstance.bulkRemoveClassificationsOfElementDeprecated(cloudPk, elementUuid, ifcPk, projectPk, requestBody).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **elementUuid** | **String**|  | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **requestBody** | [**[Number]**](Number.md)|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: Not defined


## bulkRemoveDocumentsOfElementDeprecated

> bulkRemoveDocumentsOfElementDeprecated(cloudPk, elementUuid, ifcPk, projectPk, requestBody)

Remove many documents from an element

 Bulk delete. You must send a list of ids in the body. These ids (or relations with these ids in case of many-to-many relation deletion) will be deleted   Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let elementUuid = "elementUuid_example"; // String | 
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let requestBody = [null]; // [Number] | 
apiInstance.bulkRemoveDocumentsOfElementDeprecated(cloudPk, elementUuid, ifcPk, projectPk, requestBody).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **elementUuid** | **String**|  | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **requestBody** | [**[Number]**](Number.md)|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: Not defined


## bulkRemoveElementsFromClassificationDeprecated

> bulkRemoveElementsFromClassificationDeprecated(cloudPk, ifcPk, modelClassificationPk, projectPk, requestBody)

Remove the classifications from all elements

 Bulk delete. You must send a list of ids in the body. These ids (or relations with these ids in case of many-to-many relation deletion) will be deleted   Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | 
let ifcPk = 56; // Number | A unique integer value identifying this model.
let modelClassificationPk = 56; // Number | A unique integer value identifying this classification.
let projectPk = 56; // Number | A unique integer value identifying this project.
let requestBody = [null]; // [Number] | 
apiInstance.bulkRemoveElementsFromClassificationDeprecated(cloudPk, ifcPk, modelClassificationPk, projectPk, requestBody).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**|  | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **modelClassificationPk** | **Number**| A unique integer value identifying this classification. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **requestBody** | [**[Number]**](Number.md)|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: Not defined


## bulkUpdateElementsDeprecated

> [Element] bulkUpdateElementsDeprecated(cloudPk, ifcPk, projectPk, elementRequest, opts)

Update many elements at once (all field must be defined)

 Bulk update. Similar to update, but the body should be a list of objects to patch or put The response will be a list (in the same order) of updated objects or of errors if any If at least one update succeeded, the status code will be 200. If every update failed, the status code we&#39;ll be 400 with the list of errors   Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let elementRequest = [new bimdata.ElementRequest()]; // [ElementRequest] | 
let opts = {
  'classification': "classification_example", // String | 
  'classificationNotation': "classificationNotation_example", // String | 
  'type': "type_example" // String | 
};
apiInstance.bulkUpdateElementsDeprecated(cloudPk, ifcPk, projectPk, elementRequest, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **elementRequest** | [**[ElementRequest]**](ElementRequest.md)|  | 
 **classification** | **String**|  | [optional] 
 **classificationNotation** | **String**|  | [optional] 
 **type** | **String**|  | [optional] 

### Return type

[**[Element]**](Element.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## bulkUpdateIfcPropertyDeprecated

> [Property] bulkUpdateIfcPropertyDeprecated(cloudPk, ifcPk, projectPk, propertyRequest)

Update all fields of many properties of a model

 Bulk update. Similar to update, but the body should be a list of objects to patch or put The response will be a list (in the same order) of updated objects or of errors if any If at least one update succeeded, the status code will be 200. If every update failed, the status code we&#39;ll be 400 with the list of errors 

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let propertyRequest = [new bimdata.PropertyRequest()]; // [PropertyRequest] | 
apiInstance.bulkUpdateIfcPropertyDeprecated(cloudPk, ifcPk, projectPk, propertyRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **propertyRequest** | [**[PropertyRequest]**](PropertyRequest.md)|  | 

### Return type

[**[Property]**](Property.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## createAccessTokenDeprecated

> IfcAccessToken createAccessTokenDeprecated(cloudPk, ifcPk, projectPk, opts)

Create a token for this model

Tokens are read_only by default and are valid 1 day  Required scopes: ifc:token_manage, model:token_manage

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let opts = {
  'ifcAccessTokenRequest': new bimdata.IfcAccessTokenRequest() // IfcAccessTokenRequest | 
};
apiInstance.createAccessTokenDeprecated(cloudPk, ifcPk, projectPk, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **ifcAccessTokenRequest** | [**IfcAccessTokenRequest**](IfcAccessTokenRequest.md)|  | [optional] 

### Return type

[**IfcAccessToken**](IfcAccessToken.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## createBuildingDeprecated

> Building createBuildingDeprecated(cloudPk, ifcPk, projectPk, storeyBuildingRequest)

Create a building of a model

Create a building of a model.  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let storeyBuildingRequest = new bimdata.StoreyBuildingRequest(); // StoreyBuildingRequest | 
apiInstance.createBuildingDeprecated(cloudPk, ifcPk, projectPk, storeyBuildingRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **storeyBuildingRequest** | [**StoreyBuildingRequest**](StoreyBuildingRequest.md)|  | 

### Return type

[**Building**](Building.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## createBuildingPlanDeprecated

> Building createBuildingPlanDeprecated(buildingUuid, cloudPk, ifcPk, projectPk, buildingModelPlanRequest)

Create a relation between a 2d model and a building

Create a relation between a 2d model and a building. The model type must be one of : (&#39;DWG&#39;, &#39;DXF&#39;, &#39;PDF&#39;, &#39;JPEG&#39;, &#39;PNG&#39;)  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let buildingUuid = "buildingUuid_example"; // String | 
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let buildingModelPlanRequest = new bimdata.BuildingModelPlanRequest(); // BuildingModelPlanRequest | 
apiInstance.createBuildingPlanDeprecated(buildingUuid, cloudPk, ifcPk, projectPk, buildingModelPlanRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buildingUuid** | **String**|  | 
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **buildingModelPlanRequest** | [**BuildingModelPlanRequest**](BuildingModelPlanRequest.md)|  | 

### Return type

[**Building**](Building.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## createCheckerDeprecated

> IfcChecker createCheckerDeprecated(cloudPk, ifcPk, projectPk, opts)

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let opts = {
  'ifcCheckerRequest': new bimdata.IfcCheckerRequest() // IfcCheckerRequest | 
};
apiInstance.createCheckerDeprecated(cloudPk, ifcPk, projectPk, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **ifcCheckerRequest** | [**IfcCheckerRequest**](IfcCheckerRequest.md)|  | [optional] 

### Return type

[**IfcChecker**](IfcChecker.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## createCheckerResultDeprecated

> CheckerResult createCheckerResultDeprecated(checkerPk, cloudPk, ifcPk, projectPk, opts)

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

let apiInstance = new bimdata.IfcApi();
let checkerPk = 56; // Number | A unique integer value identifying this ifc checker.
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let opts = {
  'checkerResultRequest': new bimdata.CheckerResultRequest() // CheckerResultRequest | 
};
apiInstance.createCheckerResultDeprecated(checkerPk, cloudPk, ifcPk, projectPk, opts).then((data) => {
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
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **checkerResultRequest** | [**CheckerResultRequest**](CheckerResultRequest.md)|  | [optional] 

### Return type

[**CheckerResult**](CheckerResult.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## createClassificationElementRelationsDeprecated

> createClassificationElementRelationsDeprecated(cloudPk, ifcPk, projectPk, elementClassificationRelationRequest)

Create association between existing classification and existing element

Create association between existing classification and existing element  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | 
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let elementClassificationRelationRequest = [new bimdata.ElementClassificationRelationRequest()]; // [ElementClassificationRelationRequest] | 
apiInstance.createClassificationElementRelationsDeprecated(cloudPk, ifcPk, projectPk, elementClassificationRelationRequest).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**|  | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **elementClassificationRelationRequest** | [**[ElementClassificationRelationRequest]**](ElementClassificationRelationRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: Not defined


## createClassificationsOfElementDeprecated

> [Classification] createClassificationsOfElementDeprecated(cloudPk, elementUuid, ifcPk, projectPk, classificationRequest)

Create one or many classifications to an element

 Bulk create available. You can either post an object or a list of objects. Is you post a list, the response will be a list (in the same order) of created objects or of errors if any If at least one create succeeded, the status code will be 201. If every create failed, the status code we&#39;ll be 400 with the list of errors If classification created already exists, it will just be added to item&#39;s classifications and will not be duplicated  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let elementUuid = "elementUuid_example"; // String | 
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let classificationRequest = [new bimdata.ClassificationRequest()]; // [ClassificationRequest] | 
apiInstance.createClassificationsOfElementDeprecated(cloudPk, elementUuid, ifcPk, projectPk, classificationRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **elementUuid** | **String**|  | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **classificationRequest** | [**[ClassificationRequest]**](ClassificationRequest.md)|  | 

### Return type

[**[Classification]**](Classification.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## createElementDeprecated

> [Element] createElementDeprecated(cloudPk, ifcPk, projectPk, elementRequest, opts)

Create an element in the model

 Bulk create available. You can either post an object or a list of objects. Is you post a list, the response will be a list (in the same order) of created objects or of errors if any If at least one create succeeded, the status code will be 201. If every create failed, the status code we&#39;ll be 400 with the list of errors  The IFC file will not be updated. The created element will be accessible over the API and when exporting an IFC file  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let elementRequest = [new bimdata.ElementRequest()]; // [ElementRequest] | 
let opts = {
  'classification': "classification_example", // String | 
  'classificationNotation': "classificationNotation_example", // String | 
  'type': "type_example" // String | 
};
apiInstance.createElementDeprecated(cloudPk, ifcPk, projectPk, elementRequest, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **elementRequest** | [**[ElementRequest]**](ElementRequest.md)|  | 
 **classification** | **String**|  | [optional] 
 **classificationNotation** | **String**|  | [optional] 
 **type** | **String**|  | [optional] 

### Return type

[**[Element]**](Element.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## createElementPropertySetDeprecated

> PropertySet createElementPropertySetDeprecated(cloudPk, elementUuid, ifcPk, projectPk, opts)

Create a PropertySets to an element

Create a PropertySets that will be automatically linked to the element  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let elementUuid = "elementUuid_example"; // String | 
let ifcPk = 56; // Number | 
let projectPk = 56; // Number | A unique integer value identifying this project.
let opts = {
  'propertySetRequest': new bimdata.PropertySetRequest() // PropertySetRequest | 
};
apiInstance.createElementPropertySetDeprecated(cloudPk, elementUuid, ifcPk, projectPk, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **elementUuid** | **String**|  | 
 **ifcPk** | **Number**|  | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **propertySetRequest** | [**PropertySetRequest**](PropertySetRequest.md)|  | [optional] 

### Return type

[**PropertySet**](PropertySet.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## createElementPropertySetPropertyDefinitionDeprecated

> PropertyDefinition createElementPropertySetPropertyDefinitionDeprecated(cloudPk, elementUuid, ifcPk, projectPk, propertyPk, propertysetPk, opts)

Create a Definition to a Property

Create a Definition to a Property  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let elementUuid = "elementUuid_example"; // String | 
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let propertyPk = 56; // Number | A unique integer value identifying this property.
let propertysetPk = 56; // Number | A unique integer value identifying this property set.
let opts = {
  'propertyDefinitionRequest': new bimdata.PropertyDefinitionRequest() // PropertyDefinitionRequest | 
};
apiInstance.createElementPropertySetPropertyDefinitionDeprecated(cloudPk, elementUuid, ifcPk, projectPk, propertyPk, propertysetPk, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **elementUuid** | **String**|  | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **propertyPk** | **Number**| A unique integer value identifying this property. | 
 **propertysetPk** | **Number**| A unique integer value identifying this property set. | 
 **propertyDefinitionRequest** | [**PropertyDefinitionRequest**](PropertyDefinitionRequest.md)|  | [optional] 

### Return type

[**PropertyDefinition**](PropertyDefinition.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## createElementPropertySetPropertyDefinitionUnitDeprecated

> Unit createElementPropertySetPropertyDefinitionUnitDeprecated(cloudPk, elementUuid, ifcPk, projectPk, propertyPk, propertydefinitionPk, propertysetPk, unitRequest)

Create a Unit to a Definition

Create a Unit to a Definition  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let elementUuid = "elementUuid_example"; // String | 
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let propertyPk = 56; // Number | A unique integer value identifying this property.
let propertydefinitionPk = 56; // Number | A unique integer value identifying this property definition.
let propertysetPk = 56; // Number | A unique integer value identifying this property set.
let unitRequest = new bimdata.UnitRequest(); // UnitRequest | 
apiInstance.createElementPropertySetPropertyDefinitionUnitDeprecated(cloudPk, elementUuid, ifcPk, projectPk, propertyPk, propertydefinitionPk, propertysetPk, unitRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **elementUuid** | **String**|  | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **propertyPk** | **Number**| A unique integer value identifying this property. | 
 **propertydefinitionPk** | **Number**| A unique integer value identifying this property definition. | 
 **propertysetPk** | **Number**| A unique integer value identifying this property set. | 
 **unitRequest** | [**UnitRequest**](UnitRequest.md)|  | 

### Return type

[**Unit**](Unit.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## createElementPropertySetPropertyDeprecated

> Property createElementPropertySetPropertyDeprecated(cloudPk, elementUuid, ifcPk, projectPk, propertysetPk, propertyRequest)

Create a property to a PropertySet

Create a property to a PropertySet  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let elementUuid = "elementUuid_example"; // String | 
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let propertysetPk = 56; // Number | A unique integer value identifying this property set.
let propertyRequest = new bimdata.PropertyRequest(); // PropertyRequest | 
apiInstance.createElementPropertySetPropertyDeprecated(cloudPk, elementUuid, ifcPk, projectPk, propertysetPk, propertyRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **elementUuid** | **String**|  | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **propertysetPk** | **Number**| A unique integer value identifying this property set. | 
 **propertyRequest** | [**PropertyRequest**](PropertyRequest.md)|  | 

### Return type

[**Property**](Property.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## createIfcDeprecated

> Model createIfcDeprecated(cloudPk, projectPk, createModelRequest)

Make a PDF or Image file a Model

Make a PDF or Image file a Model to be used in BIMData services. If a model already exists, this route does nothing and returns a 201 with the model  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | 
let projectPk = 56; // Number | 
let createModelRequest = new bimdata.CreateModelRequest(); // CreateModelRequest | 
apiInstance.createIfcDeprecated(cloudPk, projectPk, createModelRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**|  | 
 **projectPk** | **Number**|  | 
 **createModelRequest** | [**CreateModelRequest**](CreateModelRequest.md)|  | 

### Return type

[**Model**](Model.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## createIfcPropertyDefinitionDeprecated

> [PropertyDefinition] createIfcPropertyDefinitionDeprecated(cloudPk, ifcPk, projectPk, propertyDefinitionRequest)

Create a PropertyDefinition on the model

 Bulk create available. You can either post an object or a list of objects. Is you post a list, the response will be a list (in the same order) of created objects or of errors if any If at least one create succeeded, the status code will be 201. If every create failed, the status code we&#39;ll be 400 with the list of errors   Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let propertyDefinitionRequest = [new bimdata.PropertyDefinitionRequest()]; // [PropertyDefinitionRequest] | 
apiInstance.createIfcPropertyDefinitionDeprecated(cloudPk, ifcPk, projectPk, propertyDefinitionRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **propertyDefinitionRequest** | [**[PropertyDefinitionRequest]**](PropertyDefinitionRequest.md)|  | 

### Return type

[**[PropertyDefinition]**](PropertyDefinition.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## createIfcUnitDeprecated

> [Unit] createIfcUnitDeprecated(cloudPk, ifcPk, projectPk, unitRequest)

Create a Unit on a model

 Bulk create available. You can either post an object or a list of objects. Is you post a list, the response will be a list (in the same order) of created objects or of errors if any If at least one create succeeded, the status code will be 201. If every create failed, the status code we&#39;ll be 400 with the list of errors   Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let unitRequest = [new bimdata.UnitRequest()]; // [UnitRequest] | 
apiInstance.createIfcUnitDeprecated(cloudPk, ifcPk, projectPk, unitRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **unitRequest** | [**[UnitRequest]**](UnitRequest.md)|  | 

### Return type

[**[Unit]**](Unit.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## createLayerDeprecated

> Layer createLayerDeprecated(cloudPk, ifcPk, projectPk, layerRequest)

Create a layer in the model

The IFC file will not be updated. The created layer will be accessible over the API and when exporting an IFC file  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let layerRequest = new bimdata.LayerRequest(); // LayerRequest | 
apiInstance.createLayerDeprecated(cloudPk, ifcPk, projectPk, layerRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **layerRequest** | [**LayerRequest**](LayerRequest.md)|  | 

### Return type

[**Layer**](Layer.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## createMetaBuildingDeprecated

> Model createMetaBuildingDeprecated(cloudPk, projectPk, createBuildingByNameRequest)

Create an empty 3D Model

Create an empty 3D Model to be used in BIMData services  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | 
let projectPk = 56; // Number | 
let createBuildingByNameRequest = new bimdata.CreateBuildingByNameRequest(); // CreateBuildingByNameRequest | 
apiInstance.createMetaBuildingDeprecated(cloudPk, projectPk, createBuildingByNameRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**|  | 
 **projectPk** | **Number**|  | 
 **createBuildingByNameRequest** | [**CreateBuildingByNameRequest**](CreateBuildingByNameRequest.md)|  | 

### Return type

[**Model**](Model.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## createMultiPageIfcDeprecated

> Model createMultiPageIfcDeprecated(cloudPk, id, projectPk, createMultiPageModelRequest)

Create a multi page model

Create a multi page model  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | 
let id = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | 
let createMultiPageModelRequest = new bimdata.CreateMultiPageModelRequest(); // CreateMultiPageModelRequest | 
apiInstance.createMultiPageIfcDeprecated(cloudPk, id, projectPk, createMultiPageModelRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**|  | 
 **id** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**|  | 
 **createMultiPageModelRequest** | [**CreateMultiPageModelRequest**](CreateMultiPageModelRequest.md)|  | 

### Return type

[**Model**](Model.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## createPropertySetDeprecated

> [PropertySet] createPropertySetDeprecated(cloudPk, ifcPk, projectPk, propertySetRequest)

Create one or many PropertySet

 Bulk create available. You can either post an object or a list of objects. Is you post a list, the response will be a list (in the same order) of created objects or of errors if any If at least one create succeeded, the status code will be 201. If every create failed, the status code we&#39;ll be 400 with the list of errors   Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let propertySetRequest = [new bimdata.PropertySetRequest()]; // [PropertySetRequest] | 
apiInstance.createPropertySetDeprecated(cloudPk, ifcPk, projectPk, propertySetRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **propertySetRequest** | [**[PropertySetRequest]**](PropertySetRequest.md)|  | 

### Return type

[**[PropertySet]**](PropertySet.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## createPropertySetElementRelationsDeprecated

> createPropertySetElementRelationsDeprecated(cloudPk, ifcPk, projectPk, elementPropertySetRelationRequest)

Create association between PropertySet and element

Create association between PropertySet and element  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | 
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let elementPropertySetRelationRequest = [new bimdata.ElementPropertySetRelationRequest()]; // [ElementPropertySetRelationRequest] | 
apiInstance.createPropertySetElementRelationsDeprecated(cloudPk, ifcPk, projectPk, elementPropertySetRelationRequest).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**|  | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **elementPropertySetRelationRequest** | [**[ElementPropertySetRelationRequest]**](ElementPropertySetRelationRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: Not defined


## createRawElementsDeprecated

> createRawElementsDeprecated(cloudPk, ifcPk, projectPk, rawElementsRequest)

Create elements in an optimized format

Create many elements in an optimized format to reduce JSON size and avoid redudancy. The IFC file will not be updated. The created elements will be accessible over the API and when exporting an IFC file. You can use the same optimized structure to post multiple elements, property_sets, properties, definitions and units at once. For performance reasons, we do not check the validity of the json. If the json is malformed, an error 500 without more explaination may be returned instead of a 400.  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let rawElementsRequest = new bimdata.RawElementsRequest(); // RawElementsRequest | 
apiInstance.createRawElementsDeprecated(cloudPk, ifcPk, projectPk, rawElementsRequest).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **rawElementsRequest** | [**RawElementsRequest**](RawElementsRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: Not defined


## createSpaceDeprecated

> [Space] createSpaceDeprecated(cloudPk, ifcPk, projectPk, spaceRequest)

Create a space in the model

 Bulk create available. You can either post an object or a list of objects. Is you post a list, the response will be a list (in the same order) of created objects or of errors if any If at least one create succeeded, the status code will be 201. If every create failed, the status code we&#39;ll be 400 with the list of errors  The IFC file will not be updated. The created space will be accessible over the API and when exporting an IFC file  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let spaceRequest = [new bimdata.SpaceRequest()]; // [SpaceRequest] | 
apiInstance.createSpaceDeprecated(cloudPk, ifcPk, projectPk, spaceRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **spaceRequest** | [**[SpaceRequest]**](SpaceRequest.md)|  | 

### Return type

[**[Space]**](Space.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## createStoreyDeprecated

> Storey createStoreyDeprecated(cloudPk, ifcPk, projectPk, storeyBuildingRequest)

Create a storey of a model

Create a storey of a model.  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let storeyBuildingRequest = new bimdata.StoreyBuildingRequest(); // StoreyBuildingRequest | 
apiInstance.createStoreyDeprecated(cloudPk, ifcPk, projectPk, storeyBuildingRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **storeyBuildingRequest** | [**StoreyBuildingRequest**](StoreyBuildingRequest.md)|  | 

### Return type

[**Storey**](Storey.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## createStoreyPlanDeprecated

> Storey createStoreyPlanDeprecated(cloudPk, ifcPk, projectPk, storeyUuid, storeyModelPlanRequest)

Create a relation between a 2d model and a storey

Create a relation between a 2d model and a storey. The model type must be one of : (&#39;DWG&#39;, &#39;DXF&#39;, &#39;PDF&#39;, &#39;JPEG&#39;, &#39;PNG&#39;)  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let storeyUuid = "storeyUuid_example"; // String | 
let storeyModelPlanRequest = new bimdata.StoreyModelPlanRequest(); // StoreyModelPlanRequest | 
apiInstance.createStoreyPlanDeprecated(cloudPk, ifcPk, projectPk, storeyUuid, storeyModelPlanRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **storeyUuid** | **String**|  | 
 **storeyModelPlanRequest** | [**StoreyModelPlanRequest**](StoreyModelPlanRequest.md)|  | 

### Return type

[**Storey**](Storey.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## createSystemDeprecated

> System createSystemDeprecated(cloudPk, ifcPk, projectPk, systemRequest)

Create a system in the model

The IFC file will not be updated. The created system will be accessible over the API and when exporting an IFC file  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let systemRequest = new bimdata.SystemRequest(); // SystemRequest | 
apiInstance.createSystemDeprecated(cloudPk, ifcPk, projectPk, systemRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **systemRequest** | [**SystemRequest**](SystemRequest.md)|  | 

### Return type

[**System**](System.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## createTilesetDeprecated

> createTilesetDeprecated(cloudPk, id, projectPk)

Create the tileset of the model and upload all files

This route is internaly used by BIMData, you probably don&#39;t want to use it  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | 
let id = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | 
apiInstance.createTilesetDeprecated(cloudPk, id, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**|  | 
 **id** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## createZoneDeprecated

> [Zone] createZoneDeprecated(cloudPk, ifcPk, projectPk, zoneRequest, opts)

Create a zone in the model

 Bulk create available. You can either post an object or a list of objects. Is you post a list, the response will be a list (in the same order) of created objects or of errors if any If at least one create succeeded, the status code will be 201. If every create failed, the status code we&#39;ll be 400 with the list of errors  The IFC file will not be updated. The created zone will be accessible over the API and when exporting an IFC file  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let zoneRequest = [new bimdata.ZoneRequest()]; // [ZoneRequest] | 
let opts = {
  'color': "color_example" // String | 
};
apiInstance.createZoneDeprecated(cloudPk, ifcPk, projectPk, zoneRequest, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **zoneRequest** | [**[ZoneRequest]**](ZoneRequest.md)|  | 
 **color** | **String**|  | [optional] 

### Return type

[**[Zone]**](Zone.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## createZoneSpaceDeprecated

> ZoneSpace createZoneSpaceDeprecated(cloudPk, ifcPk, projectPk, zonePk, zoneSpaceRequest)

Create a space in a zone

The IFC file will not be updated. The created space will be accessible over the API and when exporting an IFC file  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let zonePk = 56; // Number | A unique integer value identifying this zone.
let zoneSpaceRequest = new bimdata.ZoneSpaceRequest(); // ZoneSpaceRequest | 
apiInstance.createZoneSpaceDeprecated(cloudPk, ifcPk, projectPk, zonePk, zoneSpaceRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **zonePk** | **Number**| A unique integer value identifying this zone. | 
 **zoneSpaceRequest** | [**ZoneSpaceRequest**](ZoneSpaceRequest.md)|  | 

### Return type

[**ZoneSpace**](ZoneSpace.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## deleteAccessTokenDeprecated

> deleteAccessTokenDeprecated(cloudPk, ifcPk, projectPk, token)

Delete a token

Deleting a token will revoke it.  Required scopes: ifc:token_manage, model:token_manage

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
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
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **token** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteBuildingDeprecated

> deleteBuildingDeprecated(cloudPk, ifcPk, projectPk, uuid)

Delete a building of a model

Delete a building of a model  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let uuid = "uuid_example"; // String | 
apiInstance.deleteBuildingDeprecated(cloudPk, ifcPk, projectPk, uuid).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **uuid** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteBuildingPlanDeprecated

> deleteBuildingPlanDeprecated(buildingUuid, cloudPk, id, ifcPk, projectPk)

Delete the relation between a 2d model and a building

Delete the relation between a 2d model and a building  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let buildingUuid = "buildingUuid_example"; // String | 
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this element.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.deleteBuildingPlanDeprecated(buildingUuid, cloudPk, id, ifcPk, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buildingUuid** | **String**|  | 
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this element. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteCheckerDeprecated

> deleteCheckerDeprecated(cloudPk, id, ifcPk, projectPk)

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this ifc checker.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.deleteCheckerDeprecated(cloudPk, id, ifcPk, projectPk).then(() => {
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
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteCheckerResultDeprecated

> deleteCheckerResultDeprecated(checkerPk, cloudPk, id, ifcPk, projectPk)

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

let apiInstance = new bimdata.IfcApi();
let checkerPk = 56; // Number | A unique integer value identifying this ifc checker.
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this checker result.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.deleteCheckerResultDeprecated(checkerPk, cloudPk, id, ifcPk, projectPk).then(() => {
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
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteElementDeprecated

> deleteElementDeprecated(cloudPk, ifcPk, projectPk, uuid)

Delete an element of a model

The IFC file will not be updated. The remaining elements are available in API and will be available when exporting an IFC file  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let uuid = "uuid_example"; // String | 
apiInstance.deleteElementDeprecated(cloudPk, ifcPk, projectPk, uuid).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **uuid** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteIfcDeprecated

> deleteIfcDeprecated(cloudPk, id, projectPk)

Delete a model

It will also delete the related document  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | 
let id = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | 
apiInstance.deleteIfcDeprecated(cloudPk, id, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**|  | 
 **id** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteIfcPropertyDefinitionDeprecated

> deleteIfcPropertyDefinitionDeprecated(cloudPk, id, ifcPk, projectPk)

Delete a PropertyDefinitions of a model

Delete a PropertyDefinitions of a model  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this property definition.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.deleteIfcPropertyDefinitionDeprecated(cloudPk, id, ifcPk, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this property definition. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteIfcPropertyDeprecated

> deleteIfcPropertyDeprecated(cloudPk, id, ifcPk, projectPk)

Delete a Property of a model

Delete a Property of a model  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this property.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.deleteIfcPropertyDeprecated(cloudPk, id, ifcPk, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this property. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteIfcUnitDeprecated

> deleteIfcUnitDeprecated(cloudPk, id, ifcPk, projectPk)

Delete a Unit of a model

Delete a Unit of a model  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this unit.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.deleteIfcUnitDeprecated(cloudPk, id, ifcPk, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this unit. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteIfcWithoutDocDeprecated

> deleteIfcWithoutDocDeprecated(cloudPk, id, projectPk)

Delete the Model without deleting the related document

Delete the Model without deleting the related document  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | 
let id = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | 
apiInstance.deleteIfcWithoutDocDeprecated(cloudPk, id, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**|  | 
 **id** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteLayerDeprecated

> deleteLayerDeprecated(cloudPk, id, ifcPk, projectPk)

Delete a layer of a model

The IFC file will not be updated. The remaining layers are available in API and will be available when exporting an IFC file  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this layer.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.deleteLayerDeprecated(cloudPk, id, ifcPk, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this layer. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deletePropertySetDeprecated

> deletePropertySetDeprecated(cloudPk, id, ifcPk, projectPk)

Delete a PropertySet of a model

Delete a PropertySet of a model  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this property set.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.deletePropertySetDeprecated(cloudPk, id, ifcPk, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this property set. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteSpaceDeprecated

> deleteSpaceDeprecated(cloudPk, id, ifcPk, projectPk)

Delete a space

It will not delete related zones. The IFC file will not be updated. The remaining spaces are available in API and will be available when exporting an IFC file  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this space.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.deleteSpaceDeprecated(cloudPk, id, ifcPk, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this space. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteStoreyDeprecated

> deleteStoreyDeprecated(cloudPk, ifcPk, projectPk, uuid)

Delete a storey of a model

Delete a storey of a model  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let uuid = "uuid_example"; // String | 
apiInstance.deleteStoreyDeprecated(cloudPk, ifcPk, projectPk, uuid).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **uuid** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteStoreyPlanDeprecated

> deleteStoreyPlanDeprecated(cloudPk, id, ifcPk, projectPk, storeyUuid)

Delete the relation between a 2d model and a storey

Delete the relation between a 2d model and a storey  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this element.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let storeyUuid = "storeyUuid_example"; // String | 
apiInstance.deleteStoreyPlanDeprecated(cloudPk, id, ifcPk, projectPk, storeyUuid).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this element. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **storeyUuid** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteSystemDeprecated

> deleteSystemDeprecated(cloudPk, ifcPk, projectPk, uuid)

Delete a system of a model

The IFC file will not be updated. The remaining systems are available in API and will be available when exporting an IFC file  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let uuid = "uuid_example"; // String | 
apiInstance.deleteSystemDeprecated(cloudPk, ifcPk, projectPk, uuid).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **uuid** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteZoneDeprecated

> deleteZoneDeprecated(cloudPk, id, ifcPk, projectPk)

Delete a zone of a model

The IFC file will not be updated. The remaining zones are available in API and will be available when exporting an IFC file  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this zone.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.deleteZoneDeprecated(cloudPk, id, ifcPk, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this zone. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteZoneSpaceDeprecated

> deleteZoneSpaceDeprecated(cloudPk, id, ifcPk, projectPk, zonePk)

Delete a space of a zone

The IFC file will not be updated. The remaining spaces are available in API and will be available when exporting an IFC file  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this space.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let zonePk = 56; // Number | A unique integer value identifying this zone.
apiInstance.deleteZoneSpaceDeprecated(cloudPk, id, ifcPk, projectPk, zonePk).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this space. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **zonePk** | **Number**| A unique integer value identifying this zone. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## exportIfcDeprecated

> exportIfcDeprecated(cloudPk, id, projectPk, ifcExportRequest)

Export IFC

Only works for IFC files. Export IFC as requested in parameters. When the export is finished, a new IFC file with will be created in the same folder than the original IFC. You can query the folder or subscribe to the new document webhook to retrieve the result  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | 
let id = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | 
let ifcExportRequest = new bimdata.IfcExportRequest(); // IfcExportRequest | 
apiInstance.exportIfcDeprecated(cloudPk, id, projectPk, ifcExportRequest).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**|  | 
 **id** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**|  | 
 **ifcExportRequest** | [**IfcExportRequest**](IfcExportRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: Not defined


## fullUpdateElementDeprecated

> Element fullUpdateElementDeprecated(cloudPk, ifcPk, projectPk, uuid, elementRequest)

Update all fields of an element

Update all fields of an element. The IFC file will not be updated. The created element will be accessible over the API and when exporting an IFC file  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let uuid = "uuid_example"; // String | 
let elementRequest = new bimdata.ElementRequest(); // ElementRequest | 
apiInstance.fullUpdateElementDeprecated(cloudPk, ifcPk, projectPk, uuid, elementRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **uuid** | **String**|  | 
 **elementRequest** | [**ElementRequest**](ElementRequest.md)|  | 

### Return type

[**Element**](Element.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## getAccessTokenDeprecated

> IfcAccessToken getAccessTokenDeprecated(cloudPk, ifcPk, projectPk, token)

Retrieve one token created for this model

Retrieve one token created for this model  Required scopes: ifc:token_manage, model:token_manage

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
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
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **token** | **String**|  | 

### Return type

[**IfcAccessToken**](IfcAccessToken.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAccessTokensDeprecated

> [IfcAccessToken] getAccessTokensDeprecated(cloudPk, ifcPk, projectPk)

Retrieve all tokens created for this model

Retrieve all tokens created for this model  Required scopes: ifc:token_manage, model:token_manage

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getAccessTokensDeprecated(cloudPk, ifcPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**[IfcAccessToken]**](IfcAccessToken.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getBuildingDeprecated

> Building getBuildingDeprecated(cloudPk, ifcPk, projectPk, uuid)

Retrieve a building of a model

Retrieve a building of a model  Required scopes: ifc:read, model:read

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let uuid = "uuid_example"; // String | 
apiInstance.getBuildingDeprecated(cloudPk, ifcPk, projectPk, uuid).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **uuid** | **String**|  | 

### Return type

[**Building**](Building.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getBuildingPlanPositioningDeprecated

> PositioningPlan getBuildingPlanPositioningDeprecated(buildingUuid, cloudPk, id, ifcPk, projectPk)

Retrieve the postioning of the plan in the building

Retrieve the postioning of the plan in the building  Required scopes: ifc:read, model:read

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

let apiInstance = new bimdata.IfcApi();
let buildingUuid = "buildingUuid_example"; // String | 
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this element.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getBuildingPlanPositioningDeprecated(buildingUuid, cloudPk, id, ifcPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buildingUuid** | **String**|  | 
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this element. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**PositioningPlan**](PositioningPlan.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getBuildingsDeprecated

> [Building] getBuildingsDeprecated(cloudPk, ifcPk, projectPk)

Retrieve all buildings of a model

Retrieve all buildings of a model.  Required scopes: ifc:read, model:read

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getBuildingsDeprecated(cloudPk, ifcPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**[Building]**](Building.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCheckerDeprecated

> IfcChecker getCheckerDeprecated(cloudPk, id, ifcPk, projectPk)

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this ifc checker.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getCheckerDeprecated(cloudPk, id, ifcPk, projectPk).then((data) => {
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
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**IfcChecker**](IfcChecker.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCheckerResultDeprecated

> CheckerResult getCheckerResultDeprecated(checkerPk, cloudPk, id, ifcPk, projectPk)

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

let apiInstance = new bimdata.IfcApi();
let checkerPk = 56; // Number | A unique integer value identifying this ifc checker.
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this checker result.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getCheckerResultDeprecated(checkerPk, cloudPk, id, ifcPk, projectPk).then((data) => {
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
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**CheckerResult**](CheckerResult.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCheckerResultsDeprecated

> [CheckerResult] getCheckerResultsDeprecated(checkerPk, cloudPk, ifcPk, projectPk)

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

let apiInstance = new bimdata.IfcApi();
let checkerPk = 56; // Number | A unique integer value identifying this ifc checker.
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getCheckerResultsDeprecated(checkerPk, cloudPk, ifcPk, projectPk).then((data) => {
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
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**[CheckerResult]**](CheckerResult.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCheckersDeprecated

> [IfcChecker] getCheckersDeprecated(cloudPk, ifcPk, projectPk)

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getCheckersDeprecated(cloudPk, ifcPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**[IfcChecker]**](IfcChecker.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getClassificationsOfElementDeprecated

> [Classification] getClassificationsOfElementDeprecated(cloudPk, elementUuid, ifcPk, projectPk)

Retrieve all classifications of an element

Retrieve all classifications of an element  Required scopes: ifc:read, model:read

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let elementUuid = "elementUuid_example"; // String | 
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getClassificationsOfElementDeprecated(cloudPk, elementUuid, ifcPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **elementUuid** | **String**|  | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**[Classification]**](Classification.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDocumentsOfElementDeprecated

> [Document] getDocumentsOfElementDeprecated(cloudPk, elementUuid, ifcPk, projectPk)

Retrieve all documents of an element

Retrieve all documents of an element  Required scopes: ifc:read, model:read

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let elementUuid = "elementUuid_example"; // String | 
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getDocumentsOfElementDeprecated(cloudPk, elementUuid, ifcPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **elementUuid** | **String**|  | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**[Document]**](Document.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getElementDeprecated

> Element getElementDeprecated(cloudPk, ifcPk, projectPk, uuid)

Retrieve an element of a model

Retrieve an element of a model  Required scopes: ifc:read, model:read

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let uuid = "uuid_example"; // String | 
apiInstance.getElementDeprecated(cloudPk, ifcPk, projectPk, uuid).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **uuid** | **String**|  | 

### Return type

[**Element**](Element.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getElementLinkedDocumentsDeprecated

> [DocumentWithElementList] getElementLinkedDocumentsDeprecated(cloudPk, ifcPk, projectPk, opts)

Retrieve all documents linked to any element

Retrieve all documents linked to any element with the list of uuids  Required scopes: ifc:read, model:read

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let opts = {
  'classification': "classification_example", // String | 
  'classificationNotation': "classificationNotation_example", // String | 
  'type': "type_example" // String | 
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
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **classification** | **String**|  | [optional] 
 **classificationNotation** | **String**|  | [optional] 
 **type** | **String**|  | [optional] 

### Return type

[**[DocumentWithElementList]**](DocumentWithElementList.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getElementPropertySetDeprecated

> PropertySet getElementPropertySetDeprecated(cloudPk, elementUuid, id, ifcPk, projectPk)

Retrieve a PropertySet of an element

Retrieve a PropertySet of an element  Required scopes: ifc:read, model:read

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let elementUuid = "elementUuid_example"; // String | 
let id = 56; // Number | A unique integer value identifying this property set.
let ifcPk = 56; // Number | 
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getElementPropertySetDeprecated(cloudPk, elementUuid, id, ifcPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **elementUuid** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this property set. | 
 **ifcPk** | **Number**|  | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**PropertySet**](PropertySet.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getElementPropertySetPropertiesDeprecated

> [Property] getElementPropertySetPropertiesDeprecated(cloudPk, elementUuid, ifcPk, projectPk, propertysetPk)

Retrieve all Properties of a PropertySet

Retrieve all Properties of a PropertySet  Required scopes: ifc:read, model:read

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let elementUuid = "elementUuid_example"; // String | 
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let propertysetPk = 56; // Number | A unique integer value identifying this property set.
apiInstance.getElementPropertySetPropertiesDeprecated(cloudPk, elementUuid, ifcPk, projectPk, propertysetPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **elementUuid** | **String**|  | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **propertysetPk** | **Number**| A unique integer value identifying this property set. | 

### Return type

[**[Property]**](Property.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getElementPropertySetPropertyDefinitionDeprecated

> PropertyDefinition getElementPropertySetPropertyDefinitionDeprecated(cloudPk, elementUuid, id, ifcPk, projectPk, propertyPk, propertysetPk)

Retrieve a Definition of a Property

Retrieve a Definition of a Property  Required scopes: ifc:read, model:read

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let elementUuid = "elementUuid_example"; // String | 
let id = 56; // Number | A unique integer value identifying this property definition.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let propertyPk = 56; // Number | A unique integer value identifying this property.
let propertysetPk = 56; // Number | A unique integer value identifying this property set.
apiInstance.getElementPropertySetPropertyDefinitionDeprecated(cloudPk, elementUuid, id, ifcPk, projectPk, propertyPk, propertysetPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **elementUuid** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this property definition. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **propertyPk** | **Number**| A unique integer value identifying this property. | 
 **propertysetPk** | **Number**| A unique integer value identifying this property set. | 

### Return type

[**PropertyDefinition**](PropertyDefinition.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getElementPropertySetPropertyDefinitionUnitDeprecated

> Unit getElementPropertySetPropertyDefinitionUnitDeprecated(cloudPk, elementUuid, id, ifcPk, projectPk, propertyPk, propertydefinitionPk, propertysetPk)

Retrieve a Unit of a Definition

Retrieve a Unit of a Definition  Required scopes: ifc:read, model:read

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let elementUuid = "elementUuid_example"; // String | 
let id = 56; // Number | A unique integer value identifying this unit.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let propertyPk = 56; // Number | A unique integer value identifying this property.
let propertydefinitionPk = 56; // Number | A unique integer value identifying this property definition.
let propertysetPk = 56; // Number | A unique integer value identifying this property set.
apiInstance.getElementPropertySetPropertyDefinitionUnitDeprecated(cloudPk, elementUuid, id, ifcPk, projectPk, propertyPk, propertydefinitionPk, propertysetPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **elementUuid** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this unit. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **propertyPk** | **Number**| A unique integer value identifying this property. | 
 **propertydefinitionPk** | **Number**| A unique integer value identifying this property definition. | 
 **propertysetPk** | **Number**| A unique integer value identifying this property set. | 

### Return type

[**Unit**](Unit.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getElementPropertySetPropertyDefinitionUnitsDeprecated

> [Unit] getElementPropertySetPropertyDefinitionUnitsDeprecated(cloudPk, elementUuid, ifcPk, projectPk, propertyPk, propertydefinitionPk, propertysetPk)

Retrieve all Units of a Definition

Retrieve all Units of a Definition  Required scopes: ifc:read, model:read

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let elementUuid = "elementUuid_example"; // String | 
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let propertyPk = 56; // Number | A unique integer value identifying this property.
let propertydefinitionPk = 56; // Number | A unique integer value identifying this property definition.
let propertysetPk = 56; // Number | A unique integer value identifying this property set.
apiInstance.getElementPropertySetPropertyDefinitionUnitsDeprecated(cloudPk, elementUuid, ifcPk, projectPk, propertyPk, propertydefinitionPk, propertysetPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **elementUuid** | **String**|  | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **propertyPk** | **Number**| A unique integer value identifying this property. | 
 **propertydefinitionPk** | **Number**| A unique integer value identifying this property definition. | 
 **propertysetPk** | **Number**| A unique integer value identifying this property set. | 

### Return type

[**[Unit]**](Unit.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getElementPropertySetPropertyDefinitionsDeprecated

> [PropertyDefinition] getElementPropertySetPropertyDefinitionsDeprecated(cloudPk, elementUuid, ifcPk, projectPk, propertyPk, propertysetPk)

Retrieve all Definitions of a PropertySet

Retrieve all Definitions of a PropertySet  Required scopes: ifc:read, model:read

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let elementUuid = "elementUuid_example"; // String | 
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let propertyPk = 56; // Number | A unique integer value identifying this property.
let propertysetPk = 56; // Number | A unique integer value identifying this property set.
apiInstance.getElementPropertySetPropertyDefinitionsDeprecated(cloudPk, elementUuid, ifcPk, projectPk, propertyPk, propertysetPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **elementUuid** | **String**|  | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **propertyPk** | **Number**| A unique integer value identifying this property. | 
 **propertysetPk** | **Number**| A unique integer value identifying this property set. | 

### Return type

[**[PropertyDefinition]**](PropertyDefinition.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getElementPropertySetPropertyDeprecated

> Property getElementPropertySetPropertyDeprecated(cloudPk, elementUuid, id, ifcPk, projectPk, propertysetPk)

Retrieve a Property of a PropertySet

Retrieve a Property of a PropertySet  Required scopes: ifc:read, model:read

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let elementUuid = "elementUuid_example"; // String | 
let id = 56; // Number | A unique integer value identifying this property.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let propertysetPk = 56; // Number | A unique integer value identifying this property set.
apiInstance.getElementPropertySetPropertyDeprecated(cloudPk, elementUuid, id, ifcPk, projectPk, propertysetPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **elementUuid** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this property. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **propertysetPk** | **Number**| A unique integer value identifying this property set. | 

### Return type

[**Property**](Property.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getElementPropertySetsDeprecated

> [PropertySet] getElementPropertySetsDeprecated(cloudPk, elementUuid, ifcPk, projectPk)

Retrieve all PropertySets of an element

Retrieve all PropertySets of an element  Required scopes: ifc:read, model:read

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let elementUuid = "elementUuid_example"; // String | 
let ifcPk = 56; // Number | 
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getElementPropertySetsDeprecated(cloudPk, elementUuid, ifcPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **elementUuid** | **String**|  | 
 **ifcPk** | **Number**|  | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**[PropertySet]**](PropertySet.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getElementsDeprecated

> [Element] getElementsDeprecated(cloudPk, ifcPk, projectPk, opts)

Retrieve all elements of a model

Retrieve all elements of a model. If not filtered, the json may be very large. To efficently retrieve all elements and their data, see getRawElements  Required scopes: ifc:read, model:read

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let opts = {
  'classification': "classification_example", // String | 
  'classificationNotation': "classificationNotation_example", // String | 
  'type': "type_example" // String | 
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
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **classification** | **String**|  | [optional] 
 **classificationNotation** | **String**|  | [optional] 
 **type** | **String**|  | [optional] 

### Return type

[**[Element]**](Element.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getElementsFromClassificationDeprecated

> [Element] getElementsFromClassificationDeprecated(cloudPk, ifcPk, modelClassificationPk, projectPk)

Retrieve all elements with the classification

Retrieve all elements with the classification  Required scopes: ifc:read, model:read

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | 
let ifcPk = 56; // Number | A unique integer value identifying this model.
let modelClassificationPk = 56; // Number | A unique integer value identifying this classification.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getElementsFromClassificationDeprecated(cloudPk, ifcPk, modelClassificationPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**|  | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **modelClassificationPk** | **Number**| A unique integer value identifying this classification. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**[Element]**](Element.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getIfcClassificationsDeprecated

> [Classification] getIfcClassificationsDeprecated(cloudPk, ifcPk, projectPk)

Retrieve all classifications in a model

Retrieve all classifications in a model  Required scopes: ifc:read, model:read

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | 
let ifcPk = 56; // Number | 
let projectPk = 56; // Number | 
apiInstance.getIfcClassificationsDeprecated(cloudPk, ifcPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**|  | 
 **ifcPk** | **Number**|  | 
 **projectPk** | **Number**|  | 

### Return type

[**[Classification]**](Classification.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getIfcDeprecated

> Model getIfcDeprecated(cloudPk, id, projectPk)

Retrieve one model

Retrieve one model  Required scopes: ifc:read, model:read

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | 
let id = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | 
apiInstance.getIfcDeprecated(cloudPk, id, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**|  | 
 **id** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**|  | 

### Return type

[**Model**](Model.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getIfcMaterialDeprecated

> Material getIfcMaterialDeprecated(cloudPk, id, ifcPk, projectPk)

Retrieve a material of a model

Retrieve a material of a model  Required scopes: ifc:read, model:read

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this material.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getIfcMaterialDeprecated(cloudPk, id, ifcPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this material. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**Material**](Material.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getIfcMaterialsDeprecated

> [Material] getIfcMaterialsDeprecated(cloudPk, ifcPk, projectPk)

Retrieve all materials of a model

Retrieve all materials of a model.  Required scopes: ifc:read, model:read

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getIfcMaterialsDeprecated(cloudPk, ifcPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**[Material]**](Material.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getIfcPropertiesDeprecated

> [Property] getIfcPropertiesDeprecated(cloudPk, ifcPk, projectPk)

Retrieve all Properties of a model

Retrieve all PropertySets of a model  Required scopes: ifc:read, model:read

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getIfcPropertiesDeprecated(cloudPk, ifcPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**[Property]**](Property.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getIfcPropertyDefinitionDeprecated

> PropertyDefinition getIfcPropertyDefinitionDeprecated(cloudPk, id, ifcPk, projectPk)

Retrieve a PropertyDefinition of a model

Retrieve a PropertyDefinition of a model  Required scopes: ifc:read, model:read

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this property definition.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getIfcPropertyDefinitionDeprecated(cloudPk, id, ifcPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this property definition. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**PropertyDefinition**](PropertyDefinition.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getIfcPropertyDefinitionsDeprecated

> [PropertyDefinition] getIfcPropertyDefinitionsDeprecated(cloudPk, ifcPk, projectPk)

Retrieve all PropertyDefinitions of a model

Retrieve all PropertyDefinitions of a model  Required scopes: ifc:read, model:read

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getIfcPropertyDefinitionsDeprecated(cloudPk, ifcPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**[PropertyDefinition]**](PropertyDefinition.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getIfcPropertyDeprecated

> Property getIfcPropertyDeprecated(cloudPk, id, ifcPk, projectPk)

Retrieve a Property of a model

Retrieve a Property of a model  Required scopes: ifc:read, model:read

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this property.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getIfcPropertyDeprecated(cloudPk, id, ifcPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this property. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**Property**](Property.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getIfcUnitDeprecated

> Unit getIfcUnitDeprecated(cloudPk, id, ifcPk, projectPk)

Retrieve a Unit of a model

Retrieve a Unit of a model  Required scopes: ifc:read, model:read

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this unit.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getIfcUnitDeprecated(cloudPk, id, ifcPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this unit. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**Unit**](Unit.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getIfcUnitsDeprecated

> [Unit] getIfcUnitsDeprecated(cloudPk, ifcPk, projectPk)

Retrieve all Units of a model

Retrieve all Units of a model  Required scopes: ifc:read, model:read

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getIfcUnitsDeprecated(cloudPk, ifcPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**[Unit]**](Unit.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getIfcsDeprecated

> [Model] getIfcsDeprecated(cloudPk, projectPk, opts)

Retrieve all models

Retrieve all models. The field &#x60;type&#x60; allows you to discriminate which kind of model it is.  Required scopes: ifc:read, model:read

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | 
let projectPk = 56; // Number | 
let opts = {
  'source': "source_example", // String | 
  'status': ["null"], // [String] | 
  'type': ["null"] // [String] | 
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
 **cloudPk** | **Number**|  | 
 **projectPk** | **Number**|  | 
 **source** | **String**|  | [optional] 
 **status** | [**[String]**](String.md)|  | [optional] 
 **type** | [**[String]**](String.md)|  | [optional] 

### Return type

[**[Model]**](Model.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLayerDeprecated

> Layer getLayerDeprecated(cloudPk, id, ifcPk, projectPk)

Retrieve a layer of a model

Retrieve a layer of a model  Required scopes: ifc:read, model:read

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this layer.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getLayerDeprecated(cloudPk, id, ifcPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this layer. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**Layer**](Layer.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLayersDeprecated

> [Layer] getLayersDeprecated(cloudPk, ifcPk, projectPk)

Retrieve all layers of a model

Retrieve all layers of a model.  Required scopes: ifc:read, model:read

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getLayersDeprecated(cloudPk, ifcPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**[Layer]**](Layer.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMaterialDeprecated

> Material getMaterialDeprecated(cloudPk, elementUuid, id, ifcPk, projectPk)

Retrieve a material of a model

Retrieve a material of a model  Required scopes: ifc:read, model:read

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let elementUuid = "elementUuid_example"; // String | 
let id = 56; // Number | A unique integer value identifying this material.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getMaterialDeprecated(cloudPk, elementUuid, id, ifcPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **elementUuid** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this material. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**Material**](Material.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMaterialsDeprecated

> [Material] getMaterialsDeprecated(cloudPk, elementUuid, ifcPk, projectPk)

Retrieve all materials of a model

Retrieve all materials of a model.  Required scopes: ifc:read, model:read

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let elementUuid = "elementUuid_example"; // String | 
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getMaterialsDeprecated(cloudPk, elementUuid, ifcPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **elementUuid** | **String**|  | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**[Material]**](Material.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProcessorHandlerDeprecated

> ProcessorHandler getProcessorHandlerDeprecated(cloudPk, id, ifcPk, projectPk)

Retrieve a processor handler

Retrieve a processor handler  Required scopes: ifc:read, model:read

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this processor handler.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getProcessorHandlerDeprecated(cloudPk, id, ifcPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this processor handler. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**ProcessorHandler**](ProcessorHandler.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProcessorHandlersDeprecated

> [ProcessorHandler] getProcessorHandlersDeprecated(cloudPk, ifcPk, projectPk)

Get all processor handlers

Get all processor handlers  Required scopes: ifc:read, model:read

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getProcessorHandlersDeprecated(cloudPk, ifcPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**[ProcessorHandler]**](ProcessorHandler.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPropertySetDeprecated

> PropertySet getPropertySetDeprecated(cloudPk, id, ifcPk, projectPk)

Retrieve a PropertySet of a model

Retrieve a PropertySet of a model  Required scopes: ifc:read, model:read

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this property set.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getPropertySetDeprecated(cloudPk, id, ifcPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this property set. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**PropertySet**](PropertySet.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPropertySetsDeprecated

> [PropertySet] getPropertySetsDeprecated(cloudPk, ifcPk, projectPk)

Retrieve all PropertySets of a model

Retrieve all PropertySets of a model  Required scopes: ifc:read, model:read

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getPropertySetsDeprecated(cloudPk, ifcPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**[PropertySet]**](PropertySet.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRawElementsDeprecated

> RawElements getRawElementsDeprecated(cloudPk, ifcPk, projectPk)

Retrieve all elements in a optimized format

Instead of a nested representation, this route respond with a flat structure and indices pointing to related object. The IFC file will not be updated. The created elements will be accessible over the API and when exporting an IFC file. Returns elements, property_sets, properties, definitions and units in a JSON optimized structure  Required scopes: ifc:read, model:read

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getRawElementsDeprecated(cloudPk, ifcPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**RawElements**](RawElements.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSimpleElementDeprecated

> SimpleElement getSimpleElementDeprecated(cloudPk, ifcPk, projectPk, uuid)

Retrieve an element of a model with a simple value representation

Retrieve an element of a model with a simple value representation  Required scopes: ifc:read, model:read

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let uuid = "uuid_example"; // String | 
apiInstance.getSimpleElementDeprecated(cloudPk, ifcPk, projectPk, uuid).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **uuid** | **String**|  | 

### Return type

[**SimpleElement**](SimpleElement.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSimpleElementsDeprecated

> SimpleElement getSimpleElementsDeprecated(cloudPk, ifcPk, projectPk)

Retrieve all elements of a model with a simple value representation

Retrieve all elements of a model with a simple value representation  Required scopes: ifc:read, model:read

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getSimpleElementsDeprecated(cloudPk, ifcPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**SimpleElement**](SimpleElement.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSpaceDeprecated

> Space getSpaceDeprecated(cloudPk, id, ifcPk, projectPk)

Retrieve one space of the model

Retrieve one space of the model  Required scopes: ifc:read, model:read

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this space.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getSpaceDeprecated(cloudPk, id, ifcPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this space. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**Space**](Space.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSpacesDeprecated

> [Space] getSpacesDeprecated(cloudPk, ifcPk, projectPk)

Retrieve all spaces of the model

Retrieve all spaces of the model  Required scopes: ifc:read, model:read

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getSpacesDeprecated(cloudPk, ifcPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**[Space]**](Space.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getStoreyDeprecated

> Storey getStoreyDeprecated(cloudPk, ifcPk, projectPk, uuid)

Retrieve a storey of a model

Retrieve a storey of a model  Required scopes: ifc:read, model:read

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let uuid = "uuid_example"; // String | 
apiInstance.getStoreyDeprecated(cloudPk, ifcPk, projectPk, uuid).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **uuid** | **String**|  | 

### Return type

[**Storey**](Storey.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getStoreyPlanPositioningDeprecated

> PositioningPlan getStoreyPlanPositioningDeprecated(cloudPk, id, ifcPk, projectPk, storeyUuid)

Retrieve the postioning of the plan in the storey

Retrieve the postioning of the plan in the storey  Required scopes: ifc:read, model:read

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this element.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let storeyUuid = "storeyUuid_example"; // String | 
apiInstance.getStoreyPlanPositioningDeprecated(cloudPk, id, ifcPk, projectPk, storeyUuid).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this element. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **storeyUuid** | **String**|  | 

### Return type

[**PositioningPlan**](PositioningPlan.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getStoreysDeprecated

> [Storey] getStoreysDeprecated(cloudPk, ifcPk, projectPk)

Retrieve all storeys of a model

Retrieve all storeys of a model.  Required scopes: ifc:read, model:read

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getStoreysDeprecated(cloudPk, ifcPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**[Storey]**](Storey.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSystemDeprecated

> System getSystemDeprecated(cloudPk, ifcPk, projectPk, uuid)

Retrieve a system of a model

Retrieve a system of a model  Required scopes: ifc:read, model:read

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let uuid = "uuid_example"; // String | 
apiInstance.getSystemDeprecated(cloudPk, ifcPk, projectPk, uuid).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **uuid** | **String**|  | 

### Return type

[**System**](System.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSystemsDeprecated

> [System] getSystemsDeprecated(cloudPk, ifcPk, projectPk)

Retrieve all systems of a model

Retrieve all systems of a model.  Required scopes: ifc:read, model:read

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getSystemsDeprecated(cloudPk, ifcPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**[System]**](System.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTilesetDeprecated

> getTilesetDeprecated(cloudPk, id, projectPk, opts)

Retrieve the tileset of the model

This is only availble if the model is a POINT_CLOUD  Required scopes: ifc:read, model:read

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | 
let id = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | 
let opts = {
  'tileFormat': "'pnts'" // String | 
};
apiInstance.getTilesetDeprecated(cloudPk, id, projectPk, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**|  | 
 **id** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**|  | 
 **tileFormat** | **String**|  | [optional] [default to &#39;pnts&#39;]

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getZoneDeprecated

> Zone getZoneDeprecated(cloudPk, id, ifcPk, projectPk)

Retrieve one zone of a model

Retrieve one zone of a model  Required scopes: ifc:read, model:read

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this zone.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getZoneDeprecated(cloudPk, id, ifcPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this zone. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**Zone**](Zone.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getZoneSpaceDeprecated

> ZoneSpace getZoneSpaceDeprecated(cloudPk, id, ifcPk, projectPk, zonePk)

Retrieve one space of a zone

Retrieve one space of a zone  Required scopes: ifc:read, model:read

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this space.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let zonePk = 56; // Number | A unique integer value identifying this zone.
apiInstance.getZoneSpaceDeprecated(cloudPk, id, ifcPk, projectPk, zonePk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this space. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **zonePk** | **Number**| A unique integer value identifying this zone. | 

### Return type

[**ZoneSpace**](ZoneSpace.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getZoneSpacesDeprecated

> [ZoneSpace] getZoneSpacesDeprecated(cloudPk, ifcPk, projectPk, zonePk)

Retrieve all spaces of a zone

Retrieve all spaces of a zone  Required scopes: ifc:read, model:read

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let zonePk = 56; // Number | A unique integer value identifying this zone.
apiInstance.getZoneSpacesDeprecated(cloudPk, ifcPk, projectPk, zonePk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **zonePk** | **Number**| A unique integer value identifying this zone. | 

### Return type

[**[ZoneSpace]**](ZoneSpace.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getZonesDeprecated

> [Zone] getZonesDeprecated(cloudPk, ifcPk, projectPk, opts)

Retrieve zones of a model

Retrieve parent zones of a model. Children zones we&#39;ll be in the &#39;zones&#39; field  Required scopes: ifc:read, model:read

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let opts = {
  'color': "color_example" // String | 
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
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **color** | **String**|  | [optional] 

### Return type

[**[Zone]**](Zone.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## launchNewCheckDeprecated

> launchNewCheckDeprecated(cloudPk, id, ifcPk, projectPk, opts)

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this ifc checker.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let opts = {
  'ifcCheckerRequest': new bimdata.IfcCheckerRequest() // IfcCheckerRequest | 
};
apiInstance.launchNewCheckDeprecated(cloudPk, id, ifcPk, projectPk, opts).then(() => {
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
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **ifcCheckerRequest** | [**IfcCheckerRequest**](IfcCheckerRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: Not defined


## linkDocumentsOfElementDeprecated

> [Document] linkDocumentsOfElementDeprecated(cloudPk, elementUuid, ifcPk, projectPk, requestBody)

Link one or many documents to an element

 Bulk relation create available. You can either post an id or a list of ids. Is you post a list, the response will be a list (in the same order) of created relation or of errors if any If at least one create succeeded, the status code will be 201. If every create failed, the status code we&#39;ll be 400 with the list of errors   Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let elementUuid = "elementUuid_example"; // String | 
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let requestBody = [null]; // [Number] | 
apiInstance.linkDocumentsOfElementDeprecated(cloudPk, elementUuid, ifcPk, projectPk, requestBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **elementUuid** | **String**|  | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **requestBody** | [**[Number]**](Number.md)|  | 

### Return type

[**[Document]**](Document.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## listClassificationElementRelationsDeprecated

> [ElementClassificationRelation] listClassificationElementRelationsDeprecated(cloudPk, ifcPk, projectPk)

List all associations between classifications and elements

List all associations between classifications and elements  Required scopes: ifc:read, model:read

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | 
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.listClassificationElementRelationsDeprecated(cloudPk, ifcPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**|  | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**[ElementClassificationRelation]**](ElementClassificationRelation.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## mergeIfcsDeprecated

> mergeIfcsDeprecated(cloudPk, projectPk, ifcMergeRequest)

Merge IFC files

Only works for IFC files. Merge IFC files. The merged IFC file will be put in the same folder that the first IFC of the list  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | 
let projectPk = 56; // Number | 
let ifcMergeRequest = new bimdata.IfcMergeRequest(); // IfcMergeRequest | 
apiInstance.mergeIfcsDeprecated(cloudPk, projectPk, ifcMergeRequest).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**|  | 
 **projectPk** | **Number**|  | 
 **ifcMergeRequest** | [**IfcMergeRequest**](IfcMergeRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: Not defined


## optimizeIfcDeprecated

> optimizeIfcDeprecated(cloudPk, id, projectPk, opts)

Optimize the IFC

Only works for IFC files. Optimize the IFC. A new optimized IFC file will be put in the same folder that the original IFC  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | 
let id = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | 
let opts = {
  'ifcOptimizeRequest': new bimdata.IfcOptimizeRequest() // IfcOptimizeRequest | 
};
apiInstance.optimizeIfcDeprecated(cloudPk, id, projectPk, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**|  | 
 **id** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**|  | 
 **ifcOptimizeRequest** | [**IfcOptimizeRequest**](IfcOptimizeRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: Not defined


## removeAllElementPropertySetDeprecated

> removeAllElementPropertySetDeprecated(cloudPk, elementUuid, ifcPk, projectPk)

Remove all property sets from element

Remove all property sets from element. Property Sets will not be deleted, just detached from element  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let elementUuid = "elementUuid_example"; // String | 
let ifcPk = 56; // Number | 
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.removeAllElementPropertySetDeprecated(cloudPk, elementUuid, ifcPk, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **elementUuid** | **String**|  | 
 **ifcPk** | **Number**|  | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## removeClassificationOfElementDeprecated

> removeClassificationOfElementDeprecated(cloudPk, elementUuid, id, ifcPk, projectPk)

Remove a classification from an element

The classification will not be deleted  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let elementUuid = "elementUuid_example"; // String | 
let id = 56; // Number | A unique integer value identifying this classification.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.removeClassificationOfElementDeprecated(cloudPk, elementUuid, id, ifcPk, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **elementUuid** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this classification. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## removeDocumentOfElementDeprecated

> removeDocumentOfElementDeprecated(cloudPk, elementUuid, id, ifcPk, projectPk)

Remove a documents from an element

The document will not be deleted  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let elementUuid = "elementUuid_example"; // String | 
let id = 56; // Number | A unique integer value identifying this document.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.removeDocumentOfElementDeprecated(cloudPk, elementUuid, id, ifcPk, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **elementUuid** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this document. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## removeElementPropertySetDeprecated

> removeElementPropertySetDeprecated(cloudPk, elementUuid, id, ifcPk, projectPk)

Remove a PropertySet from an element

Delete the relation between the element and the property set. Does not delete any object  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let elementUuid = "elementUuid_example"; // String | 
let id = 56; // Number | A unique integer value identifying this property set.
let ifcPk = 56; // Number | 
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.removeElementPropertySetDeprecated(cloudPk, elementUuid, id, ifcPk, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **elementUuid** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this property set. | 
 **ifcPk** | **Number**|  | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## removeElementPropertySetPropertyDefinitionDeprecated

> removeElementPropertySetPropertyDefinitionDeprecated(cloudPk, elementUuid, id, ifcPk, projectPk, propertyPk, propertysetPk)

Delete a Definition to a Property

Delete a Definition to a Property  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let elementUuid = "elementUuid_example"; // String | 
let id = 56; // Number | A unique integer value identifying this property definition.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let propertyPk = 56; // Number | A unique integer value identifying this property.
let propertysetPk = 56; // Number | A unique integer value identifying this property set.
apiInstance.removeElementPropertySetPropertyDefinitionDeprecated(cloudPk, elementUuid, id, ifcPk, projectPk, propertyPk, propertysetPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **elementUuid** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this property definition. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **propertyPk** | **Number**| A unique integer value identifying this property. | 
 **propertysetPk** | **Number**| A unique integer value identifying this property set. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## removeElementPropertySetPropertyDefinitionUnitDeprecated

> removeElementPropertySetPropertyDefinitionUnitDeprecated(cloudPk, elementUuid, id, ifcPk, projectPk, propertyPk, propertydefinitionPk, propertysetPk)

Remove a Unit from a Definition

Remove a Unit from a Definition  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let elementUuid = "elementUuid_example"; // String | 
let id = 56; // Number | A unique integer value identifying this unit.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let propertyPk = 56; // Number | A unique integer value identifying this property.
let propertydefinitionPk = 56; // Number | A unique integer value identifying this property definition.
let propertysetPk = 56; // Number | A unique integer value identifying this property set.
apiInstance.removeElementPropertySetPropertyDefinitionUnitDeprecated(cloudPk, elementUuid, id, ifcPk, projectPk, propertyPk, propertydefinitionPk, propertysetPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **elementUuid** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this unit. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **propertyPk** | **Number**| A unique integer value identifying this property. | 
 **propertydefinitionPk** | **Number**| A unique integer value identifying this property definition. | 
 **propertysetPk** | **Number**| A unique integer value identifying this property set. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## removeElementPropertySetPropertyDeprecated

> removeElementPropertySetPropertyDeprecated(cloudPk, elementUuid, id, ifcPk, projectPk, propertysetPk)

Remove a property from a PropertySet

Remove a property from a PropertySet  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let elementUuid = "elementUuid_example"; // String | 
let id = 56; // Number | A unique integer value identifying this property.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let propertysetPk = 56; // Number | A unique integer value identifying this property set.
apiInstance.removeElementPropertySetPropertyDeprecated(cloudPk, elementUuid, id, ifcPk, projectPk, propertysetPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **elementUuid** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this property. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **propertysetPk** | **Number**| A unique integer value identifying this property set. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## removeElementsFromClassificationDeprecated

> removeElementsFromClassificationDeprecated(cloudPk, ifcPk, modelClassificationPk, projectPk, uuid)

Remove the classification from all elements

Remove the classification from all elements. No element nor classification will be deleted  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | 
let ifcPk = 56; // Number | A unique integer value identifying this model.
let modelClassificationPk = 56; // Number | A unique integer value identifying this classification.
let projectPk = 56; // Number | A unique integer value identifying this project.
let uuid = "uuid_example"; // String | 
apiInstance.removeElementsFromClassificationDeprecated(cloudPk, ifcPk, modelClassificationPk, projectPk, uuid).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**|  | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **modelClassificationPk** | **Number**| A unique integer value identifying this classification. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **uuid** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## reprocessIfcDeprecated

> reprocessIfcDeprecated(cloudPk, id, projectPk)

Reprocess Model file

Reprocess the model. All data that are not in the original model files will be lost  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | 
let id = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | 
apiInstance.reprocessIfcDeprecated(cloudPk, id, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**|  | 
 **id** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## updateAccessTokenDeprecated

> IfcAccessToken updateAccessTokenDeprecated(cloudPk, ifcPk, projectPk, token, opts)

Update some fields of a token

You can update the expiration date or the read_only field  Required scopes: ifc:token_manage, model:token_manage

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let token = "token_example"; // String | 
let opts = {
  'patchedIfcAccessTokenRequest': new bimdata.PatchedIfcAccessTokenRequest() // PatchedIfcAccessTokenRequest | 
};
apiInstance.updateAccessTokenDeprecated(cloudPk, ifcPk, projectPk, token, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **token** | **String**|  | 
 **patchedIfcAccessTokenRequest** | [**PatchedIfcAccessTokenRequest**](PatchedIfcAccessTokenRequest.md)|  | [optional] 

### Return type

[**IfcAccessToken**](IfcAccessToken.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## updateBuildingDeprecated

> Building updateBuildingDeprecated(cloudPk, ifcPk, projectPk, uuid, opts)

Update some fields of a building

Update some fields of a building  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let uuid = "uuid_example"; // String | 
let opts = {
  'patchedStoreyBuildingRequest': new bimdata.PatchedStoreyBuildingRequest() // PatchedStoreyBuildingRequest | 
};
apiInstance.updateBuildingDeprecated(cloudPk, ifcPk, projectPk, uuid, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **uuid** | **String**|  | 
 **patchedStoreyBuildingRequest** | [**PatchedStoreyBuildingRequest**](PatchedStoreyBuildingRequest.md)|  | [optional] 

### Return type

[**Building**](Building.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## updateBuildingPlanPositioningDeprecated

> PositioningPlan updateBuildingPlanPositioningDeprecated(buildingUuid, cloudPk, id, ifcPk, projectPk, opts)

Update the postioning of the plan in the building

Update the postioning of the plan in the building  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let buildingUuid = "buildingUuid_example"; // String | 
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this element.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let opts = {
  'patchedPositioningPlanRequest': new bimdata.PatchedPositioningPlanRequest() // PatchedPositioningPlanRequest | 
};
apiInstance.updateBuildingPlanPositioningDeprecated(buildingUuid, cloudPk, id, ifcPk, projectPk, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buildingUuid** | **String**|  | 
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this element. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **patchedPositioningPlanRequest** | [**PatchedPositioningPlanRequest**](PatchedPositioningPlanRequest.md)|  | [optional] 

### Return type

[**PositioningPlan**](PositioningPlan.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## updateCheckerDeprecated

> IfcChecker updateCheckerDeprecated(cloudPk, id, ifcPk, projectPk, opts)

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this ifc checker.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let opts = {
  'patchedIfcCheckerRequest': new bimdata.PatchedIfcCheckerRequest() // PatchedIfcCheckerRequest | 
};
apiInstance.updateCheckerDeprecated(cloudPk, id, ifcPk, projectPk, opts).then((data) => {
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
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **patchedIfcCheckerRequest** | [**PatchedIfcCheckerRequest**](PatchedIfcCheckerRequest.md)|  | [optional] 

### Return type

[**IfcChecker**](IfcChecker.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## updateCheckerResultDeprecated

> CheckerResult updateCheckerResultDeprecated(checkerPk, cloudPk, id, ifcPk, projectPk, opts)

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

let apiInstance = new bimdata.IfcApi();
let checkerPk = 56; // Number | A unique integer value identifying this ifc checker.
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this checker result.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let opts = {
  'patchedCheckerResultRequest': new bimdata.PatchedCheckerResultRequest() // PatchedCheckerResultRequest | 
};
apiInstance.updateCheckerResultDeprecated(checkerPk, cloudPk, id, ifcPk, projectPk, opts).then((data) => {
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
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **patchedCheckerResultRequest** | [**PatchedCheckerResultRequest**](PatchedCheckerResultRequest.md)|  | [optional] 

### Return type

[**CheckerResult**](CheckerResult.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## updateElementDeprecated

> Element updateElementDeprecated(cloudPk, ifcPk, projectPk, uuid, opts)

Update some fields of an element

Update some fields of an element. The IFC file will not be updated. The created element will be accessible over the API and when exporting an IFC file  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let uuid = "uuid_example"; // String | 
let opts = {
  'patchedElementRequest': new bimdata.PatchedElementRequest() // PatchedElementRequest | 
};
apiInstance.updateElementDeprecated(cloudPk, ifcPk, projectPk, uuid, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **uuid** | **String**|  | 
 **patchedElementRequest** | [**PatchedElementRequest**](PatchedElementRequest.md)|  | [optional] 

### Return type

[**Element**](Element.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## updateElementPropertySetPropertyDeprecated

> Property updateElementPropertySetPropertyDeprecated(cloudPk, elementUuid, id, ifcPk, projectPk, propertysetPk, opts)

Update a property from an element

Update a property value from an element. If the element is the only one to have this property, the property will be update in place. If many elements share this property, a new property will be created to replace the property for this element. Keeping the property for all other elements. If you want to update the property of all elements, see updateIfcProperty  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let elementUuid = "elementUuid_example"; // String | 
let id = 56; // Number | A unique integer value identifying this property.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let propertysetPk = 56; // Number | A unique integer value identifying this property set.
let opts = {
  'patchedPropertyRequest': new bimdata.PatchedPropertyRequest() // PatchedPropertyRequest | 
};
apiInstance.updateElementPropertySetPropertyDeprecated(cloudPk, elementUuid, id, ifcPk, projectPk, propertysetPk, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **elementUuid** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this property. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **propertysetPk** | **Number**| A unique integer value identifying this property set. | 
 **patchedPropertyRequest** | [**PatchedPropertyRequest**](PatchedPropertyRequest.md)|  | [optional] 

### Return type

[**Property**](Property.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## updateIfcDeprecated

> Model updateIfcDeprecated(cloudPk, id, projectPk, opts)

Update some fields of a model

Update some fields of a model  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | 
let id = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | 
let opts = {
  'patchedModelRequest': new bimdata.PatchedModelRequest() // PatchedModelRequest | 
};
apiInstance.updateIfcDeprecated(cloudPk, id, projectPk, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**|  | 
 **id** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**|  | 
 **patchedModelRequest** | [**PatchedModelRequest**](PatchedModelRequest.md)|  | [optional] 

### Return type

[**Model**](Model.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## updateIfcFilesDeprecated

> ModelFiles updateIfcFilesDeprecated(cloudPk, id, projectPk, opts)

Update models file (gltf, svg, structure, etc)

This route does not accept JSON, only files as x-www-form-urlencoded  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | 
let id = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | 
let opts = {
  'structureFile': "/path/to/file", // File | 
  'systemsFile': "/path/to/file", // File | 
  'mapFile': "/path/to/file", // File | 
  'gltfFile': "/path/to/file", // File | 
  'previewFile': "/path/to/file", // File | 
  'xktFile': "/path/to/file", // File | 
  'binary2dFile': "/path/to/file" // File | 
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
 **cloudPk** | **Number**|  | 
 **id** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**|  | 
 **structureFile** | **File**|  | [optional] 
 **systemsFile** | **File**|  | [optional] 
 **mapFile** | **File**|  | [optional] 
 **gltfFile** | **File**|  | [optional] 
 **previewFile** | **File**|  | [optional] 
 **xktFile** | **File**|  | [optional] 
 **binary2dFile** | **File**|  | [optional] 

### Return type

[**ModelFiles**](ModelFiles.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: multipart/form-data, application/x-www-form-urlencoded
- **Accept**: application/json


## updateIfcPropertyDefinitionDeprecated

> PropertyDefinition updateIfcPropertyDefinitionDeprecated(cloudPk, id, ifcPk, projectPk, opts)

Update some fields of many PropertyDefinitions of a model

Update some fields of many PropertyDefinitions of a model  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this property definition.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let opts = {
  'patchedPropertyDefinitionRequest': new bimdata.PatchedPropertyDefinitionRequest() // PatchedPropertyDefinitionRequest | 
};
apiInstance.updateIfcPropertyDefinitionDeprecated(cloudPk, id, ifcPk, projectPk, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this property definition. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **patchedPropertyDefinitionRequest** | [**PatchedPropertyDefinitionRequest**](PatchedPropertyDefinitionRequest.md)|  | [optional] 

### Return type

[**PropertyDefinition**](PropertyDefinition.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## updateIfcPropertyDeprecated

> Property updateIfcPropertyDeprecated(cloudPk, id, ifcPk, projectPk, opts)

Update some fields of a Property

Update some fields of a Property  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this property.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let opts = {
  'patchedPropertyRequest': new bimdata.PatchedPropertyRequest() // PatchedPropertyRequest | 
};
apiInstance.updateIfcPropertyDeprecated(cloudPk, id, ifcPk, projectPk, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this property. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **patchedPropertyRequest** | [**PatchedPropertyRequest**](PatchedPropertyRequest.md)|  | [optional] 

### Return type

[**Property**](Property.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## updateIfcUnitDeprecated

> Unit updateIfcUnitDeprecated(cloudPk, id, ifcPk, projectPk, opts)

Update some fields of a Unit of a model

Update some fields of a Unit of a model  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this unit.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let opts = {
  'patchedUnitRequest': new bimdata.PatchedUnitRequest() // PatchedUnitRequest | 
};
apiInstance.updateIfcUnitDeprecated(cloudPk, id, ifcPk, projectPk, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this unit. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **patchedUnitRequest** | [**PatchedUnitRequest**](PatchedUnitRequest.md)|  | [optional] 

### Return type

[**Unit**](Unit.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## updateLayerDeprecated

> Layer updateLayerDeprecated(cloudPk, id, ifcPk, projectPk, opts)

Update some fields of a layer

Update some fields of a layer. The IFC file will not be updated. The created layer will be accessible over the API and when exporting an IFC file  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this layer.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let opts = {
  'patchedLayerRequest': new bimdata.PatchedLayerRequest() // PatchedLayerRequest | 
};
apiInstance.updateLayerDeprecated(cloudPk, id, ifcPk, projectPk, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this layer. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **patchedLayerRequest** | [**PatchedLayerRequest**](PatchedLayerRequest.md)|  | [optional] 

### Return type

[**Layer**](Layer.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## updateOrderBuildingPlanDeprecated

> Storey updateOrderBuildingPlanDeprecated(buildingUuid, cloudPk, ifcPk, projectPk, requestBody)

Update order of all plan of a building

Update order of all plan of a building  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let buildingUuid = "buildingUuid_example"; // String | 
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let requestBody = [null]; // [Number] | 
apiInstance.updateOrderBuildingPlanDeprecated(buildingUuid, cloudPk, ifcPk, projectPk, requestBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buildingUuid** | **String**|  | 
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **requestBody** | [**[Number]**](Number.md)|  | 

### Return type

[**Storey**](Storey.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## updateOrderStoreyPlanDeprecated

> Storey updateOrderStoreyPlanDeprecated(cloudPk, ifcPk, projectPk, storeyUuid, requestBody)

Update order of all plan of a storey

Update order of all plan of a storey  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let storeyUuid = "storeyUuid_example"; // String | 
let requestBody = [null]; // [Number] | 
apiInstance.updateOrderStoreyPlanDeprecated(cloudPk, ifcPk, projectPk, storeyUuid, requestBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **storeyUuid** | **String**|  | 
 **requestBody** | [**[Number]**](Number.md)|  | 

### Return type

[**Storey**](Storey.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## updateOrderStoreysDeprecated

> [Storey] updateOrderStoreysDeprecated(cloudPk, ifcPk, projectPk, requestBody)

Update order of all storey of a model

Update order of all storey of a model  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let requestBody = ["null"]; // [String] | 
apiInstance.updateOrderStoreysDeprecated(cloudPk, ifcPk, projectPk, requestBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **requestBody** | [**[String]**](String.md)|  | 

### Return type

[**[Storey]**](Storey.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## updateProcessorHandlerDeprecated

> ProcessorHandler updateProcessorHandlerDeprecated(cloudPk, id, ifcPk, projectPk, opts)

Update the status of a processor handler

Update the status of a processor handler  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this processor handler.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let opts = {
  'patchedProcessorHandlerRequest': new bimdata.PatchedProcessorHandlerRequest() // PatchedProcessorHandlerRequest | 
};
apiInstance.updateProcessorHandlerDeprecated(cloudPk, id, ifcPk, projectPk, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this processor handler. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **patchedProcessorHandlerRequest** | [**PatchedProcessorHandlerRequest**](PatchedProcessorHandlerRequest.md)|  | [optional] 

### Return type

[**ProcessorHandler**](ProcessorHandler.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## updatePropertySetDeprecated

> PropertySet updatePropertySetDeprecated(cloudPk, id, ifcPk, projectPk, opts)

Update some fields of a PropertySet

Update some fields of a PropertySet  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this property set.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let opts = {
  'patchedPropertySetRequest': new bimdata.PatchedPropertySetRequest() // PatchedPropertySetRequest | 
};
apiInstance.updatePropertySetDeprecated(cloudPk, id, ifcPk, projectPk, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this property set. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **patchedPropertySetRequest** | [**PatchedPropertySetRequest**](PatchedPropertySetRequest.md)|  | [optional] 

### Return type

[**PropertySet**](PropertySet.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## updateSpaceDeprecated

> Space updateSpaceDeprecated(cloudPk, id, ifcPk, projectPk, opts)

Update some fields of a space

Update some fields of a space. The IFC file will not be updated. The created space will be accessible over the API and when exporting an IFC file  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this space.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let opts = {
  'patchedSpaceRequest': new bimdata.PatchedSpaceRequest() // PatchedSpaceRequest | 
};
apiInstance.updateSpaceDeprecated(cloudPk, id, ifcPk, projectPk, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this space. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **patchedSpaceRequest** | [**PatchedSpaceRequest**](PatchedSpaceRequest.md)|  | [optional] 

### Return type

[**Space**](Space.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## updateStoreyDeprecated

> Storey updateStoreyDeprecated(cloudPk, ifcPk, projectPk, uuid, opts)

Update some fields of a storey

Update some fields of a storey  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let uuid = "uuid_example"; // String | 
let opts = {
  'patchedStoreyBuildingRequest': new bimdata.PatchedStoreyBuildingRequest() // PatchedStoreyBuildingRequest | 
};
apiInstance.updateStoreyDeprecated(cloudPk, ifcPk, projectPk, uuid, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **uuid** | **String**|  | 
 **patchedStoreyBuildingRequest** | [**PatchedStoreyBuildingRequest**](PatchedStoreyBuildingRequest.md)|  | [optional] 

### Return type

[**Storey**](Storey.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## updateStoreyPlanPositioningDeprecated

> PositioningPlan updateStoreyPlanPositioningDeprecated(cloudPk, id, ifcPk, projectPk, storeyUuid, opts)

Update the postioning of the plan in the storey

Update the postioning of the plan in the storey  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this element.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let storeyUuid = "storeyUuid_example"; // String | 
let opts = {
  'patchedPositioningPlanRequest': new bimdata.PatchedPositioningPlanRequest() // PatchedPositioningPlanRequest | 
};
apiInstance.updateStoreyPlanPositioningDeprecated(cloudPk, id, ifcPk, projectPk, storeyUuid, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this element. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **storeyUuid** | **String**|  | 
 **patchedPositioningPlanRequest** | [**PatchedPositioningPlanRequest**](PatchedPositioningPlanRequest.md)|  | [optional] 

### Return type

[**PositioningPlan**](PositioningPlan.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## updateSystemDeprecated

> System updateSystemDeprecated(cloudPk, ifcPk, projectPk, uuid, opts)

Update some fields of a system

Update some fields of a system. The IFC file will not be updated. The created system will be accessible over the API and when exporting an IFC file  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let uuid = "uuid_example"; // String | 
let opts = {
  'patchedSystemRequest': new bimdata.PatchedSystemRequest() // PatchedSystemRequest | 
};
apiInstance.updateSystemDeprecated(cloudPk, ifcPk, projectPk, uuid, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **uuid** | **String**|  | 
 **patchedSystemRequest** | [**PatchedSystemRequest**](PatchedSystemRequest.md)|  | [optional] 

### Return type

[**System**](System.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## updateZoneDeprecated

> Zone updateZoneDeprecated(cloudPk, id, ifcPk, projectPk, opts)

Update some fields of a zone

Update some fields of a zone. The IFC file will not be updated. The created zone will be accessible over the API and when exporting an IFC file  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this zone.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let opts = {
  'patchedZoneRequest': new bimdata.PatchedZoneRequest() // PatchedZoneRequest | 
};
apiInstance.updateZoneDeprecated(cloudPk, id, ifcPk, projectPk, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this zone. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **patchedZoneRequest** | [**PatchedZoneRequest**](PatchedZoneRequest.md)|  | [optional] 

### Return type

[**Zone**](Zone.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## updateZoneSpaceDeprecated

> ZoneSpace updateZoneSpaceDeprecated(cloudPk, id, ifcPk, projectPk, zonePk, opts)

Update some fields of a space

Update some fields of a space. The IFC file will not be updated. The created space will be accessible over the API and when exporting an IFC file  Required scopes: ifc:write, model:write

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

let apiInstance = new bimdata.IfcApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this space.
let ifcPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let zonePk = 56; // Number | A unique integer value identifying this zone.
let opts = {
  'patchedZoneSpaceRequest': new bimdata.PatchedZoneSpaceRequest() // PatchedZoneSpaceRequest | 
};
apiInstance.updateZoneSpaceDeprecated(cloudPk, id, ifcPk, projectPk, zonePk, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this space. | 
 **ifcPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **zonePk** | **Number**| A unique integer value identifying this zone. | 
 **patchedZoneSpaceRequest** | [**PatchedZoneSpaceRequest**](PatchedZoneSpaceRequest.md)|  | [optional] 

### Return type

[**ZoneSpace**](ZoneSpace.md)

### Authorization

[ApiKey](../README.md#ApiKey), [BIMData_Connect](../README.md#BIMData_Connect), [BIMData_Connect](../README.md#BIMData_Connect), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


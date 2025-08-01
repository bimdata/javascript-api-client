# bimdata.ModelApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addModelErrors**](ModelApi.md#addModelErrors) | **POST** /cloud/{cloud_pk}/project/{project_pk}/model/{id}/errors | Add errors to model
[**addZoneSpace**](ModelApi.md#addZoneSpace) | **POST** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/zone/{zone_pk}/space/add | Add a space to a zone
[**bulkDeleteModelClassifications**](ModelApi.md#bulkDeleteModelClassifications) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/classification/list_destroy | Remove all classifications from model&#39;s elements
[**bulkDeleteModelProperties**](ModelApi.md#bulkDeleteModelProperties) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/property/bulk_destroy | Delete many Property of a model
[**bulkDeleteModelPropertyDefinitions**](ModelApi.md#bulkDeleteModelPropertyDefinitions) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/propertydefinition/bulk_destroy | Delete many PropertyDefinitions of a model
[**bulkDeleteModelUnits**](ModelApi.md#bulkDeleteModelUnits) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/unit/bulk_destroy | Delete many Units of a model
[**bulkDeletePropertySet**](ModelApi.md#bulkDeletePropertySet) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/propertyset/bulk_destroy | Delete many PropertySet of a model
[**bulkFullUpdateElements**](ModelApi.md#bulkFullUpdateElements) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/element/bulk_update | Update many elements at once (only changing fields may be defined)
[**bulkFullUpdateModelProperty**](ModelApi.md#bulkFullUpdateModelProperty) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/property/bulk_update | Update some fields of many properties of a model
[**bulkRemoveClassificationsOfElement**](ModelApi.md#bulkRemoveClassificationsOfElement) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/element/{element_uuid}/classification/bulk_destroy | Remove many classifications from an element
[**bulkRemoveDocumentsOfElement**](ModelApi.md#bulkRemoveDocumentsOfElement) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/element/{element_uuid}/documents/bulk_destroy | Remove many documents from an element
[**bulkRemoveElementsFromClassification**](ModelApi.md#bulkRemoveElementsFromClassification) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/classification/{model_classification_pk}/element/bulk_destroy | Remove the classifications from all elements
[**bulkUpdateElements**](ModelApi.md#bulkUpdateElements) | **PUT** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/element/bulk_update | Update many elements at once (all field must be defined)
[**bulkUpdateModelProperty**](ModelApi.md#bulkUpdateModelProperty) | **PUT** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/property/bulk_update | Update all fields of many properties of a model
[**createAccessToken**](ModelApi.md#createAccessToken) | **POST** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/access_token | Create a token for this model
[**createBuilding**](ModelApi.md#createBuilding) | **POST** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/building | Create a building of a model
[**createBuildingPlan**](ModelApi.md#createBuildingPlan) | **POST** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/building/{building_uuid}/plan/add | Create a relation between a 2d model and a building
[**createClassificationElementRelations**](ModelApi.md#createClassificationElementRelations) | **POST** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/classification-element | Create association between existing classification and existing element
[**createClassificationsOfElement**](ModelApi.md#createClassificationsOfElement) | **POST** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/element/{element_uuid}/classification | Create one or many classifications to an element
[**createDrawing**](ModelApi.md#createDrawing) | **POST** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/drawing | Create a drawing in the model
[**createElement**](ModelApi.md#createElement) | **POST** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/element | Create an element in the model
[**createElementPropertySet**](ModelApi.md#createElementPropertySet) | **POST** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/element/{element_uuid}/propertyset | Create a PropertySets to an element
[**createElementPropertySetProperty**](ModelApi.md#createElementPropertySetProperty) | **POST** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/element/{element_uuid}/propertyset/{propertyset_pk}/property | Create a property to a PropertySet
[**createElementPropertySetPropertyDefinition**](ModelApi.md#createElementPropertySetPropertyDefinition) | **POST** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/element/{element_uuid}/propertyset/{propertyset_pk}/property/{property_pk}/propertydefinition | Create a Definition to a Property
[**createElementPropertySetPropertyDefinitionUnit**](ModelApi.md#createElementPropertySetPropertyDefinitionUnit) | **POST** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/element/{element_uuid}/propertyset/{propertyset_pk}/property/{property_pk}/propertydefinition/{propertydefinition_pk}/unit | Create a Unit to a Definition
[**createLabel**](ModelApi.md#createLabel) | **POST** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/label | Create a label in the model
[**createLayer**](ModelApi.md#createLayer) | **POST** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/layer | Create a layer in the model
[**createMask2D**](ModelApi.md#createMask2D) | **PUT** /cloud/{cloud_pk}/project/{project_pk}/model/{id}/mask-2d | Create or update a 2D mask for the model
[**createMetaBuilding**](ModelApi.md#createMetaBuilding) | **POST** /cloud/{cloud_pk}/project/{project_pk}/model/create-metabuilding | Create an empty 3D Model
[**createModel**](ModelApi.md#createModel) | **POST** /cloud/{cloud_pk}/project/{project_pk}/model/create-model | Make a PDF or Image file a Model
[**createModelPropertyDefinition**](ModelApi.md#createModelPropertyDefinition) | **POST** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/propertydefinition | Create a PropertyDefinition on the model
[**createModelUnit**](ModelApi.md#createModelUnit) | **POST** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/unit | Create a Unit on a model
[**createMultiPageModel**](ModelApi.md#createMultiPageModel) | **POST** /cloud/{cloud_pk}/project/{project_pk}/model/{id}/create-multipage-model | Create a multi page model
[**createPhotosphere**](ModelApi.md#createPhotosphere) | **POST** /cloud/{cloud_pk}/project/{project_pk}/model/create-photosphere | Create a photopshere model from an image file
[**createPhotosphereBuilding**](ModelApi.md#createPhotosphereBuilding) | **POST** /cloud/{cloud_pk}/project/{project_pk}/model/create-photosphere-building | Create an empty Photosphere Building Model
[**createPropertySet**](ModelApi.md#createPropertySet) | **POST** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/propertyset | Create one or many PropertySet
[**createPropertySetElementRelations**](ModelApi.md#createPropertySetElementRelations) | **POST** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/propertyset-element | Create association between PropertySet and element
[**createRawElements**](ModelApi.md#createRawElements) | **POST** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/element/raw | Create elements in an optimized format
[**createSpace**](ModelApi.md#createSpace) | **POST** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/space | Create a space in the model
[**createStorey**](ModelApi.md#createStorey) | **POST** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/storey | Create a storey of a model
[**createStoreyPlan**](ModelApi.md#createStoreyPlan) | **POST** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/storey/{storey_uuid}/plan/add | Create a relation between a 2d model and a storey
[**createSystem**](ModelApi.md#createSystem) | **POST** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/system | Create a system in the model
[**createTileset**](ModelApi.md#createTileset) | **POST** /cloud/{cloud_pk}/project/{project_pk}/model/{id}/tileset | Create the tileset of the model and upload all files
[**createXktFile**](ModelApi.md#createXktFile) | **POST** /cloud/{cloud_pk}/project/{project_pk}/model/{id}/xkt-file | Create an xkt file for the model. Overrides existing file with same version
[**createZone**](ModelApi.md#createZone) | **POST** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/zone | Create a zone in the model
[**createZoneSpace**](ModelApi.md#createZoneSpace) | **POST** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/zone/{zone_pk}/space | Create a space in a zone
[**deleteAccessToken**](ModelApi.md#deleteAccessToken) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/access_token/{token} | Delete a token
[**deleteBuilding**](ModelApi.md#deleteBuilding) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/building/{uuid} | Delete a building of a model
[**deleteBuildingPlan**](ModelApi.md#deleteBuildingPlan) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/building/{building_uuid}/plan/{id} | Delete the relation between a 2d model and a building
[**deleteDrawing**](ModelApi.md#deleteDrawing) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/drawing/{id} | Delete a drawing of a model
[**deleteElement**](ModelApi.md#deleteElement) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/element/{uuid} | Delete an element of a model
[**deleteLabel**](ModelApi.md#deleteLabel) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/label/{id} | Delete a label
[**deleteLayer**](ModelApi.md#deleteLayer) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/layer/{id} | Delete a layer of a model
[**deleteMask2D**](ModelApi.md#deleteMask2D) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/model/{id}/mask-2d | Delete the 2D mask for the model
[**deleteModel**](ModelApi.md#deleteModel) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/model/{id} | Delete a model
[**deleteModelProperty**](ModelApi.md#deleteModelProperty) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/property/{id} | Delete a Property of a model
[**deleteModelPropertyDefinition**](ModelApi.md#deleteModelPropertyDefinition) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/propertydefinition/{id} | Delete a PropertyDefinitions of a model
[**deleteModelUnit**](ModelApi.md#deleteModelUnit) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/unit/{id} | Delete a Unit of a model
[**deleteModelWithoutDoc**](ModelApi.md#deleteModelWithoutDoc) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/model/{id}/delete-model | Delete the Model without deleting the related document
[**deletePropertySet**](ModelApi.md#deletePropertySet) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/propertyset/{id} | Delete a PropertySet of a model
[**deleteSpace**](ModelApi.md#deleteSpace) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/space/{id} | Delete a space
[**deleteStorey**](ModelApi.md#deleteStorey) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/storey/{uuid} | Delete a storey of a model
[**deleteStoreyPlan**](ModelApi.md#deleteStoreyPlan) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/storey/{storey_uuid}/plan/{id} | Delete the relation between a 2d model and a storey
[**deleteSystem**](ModelApi.md#deleteSystem) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/system/{uuid} | Delete a system of a model
[**deleteZone**](ModelApi.md#deleteZone) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/zone/{id} | Delete a zone of a model
[**deleteZoneSpace**](ModelApi.md#deleteZoneSpace) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/zone/{zone_pk}/space/{id} | Delete the relation between a space and a zone
[**exportIfc**](ModelApi.md#exportIfc) | **POST** /cloud/{cloud_pk}/project/{project_pk}/model/{id}/export | Export IFC
[**fullUpdateElement**](ModelApi.md#fullUpdateElement) | **PUT** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/element/{uuid} | Update all fields of an element
[**getAccessToken**](ModelApi.md#getAccessToken) | **GET** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/access_token/{token} | Retrieve one token created for this model
[**getAccessTokens**](ModelApi.md#getAccessTokens) | **GET** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/access_token | Retrieve all tokens created for this model
[**getBuilding**](ModelApi.md#getBuilding) | **GET** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/building/{uuid} | Retrieve a building of a model
[**getBuildingPlanPositioning**](ModelApi.md#getBuildingPlanPositioning) | **GET** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/building/{building_uuid}/plan/{id}/positioning | Retrieve the postioning of the plan in the building
[**getBuildings**](ModelApi.md#getBuildings) | **GET** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/building | Retrieve all buildings of a model
[**getClassificationsOfElement**](ModelApi.md#getClassificationsOfElement) | **GET** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/element/{element_uuid}/classification | Retrieve all classifications of an element
[**getDocumentsOfElement**](ModelApi.md#getDocumentsOfElement) | **GET** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/element/{element_uuid}/documents | Retrieve all documents of an element
[**getDrawing**](ModelApi.md#getDrawing) | **GET** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/drawing/{id} | Retrieve a drawing of a model
[**getDrawings**](ModelApi.md#getDrawings) | **GET** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/drawing | Retrieve all drawings of a model
[**getElement**](ModelApi.md#getElement) | **GET** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/element/{uuid} | Retrieve an element of a model
[**getElementLinkedDocuments**](ModelApi.md#getElementLinkedDocuments) | **GET** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/element/documents | Retrieve all documents linked to any element
[**getElementPropertySet**](ModelApi.md#getElementPropertySet) | **GET** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/element/{element_uuid}/propertyset/{id} | Retrieve a PropertySet of an element
[**getElementPropertySetProperties**](ModelApi.md#getElementPropertySetProperties) | **GET** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/element/{element_uuid}/propertyset/{propertyset_pk}/property | Retrieve all Properties of a PropertySet
[**getElementPropertySetProperty**](ModelApi.md#getElementPropertySetProperty) | **GET** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/element/{element_uuid}/propertyset/{propertyset_pk}/property/{id} | Retrieve a Property of a PropertySet
[**getElementPropertySetPropertyDefinition**](ModelApi.md#getElementPropertySetPropertyDefinition) | **GET** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/element/{element_uuid}/propertyset/{propertyset_pk}/property/{property_pk}/propertydefinition/{id} | Retrieve a Definition of a Property
[**getElementPropertySetPropertyDefinitionUnit**](ModelApi.md#getElementPropertySetPropertyDefinitionUnit) | **GET** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/element/{element_uuid}/propertyset/{propertyset_pk}/property/{property_pk}/propertydefinition/{propertydefinition_pk}/unit/{id} | Retrieve a Unit of a Definition
[**getElementPropertySetPropertyDefinitionUnits**](ModelApi.md#getElementPropertySetPropertyDefinitionUnits) | **GET** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/element/{element_uuid}/propertyset/{propertyset_pk}/property/{property_pk}/propertydefinition/{propertydefinition_pk}/unit | Retrieve all Units of a Definition
[**getElementPropertySetPropertyDefinitions**](ModelApi.md#getElementPropertySetPropertyDefinitions) | **GET** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/element/{element_uuid}/propertyset/{propertyset_pk}/property/{property_pk}/propertydefinition | Retrieve all Definitions of a PropertySet
[**getElementPropertySets**](ModelApi.md#getElementPropertySets) | **GET** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/element/{element_uuid}/propertyset | Retrieve all PropertySets of an element
[**getElements**](ModelApi.md#getElements) | **GET** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/element | Retrieve all elements of a model
[**getElementsFromClassification**](ModelApi.md#getElementsFromClassification) | **GET** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/classification/{model_classification_pk}/element | Retrieve all elements with the classification
[**getLabel**](ModelApi.md#getLabel) | **GET** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/label/{id} | Retrieve one label of the model
[**getLabels**](ModelApi.md#getLabels) | **GET** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/label | Retrieve all labels of the model
[**getLayer**](ModelApi.md#getLayer) | **GET** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/layer/{id} | Retrieve a layer of a model
[**getLayers**](ModelApi.md#getLayers) | **GET** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/layer | Retrieve all layers of a model
[**getMaterial**](ModelApi.md#getMaterial) | **GET** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/element/{element_uuid}/material/{id} | Retrieve a material of a model
[**getMaterials**](ModelApi.md#getMaterials) | **GET** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/element/{element_uuid}/material | Retrieve all materials of a model
[**getModel**](ModelApi.md#getModel) | **GET** /cloud/{cloud_pk}/project/{project_pk}/model/{id} | Retrieve one model
[**getModelClassifications**](ModelApi.md#getModelClassifications) | **GET** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/classification | Retrieve all classifications in a model
[**getModelMaterial**](ModelApi.md#getModelMaterial) | **GET** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/material/{id} | Retrieve a material of a model
[**getModelMaterials**](ModelApi.md#getModelMaterials) | **GET** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/material | Retrieve all materials of a model
[**getModelProperties**](ModelApi.md#getModelProperties) | **GET** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/property | Retrieve all Properties of a model
[**getModelProperty**](ModelApi.md#getModelProperty) | **GET** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/property/{id} | Retrieve a Property of a model
[**getModelPropertyDefinition**](ModelApi.md#getModelPropertyDefinition) | **GET** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/propertydefinition/{id} | Retrieve a PropertyDefinition of a model
[**getModelPropertyDefinitions**](ModelApi.md#getModelPropertyDefinitions) | **GET** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/propertydefinition | Retrieve all PropertyDefinitions of a model
[**getModelUnit**](ModelApi.md#getModelUnit) | **GET** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/unit/{id} | Retrieve a Unit of a model
[**getModelUnits**](ModelApi.md#getModelUnits) | **GET** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/unit | Retrieve all Units of a model
[**getModels**](ModelApi.md#getModels) | **GET** /cloud/{cloud_pk}/project/{project_pk}/model | Retrieve all models
[**getProcessorHandler**](ModelApi.md#getProcessorHandler) | **GET** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/processorhandler/{id} | Retrieve a processor handler
[**getProcessorHandlers**](ModelApi.md#getProcessorHandlers) | **GET** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/processorhandler | Get all processor handlers
[**getPropertiesTypes**](ModelApi.md#getPropertiesTypes) | **GET** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/element/properties | Retrieve all property types and their value type used in this model
[**getPropertySet**](ModelApi.md#getPropertySet) | **GET** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/propertyset/{id} | Retrieve a PropertySet of a model
[**getPropertySets**](ModelApi.md#getPropertySets) | **GET** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/propertyset | Retrieve all PropertySets of a model
[**getRawElements**](ModelApi.md#getRawElements) | **GET** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/element/raw | Retrieve all elements in a optimized format
[**getSimpleElement**](ModelApi.md#getSimpleElement) | **GET** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/element/{uuid}/simple | Retrieve an element of a model with a simple value representation
[**getSimpleElements**](ModelApi.md#getSimpleElements) | **GET** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/element/simple | Retrieve all elements of a model with a simple value representation
[**getSpace**](ModelApi.md#getSpace) | **GET** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/space/{id} | Retrieve one space of the model
[**getSpaces**](ModelApi.md#getSpaces) | **GET** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/space | Retrieve all spaces of the model
[**getStorey**](ModelApi.md#getStorey) | **GET** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/storey/{uuid} | Retrieve a storey of a model
[**getStoreyPlanPositioning**](ModelApi.md#getStoreyPlanPositioning) | **GET** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/storey/{storey_uuid}/plan/{id}/positioning | Retrieve the postioning of the plan in the storey
[**getStoreys**](ModelApi.md#getStoreys) | **GET** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/storey | Retrieve all storeys of a model
[**getSystem**](ModelApi.md#getSystem) | **GET** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/system/{uuid} | Retrieve a system of a model
[**getSystems**](ModelApi.md#getSystems) | **GET** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/system | Retrieve all systems of a model
[**getTileset**](ModelApi.md#getTileset) | **GET** /cloud/{cloud_pk}/project/{project_pk}/model/{id}/tileset | Retrieve the tileset of the model
[**getTypes**](ModelApi.md#getTypes) | **GET** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/element/types | Retrieve all IFC Types used in this model
[**getZone**](ModelApi.md#getZone) | **GET** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/zone/{id} | Retrieve one zone of a model
[**getZoneSpace**](ModelApi.md#getZoneSpace) | **GET** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/zone/{zone_pk}/space/{id} | Retrieve one space of a zone
[**getZoneSpaces**](ModelApi.md#getZoneSpaces) | **GET** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/zone/{zone_pk}/space | Retrieve all spaces of a zone
[**getZones**](ModelApi.md#getZones) | **GET** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/zone | Retrieve zones of a model
[**linkDocumentsOfElement**](ModelApi.md#linkDocumentsOfElement) | **POST** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/element/{element_uuid}/documents | Link one or many documents to an element
[**listClassificationElementRelations**](ModelApi.md#listClassificationElementRelations) | **GET** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/classification-element | List all associations between classifications and elements
[**mergeIfcs**](ModelApi.md#mergeIfcs) | **POST** /cloud/{cloud_pk}/project/{project_pk}/model/merge | Merge IFC files
[**optimizeIfc**](ModelApi.md#optimizeIfc) | **POST** /cloud/{cloud_pk}/project/{project_pk}/model/{id}/optimize | Optimize the IFC
[**removeAllElementPropertySet**](ModelApi.md#removeAllElementPropertySet) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/element/{element_uuid}/propertyset/all | Remove all property sets from element
[**removeClassificationOfElement**](ModelApi.md#removeClassificationOfElement) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/element/{element_uuid}/classification/{id} | Remove a classification from an element
[**removeDocumentOfElement**](ModelApi.md#removeDocumentOfElement) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/element/{element_uuid}/documents/{id} | Remove a documents from an element
[**removeElementPropertySet**](ModelApi.md#removeElementPropertySet) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/element/{element_uuid}/propertyset/{id} | Remove a PropertySet from an element
[**removeElementPropertySetProperty**](ModelApi.md#removeElementPropertySetProperty) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/element/{element_uuid}/propertyset/{propertyset_pk}/property/{id} | Remove a property from a PropertySet
[**removeElementPropertySetPropertyDefinition**](ModelApi.md#removeElementPropertySetPropertyDefinition) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/element/{element_uuid}/propertyset/{propertyset_pk}/property/{property_pk}/propertydefinition/{id} | Delete a Definition to a Property
[**removeElementPropertySetPropertyDefinitionUnit**](ModelApi.md#removeElementPropertySetPropertyDefinitionUnit) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/element/{element_uuid}/propertyset/{propertyset_pk}/property/{property_pk}/propertydefinition/{propertydefinition_pk}/unit/{id} | Remove a Unit from a Definition
[**removeElementsFromClassification**](ModelApi.md#removeElementsFromClassification) | **DELETE** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/classification/{model_classification_pk}/element/{uuid} | Remove the classification from all elements
[**reprocessModel**](ModelApi.md#reprocessModel) | **POST** /cloud/{cloud_pk}/project/{project_pk}/model/{id}/reprocess | Reprocess Model file
[**updateAccessToken**](ModelApi.md#updateAccessToken) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/access_token/{token} | Update some fields of a token
[**updateBuilding**](ModelApi.md#updateBuilding) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/building/{uuid} | Update some fields of a building
[**updateBuildingPlanPositioning**](ModelApi.md#updateBuildingPlanPositioning) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/building/{building_uuid}/plan/{id}/positioning | Update the postioning of the plan in the building
[**updateDrawing**](ModelApi.md#updateDrawing) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/drawing/{id} | Update some fields of a drawing
[**updateElement**](ModelApi.md#updateElement) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/element/{uuid} | Update some fields of an element
[**updateElementPropertySetProperty**](ModelApi.md#updateElementPropertySetProperty) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/element/{element_uuid}/propertyset/{propertyset_pk}/property/{id} | Update a property from an element
[**updateLabel**](ModelApi.md#updateLabel) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/label/{id} | Update some fields of a label
[**updateLayer**](ModelApi.md#updateLayer) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/layer/{id} | Update some fields of a layer
[**updateMask2D**](ModelApi.md#updateMask2D) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/model/{id}/mask-2d | Partial update of a 2D mask for the model
[**updateModel**](ModelApi.md#updateModel) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/model/{id} | Update some fields of a model
[**updateModelFiles**](ModelApi.md#updateModelFiles) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/model/{id}/files | Update models file (gltf, svg, structure, etc)
[**updateModelProperty**](ModelApi.md#updateModelProperty) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/property/{id} | Update some fields of a Property
[**updateModelPropertyDefinition**](ModelApi.md#updateModelPropertyDefinition) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/propertydefinition/{id} | Update some fields of many PropertyDefinitions of a model
[**updateModelTransform**](ModelApi.md#updateModelTransform) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/model/{id}/transform | Update model transform
[**updateModelUnit**](ModelApi.md#updateModelUnit) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/unit/{id} | Update some fields of a Unit of a model
[**updateOrderBuildingPlan**](ModelApi.md#updateOrderBuildingPlan) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/building/{building_uuid}/plan/order | Update order of all plan of a building
[**updateOrderStoreyPlan**](ModelApi.md#updateOrderStoreyPlan) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/storey/{storey_uuid}/plan/order | Update order of all plan of a storey
[**updateOrderStoreys**](ModelApi.md#updateOrderStoreys) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/storey/order | Update order of all storey of a model
[**updateProcessorHandler**](ModelApi.md#updateProcessorHandler) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/processorhandler/{id} | Update the status of a processor handler
[**updatePropertySet**](ModelApi.md#updatePropertySet) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/propertyset/{id} | Update some fields of a PropertySet
[**updateSpace**](ModelApi.md#updateSpace) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/space/{id} | Update some fields of a space
[**updateStorey**](ModelApi.md#updateStorey) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/storey/{uuid} | Update some fields of a storey
[**updateStoreyPlanPositioning**](ModelApi.md#updateStoreyPlanPositioning) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/storey/{storey_uuid}/plan/{id}/positioning | Update the postioning of the plan in the storey
[**updateSystem**](ModelApi.md#updateSystem) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/system/{uuid} | Update some fields of a system
[**updateZone**](ModelApi.md#updateZone) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/zone/{id} | Update some fields of a zone
[**updateZoneSpace**](ModelApi.md#updateZoneSpace) | **PATCH** /cloud/{cloud_pk}/project/{project_pk}/model/{model_pk}/zone/{zone_pk}/space/{id} | Update some fields of a space



## addModelErrors

> ModelErrors addModelErrors(cloudPk, id, projectPk, opts)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | 
let id = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | 
let opts = {
  'modelErrorsRequest': new bimdata.ModelErrorsRequest() // ModelErrorsRequest | 
};
apiInstance.addModelErrors(cloudPk, id, projectPk, opts).then((data) => {
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

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## addZoneSpace

> ZoneSpace addZoneSpace(cloudPk, modelPk, projectPk, zonePk, zoneSpaceRelationRequest)

Add a space to a zone

Add a space to a zone. The IFC file will not be updated. The created space will be accessible over the API and when exporting an IFC file  Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let zonePk = 56; // Number | A unique integer value identifying this zone.
let zoneSpaceRelationRequest = new bimdata.ZoneSpaceRelationRequest(); // ZoneSpaceRelationRequest | 
apiInstance.addZoneSpace(cloudPk, modelPk, projectPk, zonePk, zoneSpaceRelationRequest).then((data) => {
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
 **zonePk** | **Number**| A unique integer value identifying this zone. | 
 **zoneSpaceRelationRequest** | [**ZoneSpaceRelationRequest**](ZoneSpaceRelationRequest.md)|  | 

### Return type

[**ZoneSpace**](ZoneSpace.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## bulkDeleteModelClassifications

> bulkDeleteModelClassifications(cloudPk, modelPk, projectPk, opts)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | 
let modelPk = 56; // Number | 
let projectPk = 56; // Number | 
let opts = {
  'classificationRequest': new bimdata.ClassificationRequest() // ClassificationRequest | 
};
apiInstance.bulkDeleteModelClassifications(cloudPk, modelPk, projectPk, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**|  | 
 **modelPk** | **Number**|  | 
 **projectPk** | **Number**|  | 
 **classificationRequest** | [**ClassificationRequest**](ClassificationRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: Not defined


## bulkDeleteModelProperties

> bulkDeleteModelProperties(cloudPk, modelPk, projectPk, requestBody)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let requestBody = [null]; // [Number] | 
apiInstance.bulkDeleteModelProperties(cloudPk, modelPk, projectPk, requestBody).then(() => {
  console.log('API called successfully.');
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
 **requestBody** | [**[Number]**](Number.md)|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: Not defined


## bulkDeleteModelPropertyDefinitions

> bulkDeleteModelPropertyDefinitions(cloudPk, modelPk, projectPk, requestBody)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let requestBody = [null]; // [Number] | 
apiInstance.bulkDeleteModelPropertyDefinitions(cloudPk, modelPk, projectPk, requestBody).then(() => {
  console.log('API called successfully.');
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
 **requestBody** | [**[Number]**](Number.md)|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: Not defined


## bulkDeleteModelUnits

> bulkDeleteModelUnits(cloudPk, modelPk, projectPk, requestBody)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let requestBody = [null]; // [Number] | 
apiInstance.bulkDeleteModelUnits(cloudPk, modelPk, projectPk, requestBody).then(() => {
  console.log('API called successfully.');
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
 **requestBody** | [**[Number]**](Number.md)|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: Not defined


## bulkDeletePropertySet

> bulkDeletePropertySet(cloudPk, modelPk, projectPk, requestBody)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let requestBody = [null]; // [Number] | 
apiInstance.bulkDeletePropertySet(cloudPk, modelPk, projectPk, requestBody).then(() => {
  console.log('API called successfully.');
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
 **requestBody** | [**[Number]**](Number.md)|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: Not defined


## bulkFullUpdateElements

> [Element] bulkFullUpdateElements(cloudPk, modelPk, projectPk, elementRequest, opts)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let elementRequest = [new bimdata.ElementRequest()]; // [ElementRequest] | 
let opts = {
  'classification': "classification_example", // String | 
  'classificationNotation': "classificationNotation_example", // String | 
  'type': "type_example" // String | 
};
apiInstance.bulkFullUpdateElements(cloudPk, modelPk, projectPk, elementRequest, opts).then((data) => {
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
 **elementRequest** | [**[ElementRequest]**](ElementRequest.md)|  | 
 **classification** | **String**|  | [optional] 
 **classificationNotation** | **String**|  | [optional] 
 **type** | **String**|  | [optional] 

### Return type

[**[Element]**](Element.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## bulkFullUpdateModelProperty

> [Property] bulkFullUpdateModelProperty(cloudPk, modelPk, projectPk, propertyRequest)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let propertyRequest = [new bimdata.PropertyRequest()]; // [PropertyRequest] | 
apiInstance.bulkFullUpdateModelProperty(cloudPk, modelPk, projectPk, propertyRequest).then((data) => {
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
 **propertyRequest** | [**[PropertyRequest]**](PropertyRequest.md)|  | 

### Return type

[**[Property]**](Property.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## bulkRemoveClassificationsOfElement

> bulkRemoveClassificationsOfElement(cloudPk, elementUuid, modelPk, projectPk, requestBody)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let elementUuid = "elementUuid_example"; // String | 
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let requestBody = [null]; // [Number] | 
apiInstance.bulkRemoveClassificationsOfElement(cloudPk, elementUuid, modelPk, projectPk, requestBody).then(() => {
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
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **requestBody** | [**[Number]**](Number.md)|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: Not defined


## bulkRemoveDocumentsOfElement

> bulkRemoveDocumentsOfElement(cloudPk, elementUuid, modelPk, projectPk, requestBody)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let elementUuid = "elementUuid_example"; // String | 
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let requestBody = [null]; // [Number] | 
apiInstance.bulkRemoveDocumentsOfElement(cloudPk, elementUuid, modelPk, projectPk, requestBody).then(() => {
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
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **requestBody** | [**[Number]**](Number.md)|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: Not defined


## bulkRemoveElementsFromClassification

> bulkRemoveElementsFromClassification(cloudPk, modelClassificationPk, modelPk, projectPk, requestBody)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | 
let modelClassificationPk = 56; // Number | A unique integer value identifying this classification.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let requestBody = [null]; // [Number] | 
apiInstance.bulkRemoveElementsFromClassification(cloudPk, modelClassificationPk, modelPk, projectPk, requestBody).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**|  | 
 **modelClassificationPk** | **Number**| A unique integer value identifying this classification. | 
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **requestBody** | [**[Number]**](Number.md)|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: Not defined


## bulkUpdateElements

> [Element] bulkUpdateElements(cloudPk, modelPk, projectPk, elementRequest, opts)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let elementRequest = [new bimdata.ElementRequest()]; // [ElementRequest] | 
let opts = {
  'classification': "classification_example", // String | 
  'classificationNotation': "classificationNotation_example", // String | 
  'type': "type_example" // String | 
};
apiInstance.bulkUpdateElements(cloudPk, modelPk, projectPk, elementRequest, opts).then((data) => {
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
 **elementRequest** | [**[ElementRequest]**](ElementRequest.md)|  | 
 **classification** | **String**|  | [optional] 
 **classificationNotation** | **String**|  | [optional] 
 **type** | **String**|  | [optional] 

### Return type

[**[Element]**](Element.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## bulkUpdateModelProperty

> [Property] bulkUpdateModelProperty(cloudPk, modelPk, projectPk, propertyRequest)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let propertyRequest = [new bimdata.PropertyRequest()]; // [PropertyRequest] | 
apiInstance.bulkUpdateModelProperty(cloudPk, modelPk, projectPk, propertyRequest).then((data) => {
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
 **propertyRequest** | [**[PropertyRequest]**](PropertyRequest.md)|  | 

### Return type

[**[Property]**](Property.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## createAccessToken

> IfcAccessToken createAccessToken(cloudPk, modelPk, projectPk, opts)

Create a token for this model

DEPECRATED: Use ProjectAccessToken instead  Required scopes: ifc:token_manage, model:token_manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let opts = {
  'ifcAccessTokenRequest': new bimdata.IfcAccessTokenRequest() // IfcAccessTokenRequest | 
};
apiInstance.createAccessToken(cloudPk, modelPk, projectPk, opts).then((data) => {
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
 **ifcAccessTokenRequest** | [**IfcAccessTokenRequest**](IfcAccessTokenRequest.md)|  | [optional] 

### Return type

[**IfcAccessToken**](IfcAccessToken.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## createBuilding

> Building createBuilding(cloudPk, modelPk, projectPk, storeyBuildingRequest)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let storeyBuildingRequest = new bimdata.StoreyBuildingRequest(); // StoreyBuildingRequest | 
apiInstance.createBuilding(cloudPk, modelPk, projectPk, storeyBuildingRequest).then((data) => {
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
 **storeyBuildingRequest** | [**StoreyBuildingRequest**](StoreyBuildingRequest.md)|  | 

### Return type

[**Building**](Building.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## createBuildingPlan

> Building createBuildingPlan(buildingUuid, cloudPk, modelPk, projectPk, buildingModelPlanRequest)

Create a relation between a 2d model and a building

Create a relation between a 2d model and a building. The model type must be one of : (&#39;DWG&#39;, &#39;DXF&#39;, &#39;PDF&#39;, &#39;JPEG&#39;, &#39;PNG&#39;, &#39;PHOTOSPHERE&#39;)  Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let buildingUuid = "buildingUuid_example"; // String | 
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let buildingModelPlanRequest = new bimdata.BuildingModelPlanRequest(); // BuildingModelPlanRequest | 
apiInstance.createBuildingPlan(buildingUuid, cloudPk, modelPk, projectPk, buildingModelPlanRequest).then((data) => {
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
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **buildingModelPlanRequest** | [**BuildingModelPlanRequest**](BuildingModelPlanRequest.md)|  | 

### Return type

[**Building**](Building.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## createClassificationElementRelations

> createClassificationElementRelations(cloudPk, modelPk, projectPk, elementClassificationRelationRequest)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | 
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let elementClassificationRelationRequest = [new bimdata.ElementClassificationRelationRequest()]; // [ElementClassificationRelationRequest] | 
apiInstance.createClassificationElementRelations(cloudPk, modelPk, projectPk, elementClassificationRelationRequest).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**|  | 
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **elementClassificationRelationRequest** | [**[ElementClassificationRelationRequest]**](ElementClassificationRelationRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: Not defined


## createClassificationsOfElement

> [Classification] createClassificationsOfElement(cloudPk, elementUuid, modelPk, projectPk, classificationRequest)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let elementUuid = "elementUuid_example"; // String | 
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let classificationRequest = [new bimdata.ClassificationRequest()]; // [ClassificationRequest] | 
apiInstance.createClassificationsOfElement(cloudPk, elementUuid, modelPk, projectPk, classificationRequest).then((data) => {
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
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **classificationRequest** | [**[ClassificationRequest]**](ClassificationRequest.md)|  | 

### Return type

[**[Classification]**](Classification.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## createDrawing

> Drawing createDrawing(cloudPk, modelPk, projectPk, drawingRequest)

Create a drawing in the model

Create a drawing in the model  Required scopes: model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let drawingRequest = new bimdata.DrawingRequest(); // DrawingRequest | 
apiInstance.createDrawing(cloudPk, modelPk, projectPk, drawingRequest).then((data) => {
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
 **drawingRequest** | [**DrawingRequest**](DrawingRequest.md)|  | 

### Return type

[**Drawing**](Drawing.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## createElement

> [Element] createElement(cloudPk, modelPk, projectPk, elementRequest, opts)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let elementRequest = [new bimdata.ElementRequest()]; // [ElementRequest] | 
let opts = {
  'classification': "classification_example", // String | 
  'classificationNotation': "classificationNotation_example", // String | 
  'type': "type_example" // String | 
};
apiInstance.createElement(cloudPk, modelPk, projectPk, elementRequest, opts).then((data) => {
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
 **elementRequest** | [**[ElementRequest]**](ElementRequest.md)|  | 
 **classification** | **String**|  | [optional] 
 **classificationNotation** | **String**|  | [optional] 
 **type** | **String**|  | [optional] 

### Return type

[**[Element]**](Element.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## createElementPropertySet

> PropertySet createElementPropertySet(cloudPk, elementUuid, modelPk, projectPk, opts)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let elementUuid = "elementUuid_example"; // String | 
let modelPk = 56; // Number | 
let projectPk = 56; // Number | A unique integer value identifying this project.
let opts = {
  'propertySetRequest': new bimdata.PropertySetRequest() // PropertySetRequest | 
};
apiInstance.createElementPropertySet(cloudPk, elementUuid, modelPk, projectPk, opts).then((data) => {
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
 **modelPk** | **Number**|  | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **propertySetRequest** | [**PropertySetRequest**](PropertySetRequest.md)|  | [optional] 

### Return type

[**PropertySet**](PropertySet.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## createElementPropertySetProperty

> Property createElementPropertySetProperty(cloudPk, elementUuid, modelPk, projectPk, propertysetPk, propertyRequest)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let elementUuid = "elementUuid_example"; // String | 
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let propertysetPk = 56; // Number | A unique integer value identifying this property set.
let propertyRequest = new bimdata.PropertyRequest(); // PropertyRequest | 
apiInstance.createElementPropertySetProperty(cloudPk, elementUuid, modelPk, projectPk, propertysetPk, propertyRequest).then((data) => {
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
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **propertysetPk** | **Number**| A unique integer value identifying this property set. | 
 **propertyRequest** | [**PropertyRequest**](PropertyRequest.md)|  | 

### Return type

[**Property**](Property.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## createElementPropertySetPropertyDefinition

> PropertyDefinition createElementPropertySetPropertyDefinition(cloudPk, elementUuid, modelPk, projectPk, propertyPk, propertysetPk, opts)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let elementUuid = "elementUuid_example"; // String | 
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let propertyPk = 56; // Number | A unique integer value identifying this property.
let propertysetPk = 56; // Number | A unique integer value identifying this property set.
let opts = {
  'propertyDefinitionRequest': new bimdata.PropertyDefinitionRequest() // PropertyDefinitionRequest | 
};
apiInstance.createElementPropertySetPropertyDefinition(cloudPk, elementUuid, modelPk, projectPk, propertyPk, propertysetPk, opts).then((data) => {
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
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **propertyPk** | **Number**| A unique integer value identifying this property. | 
 **propertysetPk** | **Number**| A unique integer value identifying this property set. | 
 **propertyDefinitionRequest** | [**PropertyDefinitionRequest**](PropertyDefinitionRequest.md)|  | [optional] 

### Return type

[**PropertyDefinition**](PropertyDefinition.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## createElementPropertySetPropertyDefinitionUnit

> Unit createElementPropertySetPropertyDefinitionUnit(cloudPk, elementUuid, modelPk, projectPk, propertyPk, propertydefinitionPk, propertysetPk, unitRequest)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let elementUuid = "elementUuid_example"; // String | 
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let propertyPk = 56; // Number | A unique integer value identifying this property.
let propertydefinitionPk = 56; // Number | A unique integer value identifying this property definition.
let propertysetPk = 56; // Number | A unique integer value identifying this property set.
let unitRequest = new bimdata.UnitRequest(); // UnitRequest | 
apiInstance.createElementPropertySetPropertyDefinitionUnit(cloudPk, elementUuid, modelPk, projectPk, propertyPk, propertydefinitionPk, propertysetPk, unitRequest).then((data) => {
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
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **propertyPk** | **Number**| A unique integer value identifying this property. | 
 **propertydefinitionPk** | **Number**| A unique integer value identifying this property definition. | 
 **propertysetPk** | **Number**| A unique integer value identifying this property set. | 
 **unitRequest** | [**UnitRequest**](UnitRequest.md)|  | 

### Return type

[**Unit**](Unit.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## createLabel

> ModelLabel createLabel(cloudPk, modelPk, projectPk, modelLabelRequest)

Create a label in the model

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let modelLabelRequest = new bimdata.ModelLabelRequest(); // ModelLabelRequest | 
apiInstance.createLabel(cloudPk, modelPk, projectPk, modelLabelRequest).then((data) => {
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
 **modelLabelRequest** | [**ModelLabelRequest**](ModelLabelRequest.md)|  | 

### Return type

[**ModelLabel**](ModelLabel.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## createLayer

> Layer createLayer(cloudPk, modelPk, projectPk, layerRequest)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let layerRequest = new bimdata.LayerRequest(); // LayerRequest | 
apiInstance.createLayer(cloudPk, modelPk, projectPk, layerRequest).then((data) => {
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
 **layerRequest** | [**LayerRequest**](LayerRequest.md)|  | 

### Return type

[**Layer**](Layer.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## createMask2D

> Mask2D createMask2D(cloudPk, id, projectPk, opts)

Create or update a 2D mask for the model

Create or update a 2D mask for the model. Only available for PDF, JPEG and PNG models

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | 
let id = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | 
let opts = {
  'mask2DRequest': new bimdata.Mask2DRequest() // Mask2DRequest | 
};
apiInstance.createMask2D(cloudPk, id, projectPk, opts).then((data) => {
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
 **mask2DRequest** | [**Mask2DRequest**](Mask2DRequest.md)|  | [optional] 

### Return type

[**Mask2D**](Mask2D.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## createMetaBuilding

> Model createMetaBuilding(cloudPk, projectPk, createBuildingByNameRequest)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | 
let projectPk = 56; // Number | 
let createBuildingByNameRequest = new bimdata.CreateBuildingByNameRequest(); // CreateBuildingByNameRequest | 
apiInstance.createMetaBuilding(cloudPk, projectPk, createBuildingByNameRequest).then((data) => {
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

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## createModel

> Model createModel(cloudPk, projectPk, createModelRequest)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | 
let projectPk = 56; // Number | 
let createModelRequest = new bimdata.CreateModelRequest(); // CreateModelRequest | 
apiInstance.createModel(cloudPk, projectPk, createModelRequest).then((data) => {
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

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## createModelPropertyDefinition

> [PropertyDefinition] createModelPropertyDefinition(cloudPk, modelPk, projectPk, propertyDefinitionRequest)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let propertyDefinitionRequest = [new bimdata.PropertyDefinitionRequest()]; // [PropertyDefinitionRequest] | 
apiInstance.createModelPropertyDefinition(cloudPk, modelPk, projectPk, propertyDefinitionRequest).then((data) => {
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
 **propertyDefinitionRequest** | [**[PropertyDefinitionRequest]**](PropertyDefinitionRequest.md)|  | 

### Return type

[**[PropertyDefinition]**](PropertyDefinition.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## createModelUnit

> [Unit] createModelUnit(cloudPk, modelPk, projectPk, unitRequest)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let unitRequest = [new bimdata.UnitRequest()]; // [UnitRequest] | 
apiInstance.createModelUnit(cloudPk, modelPk, projectPk, unitRequest).then((data) => {
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
 **unitRequest** | [**[UnitRequest]**](UnitRequest.md)|  | 

### Return type

[**[Unit]**](Unit.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## createMultiPageModel

> Model createMultiPageModel(cloudPk, id, projectPk, createMultiPageModelRequest)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | 
let id = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | 
let createMultiPageModelRequest = new bimdata.CreateMultiPageModelRequest(); // CreateMultiPageModelRequest | 
apiInstance.createMultiPageModel(cloudPk, id, projectPk, createMultiPageModelRequest).then((data) => {
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

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## createPhotosphere

> Model createPhotosphere(cloudPk, projectPk, createModelRequest)

Create a photopshere model from an image file

Create a photosphere model to be used in BIMData services  Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | 
let projectPk = 56; // Number | 
let createModelRequest = new bimdata.CreateModelRequest(); // CreateModelRequest | 
apiInstance.createPhotosphere(cloudPk, projectPk, createModelRequest).then((data) => {
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

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## createPhotosphereBuilding

> Model createPhotosphereBuilding(cloudPk, projectPk, createBuildingByNameRequest)

Create an empty Photosphere Building Model

Create an empty Photosphere Building Model  Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | 
let projectPk = 56; // Number | 
let createBuildingByNameRequest = new bimdata.CreateBuildingByNameRequest(); // CreateBuildingByNameRequest | 
apiInstance.createPhotosphereBuilding(cloudPk, projectPk, createBuildingByNameRequest).then((data) => {
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

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## createPropertySet

> [PropertySet] createPropertySet(cloudPk, modelPk, projectPk, propertySetRequest)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let propertySetRequest = [new bimdata.PropertySetRequest()]; // [PropertySetRequest] | 
apiInstance.createPropertySet(cloudPk, modelPk, projectPk, propertySetRequest).then((data) => {
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
 **propertySetRequest** | [**[PropertySetRequest]**](PropertySetRequest.md)|  | 

### Return type

[**[PropertySet]**](PropertySet.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## createPropertySetElementRelations

> createPropertySetElementRelations(cloudPk, modelPk, projectPk, elementPropertySetRelationRequest)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | 
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let elementPropertySetRelationRequest = [new bimdata.ElementPropertySetRelationRequest()]; // [ElementPropertySetRelationRequest] | 
apiInstance.createPropertySetElementRelations(cloudPk, modelPk, projectPk, elementPropertySetRelationRequest).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**|  | 
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **elementPropertySetRelationRequest** | [**[ElementPropertySetRelationRequest]**](ElementPropertySetRelationRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: Not defined


## createRawElements

> createRawElements(cloudPk, modelPk, projectPk, rawElementsRequest)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let rawElementsRequest = new bimdata.RawElementsRequest(); // RawElementsRequest | 
apiInstance.createRawElements(cloudPk, modelPk, projectPk, rawElementsRequest).then(() => {
  console.log('API called successfully.');
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
 **rawElementsRequest** | [**RawElementsRequest**](RawElementsRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: Not defined


## createSpace

> [Space] createSpace(cloudPk, modelPk, projectPk, spaceRequest)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let spaceRequest = [new bimdata.SpaceRequest()]; // [SpaceRequest] | 
apiInstance.createSpace(cloudPk, modelPk, projectPk, spaceRequest).then((data) => {
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
 **spaceRequest** | [**[SpaceRequest]**](SpaceRequest.md)|  | 

### Return type

[**[Space]**](Space.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## createStorey

> Storey createStorey(cloudPk, modelPk, projectPk, storeyBuildingRequest)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let storeyBuildingRequest = new bimdata.StoreyBuildingRequest(); // StoreyBuildingRequest | 
apiInstance.createStorey(cloudPk, modelPk, projectPk, storeyBuildingRequest).then((data) => {
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
 **storeyBuildingRequest** | [**StoreyBuildingRequest**](StoreyBuildingRequest.md)|  | 

### Return type

[**Storey**](Storey.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## createStoreyPlan

> Storey createStoreyPlan(cloudPk, modelPk, projectPk, storeyUuid, storeyModelPlanRequest)

Create a relation between a 2d model and a storey

Create a relation between a 2d model and a storey. The model type must be one of : (&#39;DWG&#39;, &#39;DXF&#39;, &#39;PDF&#39;, &#39;JPEG&#39;, &#39;PNG&#39;, &#39;PHOTOSPHERE&#39;)  Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let storeyUuid = "storeyUuid_example"; // String | 
let storeyModelPlanRequest = new bimdata.StoreyModelPlanRequest(); // StoreyModelPlanRequest | 
apiInstance.createStoreyPlan(cloudPk, modelPk, projectPk, storeyUuid, storeyModelPlanRequest).then((data) => {
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
 **storeyUuid** | **String**|  | 
 **storeyModelPlanRequest** | [**StoreyModelPlanRequest**](StoreyModelPlanRequest.md)|  | 

### Return type

[**Storey**](Storey.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## createSystem

> System createSystem(cloudPk, modelPk, projectPk, systemRequest)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let systemRequest = new bimdata.SystemRequest(); // SystemRequest | 
apiInstance.createSystem(cloudPk, modelPk, projectPk, systemRequest).then((data) => {
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
 **systemRequest** | [**SystemRequest**](SystemRequest.md)|  | 

### Return type

[**System**](System.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## createTileset

> createTileset(cloudPk, id, projectPk)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | 
let id = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | 
apiInstance.createTileset(cloudPk, id, projectPk).then(() => {
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

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## createXktFile

> XktFile createXktFile(cloudPk, id, projectPk, version, file, opts)

Create an xkt file for the model. Overrides existing file with same version

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | 
let id = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | 
let version = 56; // Number | 
let file = "/path/to/file"; // File | 
let opts = {
  'chunks': ["null"] // [File] | 
};
apiInstance.createXktFile(cloudPk, id, projectPk, version, file, opts).then((data) => {
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
 **version** | **Number**|  | 
 **file** | **File**|  | 
 **chunks** | **[File]**|  | [optional] 

### Return type

[**XktFile**](XktFile.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: multipart/form-data, application/x-www-form-urlencoded
- **Accept**: application/json


## createZone

> [Zone] createZone(cloudPk, modelPk, projectPk, zoneRequest, opts)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let zoneRequest = [new bimdata.ZoneRequest()]; // [ZoneRequest] | 
let opts = {
  'color': "color_example" // String | 
};
apiInstance.createZone(cloudPk, modelPk, projectPk, zoneRequest, opts).then((data) => {
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
 **zoneRequest** | [**[ZoneRequest]**](ZoneRequest.md)|  | 
 **color** | **String**|  | [optional] 

### Return type

[**[Zone]**](Zone.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## createZoneSpace

> ZoneSpace createZoneSpace(cloudPk, modelPk, projectPk, zonePk, zoneSpaceRequest)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let zonePk = 56; // Number | A unique integer value identifying this zone.
let zoneSpaceRequest = new bimdata.ZoneSpaceRequest(); // ZoneSpaceRequest | 
apiInstance.createZoneSpace(cloudPk, modelPk, projectPk, zonePk, zoneSpaceRequest).then((data) => {
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
 **zonePk** | **Number**| A unique integer value identifying this zone. | 
 **zoneSpaceRequest** | [**ZoneSpaceRequest**](ZoneSpaceRequest.md)|  | 

### Return type

[**ZoneSpace**](ZoneSpace.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## deleteAccessToken

> deleteAccessToken(cloudPk, modelPk, projectPk, token)

Delete a token

DEPECRATED: Use ProjectAccessToken instead  Required scopes: ifc:token_manage, model:token_manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let token = "token_example"; // String | 
apiInstance.deleteAccessToken(cloudPk, modelPk, projectPk, token).then(() => {
  console.log('API called successfully.');
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
 **token** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteBuilding

> deleteBuilding(cloudPk, modelPk, projectPk, uuid)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let uuid = "uuid_example"; // String | 
apiInstance.deleteBuilding(cloudPk, modelPk, projectPk, uuid).then(() => {
  console.log('API called successfully.');
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
 **uuid** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteBuildingPlan

> deleteBuildingPlan(buildingUuid, cloudPk, id, modelPk, projectPk)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let buildingUuid = "buildingUuid_example"; // String | 
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this element.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.deleteBuildingPlan(buildingUuid, cloudPk, id, modelPk, projectPk).then(() => {
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
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteDrawing

> deleteDrawing(cloudPk, id, modelPk, projectPk)

Delete a drawing of a model

Delete a drawing of a model  Required scopes: model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this drawing.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.deleteDrawing(cloudPk, id, modelPk, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this drawing. | 
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteElement

> deleteElement(cloudPk, modelPk, projectPk, uuid)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let uuid = "uuid_example"; // String | 
apiInstance.deleteElement(cloudPk, modelPk, projectPk, uuid).then(() => {
  console.log('API called successfully.');
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
 **uuid** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteLabel

> deleteLabel(cloudPk, id, modelPk, projectPk)

Delete a label

Delete on label of the model.  Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this label.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.deleteLabel(cloudPk, id, modelPk, projectPk).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this label. | 
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteLayer

> deleteLayer(cloudPk, id, modelPk, projectPk)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this layer.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.deleteLayer(cloudPk, id, modelPk, projectPk).then(() => {
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
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteMask2D

> deleteMask2D(cloudPk, id, projectPk)

Delete the 2D mask for the model

Delete the 2D mask for the model.

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | 
let id = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | 
apiInstance.deleteMask2D(cloudPk, id, projectPk).then(() => {
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

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteModel

> deleteModel(cloudPk, id, projectPk)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | 
let id = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | 
apiInstance.deleteModel(cloudPk, id, projectPk).then(() => {
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

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteModelProperty

> deleteModelProperty(cloudPk, id, modelPk, projectPk)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this property.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.deleteModelProperty(cloudPk, id, modelPk, projectPk).then(() => {
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
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteModelPropertyDefinition

> deleteModelPropertyDefinition(cloudPk, id, modelPk, projectPk)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this property definition.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.deleteModelPropertyDefinition(cloudPk, id, modelPk, projectPk).then(() => {
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
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteModelUnit

> deleteModelUnit(cloudPk, id, modelPk, projectPk)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this unit.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.deleteModelUnit(cloudPk, id, modelPk, projectPk).then(() => {
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
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteModelWithoutDoc

> deleteModelWithoutDoc(cloudPk, id, projectPk)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | 
let id = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | 
apiInstance.deleteModelWithoutDoc(cloudPk, id, projectPk).then(() => {
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

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deletePropertySet

> deletePropertySet(cloudPk, id, modelPk, projectPk)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this property set.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.deletePropertySet(cloudPk, id, modelPk, projectPk).then(() => {
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
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteSpace

> deleteSpace(cloudPk, id, modelPk, projectPk)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this space.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.deleteSpace(cloudPk, id, modelPk, projectPk).then(() => {
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
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteStorey

> deleteStorey(cloudPk, modelPk, projectPk, uuid)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let uuid = "uuid_example"; // String | 
apiInstance.deleteStorey(cloudPk, modelPk, projectPk, uuid).then(() => {
  console.log('API called successfully.');
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
 **uuid** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteStoreyPlan

> deleteStoreyPlan(cloudPk, id, modelPk, projectPk, storeyUuid)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this element.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let storeyUuid = "storeyUuid_example"; // String | 
apiInstance.deleteStoreyPlan(cloudPk, id, modelPk, projectPk, storeyUuid).then(() => {
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
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **storeyUuid** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteSystem

> deleteSystem(cloudPk, modelPk, projectPk, uuid)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let uuid = "uuid_example"; // String | 
apiInstance.deleteSystem(cloudPk, modelPk, projectPk, uuid).then(() => {
  console.log('API called successfully.');
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
 **uuid** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteZone

> deleteZone(cloudPk, id, modelPk, projectPk)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this zone.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.deleteZone(cloudPk, id, modelPk, projectPk).then(() => {
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
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteZoneSpace

> deleteZoneSpace(cloudPk, id, modelPk, projectPk, zonePk)

Delete the relation between a space and a zone

Delete the relation between a space and a zone. The IFC file will not be updated. The remaining spaces are available in API and will be available when exporting an IFC file  Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this space.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let zonePk = 56; // Number | A unique integer value identifying this zone.
apiInstance.deleteZoneSpace(cloudPk, id, modelPk, projectPk, zonePk).then(() => {
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
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **zonePk** | **Number**| A unique integer value identifying this zone. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## exportIfc

> exportIfc(cloudPk, id, projectPk, ifcExportRequest)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | 
let id = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | 
let ifcExportRequest = new bimdata.IfcExportRequest(); // IfcExportRequest | 
apiInstance.exportIfc(cloudPk, id, projectPk, ifcExportRequest).then(() => {
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

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: Not defined


## fullUpdateElement

> Element fullUpdateElement(cloudPk, modelPk, projectPk, uuid, elementRequest)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let uuid = "uuid_example"; // String | 
let elementRequest = new bimdata.ElementRequest(); // ElementRequest | 
apiInstance.fullUpdateElement(cloudPk, modelPk, projectPk, uuid, elementRequest).then((data) => {
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
 **uuid** | **String**|  | 
 **elementRequest** | [**ElementRequest**](ElementRequest.md)|  | 

### Return type

[**Element**](Element.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## getAccessToken

> IfcAccessToken getAccessToken(cloudPk, modelPk, projectPk, token)

Retrieve one token created for this model

DEPECRATED: Use ProjectAccessToken instead  Required scopes: ifc:token_manage, model:token_manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let token = "token_example"; // String | 
apiInstance.getAccessToken(cloudPk, modelPk, projectPk, token).then((data) => {
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
 **token** | **String**|  | 

### Return type

[**IfcAccessToken**](IfcAccessToken.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAccessTokens

> [IfcAccessToken] getAccessTokens(cloudPk, modelPk, projectPk)

Retrieve all tokens created for this model

DEPECRATED: Use ProjectAccessToken instead  Required scopes: ifc:token_manage, model:token_manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getAccessTokens(cloudPk, modelPk, projectPk).then((data) => {
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

[**[IfcAccessToken]**](IfcAccessToken.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getBuilding

> Building getBuilding(cloudPk, modelPk, projectPk, uuid)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let uuid = "uuid_example"; // String | 
apiInstance.getBuilding(cloudPk, modelPk, projectPk, uuid).then((data) => {
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
 **uuid** | **String**|  | 

### Return type

[**Building**](Building.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getBuildingPlanPositioning

> PositioningPlan getBuildingPlanPositioning(buildingUuid, cloudPk, id, modelPk, projectPk)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let buildingUuid = "buildingUuid_example"; // String | 
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this element.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getBuildingPlanPositioning(buildingUuid, cloudPk, id, modelPk, projectPk).then((data) => {
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
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**PositioningPlan**](PositioningPlan.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getBuildings

> [Building] getBuildings(cloudPk, modelPk, projectPk)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getBuildings(cloudPk, modelPk, projectPk).then((data) => {
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

[**[Building]**](Building.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getClassificationsOfElement

> [Classification] getClassificationsOfElement(cloudPk, elementUuid, modelPk, projectPk)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let elementUuid = "elementUuid_example"; // String | 
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getClassificationsOfElement(cloudPk, elementUuid, modelPk, projectPk).then((data) => {
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
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**[Classification]**](Classification.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDocumentsOfElement

> [Document] getDocumentsOfElement(cloudPk, elementUuid, modelPk, projectPk)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let elementUuid = "elementUuid_example"; // String | 
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getDocumentsOfElement(cloudPk, elementUuid, modelPk, projectPk).then((data) => {
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
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**[Document]**](Document.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDrawing

> Drawing getDrawing(cloudPk, id, modelPk, projectPk)

Retrieve a drawing of a model

Retrieve a drawing of a model  Required scopes: model:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this drawing.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getDrawing(cloudPk, id, modelPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this drawing. | 
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**Drawing**](Drawing.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDrawings

> [Drawing] getDrawings(cloudPk, modelPk, projectPk)

Retrieve all drawings of a model

Retrieve all drawings of a model.  Required scopes: model:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getDrawings(cloudPk, modelPk, projectPk).then((data) => {
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

[**[Drawing]**](Drawing.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getElement

> Element getElement(cloudPk, modelPk, projectPk, uuid)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let uuid = "uuid_example"; // String | 
apiInstance.getElement(cloudPk, modelPk, projectPk, uuid).then((data) => {
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
 **uuid** | **String**|  | 

### Return type

[**Element**](Element.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getElementLinkedDocuments

> [DocumentWithElementList] getElementLinkedDocuments(cloudPk, modelPk, projectPk, opts)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let opts = {
  'classification': "classification_example", // String | 
  'classificationNotation': "classificationNotation_example", // String | 
  'type': "type_example" // String | 
};
apiInstance.getElementLinkedDocuments(cloudPk, modelPk, projectPk, opts).then((data) => {
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
 **classification** | **String**|  | [optional] 
 **classificationNotation** | **String**|  | [optional] 
 **type** | **String**|  | [optional] 

### Return type

[**[DocumentWithElementList]**](DocumentWithElementList.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getElementPropertySet

> PropertySet getElementPropertySet(cloudPk, elementUuid, id, modelPk, projectPk)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let elementUuid = "elementUuid_example"; // String | 
let id = 56; // Number | A unique integer value identifying this property set.
let modelPk = 56; // Number | 
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getElementPropertySet(cloudPk, elementUuid, id, modelPk, projectPk).then((data) => {
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
 **modelPk** | **Number**|  | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**PropertySet**](PropertySet.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getElementPropertySetProperties

> [Property] getElementPropertySetProperties(cloudPk, elementUuid, modelPk, projectPk, propertysetPk)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let elementUuid = "elementUuid_example"; // String | 
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let propertysetPk = 56; // Number | A unique integer value identifying this property set.
apiInstance.getElementPropertySetProperties(cloudPk, elementUuid, modelPk, projectPk, propertysetPk).then((data) => {
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
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **propertysetPk** | **Number**| A unique integer value identifying this property set. | 

### Return type

[**[Property]**](Property.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getElementPropertySetProperty

> Property getElementPropertySetProperty(cloudPk, elementUuid, id, modelPk, projectPk, propertysetPk)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let elementUuid = "elementUuid_example"; // String | 
let id = 56; // Number | A unique integer value identifying this property.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let propertysetPk = 56; // Number | A unique integer value identifying this property set.
apiInstance.getElementPropertySetProperty(cloudPk, elementUuid, id, modelPk, projectPk, propertysetPk).then((data) => {
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
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **propertysetPk** | **Number**| A unique integer value identifying this property set. | 

### Return type

[**Property**](Property.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getElementPropertySetPropertyDefinition

> PropertyDefinition getElementPropertySetPropertyDefinition(cloudPk, elementUuid, id, modelPk, projectPk, propertyPk, propertysetPk)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let elementUuid = "elementUuid_example"; // String | 
let id = 56; // Number | A unique integer value identifying this property definition.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let propertyPk = 56; // Number | A unique integer value identifying this property.
let propertysetPk = 56; // Number | A unique integer value identifying this property set.
apiInstance.getElementPropertySetPropertyDefinition(cloudPk, elementUuid, id, modelPk, projectPk, propertyPk, propertysetPk).then((data) => {
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
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **propertyPk** | **Number**| A unique integer value identifying this property. | 
 **propertysetPk** | **Number**| A unique integer value identifying this property set. | 

### Return type

[**PropertyDefinition**](PropertyDefinition.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getElementPropertySetPropertyDefinitionUnit

> Unit getElementPropertySetPropertyDefinitionUnit(cloudPk, elementUuid, id, modelPk, projectPk, propertyPk, propertydefinitionPk, propertysetPk)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let elementUuid = "elementUuid_example"; // String | 
let id = 56; // Number | A unique integer value identifying this unit.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let propertyPk = 56; // Number | A unique integer value identifying this property.
let propertydefinitionPk = 56; // Number | A unique integer value identifying this property definition.
let propertysetPk = 56; // Number | A unique integer value identifying this property set.
apiInstance.getElementPropertySetPropertyDefinitionUnit(cloudPk, elementUuid, id, modelPk, projectPk, propertyPk, propertydefinitionPk, propertysetPk).then((data) => {
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
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **propertyPk** | **Number**| A unique integer value identifying this property. | 
 **propertydefinitionPk** | **Number**| A unique integer value identifying this property definition. | 
 **propertysetPk** | **Number**| A unique integer value identifying this property set. | 

### Return type

[**Unit**](Unit.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getElementPropertySetPropertyDefinitionUnits

> [Unit] getElementPropertySetPropertyDefinitionUnits(cloudPk, elementUuid, modelPk, projectPk, propertyPk, propertydefinitionPk, propertysetPk)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let elementUuid = "elementUuid_example"; // String | 
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let propertyPk = 56; // Number | A unique integer value identifying this property.
let propertydefinitionPk = 56; // Number | A unique integer value identifying this property definition.
let propertysetPk = 56; // Number | A unique integer value identifying this property set.
apiInstance.getElementPropertySetPropertyDefinitionUnits(cloudPk, elementUuid, modelPk, projectPk, propertyPk, propertydefinitionPk, propertysetPk).then((data) => {
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
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **propertyPk** | **Number**| A unique integer value identifying this property. | 
 **propertydefinitionPk** | **Number**| A unique integer value identifying this property definition. | 
 **propertysetPk** | **Number**| A unique integer value identifying this property set. | 

### Return type

[**[Unit]**](Unit.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getElementPropertySetPropertyDefinitions

> [PropertyDefinition] getElementPropertySetPropertyDefinitions(cloudPk, elementUuid, modelPk, projectPk, propertyPk, propertysetPk)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let elementUuid = "elementUuid_example"; // String | 
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let propertyPk = 56; // Number | A unique integer value identifying this property.
let propertysetPk = 56; // Number | A unique integer value identifying this property set.
apiInstance.getElementPropertySetPropertyDefinitions(cloudPk, elementUuid, modelPk, projectPk, propertyPk, propertysetPk).then((data) => {
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
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **propertyPk** | **Number**| A unique integer value identifying this property. | 
 **propertysetPk** | **Number**| A unique integer value identifying this property set. | 

### Return type

[**[PropertyDefinition]**](PropertyDefinition.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getElementPropertySets

> [PropertySet] getElementPropertySets(cloudPk, elementUuid, modelPk, projectPk)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let elementUuid = "elementUuid_example"; // String | 
let modelPk = 56; // Number | 
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getElementPropertySets(cloudPk, elementUuid, modelPk, projectPk).then((data) => {
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
 **modelPk** | **Number**|  | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**[PropertySet]**](PropertySet.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getElements

> [Element] getElements(cloudPk, modelPk, projectPk, opts)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let opts = {
  'classification': "classification_example", // String | 
  'classificationNotation': "classificationNotation_example", // String | 
  'type': "type_example" // String | 
};
apiInstance.getElements(cloudPk, modelPk, projectPk, opts).then((data) => {
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
 **classification** | **String**|  | [optional] 
 **classificationNotation** | **String**|  | [optional] 
 **type** | **String**|  | [optional] 

### Return type

[**[Element]**](Element.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getElementsFromClassification

> [Element] getElementsFromClassification(cloudPk, modelClassificationPk, modelPk, projectPk)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | 
let modelClassificationPk = 56; // Number | A unique integer value identifying this classification.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getElementsFromClassification(cloudPk, modelClassificationPk, modelPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**|  | 
 **modelClassificationPk** | **Number**| A unique integer value identifying this classification. | 
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**[Element]**](Element.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLabel

> ModelLabel getLabel(cloudPk, id, modelPk, projectPk)

Retrieve one label of the model

Retrieve one label of the model  Required scopes: ifc:read, model:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this label.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getLabel(cloudPk, id, modelPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this label. | 
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**ModelLabel**](ModelLabel.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLabels

> [ModelLabel] getLabels(cloudPk, modelPk, projectPk, opts)

Retrieve all labels of the model

Retrieve all labels of the model  Required scopes: ifc:read, model:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let opts = {
  'isValidated': true // Boolean | 
};
apiInstance.getLabels(cloudPk, modelPk, projectPk, opts).then((data) => {
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
 **isValidated** | **Boolean**|  | [optional] 

### Return type

[**[ModelLabel]**](ModelLabel.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLayer

> Layer getLayer(cloudPk, id, modelPk, projectPk)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this layer.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getLayer(cloudPk, id, modelPk, projectPk).then((data) => {
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
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**Layer**](Layer.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLayers

> [Layer] getLayers(cloudPk, modelPk, projectPk)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getLayers(cloudPk, modelPk, projectPk).then((data) => {
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

[**[Layer]**](Layer.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMaterial

> Material getMaterial(cloudPk, elementUuid, id, modelPk, projectPk)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let elementUuid = "elementUuid_example"; // String | 
let id = 56; // Number | A unique integer value identifying this material.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getMaterial(cloudPk, elementUuid, id, modelPk, projectPk).then((data) => {
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
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**Material**](Material.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMaterials

> [Material] getMaterials(cloudPk, elementUuid, modelPk, projectPk)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let elementUuid = "elementUuid_example"; // String | 
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getMaterials(cloudPk, elementUuid, modelPk, projectPk).then((data) => {
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
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**[Material]**](Material.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getModel

> Model getModel(cloudPk, id, projectPk)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | 
let id = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | 
apiInstance.getModel(cloudPk, id, projectPk).then((data) => {
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

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getModelClassifications

> [Classification] getModelClassifications(cloudPk, modelPk, projectPk)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | 
let modelPk = 56; // Number | 
let projectPk = 56; // Number | 
apiInstance.getModelClassifications(cloudPk, modelPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**|  | 
 **modelPk** | **Number**|  | 
 **projectPk** | **Number**|  | 

### Return type

[**[Classification]**](Classification.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getModelMaterial

> Material getModelMaterial(cloudPk, id, modelPk, projectPk)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this material.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getModelMaterial(cloudPk, id, modelPk, projectPk).then((data) => {
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
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**Material**](Material.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getModelMaterials

> [Material] getModelMaterials(cloudPk, modelPk, projectPk)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getModelMaterials(cloudPk, modelPk, projectPk).then((data) => {
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

[**[Material]**](Material.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getModelProperties

> [Property] getModelProperties(cloudPk, modelPk, projectPk)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getModelProperties(cloudPk, modelPk, projectPk).then((data) => {
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

[**[Property]**](Property.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getModelProperty

> Property getModelProperty(cloudPk, id, modelPk, projectPk)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this property.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getModelProperty(cloudPk, id, modelPk, projectPk).then((data) => {
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
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**Property**](Property.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getModelPropertyDefinition

> PropertyDefinition getModelPropertyDefinition(cloudPk, id, modelPk, projectPk)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this property definition.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getModelPropertyDefinition(cloudPk, id, modelPk, projectPk).then((data) => {
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
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**PropertyDefinition**](PropertyDefinition.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getModelPropertyDefinitions

> [PropertyDefinition] getModelPropertyDefinitions(cloudPk, modelPk, projectPk)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getModelPropertyDefinitions(cloudPk, modelPk, projectPk).then((data) => {
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

[**[PropertyDefinition]**](PropertyDefinition.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getModelUnit

> Unit getModelUnit(cloudPk, id, modelPk, projectPk)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this unit.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getModelUnit(cloudPk, id, modelPk, projectPk).then((data) => {
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
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**Unit**](Unit.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getModelUnits

> [Unit] getModelUnits(cloudPk, modelPk, projectPk)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getModelUnits(cloudPk, modelPk, projectPk).then((data) => {
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

[**[Unit]**](Unit.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getModels

> [Model] getModels(cloudPk, projectPk, opts)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | 
let projectPk = 56; // Number | 
let opts = {
  'source': "source_example", // String | * `UPLOAD` - UPLOAD * `SPLIT` - SPLIT * `MERGE` - MERGE * `EXPORT` - EXPORT * `OPTIMIZED` - OPTIMIZED
  'status': ["null"], // [String] | * `C` - completed * `D` - deleted * `P` - pending * `W` - waiting * `I` - in process * `E` - errored * `X` - won't fix
  'type': ["null"] // [String] | * `IFC` - IFC * `DWG` - DWG * `DXF` - DXF * `GLTF` - GLTF * `PDF` - PDF * `JPEG` - JPEG * `PNG` - PNG * `OBJ` - OBJ * `POINT_CLOUD` - POINT_CLOUD * `METABUILDING` - METABUILDING * `PHOTOSPHERE` - PHOTOSPHERE * `PHOTOSPHERE_BUILDING` - PHOTOSPHERE_BUILDING
};
apiInstance.getModels(cloudPk, projectPk, opts).then((data) => {
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
 **source** | **String**| * &#x60;UPLOAD&#x60; - UPLOAD * &#x60;SPLIT&#x60; - SPLIT * &#x60;MERGE&#x60; - MERGE * &#x60;EXPORT&#x60; - EXPORT * &#x60;OPTIMIZED&#x60; - OPTIMIZED | [optional] 
 **status** | [**[String]**](String.md)| * &#x60;C&#x60; - completed * &#x60;D&#x60; - deleted * &#x60;P&#x60; - pending * &#x60;W&#x60; - waiting * &#x60;I&#x60; - in process * &#x60;E&#x60; - errored * &#x60;X&#x60; - won&#39;t fix | [optional] 
 **type** | [**[String]**](String.md)| * &#x60;IFC&#x60; - IFC * &#x60;DWG&#x60; - DWG * &#x60;DXF&#x60; - DXF * &#x60;GLTF&#x60; - GLTF * &#x60;PDF&#x60; - PDF * &#x60;JPEG&#x60; - JPEG * &#x60;PNG&#x60; - PNG * &#x60;OBJ&#x60; - OBJ * &#x60;POINT_CLOUD&#x60; - POINT_CLOUD * &#x60;METABUILDING&#x60; - METABUILDING * &#x60;PHOTOSPHERE&#x60; - PHOTOSPHERE * &#x60;PHOTOSPHERE_BUILDING&#x60; - PHOTOSPHERE_BUILDING | [optional] 

### Return type

[**[Model]**](Model.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProcessorHandler

> ProcessorHandler getProcessorHandler(cloudPk, id, modelPk, projectPk)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this processor handler.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getProcessorHandler(cloudPk, id, modelPk, projectPk).then((data) => {
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
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**ProcessorHandler**](ProcessorHandler.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProcessorHandlers

> [ProcessorHandler] getProcessorHandlers(cloudPk, modelPk, projectPk)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getProcessorHandlers(cloudPk, modelPk, projectPk).then((data) => {
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

[**[ProcessorHandler]**](ProcessorHandler.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPropertiesTypes

> [PropertyList] getPropertiesTypes(cloudPk, modelPk, projectPk, opts)

Retrieve all property types and their value type used in this model

Retrieve all property types and their value type used in this model  Required scopes: ifc:read, model:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let opts = {
  'classification': "classification_example", // String | 
  'classificationNotation': "classificationNotation_example", // String | 
  'type': "type_example" // String | 
};
apiInstance.getPropertiesTypes(cloudPk, modelPk, projectPk, opts).then((data) => {
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
 **classification** | **String**|  | [optional] 
 **classificationNotation** | **String**|  | [optional] 
 **type** | **String**|  | [optional] 

### Return type

[**[PropertyList]**](PropertyList.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPropertySet

> PropertySet getPropertySet(cloudPk, id, modelPk, projectPk)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this property set.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getPropertySet(cloudPk, id, modelPk, projectPk).then((data) => {
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
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**PropertySet**](PropertySet.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPropertySets

> [PropertySet] getPropertySets(cloudPk, modelPk, projectPk)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getPropertySets(cloudPk, modelPk, projectPk).then((data) => {
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

[**[PropertySet]**](PropertySet.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRawElements

> RawElements getRawElements(cloudPk, modelPk, projectPk, opts)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let opts = {
  'classification': "classification_example", // String | 
  'classificationNotation': "classificationNotation_example", // String | 
  'type': "type_example" // String | 
};
apiInstance.getRawElements(cloudPk, modelPk, projectPk, opts).then((data) => {
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
 **classification** | **String**|  | [optional] 
 **classificationNotation** | **String**|  | [optional] 
 **type** | **String**|  | [optional] 

### Return type

[**RawElements**](RawElements.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSimpleElement

> SimpleElement getSimpleElement(cloudPk, modelPk, projectPk, uuid)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let uuid = "uuid_example"; // String | 
apiInstance.getSimpleElement(cloudPk, modelPk, projectPk, uuid).then((data) => {
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
 **uuid** | **String**|  | 

### Return type

[**SimpleElement**](SimpleElement.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSimpleElements

> SimpleElement getSimpleElements(cloudPk, modelPk, projectPk, opts)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let opts = {
  'classification': "classification_example", // String | 
  'classificationNotation': "classificationNotation_example", // String | 
  'type': "type_example" // String | 
};
apiInstance.getSimpleElements(cloudPk, modelPk, projectPk, opts).then((data) => {
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
 **classification** | **String**|  | [optional] 
 **classificationNotation** | **String**|  | [optional] 
 **type** | **String**|  | [optional] 

### Return type

[**SimpleElement**](SimpleElement.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSpace

> Space getSpace(cloudPk, id, modelPk, projectPk)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this space.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getSpace(cloudPk, id, modelPk, projectPk).then((data) => {
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
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**Space**](Space.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSpaces

> [Space] getSpaces(cloudPk, modelPk, projectPk)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getSpaces(cloudPk, modelPk, projectPk).then((data) => {
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

[**[Space]**](Space.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getStorey

> Storey getStorey(cloudPk, modelPk, projectPk, uuid)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let uuid = "uuid_example"; // String | 
apiInstance.getStorey(cloudPk, modelPk, projectPk, uuid).then((data) => {
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
 **uuid** | **String**|  | 

### Return type

[**Storey**](Storey.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getStoreyPlanPositioning

> PositioningPlan getStoreyPlanPositioning(cloudPk, id, modelPk, projectPk, storeyUuid)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this element.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let storeyUuid = "storeyUuid_example"; // String | 
apiInstance.getStoreyPlanPositioning(cloudPk, id, modelPk, projectPk, storeyUuid).then((data) => {
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
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **storeyUuid** | **String**|  | 

### Return type

[**PositioningPlan**](PositioningPlan.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getStoreys

> [Storey] getStoreys(cloudPk, modelPk, projectPk)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getStoreys(cloudPk, modelPk, projectPk).then((data) => {
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

[**[Storey]**](Storey.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSystem

> System getSystem(cloudPk, modelPk, projectPk, uuid)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let uuid = "uuid_example"; // String | 
apiInstance.getSystem(cloudPk, modelPk, projectPk, uuid).then((data) => {
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
 **uuid** | **String**|  | 

### Return type

[**System**](System.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSystems

> [System] getSystems(cloudPk, modelPk, projectPk)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getSystems(cloudPk, modelPk, projectPk).then((data) => {
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

[**[System]**](System.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTileset

> getTileset(cloudPk, id, projectPk, opts)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | 
let id = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | 
let opts = {
  'tileFormat': "'pnts'" // String | 
};
apiInstance.getTileset(cloudPk, id, projectPk, opts).then(() => {
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

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getTypes

> [String] getTypes(cloudPk, modelPk, projectPk)

Retrieve all IFC Types used in this model

Retrieve all IFC Types used in this model  Required scopes: ifc:read, model:read

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getTypes(cloudPk, modelPk, projectPk).then((data) => {
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

**[String]**

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getZone

> Zone getZone(cloudPk, id, modelPk, projectPk)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this zone.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.getZone(cloudPk, id, modelPk, projectPk).then((data) => {
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
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**Zone**](Zone.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getZoneSpace

> ZoneSpace getZoneSpace(cloudPk, id, modelPk, projectPk, zonePk)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this space.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let zonePk = 56; // Number | A unique integer value identifying this zone.
apiInstance.getZoneSpace(cloudPk, id, modelPk, projectPk, zonePk).then((data) => {
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
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **zonePk** | **Number**| A unique integer value identifying this zone. | 

### Return type

[**ZoneSpace**](ZoneSpace.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getZoneSpaces

> [ZoneSpace] getZoneSpaces(cloudPk, modelPk, projectPk, zonePk)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let zonePk = 56; // Number | A unique integer value identifying this zone.
apiInstance.getZoneSpaces(cloudPk, modelPk, projectPk, zonePk).then((data) => {
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
 **zonePk** | **Number**| A unique integer value identifying this zone. | 

### Return type

[**[ZoneSpace]**](ZoneSpace.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getZones

> [Zone] getZones(cloudPk, modelPk, projectPk, opts)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let opts = {
  'color': "color_example" // String | 
};
apiInstance.getZones(cloudPk, modelPk, projectPk, opts).then((data) => {
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
 **color** | **String**|  | [optional] 

### Return type

[**[Zone]**](Zone.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## linkDocumentsOfElement

> [Document] linkDocumentsOfElement(cloudPk, elementUuid, modelPk, projectPk, requestBody)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let elementUuid = "elementUuid_example"; // String | 
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let requestBody = [null]; // [Number] | 
apiInstance.linkDocumentsOfElement(cloudPk, elementUuid, modelPk, projectPk, requestBody).then((data) => {
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
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **requestBody** | [**[Number]**](Number.md)|  | 

### Return type

[**[Document]**](Document.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## listClassificationElementRelations

> [ElementClassificationRelation] listClassificationElementRelations(cloudPk, modelPk, projectPk)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | 
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.listClassificationElementRelations(cloudPk, modelPk, projectPk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**|  | 
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

[**[ElementClassificationRelation]**](ElementClassificationRelation.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## mergeIfcs

> mergeIfcs(cloudPk, projectPk, ifcMergeRequest)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | 
let projectPk = 56; // Number | 
let ifcMergeRequest = new bimdata.IfcMergeRequest(); // IfcMergeRequest | 
apiInstance.mergeIfcs(cloudPk, projectPk, ifcMergeRequest).then(() => {
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

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: Not defined


## optimizeIfc

> optimizeIfc(cloudPk, id, projectPk, opts)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | 
let id = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | 
let opts = {
  'ifcOptimizeRequest': new bimdata.IfcOptimizeRequest() // IfcOptimizeRequest | 
};
apiInstance.optimizeIfc(cloudPk, id, projectPk, opts).then(() => {
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

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: Not defined


## removeAllElementPropertySet

> removeAllElementPropertySet(cloudPk, elementUuid, modelPk, projectPk)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let elementUuid = "elementUuid_example"; // String | 
let modelPk = 56; // Number | 
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.removeAllElementPropertySet(cloudPk, elementUuid, modelPk, projectPk).then(() => {
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
 **modelPk** | **Number**|  | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## removeClassificationOfElement

> removeClassificationOfElement(cloudPk, elementUuid, id, modelPk, projectPk)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let elementUuid = "elementUuid_example"; // String | 
let id = 56; // Number | A unique integer value identifying this classification.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.removeClassificationOfElement(cloudPk, elementUuid, id, modelPk, projectPk).then(() => {
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
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## removeDocumentOfElement

> removeDocumentOfElement(cloudPk, elementUuid, id, modelPk, projectPk)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let elementUuid = "elementUuid_example"; // String | 
let id = 56; // Number | A unique integer value identifying this document.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.removeDocumentOfElement(cloudPk, elementUuid, id, modelPk, projectPk).then(() => {
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
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## removeElementPropertySet

> removeElementPropertySet(cloudPk, elementUuid, id, modelPk, projectPk)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let elementUuid = "elementUuid_example"; // String | 
let id = 56; // Number | A unique integer value identifying this property set.
let modelPk = 56; // Number | 
let projectPk = 56; // Number | A unique integer value identifying this project.
apiInstance.removeElementPropertySet(cloudPk, elementUuid, id, modelPk, projectPk).then(() => {
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
 **modelPk** | **Number**|  | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## removeElementPropertySetProperty

> removeElementPropertySetProperty(cloudPk, elementUuid, id, modelPk, projectPk, propertysetPk)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let elementUuid = "elementUuid_example"; // String | 
let id = 56; // Number | A unique integer value identifying this property.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let propertysetPk = 56; // Number | A unique integer value identifying this property set.
apiInstance.removeElementPropertySetProperty(cloudPk, elementUuid, id, modelPk, projectPk, propertysetPk).then(() => {
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
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **propertysetPk** | **Number**| A unique integer value identifying this property set. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## removeElementPropertySetPropertyDefinition

> removeElementPropertySetPropertyDefinition(cloudPk, elementUuid, id, modelPk, projectPk, propertyPk, propertysetPk)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let elementUuid = "elementUuid_example"; // String | 
let id = 56; // Number | A unique integer value identifying this property definition.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let propertyPk = 56; // Number | A unique integer value identifying this property.
let propertysetPk = 56; // Number | A unique integer value identifying this property set.
apiInstance.removeElementPropertySetPropertyDefinition(cloudPk, elementUuid, id, modelPk, projectPk, propertyPk, propertysetPk).then(() => {
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
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **propertyPk** | **Number**| A unique integer value identifying this property. | 
 **propertysetPk** | **Number**| A unique integer value identifying this property set. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## removeElementPropertySetPropertyDefinitionUnit

> removeElementPropertySetPropertyDefinitionUnit(cloudPk, elementUuid, id, modelPk, projectPk, propertyPk, propertydefinitionPk, propertysetPk)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let elementUuid = "elementUuid_example"; // String | 
let id = 56; // Number | A unique integer value identifying this unit.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let propertyPk = 56; // Number | A unique integer value identifying this property.
let propertydefinitionPk = 56; // Number | A unique integer value identifying this property definition.
let propertysetPk = 56; // Number | A unique integer value identifying this property set.
apiInstance.removeElementPropertySetPropertyDefinitionUnit(cloudPk, elementUuid, id, modelPk, projectPk, propertyPk, propertydefinitionPk, propertysetPk).then(() => {
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
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **propertyPk** | **Number**| A unique integer value identifying this property. | 
 **propertydefinitionPk** | **Number**| A unique integer value identifying this property definition. | 
 **propertysetPk** | **Number**| A unique integer value identifying this property set. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## removeElementsFromClassification

> removeElementsFromClassification(cloudPk, modelClassificationPk, modelPk, projectPk, uuid)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | 
let modelClassificationPk = 56; // Number | A unique integer value identifying this classification.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let uuid = "uuid_example"; // String | 
apiInstance.removeElementsFromClassification(cloudPk, modelClassificationPk, modelPk, projectPk, uuid).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**|  | 
 **modelClassificationPk** | **Number**| A unique integer value identifying this classification. | 
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **uuid** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## reprocessModel

> reprocessModel(cloudPk, id, projectPk)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | 
let id = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | 
apiInstance.reprocessModel(cloudPk, id, projectPk).then(() => {
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

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## updateAccessToken

> IfcAccessToken updateAccessToken(cloudPk, modelPk, projectPk, token, opts)

Update some fields of a token

DEPECRATED: Use ProjectAccessToken instead  Required scopes: ifc:token_manage, model:token_manage

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let token = "token_example"; // String | 
let opts = {
  'patchedIfcAccessTokenRequest': new bimdata.PatchedIfcAccessTokenRequest() // PatchedIfcAccessTokenRequest | 
};
apiInstance.updateAccessToken(cloudPk, modelPk, projectPk, token, opts).then((data) => {
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
 **token** | **String**|  | 
 **patchedIfcAccessTokenRequest** | [**PatchedIfcAccessTokenRequest**](PatchedIfcAccessTokenRequest.md)|  | [optional] 

### Return type

[**IfcAccessToken**](IfcAccessToken.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## updateBuilding

> Building updateBuilding(cloudPk, modelPk, projectPk, uuid, opts)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let uuid = "uuid_example"; // String | 
let opts = {
  'patchedStoreyBuildingRequest': new bimdata.PatchedStoreyBuildingRequest() // PatchedStoreyBuildingRequest | 
};
apiInstance.updateBuilding(cloudPk, modelPk, projectPk, uuid, opts).then((data) => {
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
 **uuid** | **String**|  | 
 **patchedStoreyBuildingRequest** | [**PatchedStoreyBuildingRequest**](PatchedStoreyBuildingRequest.md)|  | [optional] 

### Return type

[**Building**](Building.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## updateBuildingPlanPositioning

> PositioningPlan updateBuildingPlanPositioning(buildingUuid, cloudPk, id, modelPk, projectPk, opts)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let buildingUuid = "buildingUuid_example"; // String | 
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this element.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let opts = {
  'patchedPositioningPlanRequest': new bimdata.PatchedPositioningPlanRequest() // PatchedPositioningPlanRequest | 
};
apiInstance.updateBuildingPlanPositioning(buildingUuid, cloudPk, id, modelPk, projectPk, opts).then((data) => {
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
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **patchedPositioningPlanRequest** | [**PatchedPositioningPlanRequest**](PatchedPositioningPlanRequest.md)|  | [optional] 

### Return type

[**PositioningPlan**](PositioningPlan.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## updateDrawing

> Drawing updateDrawing(cloudPk, id, modelPk, projectPk, opts)

Update some fields of a drawing

Update some fields of a drawing  Required scopes: model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this drawing.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let opts = {
  'patchedDrawingRequest': new bimdata.PatchedDrawingRequest() // PatchedDrawingRequest | 
};
apiInstance.updateDrawing(cloudPk, id, modelPk, projectPk, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this drawing. | 
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **patchedDrawingRequest** | [**PatchedDrawingRequest**](PatchedDrawingRequest.md)|  | [optional] 

### Return type

[**Drawing**](Drawing.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## updateElement

> Element updateElement(cloudPk, modelPk, projectPk, uuid, opts)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let uuid = "uuid_example"; // String | 
let opts = {
  'patchedElementRequest': new bimdata.PatchedElementRequest() // PatchedElementRequest | 
};
apiInstance.updateElement(cloudPk, modelPk, projectPk, uuid, opts).then((data) => {
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
 **uuid** | **String**|  | 
 **patchedElementRequest** | [**PatchedElementRequest**](PatchedElementRequest.md)|  | [optional] 

### Return type

[**Element**](Element.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## updateElementPropertySetProperty

> Property updateElementPropertySetProperty(cloudPk, elementUuid, id, modelPk, projectPk, propertysetPk, opts)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let elementUuid = "elementUuid_example"; // String | 
let id = 56; // Number | A unique integer value identifying this property.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let propertysetPk = 56; // Number | A unique integer value identifying this property set.
let opts = {
  'patchedPropertyRequest': new bimdata.PatchedPropertyRequest() // PatchedPropertyRequest | 
};
apiInstance.updateElementPropertySetProperty(cloudPk, elementUuid, id, modelPk, projectPk, propertysetPk, opts).then((data) => {
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
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **propertysetPk** | **Number**| A unique integer value identifying this property set. | 
 **patchedPropertyRequest** | [**PatchedPropertyRequest**](PatchedPropertyRequest.md)|  | [optional] 

### Return type

[**Property**](Property.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## updateLabel

> ModelLabel updateLabel(cloudPk, id, modelPk, projectPk, opts)

Update some fields of a label

Update some fields of a label.  Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this label.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let opts = {
  'patchedModelLabelRequest': new bimdata.PatchedModelLabelRequest() // PatchedModelLabelRequest | 
};
apiInstance.updateLabel(cloudPk, id, modelPk, projectPk, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudPk** | **Number**| A unique integer value identifying this cloud. | 
 **id** | **Number**| A unique integer value identifying this label. | 
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **patchedModelLabelRequest** | [**PatchedModelLabelRequest**](PatchedModelLabelRequest.md)|  | [optional] 

### Return type

[**ModelLabel**](ModelLabel.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## updateLayer

> Layer updateLayer(cloudPk, id, modelPk, projectPk, opts)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this layer.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let opts = {
  'patchedLayerRequest': new bimdata.PatchedLayerRequest() // PatchedLayerRequest | 
};
apiInstance.updateLayer(cloudPk, id, modelPk, projectPk, opts).then((data) => {
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
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **patchedLayerRequest** | [**PatchedLayerRequest**](PatchedLayerRequest.md)|  | [optional] 

### Return type

[**Layer**](Layer.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## updateMask2D

> Mask2D updateMask2D(cloudPk, id, projectPk, opts)

Partial update of a 2D mask for the model

Partial update of a 2D mask for the model. Only available for PDF, JPEG and PNG models

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | 
let id = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | 
let opts = {
  'patchedMask2DRequest': new bimdata.PatchedMask2DRequest() // PatchedMask2DRequest | 
};
apiInstance.updateMask2D(cloudPk, id, projectPk, opts).then((data) => {
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
 **patchedMask2DRequest** | [**PatchedMask2DRequest**](PatchedMask2DRequest.md)|  | [optional] 

### Return type

[**Mask2D**](Mask2D.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## updateModel

> Model updateModel(cloudPk, id, projectPk, opts)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | 
let id = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | 
let opts = {
  'patchedModelRequest': new bimdata.PatchedModelRequest() // PatchedModelRequest | 
};
apiInstance.updateModel(cloudPk, id, projectPk, opts).then((data) => {
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

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## updateModelFiles

> ModelFiles updateModelFiles(cloudPk, id, projectPk, opts)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | 
let id = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | 
let opts = {
  'structureFile': "/path/to/file", // File | 
  'systemsFile': "/path/to/file", // File | 
  'mapFile': "/path/to/file", // File | 
  'gltfFile': "/path/to/file", // File | 
  'previewFile': "/path/to/file", // File | 
  'xktFile': "/path/to/file", // File | DEPRECATED. xkt file url is now in xkt_files field with its version number
  'binary2dFile': "/path/to/file" // File | 
};
apiInstance.updateModelFiles(cloudPk, id, projectPk, opts).then((data) => {
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
 **xktFile** | **File**| DEPRECATED. xkt file url is now in xkt_files field with its version number | [optional] 
 **binary2dFile** | **File**|  | [optional] 

### Return type

[**ModelFiles**](ModelFiles.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: multipart/form-data, application/x-www-form-urlencoded
- **Accept**: application/json


## updateModelProperty

> Property updateModelProperty(cloudPk, id, modelPk, projectPk, opts)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this property.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let opts = {
  'patchedPropertyRequest': new bimdata.PatchedPropertyRequest() // PatchedPropertyRequest | 
};
apiInstance.updateModelProperty(cloudPk, id, modelPk, projectPk, opts).then((data) => {
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
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **patchedPropertyRequest** | [**PatchedPropertyRequest**](PatchedPropertyRequest.md)|  | [optional] 

### Return type

[**Property**](Property.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## updateModelPropertyDefinition

> PropertyDefinition updateModelPropertyDefinition(cloudPk, id, modelPk, projectPk, opts)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this property definition.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let opts = {
  'patchedPropertyDefinitionRequest': new bimdata.PatchedPropertyDefinitionRequest() // PatchedPropertyDefinitionRequest | 
};
apiInstance.updateModelPropertyDefinition(cloudPk, id, modelPk, projectPk, opts).then((data) => {
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
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **patchedPropertyDefinitionRequest** | [**PatchedPropertyDefinitionRequest**](PatchedPropertyDefinitionRequest.md)|  | [optional] 

### Return type

[**PropertyDefinition**](PropertyDefinition.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## updateModelTransform

> Transform updateModelTransform(cloudPk, id, projectPk, opts)

Update model transform

Update model transform (translate, scale, rotate and opacity)  Required scopes: ifc:write, model:write

### Example

```javascript
import bimdata from '@bimdata/bimdata-api-client';
let defaultClient = bimdata.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | 
let id = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | 
let opts = {
  'patchedTransformRequest': new bimdata.PatchedTransformRequest() // PatchedTransformRequest | 
};
apiInstance.updateModelTransform(cloudPk, id, projectPk, opts).then((data) => {
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
 **patchedTransformRequest** | [**PatchedTransformRequest**](PatchedTransformRequest.md)|  | [optional] 

### Return type

[**Transform**](Transform.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## updateModelUnit

> Unit updateModelUnit(cloudPk, id, modelPk, projectPk, opts)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this unit.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let opts = {
  'patchedUnitRequest': new bimdata.PatchedUnitRequest() // PatchedUnitRequest | 
};
apiInstance.updateModelUnit(cloudPk, id, modelPk, projectPk, opts).then((data) => {
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
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **patchedUnitRequest** | [**PatchedUnitRequest**](PatchedUnitRequest.md)|  | [optional] 

### Return type

[**Unit**](Unit.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## updateOrderBuildingPlan

> Storey updateOrderBuildingPlan(buildingUuid, cloudPk, modelPk, projectPk, requestBody)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let buildingUuid = "buildingUuid_example"; // String | 
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let requestBody = [null]; // [Number] | 
apiInstance.updateOrderBuildingPlan(buildingUuid, cloudPk, modelPk, projectPk, requestBody).then((data) => {
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
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **requestBody** | [**[Number]**](Number.md)|  | 

### Return type

[**Storey**](Storey.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## updateOrderStoreyPlan

> Storey updateOrderStoreyPlan(cloudPk, modelPk, projectPk, storeyUuid, requestBody)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let storeyUuid = "storeyUuid_example"; // String | 
let requestBody = [null]; // [Number] | 
apiInstance.updateOrderStoreyPlan(cloudPk, modelPk, projectPk, storeyUuid, requestBody).then((data) => {
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
 **storeyUuid** | **String**|  | 
 **requestBody** | [**[Number]**](Number.md)|  | 

### Return type

[**Storey**](Storey.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## updateOrderStoreys

> [Storey] updateOrderStoreys(cloudPk, modelPk, projectPk, requestBody)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let requestBody = ["null"]; // [String] | 
apiInstance.updateOrderStoreys(cloudPk, modelPk, projectPk, requestBody).then((data) => {
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
 **requestBody** | [**[String]**](String.md)|  | 

### Return type

[**[Storey]**](Storey.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## updateProcessorHandler

> ProcessorHandler updateProcessorHandler(cloudPk, id, modelPk, projectPk, opts)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this processor handler.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let opts = {
  'patchedProcessorHandlerRequest': new bimdata.PatchedProcessorHandlerRequest() // PatchedProcessorHandlerRequest | 
};
apiInstance.updateProcessorHandler(cloudPk, id, modelPk, projectPk, opts).then((data) => {
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
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **patchedProcessorHandlerRequest** | [**PatchedProcessorHandlerRequest**](PatchedProcessorHandlerRequest.md)|  | [optional] 

### Return type

[**ProcessorHandler**](ProcessorHandler.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## updatePropertySet

> PropertySet updatePropertySet(cloudPk, id, modelPk, projectPk, opts)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this property set.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let opts = {
  'patchedPropertySetRequest': new bimdata.PatchedPropertySetRequest() // PatchedPropertySetRequest | 
};
apiInstance.updatePropertySet(cloudPk, id, modelPk, projectPk, opts).then((data) => {
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
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **patchedPropertySetRequest** | [**PatchedPropertySetRequest**](PatchedPropertySetRequest.md)|  | [optional] 

### Return type

[**PropertySet**](PropertySet.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## updateSpace

> Space updateSpace(cloudPk, id, modelPk, projectPk, opts)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this space.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let opts = {
  'patchedSpaceRequest': new bimdata.PatchedSpaceRequest() // PatchedSpaceRequest | 
};
apiInstance.updateSpace(cloudPk, id, modelPk, projectPk, opts).then((data) => {
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
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **patchedSpaceRequest** | [**PatchedSpaceRequest**](PatchedSpaceRequest.md)|  | [optional] 

### Return type

[**Space**](Space.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## updateStorey

> Storey updateStorey(cloudPk, modelPk, projectPk, uuid, opts)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let uuid = "uuid_example"; // String | 
let opts = {
  'patchedStoreyBuildingRequest': new bimdata.PatchedStoreyBuildingRequest() // PatchedStoreyBuildingRequest | 
};
apiInstance.updateStorey(cloudPk, modelPk, projectPk, uuid, opts).then((data) => {
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
 **uuid** | **String**|  | 
 **patchedStoreyBuildingRequest** | [**PatchedStoreyBuildingRequest**](PatchedStoreyBuildingRequest.md)|  | [optional] 

### Return type

[**Storey**](Storey.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## updateStoreyPlanPositioning

> PositioningPlan updateStoreyPlanPositioning(cloudPk, id, modelPk, projectPk, storeyUuid, opts)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this element.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let storeyUuid = "storeyUuid_example"; // String | 
let opts = {
  'patchedPositioningPlanRequest': new bimdata.PatchedPositioningPlanRequest() // PatchedPositioningPlanRequest | 
};
apiInstance.updateStoreyPlanPositioning(cloudPk, id, modelPk, projectPk, storeyUuid, opts).then((data) => {
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
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **storeyUuid** | **String**|  | 
 **patchedPositioningPlanRequest** | [**PatchedPositioningPlanRequest**](PatchedPositioningPlanRequest.md)|  | [optional] 

### Return type

[**PositioningPlan**](PositioningPlan.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## updateSystem

> System updateSystem(cloudPk, modelPk, projectPk, uuid, opts)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let uuid = "uuid_example"; // String | 
let opts = {
  'patchedSystemRequest': new bimdata.PatchedSystemRequest() // PatchedSystemRequest | 
};
apiInstance.updateSystem(cloudPk, modelPk, projectPk, uuid, opts).then((data) => {
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
 **uuid** | **String**|  | 
 **patchedSystemRequest** | [**PatchedSystemRequest**](PatchedSystemRequest.md)|  | [optional] 

### Return type

[**System**](System.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## updateZone

> Zone updateZone(cloudPk, id, modelPk, projectPk, opts)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this zone.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let opts = {
  'patchedZoneRequest': new bimdata.PatchedZoneRequest() // PatchedZoneRequest | 
};
apiInstance.updateZone(cloudPk, id, modelPk, projectPk, opts).then((data) => {
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
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **patchedZoneRequest** | [**PatchedZoneRequest**](PatchedZoneRequest.md)|  | [optional] 

### Return type

[**Zone**](Zone.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## updateZoneSpace

> ZoneSpace updateZoneSpace(cloudPk, id, modelPk, projectPk, zonePk, opts)

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
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new bimdata.ModelApi();
let cloudPk = 56; // Number | A unique integer value identifying this cloud.
let id = 56; // Number | A unique integer value identifying this space.
let modelPk = 56; // Number | A unique integer value identifying this model.
let projectPk = 56; // Number | A unique integer value identifying this project.
let zonePk = 56; // Number | A unique integer value identifying this zone.
let opts = {
  'patchedZoneSpaceRequest': new bimdata.PatchedZoneSpaceRequest() // PatchedZoneSpaceRequest | 
};
apiInstance.updateZoneSpace(cloudPk, id, modelPk, projectPk, zonePk, opts).then((data) => {
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
 **modelPk** | **Number**| A unique integer value identifying this model. | 
 **projectPk** | **Number**| A unique integer value identifying this project. | 
 **zonePk** | **Number**| A unique integer value identifying this zone. | 
 **patchedZoneSpaceRequest** | [**PatchedZoneSpaceRequest**](PatchedZoneSpaceRequest.md)|  | [optional] 

### Return type

[**ZoneSpace**](ZoneSpace.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


# bimdata.ModelSerializerWithoutChildren

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [readonly] 
**name** | **String** |  | [optional] 
**type** | **String** | * &#x60;IFC&#x60; - IFC * &#x60;DWG&#x60; - DWG * &#x60;DXF&#x60; - DXF * &#x60;GLTF&#x60; - GLTF * &#x60;PDF&#x60; - PDF * &#x60;JPEG&#x60; - JPEG * &#x60;PNG&#x60; - PNG * &#x60;OBJ&#x60; - OBJ * &#x60;POINT_CLOUD&#x60; - POINT_CLOUD * &#x60;METABUILDING&#x60; - METABUILDING * &#x60;PHOTOSPHERE&#x60; - PHOTOSPHERE * &#x60;PHOTOSPHERE_BUILDING&#x60; - PHOTOSPHERE_BUILDING | [readonly] 
**creator** | [**User**](User.md) |  | [readonly] 
**status** | **String** |  | [readonly] 
**source** | **String** | * &#x60;UPLOAD&#x60; - UPLOAD * &#x60;SPLIT&#x60; - SPLIT * &#x60;MERGE&#x60; - MERGE * &#x60;EXPORT&#x60; - EXPORT * &#x60;OPTIMIZED&#x60; - OPTIMIZED | [optional] 
**createdAt** | **Date** |  | [readonly] 
**updatedAt** | **Date** |  | [readonly] 
**documentId** | **Number** |  | [readonly] 
**document** | [**ModelDocument**](ModelDocument.md) |  | [readonly] 
**structureFile** | **String** |  | [readonly] 
**systemsFile** | **String** |  | [readonly] 
**mapFile** | **String** |  | [readonly] 
**gltfFile** | **String** |  | [readonly] 
**previewFile** | **String** |  | [readonly] 
**viewer360File** | **String** | DEPRECATED: Use &#39;preview_file&#39; instead. | [readonly] 
**xktFile** | **String** | DEPRECATED: Use &#39;xkt_files&#39; instead. This field only respond with xkt v6 files | [readonly] 
**xktFiles** | [**[XktFile]**](XktFile.md) |  | [readonly] 
**binary2dFile** | **String** |  | [readonly] 
**projectId** | **Number** |  | [readonly] 
**worldPosition** | **[Number]** | [x,y,z] array of the position of the local_placement in world coordinates | [optional] 
**sizeRatio** | **Number** | How many meters a unit represents | [optional] 
**errors** | **[String]** | List of errors that happened during IFC processing | [readonly] 
**warnings** | **[String]** | List of warnings that happened during IFC processing | [readonly] 
**archived** | **Boolean** |  | [optional] 
**version** | **String** | This field is only for information. Updating it won&#39;t impact the export. | [optional] 
**northVector** | **[[Number]]** | This field is only for information. Updating it won&#39;t impact the export. | [optional] 
**recommanded2dAngle** | **Number** | This is the angle in clockwise degree to apply on the 2D to optimise the horizontality of objects. This field is only for information. Updating it won&#39;t impact the export. | [optional] 
**parentId** | **Number** | The first page of the pdf | [readonly] 
**pageNumber** | **Number** | The page number of the related pdf | [readonly] 
**layoutName** | **String** | The name of the DWG layout (only set when type&#x3D;&#x3D;DWG) | [optional] 
**mask2d** | [**Mask2D**](Mask2D.md) |  | [readonly] 
**transform** | [**Transform**](Transform.md) |  | [readonly] 



## Enum: TypeEnum


* `IFC` (value: `"IFC"`)

* `DWG` (value: `"DWG"`)

* `DXF` (value: `"DXF"`)

* `GLTF` (value: `"GLTF"`)

* `PDF` (value: `"PDF"`)

* `JPEG` (value: `"JPEG"`)

* `PNG` (value: `"PNG"`)

* `OBJ` (value: `"OBJ"`)

* `POINT_CLOUD` (value: `"POINT_CLOUD"`)

* `METABUILDING` (value: `"METABUILDING"`)

* `PHOTOSPHERE` (value: `"PHOTOSPHERE"`)

* `PHOTOSPHERE_BUILDING` (value: `"PHOTOSPHERE_BUILDING"`)





## Enum: SourceEnum


* `UPLOAD` (value: `"UPLOAD"`)

* `SPLIT` (value: `"SPLIT"`)

* `MERGE` (value: `"MERGE"`)

* `EXPORT` (value: `"EXPORT"`)

* `OPTIMIZED` (value: `"OPTIMIZED"`)





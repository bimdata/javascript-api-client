# bimdata.Model

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [readonly] 
**name** | **String** |  | [optional] 
**type** | **String** |  | [readonly] 
**creator** | [**User**](User.md) |  | [readonly] 
**status** | **String** |  | [readonly] 
**source** | **String** |  | [optional] 
**createdAt** | **Date** |  | [readonly] 
**updatedAt** | **Date** |  | [readonly] 
**documentId** | **Number** |  | [readonly] 
**document** | [**Document**](Document.md) |  | [readonly] 
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
**pageNumber** | **Number** | The page number of the related pdf | [readonly] 
**children** | [**[ModelSerializerWithoutChildren]**](ModelSerializerWithoutChildren.md) | Contains additional pages of a pdf | [readonly] 



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





## Enum: SourceEnum


* `UPLOAD` (value: `"UPLOAD"`)

* `SPLIT` (value: `"SPLIT"`)

* `MERGE` (value: `"MERGE"`)

* `EXPORT` (value: `"EXPORT"`)

* `OPTIMIZED` (value: `"OPTIMIZED"`)





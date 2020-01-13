# bimdata.Ifc

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] [readonly] 
**name** | **String** |  | [optional] [readonly] 
**creator** | [**User**](User.md) |  | [optional] 
**status** | **String** |  | [optional] [readonly] 
**source** | **String** |  | [optional] 
**createdAt** | **Date** |  | [optional] [readonly] 
**updatedAt** | **Date** |  | [optional] [readonly] 
**documentId** | **String** |  | [optional] [readonly] 
**document** | [**Document**](Document.md) |  | [optional] 
**structureFile** | **String** |  | [optional] [readonly] 
**systemsFile** | **String** |  | [optional] [readonly] 
**mapFile** | **String** |  | [optional] [readonly] 
**gltfFile** | **String** |  | [optional] [readonly] 
**bvhTreeFile** | **String** |  | [optional] [readonly] 
**viewer360File** | **String** |  | [optional] [readonly] 
**xktFile** | **String** |  | [optional] [readonly] 
**projectId** | **String** |  | [optional] [readonly] 
**worldPosition** | **[Number]** | [x,y,z] array of the position of the local_placement in world coordinates | [optional] 
**errors** | **[String]** | List of errors that happened during IFC processing | [optional] [readonly] 
**warnings** | **[String]** | List of warnings that happened during IFC processing | [optional] [readonly] 



## Enum: SourceEnum


* `UPLOAD` (value: `"UPLOAD"`)

* `SPLIT` (value: `"SPLIT"`)

* `MERGE` (value: `"MERGE"`)

* `EXPORT` (value: `"EXPORT"`)





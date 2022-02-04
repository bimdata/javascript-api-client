# bimdata.Document

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] [readonly] 
**parent** | **Number** |  | [optional] 
**parentId** | **Number** |  | [optional] 
**creator** | **Number** |  | [optional] 
**project** | **Number** |  | [optional] [readonly] 
**name** | **String** | Shown name of the file | 
**fileName** | **String** | Full name of the file | [optional] 
**description** | **String** | Description of the file | [optional] 
**file** | **String** |  | [optional] [readonly] 
**size** | **Number** | Size of the file. | [optional] 
**createdAt** | **Date** | Creation date | [optional] [readonly] 
**updatedAt** | **Date** | Date of the last update | [optional] [readonly] 
**modelSource** | **String** | Define the model.source field if the upload is a Model (IFC, PDF, DWG...) | [optional] 
**modelId** | **String** |  | [optional] [readonly] 
**ifcSource** | **String** | DEPRECATED: Use &#39;model_source&#39; instead. Define the model.source field if the upload is a Model (IFC, PDF, DWG...) | [optional] 
**ifcId** | **String** | DEPRECATED: Use &#39;model_id&#39; instead. | [optional] [readonly] 
**userPermission** | **Number** | Aggregate of group user permissions and folder default permission | [optional] [readonly] 



## Enum: ModelSourceEnum


* `UPLOAD` (value: `"UPLOAD"`)

* `SPLIT` (value: `"SPLIT"`)

* `MERGE` (value: `"MERGE"`)

* `EXPORT` (value: `"EXPORT"`)

* `OPTIMIZED` (value: `"OPTIMIZED"`)





## Enum: IfcSourceEnum


* `UPLOAD` (value: `"UPLOAD"`)

* `SPLIT` (value: `"SPLIT"`)

* `MERGE` (value: `"MERGE"`)

* `EXPORT` (value: `"EXPORT"`)

* `OPTIMIZED` (value: `"OPTIMIZED"`)





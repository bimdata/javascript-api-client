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
**ifcSource** | **String** | Define the ifc.source field if the upload is an IFC | [optional] 
**ifcId** | **Number** |  | [optional] [readonly] 



## Enum: IfcSourceEnum


* `UPLOAD` (value: `"UPLOAD"`)

* `SPLIT` (value: `"SPLIT"`)

* `MERGE` (value: `"MERGE"`)

* `EXPORT` (value: `"EXPORT"`)

* `OPTIMIZED` (value: `"OPTIMIZED"`)





# bimdata.Document

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [readonly] 
**parent** | **Number** |  | [optional] 
**parentId** | **Number** |  | [optional] 
**creator** | **Number** |  | [optional] 
**project** | **Number** |  | [readonly] 
**name** | **String** | Shown name of the file | 
**fileName** | **String** | Full name of the file | [optional] 
**description** | **String** | Description of the file | [optional] 
**file** | **String** |  | 
**size** | **Number** | Size of the file. | [optional] 
**createdAt** | **Date** | Creation date | [readonly] 
**updatedAt** | **Date** | Date of the last update | [readonly] 
**modelId** | **Number** |  | [readonly] 
**ifcId** | **Number** | DEPRECATED: Use &#39;model_id&#39; instead. | [readonly] 
**userPermission** | **Number** | Aggregate of group user permissions and folder default permission | [readonly] 



## Enum: UserPermissionEnum


* `1` (value: `1`)

* `50` (value: `50`)

* `100` (value: `100`)





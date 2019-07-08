# bimdata.FolderChildren

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | 
**parentId** | **Number** |  | 
**createdBy** | [**User**](User.md) |  | 
**creator** | [**User**](User.md) |  | 
**type** | **String** | Values can be &#39;Folder&#39;, &#39;Document&#39; or &#39;Ifc&#39;. It is usefull to parse the tree and discriminate folders and files | [optional] 
**name** | **String** |  | 
**createdAt** | **Date** |  | 
**updatedAt** | **Date** |  | 
**fileName** | **String** |  | [optional] 
**description** | **String** |  | [optional] 
**size** | **Number** |  | [optional] 
**ifcId** | **Number** |  | [optional] 
**file** | **String** |  | [optional] 
**children** | [**[FolderChildren]**](FolderChildren.md) |  | 



## Enum: TypeEnum


* `Folder` (value: `"Folder"`)

* `Document` (value: `"Document"`)

* `Ifc` (value: `"Ifc"`)





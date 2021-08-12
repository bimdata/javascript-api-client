# bimdata.RecursiveFolderChildren

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | 
**parentId** | **Number** |  | 
**createdBy** | [**User**](User.md) |  | [optional] 
**creator** | [**User**](User.md) |  | [optional] 
**type** | **String** | Values can be &#39;Folder&#39;, &#39;Document&#39; or &#39;Ifc&#39;. It is usefull to parse the tree and discriminate folders and files | [optional] [readonly] 
**name** | **String** |  | 
**createdAt** | **Date** |  | 
**updatedAt** | **Date** |  | 
**fileName** | **String** |  | [optional] 
**description** | **String** |  | [optional] 
**size** | **Number** |  | [optional] 
**ifcId** | **Number** |  | [optional] [readonly] 
**file** | **String** |  | [optional] [readonly] 
**groupsPermissions** | [**[FolderGroupPermission]**](FolderGroupPermission.md) | Groups permissions of folder | [optional] [readonly] 
**defaultPermission** | **Number** | Default permissions of folder | [optional] [readonly] 
**userPermission** | **Number** | Aggregate of group user permissions and folder default permission | [optional] [readonly] 
**children** | [**[RecursiveFolderChildren]**](RecursiveFolderChildren.md) |  | [optional] 



## Enum: TypeEnum


* `Folder` (value: `"Folder"`)

* `Document` (value: `"Document"`)

* `Ifc` (value: `"Ifc"`)





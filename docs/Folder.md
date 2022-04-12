# bimdata.Folder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [readonly] 
**parentId** | **Number** |  | [optional] 
**type** | **String** | DEPRECATED: Use &#39;nature&#39; instead. Value is \&quot;Folder\&quot;. It is usefull to parse the tree and discriminate folders and files | [readonly] 
**nature** | **String** | Value is \&quot;Folder\&quot;. It is usefull to parse the tree and discriminate folders and files | [readonly] 
**name** | **String** | Name of the folder | 
**createdAt** | **Date** | Creation date | [readonly] 
**updatedAt** | **Date** | Date of the last update | [readonly] 
**createdBy** | [**User**](User.md) |  | [readonly] 
**groupsPermissions** | [**[FolderGroupPermission]**](FolderGroupPermission.md) |  | [readonly] 
**defaultPermission** | [**FolderPermissionEnum**](FolderPermissionEnum.md) | Permission for a Folder | [optional] 
**userPermission** | [**FolderPermissionEnum**](FolderPermissionEnum.md) | Aggregate of group user permissions and folder default permission | [readonly] 
**children** | [**[RecursiveFolderChildren]**](RecursiveFolderChildren.md) |  | [readonly] 



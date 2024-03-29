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
**createdBy** | [**ShortUser**](ShortUser.md) |  | [readonly] 
**groupsPermissions** | [**[GroupFolderRead]**](GroupFolderRead.md) | List of group permissions | [readonly] 
**defaultPermission** | **Number** | Permission for a Folder  * &#x60;1&#x60; - denied * &#x60;50&#x60; - read_only * &#x60;100&#x60; - read_write | [optional] 
**userPermission** | **Number** | Aggregate of group user permissions and folder default permission | [readonly] 
**children** | [**[RecursiveFolderChildren]**](RecursiveFolderChildren.md) |  | [readonly] 



## Enum: DefaultPermissionEnum


* `1` (value: `1`)

* `50` (value: `50`)

* `100` (value: `100`)





## Enum: UserPermissionEnum


* `1` (value: `1`)

* `50` (value: `50`)

* `100` (value: `100`)





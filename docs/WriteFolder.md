# bimdata.WriteFolder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**updatedAt** | **Date** | Date of the last update | [readonly] 
**groupsPermissions** | [**[GroupFolderRead]**](GroupFolderRead.md) | List of group permissions | [readonly] 
**userPermission** | **Number** | Aggregate of group user permissions and folder default permission | [readonly] 
**name** | **String** | Name of the folder | 
**nature** | **String** | Value is \&quot;Folder\&quot;. It is usefull to parse the tree and discriminate folders and files | [readonly] 
**createdBy** | [**ShortUser**](ShortUser.md) |  | [readonly] 
**createdAt** | **Date** | Creation date | [readonly] 
**defaultPermission** | **Number** | Permission for a Folder  * &#x60;1&#x60; - denied * &#x60;50&#x60; - read_only * &#x60;100&#x60; - read_write | [optional] 
**id** | **Number** |  | [readonly] 
**parentId** | **Number** |  | [optional] 
**type** | **String** | DEPRECATED: Use &#39;nature&#39; instead. Value is \&quot;Folder\&quot;. It is usefull to parse the tree and discriminate folders and files | [readonly] 
**children** | [**[WriteFolder]**](WriteFolder.md) |  | [optional] 



## Enum: UserPermissionEnum


* `1` (value: `1`)

* `50` (value: `50`)

* `100` (value: `100`)





## Enum: DefaultPermissionEnum


* `1` (value: `1`)

* `50` (value: `50`)

* `100` (value: `100`)





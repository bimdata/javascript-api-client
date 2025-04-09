# bimdata.WriteFolder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **Date** | Creation date | [readonly] 
**parentId** | **Number** |  | [optional] 
**id** | **Number** |  | [readonly] 
**type** | **String** | DEPRECATED: Use &#39;nature&#39; instead. Value is \&quot;Folder\&quot;. It is usefull to parse the tree and discriminate folders and files | [readonly] 
**userPermission** | **Number** | Aggregate of group user permissions and folder default permission | [readonly] 
**updatedAt** | **Date** | Date of the last update | [readonly] 
**defaultPermission** | **Number** | Permission for a Folder  * &#x60;1&#x60; - denied * &#x60;50&#x60; - read_only * &#x60;100&#x60; - read_write | [optional] 
**name** | **String** | Name of the folder | 
**createdBy** | [**ShortUser**](ShortUser.md) |  | [readonly] 
**groupsPermissions** | [**[GroupFolderRead]**](GroupFolderRead.md) | List of group permissions | [readonly] 
**nature** | **String** | Value is \&quot;Folder\&quot;. It is usefull to parse the tree and discriminate folders and files | [readonly] 
**children** | [**[WriteFolder]**](WriteFolder.md) |  | [optional] 



## Enum: UserPermissionEnum


* `1` (value: `1`)

* `50` (value: `50`)

* `100` (value: `100`)





## Enum: DefaultPermissionEnum


* `1` (value: `1`)

* `50` (value: `50`)

* `100` (value: `100`)





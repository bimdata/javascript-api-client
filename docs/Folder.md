# bimdata.Folder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] [readonly] 
**parentId** | **Number** |  | [optional] 
**type** | **String** | Value is \&quot;Folder\&quot;. It is usefull to parse the tree and discriminate folders and files | [optional] [readonly] 
**name** | **String** | Name of the folder | 
**createdAt** | **Date** | Creation date | [optional] [readonly] 
**updatedAt** | **Date** | Date of the last update | [optional] [readonly] 
**createdBy** | [**User**](User.md) |  | [optional] 
**children** | [**[RecursiveFolderChildren]**](RecursiveFolderChildren.md) |  | [optional] [readonly] 



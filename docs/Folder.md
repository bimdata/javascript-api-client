# bimdata.Folder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] 
**parentId** | **Number** |  | [optional] 
**type** | **String** | Value is \&quot;Folder\&quot;. It is usefull to parse the tree and discriminate folders and files | [optional] 
**name** | **String** | Name of the folder | 
**createdAt** | **Date** | Creation date | [optional] 
**updatedAt** | **Date** | Date of the last update | [optional] 
**createdBy** | [**User**](User.md) |  | [optional] 
**children** | [**[RecursiveFolderChildren]**](RecursiveFolderChildren.md) |  | [optional] 



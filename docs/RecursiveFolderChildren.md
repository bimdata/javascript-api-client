# bimdata.RecursiveFolderChildren

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | 
**parentId** | **Number** |  | 
**createdBy** | [**User**](User.md) |  | [optional] 
**creator** | [**User**](User.md) |  | [optional] 
**type** | [**RecursiveFolderChildrenTypeEnum**](RecursiveFolderChildrenTypeEnum.md) | DEPRECATED: Use &#39;nature&#39; instead. Values can be &#39;Folder&#39;, &#39;Document&#39; or &#39;Ifc&#39;. It is usefull to parse the tree and discriminate folders and files | [readonly] 
**nature** | [**NatureEnum**](NatureEnum.md) | Values can be &#39;Folder&#39;, &#39;Document&#39; or &#39;Model&#39;. It is usefull to parse the tree and discriminate folders and files | [readonly] 
**modelType** | [**OneOfModelTypeEnumNullEnum**](OneOfModelTypeEnumNullEnum.md) | Model&#39;s type. Values can be IFC, DWG, DXF, GLTF, PDF, JPEG, PNG, OBJ, DAE, BFX | [readonly] 
**name** | **String** |  | 
**createdAt** | **Date** |  | 
**updatedAt** | **Date** |  | 
**fileName** | **String** |  | [optional] 
**description** | **String** |  | [optional] 
**size** | **Number** |  | [optional] 
**modelId** | **Number** |  | [readonly] 
**ifcId** | **Number** | DEPRECATED: Use &#39;model_id&#39; instead | [readonly] 
**file** | **String** |  | [optional] 
**groupsPermissions** | [**[FolderGroupPermission]**](FolderGroupPermission.md) | Groups permissions of folder | [readonly] 
**defaultPermission** | [**FolderPermissionEnum**](FolderPermissionEnum.md) | Default permissions of folder | [readonly] 
**userPermission** | [**FolderPermissionEnum**](FolderPermissionEnum.md) | Aggregate of group user permissions and folder default permission | [readonly] 
**children** | [**[RecursiveFolderChildren]**](RecursiveFolderChildren.md) |  | [optional] 



# bimdata.RecursiveFolderChildren

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | 
**parentId** | **Number** |  | [readonly] 
**createdBy** | [**User**](User.md) |  | [optional] 
**creator** | [**User**](User.md) |  | [optional] 
**type** | **String** | DEPRECATED: Use &#39;nature&#39; instead. Values can be &#39;Folder&#39;, &#39;Document&#39; or &#39;Ifc&#39;. It is usefull to parse the tree and discriminate folders and files | [readonly] 
**nature** | **String** | Values can be &#39;Folder&#39;, &#39;Document&#39; or &#39;Model&#39;. It is usefull to parse the tree and discriminate folders and files | [readonly] 
**modelType** | **String** | Model&#39;s type. Values can be IFC, DWG, DXF, GLTF, PDF, JPEG, PNG, OBJ, DAE, BFX | [readonly] 
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
**defaultPermission** | **Number** | Default permissions of folder | [readonly] 
**userPermission** | **Number** | Aggregate of group user permissions and folder default permission | [readonly] 
**history** | [**[Document]**](Document.md) | History of a document | [readonly] 
**tags** | [**[Tag]**](Tag.md) | Tags of a document | [readonly] 
**children** | [**[RecursiveFolderChildren]**](RecursiveFolderChildren.md) |  | [optional] 



## Enum: TypeEnum


* `Folder` (value: `"Folder"`)

* `Document` (value: `"Document"`)

* `Ifc` (value: `"Ifc"`)





## Enum: NatureEnum


* `Folder` (value: `"Folder"`)

* `Document` (value: `"Document"`)

* `Model` (value: `"Model"`)





## Enum: ModelTypeEnum


* `IFC` (value: `"IFC"`)

* `DWG` (value: `"DWG"`)

* `DXF` (value: `"DXF"`)

* `GLTF` (value: `"GLTF"`)

* `PDF` (value: `"PDF"`)

* `JPEG` (value: `"JPEG"`)

* `PNG` (value: `"PNG"`)

* `OBJ` (value: `"OBJ"`)

* `DAE` (value: `"DAE"`)

* `BFX` (value: `"BFX"`)

* `null` (value: `"null"`)





## Enum: DefaultPermissionEnum


* `1` (value: `1`)

* `50` (value: `50`)

* `100` (value: `100`)





## Enum: UserPermissionEnum


* `1` (value: `1`)

* `50` (value: `50`)

* `100` (value: `100`)





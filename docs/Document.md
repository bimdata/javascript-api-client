# bimdata.Document

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [readonly] 
**parentId** | **Number** |  | [optional] 
**createdBy** | [**User**](User.md) |  | [readonly] 
**project** | **Number** |  | [readonly] 
**name** | **String** | Shown name of the file | 
**fileName** | **String** | Full name of the file | [optional] 
**description** | **String** | Description of the file | [optional] 
**file** | **String** |  | 
**fileType** | **String** | Lower case file extension | [readonly] 
**size** | **Number** | Size of the file. | [readonly] 
**tags** | [**[Tag]**](Tag.md) |  | [readonly] 
**visas** | [**[Visa]**](Visa.md) |  | [readonly] 
**createdAt** | **Date** | Creation date | [readonly] 
**updatedAt** | **Date** | Date of the last update | [readonly] 
**modelId** | **Number** |  | [readonly] 
**modelType** | **String** | Model&#39;s type. Values can be IFC, DWG, DXF, GLTF, PDF, JPEG, PNG, OBJ, POINT_CLOUD | [readonly] 
**ifcId** | **Number** | DEPRECATED: Use &#39;model_id&#39; instead. | [readonly] 
**headId** | **Number** | Document id of head version | [readonly] 
**isHeadVersion** | **Boolean** | Document is a head of version or is owned by another document | [readonly] 
**historyCount** | **Number** | Number of previous versions | [readonly] 
**userPermission** | **Number** | Aggregate of group user permissions and folder default permission | [readonly] 
**officePreview** | **String** | Office files will be converted as pdf to provide a web preview. Supported extensions are .ppt, .pptx, .odp, .xls, .xlsx, .ods, .doc, .docx, .odt | [readonly] 
**path** | **String** |  | [readonly] 



## Enum: ModelTypeEnum


* `IFC` (value: `"IFC"`)

* `DWG` (value: `"DWG"`)

* `DXF` (value: `"DXF"`)

* `GLTF` (value: `"GLTF"`)

* `PDF` (value: `"PDF"`)

* `JPEG` (value: `"JPEG"`)

* `PNG` (value: `"PNG"`)

* `OBJ` (value: `"OBJ"`)

* `POINT_CLOUD` (value: `"POINT_CLOUD"`)

* `null` (value: `"null"`)





## Enum: UserPermissionEnum


* `1` (value: `1`)

* `50` (value: `50`)

* `100` (value: `100`)





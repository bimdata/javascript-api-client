# bimdata.ModelDocument

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [readonly] 
**name** | **String** | Shown name of the file | 
**fileName** | **String** | Full name of the file | [optional] 
**parentId** | **Number** |  | [optional] 
**description** | **String** | Description of the file | [optional] 
**file** | **String** |  | 
**size** | **Number** | Size of the file. | [readonly] 
**createdAt** | **Date** | Creation date | [readonly] 
**updatedAt** | **Date** | Date of the last update | [readonly] 
**headId** | **Number** | Document id of head version | [readonly] 
**isHeadVersion** | **Boolean** | Document is a head of version or is owned by another document | [readonly] 
**historyCount** | **Number** | Number of previous versions | [readonly] 
**userPermission** | **Number** | Aggregate of group user permissions and folder default permission | [readonly] 
**officePreview** | **String** | Office files will be converted as pdf to provide a web preview. Supported extensions are .ppt, .pptx, .odp, .xls, .xlsx, .ods, .doc, .docx, .odt | [readonly] 



## Enum: UserPermissionEnum


* `1` (value: `1`)

* `50` (value: `50`)

* `100` (value: `100`)





# bimdata.PatchedDocumentRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parentId** | **Number** |  | [optional] 
**name** | **String** | Shown name of the file | [optional] 
**fileName** | **String** | Full name of the file | [optional] 
**description** | **String** | Description of the file | [optional] 
**file** | **File** |  | [optional] 
**modelSource** | **String** | Define the model.source field if the upload is a Model (IFC, PDF, DWG...)  * &#x60;UPLOAD&#x60; - UPLOAD * &#x60;SPLIT&#x60; - SPLIT * &#x60;MERGE&#x60; - MERGE * &#x60;EXPORT&#x60; - EXPORT * &#x60;OPTIMIZED&#x60; - OPTIMIZED | [optional] 
**ifcSource** | **String** | DEPRECATED: Use &#39;model_source&#39; instead. Define the model.source field if the upload is a Model (IFC, PDF, DWG...)  * &#x60;UPLOAD&#x60; - UPLOAD * &#x60;SPLIT&#x60; - SPLIT * &#x60;MERGE&#x60; - MERGE * &#x60;EXPORT&#x60; - EXPORT * &#x60;OPTIMIZED&#x60; - OPTIMIZED | [optional] 
**successorOf** | **Number** | Old document version to replace. Only for create | [optional] 



## Enum: ModelSourceEnum


* `UPLOAD` (value: `"UPLOAD"`)

* `SPLIT` (value: `"SPLIT"`)

* `MERGE` (value: `"MERGE"`)

* `EXPORT` (value: `"EXPORT"`)

* `OPTIMIZED` (value: `"OPTIMIZED"`)





## Enum: IfcSourceEnum


* `UPLOAD` (value: `"UPLOAD"`)

* `SPLIT` (value: `"SPLIT"`)

* `MERGE` (value: `"MERGE"`)

* `EXPORT` (value: `"EXPORT"`)

* `OPTIMIZED` (value: `"OPTIMIZED"`)





# bimdata.PatchedModelRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** |  | [optional] 
**source** | **String** | * &#x60;UPLOAD&#x60; - UPLOAD * &#x60;SPLIT&#x60; - SPLIT * &#x60;MERGE&#x60; - MERGE * &#x60;EXPORT&#x60; - EXPORT * &#x60;OPTIMIZED&#x60; - OPTIMIZED | [optional] 
**worldPosition** | **[Number]** | [x,y,z] array of the position of the local_placement in world coordinates | [optional] 
**sizeRatio** | **Number** | How many meters a unit represents | [optional] 
**archived** | **Boolean** |  | [optional] 
**version** | **String** | This field is only for information. Updating it won&#39;t impact the export. | [optional] 
**northVector** | **[[Number]]** | This field is only for information. Updating it won&#39;t impact the export. | [optional] 
**recommanded2dAngle** | **Number** | This is the angle in clockwise degree to apply on the 2D to optimise the horizontality of objects. This field is only for information. Updating it won&#39;t impact the export. | [optional] 



## Enum: SourceEnum


* `UPLOAD` (value: `"UPLOAD"`)

* `SPLIT` (value: `"SPLIT"`)

* `MERGE` (value: `"MERGE"`)

* `EXPORT` (value: `"EXPORT"`)

* `OPTIMIZED` (value: `"OPTIMIZED"`)





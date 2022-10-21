# bimdata.ModelRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** |  | [optional] 
**source** | **String** |  | [optional] 
**viewer360File** | **File** | DEPRECATED: Use &#39;preview_file&#39; instead. | 
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





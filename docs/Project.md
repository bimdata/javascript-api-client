# bimdata.Project

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [readonly] 
**logo** | **String** |  | [optional] 
**name** | **String** | Name of the project | 
**description** | **String** |  | [optional] 
**cloud** | [**Cloud**](Cloud.md) |  | [readonly] 
**status** | **String** | * &#x60;A&#x60; - active * &#x60;D&#x60; - deleted | [optional] 
**createdAt** | **Date** | Creation date | [readonly] 
**updatedAt** | **Date** | Date of the last update | [readonly] 
**parentId** | **Number** |  | [optional] 
**rootFolderId** | **Number** |  | [readonly] 
**mainModelId** | **Number** |  | [optional] 



## Enum: StatusEnum


* `A` (value: `"A"`)

* `D` (value: `"D"`)





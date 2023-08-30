# bimdata.ProjectWithChildren

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [readonly] 
**logo** | **String** |  | [optional] 
**name** | **String** | Name of the project | 
**description** | **String** |  | [optional] 
**status** | **String** | * &#x60;A&#x60; - active * &#x60;D&#x60; - deleted | [optional] 
**createdAt** | **Date** | Creation date | [readonly] 
**updatedAt** | **Date** | Date of the last update | [readonly] 
**parentId** | **Number** |  | [optional] 
**children** | [**[ProjectWithChildren]**](ProjectWithChildren.md) |  | [readonly] 
**rootFolderId** | **Number** |  | [readonly] 
**mainModelId** | **Number** | Main model of the project | [readonly] 



## Enum: StatusEnum


* `A` (value: `"A"`)

* `D` (value: `"D"`)





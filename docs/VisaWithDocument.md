# bimdata.VisaWithDocument

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [readonly] 
**validations** | [**[VisaValidation]**](VisaValidation.md) |  | [readonly] 
**validationsInError** | **[Number]** | Validation IDs where one or more validators have no longer access to the visa document. | [readonly] 
**creator** | [**UserProject**](UserProject.md) |  | [readonly] 
**documentId** | **Number** |  | [readonly] 
**status** | **String** | * &#x60;O&#x60; - opened * &#x60;P&#x60; - paused * &#x60;C&#x60; - closed | [readonly] 
**description** | **String** | Description of the visa | [optional] 
**comments** | [**[VisaComment]**](VisaComment.md) |  | [readonly] 
**deadline** | **Date** |  | [optional] 
**createdAt** | **Date** |  | [readonly] 
**updatedAt** | **Date** |  | [readonly] 
**document** | [**LightDocument**](LightDocument.md) |  | [readonly] 



## Enum: StatusEnum


* `O` (value: `"O"`)

* `P` (value: `"P"`)

* `C` (value: `"C"`)





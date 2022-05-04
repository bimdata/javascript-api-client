# bimdata.Visa

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [readonly] 
**validations** | [**[VisaValidation]**](VisaValidation.md) |  | [readonly] 
**validationsInError** | **[Number]** | Validation IDs where one or more validators have no longer access to the visa document. | [readonly] 
**creator** | [**UserProject**](UserProject.md) |  | [readonly] 
**documentId** | **Number** |  | [readonly] 
**status** | **String** |  | [readonly] 
**description** | **String** | Description of the visa | [optional] 
**comments** | [**[VisaComment]**](VisaComment.md) |  | [readonly] 
**deadline** | **Date** |  | [optional] 
**createdAt** | **Date** |  | [readonly] 
**updatedAt** | **Date** |  | [readonly] 



## Enum: StatusEnum


* `O` (value: `"O"`)

* `A` (value: `"A"`)

* `C` (value: `"C"`)





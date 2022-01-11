# bimdata.Visa

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] [readonly] 
**validations** | [**[VisaValidation]**](VisaValidation.md) |  | [optional] [readonly] 
**validationsInError** | **[Number]** | Validation IDs where one or more validators have no longer access to the visa document. | [optional] [readonly] 
**creator** | [**UserProject**](UserProject.md) |  | [optional] 
**creatorId** | **Number** | This is the userproject_id. This field is only used if the call is made from an App | [optional] 
**status** | **String** |  | [optional] [readonly] 
**description** | **String** | Description of the visa | [optional] 
**document** | [**Document**](Document.md) |  | [optional] 
**comments** | [**[VisaComment]**](VisaComment.md) |  | [optional] [readonly] 
**deadline** | **Date** |  | [optional] 
**createdAt** | **Date** |  | [optional] [readonly] 
**updatedAt** | **Date** |  | [optional] [readonly] 



## Enum: StatusEnum


* `O` (value: `"O"`)

* `A` (value: `"A"`)

* `C` (value: `"C"`)





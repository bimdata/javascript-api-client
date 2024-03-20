# bimdata.VisaValidation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [readonly] 
**visaId** | **Number** |  | [readonly] 
**validator** | [**UserProject**](UserProject.md) |  | [readonly] 
**status** | **String** | * &#x60;P&#x60; - pending * &#x60;A&#x60; - accepted * &#x60;D&#x60; - denied | [readonly] 
**hasCommented** | **Boolean** | Return True if validator has commented the visa | [readonly] 
**createdAt** | **Date** |  | [readonly] 
**updatedAt** | **Date** |  | [readonly] 
**attachment** | **String** |  | [optional] 



## Enum: StatusEnum


* `P` (value: `"P"`)

* `A` (value: `"A"`)

* `D` (value: `"D"`)





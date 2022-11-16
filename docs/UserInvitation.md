# bimdata.UserInvitation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [readonly] 
**redirectUri** | **String** | User will be redirected to this uri when they accept the invitation | 
**cloudId** | **Number** |  | [readonly] 
**cloudName** | **String** |  | 
**projectId** | **Number** |  | [readonly] 
**projectName** | **String** |  | [optional] 
**status** | **String** |          A: Accepted         D: Denied         P: Pending          | [optional] 
**clientName** | **String** |  | 
**sender** | [**User**](User.md) |  | 
**createdAt** | **Date** |  | [readonly] 
**respondedAt** | **Date** |  | [optional] 



## Enum: StatusEnum


* `A` (value: `"A"`)

* `D` (value: `"D"`)

* `P` (value: `"P"`)





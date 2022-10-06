# bimdata.UserInvitation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [readonly] 
**redirectUri** | **String** | User will be redirected to this uri when they accept the invitation | 
**cloudName** | **String** |  | 
**projectName** | **String** |  | [optional] 
**status** | **String** |          A: Accepted         D: Denied         P: Pending          | [optional] 
**sender** | [**User**](User.md) |  | 



## Enum: StatusEnum


* `A` (value: `"A"`)

* `D` (value: `"D"`)

* `P` (value: `"P"`)





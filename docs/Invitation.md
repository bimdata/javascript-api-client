# bimdata.Invitation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] [readonly] 
**clientId** | **String** |  | [optional] [readonly] 
**redirectUri** | **String** | User will be redirected to this uri when they accept the invitation | 
**cloudName** | **String** |  | 
**cloudRole** | **Number** | Role the user will have when they accept the invitation | 
**projectName** | **String** |  | [optional] 
**projectRole** | **Number** | Role the user will have when they accept the invitation | [optional] 
**email** | **String** | email of the user to invite | 
**status** | **String** |  A: Accepted D: Denied P: Pending  | [optional] 
**senderProviderSub** | **String** | OIDC sub of the sender. The original sub from the provider is used instead of the broker sub | [optional] 



## Enum: StatusEnum


* `A` (value: `"A"`)

* `D` (value: `"D"`)

* `P` (value: `"P"`)





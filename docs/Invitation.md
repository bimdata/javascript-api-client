# bimdata.Invitation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [readonly] 
**clientId** | **Number** |  | [readonly] 
**redirectUri** | **String** | User will be redirected to this uri when they accept the invitation | 
**cloudName** | **String** |  | 
**cloudRole** | [**CloudRoleEnum**](CloudRoleEnum.md) | Role the user will have when they accept the invitation | 
**projectName** | **String** |  | [optional] 
**projectRole** | [**OneOfProjectRoleEnumNullEnum**](OneOfProjectRoleEnumNullEnum.md) | Role the user will have when they accept the invitation | [optional] 
**email** | **String** | email of the user to invite | 
**status** | [**InvitationStatusEnum**](InvitationStatusEnum.md) |          A: Accepted         D: Denied         P: Pending          | [optional] 
**senderProviderSub** | **String** | OIDC sub of the sender. The original sub from the provider is used instead of the broker sub | [optional] 



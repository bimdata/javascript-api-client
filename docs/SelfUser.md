# bimdata.SelfUser

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [readonly] 
**email** | **String** |  | 
**firstname** | **String** |  | 
**lastname** | **String** |  | 
**createdAt** | **Date** |  | [readonly] 
**updatedAt** | **Date** |  | [readonly] 
**organizations** | [**[Organization]**](Organization.md) |  | [readonly] 
**clouds** | [**[CloudRole]**](CloudRole.md) |  | [readonly] 
**projects** | [**[ProjectRole]**](ProjectRole.md) |  | [readonly] 
**provider** | **String** |  | [readonly] 
**providerSub** | **String** | sub from original identity provider | [optional] 
**sub** | **String** | sub from Keycloak | [readonly] 
**profilePicture** | **String** |  | [readonly] 



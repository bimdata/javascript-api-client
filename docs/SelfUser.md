# bimdata.SelfUser

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] [readonly] 
**email** | **String** |  | 
**company** | **String** |  | [optional] 
**firstname** | **String** |  | 
**lastname** | **String** |  | 
**createdAt** | **Date** |  | [optional] [readonly] 
**updatedAt** | **Date** |  | [optional] [readonly] 
**clouds** | [**[CloudRole]**](CloudRole.md) |  | [optional] [readonly] 
**projects** | [**[ProjectRole]**](ProjectRole.md) |  | [optional] [readonly] 
**provider** | **String** |  | [optional] [readonly] 
**providerSub** | **String** | sub from original identity provider | [optional] 
**sub** | **String** | sub from Keycloak | [optional] 



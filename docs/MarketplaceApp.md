# bimdata.MarketplaceApp

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [readonly] 
**name** | **String** |  | 
**shortDescription** | **String** |  | 
**longDescription** | **String** |  | 
**activationWebhookUrl** | **String** |  | [optional] 
**postActivationRedirectUri** | **String** |  | [optional] 
**viewerPluginsUrls** | **[String]** |  | [optional] 
**creator** | [**User**](User.md) |  | [readonly] 
**scopes** | **[String]** |  | [readonly] 
**settingsUrl** | **String** | this URL will be called with query params ?cloud_id&#x3D; | [optional] 
**isPublic** | **Boolean** |  | [readonly] 
**tags** | **[String]** |  | [optional] 
**logo** | **String** |  | [optional] 
**file** | **String** |  | [optional] 
**images** | [**[MarketplaceAppImage]**](MarketplaceAppImage.md) |  | [readonly] 
**organization** | [**PublicOrganization**](PublicOrganization.md) |  | [readonly] 



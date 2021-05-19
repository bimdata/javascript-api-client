# bimdata.MarketplaceApp

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] [readonly] 
**name** | **String** |  | 
**shortDescription** | **String** |  | 
**longDescription** | **String** |  | 
**activationWebhookUrl** | **String** |  | [optional] 
**postActivationRedirectUri** | **String** |  | [optional] 
**viewerPluginsUrls** | **[String]** |  | [optional] 
**webhookSecret** | **String** |  | [optional] 
**creator** | [**User**](User.md) |  | [optional] 
**scopes** | **[String]** |  | [optional] [readonly] 
**settingsUrl** | **String** | this URL will be called with query params ?cloud_id&#x3D; | [optional] 
**isPublic** | **Boolean** |  | [optional] 
**tags** | **[String]** |  | [optional] 
**logo** | **String** |  | [optional] [readonly] 
**images** | [**[MarketplaceAppImage]**](MarketplaceAppImage.md) |  | [optional] [readonly] 
**organizationId** | **String** |  | [optional] [readonly] 



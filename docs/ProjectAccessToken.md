# bimdata.ProjectAccessToken

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token** | **String** |  | [readonly] 
**scopes** | **[String]** |  | 
**expiresAt** | **Date** |  | [optional] 
**emailImpersonation** | **String** |          If the request is made from an SSO application, you can link the token to a user.         All calls made with the token will populate created_by fields with the user.         If the user don&#39;t have access to some data, the token won&#39;t have access.          | [optional] 



## Enum: [ScopesEnum]


* `bcf:read` (value: `"bcf:read"`)

* `bcf:write` (value: `"bcf:write"`)

* `document:read` (value: `"document:read"`)

* `document:write` (value: `"document:write"`)

* `ifc:read` (value: `"ifc:read"`)

* `ifc:write` (value: `"ifc:write"`)

* `model:read` (value: `"model:read"`)

* `model:write` (value: `"model:write"`)





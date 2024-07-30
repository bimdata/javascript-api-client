# bimdata.CheckProjectAccess

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hasReadPermission** | **Boolean** |  | 
**hasWritePermission** | **Boolean** |  | 
**hasAdminPermission** | **Boolean** |  | 
**tokenScopes** | **[String]** |  | 
**usableScopes** | **[String]** | Some tokens may have write scopes (eg: model:write) but the user of the token is a guest in the project so they can&#39;t use the scopes. | 
**userRole** | **Number** | * &#x60;100&#x60; - admin * &#x60;50&#x60; - user * &#x60;25&#x60; - guest | [optional] 
**user** | [**User**](User.md) |  | [optional] 



## Enum: UserRoleEnum


* `100` (value: `100`)

* `50` (value: `50`)

* `25` (value: `25`)

* `null` (value: `null`)





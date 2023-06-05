# bimdata.Invitation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [readonly] 
**clientId** | **Number** |  | [readonly] 
**redirectUri** | **String** | User will be redirected to this uri when they accept the invitation | 
**cloudName** | **String** |  | 
**cloudRole** | **Number** | Role the user will have when they accept the invitation  * &#x60;100&#x60; - admin * &#x60;50&#x60; - user | 
**projectName** | **String** |  | [optional] 
**projectRole** | **Number** | Role the user will have when they accept the invitation  * &#x60;100&#x60; - admin * &#x60;50&#x60; - user * &#x60;25&#x60; - guest | [optional] 
**email** | **String** | email of the user to invite | 
**status** | **String** |          A: Accepted         D: Denied         P: Pending           * &#x60;A&#x60; - accepted * &#x60;D&#x60; - denied * &#x60;P&#x60; - pending | [optional] 
**senderProviderSub** | **String** | OIDC sub of the sender. The original sub from the provider is used instead of the broker sub | [optional] 



## Enum: CloudRoleEnum


* `100` (value: `100`)

* `50` (value: `50`)





## Enum: ProjectRoleEnum


* `100` (value: `100`)

* `50` (value: `50`)

* `25` (value: `25`)

* `null` (value: `null`)





## Enum: StatusEnum


* `A` (value: `"A"`)

* `D` (value: `"D"`)

* `P` (value: `"P"`)





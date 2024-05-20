# bimdata.CloudInvitationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **String** | email of the user to invite | 
**redirectUri** | **String** | User will be redirected to this uri when they accept the invitation | 
**role** | **Number** | * &#x60;100&#x60; - admin * &#x60;50&#x60; - user | [optional] [default to RoleEnum.100]
**projectRole** | **Number** | * &#x60;100&#x60; - admin * &#x60;50&#x60; - user * &#x60;25&#x60; - guest | [optional] 
**inAllProjects** | **Boolean** | When inviting non-admin cloud user, specify if the user will be invited in all existing projects. project_role needs to be specified. | [optional] [default to false]



## Enum: RoleEnum


* `100` (value: `100`)

* `50` (value: `50`)





## Enum: ProjectRoleEnum


* `100` (value: `100`)

* `50` (value: `50`)

* `25` (value: `25`)





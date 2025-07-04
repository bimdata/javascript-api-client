# bimdata.ModelLabel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [readonly] 
**model** | **Number** | The model to which the label is attached | [readonly] 
**name** | **String** | Name of the label | 
**color** | **String** |              Color of the label in hexadecimal string without the &#39;#&#39; prefix.             Example: &#39;fff&#39;, &#39;fff0&#39;, &#39;0f0f0f&#39;, &#39;0f0f0f00&#39;.          | [optional] 
**geometry** | [**[Geometry2dPoint]**](Geometry2dPoint.md) |  | 
**humanValidated** | **Boolean** | Whether the label has been created or validated by a human or not | [optional] 
**creator** | [**User**](User.md) |  | [readonly] 
**createdAt** | **Date** | Creation date | [readonly] 
**updatedAt** | **Date** | Date of the last update | [readonly] 



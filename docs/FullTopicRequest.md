# bimdata.FullTopicRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**guid** | **String** |  | [optional] 
**creationDate** | **Date** |  | [optional] 
**creationAuthor** | **String** |  | [optional] 
**modifiedAuthor** | **String** |  | [optional] 
**title** | **String** |  | 
**description** | **String** |  | [optional] 
**referenceLinks** | **[String]** |  | [optional] 
**ifcs** | **[Number]** | DEPRECATED: Use &#39;models&#39; instead | [optional] 
**models** | **[Number]** |  | [optional] 
**labels** | **[String]** |  | [optional] 
**topicType** | **String** |  | [optional] 
**topicStatus** | **String** |  | [optional] 
**stage** | **String** |  | [optional] 
**priority** | **String** |  | [optional] 
**index** | **Number** |  | [optional] 
**assignedTo** | **String** |  | [optional] 
**format** | **String** |          The BCF data structure may be used for other purposes than BCF Topics. (Storing coordinates, a viewpoint, a list of objecs, etc)         The default value is \&quot;standard\&quot;.         If you want to use the BCF routes to store custom data not related to a BCF Topic, you must set this value to something else.         You must add a query string filter if you want to fetch topics with a non \&quot;standard\&quot; format.          | [optional] 
**dueDate** | **Date** |  | [optional] 
**comments** | [**[CommentRequest]**](CommentRequest.md) |  | [optional] 
**viewpoints** | [**[ViewpointRequest]**](ViewpointRequest.md) |  | [optional] 
**project** | **Number** |  | 



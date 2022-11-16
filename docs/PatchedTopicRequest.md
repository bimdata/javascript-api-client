# bimdata.PatchedTopicRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**guid** | **String** |  | [optional] 
**topicType** | **String** |  | [optional] 
**topicStatus** | **String** |  | [optional] 
**title** | **String** |  | [optional] 
**priority** | **String** |  | [optional] 
**labels** | **[String]** |  | [optional] 
**creationDate** | **Date** |  | [optional] 
**creationAuthor** | **String** |  | [optional] 
**modifiedAuthor** | **String** |  | [optional] 
**assignedTo** | **String** |  | [optional] 
**referenceLinks** | **[String]** |  | [optional] 
**stage** | **String** |  | [optional] 
**description** | **String** |  | [optional] 
**dueDate** | **Date** |  | [optional] 
**ifcs** | **[Number]** | DEPRECATED: Use &#39;models&#39; instead | [optional] 
**models** | **[Number]** |  | [optional] 
**format** | **String** |          The BCF data structure may be used for other purposes than BCF Topics. (Storing coordinates, a viewpoint, a list of objecs, etc)         The default value is \&quot;standard\&quot;.         If you want to use the BCF routes to store custom data not related to a BCF Topic, you must set this value to something else.         You must add a query string filter if you want to fetch topics with a non \&quot;standard\&quot; format.          | [optional] 
**index** | **Number** |  | [optional] 
**project** | **Number** |  | [optional] 



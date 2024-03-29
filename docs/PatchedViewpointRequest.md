# bimdata.PatchedViewpointRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**index** | **Number** |  | [optional] 
**guid** | **String** |  | [optional] 
**originatingSystem** | **String** | Name of the system in which the viewpoint is originated | [optional] 
**authoringToolId** | **String** | System specific identifier of the viewpoint in the originating BIM tool | [optional] 
**orthogonalCamera** | [**OrthogonalCameraRequest**](OrthogonalCameraRequest.md) |  | [optional] 
**perspectiveCamera** | [**PerspectiveCameraRequest**](PerspectiveCameraRequest.md) |  | [optional] 
**lines** | [**[LineRequest]**](LineRequest.md) |  | [optional] 
**clippingPlanes** | [**[ClippingPlaneRequest]**](ClippingPlaneRequest.md) |  | [optional] 
**snapshot** | [**SnapshotRequest**](SnapshotRequest.md) |  | [optional] 
**components** | [**ComponentsParentRequest**](ComponentsParentRequest.md) |  | [optional] 
**pins** | [**[PinRequest]**](PinRequest.md) | Non standard field. Pins (or markers/annotations) are points of interest. When creating a Viewpoint you can create pins with the fields &#x60;pins&#x60;, but you can&#39;t edit pins through here. You must use dedicated pin routes. | [optional] 
**tempId** | **Number** | Only used when using POST on the full-topic route to bind viewpoint with comment | [optional] 
**models** | **[Number]** |  | [optional] 



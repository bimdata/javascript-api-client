# bimdata.PatchedViewpointRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**index** | **Number** |  | [optional] 
**guid** | **String** |  | [optional] 
**authoringView** | **String** |  | [optional] 
**orthogonalCamera** | [**OrthogonalCameraRequest**](OrthogonalCameraRequest.md) |  | [optional] 
**perspectiveCamera** | [**PerspectiveCameraRequest**](PerspectiveCameraRequest.md) |  | [optional] 
**lines** | [**[LineRequest]**](LineRequest.md) |  | [optional] 
**clippingPlanes** | [**[ClippingPlaneRequest]**](ClippingPlaneRequest.md) |  | [optional] 
**snapshot** | [**SnapshotRequest**](SnapshotRequest.md) |  | [optional] 
**components** | [**ComponentsParentRequest**](ComponentsParentRequest.md) |  | [optional] 
**pins** | **[[Number]]** | Non standard field. Pins is a list of points representing annotation positions | [optional] 
**tempId** | **Number** | Only used when using POST on the full-topic route to bind viewpoint with comment | [optional] 



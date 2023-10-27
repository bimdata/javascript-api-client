# bimdata.Viewpoint

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**index** | **Number** |  | [optional] 
**guid** | **String** |  | [optional] 
**originatingSystem** | **String** | Name of the system in which the viewpoint is originated | [optional] 
**authoringToolId** | **String** | System specific identifier of the viewpoint in the originating BIM tool | [optional] 
**orthogonalCamera** | [**OrthogonalCamera**](OrthogonalCamera.md) |  | [optional] 
**perspectiveCamera** | [**PerspectiveCamera**](PerspectiveCamera.md) |  | [optional] 
**lines** | [**[Line]**](Line.md) |  | [optional] 
**clippingPlanes** | [**[ClippingPlane]**](ClippingPlane.md) |  | [optional] 
**snapshot** | [**Snapshot**](Snapshot.md) |  | [optional] 
**components** | [**ComponentsParent**](ComponentsParent.md) |  | [optional] 
**pins** | [**[Pin]**](Pin.md) | Non standard field. Pins (or markers/annotations) are points of interest. When creating a Viewpoint you can create pins with the fields &#x60;pins&#x60;, but you can&#39;t edit pins through here. You must use dedicated pin routes. | [optional] 
**models** | **[Number]** |  | [optional] 



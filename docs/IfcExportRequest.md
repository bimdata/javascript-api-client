# bimdata.IfcExportRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**classifications** | [**ExportEnum**](ExportEnum.md) | Exported IFC will include classifications from original IFC file (ORIGINAL), from latest API updates (UPDATED), or won&#39;t include classifications(NONE) | [optional] 
**zones** | [**ExportEnum**](ExportEnum.md) | Exported IFC will include zones from original IFC file (ORIGINAL), from latest API updates (UPDATED), or won&#39;t include zones(NONE) | [optional] 
**properties** | [**ExportEnum**](ExportEnum.md) | Exported IFC will include properties from original IFC file (ORIGINAL), from latest API updates (UPDATED), or won&#39;t include properties(NONE) | [optional] 
**systems** | [**ExportEnum**](ExportEnum.md) | Exported IFC will include systems from original IFC file (ORIGINAL), from latest API updates (UPDATED), or won&#39;t include systems(NONE) | [optional] 
**layers** | [**ExportEnum**](ExportEnum.md) | Exported IFC will include layers from original IFC file (ORIGINAL), from latest API updates (UPDATED), or won&#39;t include layers(NONE) | [optional] 
**materials** | [**ExportEnum**](ExportEnum.md) | Exported IFC will include materials from original IFC file (ORIGINAL), from latest API updates (UPDATED), or won&#39;t include materials(NONE) | [optional] 
**attributes** | [**ExportEnum**](ExportEnum.md) | Exported IFC will include attributes from original IFC file (ORIGINAL), from latest API updates (UPDATED), or won&#39;t include attributes(NONE) | [optional] 
**structure** | [**ExportEnum**](ExportEnum.md) | Exported IFC will include the structure from original IFC file (ORIGINAL), from latest API updates (UPDATED), or won&#39;t include structure(NONE) | [optional] 
**uuids** | **[String]** | Exported IFC will only have those elements. If omitted, all elements will be exported | [optional] 
**fileName** | **String** | The name of the exported IFC file. It MUST end with .ifc or the exported file won&#39;t be processed by BIMData | 



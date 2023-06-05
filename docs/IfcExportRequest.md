# bimdata.IfcExportRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**classifications** | **String** | Exported IFC will include classifications from original IFC file (ORIGINAL), from latest API updates (UPDATED), or won&#39;t include classifications(NONE)  * &#x60;ORIGINAL&#x60; - ORIGINAL * &#x60;UPDATED&#x60; - UPDATED * &#x60;NONE&#x60; - NONE | [optional] [default to &#39;UPDATED&#39;]
**zones** | **String** | Exported IFC will include zones from original IFC file (ORIGINAL), from latest API updates (UPDATED), or won&#39;t include zones(NONE)  * &#x60;ORIGINAL&#x60; - ORIGINAL * &#x60;UPDATED&#x60; - UPDATED * &#x60;NONE&#x60; - NONE | [optional] [default to &#39;UPDATED&#39;]
**properties** | **String** | Exported IFC will include properties from original IFC file (ORIGINAL), from latest API updates (UPDATED), or won&#39;t include properties(NONE)  * &#x60;ORIGINAL&#x60; - ORIGINAL * &#x60;UPDATED&#x60; - UPDATED * &#x60;NONE&#x60; - NONE | [optional] [default to &#39;UPDATED&#39;]
**systems** | **String** | Exported IFC will include systems from original IFC file (ORIGINAL), from latest API updates (UPDATED), or won&#39;t include systems(NONE)  * &#x60;ORIGINAL&#x60; - ORIGINAL * &#x60;UPDATED&#x60; - UPDATED * &#x60;NONE&#x60; - NONE | [optional] [default to &#39;UPDATED&#39;]
**layers** | **String** | Exported IFC will include layers from original IFC file (ORIGINAL), from latest API updates (UPDATED), or won&#39;t include layers(NONE)  * &#x60;ORIGINAL&#x60; - ORIGINAL * &#x60;UPDATED&#x60; - UPDATED * &#x60;NONE&#x60; - NONE | [optional] [default to &#39;UPDATED&#39;]
**materials** | **String** | Exported IFC will include materials from original IFC file (ORIGINAL), from latest API updates (UPDATED), or won&#39;t include materials(NONE)  * &#x60;ORIGINAL&#x60; - ORIGINAL * &#x60;UPDATED&#x60; - UPDATED * &#x60;NONE&#x60; - NONE | [optional] [default to &#39;UPDATED&#39;]
**attributes** | **String** | Exported IFC will include attributes from original IFC file (ORIGINAL), from latest API updates (UPDATED), or won&#39;t include attributes(NONE)  * &#x60;ORIGINAL&#x60; - ORIGINAL * &#x60;UPDATED&#x60; - UPDATED * &#x60;NONE&#x60; - NONE | [optional] [default to &#39;UPDATED&#39;]
**structure** | **String** | Exported IFC will include the structure from original IFC file (ORIGINAL), from latest API updates (UPDATED), or won&#39;t include structure(NONE)  * &#x60;ORIGINAL&#x60; - ORIGINAL * &#x60;UPDATED&#x60; - UPDATED * &#x60;NONE&#x60; - NONE | [optional] [default to &#39;UPDATED&#39;]
**uuids** | **[String]** | Exported IFC will only have those elements. If omitted, all elements will be exported | [optional] 
**fileName** | **String** | The name of the exported IFC file. It MUST end with .ifc or the exported file won&#39;t be processed by BIMData | 



## Enum: ClassificationsEnum


* `ORIGINAL` (value: `"ORIGINAL"`)

* `UPDATED` (value: `"UPDATED"`)

* `NONE` (value: `"NONE"`)





## Enum: ZonesEnum


* `ORIGINAL` (value: `"ORIGINAL"`)

* `UPDATED` (value: `"UPDATED"`)

* `NONE` (value: `"NONE"`)





## Enum: PropertiesEnum


* `ORIGINAL` (value: `"ORIGINAL"`)

* `UPDATED` (value: `"UPDATED"`)

* `NONE` (value: `"NONE"`)





## Enum: SystemsEnum


* `ORIGINAL` (value: `"ORIGINAL"`)

* `UPDATED` (value: `"UPDATED"`)

* `NONE` (value: `"NONE"`)





## Enum: LayersEnum


* `ORIGINAL` (value: `"ORIGINAL"`)

* `UPDATED` (value: `"UPDATED"`)

* `NONE` (value: `"NONE"`)





## Enum: MaterialsEnum


* `ORIGINAL` (value: `"ORIGINAL"`)

* `UPDATED` (value: `"UPDATED"`)

* `NONE` (value: `"NONE"`)





## Enum: AttributesEnum


* `ORIGINAL` (value: `"ORIGINAL"`)

* `UPDATED` (value: `"UPDATED"`)

* `NONE` (value: `"NONE"`)





## Enum: StructureEnum


* `ORIGINAL` (value: `"ORIGINAL"`)

* `UPDATED` (value: `"UPDATED"`)

* `NONE` (value: `"NONE"`)





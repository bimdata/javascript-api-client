# bimdata.PatchedUnitRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | IfcDerivedUnit, IfcContextDependentUnit, IfcConversionBasedUnit, IfcSIUnit or IfcMonetaryUnit | [optional] 
**name** | **String** | Name of the unit (ex: DEGREE) | [optional] 
**unitType** | **String** | IFC type of the unit or user defined type (ex: PLANEANGLEUNIT for DEGREE and RADIAN) | [optional] 
**prefix** | **String** | Litteral prefix for scale (ex: MILLI, KILO, etc..) | [optional] 
**dimensions** | **[Number]** | List of 7 units dimensions | [optional] 
**conversionFactor** | **Number** | Factor of conversion and base unit id (ex: DEGREE from RADIAN with factor 0.0174532925199433) | [optional] 
**conversionBaseunit** | [**Unit**](Unit.md) |  | [optional] 
**elements** | **Object** | List of constitutive unit elements by id with corresponding exponent (ex: [meterID/1, secondID/-1] for velocity) | [optional] 
**isDefault** | **Boolean** |  | [optional] 



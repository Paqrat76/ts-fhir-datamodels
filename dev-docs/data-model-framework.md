# Data Model Framework

[Mermaid Docs](https://mermaid.js.org/intro/)

**Refer to [FHIR Type Framework](https://hl7.org/fhir/types.html)**

```mermaid
classDiagram

  class Base["Base implements IBase"]
  <<abstract>> Base
    Base: + fhirType() string*
    Base: + hasFireType(typeNames string[]) boolean
    Base: + isEmpty() boolean*
    Base: + copy() any*
    Base: # copyValues(dest any) void*
    Base: + toJSON() JSON.Value | undefined*
    Base: + isResource() boolean
    Base: + isDataType() boolean
    Base: + isComplexDataType() boolean
    Base: + isPrimitive() boolean
    Base: + isBooleanPrimitive() boolean
    Base: + isStringPrimitive() boolean
    Base: + isNumberPrimitive() boolean
    Base: + isBigIntPrimitive() boolean
    Base: + isDateTimePrimitive() boolean

  class Element["Element implements IElement"]
  <<abstract>> Element
    Element: # id string
    Element: # extension IExtension[]
  Element --|> Base

  class Extension["Extension implements IExtension"]
    Extension: # url fhirUri | null
    Extension: # value IDataType | undefined
  Extension --|> Element

  class BackboneElement["BackboneElement implements IBackboneElement"]
  <<abstract>> BackboneElement
    BackboneElement: # modifierExtension IExtension[]
  BackboneElement --|> Element

  class DataType["DataType implements IDataType"]
  <<abstract>> DataType
    DataType: + copy() DataType*
    DataType: + isDataType() fhirBoolean
  DataType --|> Element

  class BackboneType["BackboneType implements IBackboneType"]
  <<abstract>> BackboneType
    BackboneType: # modifierExtension IExtension[]
  BackboneType --|> DataType

  class PrimitiveType~T~["PrimitiveType<T> implements IPrimitiveType"]
  <<abstract>> PrimitiveType~T~
    PrimitiveType: - coercedValue ~T~
    PrimitiveType: - stringValue fhirString
  PrimitiveType --|> DataType

  class Resource["Resource implements IResource"]
  <<abstract>> Resource
    Resource: - id fhirString
    Resource: - meta Meta
    Resource: - impliciteRules fhirUri
    Resource: - language fhirCode
    Resource: + isResource() fhirBoolean
  Resource --|> Base

  class DomainResource["DomainResource implements IDomainResource"]
  <<abstract>> DomainResource
    DomainResource: - text Narrative
    DomainResource: - contained IResource[]
    DomainResource: - extension IExtension[]
    DomainResource: - modifierExtension IExtension[]
  DomainResource --|> Resource

```

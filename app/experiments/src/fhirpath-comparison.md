<!-- markdownlint-configure-file { "MD013": { "line_length": 200 } } -->

# FHIRPath Comparison

## FHIRPath Features Specifications

- FHIRPath v2.0.0 (N): [FHIRPath Normative Release (v2.0.0)](https://hl7.org/fhirpath/)
- FHIRPath v3.0.0-B: [FHIRPath Specification 3.0.0-ballot - R2 STU1](https://build.fhir.org/ig/HL7/FHIRPath)
- fhirpath.js: Features [Implementation Status](https://github.com/HL7/fhirpath.js/?tab=readme-ov-file#implementation-status)
- @atomic-ehr/fhirpath: Features [Supported Features](https://github.com/atomic-ehr/fhirpath?tab=readme-ov-file#supported-features)
  - Detailed [FHIRPath Implementation Status](https://github.com/atomic-ehr/fhirpath/blob/main/docs/implementation-status.md)

| Feature                                                                                                   | FHIRPath<br>v2.0.0 (N) | FHIRPath<br>v3.0.0-B | fhirpath.js | @atomic-ehr/fhirpath |
| :-------------------------------------------------------------------------------------------------------- | :--------------------: | :------------------: | :---------: | :------------------: |
| **5. Functions**                                                                                          |                        |                      |             |                      |
| **5.1. Functions: Existence**                                                                             |                        |                      |             |                      |
| empty() : Boolean                                                                                         |           X            |          X           |      X      |          X           |
| exists([criteria : expression]) : Boolean                                                                 |           X            |          X           |      X      |          X           |
| all(criteria : expression) : Boolean                                                                      |           X            |          X           |      X      |          X           |
| allTrue() : Boolean                                                                                       |           X            |          X           |      X      |          X           |
| anyTrue() : Boolean                                                                                       |           X            |          X           |      X      |          X           |
| allFalse() : Boolean                                                                                      |           X            |          X           |      X      |          X           |
| anyFalse() : Boolean                                                                                      |           X            |          X           |      X      |          X           |
| subsetOf(other : collection) : Boolean                                                                    |           X            |          X           |      X      |          X           |
| supersetOf(other : collection) : Boolean                                                                  |           X            |          X           |      X      |          X           |
| count() : Integer                                                                                         |           X            |          X           |      X      |          X           |
| distinct() : collection                                                                                   |           X            |          X           |      X      |          X           |
| isDistinct() : Boolean                                                                                    |           X            |          X           |      X      |          X           |
| **5.2. Functions: Filtering and Projection**                                                              |                        |                      |             |                      |
| where(criteria : expression) : collection                                                                 |           X            |          X           |      X      |          X           |
| select(projection: expression) : collection                                                               |           X            |          X           |      X      |          X           |
| repeat(projection: expression) : collection                                                               |           X            |          X           |      X      |          X           |
| repeatAll(projection: expression) : collection                                                            |                        |         STU          |             |                      |
| ofType(type : type specifier) : collection                                                                |           X            |          X           |      X      |          X           |
| coalesce(<br>[value : collection, value : collection, …]<br>) : collection                                |                        |         STU          |             |                      |
| **5.3. Functions: Subsetting**                                                                            |                        |                      |             |                      |
| [ index : Integer ] : collection                                                                          |           X            |          X           |      X      |          X           |
| single() : collection                                                                                     |           X            |          X           |      X      |          X           |
| first() : collection                                                                                      |           X            |          X           |      X      |          X           |
| last() : collection                                                                                       |           X            |          X           |      X      |          X           |
| tail() : collection                                                                                       |           X            |          X           |      X      |          X           |
| skip(num : Integer) : collection                                                                          |           X            |          X           |      X      |          X           |
| take(num : Integer) : collection                                                                          |           X            |          X           |      X      |          X           |
| intersect(other: collection) : collection                                                                 |           X            |          X           |      X      |          X           |
| exclude(other: collection) : collection                                                                   |           X            |          X           |      X      |          X           |
| **5.4. Functions: Combining**                                                                             |                        |                      |             |                      |
| union(other : collection)                                                                                 |           X            |          X           |      X      |          X           |
| combine(<br>other : collection, [preserveOrder : Boolean]<br>) : collection                               |           X            |         STU          |      X      |          X           |
| **5.5. Functions: Conversion**                                                                            |                        |                      |             |                      |
| iif(<br>criterion: expression, true-result: collection [, otherwise-result: collection]<br>) : collection |           X            |          X           |      X      |          X           |
| **5.5.2. Functions: Conversion: Boolean Conversion Functions**                                            |                        |                      |             |                      |
| toBoolean() : Boolean                                                                                     |           X            |          X           |      X      |          X           |
| convertsToBoolean() : Boolean                                                                             |           X            |          X           |      X      |          X           |
| **5.5.3. Functions: Conversion: Integer Conversion Functions**                                            |                        |                      |             |                      |
| toInteger() : Integer                                                                                     |           X            |          X           |      X      |          X           |
| convertsToInteger() : Boolean                                                                             |           X            |          X           |      X      |          X           |
| toLong() : Long                                                                                           |                        |         STU          |             |          X           |
| convertsToLong() : Boolean                                                                                |                        |         STU          |             |          X           |
| **5.5.4. Functions: Conversion: Date Conversion Functions**                                               |                        |                      |             |                      |
| toDate() : Date                                                                                           |           X            |          X           |      X      |          X           |
| convertsToDate() : Boolean                                                                                |           X            |          X           |      X      |          X           |
| **5.5.5. Functions: Conversion: DateTime Conversion Functions**                                           |                        |                      |             |                      |
| toDateTime() : DateTime                                                                                   |           X            |          X           |      X      |          X           |
| convertsToDateTime() : Boolean                                                                            |           X            |          X           |      X      |          X           |
| **5.5.6. Functions: Conversion: Decimal Conversion Functions**                                            |                        |                      |             |                      |
| toDecimal() : Decimal                                                                                     |           X            |          X           |      X      |          X           |
| convertsToDecimal() : Boolean                                                                             |           X            |          X           |      X      |          X           |
| **5.5.7. Functions: Conversion: Quantity Conversion Functions**                                           |                        |                      |             |                      |
| toQuantity([unit : String]) : Quantity                                                                    |           X            |          X           |      X      |          X           |
| convertsToQuantity([unit : String]) : Boolean                                                             |           X            |          X           |      X      |          X           |
| **5.5.8. Functions: Conversion: String Conversion Functions**                                             |                        |                      |             |                      |
| toString() : String                                                                                       |           X            |          X           |      X      |          X           |
| convertsToString() : Boolean                                                                              |           X            |          X           |      X      |          X           |
| **5.5.9. Functions: Conversion: Time Conversion Functions**                                               |                        |                      |             |                      |
| toTime() : Time                                                                                           |           X            |          X           |      X      |          X           |
| convertsToTime() : Boolean                                                                                |           X            |          X           |      X      |          X           |
| **5.6. Functions: String Manipulation**                                                                   |                        |                      |             |                      |
| indexOf(substring : String) : Integer                                                                     |           X            |          X           |      X      |          X           |
| lastIndexOf(substring : String) : Integer                                                                 |                        |         STU          |             |          X           |
| substring(start : Integer [, length : Integer]) : String                                                  |           X            |          X           |      X      |          X           |
| startsWith(prefix : String) : Boolean                                                                     |           X            |          X           |      X      |          X           |
| endsWith(suffix : String) : Boolean                                                                       |           X            |          X           |      X      |          X           |
| contains(substring : String) : Boolean                                                                    |           X            |          X           |      X      |          X           |
| upper() : String                                                                                          |           X            |          X           |      X      |          X           |
| lower() : String                                                                                          |           X            |          X           |      X      |          X           |
| replace(pattern : String, substitution : String) : String                                                 |           X            |          X           |      X      |          X           |
| matches(regex : String) : Boolean                                                                         |           X            |          X           |      X      |          X           |
| matchesFull(regex : String) : Boolean                                                                     |                        |         STU          |             |          X           |
| replaceMatches(regex : String, substitution: String) : String                                             |           X            |          X           |      X      |          X           |
| length() : Integer                                                                                        |           X            |          X           |      X      |          X           |
| toChars() : collection                                                                                    |           X            |          X           |      X      |          X           |
| **NA/5.7. Functions: Additional String Functions**                                                        |                        |                      |             |                      |
| encode(format : String) : String                                                                          |                        |         STU          |             |                      |
| decode(format : String) : String                                                                          |                        |         STU          |             |                      |
| escape(target : String) : String                                                                          |                        |         STU          |             |                      |
| unescape(target : String) : String                                                                        |                        |         STU          |             |                      |
| trim() : String                                                                                           |                        |         STU          |             |          X           |
| split(separator: String) : collection                                                                     |                        |         STU          |             |          X           |
| join([separator: String]) : String                                                                        |                        |         STU          |             |          X           |
| **5.7./5.8. Functions: Math**                                                                             |                        |                      |             |                      |
| abs() : Integer \| Decimal \| Quantity                                                                    |          STU           |         STU          |      X      |          X           |
| ceiling() : Integer                                                                                       |          STU           |         STU          |      X      |          X           |
| exp() : Decimal                                                                                           |          STU           |         STU          |      X      |          ?           |
| floor() : Integer                                                                                         |          STU           |         STU          |      X      |          X           |
| ln() : Decimal                                                                                            |          STU           |         STU          |      X      |          ?           |
| log(base : Decimal) : Decimal                                                                             |          STU           |         STU          |      X      |          ?           |
| power(exponent : Integer \| Decimal) : Integer \| Decimal                                                 |          STU           |         STU          |      X      |          X           |
| round([precision : Integer]) : Decimal                                                                    |          STU           |         STU          |      X      |          X           |
| sqrt() : Decimal                                                                                          |          STU           |         STU          |      X      |          X           |
| truncate() : Integer                                                                                      |          STU           |         STU          |      X      |          X           |
| **5.8./5.9. Functions: Tree Navigation**                                                                  |                        |                      |             |                      |
| children() : collection                                                                                   |           X            |          X           |      X      |          X           |
| descendants() : collection                                                                                |           X            |          X           |      X      |          X           |
| **5.9./5.10. Functions: Utility Functions**                                                               |                        |                      |             |                      |
| trace(name : String [, projection: Expression]) : collection                                              |           X            |          X           |      X      |          X           |
| now() : DateTime                                                                                          |           X            |          X           |      X      |          X           |
| timeOfDay() : Time                                                                                        |           X            |          X           |      X      |          X           |
| today() : Date                                                                                            |           X            |          X           |      X      |          X           |
| defineVariable(name: String [, expr: expression])                                                         |                        |         STU          |             |          X           |
| lowBoundary([precision: Integer]): Decimal \| Date \| DateTime \| Time                                    |                        |         STU          |             |          X           |
| highBoundary([precision: Integer]): Decimal \| Date \| DateTime \| Time                                   |                        |         STU          |             |          X           |
| precision() : Integer                                                                                     |                        |         STU          |             |          X           |
| yearOf(): Integer                                                                                         |                        |         STU          |             |          X           |
| monthOf(): Integer                                                                                        |                        |         STU          |             |          X           |
| dayOf(): Integer                                                                                          |                        |         STU          |             |          X           |
| hourOf(): Integer                                                                                         |                        |         STU          |             |          X           |
| minuteOf(): Integer                                                                                       |                        |         STU          |             |          X           |
| secondOf(): Integer                                                                                       |                        |         STU          |             |          X           |
| millisecondOf(): Integer                                                                                  |                        |         STU          |             |          X           |
| timezoneOffsetOf(): Decimal                                                                               |                        |         STU          |             |          X           |
| dateOf(): Date                                                                                            |                        |         STU          |             |          X           |
| timeOf(): Time                                                                                            |                        |         STU          |             |          X           |
| **6. Operations**                                                                                         |                        |                      |             |                      |
| **6.1. Operations: Equality**                                                                             |                        |                      |             |                      |
| = (Equals)                                                                                                |           X            |          X           |      X      |          X           |
| ~ (Equivalent)                                                                                            |           X            |          X           |      X      |          X           |
| != (Not Equals)                                                                                           |           X            |          X           |      X      |          X           |
| ~ (Not Equivalent)                                                                                        |           X            |          X           |      X      |          X           |
| **6.2. Operations: Comparison**                                                                           |                        |                      |             |                      |
| \> (Greater Than)                                                                                         |           X            |          X           |      X      |          X           |
| < (Less Than)                                                                                             |           X            |          X           |      X      |          X           |
| <= (Less or Equal)                                                                                        |           X            |          X           |      X      |          X           |
| \>= (Greater or Equal)                                                                                    |           X            |          X           |      X      |          X           |
| **6.3. Operations: Types**                                                                                |                        |                      |             |                      |
| is _type specifier_                                                                                       |           X            |          X           |      X      |          X           |
| is(type : _type specifier_)                                                                               |           X            |          X           |      X      |          X           |
| as _type specifier_                                                                                       |           X            |          X           |      X      |          X           |
| as(type : _type specifier_)                                                                               |           X            |          X           |      X      |          X           |
| **6.4. Operations: Collections**                                                                          |                        |                      |             |                      |
| \| (union collections)                                                                                    |           X            |          X           |      X      |          X           |
| in (membership) : Boolean                                                                                 |           X            |          X           |      X      |          X           |
| contains (containership) : Boolean                                                                        |           X            |          X           |      X      |          X           |
| **6.5. Operations: Boolean Logic**                                                                        |                        |                      |             |                      |
| and                                                                                                       |           X            |          X           |      X      |          X           |
| or                                                                                                        |           X            |          X           |      X      |          X           |
| not() : Boolean                                                                                           |           X            |          X           |      X      |          X           |
| xor                                                                                                       |           X            |          X           |      X      |          X           |
| implies                                                                                                   |           X            |          X           |      X      |          X           |
| **6.6. Operations: Math**                                                                                 |                        |                      |             |                      |
| \* (multiplication)                                                                                       |           X            |          X           |      X      |          X           |
| / (division)                                                                                              |           X            |          X           |      X      |          X           |
| + (addition)                                                                                              |           X            |          X           |      X      |          X           |
| - (subtraction)                                                                                           |           X            |          X           |      X      |          X           |
| div                                                                                                       |           X            |          X           |      X      |          X           |
| mod                                                                                                       |           X            |          X           |      X      |          X           |
| & (String concatenation)                                                                                  |           X            |          X           |      X      |          ?           |
| **6.7. Operations: Date/Time Arithmetic**                                                                 |                        |                      |             |                      |
| + (addition)                                                                                              |           X            |          X           |             |          X           |
| - (subtraction)                                                                                           |           X            |          X           |             |          X           |
| **6.8. Operator Precedence**                                                                              |                        |                      |             |                      |
| **7. Aggregates**                                                                                         |                        |                      |             |                      |
| aggregate(aggregator : expression [, init : value]) : value                                               |          STU           |         STU          |      X      |          X           |
| **8. Lexical Elements**                                                                                   |                        |                      |             |                      |
| **9. Environment Variables**                                                                              |                        |                      |      X      |          X           |
| **10. Types and Reflection**                                                                              |                        |                      |             |                      |
| **10.1. Types and Reflection: Models**                                                                    |           X            |          X           |             |                      |
| **10.2. Types and Reflection: Reflection**                                                                |          STU           |         STU          |             |                      |
| **11. Type Safety and Strict Evaluation**                                                                 |                        |                      |             |                      |
|                                                                                                           |                        |                      |             |                      |
| **FHIR Additional Functions** (1)                                                                         |                        |                      |             |                      |
| extension(url : string) : collection                                                                      |                        |                      |      X      |                      |
| hasValue() : Boolean                                                                                      |                        |                      |      X      |                      |
| memberOf(valueset : string) : Boolean                                                                     |                        |                      |      X      |                      |
| **FHIRPath Supplements** (2)                                                                              |                        |                      |             |                      |
| sum(), min(), max(), count(), avg() - short-cuts for the equivalent .aggregate()                          |                        |                      |      X      |                      |
| ordinal()/weight() - (3)                                                                                  |                        |                      |      X      |                      |

**Footnotes:**

- (1): Defined in FHIR [R4](https://hl7.org/fhir/R4/fhirpath.html), [R4B](https://hl7.org/fhir/R4B/fhirpath.html), [R5](https://hl7.org/fhir/R5/fhirpath.html), [6.0.0-ballot3](https://build.fhir.org/fhirpath.html)
- (2): Defined in [Structured Data Capture - 3.0.0 - STU 3](https://hl7.org/fhir/uv/sdc/expressions.html#fhirpath-supplements)
- (3): Defined in [The weight() function](https://github.com/HL7/fhirpath.js/blob/master/docs/weight.md)

## FHIRPath Implementations (AI generated)

| Implementation       | Language   | FHIR Version        | Validation | Navigation | Extensions | Performance | Maintenance  | Documentation |
| -------------------- | ---------- | ------------------- | ---------- | ---------- | ---------- | ----------- | ------------ | ------------- |
| fhirpath-js          | JavaScript | DSTU2, STU3, R4, R5 | Full       | Full       | Limited    | Good        | Active       | Comprehensive |
| java-fhirpath        | Java       | R4, R5              | Full       | Full       | Full       | Excellent   | Active       | Good          |
| fhirpath.net         | C#         | R4                  | Full       | Full       | Full       | Excellent   | Active       | Excellent     |
| python-fhirpath      | Python     | R4                  | Partial    | Full       | Limited    | Good        | Active       | Basic         |
| fhirpath-go          | Go         | R4                  | Partial    | Full       | Limited    | Excellent   | Maintained   | Good          |
| ruby-fhirpath        | Ruby       | R4                  | Partial    | Full       | Limited    | Good        | Limited      | Basic         |
| rust-fhirpath        | Rust       | R4                  | Partial    | Partial    | None       | Excellent   | Experimental | Limited       |
| php-fhirpath         | PHP        | R4                  | Partial    | Full       | Limited    | Good        | Limited      | Basic         |
| scala-fhirpath       | Scala      | R4                  | Partial    | Full       | Limited    | Good        | Limited      | Basic         |
| swift-fhirpath       | Swift      | R4                  | Partial    | Partial    | None       | Good        | Experimental | Limited       |
| @atomic-ehr/fhirpath | TypeScript | DSTU2, STU3, R4, R5 | Full       | Full       | Limited    | Excellent   | Active       | Comprehensive |

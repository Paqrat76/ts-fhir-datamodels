---
title: Data Model Features
---

# FHIR Data Model Common Features

All data models were designed with a set of common approaches and features that will govern how they are used in
your development.

## Required vs. Optional Fields (FHIR ElementDefinitions)

The resource "fields" can be classified as:

- Optional single field (cardinality `0..1`) - single data element
- Required single field (cardinality `1..1`) - single data element
- Optional list field (cardinality `0..*`) - multiple data elements implemented as an array
- Required list field (cardinality `1..*`) - multiple data elements implemented as an array

The "optional" vs. "required" data elements are governed by their minimum cardinality.
Within all data models, "optional" fields use `undefined` and "required" fields use `null` when no data is present.
So, JSON representations of resource data will not have keys/values for missing "optional" data elements while keys
will exist for "required" data elements having a `null` value when no data is present.

All generated data models have a `constructor` method for data model initialization.
Constructor arguments only exist for "required" fields and are used to initialize the "required" fields When the
data model is instantiated.
All "required" fields default to `null` when their constructor arguments are not provided.

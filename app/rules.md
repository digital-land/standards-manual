---
layout: sub-navigation
order: 2
title: Rules
description: Rules we follow to make decisions when designing data standards.
# aside:
#   title: Aside
#   content: | 
#     A small portion of content that is **indirectly** related to the main content.
# related:
#   sections:
#     - title: Related links
#       items:
#         - text: Layouts
#           href: ../../layouts
#         - text: Options
#           href: ../../options
#       subsections:
#         - title: Eleventy documentation
#           items:
#           - text: Front matter data
#             href: https://www.11ty.dev/docs/data-frontmatter/
---

<div class="app-article-spacing-container">

## Date formats

Dates can be written in many different ways. To avoid confusion, all our dates comply with the internationally recognised ISO 8601 standard.

A date should be represented as `YYYY-MM-DD`, so for example, 4 June 2018 would be written as `2018-06-04`.


## Identifiers and references

When we create a unique identifier we:

* avoid the use of personal or private data in the identifier
* create an ID that will always be unique
* never reuse this ID
* assign an ID to all records

Creating unique identifiers can be complex, therefore we try not to ask data providers for true identifiers. Instead we ask for a `reference` which we hope is at least unique to their organisation.

A `reference` is more human readable. It should be something planners recognise, can be used in document and something a citizen can call up and talk about.

A `reference` should be persisent and something the publisher issues and manages.
What we need are persistent, managed references planners would recognise, which appear in documents, and which you can ring up and talk to the call centre about, eg "CA01", or the planning application reference.

For example, a unique id might be `10003-10927832-18389-183890` whereas a `reference` might be `CA01` for a conservation area.

## A record with a document-url should also have a documentation-url

When we capture a document URL we want to know where it was published. We use a documentation-url to record this.

Knowing where it was published allows us to locate updated versions of the document, particularly if it becomes unavailable at the original URL.


#### Examples of where we use this rule

- The development plan document dataset in the [Development Plan Standard](https://digital-land.github.io/specification/specification/development-plan/)

## For geospatial data include both geometry and point fields

In some cases the geometry might not yet exist as data. In these cases, it is better to ask for a point than nothing at all.

Point data, although not as useful as the full geometry data, is still very useful. It still indicates where the entity exists and can be used in geography based searches.

## All schemas must include entry, start and end dates

These dates provide information about the validity of the record.

They should not be used to include data that makes up part of the record, we [use meaningfully named fields for dates that make up part of the record](/patterns/contextual-dates/). Then, these dates are reserved for data about the record.

They are used to tell us:
* `entry-date` the date when the record was produced. **Entry = the date that information has been entered as a record.**
* `start-date` the date when the record was known to be true from. More often than not it is the same as the `entry-date`. For historical records it will be different. **Start = the date the validity of the record starts.**
* `end-date` the date when the record is no longer true, current or valid. **End = the date the validity of the record ends.**

Take tree preservation orders (TPOs) as an example. For TPO records, the date fields are:

About the TPO

* `made-date` - the date the tree preservation order was "made"
* `confirmed-date` - the date the tree preservation order was "confirmed"

About the record

* `entry-date` = the date this TPO record was created/provided.
* `start-date` = the date the data in this TPO record was known to be true.
* `end-date` = the date the TPO record is no longer true. This would be the date the TPO expired or was revoked, or the date the record was modified.

## Include address-text field as well as urpn field

If you include a `uprn` field also include an `address-text` field. This protects against cases where no UPRN is available. 

When no UPRN exists, a data provider can use the `address-text` field to provide a textual address or a description of the location.

#### Examples of where we use this rule

We follow this rule in the <a href="https://digital-land.github.io/specification/specification/planning-application/" class="govuk-link">Planning application standard</a> and <a href="https://digital-land.github.io/specification/specification/tree-preservation-order/" class="govuk-link">Tree preservation order standard</a>

</div>

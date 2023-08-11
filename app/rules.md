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

## A record with a document-url should also have a documentation-url
When we capture a document URL we want to know where it was published. We use a documentation-url to record this.

Knowing where it was published allows us to locate updated versions of the document, particularly if it becomes unavailable at the original URL.

### Datasets that follow this pattern

- The development plan document dataset in the [Development Plan Standard](https://digital-land.github.io/specification/specification/development-plan/)

## For geospatial data include both geometry and point fields
In some cases the geometry might not yet exist as data. In these cases, it is better to ask for a point than nothing at all.

Point data, although not as useful as the full geometry data, is still very useful. It still indicates where the entity exists and can be used in geography based searches.

## All schemas include entry, start and end dates
Why???

## Include address-text field as well as urpn field
Is this one?

As seen in Planning Application Standard and Tree Preservation Order Standard
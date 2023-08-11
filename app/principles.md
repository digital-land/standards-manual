---
layout: sub-navigation
order: 2
title: Principles
description: Principles we follow to make decisions when designing data standards.
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

## Standards are living documents
Standards change and grow over time. The data needs that users have now might not be the needs that they have in the future.

Standards change to reflect the changing landscape of needs.

## Linked data is more valuable data
Linked data is more valuable because it interconnects information, enabling seamless navigation and discovery. It unlocks the potential of data by revealing relationships, dependencies and context.

## Some data is better than no data at all

## Don’t include inferrable data
The data we ask for should be raw data. We shouldn’t ask for data that can be inferred from other data included in the standard. For example, if we are asking for geometry, we do not need to also ask for the area. That can be calculated.

No calculated columns.

## Every category should have a reason

We want the data to be meaningful. Making sure publishers only include categories that fulfil a need is one way to do this.

We shouldn’t be asking publishers for data that isn’t useful.

## Consistency makes data easier to create, find and use

It’s easier to see the links between datasets when we use consistent field names.

It’s easier to compare data points when we use the same formats, for example, all  dates are in `YYYY-MM-DD format`.

It’s easier to use the data to build robust services when you can be confident about the structure of the data. For example when field names are all kebab-case (each word is in lower case, and separated by dashes) and points are in the WGS84 coordinate reference system.

## Every entity has an organisation responsible for it
Although we might get data or facts about an entity from multiple sources, each entity should have an authoritative owner.

For example, development plans are owned by the author’s of the plan. And brownfield sites are owned by the local planning authority (LPA) that designates a site as brownfield.

## Use approaches from relational data modelling
We do this but would be good to explain why.
Example is constant churn of a wide record vs flexibility of component parts.
Makes it easier to repurpose.
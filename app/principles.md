---
layout: sub-navigation
order: 1
title: Principles
description: We use these principles to help us make better decisions when we design data standards
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

## Standards are living documents

Standards change and grow over time. The data needs that users have now might not be the needs that they have in the future.

Standards change to reflect the changing landscape of needs.

## Linked data is more valuable data

Linked data is more valuable because it interconnects information, enabling seamless navigation and discovery. It unlocks the potential of data by revealing relationships, dependencies and context.

## Some data is better than no data at all

The planning.data.gov.uk platform makes it easy to add additional attributes and records over time. Often some data is better than nothing. For instance providing the geometries for conservation areas and then later linking to the document that provides the authoritative source means that we can start showing conservation areas on the national map sooner.

## Don’t include inferrable data

To help ensure integrity, the data set shouldn't contain any values that can be derived or calculated from other values. The data we ask for should only be the raw data. For example, if we have asked for a geometry, we do not need to also ask for the area. The area can be derived.

## Every category should have a reason

We want the data to be meaningful. Making sure publishers only include categories that fulfil a need is one way to do this. We shouldn’t be asking publishers for data that isn’t useful.

## Consistency makes data easier to create, find and use

It’s easier to see the links between datasets when we use consistent field names. 

It’s easier to compare data points when we use the same formats, for example, all  dates are in `YYYY-MM-DD` format.

It’s easier to use the data to build robust services when you can be confident about the structure of the data. For example when field names are all kebab-case (each word is in lower case, and separated by dashes) and points are in the WGS84 coordinate reference system.

## Every entity has organisations responsible for it

Although we might get data or facts about an entity from multiple sources, each entity should have an authoritative owner.

For example, development plans are owned by the authors of the plan. And brownfield sites are owned by the local planning authority (LPA) that designates a site as brownfield.

## Structure data using similar principles to relational databases

Our data models share similar principles of a relational database. This helps to reduce duplication and makes the data easier to maintain, which in turn increases the trust and usefulness of the data.

Structuring our data in this way involves using unique identifiers to link datasets together. For example, in the developer contributions standards we created 1 dataset for the list of all developer agreements. Then we created a second dataset for all the contributions, with each linking back to the agreement they came from.

This style of data model means that each dataset only has to contain the minimum amount of required information, but we can link to related datasets to provide context and further detail.

## Smaller datasets are better than baggy datasets


The smaller the breadth of the data model, the easier it will be to maintain and publish. When datasets become too broad, it increases the chance that data will be missed out, guessed, or needed to be made non-mandatory. 

## We shouldn't delete entries in a register

Once something changes, is superseded, or becomes redundant, a new record should be added to the register. The old one can be marked as expired through the use of an end date.

Showing any changes in data helps to make the data more trustworthy and provides reassurance. It also allows service providers to build historic views of the data to demonstrate what has changed over time.

## Maintain a link to the authoritative source

The platform makes it easier to build services on top of planning data but it does not take over the responsibility and ownership of the data. This remains the legal responsibility of the publisher. Therefore, it is important to be able to trace back from any data on the platform to the original, unprocessed source of the data.

If users want to access this unprocessed data they will always be able to get it directly from the publisher, as well as any associate legal instruments and supporting documents.

</div>

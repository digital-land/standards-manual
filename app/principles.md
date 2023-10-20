---
layout: sub-navigation
order: 2
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

<h2 class="govuk-heading-l govuk-!-margin-top-9">Standards are living documents</h2>

Standards change and grow over time. The data needs that users have now might not be the needs that they have in the future.

Standards change to reflect the changing landscape of needs.

<h2 class="govuk-heading-l govuk-!-margin-top-9">Linked data is more valuable data</h2>

Linked data is more valuable because it interconnects information, enabling seamless navigation and discovery. It unlocks the potential of data by revealing relationships, dependencies and context.

<h2 class="govuk-heading-l govuk-!-margin-top-9">Some data is better than no data at all</h2>

The planning.data.gov.uk platform makes it easy to add additional attributes and records over time. Often some data is better than nothing. For instance providing the geometries for conservation areas and then later linking to the document that provides the authoritative source means that we can start showing conservation areas on the national map sooner.

<h2 class="govuk-heading-l govuk-!-margin-top-9">Don’t include inferrable data</h2>

To help ensure integrity, the data set shouldn't contain any values that can be derived or calculated from other values. The data we ask for should only be the raw data. For example, if we have asked for a geometry, we do not need to also ask for the area. The area can be derived.

<h2 class="govuk-heading-l govuk-!-margin-top-9">Every category should have a reason</h2>

We want the data to be meaningful. Making sure publishers only include categories that fulfil a need is one way to do this. We shouldn’t be asking publishers for data that isn’t useful.

<h2 class="govuk-heading-l govuk-!-margin-top-9">Consistency makes data easier to create, find and use</h2>

It’s easier to see the links between datasets when we use consistent field names. 

It’s easier to compare data points when we use the same formats, for example, all  dates are in `YYYY-MM-DD` format.

It’s easier to use the data to build robust services when you can be confident about the structure of the data. For example when field names are all kebab-case (each word is in lower case, and separated by dashes) and points are in the WGS84 coordinate reference system.

<h2 class="govuk-heading-l govuk-!-margin-top-9">Every entity has organisations responsible for it</h2>

Although we might get data or facts about an entity from multiple sources, each entity should have an authoritative owner.

For example, development plans are owned by the authors of the plan. And brownfield sites are owned by the local planning authority (LPA) that designates a site as brownfield.

<h2 class="govuk-heading-l govuk-!-margin-top-9">Structure data using similar principles to relational databases</h2>

Our data models share similar principles of a relational database. This helps to reduce duplication and makes the data easier to maintain, which in turn increases the trust and usefulness of the data.

Structuring our data in this way involves using unique identifiers to link datasets together. For example, in the developer contributions standards we created 1 dataset for the list of all developer agreements. Then we created a second dataset for all the contributions, with each linking back to the agreement they came from.

This style of data model means that each dataset only has to contain the minimum amount of required information, but we can link to related datasets to provide context and further detail.

<h2 class="govuk-heading-l govuk-!-margin-top-9">Smaller datasets are better than baggy datasets</h2>


The smaller the breadth of the data model, the easier it will be to maintain and publish. When datasets become too broad, it increases the chance that data will be missed out, guessed, or needed to be made non-mandatory. 

<h2 class="govuk-heading-l govuk-!-margin-top-9">We shouldn't delete entries in a register</h2>

Once something changes, is superseded, or becomes redundant, a new record should be added to the register. The old one can be marked as expired through the use of an end date.
Showing any changes in data helps to make the data more trustworthy and provides reassurance. It also allows service providers to build historic views of the data to demonstrate what has changed over time.


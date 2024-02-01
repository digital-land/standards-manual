---
order: 1
title: Use contextual dates for meaningful data
description: Try to record important dates in fields with contextual meaning.
---

We capture 2 types of dates in our datasets.

Firstly there are the dates that provide information about the validity of the record/data. These can be considered system dates. They tell us when records were created, when they were true from and when they are no longer valid from.

[What are the system dates included in all datasets?](https://standards.planning-data.dev/rules/)

The second type of date we capture is about the thing (for example the conservation area or the event record) itself. It is data that makes up part of the record itself.

When something significant happens - such as something that changes the legal standing of the thing we are recording as data we prefer to capture the date that happened in its own field. We want to be explicit and provide the context about what the date represents/reflects.

What the date is for should be clear and intuitive, we don’t want users of the data to have to infer what an ambiguously named date represents.

For example, we used to record when a conservation-area became a conservation-area in the start-date field but does `start-date` mean when the conservation area was designated, when the local planning authority started using the conservation area or something else entirely? It is not clear.

Instead, we introduced `designation-date` which is clearer. It is the date the designation of the conservation area happened.

It is important to use meaningful names when naming the field. The name should reflect terminology used in the process of creating the thing. Designation is the terminology used in planning policy so made the most sense to use.

Similarly, in the [tree-preservation-order specification](https://digital-land.github.io/specification/specification/tree-preservation-order/) we have used `made-date` and `confirmed-date`, both of which are names used in the process outlined in the policy.

It is important to check names with users you expect to create the data. If it doesn’t work for them it can lead to confusion and poorer quality data. It is also unlikely to work for users of the data either.


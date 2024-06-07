---
layout: sub-navigation
order: 7
title: Guides
description: We have written a number of explainers to help you understand how things fit together.
---

{% for page in collections.layout %}

- [{{ page.data.title }}]({{ page.url }}) – {{ page.data.description }}

{% endfor %}

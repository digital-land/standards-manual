---
layout: sub-navigation
order: 3
title: Patterns
description: We follow a number of patterns when we design data standards.
---

{% for page in collections.layout %}

- [{{ page.data.title }}]({{ page.url }}) – {{ page.data.description }}

{% endfor %}

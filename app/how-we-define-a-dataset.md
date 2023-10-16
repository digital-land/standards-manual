---
layout: sub-navigation
order: 3
title: How we define a dataset
description:
---

<p class="govuk-body">When we are ready to define a dataset we create a dataset schema in our <a href="https://github.com/digital-land/specification" class="govuk-link">specification repository</a>.</p>

<p class="govuk-body">This definition of a dataset defines the type of dataset it is, what fields it should have and how we categorise it.</p>

<p class="govuk-body">We create a markdown file for each dataset. The frontmatter should contain all the attributes of a dataset, except the <code>text</code> attribute. We use the content of the markdown file for the <code>text</code> attribute. This allows us to write a more detailed description of the dataset than we’d be able to in the frontmatter.</p>

<h2 class="govuk-heading-m">Attributes of a dataset definition</h2>

<dl class="govuk-summary-list">
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Attribution
    </dt>
    <dd class="govuk-summary-list__value">
      Acknowledges where the data comes from and indicates whose set of usage rules should be followed.
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Collection
    </dt>
    <dd class="govuk-summary-list__value">
      Defines the collection. If empty, the platform will not collect and process data for this dataset.
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Dataset
    </dt>
    <dd class="govuk-summary-list__value">
      The reference of the dataset, used throughout the planning data ecosystem. It’s usually a <a href="https://developer.mozilla.org/en-US/docs/Glossary/Kebab_case" class="govuk-link">kebab case</a> version of the dataset name.
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Description
    </dt>
    <dd class="govuk-summary-list__value">
      A short description of what the dataset represents.
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      End-date
    </dt>
    <dd class="govuk-summary-list__value">
      When the dataset is no longer used an end-date can be added. This shows historically it used to exist but is not used now.
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Entry-date
    </dt>
    <dd class="govuk-summary-list__value">
      Add the date in format <code>YYYY-MM-DD</code> when you added the dataset schema to specification.
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Entity-minimum
    </dt>
    <dd class="govuk-summary-list__value">
      Every record in the planning.data platform has an entity number. This attribute indicates the lowest number the platform should start issuing numbers from.
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Entity-maximum
    </dt>
    <dd class="govuk-summary-list__value">
      Every record in the planning.data platform has an entity number. This attribute indicates the highest end of the range the platform should use to issue numbers.
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Fields
    </dt>
    <dd class="govuk-summary-list__value">
      Defines the fields that make up each record in the dataset. Include all the fields that should be part of the record as it should be on the platform.
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Key-field
    </dt>
    <dd class="govuk-summary-list__value">
      This is a deprecated field that used to be used to explicitly specify a key-field for the dataset.
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Licence
    </dt>
    <dd class="govuk-summary-list__value">
      The terms and conditions under which users can use, share and distribute the dataset. The licences we use are defined in <a href="https://github.com/digital-land/specification/tree/main/content/licence" class="govuk-link">specification/content/licence</a>.
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Name
    </dt>
    <dd class="govuk-summary-list__value">
      The name of the dataset.
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Paint-options
    </dt>
    <dd class="govuk-summary-list__value">
      JSON that defines the colour and fill of geometries on the <a href="https://www.planning.data.gov.uk/map/" class="govuk-link">national map</a>. Candidate to remove from specification.
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Plural
    </dt>
    <dd class="govuk-summary-list__value">
      The pluralised version of the name. It’s used by planning.data when it needs to refer to the plural of the dataset.
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Phase
    </dt>
    <dd class="govuk-summary-list__value">
      The phase of development for this dataset and any associated specification, for example alpha. The <a href="https://github.com/digital-land/specification/blob/main/content/phase.csv" class="govuk-link">values allowed are defined in the specification repository</a>.
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Prefix
    </dt>
    <dd class="govuk-summary-list__value">
      Usage unknown. Leave blank.
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Realm
    </dt>
    <dd class="govuk-summary-list__value">
      A way to group datasets by areas of concern to the platform team. For example, datasets that are for the pipeline or datasets that are about the provenance mechanism. The <a href="https://github.com/digital-land/specification/blob/main/content/realm.csv" class="govuk-link">realms</a> are defined in the specification repository.
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Start-date
    </dt>
    <dd class="govuk-summary-list__value">
      An optional start-date in the format <code>YYYY-MM-DD</code>. Put a future date if you want a dataset to only be ‘active’ from that date.
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Text
    </dt>
    <dd class="govuk-summary-list__value">
      This attribute is used to provide an expanded description of the dataset. It’s the text part of the markdown file. It’s used as the summary on the dataset pages on planning.data.gov.uk (for example: <a href="https://www.planning.data.gov.uk/dataset/ancient-woodland" class="govuk-link">https://www.planning.data.gov.uk/dataset/ancient-woodland</a>).
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Themes
    </dt>
    <dd class="govuk-summary-list__value">
      High level DLUHC-related groupings for the dataset. It allows the department to know what sort of datasets are covered. The <a href="https://github.com/digital-land/specification/tree/main/content/theme" class="govuk-link">themes</a> are defined in the specification repository.
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Typology
    </dt>
    <dd class="govuk-summary-list__value">
      The classification of the type of thing the datasets are modelling. For example geography is used for things that contain a geospatial element.
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Version
    </dt>
    <dd class="govuk-summary-list__value">
      The version number of the dataset definition. It allows us to keep track of the field changes over time. You can read more about <a href="https://digital-land.github.io/blog-post/versioning-our-standards/" class="govuk-link">how we version our standards and datasets</a>.
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Wikidata
    </dt>
    <dd class="govuk-summary-list__value">
      This is the wikidata identifier (if it exists) for what the dataset is modelling. For example, <a href="https://www.wikidata.org/wiki/Q3078732" class="govuk-link">Q3078732</a> for ancient woodland.
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Wikipedia
    </dt>
    <dd class="govuk-summary-list__value">
      Path part of url to wikipedia page about what the dataset covers. For example, Ancient_woodland for ancient woodland because the wikipedia page is <a href="https://en.wikipedia.org/wiki/Ancient_woodland" class="govuk-link">https://en.wikipedia.org/wiki/Ancient_woodland</a>.
    </dd>
  </div>
</dl>

<h2 class="govuk-heading-m">Common fields</h2>

<p class="govuk-body">Every dataset we define has a common set of fields.<p>

<p class="govuk-body">These are:</p>

<ul  class="govuk-list govuk-list--bullet">
  <li>Entity</li>
  <li>Name</li>
  <li>Notes</li>
  <li>Prefix</li>
  <li>Reference</li>
  <li>End-date</li>
  <li>Entry-date</li>
  <li>Start-date</li>
</ul>

<p class="govuk-body">If the dataset needs any more fields then we try to reuse fields we have used elsewhere. And, as a last resort we’ll create new fields.</p>

<p class="govuk-body">When we create a new field, we need to first define the field. All our fields are defined in markdown files in the <a href="https://github.com/digital-land/specification/tree/main/content/field" class="govuk-link">fields directory</a> in the specification repository.</p>

export const filterByQuery = (conferences, query, categories, regions) => {
  if (query) {
    conferences = filterByRegion(conferences, query, regions)
    conferences = filterByCategory(conferences, query, categories)
    conferences = filterByPerks(conferences, query)
    conferences = filterByEventDates(conferences, query)
  }

  return conferences
}

export const filterByRegion = (conferences, query, regions) => {
  const selectedRegion = regions.find(
    region => query.region && region.slug === query.region
  )
  if (selectedRegion) {
    conferences = conferences.filter(c => c.region === selectedRegion.name)
  }

  return conferences
}

export const filterByCategory = (conferences, query, categories) => {
  const selectedCategory = categories.find(
    category =>
      query.category && category.node.data.name.toLowerCase() === query.category
  )
  if (selectedCategory) {
    conferences = conferences.filter(
      conference =>
        conference.category &&
        conference.category === selectedCategory.node.data.name
    )
  }

  return conferences
}

export const filterByPerks = (conferences, query) => {
  return conferences.filter(conference => {
    const passes = []

    if (query.hotel_covered) {
      passes.push(conference.hotel_covered)
    }
    if (query.travel_covered) {
      passes.push(conference.travel_covered)
    }
    if (query.stipend_covered) {
      passes.push(conference.stipend_covered)
    }

    return passes.reduce((prev, current) => (current ? prev : false), true)
  })
}

export const filterByEventDates = (conferences, query) => {
  return conferences.filter(conference => {
    const passes = []

    if (query.event_start_date_after) {
      passes.push(
        new Date(conference.event_start_date) >
          new Date(query.event_start_date_after)
      )
    }

    if (query.event_start_date_before) {
      passes.push(
        new Date(conference.event_start_date) <
          new Date(query.event_start_date_before)
      )
    }

    return passes.reduce((prev, current) => (current ? prev : false), true)
  })
}

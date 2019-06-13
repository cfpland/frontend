export const queryOptionsSet = query =>
  query &&
  [
    'category',
    'region',
    'event_start_date_after',
    'event_start_date_before',
    'hotel_covered',
    'travel_covered',
    'stipend_covered',
  ].reduce((prev, prop) => prop in query || prev, false)

const photosFilter = require('./photosFilter');
const contactsFilter = require('./contactsFilter');
const favouriteFilter = require('./favouriteFilter');
const compatibilityFilter = require('./compatibilityFilter');
const ageFilter = require('./ageFilter');
const heightFilter = require('./heightFilter');
const R = require('ramda');

module.exports =  function applyFilters(matches, filters) {
    matches = photosFilter(matches, filters.photos);
    matches = filters.contacts !== null ? contactsFilter(matches, filters.contacts) : matches;
    matches = filters.favourite !== null ? favouriteFilter(matches, filters.favourite) : matches;
    matches = filters.compatibility !== null ? compatibilityFilter(matches, filters.compatibility) : matches;
    matches = filters.age !== null ? ageFilter(matches, filters.age) : matches;
    matches = filters.height !== null ? heightFilter(matches, filters.height) : matches;
    return matches;
};




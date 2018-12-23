const filter = require('./filter');
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

function photosFilter(matches, hasPhoto) {
    if(hasPhoto !== null)
    return filter(match => !!match.main_photo === hasPhoto)(matches);
    else{
        return matches
    }
}


function contactsFilter(matches, inContact) {
    return matches.filter(match => !!match.contacts_exchanged === inContact);
}


function favouriteFilter(matches, favourite) {
    return matches.filter(match => match.favourite === favourite);
}

function compatibilityFilter(matches, compatibility) {
    return matches.filter(match => match.compatibility_score * 100 <= compatibility);
}

function ageFilter(matches, age) {
    return matches.filter(match => match.age  >= 18 && match.age  <= age);
}

function heightFilter(matches, height) {
    return matches.filter(match => match.height_in_cm  >= 135 && match.height_in_cm  <= height);
}


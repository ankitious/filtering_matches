const filter = require('./filter');

function photosFilter(matches, hasPhoto) {
    if(hasPhoto !== null)
        return filter(match => !!match.main_photo === hasPhoto)(matches);
    else{
        return matches
    }
};

module.exports = photosFilter;



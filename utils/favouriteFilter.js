function favouriteFilter(matches, favourite) {
    return matches.filter(match => match.favourite === favourite);
}

module.exports = favouriteFilter;

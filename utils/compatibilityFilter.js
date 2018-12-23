function compatibilityFilter(matches, compatibility) {
    return matches.filter(match => match.compatibility_score * 100 <= compatibility);
}

module.exports = compatibilityFilter;

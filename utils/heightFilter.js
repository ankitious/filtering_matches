function heightFilter(matches, height) {
    return matches.filter(match => match.height_in_cm  >= 135 && match.height_in_cm  <= height);
}

module.exports = heightFilter;

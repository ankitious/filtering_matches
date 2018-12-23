function ageFilter(matches, age) {
    return matches.filter(match => match.age  >= 18 && match.age  <= age);
}

module.exports = ageFilter;

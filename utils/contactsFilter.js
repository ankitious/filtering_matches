function contactsFilter(matches, inContact) {
    return matches.filter(match => !!match.contacts_exchanged === inContact);
}

module.exports = contactsFilter;

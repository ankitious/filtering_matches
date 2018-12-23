const expect = require('chai').expect;

const contactsFilter  = require('../../utils/contactsFilter');

const matches = [ {name : 'James', contacts_exchanged : 5},
    {name : 'John', contacts_exchanged : 0}
];


describe('contactsFilter function', function() {
    it('Should give only match with which contacts are more than 0', function () {
        expect([{name : 'James', contacts_exchanged : 5}]).to.be.deep.equal(contactsFilter(matches, true));
    });
});

describe('contactsFilter function', function() {
    it('Should give only those matches which have 0 contacts exchanged ', function () {
        expect([{name : 'John', contacts_exchanged : 0}]).to.be.deep.equal(contactsFilter(matches, false));
    });
});

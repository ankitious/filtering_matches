const expect = require('chai').expect;

const favouriteFilter  = require('../../utils/favouriteFilter');

const matches = [ {name : 'James', favourite : true},
    {name : 'John', favourite : false}
];


describe('favouriteFilter function', function() {
    it('Should give only match with which have favroutes as a true', function () {
        expect([{name : 'James', favourite : true}]).to.be.deep.equal(favouriteFilter(matches, true));
    });
});

describe('favouriteFilter function', function() {
    it('Should give only those matches which have favourites as false', function () {
        expect([{name : 'John', favourite : false}]).to.be.deep.equal(favouriteFilter(matches, false));
    });
});

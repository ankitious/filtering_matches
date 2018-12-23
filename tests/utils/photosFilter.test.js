const expect = require('chai').expect;

const photosFilter  = require('../../utils/photosFilter');

const matches = [ {name : 'James', main_photo : 'james.jpg'},
    {name : 'John'}
];


describe('photosFilter function', function() {
    it('Should give only match which has a photo ', function () {
        expect([{name : 'James', main_photo : 'james.jpg'}]).to.be.deep.equal(photosFilter(matches, true));
    });
});

describe('photosFilter function', function() {
    it('Should give only match which does not have a photo ', function () {
        expect([{name : 'John'}]).to.be.deep.equal(photosFilter(matches, false));
    });
});

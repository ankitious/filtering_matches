const expect = require('chai').expect;

const filter  = require('../../utils/filter');

const data = [1,2,3,4,5,6];

const fn = x => x%2 === 0;

const giveEven = filter(fn);

describe('filter function', function() {
    it('should filter out data according to function passed', function () {
        expect([2,4,6]).to.be.deep.equal(giveEven(data));
    });
});

//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../server');
let should = chai.should();
const expect = require('chai').expect;


chai.use(chaiHttp);

describe('Matches', () => {

    describe('/GET matches', () => {
        it('it should GET all the Matches', (done) => {
            chai.request(server)
                .get('/api/matches')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an('array');
                    done();
                });
        });
    });


    describe('/POST matches/filters', () => {
        it('it should POST all the Matches which are filtered', (done) => {

            let filters = {photos : true, age : 30};

            chai.request(server)
                .post('/api/matches/filters')
                .send(filters)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                });
        });
    });

});

const expect = require('chai').expect;

const ageFilter  = require('../../utils/ageFilter');

const matches = [  {
    "display_name": "Anne",
    "age": 38,
    "job_title": "Marketing Consultant",
    "height_in_cm": 170,
    "city": {
        "name": "Swindon",
        "lat": 51.568535,
        "lon": -1.772232
    },
    "main_photo": "http://thecatapi.com/api/images/get?format=src&type=gif",
    "compatibility_score": 0.88,
    "contacts_exchanged": 0,
    "favourite": false,
    "religion": "Jewish"
},
    {
        "display_name": "Daniela",
        "age": 37,
        "job_title": "Doctor",
        "height_in_cm": 177,
        "city": {
            "name": "Bournemouth",
            "lat": 50.720806,
            "lon": -1.904755
        },
        "main_photo": "http://thecatapi.com/api/images/get?format=src&type=gif",
        "compatibility_score": 0.76,
        "contacts_exchanged": 0,
        "favourite": false,
        "religion": "Christian"
    },
    {
        "display_name": "Katherine",
        "age": 39,
        "job_title": "Lawyer",
        "height_in_cm": 177,
        "city": {
            "name": "London",
            "lat": 51.509865,
            "lon": -0.118092
        },
        "main_photo": "http://thecatapi.com/api/images/get?format=src&type=gif",
        "compatibility_score": 0.99,
        "contacts_exchanged": 50,
        "favourite": true,
        "religion": "Atheist"
    },
    {
        "display_name": "Susan",
        "age": 25,
        "job_title": "Project Manager",
        "height_in_cm": 166,
        "city": {
            "name": "Harlow",
            "lat": 51.772938,
            "lon": 0.102310
        },
        "main_photo": "http://thecatapi.com/api/images/get?format=src&type=gif",
        "compatibility_score": 0.88,
        "contacts_exchanged": 0,
        "favourite": false,
        "religion": "Christian"
    }
];


describe('ageFilter function', function() {
    it('Should give only match which have age less than 26 and more than 18', function () {
        expect([{
            "display_name": "Susan",
            "age": 25,
            "job_title": "Project Manager",
            "height_in_cm": 166,
            "city": {
                "name": "Harlow",
                "lat": 51.772938,
                "lon": 0.102310
            },
            "main_photo": "http://thecatapi.com/api/images/get?format=src&type=gif",
            "compatibility_score": 0.88,
            "contacts_exchanged": 0,
            "favourite": false,
            "religion": "Christian"
        }]).to.be.deep.equal(ageFilter(matches, 26));
    });
});



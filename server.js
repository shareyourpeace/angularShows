var express = require('express'),
    app = express();

//Express 3
//app.configure(function() {
//    app.use(express.static(__dirname, '/'));
//});

//Express 4
app.use(express.static(__dirname, '/'));

app.get('/shows/:id', function(req, res) {
    var showId = parseInt(req.params.id);
    var data = {};
    for (var i=0,len=shows.length;i<len;i++) {
        if (shows[i].id === showId) {
           data = shows[i];
           break;
        }
    }  
    res.json(data);
});

app.get('/shows', function(req, res) {
    res.json(shows);
    //res.json(500, { error: 'An error has occurred!' });
});

app.get('/actors', function(req, res) {
    var actors = [];
    for (var i=0,len=shows.length;i<len;i++) {
        if (shows[i].shows) {
            for (var j=0,actorsLen=shows[i].actors.length;j<actorsLen;j++) {
                actors.push(shows[i].actors[j]);   
            }
        }
    }  
    res.json(actors);
});

app.delete('/shows/:id', function(req, res) {
    var showId = parseInt(req.params.id);
    var data = { status: true };
    for (var i=0,len=shows.length;i<len;i++) {
        if (shows[i].id === showId) {
           shows.splice(i,1);
           data = { status: true };
           break;
        }
    }  
    res.json(data);
});

app.listen(8080);

console.log('Express listening on port 8080');

        var shows = [
            {
                id:1,
                name:'Person Of Interest',
                created: '2013',
                mediasource:'CBS', 
                numberofviewers: 5000000,
                actors: [
                    {
                        id: 101,
                        character: 'Harold Finch',
                        actor: 'Michael Emerson',
                        "website": 
                        "http://www.imdb.com/name/nm0152430/?ref_=tt_cl_t2",
                        "info":"September 7, 1954 in Cedar Rapids, Iowa, USA"
                    },
                    {
                        id: 102,
                        character: 'John Reese',
                        actor: 'Jim Caviezel',
                        "website":
                                "http://www.imdb.com/name/nm0001029/?ref_=tt_cl_t1",
                        "info": "September 26, 1968 in Mount Vernon, Washington, USA"
                    },
                    {
                        id: 103,
                        character: 'Sameen Shaw',
                        actor: 'Sarah Shahi',
                        "website":
                        "http://www.imdb.com/name/nm1083404/?ref_=tt_cl_t6",
                        "info": "January 10, 1980 in Euless, Texas, USA"
                    },
                    {
                        id: 104,
                        character: 'Root / Ms. Groves',
                        actor: 'Amy Acker',
                        "website":
                        "http://www.imdb.com/name/nm0009918/?ref_=tt_cl_t5",
                        "info":"December 5, 1976 in Dallas, Texas, USA"
                    },                   
                    {
                        id: 105,
                        character: 'Detective Lionel Fusco',
                        actor: 'Kevin Chapman',
                        "website":
                        "http://www.imdb.com/name/nm0152430/?ref_=tt_cl_t2",
                        "info": "dob"
                    }                                      
                ]
            },
            {
                id:2,
                name:'The Blacklist',
                created: '2013',
                mediasource:'ABC', 
                numberofviewers: 6000000,
                actors: [
                    {
                        id: 201,
                        character: 'Raymond (Red) Reddington',
                        actor: 'James Spader',
                        "website":
                        "http://www.imdb.com/name/nm0000652/?ref_=tt_cl_t1",
                        "info": "February 7, 1960 in Boston, Massachusetts, USA"        
                    },
                    {
                        id: 202,
                        character: 'Elizabeth (Lizzy) Keene',
                        actor: 'Megan Boone',
                        "website": 
                        "http://www.imdb.com/name/nm1443644/?ref_=tt_cl_t2",
                         "info": "April 29, 1983 in Petoskey, Michigan, USA"
                    },
                    {
                        id: 203,
                        character: 'Harold Cooper',
                        actor: 'Harry Lennix',
                        website:
                        "http://www.imdb.com/name/nm0502015/?ref_=tt_cl_t4",
                        "info": "November 16, 1964 in Chicago, Illinois, USA"
                   },
                   {
                        id: 204,
                        character: 'Donald Ressler',
                        actor: 'Diego Klattenhoff',
                        website:
                        "http://www.imdb.com/name/nm1459109/?ref_=tt_cl_t3",
                        info: "dob"
                   },
                   {
                        id: 205,
                        character: 'Amir Arison',
                        actor: 'Aram Mojtabai',
                        website:
                        "http://www.imdb.com/name/nm1682276/?ref_=tt_cl_t7",
                        "info": "March 24, 1978 in St. Louis, Missouri, USA"
                   },
                   {
                        id: 206,
                        character: 'Tom Keen',
                        actor: 'Ryan Eggold',
                        website:
                        "http://www.imdb.com/name/nm2375297/?ref_=tt_cl_t6",
                        "info": "August 10, 1984 in Southern California, California, USA"
                   }                   
                ]
            }, 
            {
                id:3,
                name:'Madam Secretary',
                created: '2014', 
                mediasource:'CBS', 
                numberofviewers: 1000000,
                actors: [
                    {
                        id: 301,
                        character: 'Elizabeth McCord',
                        actor: 'Tea Leone',
                        website:
                        "http://www.imdb.com/name/nm0000495/?ref_=tt_cl_t2",
                        "info": "February 25, 1966 in New York City, New York, USA"      
                    },
                    {
                        id: 302,
                        character: 'Henry McCord',
                        actor: 'Tim Daly',
                        website:
                        "http://www.imdb.com/name/nm0004857/?ref_=tt_cl_t3",
                        "info": "March 1, 1956 in New York City, New York, USA"
                    },
                    {
                        id: 303,
                        character: 'Nadine Tolliver',
                        actor: 'Bebe Neuwirth',
                        website:
                        "http://www.imdb.com/name/nm0001564/?ref_=tt_cl_t9",
                        "info": "December 31, 1958 in Princeton, New Jersey, USA"
                    },
                    {
                        id: 304,
                        character: 'Blake Moran',
                        actor: 'Erich Bergen',
                        website:
                       "http://www.imdb.com/name/nm2706992/?ref_=tt_cl_t5",
                        "info": "December 31, 1985 in New York, New York, USA"
                    }, 
                    {
                        id: 305,
                        character: 'Daisy Grant',
                        actor: 'Patina Miller',
                        website:
                        "http://www.imdb.com/name/nm2694974/?ref_=tt_cl_t4",
                        "info": "November 6, 1984 in Pageland, South Carolina, USA"
                    },
                    {
                        id: 306,
                        character: 'Matt Mahoney',
                        actor: 'Geoffrey Arend',
                        website:
                       "http://www.imdb.com/name/nm0034309/?ref_=tt_cl_t1",
                        "info": "February 28, 1978 in Manhattan, New York, USA"
                    },
                    {
                        id: 307,
                        character: 'Sebastian Arcelus',
                        actor: 'Jay Whitman',
                        website:
                        "http://www.imdb.com/name/nm1278376/?ref_=tt_cl_t14",
                        "info": "November 5, 1976 in New York City, New York, USA"
                    }   
                ]
            }, 
            {
                id:4,
                name:'Scorpion',
                created: '2014',
                mediasource:'NBC', 
                numberofviewers: 1000000,
                actors: [
                    {
                        id: 401,
                        character: 'Walter O\'Brien',
                        actor: 'Elyes Gabel',
                        website:
                        "http://www.imdb.com/name/nm1175468/?ref_=tt_cl_t1",
                        "info": "May 8, 1983 in London, England, UK"
                    },
                    {
                        id: 402,
                        character: 'Cabe Gallo',
                        actor: 'Robert Patrick',
                        website:
                        "http://www.imdb.com/name/nm0001598/?ref_=tt_cl_t5",
                        "info": "November 5, 1958 in Marietta, Georgia, USA"
                    },
                    {
                        id: 403,
                        character: 'Happy Quinn',
                        actor: 'Jadyn Wong',
                        website:
                        "http://www.imdb.com/name/nm2144240/?ref_=tt_cl_t4",
                        "info": "dob"        
                    },
                    {
                        id: 404,
                        character: 'Paige Dineen',
                        actor: 'Katharine McPhee',
                        website:
                        "http://www.imdb.com/name/nm1897713/?ref_=tt_cl_t2",
                        "info": "March 25, 1984 in Los Angeles, California, USA"      
                    },
                    {
                        id: 405,
                        character: 'Toby Curtis',
                        actor: 'Eddie Kaye Thomas',
                        website:
                        "http://www.imdb.com/name/nm0858776/?ref_=tt_cl_t3",
                        "info": "October 31, 1980 in New York City, New York, USA"
                    },
                    {
                        id: 406,
                        character: 'Sylvester Dodd',
                        actor: 'Ari Stidham',
                        website:
                        "http://www.imdb.com/name/nm3879785/bio?ref_=nm_ov_bio_sm",
                        "info": "dob"
                    },
                ]
            }
        ];
// When hosting the solution on Github pages, we don't have a real server and thus can't run
// json-server, so I wrote this axios stub. I wrote it so that we don't need to change as much for
// how the code looks in the solution. Otherwise I would have needed to change the axios calls to
// e.g. `fakeApi.getStudentById(id)`. I'm not sure how much that would've mattered in the end.

export default {
  get(url) {
    return new Promise(resolve => {
      setTimeout(() => {
        if (url.includes('students?class')) {
          const matches = url.match(/students\?class=(.*)/)
          const className = matches[1]
          resolve({ data: data.students.filter(student => student.class === className)})
        } else {
          const matches = url.match(/students\/(.*)/)
          const id = parseInt(matches[1], 10)
          resolve({ data: data.students.find(student => student.id === id) })
        }
      }, 500)
    })
  }
}

const data = {
  "students": [{
      "id": 1,
      "first_name": "Wilona",
      "last_name": "Peto",
      "email": "wpeto0@ft.com",
      "class": "MATH1010",
      "grade": "C"
    }, {
      "id": 2,
      "first_name": "Ame",
      "last_name": "Longega",
      "email": "alongega1@freewebs.com",
      "class": "ENG2010",
      "grade": "B"
    }, {
      "id": 3,
      "first_name": "Alica",
      "last_name": "Piens",
      "email": "apiens2@springer.com",
      "class": "BIO2020",
      "grade": "A-"
    }, {
      "id": 4,
      "first_name": "Gibby",
      "last_name": "Tuckley",
      "email": "gtuckley3@earthlink.net",
      "class": "MATH1010",
      "grade": "C+"
    }, {
      "id": 5,
      "first_name": "Renado",
      "last_name": "Mulliner",
      "email": "rmulliner4@loc.gov",
      "class": "ENG2010",
      "grade": "A"
    }, {
      "id": 6,
      "first_name": "Jackquelin",
      "last_name": "Willgoose",
      "email": "jwillgoose5@squidoo.com",
      "class": "BIO2020",
      "grade": "C"
    }, {
      "id": 7,
      "first_name": "Orrin",
      "last_name": "Sievewright",
      "email": "osievewright6@senate.gov",
      "class": "MATH1010",
      "grade": "D+"
    }, {
      "id": 8,
      "first_name": "Arlee",
      "last_name": "Brundle",
      "email": "abrundle7@jigsy.com",
      "class": "ENG2010",
      "grade": "C"
    }, {
      "id": 9,
      "first_name": "Dyan",
      "last_name": "Demcik",
      "email": "ddemcik8@purevolume.com",
      "class": "BIO2020",
      "grade": "B"
    }, {
      "id": 10,
      "first_name": "Helen-elizabeth",
      "last_name": "Challenor",
      "email": "hchallenor9@opera.com",
      "class": "MATH1010",
      "grade": "B-"
    }, {
      "id": 11,
      "first_name": "Deedee",
      "last_name": "Snalham",
      "email": "dsnalhama@storify.com",
      "class": "ENG2010",
      "grade": "A"
    }, {
      "id": 12,
      "first_name": "Olympia",
      "last_name": "Emsden",
      "email": "oemsdenb@google.com.br",
      "class": "BIO2020",
      "grade": "C+"
    }, {
      "id": 13,
      "first_name": "Allix",
      "last_name": "McCandless",
      "email": "amccandlessc@opera.com",
      "class": "MATH1010",
      "grade": "C-"
    }, {
      "id": 14,
      "first_name": "Christel",
      "last_name": "Jiroutek",
      "email": "cjiroutekd@oaic.gov.au",
      "class": "ENG2010",
      "grade": "B+"
    }, {
      "id": 15,
      "first_name": "Lyndsey",
      "last_name": "Hulkes",
      "email": "lhulkese@noaa.gov",
      "class": "BIO2020",
      "grade": "C"
    }, {
      "id": 16,
      "first_name": "Kienan",
      "last_name": "Collen",
      "email": "kcollenf@free.fr",
      "class": "MATH1010",
      "grade": "C"
    }, {
      "id": 17,
      "first_name": "Boris",
      "last_name": "Jotham",
      "email": "bjothamg@deviantart.com",
      "class": "ENG2010",
      "grade": "C"
    }, {
      "id": 18,
      "first_name": "Judon",
      "last_name": "McPike",
      "email": "jmcpikeh@tamu.edu",
      "class": "BIO2020",
      "grade": "C"
    }, {
      "id": 19,
      "first_name": "Sander",
      "last_name": "Sinnatt",
      "email": "ssinnatti@geocities.com",
      "class": "MATH1010",
      "grade": "A"
    }, {
      "id": 20,
      "first_name": "Trev",
      "last_name": "Mayston",
      "email": "tmaystonj@t.co",
      "class": "ENG2010",
      "grade": "B"
    }, {
      "id": 21,
      "first_name": "Trey",
      "last_name": "Hanson",
      "email": "thanson@k.com",
      "class": "BIO2020",
      "grade": "B-"
    }, {
      "id": 22,
      "first_name": "Kylee",
      "last_name": "Waddops",
      "email": "kwad1990@g.com",
      "class": "MATH1010",
      "grade": "B"
    }, {
      "id": 23,
      "first_name": "Melissa",
      "last_name": "Madsen",
      "email": "meligirl@m.co",
      "class": "ENG2010",
      "grade": "A"
    }, {
      "id": 24,
      "first_name": "Jerry",
      "last_name": "Jackson",
      "email": "jacksonj@tg.com",
      "class": "BIO2020",
      "grade": "A-"
    }, {
      "id": 25,
      "first_name": "Jeffrey",
      "last_name": "Smith",
      "email": "sk8tr4ever@cool.com",
      "class": "MATH1010",
      "grade": "B+"
    }, {
      "id": 26,
      "first_name": "Henry",
      "last_name": "Harrison",
      "email": "two.h@gm.com",
      "class": "ENG2010",
      "grade": "C+"
    }, {
      "id": 27,
      "first_name": "Harry",
      "last_name": "Henrison",
      "email": "harryhairs@gm.com",
      "class": "BIO2020",
      "grade": "A-"
    }, {
      "id": 28,
      "first_name": "Jessica",
      "last_name": "Lyman",
      "email": "jessbess@g.co",
      "class": "MATH1010",
      "grade": "B"
    }, {
      "id": 29,
      "first_name": "Terry",
      "last_name": "Mathews",
      "email": "t.rex.mathews@g.com",
      "class": "ENG2010",
      "grade": "B-"
    }, {
      "id": 30,
      "first_name": "Jackson",
      "last_name": "Perry",
      "email": "2cool4u@t.com",
      "class": "BIO2020",
      "grade": "D-"
    }]
}
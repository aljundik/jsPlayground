const game = {
    suspects: [
        {
            name: "Rusty",
            color: "oragne"
        },
        {
            name: "Miss Scarlet",
            color: "red"
        }
    ]
};



const suspects = [
    {
        name: "Rusty",
        color: "oragne"
    },
    {
        name: "Miss Scarlet",
        color: "red"
    }
];


const obj = { a: 1, b: 2, c: 1 };






const newDevelopment = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            { kitchen: false },
            { ballroom: false },
            { conservatory: true },
            { 'dining room': true },
            { 'billiard room': false },
            { library: true }
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            { kitchen: true },
            { ballroom: false },
            { conservatory: false },
            { 'dining room': false },
            { 'billiard room': true },
            { library: false }
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            { kitchen: false },
            { ballroom: false },
            { conservatory: true },
            { 'dining room': false },
            { 'billiard room': true },
            { library: false }
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            { kitchen: true },
            { ballroom: false },
            { conservatory: false },
            { 'dining room': true },
            { 'billiard room': false },
            { library: false }
        ]
    }]


// const somthing = newDevelopment.map(function(suspects){

//     return suspects.rooms;
// }).reduce((room,memo,[]) => {
//     console.log(room,memo);
// });

const somthing = newDevelopment.reduce((result, key, value) => {
    let temp = [];
    result.push(key.rooms.map((i, index) => {

        for (let m in i) {
            //console.log('TEST HERE ', i[m])
            if (i[m] === false) temp.push(m);

        }

        return temp;
    }));
    return result;









}, []);


const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick',
    'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire',
    'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David',
    'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana',
    'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano',
    'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi',
    'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken',
    'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank',
    'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];



    const bornIn50s = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
    const inventorName = inventors.map(inventor => {return {firstName: inventor.first, lastName: inventor.last}});
    const oldestToYoungest = inventors.sort((inventor1, inventor2) => inventor1.year < inventor2.year ? -1 : 1);

    const combinedYearsLived = inventors.reduce((result,inventor) => {
        const inventorAge = inventor.passed - inventor.year;
        
        //result += inv 
        //console.log(result);
        return result + (inventor.passed - inventor.year);
    },0); // 861


    const inventorsYearsLived = inventors.sort((inventor1, inventor2) =>   inventor1.passed - inventor1.year < inventor2.passed - inventor2.year ? -1 : 1);
    
    const peopleByLastName = people.sort((person1, person2) => person1.split(', ')[1] > person2.split(', ')[1] ? 1 : -1);


    const sumUpInstances = data.reduce((result,vehichle) => {
        if(!result[vehichle]) result[vehichle] = 0;
        result[vehichle]++;

        return result;

    },{});

console.log(combinedYearsLived);


const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
  }, 0);

  console.log(totalYears);




console.log('movies-and-jurassic-park.js is connected! woohoo!');
//Movie Database

var thelionking = {
  title: 'The Lion King',
  director: 'Roger Allers',
  releaseYear: 1994,
  duration: 81,
  actors: ['James Earl Jones', 'Matthew Broderick', 'Jeremy Irons', 'Whoopi Goldberg']

};


console.log (thelionking.title);
console.log (thelionking.director);
console.log (thelionking.releaseYear);

var directorCutDuration = thelionking.duration + 25;

console.log(directorCutDuration)


// Part 1

var snakewaterMontana = {
  paleontologist: "Dr. Alan Grant",
  depth: "10 meters",
  specimen: "Velociraptor"
};


// Do the tasks down here!

var guestOfHonor = snakewaterMontana.paleontologist;

var cleverGirl = snakewaterMontana.specimen;


// Part 2

var nicaragua = {
  depth: "200 meters",
  annual_budget: 1500000,
  specimens: [
    "Tyrannosaurus Rex",
    "Stegosaurous",
    "Triceratops",
    "Velociraptor"
  ],
};

// Do the tasks down here!
var nacaraguanSpecimens = nicaragua.specimens;

var favoriteSpecimen = nicaragua.specimens[2];

var newAnnual_budgest = nicaragua.annual_budget + 250000;


// Part 3

var hammondsMines = {
  buenos_aires: {
    depth: "400 meters",
    annual_budget: 1000000,
    specimens: [
      "Dilophosaurus",
      "Brachiosaurus"
    ],
  },
  mexico: {
    depth: "350 meters",
    annual_budget: 900000,
    specimens: [
      "Gallimimus",
      "Parasaurolophus"
    ],
  },
  nicaragua: {
    depth: "200 meters",
    annual_budget: 1500000,
    specimens: [
    "Tyrannosaurus Rex",
    "Stegosaurous",
    "Triceratops",
    "Velociraptor"
    ],
  },
  
};

// Do the tasks down here!
//task 1
var hammondsMinesMexicoDepth = hammondsMines.mexico.depth;
//task 2
console.log(hammondsMines.buenos_aires.annual_budget);
//task 3
console.log(hammondsMines.buenos_aires.specimens);
// 4th task- Nicaragua was adedt to the above VAR string
//task 5
var buenosAiresBudget = hammondsMines.buenos_aires.annual_budget;
var mexicoAnnualBudget = hammondsMines.mexico.annual_budget;
var nicaraguaAnnualBudget = hammondsMines.nicaragua.annual_budget;
//task 6
var hammondsMinesBudget = buenosAiresBudget + mexicoAnnualBudget + nicaraguaAnnualBudget;
//task 7
console.log(hammondsMines.mexico.specimens[1])


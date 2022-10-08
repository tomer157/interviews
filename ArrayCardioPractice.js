const inventors = [
  { first: 'Albert', last: 'Einstien', year: 1879, passed: 1955 },
  { first: 'jo', last: 'ja', year: 1596, passed: 1600 },
  { first: 'Isac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'ga', last: 'ga', year: 1571, passed: 1955 },
];

const fifteen = inventors.filter(function (inventor) {
  if (inventor.year >= 1500 && inventor.year < 1600) {
  }
});


const author = 'Eminem';
const composition = 'Cleanin out my closet';
const ratingCiaa = 96;
const ratingBpi = 64;
const ratingDiff = ratingCiaa - ratingBpi;
const ratingTotal = ratingCiaa + ratingBpi;

if (ratingTotal >= 150) {
  console.log('Composition added to your playlist')
} else console.log('Rating too low, composition not added')

if (ratingDiff >= 33) {
  console.log('Rating difference too high, please review composition')
} else console.log('Rating difference is'+' '+ratingDiff)

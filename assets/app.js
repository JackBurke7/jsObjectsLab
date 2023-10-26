const album1 = {
    title: 'Talking Heads',
    albumDetails: {
      released: new Date('September 16, 1977'),
      label: 'Sire',
      formats: ['LP']
    }
  };
  
const title = 'Talking Heads - 77';
  album1.title = title;
const label = album1.albumDetails.label;
const album2 = {
    title: 'More Songs About Buildings and Food',
    albumDetails: {
      released: new Date('July 14, 1978'),
      label: 'Sire',
      formats: ['LP', '8-track']
    }
  };
  
const album3 = {
    title: 'Fear of Music',
    albumDetails: {
      released: 'August 3, 1979',
      label: 'Sire',
      formats: ['Cassette']
    }
  };
  
  album3.albumDetails.formats.push(album2.albumDetails.formats[0]);
  album3.albumDetails.released = new Date(album3.albumDetails.released);
  
const album4 = {
    title: 'Remain in Light',
    albumDetails: {
      released: new Date('October 8, 1980'),
      formats: ['Cassette', 'LP']
    }
  };
  
  album4.albumDetails.label = 'Sire';
  
const album5 = {
    title: 'Little Creatures',
    albumDetails: {
      released: new Date('June 10, 1985'),
      labels: ['Sire', 'emi'],
      formats: ['CD', 'cassette', 'LP']
    }
  };
  
  album5.albumDetails.labels[1] = 'EMI';

const album6 = {
    title: 'True Stories',
    albumDetails: {
      released: new Date('October 7, 1986'),
      labels: ['Sire, EMI'],
      formats: ['CD', 'cassette', 'LP']
    }
  };

const formats = album6.albumDetails.formats;
  
const album7 = {
    title: 'Naked',
    albumDetails: {
      released: new Date('March 15, 1988'),
      labels: ['Sire', 'EMI'],
      formats: ['CD', 'cassette', 'LP']
    }
  };
  
const talkingHeadsAlbums = [
    album1,
    album2,
    album3,
    album4,
    album5,
    album6,
    album7
  ];
  
const labels = talkingHeadsAlbums[4].albumDetails.labels;
talkingHeadsAlbums[5].albumDetails.released = album7.albumDetails.released;

let albumIdx = 4;

const albumDetails = talkingHeadsAlbums[albumIdx].albumDetails;

 // Exercise 1
console.log('Exercise 1:', title);

// Exercise 2
console.log('Exercise 2:', label);

// Exercise 3
console.log('Exercise 3:', album3.albumDetails.formats[1]);

// Exercise 4
console.log('Exercise 4:', album3.albumDetails.released.toLocaleDateString());

// Exercise 5
console.log('Exercise 5:', album4.albumDetails.label);

// Exercise 6
console.log('Exercise 6:', album5.albumDetails.labels[1]);

// Exercise 7
console.log('Exercise 7:', formats);

// Exercise 8
console.log('Exercise 8:', labels);

// Exercise 9
console.log('Exercise 9:', talkingHeadsAlbums[5].albumDetails.released.toLocaleDateString());

// Exercise 10
console.log('Exercise 10:', albumDetails);

// Bonus
console.log('who are the talking heads?');
const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('getchBreedDescription', () => {
  it('returns a string description for a valid bread, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      assert.equal(err, null);
      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  }),
  it('returns null when an invalid/non-existent breed is passed in', (done) => {
    fetchBreedDescription('Siberiaa', (err, desc) => {
      assert.equal(desc, null);
      done();
    });
  });
});
  
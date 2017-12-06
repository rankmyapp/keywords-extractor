const R = require('ramda');

const maxNumberOfMatches = 3;

const buildPairKeywords = R.compose(R.map(R.join(' ')), R.aperture(2));
const combinePairKeywords = kwds => R.map(buildPairKeywords, kwds);
const combineTrioKeywords = kwds => R.map(R.join(' '), kwds);

function generateKeywords(text) {
  const singleKeywords = R.split(' ', text.toLowerCase());

  const sentences = R.map((f) => {
    const keywords = R.drop(f, singleKeywords);
    const trioKeywords = R.splitEvery(maxNumberOfMatches, keywords);
    return R.concat(combinePairKeywords(trioKeywords), combineTrioKeywords(trioKeywords));
  }, R.times(R.identity, maxNumberOfMatches - 1));

  const generate = R.compose(R.uniq, R.concat(singleKeywords), R.flatten);
  return generate(sentences);
}

module.exports = {
  generateKeywords,
};

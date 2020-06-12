const R = require('ramda');

const condition = R.test(/[^a-zA-Z0-9\u00C0-\u00FF ]/g);
/* eslint-disable */
const patternFixer = {
  '$': '\\$',
  '(': '\\(',
  ')': '\\)',
  '*': '\\*',
  '+': '\\+',
  '.': '\\.',
  '...': '\\.\\.\\.',
  '?': '\\?',
  '^': '\\^',
  '|': '\\|',
};
/* eslint-enable */

function clearStopwords(keywords, stopwords) {
  const fixPatternMismatch = stopwords.map((stopword) => {
    return patternFixer[stopword] || stopword;
  });

  const initialStopwordsRegex = new RegExp(`^(${fixPatternMismatch.join('|')})\\s`);
  const finalStopwordsRegex = new RegExp(`\\s(?:${fixPatternMismatch.join('|')})$`);

  const applyRegex = R.compose(
    R.replace(initialStopwordsRegex, ''),
    R.replace(finalStopwordsRegex, ''),
  );

  const cleanedkeywords = R.map(keyword => applyRegex(keyword).trim(), keywords);

  const kwds = R.difference(cleanedkeywords, stopwords);

  return kwds;
}

function clearKeywords(keywords, stopwords) {
  const cleanedkeywords = clearStopwords(keywords, stopwords);
  const clear = R.compose(R.uniq, R.flatten);
  const kwds = clear(cleanedkeywords);
  const filteredKeywords = R.filter(key => R.not(condition(key)), kwds);
  return filteredKeywords;
}

module.exports = {
  clearKeywords,
};

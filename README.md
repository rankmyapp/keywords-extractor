# keywords-extractor

Generate meaningful keywords splitting texts.

# Download

```
npm i keywords-extractor
```

# Usage

```js
const { generateKeywords, clearKeywords } = require('keywords-extractor');

const text = "A gente te pega pela mão e só solta na hora da aprovação :) Enem e vestibulares estão com tudo!";
const stopwords = ["a","te","e","da","com"];

const keywords = generateKeywords(text);
const clearKeyowrds = clearKeywords(keywords, stopwords);

```

For extra information you can check a more complete usage at the `demo.js` on this repo.

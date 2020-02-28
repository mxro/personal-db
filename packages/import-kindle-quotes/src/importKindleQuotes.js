const fs = require('fs');
const { parser } = require('kindle-citation-extractor');

const fileName = process.argv[2]
const { createQuote } = require('quotes-api-utils');

async function run() {

  console.log('Importing: ', fileName);
  const clippings = fs.readFileSync(fileName, 'utf-8');
  let data = parser(clippings);
  //data = data.slice(0, 100);

  for (const entry of data) {
    await createQuote(entry);
  }
};


run();


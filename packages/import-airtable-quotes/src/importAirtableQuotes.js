const fs = require('fs');
const parse = require('csv-parse/lib/sync');
const { createQuote } = require('quotes-api-utils');

const fileName = process.argv[2]

async function run() {
  console.log('Importing: ', fileName);
  const csvData = fs.readFileSync(fileName, 'utf-8');

  let records = parse(csvData, {
    columns: true,
    skip_empty_lines: true
  });
  // records = records.slice(0, 5);

  records = records.map((record) => {
    const Quote = record['﻿Quote'];
    const RawSource = record['Raw Source'];
    return { Quote, RawSource, ...record }
  });

  for (const { Quote, Author, Book, Tags, Collected, Location, Link, RawSource } of records) {
    await createQuote({
      quote: Quote,
      author: Author,
      book: Book,
      tags: Tags.split(','),
      collected: Collected,
      location: Location,
      rawSource: RawSource,
      link: Link
    });
  }

}


run();
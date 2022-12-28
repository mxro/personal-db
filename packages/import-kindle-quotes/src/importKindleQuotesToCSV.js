const fs = require('fs');
const { parser } = require('kindle-citation-extractor');
const parse = require('csv-parse/lib/sync');
const generate = require('csv-generate/lib/sync');
const moment = require('moment');
const fileName = process.argv[2]



async function run() {

  console.log('reading existing database');
  const clippingsOld = parse(fs.readFileSync('export.csv', 'utf-8'), {
    columns: true,
  skip_empty_lines: true});

  const clippings = fs.readFileSync('My Clippings.txt', 'utf-8');
  let data = parser(clippings);


  let duplicates = [];

  console.log(`Total quotes found in input ${data.length}`);
  const uniqueData = data.filter((row) => 
    !clippingsOld.find((clipping) => clipping.Quote === row.quote) &&
      !clippingsOld.find((clipping) => clipping.Quote.replaceAll('"', '\'') === row.quote)
  );

  console.log(`Total unique quotes found ${uniqueData.length}`);


  const importTimestamp = new Date();
  const newData = uniqueData.map((c) => (
   { Author: `"${c.author}"`,
    Quote: `"${c.quote.replaceAll('"', '\'')}"`,
    Book: `"${c.book}"`,
    Created: `"${moment(new Date().toISOString()).format("MMMM D, YYYY h:mm a")}"`,
    Collected: `"${moment(c.dateAdded.toISOString()).format("MMMM D, YYYY h:mm a")}"`,
    Location: `"${c.page + ' ' + c.location}"`,
    RawSource: `"Kindle Import Timestamp ${importTimestamp.getTime()}"`,
  }));

  console.log(uniqueData[103]);
  console.log(clippingsOld[500]);
  console.log(newData[102]);


  const columns = 'Author,Quote,Book,Tags,Rating,Location,Link,Collected,RawSource,Created,id'.split(',');

  let output = '';
  output += columns.join(',')+'\n';

  output += newData.map((row) => columns.map((column) => row[column] || '').join(',')).join('\n');

  //console.log(output);
  fs.writeFileSync('output.csv', output);

};


run();


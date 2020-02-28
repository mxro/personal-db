const { query } = require('personaldb-graphql-utils');

function escapeDoubleQuotes(string) {
  if (!string) {
    return string;
  }
  return string.replace(/"/g, '\\"').replace(/\n/g, '\\n');
}

async function assertTag(tag) {
  const findTags = `{
  tags(where: { Tag: "${tag}" }) {
    Tag
    id
  }
}`;
  const tags = await query(findTags);

  if (tags.tags.length === 1) {
    return tags.tags[0].id;
  }

  if (tags.tags.length > 0) {
    throw new Error('Invalid tag found: ', tag);
  }

  const createTag = `
  mutation {
  createTag(input: {
    data: {
      Tag: "${escapeDoubleQuotes(tag)}",
    }
  }) {
    tag {
      id
      Tag
    }
  }
}`;

  const createRes = await (query(createTag));
  return createRes.createTag.tag.id;
}

async function assertTags({ tags }) {
  let res = [];
  for (const tag of tags) {
    res.push(await assertTag(tag));
  }
  return res;
}

async function createQuote(entry) {

  let tags = [];

  //asserting tags
  if (entry.tags) {
    tags = await assertTags(entry);
  }
  // check for duplicates
  const findQuotes = `{
  quotes(where: { Quote: "${escapeDoubleQuotes(entry.quote)}" }) {
    Quote
    Author
  }
}`;

  const quotes = await query(findQuotes);
  if (quotes.quotes.length > 0) {
    // console.log('Skipping upload. Quote already in database: ', entry.quote);
    return Promise.resolve();
  }

  let collected = "";
  if (entry.dateAdded) {
    collected = `Collected: "${entry.dateAdded.toISOString()}",`;
  }

  let location = "";
  if (entry.page && entry.location) {
    location = `Location: "${entry.page || ""} (${entry.location || ""})",`;
  } else if (entry.page) {
    location = `Location: "${entry.page}",`;
  } else if (entry.location) {
    location = `Location: "${entry.location}",`;
  } else {
    location = `Location: "",`;
  }

  const tagReference = tags.map((tag) => '"' + tag + '"').join(', ');

  const createQuote = `
  mutation {
  createQuote(input: {
    data: {
      Quote: "${escapeDoubleQuotes(entry.quote)}",
      Author: "${escapeDoubleQuotes(entry.author)}",
      Book: "${escapeDoubleQuotes(entry.book)}",
      ${location}
      ${collected} 
      RawSource: "${escapeDoubleQuotes(entry.rawSource || "")}",
      Link: "${escapeDoubleQuotes(entry.link) || ""}",
      tags: [${tagReference}], 
    }
  }) {
    quote {
      Quote
    }
  }
}`;

  const createRes = await (query(createQuote));

  return createRes;
}

exports.createQuote = createQuote;
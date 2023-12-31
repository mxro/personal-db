

# New Approach using CSV

1. Got to Notion and export quotes https://www.notion.so/mxro/c09743d178b04a50b7123c1304394ef2
2. Rename to export.csv and move to packages/import-kindle-quotes
3. Grab My Clippings.txt from Kindle and place into same folder
4. Run node src/importKindleQuotesToCSV.js in the same folder
5. Get output.csv and merge this with the database on Notion

# Legacy approach using Strapi

## Start strapi API server

```
cd packages/strapi
yarn develop
```

Login with

mxro.2019@gmail.com
strapidummy

## Import to Database

(This avoids importing duplicate quotes)

Use packages/import-kindle-quotes.

## Export from DB Browser for SQLite

Run the following query:

```
Create table quote_export as
SELECT q.Author, q.Quote, q.Book, group_concat(t.Tag) as Tags, q.Location, q.Link, (SELECT datetime(cast(q.Collected / 1000 as text), 'unixepoch', 'localtime')) as Collected, q.RawSource, (SELECT(DATETIME((SELECT cast(q.created_at / 1000 as text)), 'unixepoch', 'localtime'))) As Created, q.id FROM quotes q
  LEFT OUTER JOIN quotes_tags__tags_quotes qt on q.id == qt.quote_id
  LEFT OUTER JOIN tags t on qt.tag_id == t.id
  WHERE q.id > 4352
  GROUP BY q.id
  ORDER BY q.id ASC
```

Replace id with the last id imported

Export the quote_export table to CSV

Go to Notion and Merge the CSV with the Quotes Table.

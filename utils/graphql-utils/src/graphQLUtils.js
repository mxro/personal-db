
const fetch = require('node-fetch');

const endpoint = 'http://localhost:1337/graphql'

async function query(query) {

  const body = JSON.stringify({
    "query": query
  }
  );

  const res = await fetch(endpoint, {
    method: 'POST',
    body,
    headers: {
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer ${accessToken}`,
    },
  });

  if (res.status !== 200) {
    console.log('ERROR: Query failed');
    console.log(query);
    console.log('Response from server:');
    console.log(await res.text());
    throw new Error('Error running query against server');
  }

  return (await res.json()).data;
}

exports.query = query;
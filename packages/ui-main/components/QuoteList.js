import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

function QuoteList() {
  const GET_QUOTES = gql`
  {
    quotes {
      Quote
    }
  }
`;
  const { loading, error, data } = useQuery(GET_QUOTES);

  if (loading) return <p>'Loading...'</p>;
  if (error) return `Error! ${error.message}`;

  return <div>{
    data.quotes.map(quote => {
      return <p>{quote.Quote}</p>;
    })
  }
  </div>
}

export default QuoteList;
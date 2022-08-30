import { Route, useParams, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is fun..." },
  { id: "q2", author: "Anubhav", text: "I love react!" },
];

const QuoteDetail = () => {
  const { quoteId } = useParams();
  const route = useRouteMatch();

  console.log(route);

  const quote = DUMMY_QUOTES.find((quote) => quote.id === quoteId);

  if (!quote) {
    return <p>No Quote found!</p>;
  }

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={route.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${route.url}/comments`}>
            Load comments
          </Link>
        </div>
      </Route>
      <Route path={`${route.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;

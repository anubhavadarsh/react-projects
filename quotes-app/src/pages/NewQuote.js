import { useHistory } from "react-router";
import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  const history = useHistory();

  const handleQuoteAddition = (quoteData) => {
    console.log(quoteData);
    history.push("/");
  };

  return <QuoteForm onAddQuote={handleQuoteAddition} />;
};

export default NewQuote;

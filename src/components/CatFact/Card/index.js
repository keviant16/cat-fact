import { useQuery } from "react-query";
import { getCatFact } from "../../../services/catfact-service";

function Card() {
  const { data, isLoading } = useQuery('cat-fact', getCatFact)

  if (isLoading) {
    return <span>Loading ...</span>
  }

  return (
    <div className="card">
      <p className="quote">
        <i>{data.fact}</i>
      </p>
      <p className="fact">Fact n°{data.length}</p>
    </div>
  );
}

export default Card;
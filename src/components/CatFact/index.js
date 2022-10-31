import Button from "./Button";
import Card from "./Card";

function CatFact() {
  return (
    <div className="cat-fact-container">
      <div className="bg-text">
        <h1>Cat Fact</h1>
        <Card />
        <Button />
      </div>
    </div>
  );
}

export default CatFact;
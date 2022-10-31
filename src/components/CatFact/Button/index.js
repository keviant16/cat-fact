import { useQueryClient } from "react-query";

function Button() {
  const queryClient = useQueryClient()

  const fetchNewCatFact = async () => {
    queryClient.invalidateQueries('cat-fact')
  }
  return (
    <button className="button" onClick={fetchNewCatFact}>
      <div class="face">
        <span class="pip" />
      </div>
    </button>
  );
}

export default Button;
import { useParams } from "react-router-dom";

const Table = () => {
  const params = useParams();

  return (
    <div>
      <h2>TABLE {params.Id}</h2>
    </div>
  );
};

export default Table;
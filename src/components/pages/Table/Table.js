import { useParams } from "react-router-dom";
import TableForm from "../../features/TableForm/TableForm";

const Table = () => {
  const params = useParams();
  const tableId = parseInt(params.Id);

  return (
    <div>
      <h2>TABLE {tableId}</h2>
      <TableForm tableId={tableId} />
   </div>
  );
};

export default Table;
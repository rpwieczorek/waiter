import { useSelector } from "react-redux";
import { getTables } from "../../../redux/tablesRedux";
import { Link } from "react-router-dom";
import SpinnerComponent from "../../common/SpinnerComponent/SpinnerComponent";


const Tables = () => {
  
  const tablesData = useSelector(state => getTables(state));
  //console.log(tablesData);
  return (
    <div>
      <h2>All Tables</h2>
      {tablesData.length === 0 && <SpinnerComponent />}
      <ul className="list-group">
        
        {tablesData.map(table => <li key={table.id} className="p-2 d-flex justify-content-between border-bottom">
            <div><h5>Table {table.id} <small> <strong>Status:</strong> <span className="text-muted">{table.status} </span></small></h5></div>
            <Link className="btn btn-primary" to={'/table/'+ table.id}>Show more</Link>
          </li>)}

      </ul>

    </div>
  );
};

export default Tables;
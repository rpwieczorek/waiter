import { API_URL } from "../config";

// selectors
export const getTables = ({tables}) => tables;
export const getTableDataById = ({tables}, tableId) => tables.find(table => table.id === tableId);
// export const getColumnsByList = ({columns}, listId) => columns.filter(column => column.listId === listId);

// actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLES = createActionName('UPDATE_TABLES');
const UPDATE_TABLE  = createActionName('UPDATE_TABLE');

// action creators
export const updateTables = payload => ({ type: UPDATE_TABLES, payload });
export const updateTable = payload => ({ type: UPDATE_TABLE, payload });
export const fetchTables = () => {
  return (dispatch) => {
    fetch(API_URL + '/tables/')
      .then(res => res.json())
      .then(tables => dispatch(updateTables(tables)));
  }
};

export const updateTableRequest = table => {
  return (dispatch) => {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
    body: JSON.stringify(table)
    };

    fetch(API_URL + '/tables/' + table.id, options)
      .then(() => dispatch(updateTable(table)))
  }
};  


const tablesReducer = (statePart = [], action) => {
  switch(action.type) {
    case UPDATE_TABLES:
      return [...action.payload]
    case UPDATE_TABLE:
      return statePart.map((table) =>
        table.id === action.payload.id ? action.payload : table);
    default:
      return statePart;
  }
};

export default tablesReducer;
// selectors
// export const getAllColumns = ({columns}) => columns;
// export const getColumnsByList = ({columns}, listId) => columns.filter(column => column.listId === listId);

// actions
const createActionName = actionName => `app/tables/${actionName}`;

// action creators
// export const addColumn = payload => ({ type: ADD_COLUMN, payload });

const tablesReducer = (statePart = [], action) => {
  switch(action.type) {
    default:
      return statePart;
  }
};

export default tablesReducer;
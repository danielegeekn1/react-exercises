const defaultState = [];

//actions
const ADD = "USERS@ADD";
const REMOVE = "USERS@REMOVE";
const EDIT = "USERS@EDIT";
const RESET = "USERS@RESET";

//actions creator
export function addUser(user) {
  return {
    type: ADD,
    payload: user,
  };
}
export function removeUser(id) {
  return {
    type: REMOVE,
    payload: id,
  };
}
export function editUser(id, data) {
  return {
    type: EDIT,
    payload: { id, data },
  };
}
export function resetUsers() {
  return {
    type: RESET,
  };
}

//REDUCER
export function todosReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD: {
      return [...state, action.payload];
    }
    case REMOVE: {
      return state.filter((user) => user.id !== action.payload);
    }
    case EDIT: {
      return state.map((user) => {
        if (user.id === action.payload.id) {
          return { ...user, ...action.payload.data };
        }
        return user;
      });
    }
    case RESET: {
      return defaultState;
    }
    default: {
      return state;
    }
  }
}

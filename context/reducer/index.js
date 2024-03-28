export default function appReducer(state, action) {
  const type = action.type.split("_")[0];
  const model = action.type.split("_")[1];

  switch (type) {
    case "request": {
      state[`is${model}`] = true;
      state[`res${model}`] =
        action.clear === true ? undefined : state[`res${model}`];
      return { ...state };
    }

    case "response": {
      // state[`is${model}`] = false;

      state[`res${model}`] = action.response.value || action.response.data;
      return { ...state };
    }

    case "error": {
      state[action.type] = action.error;
      state[`is${model}`] = false;
      state[`res${model}`] = state[`res${model}`] ? state[`res${model}`] : [];
      return { ...state };
    }

    case "clearmodel": {
      state[`res${action.model}`] = undefined;
      state[`is${action.model}`] = undefined;
      return { ...state };
    }

    case "clearcontext": {
      return { ...state.initialState };
    }

    case "setmodel": {
      state[`res${action.model}`] = action.response;
      return { ...state };
    }

    default:
      return state;
  }
}

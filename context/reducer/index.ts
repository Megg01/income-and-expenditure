
interface Props {
  state: any;
  action: any;
}

export default function appReducer({state, action}: Props) {
  const type = action.type.split("_")[0];
  const model = action.type.split("_")[1];
  const ismore = action.ismore;
  const isaggr = action.isaggr;
  const iserrclear = action.iserrclear;
  const israndomize = action.israndomize;
  const ismoreelastic = action.ismoreelastic;

  switch (type) {
    case "request": {
      state[`is${model}`] = true;
      state[`res${model}`] =
        action.clear === true ? undefined : state[`res${model}`];
      return { ...state };
    }

    case "response": {
      state[`is${model}`] = false;
      state[`res${model}`] = action.response.value || action.response.data;
      return { ...state };
    }

    case "error": {
      state[action.type] = action.error;
      state[`is${model}`] = false;
      state[`res${model}`] = iserrclear
        ? []
        : state[`res${model}`]
        ? state[`res${model}`]
        : [];
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

    case "language": {
      return {
        ...state,
        lang: action.response,
      };
    }

    case "mobileauth": {
      return {
        ...state,
        islogged: action.response,
      };
    }

    default:
      return state;
  }
}
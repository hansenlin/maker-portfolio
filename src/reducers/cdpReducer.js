import { CDP_OPENED, CDP_SHUT, DAI_DRAWN, DAI_WIPED } from '../actions';

export default (state = {}, action) => {
  switch (action.type) {
    case CDP_OPENED:
      let obj = {};
      obj[action.payload.id] = {
        eth: action.payload.value,
        dai: 0
      };
      return {
        ...state,
        ...obj
      };
    case DAI_DRAWN:
      let id = action.payload.id;
      return {
        ...state,
        [id]: {
          ...state[id],
          dai: state[id].dai + action.payload.value
        }
      };
    case DAI_WIPED:
      let cup = action.payload.id;
      return {
        ...state,
        [cup]: {
          ...state[cup],
          dai: state[cup].dai - action.payload.value
        }
      };
    case CDP_SHUT:
      return state;
    default:
      return state;
  }
}

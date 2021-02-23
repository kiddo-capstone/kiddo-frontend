
import theme from '../../ui/common/theme'

export const initialState = {
  users: [],
  missions: [],
  tasks: [],
  theme,
};

export const appReducer = (state, action) => {
  switch(action.type) {
    case 'FETCH_MISSIONS':
      return {...state, missions: action.missions}
    default:
      return state;
  }
}
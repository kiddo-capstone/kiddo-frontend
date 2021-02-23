
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
    case 'FETCH_TASKS':
      return { ...state, tasks: action.tasks }
    case 'FETCH_USERS':
      return { ...state, users: action.users }
    default:
      return state;
  }
}
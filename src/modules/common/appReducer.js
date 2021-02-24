
import theme from '../../ui/common/theme'

export const initialState = {
  users: [],
  missions: [],
  tasks: [],
  selectedMission: {},
  theme,
};

export const appReducer = (state, action) => {
  switch(action.type) {
    case 'FETCH_MISSIONS':
      return {...state, missions: action.missions}
    case 'FETCH_SELECTED_MISSION':
      return {...state, selectedMission: action.selectedMission}
    case 'FETCH_TASKS':
      return { ...state, tasks: action.tasks }
    case 'FETCH_USERS':
      return { ...state, users: action.users }
    default:
      return state;
  }
}
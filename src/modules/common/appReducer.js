
import theme from "../../ui/common/theme";

export const initialState = {
  users: [],
  missions: [],
  tasks: [],
  selectedMission: {},
  selectedTask: {},
  selectedMissionTasks: [],
  status: '',
  theme,
};

export const appReducer = (state, action) => {
  switch(action.type) {
    case 'FETCH_MISSIONS':
      return {...state, missions: action.missions}
    case 'FETCH_SELECTEDMISSION':
      return {...state, selectedMission: action.selectedMission}
    case 'FETCH_SELECTEDMISSIONTASKS':
      return {...state, selectedMissionTasks: action.selectedMissionTasks}
    case 'FETCH_SELECTED_TASK':
      return { ...state, selectedTask: action.selectedTask }
    case 'FETCH_TASKS':
      return { ...state, tasks: action.tasks }
    case 'FETCH_USERS':
      return { ...state, users: action.users }
    case 'SET_STATUS':
      return { ...state, status: action.status }
    default:
      return state;
  }
}
import theme from "../../ui/common/theme";

export const initialState = {
  currentUser: null,
  missions: [],
  selectedMission: {},
  selectedMissionTasks: [],
  tasks: [],
  selectedTask: {},
  status: "",
  parentId: null,
  theme,
};

export const appReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_MISSIONS":
      return { ...state, missions: action.missions };
    case "FETCH_SELECTEDMISSION":
      return { ...state, selectedMission: action.selectedMission };
    case "FETCH_SELECTEDMISSIONTASKS":
      return { ...state, selectedMissionTasks: action.selectedMissionTasks };
    case "FETCH_SELECTED_TASK":
      return { ...state, selectedTask: action.selectedTask };
    case "FETCH_TASKS":
      return { ...state, tasks: action.tasks };
    case "SET_STATUS":
      return { ...state, status: action.status };
    case "SET_CURRENT_USER":
      return { ...state, currentUser: action.currentUser };
    case "SET_CURRENT_USER_STATS":
      return { ...state, currentUserStats: action.currentUserStats };
    case "SET_PARENT_ID":
      return { ...state, parentId: action.parentId };
    case "SET_REDEEMED":
      return { ...state, redeemed: action.redeemed };
    default:
      return state;
  }
};

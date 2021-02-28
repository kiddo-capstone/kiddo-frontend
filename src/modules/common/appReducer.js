import theme from "../../ui/common/theme";

export const initialState = {
  users: [],
  missions: [],
  tasks: [],
  selectedMission: {},
  selectedTask: {},
  theme,
};

export const appReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_MISSIONS":
      return { ...state, missions: action.missions };
    case "FETCH_SELECTED_MISSION":
      return { ...state, selectedMission: action.selectedMission };
    case "FETCH_SELECTED_TASK":
      return { ...state, selectedTask: action.selectedTask };
    case "FETCH_TASKS":
      return { ...state, tasks: action.tasks };
    case "FETCH_USERS":
      return { ...state, users: action.users };
    case "UPDATE_COMPLETED_TASK":
      return {
        ...state,
        attributes: { image_path: action.image_path, message: action.message },
      };
    default:
      return state;
  }
};

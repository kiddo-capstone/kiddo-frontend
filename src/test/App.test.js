import { useReducer } from "react";
import { screen, render } from '@testing-library/react'
import { renderHook, act } from "@testing-library/react-hooks";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import "@testing-library/jest-dom";
import App from "../modules/app/App";
import appReducer from "../modules/common/appReducer";
import { missionsData, tasksData } from "./testData";

describe("App", () => {
  const history = createMemoryHistory()
  const mockState = {
    users: [],
    missions: [],
    selectedMission: {},
    selectedMissionTasks: [],
    tasks: [],
    selectedTask: {},
    status: ''
  };
  
  jest.mock("../modules/common/apiCalls");
  jest.mock("../modules/common/appReducer", () => ({
    FETCH_MISSIONS: () => mockFetchMissions(),
    FETCH_SELECTEDMISSION: () => mockFetchSelectedMission(),
    FETCH_SELECTED_TASK: () => mockFetchSelectedTask(),
    UPDATE_SELECTED_TASK: () => mockUpdateSelectedTask(),
    FETCH_TASKS: () => mockFetchTasks(),
    FETCH_USERS: () => mockFetchUsers(),
    SET_STATUS: () => mockSetStatus()
  }))

  const { result } = renderHook(() => useReducer(appReducer, mockState))
  const [state, dispatch] = result.current

  const mockFetchMissions = jest.fn().mockImplementation(() => state.missions = missionsData)
  const mockFetchTasks = jest.fn().mockImplementation(() => state.tasks = tasksData)
  const mockFetchSelectedMission = jest.fn().mockImplementation(() => state.missions = missionsData[0])
  const mockFetchSelectedTask = jest.fn().mockImplementation(() => state.tasks = tasksData[0])
  const mockUpdateSelectedTask = jest.fn().mockImplementation(() => state.tasks = tasksData[1])
  const mockFetchUsers = jest.fn().mockImplementation(() => state.users = usersData[0])
  const mockSetStatus = jest.fn()

  beforeEach(async () => {
    await act(async () => {
      render(
        <Router history={history}>
          <App />
        </Router>
      )
    })
  })

  it("should render the app", () => {
    const header = screen.getByText("Welcome, Agent !")
    expect(header).toBeInTheDocument()
  })
});
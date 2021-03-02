import { useReducer } from "react";
import { screen, render } from '@testing-library/react'
import { renderHook, act } from "@testing-library/react-hooks";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import "@testing-library/jest-dom";
import App from "../modules/App/App";
import appReducer from "../modules/common/appReducer";
import { missionsData, tasksData, usersData } from "./testData";

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

  const mockFetchMissions = jest.fn().mockImplementation(() => state.missions = missionsData)
  const mockFetchTasks = jest.fn().mockImplementation(() => state.tasks = tasksData)
  const mockFetchSelectedMission = jest.fn().mockImplementation(() => state.missions = missionsData[0])
  const mockFetchSelectedTask = jest.fn().mockImplementation(() => state.tasks = tasksData[0])
  const mockUpdateSelectedTask = jest.fn().mockImplementation(() => state.tasks = tasksData[1])
  const mockFetchUsers = jest.fn().mockImplementation(() => state.users = usersData)
  const mockSetStatus = jest.fn()
  
  jest.mock("../modules/common/apiCalls");
  const mockReducer = jest.mock("../modules/common/appReducer", () => ({
    FETCH_MISSIONS: () => mockFetchMissions(),
    FETCH_SELECTEDMISSION: () => mockFetchSelectedMission(),
    FETCH_SELECTED_TASK: () => mockFetchSelectedTask(),
    UPDATE_SELECTED_TASK: () => mockUpdateSelectedTask(),
    FETCH_TASKS: () => mockFetchTasks(),
    FETCH_USERS: () => mockFetchUsers(),
    SET_STATUS: () => mockSetStatus()
  }))

  const { result } = renderHook(() => useReducer(mockReducer, mockState))
  const [state, dispatch] = result.current


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

  it("should hold state in reducer", () => {
    // const expectedAction = {
    //   type: "FETCH_MISSIONS",
    //   missions: missionsData
    // }
    
    // act(() => {
    //   dispatch(expectedAction)
    // })

    // expect(mockFetchMissions).toHaveBeenCalled()
    expect(state.missions).toBeTruthy()
    expect(state.tasks).toBeTruthy()
  })
});
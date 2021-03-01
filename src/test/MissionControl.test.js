import AppContext from "../modules/app/AppContext";
import MissionControl from "../modules/views/MissionControl";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { screen, render } from "@testing-library/react";
import { missionsData } from "./testData";
import "@testing-library/jest-dom";

describe("MissionControl", () => {
  const history = createMemoryHistory()
  const mockState = {
    missions: []
  }
  const mockDispatch = {
    "FETCH_MISSIONS": () => jest.fn().mockImplementation(() => {
      mockState.missions = missionsData
    })
  }

  beforeEach(() => {
    render(
      <Router history={history}>
        <AppContext.Provider value={[mockState, mockDispatch]}>
          <MissionControl />
        </AppContext.Provider>
      </Router>
    )
  });

  it("should render", () => {
    const header = screen.getByText("Mission Control")
    expect(header).toBeInTheDocument()
  });
});
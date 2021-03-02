import AppContext from "../modules/App/AppContext";
import MissionControl from "../modules/views/MissionControl";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { screen, render } from "@testing-library/react";
import { missionsData, usersData } from "./testData";
import "@testing-library/jest-dom";

describe("MissionControl", () => {
  const history = createMemoryHistory()
  const mockState = {
    currentUser: {
      "id": "2",
      "type": "user",
      "attributes": {
        "name": "Hobbes",
        "email": "Hobbes@example.com",
        "points": 0
      }
    },
    users: usersData,
    missions: missionsData
  }
  const mockDispatch = jest.fn()

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
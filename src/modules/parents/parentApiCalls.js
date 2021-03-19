export const createNewMission = (data) => {
  return (
    fetch(`https://kiddo-backend.herokuapp.com/api/v1/missions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((error) => console.log(error))
  )
};

export const createNewTask = (data) => {
  return (
    fetch(`https://kiddo-backend.herokuapp.com/api/v1/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .catch((error) => console.log(error))
  )
}

export const addTasksToMission = (data) => {
  return (
    fetch(`https://kiddo-backend.herokuapp.com/api/v1/mission_tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((error) => console.log(error))
  )
};

export const addNewUserToParent = (data) => {
  return fetch(`https://kiddo-backend.herokuapp.com/api/v1/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};
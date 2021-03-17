export const getAllMissions = () => {
  return (
    fetch("https://kiddo-backend.herokuapp.com/api/v1/missions")
      // fetch('http://localhost:3000/api/v1/missions')
      .then((res) => res.json())
  );
};

export const getMissionById = (id) => {
  return (
    fetch(`https://kiddo-backend.herokuapp.com/api/v1/missions/${id}`)
      // fetch(`http://localhost:3000/api/v1/missions/${id}`)
      .then((res) => res.json())
  );
};

export const getTasksByMissionId = (id) => {
  return fetch(
    `https://kiddo-backend.herokuapp.com/api/v1/missions/${id}/tasks`
  ).then((res) => res.json());
};

export const getAllTasks = () => {
  return (
    fetch("https://kiddo-backend.herokuapp.com/api/v1/tasks")
      // fetch('http://localhost:3000/api/v1/tasks')
      .then((res) => res.json())
  );
};

export const getTaskById = (id) => {
  console.log(id);
  return (
    fetch(`https://kiddo-backend.herokuapp.com/api/v1/tasks/${id}`)
      // fetch(`http://localhost:3000/api/v1/tasks/${id}`)
      .then((res) => res.json())
  );
};

export const getMissionTaskById = (id) => {
  return (
    fetch(`https://kiddo-backend.herokuapp.com/api/v1/mission_tasks/${id}`)
      // fetch(`http://localhost:3000/api/v1/tasks/${id}`)
      .then((res) => res.json())
  );
};

export const getAllUsers = () => {
  return (
    fetch("https://kiddo-backend.herokuapp.com/api/v1/users")
      // fetch('http://localhost:3000/api/v1/users')
      .then((res) => res.json())
  );
};

export const getAllParents = () => {
  return (
    fetch("https://kiddo-backend.herokuapp.com/api/v1/parents")
      // fetch('http://localhost:3000/api/v1/users')
      .then((res) => res.json())
  );
};

export const getUserById = (id) => {
  return (
    fetch(`https://kiddo-backend.herokuapp.com/api/v1/users/${id}`)
      // fetch(`http://localhost:3000/api/v1/users/${id}`)
      .then((res) => res.json())
  );
};

export const updateSelectedTaskAPI = (id, updates) => {
  return fetch(
    `https://kiddo-backend.herokuapp.com/api/v1/mission_tasks/${id}`,
    {
      method: "PATCH",
      body: updates,
    }
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
    })
    .catch((error) => console.log(error, "Encountered an error"));
};

export const createNewUser = (data) => {
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

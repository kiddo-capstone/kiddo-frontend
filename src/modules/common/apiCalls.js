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

export const getAllTasks = () => {
  return (
    fetch("https://kiddo-backend.herokuapp.com/api/v1/tasks")
      // fetch('http://localhost:3000/api/v1/tasks')
      .then((res) => res.json())
  );
};

export const getTaskById = (id) => {
  return (
    fetch(`https://kiddo-backend.herokuapp.com/api/v1/tasks/${id}`)
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

export const getUserById = (id) => {
  return (
    fetch(`https://kiddo-backend.herokuapp.com/api/v1/users/${id}`)
      // fetch(`http://localhost:3000/api/v1/users/${id}`)
      .then((res) => res.json())
  );
};

export const updateMissionTask = (id, updatedMission) => {
  fetch(`https://kiddo-backend.herokuapp.com/api/1v/mission_tasks/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: JSON.stringify(updatedMission),
  }).then((response) => response.json());
};

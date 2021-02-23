export const getAllMissions = () => {
  return (
    fetch('https://kiddo-backend.herokuapp.com/api/v1/missions')
    .then(res => res.json())
  )
}

export const getMissionById = (id) => {
  return (
    fetch(`https://kiddo-backend.herokuapp.com/api/v1/missions/${id}`)
      .then(res => res.json())
  )
}

export const getAllTasks = () => {
  return (
    fetch('https://kiddo-backend.herokuapp.com/api/v1/tasks')
      .then(res => res.json())
  )
}

export const getTaskById = (id) => {
  return (
    fetch(`https://kiddo-backend.herokuapp.com/api/v1/tasks/${id}`)
      .then(res => res.json())
  )
}

export const getAllUsers = () => {
  return (
    fetch('https://kiddo-backend.herokuapp.com/api/v1/users')
      .then(res => res.json())
  )
}

export const getUserById = (id) => {
  return (
    fetch(`https://kiddo-backend.herokuapp.com/api/v1/users/${id}`)
      .then(res => res.json())
  )
}
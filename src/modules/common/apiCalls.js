export const getAllMissions = () => {
  return (
    fetch('http://localhost:3000/api/v1/missions')
    .then(res => res.json())
  )
}

export const getAllTasks = () => {
  return (
    fetch('http://localhost:3000/api/v1/tasks')
      .then(res => res.json())
  )
}
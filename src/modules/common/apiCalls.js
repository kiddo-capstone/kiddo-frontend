export const getAllMissions = () => {
  return (
    fetch('http://localhost:3000/api/v1/missions')
    .then(res => res.json())
  )
}
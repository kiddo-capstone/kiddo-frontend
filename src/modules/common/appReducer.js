export const appReducer = (state, action) => {
  switch(action.type) {
    case 'SOME_CASE':
      // DO THINGS
      return {...state}
    default:
      return state;
  }
}
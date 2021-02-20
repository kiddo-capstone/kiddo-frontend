
import theme from '../../ui/common/theme'

export const initialState = {
  missions: [{id:1, title: 'eat bugs', description: 'find and eat 3 bugs'}],
  user: { name: "scott" },
  theme,
};

export const appReducer = (state, action) => {
  switch(action.type) {
    case 'SOME_CASE':
      // DO THINGS
      return {...state}
    default:
      return state;
  }
}
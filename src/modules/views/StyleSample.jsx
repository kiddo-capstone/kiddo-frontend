import React, { useContext } from "react";
import AppContext from "../app/AppContext";

const StyleSample = props => {
  const [state, dispatch] = useContext(AppContext)
  const {colors, shadows, gradients, fonts} = state.theme


  return (
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
      <div>
        <h1 style={{color: colors.green, fontFamily: fonts.primary}}>FONT: Ruso</h1>
        <h1 style={{color: colors.green, fontFamily: fonts.secondary}}>FONT: Mitr</h1>
        <h1 style={{color: colors.green, fontFamily: fonts.tertiary}}>FONT: Roboto</h1>
      </div>
      <div>
        <h3 style={{color: colors.primary, fontFamily: fonts.primary}}>primary</h3>
        <h3 style={{color: colors.primaryAccent}}>primaryAccent</h3>
        <h3 style={{color: colors.secondary, fontFamily: fonts.secondary}}>secondary</h3>
        <h3 style={{color: colors.secondaryAccent}}>secondaryAccent</h3>
        <h3 style={{color: colors.tertiary, fontFamily: fonts.tertiary}}>tertiary</h3>
        <h3 style={{color: colors.tertiaryAccent}}>tertiaryAccent</h3>
      </div>
      <div>
        <h3 style={{color: colors.black}}>black</h3>
        <h3 style={{color: colors.red}}>red</h3>
        <h3 style={{color: colors.yellow}}>yellow</h3>
        <h3 style={{color: colors.blue}}>blue</h3>
        <h3 style={{color: colors.green}}>green</h3>
        <h3 style={{color: colors.purple}}>purple</h3>
        <h3 style={{color: colors.lightPurple}}>lightPurple</h3>
        <h3 style={{color: colors.darkGrey}}>darkGrey</h3>
      </div>
    </div>
  );
};

// .memo supposedly assists with caching - trying it out
export default React.memo(StyleSample);
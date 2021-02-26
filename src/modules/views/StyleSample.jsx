import React, { useContext } from "react";
import AppContext from "../app/AppContext";
import Button from "../../ui/button/Button";
import PageContainer from "../../ui/containers/PageContainer";
import TitleContainer from "../../ui/containers/TitleContainer";
import ImageCapture from "../../ui/containers/ImageCapture";
import Modal from "../../ui/modal/Modal"
const StyleSample = props => {
  const [state, dispatch] = useContext(AppContext);
  const { colors, shadows, gradients, fonts } = state.theme;

  return (
    <PageContainer>
      <TitleContainer>
        <h1>Style Guide</h1>
      </TitleContainer>
      <Modal title={"Secret Agent Message"} message={"Remember, Agent Calvin, do not take photos of yourself or family. A secret agent must always keep their identity...secret!"}/>
      <ImageCapture />
      {/* <div style={{ display: "flex", justifyContent: 'space-evenly' }}>
        <div style={{ display:'flex', flexDirection:'column' }}>
          <h1 style={{ color: colors.green, fontFamily: fonts.primary }}>
            FONT: Ruso
          </h1>
          <h1 style={{ color: colors.green, fontFamily: fonts.secondary }}>
            FONT: Mitr
          </h1>
          <h1 style={{ color: colors.green, fontFamily: fonts.tertiary }}>
            FONT: Roboto
          </h1>
        </div>
        <div style={{ display:'flex', flexDirection:'column', margin: '0 1em' }}>
          <h3 style={{ color: colors.primary, fontFamily: fonts.primary }}>
            primary
          </h3>
          <h3 style={{ color: colors.primaryAccent }}>primaryAccent</h3>
          <h3 style={{ color: colors.secondary, fontFamily: fonts.secondary }}>
            secondary
          </h3>
          <h3 style={{ color: colors.secondaryAccent }}>secondaryAccent</h3>
          <h3 style={{ color: colors.tertiary, fontFamily: fonts.tertiary }}>
            tertiary
          </h3>
          <h3 style={{ color: colors.tertiaryAccent }}>tertiaryAccent</h3>
        </div>
        <div style={{ display:'flex', flexDirection:'column' }}>
          <h3 style={{ color: colors.black }}>black</h3>
          <h3 style={{ color: colors.red }}>red</h3>
          <h3 style={{ color: colors.yellow }}>yellow</h3>
          <h3 style={{ color: colors.blue }}>blue</h3>
          <h3 style={{ color: colors.green }}>green</h3>
          <h3 style={{ color: colors.purple }}>purple</h3>
          <h3 style={{ color: colors.lightPurple }}>lightPurple</h3>
          <h3 style={{ color: colors.darkGrey }}>darkGrey</h3>
        </div>
        <section>
          <div>
            <Button>Primary</Button>
            <Button disabled>Disabled</Button>
          </div>
          <div>
            <Button>Secondary</Button>
            <Button disabled>Disabled</Button>
          </div>
          <div>
            <Button>Tertiary</Button>
            <Button disabled>Disabled</Button>
          </div>
        </section>
      </div>
      <style jsx>{`
        section div {
          display: flex;
          flex-direction: row;
        }
      `}</style> */}
    </PageContainer>
    
  );
};

// .memo supposedly assists with caching - trying it out
export default React.memo(StyleSample);

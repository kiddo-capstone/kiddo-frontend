import { PageContainer } from "../../ui/containers";
import accomplishment from "../../assets/accomplishment.png"
import { Link } from "react-router-dom";

const MissionComplete = () => {
  return (
    <PageContainer>
      <h1>You did it!</h1>
      <img src={accomplishment} alt="success!" />
    </PageContainer>
  )
}

export default MissionComplete;
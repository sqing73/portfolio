import styled from "styled-components";
import WorkPage from "./WorkPage";
import MeetingIcon from "../../assets/meeting.png";
import SelfIcon from "../../assets/self.png";

const communityWords = [
  "Financial Literacy Hub",
  "A financial literacy hub with a community forum to foster idea exchange over personal financial experience and a series of quick lessons to convey key financial concepts.",
  "//NodeJS, ExpressJS, MongoDB, React",
];

const portfolioWords = [
  "Portfolio Page",
  "A personal page to display skills, portfolio and even more...",
  "//React, CSS",
];

const WorkPages = () => {
  return (
    <PagesContainer>
      <WorkPage words={communityWords} image={MeetingIcon} />
      <WorkPage words={portfolioWords} image={SelfIcon} reverse={true} />
    </PagesContainer>
  );
};

export default WorkPages;

const PagesContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 260vh;

  & > :nth-child(odd) {
    text-align: right;
  }
`;

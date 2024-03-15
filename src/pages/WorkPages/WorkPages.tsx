import styled from "styled-components";
import WorkPage from "./WorkPage";
import MeetingIcon from "../../assets/meeting.png";
import SelfIcon from "../../assets/self.png";
import InventoryIcon from "../../assets/inventory-14472.svg";

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

const productWords = [
  "Inventory System",
  "Product and category management module for sellers in a large ecommerce website",
  "//React, CSS, GraphQL",
];

const WorkPages = () => {
  return (
    <PagesContainer>
      <WorkPage words={communityWords} image={MeetingIcon} />
      <WorkPage words={productWords} image={InventoryIcon} reverse={true} />
      <WorkPage words={portfolioWords} image={SelfIcon} />
    </PagesContainer>
  );
};

export default WorkPages;

const PagesContainer = styled.div`
  width: 100%;
  max-width: 1000px;

  & > :nth-child(odd) {
    text-align: right;
  }
`;

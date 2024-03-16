import styled from "styled-components";
import { Title } from "./UI";
import useTypeWord from "../hooks/useTyper";

const words = ["404 not found..."];
const NotFoundPage = () => {
  const [title] = useTypeWord(words);
  return (
    <CenteredContainer>
      <Title>{title}</Title>
    </CenteredContainer>
  );
};

export default NotFoundPage;

const CenteredContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  text-transform: uppercase;
`;

import styled from "styled-components";
import { Title, Comment } from "../components/UI";
import useTypeWord from "../hooks/useTyper";

const words = [
  "Welcome, I'm Shan",
  "Qing",
  "//click anywhere to make me type faster...",
];

const HomePage = () => {
  const [welcome, lastname, comment] = useTypeWord(words);
  return (
    <>
      <Title>{welcome}</Title>
      <StyledTitle>{lastname}</StyledTitle>
      <Comment>{comment}</Comment>
    </>
  );
};

export default HomePage;

const StyledTitle = styled(Title)`
  padding-bottom: 2rem;
`;

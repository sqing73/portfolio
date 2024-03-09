import styled from "styled-components";
import { Title, Comment, Paragraph } from "../components/UI";
import useTypeWord from "../hooks/useTyper";
import { PageContainer } from "../components/UI";

const words = [
  "Welcome, I'm Shan",
  "Qing",
  "//click anywhere to make me type faster...",
  "I'm a full-stack developer 🚀.",
  "I use React, Express, Golang and Java Spring to build some cool stuff.",
];

const HomePage = () => {
  const [welcome, lastname, comment, intro, introSkills] = useTypeWord(words);
  return (
    <PageContainer>
      <Title>{welcome}</Title>
      <StyledTitle>{lastname}</StyledTitle>
      <StyledComment>{comment}</StyledComment>
      <StyledParagraph>{intro}</StyledParagraph>
      <Paragraph>{introSkills}</Paragraph>
      <BottomParagraph>more below</BottomParagraph>
    </PageContainer>
  );
};

export default HomePage;

const StyledTitle = styled(Title)`
  padding-bottom: 2rem;
`;

const StyledComment = styled(Comment)`
  padding-bottom: 2rem;
`;

const StyledParagraph = styled(Paragraph)`
  padding-bottom: 2rem;
`;

const BottomParagraph = styled(Paragraph)`
  position: absolute;
  bottom: 5vh;
  left: 50%;
  transform: translateX(-50%);
  text-transform: uppercase;
  font-size: 0.7rem;
`;

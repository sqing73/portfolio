import { Paragraph, Title } from "./UI";
import styled, { keyframes } from "styled-components";
import useTypeWord from "../hooks/useTyper";
import { useEffect, useState } from "react";
import { Comment } from "./UI";
import { Props as WorkPageProps } from "../pages/WorkPages/WorkPage";

const WorkPageContent: React.FC<WorkPageProps> = ({
  words,
  image,
  reverse = false,
}: WorkPageProps) => {
  const [title, description, skills] = useTypeWord(words, true);
  const [shouldRenderImage, setShouldRenderImage] = useState(false);

  useEffect(() => {
    const lastWordLength = words[words.length - 1].length;
    const renderedSkillsLength = skills?.length || 0;
    if (lastWordLength === renderedSkillsLength) {
      setTimeout(() => {
        setShouldRenderImage(true);
      }, 500);
    }
  }, [skills, title, words]);

  return (
    <>
      <Title>{title}</Title>
      <ContentContainer>
        {!reverse && (
          <ImageContainer>
            {shouldRenderImage && <StyledImage src={image} />}
          </ImageContainer>
        )}
        <DescriptionContainer>
          <Paragraph>{description}</Paragraph>
          <Comment>{skills}</Comment>
        </DescriptionContainer>
        {reverse && (
          <ImageContainer>
            {shouldRenderImage && <StyledImage src={image} />}
          </ImageContainer>
        )}
      </ContentContainer>
    </>
  );
};

export default WorkPageContent;

const ContentContainer = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 5vh;
  height: 40vh;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

const fadeInScaleUpAnimation = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const StyledImage = styled.img`
  filter: ${(props) => props.theme.colors.filter};
  width: 100%;
  height: 90%;
  animation: ${fadeInScaleUpAnimation} 1s ease-out forwards;
`;

const ImageContainer = styled.div`
  width: 50%;
  flex: 1;
`;

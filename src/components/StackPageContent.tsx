import { Paragraph, Title } from "./UI";
import styled from "styled-components";
import useTypeWord from "../hooks/useTyper";
import { useEffect } from "react";

const words = ["Works", "tree skills"];

interface Props {
  onRenderComplete: () => void;
}

const StackPageContent: React.FC<Props> = ({ onRenderComplete }) => {
  const [title, command] = useTypeWord(words, true);
  useEffect(() => {
    const wordsLength = words.reduce((acc, e) => acc + e.length, 0);
    const renderedLength = (title?.length || 0) + (command?.length || 0);
    if (wordsLength === renderedLength) {
      onRenderComplete();
    }
  }, [title, command, onRenderComplete]);
  return (
    <>
      <StyledTitle>{title}</StyledTitle>
      <Paragraph>{command}</Paragraph>
    </>
  );
};

export default StackPageContent;

const StyledTitle = styled(Title)`
  padding-bottom: 4%;
`;

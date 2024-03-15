import React from "react";
import { Title, HighLight, Paragraph } from "../components/UI";
import styled from "styled-components";
import useTypeWord from "../hooks/useTyper";

interface Props {
  words: string[];
}

const ContactPageContent: React.FC<Props> = ({ words }: Props) => {
  const [title, secondTitle, hint, email] = useTypeWord(words, true);
  return (
    <>
      <Title>{title}</Title>
      <StyledTitle>{secondTitle}</StyledTitle>
      <StyledParagraph>
        {hint}
        <a href="mailto:sqing73@gmail.com">
          <HighLight>{email}</HighLight>
        </a>
      </StyledParagraph>
    </>
  );
};

export default ContactPageContent;

const StyledTitle = styled(Title)`
  padding-bottom: 4%;
`;

const StyledParagraph = styled(Paragraph)`
  padding-bottom: 4%;

  & a {
    margin-top: 4%;
  }
`;

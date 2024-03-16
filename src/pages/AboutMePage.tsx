import styled from "styled-components";
import { PageContainer, Paragraph, Title } from "../components/UI";
import { useEffect, useState } from "react";
import useTypeWord from "../hooks/useTyper";
const words = ["About me"];

const AboutMe = () => {
  const [title] = useTypeWord(words);
  const [typeComplete, setTypeComplete] = useState<boolean>(false);
  const [quoteIdx, setQuoteIdx] = useState<number>(-1);

  useEffect(() => {
    const randomIdx = Math.floor(Math.random() * quotes.length);
    setQuoteIdx(randomIdx);
  }, []);

  useEffect(() => {
    if (title && title.length === words[0].length) {
      setTimeout(() => {
        setTypeComplete(true);
      }, 500);
    }
  }, [title]);

  return (
    <PageContainer>
      <Title>{title}</Title>
      {typeComplete && (
        <>
          <StyledParagraph>
            A software engineer with some hobbys
          </StyledParagraph>
          <StyledParagraph>🏀 🚴‍♂️ 🏸 📕 🎮 🏎️</StyledParagraph>
          <StyledParagraph>and I'm a Stoicism</StyledParagraph>
          <div>
            <ItalicStyledParagraph>
              {quoteIdx >= 0 && `“${quotes[quoteIdx][0]}”`}
            </ItalicStyledParagraph>
            <ItalicStyledParagraph>
              {quoteIdx >= 0 && `--${quotes[quoteIdx][1]}`}
            </ItalicStyledParagraph>
          </div>
        </>
      )}
    </PageContainer>
  );
};

export default AboutMe;

const StyledParagraph = styled(Paragraph)`
  padding-bottom: 4%;
  &:first-of-type {
    padding-top: 4%;
  }
`;

const ItalicStyledParagraph = styled(Paragraph)`
  font-style: italic;
  padding: 8% 10% 0% 10%;
  text-align: center;

  &:last-child {
    text-align: right;
  }
`;

const quotes = [
  [
    "Waste no more time arguing what a good man should be. Be One.",
    "Marcus Aurelius",
  ],
  [
    "It never ceases to amaze me: we all love ourselves more than other people, but care more about their opinion than our own",
  ],
  [
    "If it is not right, do not do it, if it is not true, do not say it.",
    "Marcus Aurelius",
  ],
  ["The best revenge is not to be like your enemy.", "Marcus Aurelius"],

  [
    "External things are not the problem. It’s your assessment of them. Which you can erase right now.",
    "Marcus Aurelius",
  ],
  [
    "You could leave life right now. Let that determine what you do and say and think.",
    "Marcus Aurelius",
  ],
  ["Be tolerant with others and strict with yourself.", "Marcus Aurelius"],
  [
    "We are more often frightened than hurt; and we suffer more in imagination than in reality.",
    "Seneca",
  ],
  ["If a man knows not which port he sails, no wind is favorable.", "Seneca"],
  [
    "He who fears death will never do anything worthy of a man who is alive.",
    "Seneca",
  ],
  [
    "This is our big mistake: to think we look forward to death. Most of death is already gone. Whatever time has passed is owned by death.",
    "Seneca",
  ],
  [
    "Life is very short and anxious for those who forget the past, neglect the present, and fear the future.",
    "Seneca",
  ],
  ["How does it help…to make troubles heavier by bemoaning them?", "Seneca"],
  [
    "How long are you going to wait before you demand the best for yourself?",
    "Epictetus",
  ],
  [
    "First say to yourself what you would be; and then do what you have to do.",
    "Epictetus",
  ],
  [
    "Curb your desire—don’t set your heart on so many things and you will get what you need.",
    "Epictetus",
  ],
  [
    "What man actually needs is not a tensionless state but rather the striving and struggling for some goal worthy of him.",
    "Viktor Frankl",
  ],
  [
    "When we are no longer able to change a situation, we are challenged to change ourselves.",
    "Viktor Frankl",
  ],
];

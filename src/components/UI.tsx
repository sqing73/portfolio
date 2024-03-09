import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  padding: 5% 7%;
  color: ${(props) => props.theme.colors.main};
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${(props) => props.theme.colors.main};
  justify-content: start;

  &:first-of-type {
    min-height: 95vh;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: ${(props) => props.theme.colors.main};
`;

export const Comment = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.comment};
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.main};
`;

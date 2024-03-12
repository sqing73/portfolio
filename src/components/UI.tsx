import styled from "styled-components";

export const PageContainer = styled.section`
  width: 100%;
  max-width: 1000px;
  padding: 5% 7%;
  color: ${(props) => props.theme.colors.main};
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border-bottom: 1px solid ${(props) => props.theme.colors.main};
  min-height: 90vh;

  &:first-of-type {
    height: 95vh;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: ${(props) => props.theme.colors.main};
  min-height: 3rem;
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.main};
  min-height: 1.5rem;
`;

export const Comment = styled(Paragraph)`
  color: ${(props) => props.theme.colors.comment};
`;

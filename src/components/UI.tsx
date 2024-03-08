import styled from "styled-components";

export const Title = styled.h1`
  font-size: 2.5rem;
  color: ${(props) => props.theme.colors.main};
`;

export const Comment = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.comment};
`;

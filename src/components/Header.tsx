import ThemeButton from "./ThemeButton";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <ThemeButton />
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  padding: 0 7%;
`;

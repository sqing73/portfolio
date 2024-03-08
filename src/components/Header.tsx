import ThemeButton from "./ThemeButton";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <NavContainer>
        <ul>
          <li>
            <LinkContainer href="">home</LinkContainer>
          </li>
          <li>
            <LinkContainer href="">works</LinkContainer>
          </li>
          <li>
            <LinkContainer href="">about me</LinkContainer>
          </li>
          <li>
            <ThemeButton />
          </li>
        </ul>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  padding: 0 7%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const NavContainer = styled.nav`
  color: ${(props) => props.theme.colors.main};
  width: 100%;
  max-width: 1000px;
  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
  }

  li {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    border-left: 1px solid ${(props) => props.theme.colors.main};
    border-bottom: 1px solid ${(props) => props.theme.colors.main};
    height: 40px;
  }

  li:last-child {
    border: none;
  }

  li:nth-last-child(2) {
    border-right: 1px solid ${(props) => props.theme.colors.main};
  }
`;

const LinkContainer = styled.a`
  color: inherit;
  text-decoration: none;
  font-size: 0.6rem;

  &:hover {
    text-decoration: underline ${(props) => props.theme.colors.highlight};
  }
`;

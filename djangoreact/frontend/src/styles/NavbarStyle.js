import styled from 'styled-components';
import { mainPink, palePink } from './color';

export const NavBox = styled.div`
  background-color: ${mainPink};
  height: 13vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 0.625rem 3.125rem;
  margin-bottom: 4vh;
  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.3);
  svg {
    cursor: pointer;
  }
`;

export const MenuBox = styled.nav`
  background-color: white;
  border: 1px solid ${palePink};
  width: 20vw;
  height: 100vh;
  display: flex;
  position: fixed;
  top: 0;
  right: ${(props) => (props.active ? '0' : '-100%')};
  transition: 800ms;
`;

export const MenuBoxContent = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 0;
  padding: 0.938rem;
  width: 100%;
  list-style: none;
  div {
    width: 100%;
  }
  a {
    text-decoration: none;
    width: 100%;
  }
  .navTogle {
    cursor: pointer;
    display: flex;
    justify-content: start;
  }
  h3 {
    width: 100%;
    padding-bottom: 10px;
    font-size: 1.563rem;
    border-bottom: 3px solid ${mainPink};
    margin: 1rem 0;
  }
`;
export const ContentBox = styled.div`
  display: flex;
  height: 40%;
  flex-direction: column;
  li {
    width: 100%;
    height: 18%;
    border-radius: 5px;
    background-color: ${palePink};
    font-size: 1.125rem;
    margin-bottom: 0.938rem;
    &:hover {
      background-color: ${mainPink};
      font-weight: 800;
    }
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
  }
`;

export const MainLogo = styled.div`
  h2 {
    color: white;
    padding: 1.25em;
    font-size: 2rem;
    margin: 0;
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }
`;

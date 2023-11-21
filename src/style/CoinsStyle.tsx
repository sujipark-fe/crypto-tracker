import styled from "styled-components";

export const Container = styled.div`
  max-width: 480px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 10px;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

export const BtnBack = styled.a`
  position: absolute;
  top: 50%;
  left: 0;
  display: block;
  padding: 4px;
  color: white;
  transform: translateY(-50%);
`;

export const CoinsList = styled.ul`
`;

export const Coin = styled.li`
  background-color: white;
  margin-bottom: 10px;
  color: ${(props) => props.theme.bgColor};
  border-radius: 10px;
  a {
    display: flex;
    align-items: center;
    padding: 20px;
    transition: color .2s ease-in-out;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

export const Loader = styled.p`
  text-align: center;
`;

export const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
  object-fit: cover;
`;

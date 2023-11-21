import styled from "styled-components";

export const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: rgba(0, 0, 0, .5);
  border-radius: 10px;
`;

export const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33%;
  span:first-child {
    font-size: 11px;
    font-weight: 400;
    margin-bottom: 5px;
    text-transform: uppercase;
  }
`;

export const Description = styled.p`
  margin: 20px 0;
`;

export const Tab = styled.span<{ $isActive: boolean }>`
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
  color: ${(props) => props.$isActive ? props.theme.accentColor : props.theme.textColor};
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  a {
    display: block;
    padding: 10px 0px 8px;
  }
`;

export const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin: 25px 0px;
`;

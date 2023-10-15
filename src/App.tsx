import styled from "styled-components";

function App() {
  const Container = styled.div`
    color: ${props => props.theme.textColor};
    background-color: ${props => props.theme.bgColor};
    button {
      color: ${props => props.theme.btnColor};
    }
  `;
  const H1 = styled.h1`
    color: ${props => props.theme.textColor};
  `;

  return (
    <div>
      <Container>
        <H1>Title</H1>
      </Container>
    </div>
  );
}

export default App;

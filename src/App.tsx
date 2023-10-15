import { useState } from "react";
import styled from "styled-components";


function App() {
  const [value, setValue] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event; // event를 열어서 그 안의 currentTarget의 value를 가져온다.
    setValue(value); // 그 value 값을 저장한다. 타입은 항상 string인지 검사한다.
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("hello", value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={value} type="text" placeholder="username" onChange={onChange} />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;

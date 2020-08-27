import styled from "styled-components";

export default styled.div`
  cursor: pointer;
  transition: all 250ms ease-in;
  background-color: ${({ active }) => (active ? "#fff" : "#b0e8e6")};
  color: ${({ active }) => (active ? "#fff" : "333")};
  transform: scale(${({ active }) => (!active ? 0.7 : 1.1)});
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px;
  margin: 0 6px;
`;
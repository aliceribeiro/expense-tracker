import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  box-shadow: 0 0 5px #ccc;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

export const InputLabel = styled.label`
  flex: 1;
  margin: 10px;
`;

export const InputTitle = styled.div`
  color: #333;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;
  padding: 0 5px;
  border: 1px solid lightblue;
  border-radius: 5px;
  cursor: pointer;
`;

export const Select = styled.select`
  width: 100%;
  height: 30px;
  padding: 0 5px;
  border: 1px solid lightblue;
  border-radius: 5px;
  cursor: pointer;
`;

export const Button = styled.button`
  width: 100%;
  height: 30px;
  padding: 0 5px;
  border: 1px solid lightblue;
  border-radius: 5px;
  background-color: lightblue;
  color: #333;
  font-weight: 700;
  cursor: pointer;
  transition: all .3s;

  &:hover {
    background-color: #f68287;
    border: 1px solid #f68287;
    color: #f2f2f2;
  }
`;

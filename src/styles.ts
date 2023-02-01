import styled from "styled-components";

export const Container = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  margin-bottom: 10rem;
`

export const FormContainer = styled.form`

  background: #FFFF;
  max-width: 500px;
  width: 100%;
  padding: 2rem;
  position: absolute;
  color: #252EFF;
  margin-top: 10rem;
  margin-left: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  border-radius: 16px;

  label {
    background: transparent;
  }

  h1 {
  padding: 36px;
  text-align: center;
  color: #252EFF;
  font-family: 'Roboto', sans-serif;
  background: transparent;
}

button {
  cursor: pointer;
  width: 153px;
  height: 38px;
  background: #252EFF;
  border-radius: 20px;
  border: none;
  color: #FFFF;
  margin-top: 56px;
  margin-bottom: 66px;
}
 
`
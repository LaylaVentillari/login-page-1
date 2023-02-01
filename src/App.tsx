import { Container, FormContainer } from "./styles";

export function App() {
  return (
  <Container>
  
    <FormContainer>
       <h1>Login</h1> 
       <label>
        <input type="text"placeholder="Username" required/>
       </label>
       <label>
        <input type="password" placeholder="Password" required/>
       </label>
     <button type="submit">LOGIN</button>
    </FormContainer>
  </Container>
  
   
      
  )
}

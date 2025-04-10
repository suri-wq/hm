import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router';
const Login = ({setAuthenticate}) => {
  const navigate = useNavigate()
  const submitLogin=(event)=>{
    event.preventDefault();
    setAuthenticate(true)
    navigate('/')
    
  }
  return (
    <Container className='login-container'>
      <Form onSubmit={submitLogin} className='form-login'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required/>
        </Form.Group>
        
        <button className='submit-button'>
          Submit
        </button>
      </Form>
      <div className='form-signup'>
        <div>
        Sign up to become a member.
        </div>
        <button className='signup-button'>Sign up</button>
      </div>
    </Container>
  )
}

export default Login
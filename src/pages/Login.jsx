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
    <Container>
      <Form onSubmit={submitLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        
        <Button variant="danger" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default Login
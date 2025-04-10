import { Container, Row, Col } from 'react-bootstrap';
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
      <Row>
        <Col xs='12' md='6' lg='6' className='login-col'>
          <Form onSubmit={submitLogin} className='form-login'>
            <p className='sub-title'>LOGIN</p>
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
        </Col>
        <Col xs='12' md='6' lg='6'>
          <div className='form-signup'>
            <p className='sub-title'>JOIN US!</p>
            <div>
            Sign up to become a member.
            </div>
            <button className='signup-button'>Sign up</button>
          </div>
        </Col>
      </Row>
      
      
    </Container>
  )
}

export default Login
import { Button, Col, Row } from 'reactstrap';
import { googleApi, facebookApi } from '@nx-nextjs/api-services';

export function Login() {
  return (
    <Row className='d-flex justify-content-center mb-1'>
      <Col sm='2'>
        <Button color='primary' onClick={() => googleApi()}>
          Google
        </Button>
      </Col>
      <Col sm='2'>
        <Button color='danger' onClick={() => facebookApi()}>
          Facebook
        </Button>
      </Col>
    </Row>
  );
}

export default Login;

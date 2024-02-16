import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';

import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, reset } from './counterSlice.jsx';

import './App.css';

function App() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <Container fluid className="d-flex flex-column align-items-center justify-content-center mt-5">
      <Row>
        <h2 className="me-3">{count}</h2>
      </Row>
      <Row className="d-flex flex-row">
        <Col>
          <Button
            variant="primary"
            className="me-3"
            onClick={() => dispatch(increment())}>
            Increment
          </Button>
        </Col>
        <Col>
          <Button
            variant="secondary"
            className="me-3"
            onClick={() => dispatch(decrement())}>
            Decrement
          </Button>
        </Col>
        <Col>
          <Button
            variant="success"
            className="me-3"
            onClick={() => dispatch(reset())}>
            Reset
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default App

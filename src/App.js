
import './App.css';
import Header from './Component/Header.js';
import AddTask from './Component/AddTask.js'
import ReadTask from './Component/ReadTask.js';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Forms } from './Forms';
// import { Todo } from './Todo';



function App() {
  return (
    <div className='task-backimg'>
     <Header/>
     <Container>
      <Row className='justify-content-md-center'>
        <Col lg="6">
          <AddTask/><br/><br/>
          <ReadTask/>
        </Col>
      </Row>
    </Container>
    {/* <Todo/> */}


    
    </div>
    
  );
}

export default App;

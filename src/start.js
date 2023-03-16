
import { Container, Row, Col} from 'react-bootstrap';
import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css"
import "primereact/resources/primereact.css";
import './start.css'

function Started() {

  return (
    <div>
      <Container fluid >
        <Row>
          <Col>
            <div>
              <p> Hellow this is search page</p>              
            </div>
            <div> <label>Frist Name</label> </div> 
            <div> <label>Last Name</label> </div> 
            <div> <label>Rank Level</label> </div> 
            <div> <label>Wins</label> </div> 
            <div> <label>number of Games</label> </div> 
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Started;
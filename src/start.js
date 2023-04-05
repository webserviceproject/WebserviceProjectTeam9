
import { Container, Row, Col } from 'react-bootstrap';
import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css"
import "primereact/resources/primereact.css";
import './start.css'
import {useEffect} from "react"

function Started() {
// const and variables
let playersData = []

  // Satte function
  useEffect(async()=>{
   // getPlayersData();
  },[])

  
  // get the players data
 /* function getPlayersData() {
    alert("players function called");
  
    const axios = require("axios");
   
    
    url: 'http://localhost:8010/KSUAPI/helplinenmbrs'   
      
      
   axios.request(parameters).then(function (response) {
     console.log(response);
    console.log(response.data);
    console.log(response.data.length);
    playersData = response.data;
    
    console.log(playersData.value);
     response.data.map(ele=>{
             console.log("dept key"+ele.dept_NAME.value);

             })
     
      //response.data.


   }).catch(function (error) {
     console.error(error);
   });

   
  } */

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
            <div> <label>number of Games</label> 
           
            
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Started;
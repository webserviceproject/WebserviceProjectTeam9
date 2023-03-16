import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Image } from 'react-bootstrap';




function AboutUS(){ 
    
    return(
        <Container fluid class="con">            
              
               <Row style={{marginTop:"10px"}}>
                  <Col className="page-title"><h1>About Us</h1></Col>
                </Row>

                <Row className="body-row body-row-member">
                   <Col className="section-title mission"  style={{padding: '1px 2px'}}> <div>  <h2>MISSION</h2></div>
                   </Col>
                   <Col className="section-content" >
                     <p>Engaging in online gaming can offer an immersive experience that allows players to escape from reality and enter an exciting virtual world. The competitive nature of gaming can make it highly addictive as individuals strive to win. However, finding a compatible gaming partner or team can be a daunting task that requires considerable effort and time. Our website aims to simplify this process by providing a platform where gamers can easily find the ideal teammate with complementary skills to increase their chances of winning. Our efficient matchmaking system enables players to connect with like-minded individuals and establish a winning team capable of taking on any challenge. Whether seeking casual gaming partners or competitive teams, our website offers a comprehensive solution to enhance the gaming experience.
                     </p>
                   </Col>
                 </Row>
                

                 <Row className="body-row body-row-member" >
                 <Col className="section-title1"  > <div>  <h2>OUR STORY</h2></div>
                   </Col>                   
                   <Col className="section-content ourstoryContent">
                      <p>Our team comprises of four individuals, each pursuing a master's degree in Software Engineering at Kennesaw State University. As part of our Web Service Engineering course, we developed a website that aims to revolutionize the gaming industry by providing an easy and convenient way for gamers to find their perfect teammates. Our team recognized the need for a solution that matches gamers with compatible partners, and that's why we decided to develop this app. We believe that this project has enabled us to apply the theoretical knowledge we have learned in class to a real-world problem and has given us valuable experience in developing web-based applications.
                       </p>
                    </Col>                  
                 </Row>   
           
        </Container>
        
    )

    
}

export default AboutUS;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Image } from 'react-bootstrap';

function ContactUS() {

    return (
        <Container fluid class="con">

            <Row style={{ marginTop: '10px' }}>
                <Col className="page-title"><h1>Contact the Dev Team Here</h1></Col>
            </Row>

            <h2>
                <a href="mailto:vboddapa@students.kennesaw.edu"><b><u> Mail me here </u></b></a></h2>
            <p className ="team9"> <h2> <b>Hi!!!. This is Team9 player matching game development team. 
             If you have questions please contact via mail. We will respond you </b> </h2> </p>

            <Row className="body-row">
                <Col className="section-title"><h2>MEET THE TEAM MEMBERS</h2></Col>
            </Row>

            <Row className="body-row body-row-member">
                <Col className="member-info VeeraName">
                    <h3><strong>Veeramma Boddapati</strong></h3>
                    <h5>Scrum master</h5>
                    <p>This is veeramma Boddapati. I am doing master's of science in software Engineering. I am interested to work on this project as a scrum master, getting the maanagement skills along with development skills. I am happy to share my thoughts with you all</p>
                </Col>
                <Col><div></div></Col>
            </Row>

            <Row className="body-row body-row-member">
                <Col><div></div></Col>
                <Col className="member-info SahithName">
                    <h3><strong>Sahith Vancha</strong></h3>
                    <h5>Product owner</h5>
                    <p>Sahith is currently a graduate student at Kennesaw State University. He had four Years of experience as java developer. </p>
                </Col>
            </Row>

            <Row className="body-row body-row-member">
                <Col className="member-info RahulName">
                    <h3><strong>Subramanya Rahul Annavajhula</strong></h3>
                    <h5>Developer</h5>
                    <p>I am Rahul, worked as full stack developer. Currently pursuing masters of science in software engineering.</p>
                </Col>
                <Col><div></div></Col>
            </Row>


            <Row className="body-row body-row-member">
                <Col ><div><image src =""></image></div></Col>
                <Col className="member-info SaiName">
                    <h3><strong>Sai Sushanth Reddy Jonnalagadda</strong></h3>
                    <h5>Tester</h5>
                    <p>This is Sai. worked as backend developer. I am studying the masters at kennesaw. I am glad to working with this team in the webservice engineering project. </p>
                </Col>
            </Row>

        </Container>)
}
export default ContactUS;
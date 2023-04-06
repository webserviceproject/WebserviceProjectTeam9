import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import time from './Images/clock.jpg'
import quality from './Images/prodQuality.jpg'
import data from './Images/data.jpg'

function AboutTheApp() {
    return (
        <Container fluid>
            <Row style={{ marginTop: '10px' }}>
                <Col className="page-title howdoesitworks"><h1>How does It Work</h1></Col>
            </Row>
            
            <Row className="body-row">
                <Col className="section-title">
                    <p style={{ fontSize: '20px' }}>This system aims to revolutionize the world of gaming by providing a simplified and straightforward process for gamers to find their ideal team. With the click of a button, players can select their desired teammates from a global pool of gaming enthusiasts and boost their chances of winning. The system is equipped with advanced search capabilities that enable users to filter potential teammates based on various criteria, such as name, rank, level, time played, and wins. This way, users can build a team that matches their specific needs and increase their chances of success. The system also allows users to manage their friends' list, add or remove players, and export their list as a PDF for offline use. The goal of this system is to make the process of finding the perfect team as easy as possible and to enhance the overall gaming experience.
                    </p>
                </Col>
            </Row>

            <Row style={{ marginTop: '10px' }}>
                <Col className="page-title benefitsoftheapp"><h1>Benefits of the app</h1></Col>
            </Row>

            <Row style={{ paddingLeft: "100px" }} className="rowin">
                <Col lg={{ size: 10, offset: 1 }} md={{ size: 12, offset: 1 }} center-block>

                    <Col className="inside insidetime" md="4">
                        <div className="Highlight">
                            <div className="HighlightIconInner">
                                <div>  <img src={time} />
                                </div>
                            </div>
                        </div>
                        <h3>Time</h3>
                        <div>
                            <p>You can quickly sort through user data and add new friends to your network. Say goodbye to wasting time searching for gaming buddies - Online game player matching has got you covered!</p>
                        </div>
                    </Col>

                    <Col md="4" className="inside insidequality">
                        <div className="Highlight">
                            <div className="HighlightIconInner">
                                <div>  <img src={quality} />
                                </div>
                            </div>
                        </div>
                        <h3>Quality</h3>
                        <div>
                            <p>Our high-quality matching website makes it easy to find like-minded gamers in a sleek and user-friendly application. Discover the best connections based on your gaming preferences and interests in a simple and efficient space. With this app you can quickly and easily find your perfect gaming match!</p>
                        </div>
                    </Col>

                    <Col md="4" className="inside">
                        <div className="Highlight">
                            <div className="HighlightIconInner">
                                <div> <img src={data} />
                                </div>
                            </div>
                        </div>
                        <h3>Statistics</h3>
                        <div>
                            <p>Stay ahead of the game with GameStats! Our platform provides you with the most current and up-to-date information, displayed in a clear and concise manner. We use the latest data to ensure that you have access to the best options available, without having to worry about outdated results. With GameStats, you'll always have the latest information at your fingertips!</p>
                        </div>
                    </Col>
                </Col>
            </Row>
        </Container>

    )
}
export default AboutTheApp;

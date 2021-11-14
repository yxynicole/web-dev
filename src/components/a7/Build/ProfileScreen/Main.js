import React from "react";
import {Col, Container, Row} from "react-bootstrap";




const Main = () =>{
    return (
        <Container>
            <Row>
                <Col xs={1} sm={1} md={1} lg={1}>ICon</Col>
                <Col xs={11} sm={11} md={11} lg={11}>Account Name</Col>
            </Row>

            <Row>
                <Row>Banner</Row>
                <Row>Personal Info</Row>
                <Row>Nav BAR</Row>
                <Row>MY TWEETS</Row>
            </Row>
        </Container>
    )
}
export default Main;

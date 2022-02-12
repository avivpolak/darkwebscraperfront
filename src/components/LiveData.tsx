import React, { useRef } from "react";

// react-bootstrap components
import {
    Badge,
    Button,
    Card,
    Navbar,
    Nav,
    Table,
    Container,
    Row,
    Col,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { useInterval } from "../hooks/useInterval";
import { useStore } from "react-redux";
import { Paste } from "../features/paste/pasteSlice";
import Header from "./Header";

const defaultData = [
    { title: "string", labels: "string", author: "string", date: "string" },
];

const LiveData = () => {
    const store = useStore().getState(); 
    const pastes = store.pasteReducer
    return (
        <>
           <Header />
            <Container fluid>
                <Row>
                    <Col md="12">
                        <Card className="strpied-tabled-with-hover">
                            <Card.Header>
                                <Card.Title as="h4">Live Data </Card.Title>
                                <p className="card-category">
                                    {/* lastUpdated: {lastUpdate} */}
                                </p>
                            </Card.Header>
                            <Card.Body className="table-full-width table-responsive px-0">
                                <Table className="table-hover table-striped">
                                    <thead>
                                        <tr>
                                            <th className="border-0">title</th>
                                            <th className="border-0">labels</th>
                                            <th className="border-0">author</th>
                                            <th className="border-0">date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {pastes.map((item:Paste, i:number) => (
                                            <tr key={i}>
                                                <td>{item.title}</td>
                                                <td>{item.labels}</td>
                                                <td>{item.author}</td>
                                                <td>{item.date}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default LiveData;

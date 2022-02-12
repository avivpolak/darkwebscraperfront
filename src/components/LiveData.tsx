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
type Item = {
    title: string;
    labels: string;
    author: string;
    date: string;
};
const defaultData = [
    { title: "string", labels: "string", author: "string", date: "string" },
];

const LiveData = () => {
    const [data, setData] = useState(defaultData);
    const [lastUpdate, setLastUpdate] = useState(new Date().toLocaleDateString());
    const [countAdded, setCountAdded] = useState(0);

    useInterval(() => {
        updateData();
     
      }, 10000);
    const updateData = async () => {
        try {
            const response = await axios.get(`http://localhost:3000`);
            if (response.data.data !== data) {
                setCountAdded(
                    response.data.data.filter((item:any) => !data.includes(item))
                        .length
                );
                console.log("added,",countAdded)
                setData(response.data.data);  
                setLastUpdate(new Date().toLocaleTimeString());
            }
        } catch (err) {
            setData([]);
        }
    };
    // useEffect(() => {
    //     // Update the document title using the browser API
    //     updateData();
    // }, []);
    setInterval(() => {
        updateData();
        setLastUpdate(new Date().toLocaleTimeString());
    }, 10000);


    return (
        <>
            <Container fluid>
                <Row>
                    <Col md="12">
                        <Card className="strpied-tabled-with-hover">
                            <Card.Header>
                                <Card.Title as="h4">Live Data </Card.Title>
                                <p className="card-category">
                                    lastUpdated: {lastUpdate}
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
                                        {data.map((item, i) => (
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

import React, { useState } from "react";

// react-bootstrap components
import {
    Badge,
    Button,
    Card,
    Form,
    Navbar,
    Nav,
    Container,
    Row,
    Col,
} from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router";
import Header from "./Header";
const defaultConfig = {
    name: "Stronghold",
    url: "http://strongerw2ise74v3duebgsvug4mehyhlpa7f6kfwnas7zofs3kov7yd.onion/all",
    useTor: true,
    maxUrls: 243,
    allPostsSelector: ".col-sm-12",
    param1Name: "title",
    param1Selector: "h4",
    param1REGEX: "",
    param2Name: "content",
    param2Selector: "ol",
    param2REGEX: "",
    param3Name: "author",
    param3Selector: ".col-sm-6",
    param3REGEX: "(?<=(\\w+\\s){2})(\\w+)",
    param4Name: "date",
    param4Selector: ".col-sm-6",
    param4REGEX: "\\d+\\s[a-zA-Z]+\\s\\d+,\\s\\d+:\\d+:\\d+\\s[a-zA-Z]+",
};
interface Item{
    [key: string]: string;
}
const CustomScrape = () => {
    const navigate = useNavigate();
    const [config, setConfig] = useState(defaultConfig);
    const [data, setData] = useState([{param1:""} as Item,{param1:""} as Item]);
    const getScrapeResults = async (config: any) => {
        try {
          
            const response = await axios.post(
                `http://localhost:3000/custom`,
                config
            );
         
            if (response.data) {
                setData(response.data.data);
            }
        } catch (error: unknown) {
            if (typeof error === "string") {
                throw new Error(error);
            }
        }
    };
    const handleChange = (event: any) => {
        const value = event.currentTarget.value;
        const key = event.currentTarget.id;
        setConfig({ ...config, [key]: value });
    };
    return (
        <>
        <Header />

            <Container fluid>
                <Row>
                    <Col md="8">
                        <Card>
                            <Card.Header>
                                <Card.Title as="h4">Custom Scrape</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Form
                                    onSubmit={(event) => {
                                        event.preventDefault();
                                        getScrapeResults(config);
                                    }}
                                >
                                    <Row>
                                        <Col className="pr-1" md="5">
                                            <Form.Group>
                                                <label>URL</label>
                                                <Form.Control
                                                    defaultValue={config.url}
                                                    placeholder="URL"
                                                    type="text"
                                                    required
                                                    onChange={handleChange}
                                                    id="url"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>

                                        <Col className="px-1" md="3">
                                            <Form.Group>
                                                <label>site name</label>
                                                <Form.Control
                                                    defaultValue={config.name}
                                                    placeholder="site name"
                                                    type="text"
                                                    required
                                                    onChange={handleChange}
                                                    id="name"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="4">
                                            <Form.Check
                                                defaultChecked={config.useTor}
                                                onChange={handleChange}
                                                label={`use Tor`}
                                                id={`useTor`}
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>maxUrls</label>
                                                <Form.Control
                                                    defaultValue={
                                                        config.maxUrls
                                                    }
                                                    placeholder="Company"
                                                    type="number"
                                                    required
                                                    onChange={handleChange}
                                                    id="maxUrls"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label>
                                                    all Posts css Selector
                                                </label>
                                                <Form.Control
                                                    defaultValue={
                                                        config.allPostsSelector
                                                    }
                                                    placeholder="css Selector"
                                                    type="text"
                                                    required
                                                    onChange={handleChange}
                                                    id="allPostsSelector"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    params:
                                    <Row>
                                        <Col className="pr-1" md="4">
                                            <Form.Group>
                                                <label>Name</label>
                                                <Form.Control
                                                    defaultValue={
                                                        config.param1Name
                                                    }
                                                    type="text"
                                                    required
                                                    onChange={handleChange}
                                                    id="param1Name"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="px-1" md="4">
                                            <Form.Group>
                                                <label>Selector</label>
                                                <Form.Control
                                                    defaultValue={
                                                        config.param1Selector
                                                    }
                                                    placeholder=""
                                                    type="text"
                                                    required
                                                    onChange={handleChange}
                                                    id="param1Selector"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="4">
                                            <Form.Group>
                                                <label>REGEX</label>
                                                <Form.Control
                                                    defaultValue={
                                                        config.param1REGEX
                                                    }
                                                    type="text"
                                                    onChange={handleChange}
                                                    id="param1REGEX"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pr-1" md="4">
                                            <Form.Group>
                                                <label>Name</label>
                                                <Form.Control
                                                    defaultValue={
                                                        config.param2Name
                                                    }
                                                    type="text"
                                                    required
                                                    onChange={handleChange}
                                                    id="param2Name"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="px-1" md="4">
                                            <Form.Group>
                                                <label>Selector</label>
                                                <Form.Control
                                                    defaultValue={
                                                        config.param2Selector
                                                    }
                                                    placeholder=""
                                                    type="text"
                                                    required
                                                    onChange={handleChange}
                                                    id="param2Selector"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="4">
                                            <Form.Group>
                                                <label>REGEX</label>
                                                <Form.Control
                                                    defaultValue={
                                                        config.param2REGEX
                                                    }
                                                    type="text"
                                                    onChange={handleChange}
                                                    id="param2REGEX"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>{" "}
                                    <Row>
                                        <Col className="pr-1" md="4">
                                            <Form.Group>
                                                <label>Name</label>
                                                <Form.Control
                                                    defaultValue={
                                                        config.param3Name
                                                    }
                                                    type="text"
                                                    required
                                                    onChange={handleChange}
                                                    id="param3Name"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="px-1" md="4">
                                            <Form.Group>
                                                <label>Selector</label>
                                                <Form.Control
                                                    defaultValue={
                                                        config.param3Selector
                                                    }
                                                    placeholder=""
                                                    type="text"
                                                    required
                                                    onChange={handleChange}
                                                    id="param3Selector"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="4">
                                            <Form.Group>
                                                <label>REGEX</label>
                                                <Form.Control
                                                    defaultValue={
                                                        config.param3REGEX
                                                    }
                                                    type="text"
                                                    onChange={handleChange}
                                                    id="param3REGEX"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>{" "}
                                    <Row>
                                        <Col className="pr-1" md="4">
                                            <Form.Group>
                                                <label>Name</label>
                                                <Form.Control
                                                    defaultValue={
                                                        config.param4Name
                                                    }
                                                    type="text"
                                                    required
                                                    onChange={handleChange}
                                                    id="param4Name"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="px-1" md="4">
                                            <Form.Group>
                                                <label>Selector</label>
                                                <Form.Control
                                                    defaultValue={
                                                        config.param4Selector
                                                    }
                                                    placeholder=""
                                                    type="text"
                                                    required
                                                    id="param4Selector"
                                                    onChange={handleChange}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="4">
                                            <Form.Group>
                                                <label>REGEX</label>
                                                <Form.Control
                                                    defaultValue={
                                                        config.param4REGEX
                                                    }
                                                    type="text"
                                                    onChange={handleChange}
                                                    id="param4REGEX"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Button
                                        className="btn-fill pull-right"
                                        type="submit"
                                        variant="info"
                                    >
                                        Scrape
                                    </Button>
                                    <div className="clearfix"></div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <table>
                <thead>
                    <tr>
                        {Object.keys(data[1]).map((key:string, i) => (
                            <th key={i}>{key}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, i) => (
                        <tr key={i}>
                            {Object.keys(data[1]).map((key:string, i) => (
                                <td>{item[key]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};
export default CustomScrape;

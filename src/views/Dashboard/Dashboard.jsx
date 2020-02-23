import React, { Component } from "react";
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardTitle,
    CardSubtitle,
    Table,
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    ListGroup,
    ListGroupItem,
    Spinner,
    Alert
} from "reactstrap";
import classnames from 'classnames';
import { Icon } from 'antd';
import { connect } from "react-redux";
import { loadCards } from '../../components/redux/actions';

// import { CardInfo } from "../../components/CardInfo/CardInfo.jsx";
//import { Tasks } from "../../components/Tasks/Tasks.jsx";

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            activeTab: 2
        }
    }
    toggle = tab => {
        if (this.state.activeTab !== tab) {
            this.setState({ activeTab: tab })
        }
    }

    componentDidMount() {
        this.props.loadCards();
    }
    render() {
        const { activeTab } = this.state;
        const { isLoading, cards, error } = this.props.cards;
        console.log('cards', cards)
        return (

            <Container>
                <Row>
                    {isLoading ?
                        <div style={{margin: '25px' }}>
                            <Spinner color="secondary" style={{ width: '3rem', height: '3rem'}} />
                        </div>
                        : ''
                    }
                    {error ?
                        <Alert color="danger" style={{margin: '25px' }}>
                            {error}  — please run this Command 'npm run json-server' to start json-sever and show cards Data
                        </Alert>
                        : ''}
                    {cards.map((card) =>
                        (
                            <Col lg={3} sm={6}>
                                <Card style={{ margin: '25px' }}>
                                    <CardBody style={{ padding: '10px' }}>
                                        <CardHeader className="float-left" style={{ backgroundColor: card.headerColor, marginTop: '-20px' }}>
                                            <Icon type={card.icon} style={{ color: '#fff' }} />
                                        </CardHeader>
                                        <div className="float-right">
                                            <CardTitle >{card.title}</CardTitle>
                                            <CardSubtitle className="float-right">{`${card.number}${card.unit}`}</CardSubtitle>
                                        </div>
                                    </CardBody>
                                    <CardFooter className="float-left" style={{ backgroundColor: '#fff', padding: '10px', fontSize: '12px' }}>
                                        <div className="float-left">
                                            <Icon type={card.footerIcon} />  {card.footerTitle}
                                        </div>
                                    </CardFooter>
                                </Card>
                            </Col>
                        )
                    )}

                </Row>
                <Row>
                    <Col xs={12} sm={12} md={4}>
                        <Card style={{ margin: '25px' }}>
                            <CardBody style={{ padding: '10px', }}>
                                <CardHeader className="float-top" style={{ backgroundColor: '#66bb6a', color: '#fff', marginTop: '-25px', height: '150px' }}>
                                    {/* charts */}
                                </CardHeader >
                                <div className="float-left">
                                    <CardTitle className="float-left">Daily Sales</CardTitle>
                                    <CardSubtitle className="float-left"><Icon type="to-top" /> 55% increase in today sales</CardSubtitle>
                                </div>
                            </CardBody>
                            <CardFooter style={{ backgroundColor: '#fff', padding: '10px', fontSize: '12px' }}>
                                <div className="float-left">
                                    <Icon type="clock-circle" />    <a >updated 4 minutes ago</a>
                                </div>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col xs={12} sm={12} md={4}>
                        <Card style={{ margin: '25px' }}>
                            <CardBody style={{ padding: '10px', }}>
                                <CardHeader className="float-top" style={{ backgroundColor: '#fb8c00', color: '#fff', marginTop: '-20px', height: '150px' }}>
                                    {/* charts */}
                                </CardHeader >
                                <div className="float-left">
                                    <CardTitle className="float-left">Email Subscriptions</CardTitle>
                                    <CardSubtitle className="float-left"> Last Campaign Performance</CardSubtitle>
                                </div>
                            </CardBody>
                            <CardFooter style={{ backgroundColor: '#fff', padding: '10px', fontSize: '12px' }}>
                                <div className="float-left">
                                    <Icon type="clock-circle" />     <a >campaign sent 2 days ago</a>
                                </div>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col xs={12} sm={12} md={4}>
                        <Card style={{ margin: '25px' }}>
                            <CardBody style={{ padding: '10px', }}>
                                <CardHeader className="float-top" style={{ backgroundColor: '#e53935', color: '#fff', marginTop: '-20px', height: '150px' }}>
                                    {/* charts */}
                                </CardHeader >
                                <div className="float-left">
                                    <CardTitle className="float-left">Completed Tasks</CardTitle>
                                    <CardSubtitle className="float-left"> Last Campaign Performance</CardSubtitle>
                                </div>
                            </CardBody>
                            <CardFooter style={{ backgroundColor: '#fff', padding: '10px', fontSize: '12px' }}>
                                <div className="float-left">
                                    <Icon type="clock-circle" />     <a >campaign sent 2 days ago</a>
                                </div>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={6}>
                        <Card style={{ margin: '25px' }}>
                            <CardBody style={{ padding: '10px' }}>
                                <CardHeader className="float-top" style={{ backgroundColor: '#8e24aa', color: '#fff', marginTop: '-30px', padding: '25px' }}>
                                    <Nav tabs>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: activeTab === '1' })}
                                            >
                                                Tasks:
                                        </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: activeTab === '2' })}
                                                onClick={() => { this.toggle('2'); }}
                                            >
                                                <Icon type="bug" /> BUGS
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: activeTab === '3' })}
                                                onClick={() => { this.toggle('3'); }}
                                            >
                                                <Icon type="code" />  WEBSITE
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: activeTab === '4' })}
                                                onClick={() => { this.toggle('4'); }}
                                            >
                                                <Icon type="cloud" />  SERVER
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </CardHeader>
                                <TabContent activeTab={activeTab}>
                                    <TabPane tabId="2">
                                        <Row>
                                            <Col sm="8">
                                                <Table>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">1</th>
                                                            <td>Sign contract for "What are conference organizers afraid of?"</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">2</th>
                                                            <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">4</th>
                                                            <td>Create 4 Invisible User Experiences you Never Knew About</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </Col>
                                            <Col sm="4">
                                                <Icon type="edit" /> <Icon type="close" />
                                            </Col>
                                        </Row>
                                    </TabPane>
                                    <TabPane tabId="3">
                                        <Row>
                                            <Col sm="12">
                                                <Card body>
                                                    <Table>
                                                        <tbody>
                                                            <tr>
                                                                <th scope="row">1</th>
                                                                <td>Sign contract for "What are conference organizers afraid of?"</td>

                                                                <td><Icon type="edit" /> <Icon type="close" /></td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">2</th>
                                                                <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>

                                                                <td><Icon type="edit" /> <Icon type="close" /></td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">3</th>
                                                                <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit</td>

                                                                <td><Icon type="edit" /> <Icon type="close" /></td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">4</th>
                                                                <td>Create 4 Invisible User Experiences you Never Knew About</td>

                                                                <td>Netherlands</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>

                                                </Card>
                                            </Col>
                                        </Row>
                                    </TabPane>
                                </TabContent>

                            </CardBody>

                        </Card>
                    </Col>
                    <Col xs={12} sm={12} md={6}>
                        <Card style={{ margin: '25px' }}>
                            <CardBody style={{ padding: '10px' }}>
                                <CardHeader className="float-top" style={{ backgroundColor: '#fb8c00', color: '#fff', marginTop: '-30px' }}>

                                    <h4>Employees Stats</h4>
                                    <p>New employees on 15th September, 2016</p>

                                </CardHeader>
                                <Table>
                                    <thead style={{ color: '#ff9800' }}>
                                        <tr>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Salary</th>
                                            <th>Country</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Dakota Rice</td>
                                            <td>$36,738</td>
                                            <td>Niger</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Minerva Hooper</td>
                                            <td>$23,789</td>
                                            <td>Curaçao</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Sage Rodriguez</td>
                                            <td>$56,142</td>
                                            <td>Netherlands</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </CardBody>

                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        cards: state.cards
    };
};

export default connect(
    mapStateToProps,
    { loadCards }
)(Dashboard);

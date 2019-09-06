/*!

=========================================================
* Argon Dashboard React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from 'react-router-dom';
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "variables/charts.jsx";

import Header from "components/Headers/Header.jsx";

class Index extends React.Component {
  state = {
    activeNav: 1,
    chartExample1Data: "data1"
  };
  toggleNavs = (e, index) => {
    e.preventDefault();
    this.setState({
      activeNav: index,
      chartExample1Data:
        this.state.chartExample1Data === "data1" ? "data2" : "data1"
    });
    let wow = () => {
      console.log(this.state);
    };
    wow.bind(this);
    setTimeout(() => wow(), 1000);
    // this.chartReference.update();
  };
  componentWillMount() {
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
  }
  render() {
    return (
      <>
        <Header />


        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="12">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <Row className="align-items-center">
                    <div className="col">
                      <h3 className="mb-0">Data</h3>
                    </div>
                    <div className="col text-right">
                      {/* <Button
                        color="primary"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        size="sm"
                      >
                        Ver todos
                      </Button> */}
                    </div>
                  </Row>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Fundo</th>
                      <th scope="col">Tipo de Operação</th>
                      <th scope="col">Cedente</th>
                      <th scope="col">Quantidade</th>
                      <th scope="col">Valor</th>
                      <th scope="col">Status</th>
                      <th scope="col">Detalhes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">FIDC Daniele</th>
                      <td>Cessão Compra</td>
                      <td>--</td>
                      <td>1.235</td>
                      <td>1.256.356,35</td>
                      <td>Pendente Gestor</td>
                      <td align="center"><Link to="/detalhes-operacao/FIDC-Daniele-1"><i class="fas fa-cogs"></i></Link></td>
                    </tr>
                    <tr>
                      <th scope="row">FIDC DLR</th>
                      <td>Cessão Compra</td>
                      <td>--</td>
                      <td>512</td>
                      <td>652.152,53</td>
                      <td>Certificadora</td>
                      <td align="center"><Link to=""><i class="fas fa-cogs"></i></Link></td>
                    </tr>
                    <tr>
                      <th scope="row">FIDC Pangu</th>
                      <td>Cessão Compra</td>
                      <td>--</td>
                      <td>152</td>
                      <td>318.258,41</td>
                      <td>Pagamento - Falta Caixa</td>
                      <td align="center"><Link to=""><i class="fas fa-cogs"></i></Link></td>
                    </tr>
                    <tr>
                      <th scope="row">FIDC Daniele</th>
                      <td>Recompra</td>
                      <td>--</td>
                      <td>825</td>
                      <td>854.145.78</td>
                      <td>Pendente Gestor</td>
                      <td align="center"><Link to="/detalhes-operacao/FIDC-Daniele-2"><i class="fas fa-cogs"></i></Link></td>
                    </tr>
                    <tr>
                      <th scope="row">FIDC Calcard</th>
                      <td>Resolução</td>
                      <td>--</td>
                      <td>145</td>
                      <td>256.752,54</td>
                      <td>Pendente Administrador</td>
                      <td align="center"><Link to=""><i class="fas fa-cogs"></i></Link></td>
                    </tr>
                    <tr>
                      <th scope="row">FIDC ONE</th>
                      <td>Substituição</td>
                      <td>--</td>
                      <td>458</td>
                      <td>478.578,96</td>
                      <td>Pendente Custodiante</td>
                      <td align="center"><Link to=""><i class="fas fa-cogs"></i></Link></td>
                    </tr>
                  </tbody>
                </Table>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col className="mt-5" xl="6">
              <Card className="bg-default">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">
                      <h6 className="text-uppercase text-muted ls-1 mb-1">
                        Quantidade e Valor nos últimos 30, 60, 90 e últimos 5 dias.
                      </h6>
                      <h2 className="mb-0" style={{ 'color': '#FFF' }}>Operações Realizadas</h2>
                    </div>
                  </Row>
                </CardHeader>
                <CardBody>
                  {/* Chart */}
                  <div className="chart" style={{ 'height': '20vh' }}>
                    <Line
                      data={chartExample2.data}
                      options={chartExample2.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col className="mt-5" xl="6">
              <Card className="bg-default">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">
                      <h6 className="text-uppercase text-muted ls-1 mb-1">
                        Quantidade e Valor nos últimos 30, 60, 90 e últimos 5 dias.
                      </h6>
                      <h2 className="mb-0" style={{ 'color': '#FFF' }}>Liquidação Realizadas</h2>
                    </div>
                  </Row>
                </CardHeader>
                <CardBody>
                  {/* Chart */}
                  <div className="chart" style={{ 'height': '20vh' }}>
                    <Line
                      data={chartExample1.data1}
                      options={chartExample2.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Index;

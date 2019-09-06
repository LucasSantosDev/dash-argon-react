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

// reactstrap components
import {
  Card,
  CardHeader,
  CardFooter,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Container,
  Row
} from "reactstrap";
// core components
import Header from "components/Headers/Header.jsx";

const fontSize = {
  'font-size': '14px'
}

class DetalhesOperacao extends React.Component {

  render() {
    const { detalhes } = this.props.match.params;

    if (detalhes == 'FIDC-Daniele-2') {
      return (
        <>
          <Header />
          {/* Page content */}
          <Container className="mt--7" fluid>
            {/* Table */}
            <Row>
              <div className="col-md-6">
                <Card className="border-0 p-0 col-md-2 mb-2">
                  <a href="/" style={{ 'float': 'right' }} className="btn btn-primary">
                    <i className="fa fa-arrow-left"></i> Voltar
                  </a>
                </Card>
                <Card className="shadow">
                  <CardHeader className="border-0">
                    <h3 className="mb-0">
                      DETALHES DA OPERAÇÃO
                    </h3>
                  </CardHeader>
                  <Table className="align-items-center table-flush" responsive>
                    <thead className="thead-light">
                      <tr>
                        <th style={{ 'font-size': '20px', 'background': '#ededed', 'font-weight': 'bold' }} scope="col">FUNDO</th>
                        <th style={{ 'font-size': '20px', 'background': '#ededed', 'font-weight': 'bold' }} scope="col">FIDC Daniele</th>
                      </tr>
                      <tr>
                        <th style={fontSize} scope="col">ID da operação</th>
                        <th style={fontSize} scope="col">xxxx</th>
                      </tr>
                      <tr>
                        <th style={fontSize} scope="col">Tipo de Operação</th>
                        <th style={fontSize} scope="col">Substituição Saída</th>
                      </tr>
                      <tr>
                        <th style={fontSize} scope="col">Tipo de Recebível</th>
                        <th style={fontSize} scope="col">xxxx</th>
                      </tr>
                      <tr>
                        <th style={fontSize} scope="col">Cedente</th>
                        <th style={fontSize} scope="col">xxxx</th>
                      </tr>
                      <tr>
                        <th style={fontSize} scope="col">Valor de face</th>
                        <th style={fontSize} scope="col">1.250.520,14</th>
                      </tr>
                      <tr>
                        <th style={fontSize} scope="col">Taxa da operação</th>
                        <th style={fontSize} scope="col">3,45% mês</th>
                      </tr>
                      <tr>
                        <th style={fontSize} scope="col">Valor da operação</th>
                        <th style={fontSize} scope="col">1.198.458,14</th>
                      </tr>
                      <tr>
                        <th style={fontSize} scope="col">Quantidade de recebida</th>
                        <th style={fontSize} scope="col">1.256</th>
                      </tr>

                      <tr>
                        <th style={fontSize} scope="col">Quantidade de rejeitada</th>
                        <th style={fontSize} scope="col">10</th>
                      </tr>
                      <tr>
                        <th style={fontSize} scope="col">Quantidade de aceita</th>
                        <th style={fontSize} scope="col">1.246</th>
                      </tr>
                      <tr>
                        <th style={fontSize} scope="col">Valor recebido</th>
                        <th style={fontSize} scope="col">--</th>
                      </tr>
                      <tr>
                        <th style={fontSize} scope="col">Valor rejeitado</th>
                        <th style={fontSize} scope="col">--</th>
                      </tr>
                      <tr>
                        <th style={fontSize} scope="col">Status</th>
                        <th style={fontSize} scope="col">--</th>
                      </tr>
                    </thead>
                    <tbody>

                    </tbody>
                  </Table>

                  <CardFooter className="py-4">
                    <nav aria-label="...">

                    </nav>
                  </CardFooter>
                </Card>
              </div>
              <div className="col-md-6">
                <Card className="border-0 p-0 col-md-2 mb-2" style={{ 'visibility': 'hidden' }}>
                  <a href="/" className="btn btn-primary">
                    <i className="fa fa-arrow-left"></i> Voltar
                  </a>
                </Card>
                <Card className="shadow">
                  <CardHeader className="border-0">
                    <h3 className="mb-0">
                      DETALHES DA OPERAÇÃO
                    </h3>
                  </CardHeader>
                  <Table className="align-items-center table-flush" responsive>
                    <thead className="thead-light">
                      <tr>
                        <th style={{ 'font-size': '20px', 'background': '#ededed', 'font-weight': 'bold' }} scope="col">FUNDO</th>
                        <th style={{ 'font-size': '20px', 'background': '#ededed', 'font-weight': 'bold' }} scope="col">FIDC Daniele</th>
                      </tr>
                      <tr>
                        <th style={fontSize} scope="col">ID da operação</th>
                        <th style={fontSize} scope="col">xxxx</th>
                      </tr>
                      <tr>
                        <th style={fontSize} scope="col">Tipo de Operação</th>
                        <th style={fontSize} scope="col">Substituição de Entrada</th>
                      </tr>
                      <tr>
                        <th style={fontSize} scope="col">Tipo de Recebível</th>
                        <th style={fontSize} scope="col">xxxx</th>
                      </tr>
                      <tr>
                        <th style={fontSize} scope="col">Cedente</th>
                        <th style={fontSize} scope="col">xxxx</th>
                      </tr>
                      <tr>
                        <th style={fontSize} scope="col">Valor de face</th>
                        <th style={fontSize} scope="col">1.268.518,19</th>
                      </tr>
                      <tr>
                        <th style={fontSize} scope="col">Taxa da operação</th>
                        <th style={fontSize} scope="col">2,86% mês</th>
                      </tr>
                      <tr>
                        <th style={fontSize} scope="col">Valor da operação</th>
                        <th style={fontSize} scope="col">1.198.458,14</th>
                      </tr>
                      <tr>
                        <th style={fontSize} scope="col">Quantidade de recebida</th>
                        <th style={fontSize} scope="col">1.256</th>
                      </tr>

                      <tr>
                        <th style={fontSize} scope="col">Quantidade de rejeitada</th>
                        <th style={fontSize} scope="col">10</th>
                      </tr>
                      <tr>
                        <th style={fontSize} scope="col">Quantidade de aceita</th>
                        <th style={fontSize} scope="col">1.246</th>
                      </tr>
                      <tr>
                        <th style={fontSize} scope="col">Valor recebido</th>
                        <th style={fontSize} scope="col">--</th>
                      </tr>
                      <tr>
                        <th style={fontSize} scope="col">Valor rejeitado</th>
                        <th style={fontSize} scope="col">--</th>
                      </tr>
                      <tr>
                        <th style={fontSize} scope="col">Status</th>
                        <th style={fontSize} scope="col">--</th>
                      </tr>
                    </thead>
                    <tbody>

                    </tbody>
                  </Table>

                  <CardFooter className="py-4">
                    <nav aria-label="...">

                    </nav>
                  </CardFooter>
                </Card>
              </div>
            </Row>
          </Container>
        </>
      );
    } else {
      return (
        <>
          <Header />
          {/* Page content */}
          <Container className="mt--7" fluid>
            {/* Table */}
            <Row>
              <div className="col-md-6">
                <Card className="border-0 p-0 col-md-2 mb-2">
                  <a href="/" style={{ 'float': 'right' }} className="btn btn-primary">
                    <i className="fa fa-arrow-left"></i> Voltar
                  </a>
                </Card>
                <Card className="shadow">
                  <CardHeader className="border-0">
                    <h3 className="mb-0">
                      DETALHES DA OPERAÇÃO
                    </h3>
                  </CardHeader>
                  <Table className="align-items-center table-flush" responsive>
                    <thead className="thead-light">
                      <tr>
                        <th style={{ 'font-size': '20px', 'background': '#ededed', 'font-weight': 'bold' }} scope="col">FUNDO</th>
                        <th style={{ 'font-size': '20px', 'background': '#ededed', 'font-weight': 'bold' }} scope="col">FIDC Daniele</th>
                      </tr>
                      <tr>
                        <th style={fontSize} scope="col">ID da operação</th>
                        <th style={fontSize} scope="col">xxxx</th>
                      </tr>
                      <tr>
                        <th style={fontSize} scope="col">Tipo de Operação</th>
                        <th style={fontSize} scope="col">Cessão de Compra</th>
                      </tr>
                      <tr>
                        <th style={fontSize} scope="col">Tipo de Recebível</th>
                        <th style={fontSize} scope="col">xxxx</th>
                      </tr>
                      <tr>
                        <th style={fontSize} scope="col">Cedente</th>
                        <th style={fontSize} scope="col">xxxx</th>
                      </tr>
                      <tr>
                        <th style={fontSize} scope="col">Valor de face</th>
                        <th style={fontSize} scope="col">1.250.520,14</th>
                      </tr>
                      <tr>
                        <th style={fontSize} scope="col">Taxa da operação</th>
                        <th style={fontSize} scope="col">3,45% mês</th>
                      </tr>
                      <tr>
                        <th style={fontSize} scope="col">Valor da operação</th>
                        <th style={fontSize} scope="col">1.198.458,14</th>
                      </tr>
                      <tr>
                        <th style={fontSize} scope="col">Quantidade de recebida</th>
                        <th style={fontSize} scope="col">1.256</th>
                      </tr>

                      <tr>
                        <th style={fontSize} scope="col">Quantidade de rejeitada</th>
                        <th style={fontSize} scope="col">10</th>
                      </tr>
                      <tr>
                        <th style={fontSize} scope="col">Quantidade de aceita</th>
                        <th style={fontSize} scope="col">1.246</th>
                      </tr>
                      <tr>
                        <th style={fontSize} scope="col">Valor recebido</th>
                        <th style={fontSize} scope="col">--</th>
                      </tr>
                      <tr>
                        <th style={fontSize} scope="col">Valor rejeitado</th>
                        <th style={fontSize} scope="col">--</th>
                      </tr>
                      <tr>
                        <th style={fontSize} scope="col">Status</th>
                        <th style={fontSize} scope="col">--</th>
                      </tr>
                    </thead>
                    <tbody>

                    </tbody>
                  </Table>

                  <CardFooter className="py-4">
                    <nav aria-label="...">

                    </nav>
                  </CardFooter>
                </Card>
              </div>
            </Row>
          </Container>
        </>
      );
    }
  }
}

export default DetalhesOperacao;

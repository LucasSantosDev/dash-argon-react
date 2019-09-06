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
  Badge,
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

class Liquidacoes extends React.Component {
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          {/* Table */}
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">LIQUIDAÇÕES</h3>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Fundo</th>
                      <th scope="col">Boletos</th>
                      <th scope="col">TED</th>
                      <th scope="col">Escrow</th>
                      <th scope="col">Diferença</th>
                      <th scope="col">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>FIDC Daniele</td>
                      <td>1.256.356,35</td>
                      <td>--</td>
                      <td>--</td>
                      <td>--</td>
                      <td>1.256.356,35</td>
                    </tr>
                    <tr>
                      <td>FIDC DLR</td>
                      <td>652.152,53</td>
                      <td>--</td>
                      <td>--</td>
                      <td>--</td>
                      <td>652.152,53</td>
                    </tr>
                    <tr>
                      <td>FIDC Pangu</td>
                      <td>318.258,41</td>
                      <td>--</td>
                      <td>--</td>
                      <td>--</td>
                      <td>318.258,41</td>
                    </tr>
                    <tr>
                      <td>FIDC Daniele</td>
                      <td>854.145.78</td>
                      <td>--</td>
                      <td>--</td>
                      <td>--</td>
                      <td>854.145.78</td>
                    </tr>
                    <tr>
                      <td>FIDC Calcard</td>
                      <td>256.752,54</td>
                      <td>--</td>
                      <td>--</td>
                      <td>--</td>
                      <td>256.752,54</td>
                    </tr>
                    <tr>
                      <td>FIDC ONE</td>
                      <td>478.578,96</td>
                      <td>--</td>
                      <td>--</td>
                      <td>--</td>
                      <td>478.578,96</td>
                    </tr>
                  </tbody>
                </Table>
                <CardFooter className="py-4">
                  <nav aria-label="...">
                    <Pagination
                      className="pagination justify-content-end mb-0"
                      listClassName="justify-content-end mb-0"
                    >
                      <PaginationItem className="disabled">
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          tabIndex="-1"
                        >
                          <i className="fas fa-angle-left" />
                          <span className="sr-only">Previous</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem className="active">
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          2 <span className="sr-only">(current)</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          3
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fas fa-angle-right" />
                          <span className="sr-only">Next</span>
                        </PaginationLink>
                      </PaginationItem>
                    </Pagination>
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

export default Liquidacoes;

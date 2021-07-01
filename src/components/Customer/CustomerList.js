import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Table, Spinner } from "reactstrap";
import billing from "../../api/billing";
import FullLayout from "../Layouts/FullLayout";

class CustomerList extends Component {
  state = {
    customers: [],
    isLoading: false,
  };

  componentDidMount = async () => {
    this.setState({ isLoading: true });
    const response = await billing.get("customers");
    this.setState({ customers: response.data.customers, isLoading: false });
  };

  renderTableBody = () => {
    const { customers, isLoading } = this.state;
    if (isLoading)
      return (
        <Spinner
          color="dark"
          style={{ display: "flex", justifyContent: "center" }}
        />
      );
    return (
      <>
        <tbody>
          {customers.length > 0 ? (
            customers.map((customer, idx) => (
              <tr key={customer.id}>
                <td>{idx + 1}</td>
                <td>{customer.name}</td>
                <td>
                  <Link to={`customer/${customer.phone}`}>
                    {customer.phone}
                  </Link>
                </td>
                <td>{Number(customer.paid_total).toFixed(2)}</td>
                <td>{Number(customer.credit_total).toFixed(2)}</td>
                <td>
                  <Link to={`/customers/${customer.id}`}>
                    All Invoices{" "}
                    <span style={{ fontSize: 12 }}>
                      ({customer.sales.length || 0})
                    </span>
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">
                No Customer
              </td>
            </tr>
          )}
        </tbody>
      </>
    );
  };

  render() {
    return (
      <FullLayout>
        <aside key="sidebar">
          <h1>Customer List</h1>
        </aside>
        <main key="main" className="card">
          <div className="card-body">
            <Table bordered striped>
              <thead>
                <tr>
                  <th>SNo.</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Total Paid</th>
                  <th>Total Credit</th>
                  <th></th>
                </tr>
              </thead>
              {this.renderTableBody()}
            </Table>
          </div>
        </main>
      </FullLayout>
    );
  }
}

export default CustomerList;

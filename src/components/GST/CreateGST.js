import React, { Component } from 'react';

import {
  Button,
  FormGroup,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
  Table,
  Row,
  
  Col,
  Label,
  
} from 'reactstrap';
import {
  searchCustomerByPhone,
} from '../../actions';
import Search from '../Search';
class CreateGst extends Component {

  state = {
    
    phone: '',
    name: '',

  };

  handlePhoneChange = (phone) => {
    this.setState({ phone, phoneError: '' });
  };


    render() {
        return (
          
            <div class="container py-4">
              <h2 class="text-center">GST Invoice</h2> <br/>
              <Row>
                <Col
                    className="py-3 px-4"
                >
                <Input
                    type='radio'
                    id='incl_taxes'
                    name='tax'
                    // onChange={(e) =>
                    //   this.props.updateCartModeOfPayment(e.target.value)
                    // }
                  >
                
                  </Input>
                  <span>Invoice is Incl of Taxes</span>
                </Col>
                <Col
                    className="py-3"
                >
                  <Input
                    type='radio'
                    id='excl_taxes'
                    name='taxe'
                    // onChange={(e) =>
                    //   this.props.updateCartModeOfPayment(e.target.value)
                    // }
                  >
                
                  </Input>
                  <span for='excl_taxes'>Invoice is Excl of Taxes</span> 
                </Col>
                <Col>
                  <Label for='invoice_no'>Invoice No.</Label>
                  <Input
                    type='text'
                    id='invoice_no'
                    name='taxes11'
                    // onChange={(e) =>
                    //   this.props.updateCartModeOfPayment(e.target.value)
                    // }
                  >
                
                  </Input>
                    
                </Col>
                <Col
                    className="px-4"
                >
                    <Button
                        color='success'
                        className='mt-4'
                        size='md'
                        // disabled={cart.total_amount <= 0}
                        onClick={this.handleInvoiceSubmit}
                    >
                    More Options{' '}
                    
                  </Button>
                </Col>
              </Row>
              <Row
                className="mt-5"
              >
              <Col>
                  <Label for='customer'>Choose Party</Label>
                  
                  <Search
                    handleChange={this.handlePhoneChange}
                    intialValue={this.state.name}
                 />
                </Col>
                <Col>
                  <Label for='invoice_date'>Invoice Date</Label>
                  <Input
                    type='date'
                    id='invoice_date'
                    name=''
                    
                    // onChange={(e) =>
                    //   this.props.updateCartModeOfPayment(e.target.value)
                    // }
                  >
                
                  </Input>
                    
                </Col>
                <Col>
                  <Label for='due_date'>Due Date</Label>
                  <Input
                    type='date'
                    id='due_date'
                    name=''
                    // onChange={(e) =>
                    //   this.props.updateCartModeOfPayment(e.target.value)
                    // }
                  >
                
                  </Input>
                    
                </Col>  
              </Row>
              <Row>
                <Col>
                    <Button
                        color='success'
                        className='mt-3'
                        size='md'
                        
                        // disabled={cart.total_amount <= 0}
                        onClick={this.handleInvoiceSubmit}
                    >
                    Add Item{' '}
                    
                  </Button>
                </Col>
              </Row>
              <Row 
                className="mt-4"
              >
                <Table>
                    <thead>
                    <tr>
                        <th>Item/Product</th>
                        <th>Qty</th>
                        <th></th>
                        <th>Rate</th>
                        <th>Discount</th>
                        {/* <th>Discount</th> */}
                        <th>Amount</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><Input
                                    type=''
                                    id='invoice_date'
                                    name=''
                                    placeholder='Item'
                                >
                                </Input></td>
                                <td><Input
                                    type=''
                                    id='invoice_date'
                                    name=''
                                    placeholder='Qty'
                                >
                                </Input></td>
                                <td><Input
                                    type=''
                                    id='invoice_date'
                                    name=''
                                >
                                </Input></td>
                                <td><Input
                                    type=''
                                    id='invoice_date'
                                    name=''
                                >
                                </Input></td>
                                <td><InputGroup>
                                    <InputGroupAddon addonType='prepend'>
                                      <Input
                                        type='select'
                                        id=''
                                        name=''
                                      >
                                        <option>%</option>
                                        <option>Fixed</option>
                                      </Input>
                                    </InputGroupAddon>
                                    <Input
                                      id='amount_paid'
                                      name='amount_paid'
                                      type=''
                                    />
                                  </InputGroup>
                                    </td>
                                <td><Input
                                    type=''
                                    id='invoice_date'
                                    name=''
                                >
                                </Input></td>
                                <td><Button
                                  color='danger'
                                  className=''
                                  size='md'
                                  // disabled={cart.total_amount <= 0}
                                  //onClick={this.handleInvoiceSubmit}
                              >
                              Delete{' '}
                              
                            </Button></td>
                        </tr>
                    </tbody>
                </Table> 
              </Row>
              <Row>
                <Col>
                    <Button
                        color='success'
                        className=''
                        size='md'
                        // disabled={cart.total_amount <= 0}
                        onClick={this.handleInvoiceSubmit}
                    >
                    Add More{' '}
                    
                  </Button>
                </Col>
              </Row>
              <Row
                className='mt-4'
              >
                  <Col>
                    <h6 class="py-2">Mode of Payment</h6>
                    <Input
                        type='checkbox'
                        id='mode_of_payment'
                        name='mode_of_payment'
                    >

                    </Input>
                    <span>Cash</span><br/>
                    <Input
                        type='checkbox'
                        id='mode_of_payment'
                        name='mode_of_payment'
                    >

                    </Input>
                    <span>Bank</span><br/>
                    <Input
                        type='checkbox'
                        id='mode_of_payment'
                        name='mode_of_payment'
                    >

                    </Input>
                    <span>Cash</span><br/>
                    <Input
                        type='checkbox'
                        id='mode_of_payment'
                        name='mode_of_payment'
                    >

                    </Input>
                    <span>Cash</span><br/>
                    <Row 
                      className='mt-4'
                    >
                    <Col>
                    <Label for='discount'>Total Amt (Rs)</Label>
                            <Input
                                type='text'
                                id='discount'
                                name='discount'
                                //value={cart.discount}
                                //onChange={(e) =>
                                //this.props.updateCartDiscount(e.target.value)
                                
                            >
                            </Input>
                    </Col>
                            <Col>
                            <Label for='discount'>Total Amt (Rs)</Label>
                            <Input
                                type='text'
                                id='discount'
                                name='discount'
                                //value={cart.discount}
                                //onChange={(e) =>
                                //this.props.updateCartDiscount(e.target.value)
                                
                            >
                            </Input>
                            </Col>
                    </Row>
                    <Row>
                      
                    </Row>
                  </Col>
                    
                  <Col>
                    <Row>
                        <Col>
                            <Label for='discount'>Total Amt (Rs)</Label>
                            <Input
                                type='text'
                                id='discount'
                                name='discount'
                                //value={cart.discount}
                                //onChange={(e) =>
                                //this.props.updateCartDiscount(e.target.value)
                                
                            >
                            </Input>
                        </Col>
                        <Col>
                            <Label for='discount'>Total GST+CESS (Rs)</Label>
                            <Input
                                type='text'
                                id='discount'
                                name='discount'
                                //value={cart.discount}
                                //onChange={(e) =>
                                //this.props.updateCartDiscount(e.target.value)
                                
                            >
                            </Input>
                        </Col>
                    </Row><br/>
                    <Row>
                        <Col>
                            <Label for='discount'>Grand Total (Rs)</Label>
                                <Input
                                    type='text'
                                    id='discount'
                                    name='discount'
                                    //value={cart.discount}
                                    //onChange={(e) =>
                                    //this.props.updateCartDiscount(e.target.value)
                                    
                                >
                                </Input>
                        </Col>
                    </Row><br/>
                    <Row>
                        <Col>
                            <Label for='discount'>Round off (Rs)</Label>
                            <Input
                                type='text'
                                id='discount'
                                name='discount'
                                //value={cart.discount}
                                //onChange={(e) =>
                                //this.props.updateCartDiscount(e.target.value)
                                
                            >
                            </Input>
                        </Col>
                        <Col>
                            <Label for='discount'>Net Amount</Label>
                            <Input
                                type='text'
                                id='discount'
                                name='discount'
                                //value={cart.discount}
                                //onChange={(e) =>
                                //this.props.updateCartDiscount(e.target.value)
                                
                            >
                            </Input>
                        </Col>
                    </Row>
                  </Col>
              </Row>
              <Row
                className='mt-4'
              >
                <Col
                      className="px-4"
                  >
                      <Button
                          color='success'
                          className='mt-4'
                          size='md'
                          // disabled={cart.total_amount <= 0}
                          onClick={this.handleInvoiceSubmit}
                      >
                    Save Invoiece!{' '}
                    
                  </Button>
                </Col>
                <Col
                    className="px-4"
                >
                    <Button
                        color='success'
                        className='mt-4'
                        size='md'
                        // disabled={cart.total_amount <= 0}
                        onClick={this.handleInvoiceSubmit}
                    >
                    Save & Create Invoice{' '}
                    
                  </Button>
                </Col>
                <Col
                    className="px-4"
                >
                    <Button
                        color='success'
                        className='mt-4'
                        size='md'
                        // disabled={cart.total_amount <= 0}
                        onClick={this.handleInvoiceSubmit}
                    >
                    Save & Mail Invoice{' '}
                    
                  </Button>
                </Col>
                <Col
                    className="px-4"
                >
                    <Button
                        color='success'
                        className='mt-4'
                        size='md'
                        // disabled={cart.total_amount <= 0}
                        onClick={this.handleInvoiceSubmit}
                    >
                    Save & Eway Bill{' '}
                    
                  </Button>
                </Col>
              </Row>
            </div>
        )
    }
}

export default CreateGst

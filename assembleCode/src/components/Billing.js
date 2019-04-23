import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import  OrderComplete from './OrderComplete';
import {browserHistory} from "react-router";
import {Table,Navbar, Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import styled from '@emotion/styled';


const Color = styled.button`
color: white;
background-color:blue;
margin-left:-15%;
width:126.5%;
max-height:50px;`

const FormStyle = styled.button`
width:300px;
margin-left:0%;
`

const CheckOutHeading = styled.section`
margin-top:30px;
`

const Form2= styled.section`
margin-top:-19%;
margin-left:50%;
`


export default class Billing extends Component {
constructor(props){
    super(props);
}

navigateToOrder=()=>{
    console.log("order");
    this.props.history.push("/order-complete");
}
  render() {
    return (
        <div>
        <Color>
        <Navbar color="blue">
        <h3>Assemble Store</h3>
        </Navbar>
        </Color> 
        <CheckOutHeading>
        <h3>Check Out </h3>
        </CheckOutHeading>

        <form>
        <CheckOutHeading><h5>Payment Information</h5></CheckOutHeading>
        <table>
        <tr>
        <td>
        <label>
          Name on Card   </label></td>
        <td>
          <input type="text" name="cardName" placeholder="Name on Card"/></td>
        </tr>
        <tr>
        <td><label>
          Card Number   </label></td>
        <td>  <input type="text" name="cardNumber" placeholder="XXXX XXXX XXXX XXXX"/></td>        
        </tr>
        <tr>
        <td>
        <label>
          Expiration Date </label> </td>
        <td>  <input type="text" name="expDate" placeholder="MM"/><input type="text" name="year" placeholder="YYYY"/>
        </td>
        </tr>

        <tr>
        <td>
        <label>
          CVV </label></td>
        <td> <input type="text" name="CVV" placeholder="City"/></td>
        </tr>

        </table>
        </form>

        <Form2>
        <form>
        <CheckOutHeading><h5>Shipping Address</h5></CheckOutHeading>
        <table>
        <tr>
        <td><label>
          Name  </label></td>
        <td> <input type="text" name="cardName" placeholder="Full Name"/></td>
        </tr>
        <tr>
        <td><label>
          Address  </label> </td>
        <td>  <input type="text" name="cardNumber" placeholder="Address"/> </td>
        </tr>

        <tr>
        <td><label>
          Apt/suite/etc</label> </td>
        <td><input type="text" name="year" placeholder="Apt/suite/etc "/></td>
        </tr>
        <tr>
        <td><label>
          City</label></td>
        <td>  <input type="text" name="CVV" placeholder="City"/></td>
        </tr>
        <tr>
        <td>
        <label>
          Country</label> </td>
        <td>
          <input type="text" name="CVV" placeholder="Country"/>
        </td>
        </tr>
        <tr>
        <td>
        <label>
          State </label></td>
        <td> <input type="text" name="CVV" placeholder="State"/></td>
        </tr>
        <tr>
        <td>
        <label>
          ZIP Code</label></td>
        <td>
          <input type="text" name="CVV" placeholder="ZIP Code"/>
        </td>
        </tr>
        </table>
        </form>
        </Form2>
        <Button color="primary" onClick={this.navigateToOrder}>PLACE ORDER</Button>
        </div>
    );
  }
}

///Due to time constraint some styling and validation was not implemented
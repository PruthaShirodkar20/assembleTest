import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import  Billing from './Billing';
import {browserHistory} from "react-router";
import { Table,Navbar, Button } from 'reactstrap';
import styled from '@emotion/styled';


const Color = styled.button`
color: white;
background-color:blue;
margin-left:-15%;
width:126.5%;
max-height:50px;`

export default class ReviewCart extends Component {
constructor(props){
    super(props);
    this.state={
        cart:[{ sku: 38094374, unitPrice: 24.0, name: "Red Shirt", quantity: 2 }, 
              { sku: 38094375, unitPrice: 24.0, name: "Blue Shirt", quantity: 1 }, 
              { sku: 38094321, unitPrice: 12.0, name: "Blue socks", quantity: 4 }
             ],
        sum:0
    }
}
componentDidMount(){
let tempSum=0;
for(let i=0; i<this.state.cart.length;i++){
        tempSum=tempSum+this.state.cart[i].unitPrice;
    }
this.setState({
    sum:tempSum
})
}
    
navigateToBilling=()=>{
    console.log("next");
    this.props.history.push("/billing");
}
    

  render() {

    return (
        <div>
        <Color>
        <Navbar color="blue">
        <h3>Assemble Store</h3>
        </Navbar>
        </Color>
        <Table>
        <thead>
        <tr>
            <th>Your Cart</th>
            <th>QUANTITY</th>
            <th>PRICE</th>
        </tr>
        </thead>
        <tbody>
        {this.state.cart.map(function(data){
         return (
         <tr>
         <th>{data.name} {data.sku}</th>
         <th>{data.quantity}</th>
         <th>{data.unitPrice}</th>
         </tr>
    )})}
        <tr>
             <th></th>
             <th>SUBTOTAL</th>
             <th>{this.state.sum}</th>
         </tr>
         <tr>
             <th></th>
             <th></th>
             <th><Button color="primary" onClick={this.navigateToBilling}>CHECK OUT</Button></th>
         </tr>
        </tbody>
        </Table>
        </div>
    );
  }
}


//Some styling was not implemented and images were not included

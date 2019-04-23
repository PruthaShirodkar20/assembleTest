import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import styled from '@emotion/styled';
import { Table,Navbar, Button } from 'reactstrap';
import  ReviewCart from './ReviewCart';
import {browserHistory} from "react-router";

const Color = styled.button`
color: white;
background-color:blue;
margin-left:-15%;
width:126.5%;
max-height:50px;`

const CheckOutHeading = styled.section`
margin-top:30px;
`

export default class OrderComplete extends Component {
 
  navigateHome=()=>{
    console.log("next");
    this.props.history.push("/review-cart");
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
        <h3>Order Complete </h3>
        </CheckOutHeading>
        <CheckOutHeading>
        <h5>Hooray...Way to order those products </h5>
        </CheckOutHeading>
        <Button color="primary" onClick={this.navigateHome}>GO HOME</Button>
        </div>
    );
  }
}

/// Some styling was not implemented

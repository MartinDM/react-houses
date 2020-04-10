import React, { Component } from 'react';
import './house.css';
import Inquiry from './Inquiry';
import emailIcon from './Email.png'
export default class House extends Component {
  state = {};

  inquiryToggle = (e) => {
    const formVisible = !this.state.formVisible
    this.setState({ formVisible }) 
  }

  render() {
    const house = this.props.house;
    const inquiryComponent = this.state.formVisible ? <Inquiry /> : null;
    return (
      <div>
        <div className="row mt-2">
          <h5 className="col-md-12">{house.country}</h5>
        </div>
        <div className="row">
          <h3 className="col-md-12">{house.address}</h3>
        </div>
        <div className="row">
          <div className="col-md-7">
            <img className="img-fluid" src={`https://images.pexels.com/photos/${house.photo}/pexels-photo-${house.photo}.jpeg?w=600&h=400&auto=compress&cs=tinysrgb`} alt="House" />
            </div>
            <div className="col-md-5">
              <p className="price">${house.price}</p>
              <p>{house.description}</p>
              <img src={emailIcon} height="50" alt="inquiry" onClick={this.inquiryToggle} />
              {inquiryComponent}
            </div>
        </div>  
       
      </div>
    );
  }
}

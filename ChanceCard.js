import React, { Component } from 'react';
import './ChanceCards.css';

class ChanceCard extends Component {

  render() {
    
    return (
        <div className="w3-container">
        <div style={{display: this.props.display}} className="card w3-animate-right">
  <div className="mark dark">C</div>
  <div className="content">
     <h1>{this.props.content}</h1>
  </div>
  
  <div className="mark upside-down">C</div>
  </div></div>


    );
  }
}

export default ChanceCard;

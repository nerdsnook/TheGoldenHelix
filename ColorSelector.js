import React, { Component } from 'react';
import './ColorSelector.css';


class ColorSelector extends Component {

handleChange (e) {
    this.sendBackResults = this.props.sendBackResults.bind(this)
    this.sendBackResults(this.props.index + 1, "color", e.currentTarget.value)
}
  render() {
    const index = this.props.index;
    console.log(this.props.player)
    return (
<form>
      <div className="custom-radios" >
  <div>
    <input onChange={this.handleChange.bind(this)} type="radio" id={"color-1" + index} className="color-1" name="color" value="black" />
    <label htmlFor={"color-1" + index}>
      <span>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
      </span>
    </label>
  </div>
  
  <div>
    <input onChange={this.handleChange.bind(this)} type="radio" id={"color-2" + index} className="color-2" name="color" value="green"/>
    <label htmlFor={"color-2" + index}>
      <span>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
      </span>
    </label>
  </div>
  
  <div>
    <input onChange={this.handleChange.bind(this)} type="radio" id={"color-3" + index} className="color-3" name="color" value="blue"/>
    <label htmlFor={"color-3" + index}>
      <span>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
      </span>
    </label>
  </div>

  <div>
    <input onChange={this.handleChange.bind(this)} type="radio" id={"color-4" + index} className="color-4" name="color" value="purple"/>
    <label htmlFor={"color-4" + index}>
      <span>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
      </span>
    </label>
  </div>
</div>
</form>

    );
  }
}

export default ColorSelector;

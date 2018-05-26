import React, { Component } from 'react';
import './StopWatch.css';
//import SweetAlert from 'sweetalert2-react';
import SweetAlert from 'react-bootstrap-sweetalert'

class StopWatch extends Component {
//add css 15s path through via props
constructor(props) {
    super(props);
    this.state = { 
        HazAnswered: false,
        show: false,
        message: "You have 15 seconds to answer.",
        CurrentInputData: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.CheckGivenAnswer = this.CheckGivenAnswer.bind(this)
}

componentWillMount() {
    console.log("ddd")
    if(this.props.showStopWatch === true)
    {
        this.setState({show: true});
        setTimeout(() => {
            this.setState({message: "Time is up.", show: false});
        }, 15000);
    }
}
  handleChange(event) {
    console.log(event.target.value)
    this.setState({CurrentInputData: event.target.value});
  }
  
  
CheckGivenAnswer() {
    const answer = this.state.CurrentInputData;
    switch (answer) {
    case "":
        this.setState({message: "plz input something"})
        break;
    default:
        if(answer === this.props.CurrentCorrectAnswerToCheck)
        {
            console.log("em k");
        }
        else 
        {
            console.log("ddd")
        }
        break;
}

}
render() {
      return (       
        <SweetAlert show={this.state.show} title="" confirmBtnText="Answer"  onConfirm={this.CheckGivenAnswer}> 
            <div className="container_stopWatch">
                    <h1>{this.state.message}</h1>
                <div id="stopwatch">
                        <div className="switch"></div>
                        <div className="pie pie1"></div>
                        <div className="pie pie2"></div>
                        <div className="ring"></div>
                </div> 
                <center>
                <div className="w3-half w3-display-middle" style={{top: "70%"}}>
                        <input className="w3-input w3-border" type="text" value={this.state.CurrentInputData} onChange={this.handleChange} placeholder="Answer goes here."/>
                    </div>
                </center>
            </div>
        </SweetAlert>

      );
    }
  }
  
  export default StopWatch;



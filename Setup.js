import React, { Component } from 'react';
import SweetAlert from 'react-bootstrap-sweetalert'

class Setup extends Component {

constructor(props) {
    super(props);
    this.state = { 
        message: "how many players are playing?",
        howManyPlayers: 0,
        players: []
    }
    this.setState = this.setState.bind(this);
}
Next() {
    
}
render() {
      return (       
        <SweetAlert title={this.state.message} confirmBtnText="Next"  onConfirm={this.Next}> 
            <div className="w3-container">
                    <div className="w3-row-padding numbers_with_padding">
                 <div className="w3-third">
<div style={{height: "100px"}} onClcik={alert.bind(this, "w")} className="w3-card w3-container w3-margin-bottom"><p>4 <i class="fas fa-user"></i> </p></div>
</div>
<div className="w3-third">
<div style={{height: "100px"}} className="w3-card w3-container w3-margin-bottom"><p>3 <i class="fas fa-user"></i> </p></div>
</div>
<div className="w3-third">
<div style={{height: "100px"}} className="w3-card w3-container w3-margin-bottom"><p>2 <i class="fas fa-user"></i> </p></div>
</div>

                        </div>
            </div>
        </SweetAlert>

      );
    }
  }
  
  export default Setup;



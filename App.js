import React, { Component } from 'react';
import SweetAlert from 'react-bootstrap-sweetalert'
import ChanceCard from './ChanceCard';
import StopWatch from './StopWatch';
import ColorSelector from './ColorSelector';
import './App.css';

class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    SetupData: {
      currentInterationPlayer: 0,
      PhaseTwo: false,
    },
    SetupMessage: "how many players are playing?",
    howManyPlayers: 0,
    CurrentCorrectAnswer: "hello",
    showStopWatch: false,
    Setup: true,
    DisplayChanceCard: "none",
    AnimationPlayState: "running",
    whosup: 1,
    SwitchSides: false,
    AmmountOfPlayers: 2,
    //TODO: make AmmountOfPlayers non static :DONE
    Dice: {__html: "<h4>Click to <br> Roll</h4>"},
    players: {  
      1: {"name": "Test", color: "black"},
      2: {"name": "Test", color: "green"},
      3: {"name": "Test", color: "blue"},
      4: {"name": "Test", color: "purple"},
    },
    board_yellow: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
    board_red: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
  };
}
componentDidMount() {
  //put setup stuff here
}

RandomChanceCardText(){
  var say = []
  say[0] = "Lose a Turn";
  say[1] = "Switch Sides";
  say[2] = "Skip 5 Spaces";
  say[3] = "Roll Again"

  return say[Math.floor(Math.random()*say.length)];
}

GetPlayersCurrentPlaceInarray(id) {
  for (let i = 0; i < this.state.board_red.length; i++) {
    const thing = this.state.board_red[i];
     if(thing.who === id){
           return [i,"R"];
     }  
      
 }

 // work on polerization of numbers
 for (let i = 0; i < this.state.board_yellow.length; i++) {
   const thing = this.state.board_yellow[i];
    if(thing.who === id){
       return [i, "Y"];
    }  
}
}
GetPlayersCurrentPlace(id, ForArrayMin){
  for (let i = 0; i < this.state.board_red.length; i++) {
     const thing = this.state.board_red[i];
      if(thing.who === id){
          return(Math.abs(i - this.state.board_red.length) + " Red")
      }  
       
  }

  // work on polerization of numbers
  for (let i = 0; i < this.state.board_yellow.length; i++) {
    const thing = this.state.board_yellow[i];
     if(thing.who === id){
        return(Math.abs(i - this.state.board_yellow.length) + " Yellow")
     }  
      
 }
}
whosupClass() {
  let base = "w3-animate-left w3-container w3-cell ";
  return base + this.state.players[this.state.whosup].color;
}
rollTheDice() {
  var i,
  faceValue,
  output = '',
  diceCount = 2;
  var rolls = [];
      for (i = 0; i < diceCount; i++) {
          faceValue = Math.floor(Math.random() * 6);
          output += "&#x268" + faceValue + "; ";
          rolls.push(faceValue + 1);
      }

      let x = rolls[0];
      let y = rolls[1];
      let z = (x+y-2)*180;
      console.log(z);
      let threshhold = 700;
      if(z >= threshhold) {
        console.log("pick a chance card, move to the yellow if you are currently on the red");
        this.setState({DisplayChanceCard: "block"})   
      }
      else {
        if(z < threshhold) {
          console.log("move forward one space");
          this.setState({DisplayChanceCard: "none"}) 
        }
      }
      this.setState({Dice: {__html: output}, showStopWatch: true})  
}
player_piece(player) {
  if(player.there === true) {
      return "block block_A " + this.state.players[player.who].color;
  }
  else {
      return "block block_A"
  }
}
AnimationPlayStateFunc () {
  if(this.state.AnimationPlayState === "running") this.setState({"AnimationPlayState": "paused"})
  if(this.state.AnimationPlayState === "paused")  this.setState({"AnimationPlayState": "running"})
  let innty = this.GetPlayersCurrentPlaceInarray(this.state.whosup)[0];
  let aa = innty - 1;
  console.log(aa)
  if(aa < 32) this.MovePlayer(this.state.whosup, aa, this.state.SwitchSides)
}
array_move(arr, old_index, new_index) {
  if (new_index >= arr.length) {
      var k = new_index - arr.length + 1;
      while (k--) {
          arr.push(undefined);
      }
  }
  arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  return arr; // for testing
};

MovePlayer(id,  where, swap) {
  //- ((this.state.board_red.length * this.state.board_yellow.length)/2)
  var context = [];
   context = this.GetPlayersCurrentPlaceInarray(id);
  
console.log(context)
  var pos = context[0];
   var side = context[1];
if(swap === true) {
 // where = Math.abs(where - 32)
  if(side === "Y") {
    //move to red side
    let yellow = this.state.board_yellow;
    let red = this.state.board_red;
    red[where] = yellow[pos];
    yellow[pos] = 10;
    this.setState({board_red: red, board_yellow: yellow}) 
   }
   if(side === "R") {
     //move to yellow side
     let yellow = this.state.board_yellow;
     let red = this.state.board_red;
     yellow[where] = red[pos];
     red[pos] = 10;
     this.setState({board_red: red, board_yellow: yellow}) 
 
   }
}
  else
  {
    if(side === "Y") {
      let A = this.state.board_yellow;
      A = this.array_move(A, pos, where);
      this.setState({A}) 
    }
    if(side === "R") {
      let B = this.state.board_red;
      B = this.array_move(B, pos, where);
      this.setState({B}) 
    }
  }
}
componentDidUpdate () {
  if(this.state.howManyPlayers !== 0 && this.state.SetupData.PhaseTwo === false) {
      this.setState({"SetupMessage": "input stuff", "SetupData": { "PhaseTwo": true}})
  }
}

sendBackResults (playerID, field, data) {
  var scrap_data = this.state.players;
  scrap_data[playerID][field] = data;
  this.setState({
    players: scrap_data
  })
}

HandleInputBullShitFromNameInput (e, index) {
    this.sendBackResults(Math.abs(parseInt(e.currentTarget.id) + 1), "name", e.currentTarget.value)
}

UserInputDataSelector () {
   return (
     <ul className="w3-ul w3-xxlarge">
         { Object.keys(this.state.players).map((player, index) => 
          <div>
              <div className="w3-row-padding">
              
              <div className="w3-third">
                <h4>Player {index + 1}: </h4>
              </div>

              
              <div className="w3-third">
                    <input key={index} id={index} onChange={this.HandleInputBullShitFromNameInput.bind(this)} className="w3-input w3-border" type="text" placeholder="Name?" />
              </div>
              
              
              <div className="w3-third">
                <ColorSelector player={this.state.players[player]} sendBackResults={this.sendBackResults.bind(this)} index={index} />

              </div>
              </div>
                            <hr/>
          </div>
        )}
  </ul>
  );
}
SetupNumberOfPlayers (ammount) {
  console.log(ammount);
  var SeedData = {};
for (var i = 0; i < ammount; i++) { 
  SeedData[i + 1] = {"name": "test", "color": "black"} 
  }
  var SeedDataParaRed = this.state.board_red;
  var SeedDataParaYellow = this.state.board_yellow;
var a = 1;
for (var l = 0; l < ammount; l++) { 
    if(l % 2 === 0)
    {
      //yellow
      SeedDataParaYellow[SeedDataParaYellow.length - a] = {there: true, who: l + 1}
      a++;
    }
    else 
    {
    //red
      SeedDataParaRed[SeedDataParaRed.length - a + 1] = {there: true, who: l + 1}
    } 

    
}


  console.log(SeedDataParaRed);
  console.log(SeedDataParaYellow)
  this.setState({"howManyPlayers": ammount, "players": SeedData, "board_red": SeedDataParaRed, "board_yellow": SeedDataParaYellow})
}
MessageControler() {
  if(this.state.Setup === true) {
    console.log("setup activated")
    if(this.state.howManyPlayers === 0) {
      
    return(        <SweetAlert title={this.state.SetupMessage} confirmBtnText="Next"> 
            <div className="w3-container">
                    <div className="w3-row-padding numbers_with_padding">
                 <div className="w3-third">
<div key={1} style={{height: "100px"}} onClick={() => this.SetupNumberOfPlayers(4)} className="w3-card w3-container w3-margin-bottom"><p>4 <i className="fas fa-user"></i> </p></div>
</div>
<div className="w3-third">
<div style={{height: "100px"}} onClick={() => this.SetupNumberOfPlayers(3)} className="w3-card w3-container w3-margin-bottom"><p>3 <i className="fas fa-user"></i> </p></div>
</div>
<div className="w3-third">
<div style={{height: "100px"}} onClick={() => this.SetupNumberOfPlayers(2)} className="w3-card w3-container w3-margin-bottom"><p>2 <i className="fas fa-user"></i> </p></div>
</div>

                        </div>
            </div>
        </SweetAlert>)
    }
    else {
  
      return(
                 
        <SweetAlert title={this.state.SetupMessage} confirmBtnText="Done"  onConfirm={() => this.setState({Setup: false})}> 
            <div className="w3-container">
                  <div className="w3-row-padding">
                  { this.UserInputDataSelector() }
  </div>

            </div>
        </SweetAlert>
        
        )
    }
  }
  if(this.state.showStopWatch === true) {
    return(<StopWatch CurrentCorrectAnswerToCheck={this.state.CurrentCorrectAnswer} showStopWatch={this.state.showStopWatch}/>)
  } else {
    return(<p></p>)
  }

}
  render() {
    return (
    <div>
        <div className="container red">
            { this.state.board_red.map((item, index) => ( 
                <div key={index} style={{animationPlayState: this.state.AnimationPlayState}} className={this.player_piece(item)}>
                    <div className="line"></div>
                </div>
            ))}
        </div>
        <div className="container yellow">
            { this.state.board_yellow.map((item, index) => ( 
                <div key={index} style={{animationPlayState: this.state.AnimationPlayState}} className={this.player_piece(item)}>
                    <div className="line"></div>
                </div>
            ))}
        </div>
        <div id="player" className={this.whosupClass()}>
         <h2>{this.state.players[this.state.whosup].name} - {  this.GetPlayersCurrentPlace(this.state.whosup) }</h2>
      </div>
      <br/>
      <div id="dice_roll" style={{background: "#554e33b3", color: "white"}} className="w3-animate-left w3-container w3-cell">
         <div onClick={this.rollTheDice.bind(this)} id="dice">
         <div dangerouslySetInnerHTML={this.state.Dice} />
         </div>
      </div>
      <ChanceCard display={this.state.DisplayChanceCard} content={this.RandomChanceCardText()}/>
          
      <div style={{
            position: "absolute",
            bottom: "0px",
            right: "0px",
           fontFamily: "sans-serif"
      }} className="w3-panel w3-round">
        <button style={{padding: "10px", fontSize: "20px"}} className="w3-button w3-black w3-rounded" onClick={this.AnimationPlayStateFunc.bind(this)}>Toggle Helix</button>
      </div>

      <div>
      {this.MessageControler()}
    </div>


        </div>
    );
  }
}

export default App;

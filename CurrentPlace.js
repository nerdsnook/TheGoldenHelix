const CurrentPlace = {
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
      },
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
}

export default CurrentPlace;
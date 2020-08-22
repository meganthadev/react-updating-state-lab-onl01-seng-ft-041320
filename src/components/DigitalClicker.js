import React from 'react';
  
class Digital Clicker extends React.Component {
  constructor() {
    super();
    this.state= {
      timesClicked: 0
  };
}

handleClick = {} => {
  
}

render() {
  return(
    <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    ) 
}
  
}

export default DigitalClicker
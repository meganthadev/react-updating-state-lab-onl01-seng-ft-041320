import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor() {
    this.state = {
     errors: [],
     user: null,
     settings: {
       bitrate: 8,
     video: {
       resolution: '1080p'
    }
  }
}
  
  
  
  
  
  
  render(){
    return(
      <div>
      <button className='bitrate' onClick={this.handleBitRateClick}>Bitrate</button>
      <button className='resolution' onClick={this.handleResolutionClick}>Resolution</button>
      </div>
    )
  }
  
}

export default YouTubeDebugger

import React, { Component } from 'react';

export default class MainContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
		gameOn: false,
    }
  }


  render(){
	if (!this.state.gameOn) {

	};

    return(
      <div id={'MainContent'}>
	  	<p>

		</p>

	  </div>
    )
  }
}

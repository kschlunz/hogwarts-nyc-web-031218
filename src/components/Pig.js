import React, { Component } from 'react';

class Pig extends Component {
state = {
  showDetails: false,

}

  hide = (event) => {
    event.stopPropagation()
    this.props.hidePig(this.props.index)
  }

  details = () => {
    return(
    <div>
    <h4>Specialty: {this.props.specialty}</h4>
    <p>Greased: {this.props.greased.toString()}</p>
    <p>Weight: {this.props.pigString}</p>
    <p>Medal: {this.props.pigMedal}</p>
    <button onClick={this.hide}>Hide This Hog</button>
    </div>)
  }

  showMain = () =>{
    return(
      <div>
        <h3>Name: {this.props.name}</h3>
        <img src= {require("../hog-imgs/" + this.props.imagePath + ".jpg")} />
      </div>
    )
  }

  flipCard = () => {
    this.setState({showDetails: !this.state.showDetails})
  }

  render() {
    return (
      <div onClick={this.flipCard}>
        {(this.state.showDetails) ? this.details() : this.showMain()}
      </div>
    )
  }
}



export default Pig;

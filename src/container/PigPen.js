import React, { Component } from 'react';
import Pig from '../components/Pig';
import PigForm from '../components/PigForm'

class PigPen extends Component {

  state={
    greased: false,
    pigs: this.props.hogs
  }



  hidePig = (index) => {
    let newArr = this.state.pigs.map((pig)=>{return pig})
    newArr.splice(index, 1)
    this.setState({pigs: [...newArr]})
  }

  changeJsx = () => {
    return this.changeArray(this.state.pigs)
  }

  alphabetical = () =>{
    let newArr = this.state.pigs.map((pig)=>{return pig})
    let sortedArr = newArr.sort((a,b) => {
      if(a.name < b.name) return -1;
      if(a.name > b.name) return 1;
      return 0;
    })
    this.setState({pigs: [...sortedArr]})
  }

  weight = () =>{
    let newArr = this.state.pigs.map((pig)=>{return pig})
    let sortedArr = newArr.sort((a,b) => {
      if(a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] < b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']) return -1;
      if(a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] > b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']) return 1;
      return 0;
    })
    this.setState({pigs: [...sortedArr]})
    this.setState({weight: true, alphabetical:false})

  }

  greased = () => {
    this.setState({greased: !this.state.greased})
    if(this.state.greased){
      let newArr = this.state.pigs.map((pig) => {return pig})
      let filteredPigs = newArr.filter((pig) =>{return pig.greased})
      this.setState({pigs: [...filteredPigs]})
    }else{
      this.setState({pigs: this.props.hogs})
    }
  }

  bringBack= () => {
    this.setState({pigs: this.props.hogs})
  }

  render() {
      const createPig = (pigObj) =>{
        this.setState({pigs: [...this.state.pigs, pigObj]})
      }
    return (
      <div>
      <button onClick={this.alphabetical}>Sort By Name</button>
      <button onClick={this.weight}>Sort By Weight</button>
      <button onClick={this.greased}>Filter Greased Pig</button>
      <button onClick={this.bringBack}>Bring Back Hidden Hogs</button>
      <PigForm createPig={createPig}/>
      <div>{this.changeJsx()}</div>
      </div>
    )
  }

  changeArray(array) {return array.map( (pig, index) => {
    return <Pig key= {index} index= {index} name= {pig.name} specialty= {pig.specialty} greased= {pig.greased}  pigString= {pig['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']} pigMedal= {pig['highest medal achieved']} imagePath={ pig.name.toLowerCase().split(' ').join('_') } hidePig= {this.hidePig} />

  })

}


}




export default PigPen;

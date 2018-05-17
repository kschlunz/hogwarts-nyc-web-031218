import React from 'react'

class PigForm extends React.Component{
  state = {
    name: "",
    specialty: "",
    pigMedal: "",
    pigString: null,
    greased: true
  }

  handleChange= (event) => {
    this.setState({[event.target.name]: event.target.value}, () =>console.log(this.state))

  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.createPig(this.state)

  }
    render(){
      return(
          <div>
            <form onSubmit= {this.handleSubmit}>
              <label>Name: <input onChange={this.handleChange} name="name" type="text" /> </label><br/>
              <label>Specialty: <input onChange={this.handleChange} name="specialty" type="text" /> </label><br/>
              <label>Medal: <input onChange={this.handleChange} name="pigMedal" type="text" /> </label><br/>
              <label>Weight: <input onChange={this.handleChange} name="pigString" type="integer" /> </label><br/>
              <label>Greased:
                <select name="greased" onChange={this.handleChange}>
                  <option default value={true} name="true">True</option>
                  <option value={false} name="false">False</option>
                  </select>
              </label>
              <input type="submit" />
            </form>
          </div>
      )
    }






}


export default PigForm;

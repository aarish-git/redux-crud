import React, { Component } from 'react'
import * as Action from './action/Action'
import {connect} from 'react-redux'



class Form extends Component {
  constructor(props) {
    super(props)
    this.name = React.createRef();
    this.address = React.createRef();

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e){
    e.preventDefault();
    console.log("name",this.name.current.value)
    console.log("address",this.address.current.value)

  }

  render() {
    return (
      <div>
      <form className="myform">
      Name:<input type="text" ref={this.name} placeholder="Your Name"></input>
      Address:<input type="text" ref={this.address} placeholder="Your Name"></input>
      <button className="btn-lg btn-danger submit" onClick={this.props.fSubmit()}>Submit</button>
    </form>
      </div>
    )
  }
}




import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import * as Action from './action/Action';
import Form from './form';

class App extends Component {
  constructor(props) {
    super(props);
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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <form className="myform">
            Name:
            <input type="text" ref={this.name} placeholder="Your Name"></input>
            Address:
            <input
              type="text"
              ref={this.address}
              placeholder="Your Name"
            ></input>
            <button
              className="btn-lg btn-danger submit"
              onClick={this.handleClick}
            >
              Submit
            </button>
          </form>
          {/* <pre>
        {datas.map((data, i) =>
          <li key={i} className="mylist">
           {i+1}. {data.name}, {data.address}
           <button onClick={() => this.fEdit()}>edit</button>
           <button onClick={() => this.fdelete()}>delete</button>
          </li>
        )}
        </pre> */}
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    act: state.act,
    index: state.index,
    datas: state.datas,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fSubmit: () => dispatch(Action.fSubmit()),
    fEdit: () => dispatch(Action.fEdit()),
    fRemove: () => dispatch(Action.fRemove()),
  };
};

export default App;

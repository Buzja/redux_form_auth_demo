import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReduxForm from './components/ReduxForm';
import './App.css';
import * as actions from './store/actions';

class App extends Component {
  onSubmit=(values)=>{
    this.props.onLogin();
    console.log(values);
  }

  render() {
    console.log(this.props.isLoged);
    return (
      this.props.isLoged?
      <h1>Loged</h1>:
      <ReduxForm onSubmit={this.onSubmit} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
  isLoged: state.reducer.isLoged
}}

const mapDispatchToProps = dispatch => {
  return{
    onLogin : ()=>dispatch(actions.loginSuccess())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

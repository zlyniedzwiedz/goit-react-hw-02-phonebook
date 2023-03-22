import { Form } from "./Form/Form";
import { Component } from "react";


export class App extends Component {
   state = {
    contacts: [],
    name: '',
    number: ''
  };
  handleSubmit = evt => {
    const {name} = evt.currentTarget;
    this.setState(state => ({
      [name]: ++state[name],
    }))
    console.log(this.state)
  }
  render() {
   return (
    <Form onDataSubmit={this.handleSubmit}/>
   )
    
  }
};

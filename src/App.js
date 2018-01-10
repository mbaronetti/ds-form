import React, { Component } from 'react';
import logo from './logo.svg';
import Form from './Form';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  render() {
    return (
        <div className="container">
            <Form formTitle="Your data" formTitleHelp="* Mandatory field" formSubTitle="Passengers" formHeaderTitle="Personal Details" />
        </div>
    );
  }
}
export default App;

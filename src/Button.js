import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
   constructor(props){
       super(props);
       this.state = {
           checked : 'disabled'
       }
   }
   render() {
      return <button type={this.props.type} className={this.props.className}>{this.props.text}</button>
    }
}

export default Button; 

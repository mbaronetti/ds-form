import React from 'react';
import ReactDOM from 'react-dom';

class Passenger extends React.Component {
   constructor(props){
       super(props);
       this.state = {
       }
       //this.handleChange = this.handleChange.bind(this);
   }
   render() {
      return (
          <div className="form-group">
              <label htmlFor={this.props.htmlFor}>{this.props.label}</label>
              <input value={this.props.value} valid={this.props.valid}  onChange={this.props.handleChange}  name={this.props.htmlFor} className="form-control" type={this.props.type} disabled={this.state.disabled} placeholder={this.props.placeholder} mandatory={this.props.mandatory} id={this.props.id} disabled={this.props.disabled} />
              <small className="d-none">{this.props.toolTip}</small>
          </div>
       )
    }
}

export default Passenger; 
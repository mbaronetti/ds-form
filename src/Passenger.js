import React from 'react';
import ReactDOM from 'react-dom';
import Input from './Input';

class Button extends React.Component {
   constructor(props){
       super(props);
   }
   render() {
      return (
          <div className="row">
            <div className="col-sm-12 col-md-4">
                <Input toolTip="Enter a valid Name" label="First Name *" htmlFor="pasFirstName" type="text"  />
            </div>
            <div className="col-sm-12 col-md-4">
                <Input  toolTip="Enter a valid Surname" label="Last Name *" htmlFor="pasLastName" type="text"  />
            </div>
            <div className="col-sm-12 col-md-4">
                <Input  label="Passenger type" htmlFor="pasType" type="select" />
            </div>
          </div>
      )
    }
}

export default Button; 

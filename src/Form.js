import React from 'react';
import ReactDOM from 'react-dom';
import Input from './Input';
import Button from './Button';

const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const pre = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
class Form extends React.Component {
   constructor(props){
       super(props);
       this.state = {
           inputFirstName : '',
           inputLastName : '',
           inputStreet : '',
           inputCity : '',
           inputZipCode : '',
           inputPhone : '',
           inputEmail : '',
           pasFirstName : '',
           pasLastName : '',
           valueFirstName : '',
           valueLastName : '',
           valueNameChecked : '' ,
           valueSurnameChecked : '',
           disabled : false
       }
       this.handleSubmit = this.handleSubmit.bind(this);
       this.handleChange = this.handleChange.bind(this);
       this.onChecked = this.onChecked.bind(this);
   }
   handleSubmit(e){
   e.preventDefault();
   for(let property in this.state){
       console.log();
       if(property != 'disabled' && property != 'valueNameChecked' && property != 'valueSurnameChecked' && property != 'valueFirstName' && property != 'valueLastName' && property != 'pasFirstName' && property != 'pasLastName')
           if(this.state[property] != 'valid')
              this.setState({[property] : 'invalid'} , console.log(this.state))
    }
       
   }
    
  handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    let length = e.target.value.length;
    let type = e.target.type;
    console.log(value);
    console.log(length);
    
    {(length > 0) ? this.setState({[name] : 'valid'}) : this.setState({[name] : 'invalid'})};
    console.log(this.state);
      
    let validEmail;
    let validNumber;
    if(type == 'email' ){
        validEmail = re.test(value.toLowerCase());
        if(!validEmail)
            this.setState({[name] : 'invalid'})
    }
    if(type == 'tel' ){
        validNumber = pre.test(value.toLowerCase());
        if(!validNumber)
            this.setState({[name] : 'invalid'})
    }
    (name == 'inputFirstName') ? this.setState({valueFirstName : value}) : '';
    (name == 'inputLastName') ? this.setState({valueLastName : value}) : '';
    if((name == 'inputFirstName' && this.state.disabled == true) || name == 'pasFirstName'){
        this.setState({valueNameChecked : value})
    }
    if((name == 'inputLastName' && this.state.disabled == true) || name == 'pasLastName'){
        this.setState({valueSurnameChecked : value})
    }
  }
  onChecked(e){
      (this.state.disabled == false) ? this.setState({disabled : true}) : this.setState({disabled : false});
      console.log();
      this.setState({
          valueNameChecked : this.state.valueFirstName,
          valueSurnameChecked : this.state.valueLastName
      })
      
  }
   render() {
      return (
        <form id="Form" onSubmit={this.handleSubmit}>
          <div className="form_header--title text-center">
            <h5>{this.props.formHeaderTitle}</h5>
          </div>
          <div className="container p-4">
          <div className="row">
            <div className="col-sm-12">
              <p className="form_title">{this.props.formTitle}</p>
              <p className="form_sub-title">{this.props.formTitleHelp}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
          
                <div className="form-check">
                  <label className="form-check-label p-0 mb-2">
                    <p className="mb-0" >Title *</p>
                    <input type="radio"  name="optionsRadios" id="optionsRadios1" value="option1" checked />Mr.
                    <input className="ml-2" type="radio" name="optionsRadios" id="optionsRadios2" value="option2"  />Mrs.
                    
                  </label>
                </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-6">
                <Input toolTip="Enter a valid Name" valid={this.state.inputFirstName} handleChange={this.handleChange} label="First Name *" htmlFor="inputFirstName" type="text" />
            </div>
            <div className="col-sm-12 col-md-6">
                <Input toolTip="Enter a valid Surname" valid={this.state.inputLastName} handleChange={this.handleChange} label="Last Name *" htmlFor="inputLastName" type="text" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-6">    
                <Input toolTip="Enter a valid Street name and number" valid={this.state.inputStreet} handleChange={this.handleChange} handleChange={this.handleChange} label="Street and number *" htmlFor="inputStreet" type="text" />
            </div>
            <div className="col-sm-12 col-md-3">    
                <Input toolTip="Enter a valid City" valid={this.state.inputCity} handleChange={this.handleChange} label="City *" htmlFor="inputCity" type="text" />
            </div>
            <div className="col-sm-12 col-md-3">    
                <Input toolTip="Enter a valid Zip Code" valid={this.state.inputZipCode} handleChange={this.handleChange} label="Zip code *" htmlFor="inputZipCode" type="text" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-6">
                <Input toolTip="Enter a valid Phone number" valid={this.state.inputPhone} handleChange={this.handleChange} label="Phone *" htmlFor="inputPhone" type="tel" />
            </div>
            <div className="col-sm-12 col-md-6">
                <Input toolTip="Enter a valid Email" valid={this.state.inputEmail} handleChange={this.handleChange} label="Email *" htmlFor="inputEmail" type="email" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-6">
                <Input  label="Discount code" htmlFor="inputDiscount" type="text" />
            </div>
          </div>
          <p className="form_title">{this.props.formSubTitle}</p>
          <div className="row">
            <div className="col-sm-12 col-md-4">
                <Input value={this.state.valueNameChecked} toolTip="Enter a valid Name" valid={this.state.pasFirstName} handleChange={this.handleChange} label="First Name *" htmlFor="pasFirstName" type="text" disabled={this.state.disabled} />
            </div>
            <div className="col-sm-12 col-md-4">
                <Input value={this.state.valueSurnameChecked} toolTip="Enter a valid Surname" valid={this.state.pasLastName} handleChange={this.handleChange} label="Last Name *" htmlFor="pasLastName" type="text" disabled={this.state.disabled} />
            </div>
            <div className="col-sm-12 col-md-4">
                <Input  label="Passenger type" htmlFor="pasType" type="select" />
            </div>
          </div>
          <div id="passengers">
          </div>
          <Button type="submit" className="btn btn-success" text="+ Add another passenger" />
          <div className="form-check pt-3">
            <label className="form-check-label">
              <input onChange={this.onChecked} type="checkbox" className="form-check-input" />
              Apply booking person as first passenger
            </label>
          </div>
        </div>  
      </form>
      )
    }
}

export default Form; 
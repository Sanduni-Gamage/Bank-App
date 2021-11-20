import React, { Component } from 'react';
const regExp = RegExp(
    /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
)
const formValid = ({ isError, ...rest }) => {
    let isValid = false;

    Object.values(isError).forEach(val => {
        if (val.length > 0) {
            isValid = false
        } else {
            isValid = true
        }
    });

    Object.values(rest).forEach(val => {
        if (val === null) {
            isValid = false
        } else {
            isValid = true
        }
    });

    return isValid;
};
export default class Bank extends Component {
  constructor(props) {
      super(props);
      this.onChangeBankID = this.onChangeBankID.bind(this);
      this.onChangeBankName = this.onChangeBankName.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

      this.state = {
          bankid: '',
          bankname: '',
          isError:{
            bankid: '',
            bankname: '',
          }
      }
  }
  onChangeBankID(e) {
    this.setState({
      bankid: e.target.value
    });
  }
  onChangeBankName(e) {
    this.setState({
      bankname: e.target.value
    })  
  }
 

  onSubmit = e => {
    e.preventDefault();
    if (formValid(this.state)) {
        console.log(this.state)
    } else {
        console.log("Form is invalid!");
    }
};
formValChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let isError = { ...this.state.isError };

    switch (name) {
        case "bankid":
            isError.bankid =
                value.length === 11? "11 chracters needed" : "";
            break;
        case "email":
            isError.bankname = regExp.test(value)
                ? ""
                : "Bank Name  is invalid";
            break;
        
        default:
            break;
    }

    this.setState({
        isError,
        [name]: value
    })
};

 
  render() {
    const { isError } = this.state;
      return (
          <div style={{ marginTop: 10 }}>
              <h3>Add Bank</h3>
              <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                      <label>Bank ID :  </label>
                      <input 
                        type="text" 
                        className={isError.bankid.length > 0 ? "is-invalid form-control" : "form-control"}
                        value={this.state.bankid}
                        onChange={this.onChangeBankID}
                        />
                        {isError.bankid.length > 0 && (
                        <span className="invalid-feedback">{isError.bankid}</span>
                    )}
                  </div>
                  <div className="form-group">
                      <label>Bank Name: </label>
                      <input type="text" 
                        className={isError.bankname.length > 0 ? "is-invalid form-control" : "form-control"}
                        value={this.state.bankname}
                        onChange={this.onChangeBankName}
                        />
                        {isError.bankname.length > 0 && (
                        <span className="invalid-feedback">{isError.bankname}</span>
                        )}
                        </div>
                  
                  <div className="form-group">
                      <input type="submit" value="Add Bank " className="btn btn-primary"/>
                  </div>
              </form>
          </div>
      )
  }
}
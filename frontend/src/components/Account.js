import React, { Component } from 'react';

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
export default class Account extends Component {
  constructor(props) {
      super(props);
      this.onChangepersonid = this.onChangepersonid.bind(this);
      this.onChangepersonfname = this.onChangepersonfname.bind(this);
      this.onChangepersonlname = this.onChangepersonlname.bind(this);
      this.onChangedob = this.onChangepersondob.bind(this);
      this.onChangephonenum = this.onChangephonenum.bind(this);
      this.onChangenic = this.onChangenic.bind(this);
      this.onChangepersongender = this.onChangepersongender.bind(this);
      this.onChangeaddress = this.onChangeaddress.bind(this);

      this.onSubmit = this.onSubmit.bind(this);

      this.state = {
          personid: '',
          personfname: '',
          personlname:'',
          dob:'',
          phonenum:'',
          nic:'',
          gender:'',
          address:'',
          isError:{
          personid: '',
          personfname: '',
          personlname:'',
          dob:'',
          phonenum:'',
          nic:'',
          gender:'',
          address:'',
          }
      }
  }
  onChangepersonid(e) {
    this.setState({
      personid: e.target.value
    });
  }
  onChangepersonfname(e) {
    this.setState({
      personfname: e.target.value
    }); 
  }

  onChangepersonlname(e) {
    this.setState({
      personlname: e.target.value
    }); 
  }
  onChangedob(e) {
    this.setState({
      dob: e.target.value
    }); 
  }
  onChangephonenum(e) {
    this.setState({
      phonenum: e.target.value
    }); 
  }

  onChangenic(e) {
    this.setState({
      nic: e.target.value
    }); 
  }
  onChangepersongender(e) {
    this.setState({
      gender: e.target.value
    }); 
  }

  onChangeaddress(e) {
    this.setState({
      address: e.target.value
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
        case "personid":
            isError.personid =
                value.length === 11? "11 chracters needed" : "";
            break;
        case "nic":
            isError.nic =
                value.length === 10? "10 chracters needed" : "";
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
              <h3>Add Person Account </h3>
              <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                      <label>Person ID  :  </label>
                      <input 
                        type="text" 
                        className={isError.personid.length > 0 ? "is-invalid form-control" : "form-control"}
                        value={this.state.personid}
                        onChange={this.onChangepersonid}
                        />
                        {isError.personid.length > 0 && (
                        <span className="invalid-feedback">{isError.bankid}</span>
                    )}
                  </div>
                  <div className="form-group">
                      <label>Person First Name : </label>
                      <input type="text" 
                        className="form-control"
                        value={this.state.personfname}
                        onChange={this.onChangepersonfname}
                        />
                  </div>
                  <div className="form-group">
                      <label>Person Last Name : </label>
                      <input type="text" 
                        className="form-control"
                        value={this.state.personlname}
                        onChange={this.onChangepersonlname}
                        />
                  </div>
                  <div className="form-group">
                      <label>Person Last Name : </label>
                      <input type="text" 
                        className="form-control"
                        value={this.state.personlname}
                        onChange={this.onChangepersonlname}
                        />
                  </div>
                  <div className="form-group">
                      <label>Date of Birth : </label>
                      <input type="text" 
                        className="form-control"
                        value={this.state.dob}
                        onChange={this.onChangedob}
                        />
                  </div>
                  <div className="form-group">
                      <label>Phone Number : </label>
                      <input type="text" 
                        className="form-control"
                        value={this.state.phonenum}
                        onChange={this.onChangephonenum}
                        />
                  </div>
                  

                  <div className="form-group">
                      <label>NIC : </label>
                      <input type="text" 
                        className={isError.nic.length > 0 ? "is-invalid form-control" : "form-control"}
                        value={this.state.nic}
                        onChange={this.onChangenic}
                        />
                        {isError.nic.length > 0 && (
                        <span className="invalid-feedback">{isError.nic}</span>
                        )}
                        </div>

                        <div className="form-group">
                      <label>Gender : </label>
                      <input type="text" 
                        className="form-control"
                        value={this.state.gender}
                        onChange={this.onChangepersongender}
                        />
                  </div>
                  
                  <div className="form-group">
                      <label>Address : </label>
                      <input type="text" 
                        className="form-control"
                        value={this.state.address}
                        onChange={this.onChangeaddress}
                        />
                  </div>
                  
                  <div className="form-group">
                      <input type="submit" value="Add Account  " className="btn btn-primary"/>
                  </div>
              </form>
          </div>
      )
  }
}
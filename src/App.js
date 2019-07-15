import React, {Component} from 'react';
import Button from '@material-ui/core/Button';

class App extends Component {



  render() {
    const loginStyle = {
      backgroundColor: '#2a2a2a',
      textAlign: 'center',
      color: '#fff',
      display:'flex',
      justifyContent: 'center',
    }
    const forgot = {
      marginTop:'50px',
    }

    return (
      <div style={loginStyle}>
        <div className="login">
        <div id="logo">
        <h1 id="loginLogo">Social</h1>
        </div>
          <div id="loginInputs" className="flex flex-column">
            <input className="logins" type="text" placeholder="Username Daddy UwU" />
            <input className="logins" type="password" placeholder="Password Daddy UwU" />
          </div>
          <div id="bottomLogin"className="flex flex-column">
            <div id="forgotCreate" className="flex flex-row justify-content-around" style={forgot}>
              <h3>hewwo</h3>
              <h3>hewwo</h3>
            </div>
          <Button className="hewwo" variant="contained" color="primary">
                Login
          </Button>
          </div>
        </div>
      </div>
    )
  }
}

export default App;

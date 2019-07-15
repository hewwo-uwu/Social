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

    return (
      <div style={loginStyle}>
        <div className="login">
        <div id="logo">
        <h1 id="loginLogo">Social</h1>
        </div>
          <div className="flex flex-column">
            <input className="logins sign__input" type="text" placeholder="Username Daddy UwU" />
            <input className="logins sign__input" type="password" placeholder="Password Daddy UwU" />
          </div>
          <div className="flex flex-column">
            <div>
              <p>Need an account? Sign up!<br />Forgot Password?</p>
            </div>
            </div>
          <Button className="hewwo" variant="contained" color="primary">
                Login
          </Button>
        </div>
      </div>
    )
  }
}

export default App;

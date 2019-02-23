import React from 'react';
import { Redirect } from 'react-router-dom';
import GuestLayout from './guest-layout';
import cookie from '../libs/cookie';
import Authenticator from './fake-authenticator';
import axios from 'axios';
import Loader from 'react-loader-advanced';


export default class Login extends React.Component {
  onLoginRedirectUrl = '/dashboard';

  constructor(props) {
    super(props);
    this.state = {
      loaded: false,//if the app is fully loaded
      loggedIn: false,//if the user has logged in
      loading: false,//if the loading for spinner
      error: '',
      errorMsg: '',//if the error dey while logging in
    };
  }

  componentDidMount() {
    const isLoggedIn = Authenticator.isLoggedIn();
    this.setState({ loading: false });
    if (isLoggedIn) {
      this.setState({
        loaded: true,
        loggedIn: true,
      });
    } else {
      this.setState({
        loaded: true,
      });
    }
  }

  handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
               // logout();
                //location.reload(true);
                console.log(response.status);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
 }

  ajaxlogin(u,p){
    this.setState({ loading: true });
    axios.get('https://other.standbasis.com/login.php', {
      params: {
        user: u,
        pass: p
      },
      timeout: 5000
    })
    .then((response) => {
       if (response.data.error) {
        this.setState({ loading: false });
          console.log(response)
          alert("Error in Login")
          this.setState({
            error: 'Error on login',
            errorMsg: ' Please use username:password that was given to you ',
          })
          }
        else {
          //get the jobs assigned to user
          axios.get('https://other.standbasis.com/get_jobs.php', {
            params: {
              surv: response.data.users.id
            }
          }).then((response2) => {
              if (response2.data.jobs) {
                let jobval = JSON.stringify(response2.data.jobs);
                const name = response.data.users.id+'#jobs';
                cookie.setItem(name, jobval );
                console.log('Jobs Array: '+ jobval)
              }
          });

          this.setState({ loading: false });
          let userval = JSON.stringify(response.data.users);
          cookie.setItem('user_logged', 'yes' );
          cookie.setItem('users', userval );
          console.log(userval);
          this.setState({
            loggedIn: true,
          });
        }
    })
    .catch(function (error) {
      alert(error);
      console.log(error);
      this.setState({ loading: false });
    });

  }

  handleSubmit(e) {
    if (e && e.preventDefault) e.preventDefault();
    const loginData = new FormData(e.target);
    const username = loginData.get('username');
    const password = loginData.get('password');
    this.ajaxlogin(username,password);
  }



  render() {
    const {
      loggedIn,
      error,
      errorMsg,
      loaded,
      loading,
    } = this.state;
    if (!loaded) return null;
    if (loggedIn) {
      return <Redirect push={false} to={this.onLoginRedirectUrl} />;
    }
    return (

      <GuestLayout>
      <Loader show={loading} message={'Please wait...'}>
        <div className="columns is-centered p-t-xl p-r-md p-l-md">
          <div className="column is-half">
            <div className="box">
              <h1 className="title">Login</h1>
              <form onSubmit={e => this.handleSubmit(e)}>
                <div className="field">
                  <label className="label" htmlFor="username">
                    Username
                    <div className="control">
                      <input
                        defaultValue="demo"
                        id="username"
                        name="username"
                        className={`input ${error === 'username' ? 'is-danger' : ''}`}
                        type="text"
                        placeholder="Username input"
                      />
                    </div>
                  </label>
                </div>
                <div className="field">
                  <label className="label" htmlFor="password">
                    Password
                    <div className="control">
                      <input
                        defaultValue="demo"
                        id="password"
                        name="password"
                        className={`input ${error === 'password' ? 'is-danger' : ''}`}
                        type="password"
                        placeholder="********"
                      />
                    </div>
                  </label>
                </div>
                <div className="field is-grouped">
                  <div className="control">
                    <button type="submit" className="button is-link">Login To Use Ratings Admin</button>
                  </div>
                </div>
                {
                  error !== '' && (
                    <p className="help is-danger">
                      {errorMsg}
                    </p>
                  )
                }
              </form>
            </div>
          </div>
        </div>
        </Loader>
      </GuestLayout>

    );
  }
}

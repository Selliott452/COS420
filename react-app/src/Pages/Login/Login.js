import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Login.css'
import DBManager from '../../dbManager';
import '../../firestore'
import firebase from 'firebase';

class Login extends Component {
  
	provider = new firebase.auth.GoogleAuthProvider();

	componentDidMount() {
		this.provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
	}

	login = () => firebase.auth().signInWithPopup(this.provider).then(result => {
		DBManager.getInstance().id = result.user.email;
		this.props.history.push('/scheduling');
	});

	render() {
		return (
			<div className="LoginPage" >
				<Typography variant="h4" color='textPrimary' gutterBottom>
					Welcome to Advisely!
				</Typography>
				<Typography variant="subtitle2" color='textPrimary' gutterBottom>
					Please login with a Google account by clicking the button below.
				</Typography>
        		<br/>
        		<br/>
				<Button variant="contained" color="primary" onClick={this.login}>Login</Button>
      		</div>
		)
	}
}

export default Login;

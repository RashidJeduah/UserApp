import React from 'react';
import {connect} from 'react-redux';
import {registerWithEmail, loginWithGoogle} from '../Store/authActions';

function Register (props) {

    if (!props.auth.isLoaded) return null;

    if (props.auth.uid) props.history.push('/');

    const handleSubmit = (e)=>{
        e.preventDefault();
        let email= e.target.elements.email.value;
        let password= e.target.elements.password.value;
        props.registerWithEmail(email, password)
    }

    return (
        <div>
            <h1>Register Now</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <input name='email' type='email' placeholder='email' />
                </div>

                <div>
                    <label>Password</label>
                    <input name='password' type='password' placeholder='password' />
                </div>

                <hr />

                <button type='submit'>Join</button>

                <hr />

                <button onClick={props.loginWithGoogle}>
                    <img src='https://pngimg.com/uploads/google/google_PNG19644.png' alt='' width='100' />
                </button>

            </form>
        </div>
    )
};

const mapStateToProps = (state)=>{
    return {
        auth: state.firebase.auth
    }
};

const mapDispatchToProps = {
    registerWithEmail,
    loginWithGoogle
};

export default connect(mapStateToProps, mapDispatchToProps)(Register)
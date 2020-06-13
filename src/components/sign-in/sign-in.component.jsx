import React from "react";
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password:''
        }
    }
    handleSubmit = (event) => {

        event.preventDefault();
        this.setState( {email:'', password:''});

    }

    handleChange = (event) => {

        const { name, value } = event.target;
        this.setState( { [name]: value});
        //  console.log('name:' + name);
        // console.log('value:' + value);
    }
    render() {
        // console.log('rendered');
        return (
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit= { this.handleSubmit }>
                    <FormInput name='email' type='email' handleChange={ this.handleChange } value={this.state.email} label='Email' required></FormInput>
                    <FormInput name='password' type='password' handleChange={ this.handleChange } value={this.state.password}  label='Password' required></FormInput>
                    <CustomButton type='submit'> Sign In </CustomButton>                 
                </form>
            </div>
        )
    }
}

export default SignIn;
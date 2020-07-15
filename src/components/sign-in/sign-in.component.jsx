import React from "react";
import './sign-in.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password:''
        }
    }
    handleSubmit = async (event) => {

        event.preventDefault();

        const {email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email,password);
            this.setState( {email: '', password: ''} )
        }
        catch(error) {
            console.error(error);
        }

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
                    <div className='buttons'>
                        <CustomButton type='submit'> Sign In </CustomButton> 
                        <CustomButton isGoogleSignIn = {true} onClick={ signInWithGoogle }> Sign in with Google </CustomButton>   
                        {/* <CustomButtonDene deneme='deneme value' onClick={ signInWithGoogle }> CustomButtonDene </CustomButtonDene>                */}
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;
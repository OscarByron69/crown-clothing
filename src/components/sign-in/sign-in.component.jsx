import React from 'react';

import './sign-in.styles.scss';

// Componentes
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { auth, signInWithGoogle } from '../../firebase/firebase.util';

class SignIn extends React.Component {
      constructor(props) {
            super(props);

            this.state = {
                  email: '',
                  password: ''
            }
      }

      handleSubmit = async event => {
            event.preventDefault();

            const { email, password } = this.state;

            try {
                  await auth.signInWithEmailAndPassword(email, password);
                  this.setState({ email: '', password: '' })

            } catch (error) {
                  console.error(error);
            }

      }
      //Mantiene la infromacion en el cuadro
      handleChange = event => {
            const { name, value } = event.target;
            this.setState({ [name]: value })
      }

      render() {
            return (
                  <div className='sign-in'>
                        <h2>I already have an account</h2>
                        <span>Sign in wih your email and password</span>

                        <form onSubmit={this.handleSubmit}>
                              <FormInput
                                    name='email'
                                    type='email'
                                    handleChange={this.handleChange}
                                    value={this.state.email}
                                    label="Email"
                                    required />
                              <FormInput
                                    name='password'
                                    type='password'
                                    handleChange={this.handleChange}
                                    value={this.state.password}
                                    label="Password"
                                    required />
                              <div className='buttons'>
                                    <CustomButton type='submit'>SIGN IN</CustomButton>
                                    <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn >
                                          SIGN IN WITH GOOGLE
                              </CustomButton>
                              </div>

                        </form>
                  </div>
            )
      }
}

export default SignIn;
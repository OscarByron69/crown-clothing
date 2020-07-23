import React from 'react';

import './sign-up.styles.scss';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';


import { auth, createUserProfileDocument } from '../../firebase/firebase.util';

class SignUp extends React.Component {
      constructor() {
            super();

            this.state = {
                  displayName: '',
                  email: '',
                  password: '',
                  confirmPasword: ''
            }
      }

      handleSubmit = async event => {
            event.preventDefault();
            const { displayName, email, password, confirmPasword } = this.state;

            if (password !== confirmPasword) {
                  alert("password don't match");
                  return;
            }
            try {

                  const { user } = await auth.createUserWithEmailAndPassword(email, password);

                  await createUserProfileDocument(user, { displayName });

                  this.setState({
                        displayName: '',
                        email: '',
                        password: '',
                        confirmPasword: ''
                  });
            } catch (error) {
                  console.error(error);
            }
      }

      handleChange = event => {
            const { name, value } = event.target;
            this.setState({ [name]: value });
      }
      render() {
            const { displayName, email, password, confirmPasword } = this.state;
            return (
                  <div className='sign-up'>
                        <h2 className='title'> I do not have a account</h2>
                        <span>Sign up with your email and password</span>
                        <form className='sign-up-form' onSubmit={this.handleSubmit} >
                              <FormInput
                                    type='text'
                                    name='displayName'
                                    value={displayName}
                                    onChange={this.handleChange}
                                    label='Display Name'
                                    required
                              />
                              <FormInput
                                    name='email'
                                    type='email'
                                    value={email}
                                    onChange={this.handleChange}
                                    label='Email'
                                    required
                              />
                              <FormInput
                                    name='password'
                                    type='password'
                                    value={password}
                                    onChange={this.handleChange}
                                    label='Password'
                                    required
                              />
                              <FormInput
                                    name='confirmPasword'
                                    type='password'
                                    value={confirmPasword}
                                    onChange={this.handleChange}
                                    label='Confirm Password'
                                    required
                              />

                              <CustomButton type='submit'>SIGN UP</CustomButton>

                        </form>
                  </div>
            )
      }
}
export default SignUp;
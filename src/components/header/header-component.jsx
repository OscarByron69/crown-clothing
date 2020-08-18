import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './header.styles.scss'

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';

import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { auth } from '../../firebase/firebase.util';

const Header = ({ currentUser, hidden }) => (
      <div className='header'>
            <Link className='logo-container' to='/'>
                  <Logo className='logo' />
            </Link>
            <div className='options'>
                  <Link className='option' to='/shop'>SHOP</Link>
                  <Link className='option' to='/contact'>CONTACT</Link>
                  {
                        currentUser ? (
                              <div className='option' onClick={() => auth.signOut()}> SING OUT</div>
                        ) : (
                                    <Link className='option' to='/signin'>SING IN</Link>
                              )
                  }
                  <CartIcon />
            </div>
            {
                  hidden
                        ? null
                        : <CartDropDown />
            }

      </div>
)

const mapStateProps = createStructuredSelector({
      // currentUser: state.user.currentUser
      currentUser: selectCurrentUser,
      hidden: selectCartHidden
})

export default connect(mapStateProps)(Header);
import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';

const Loginsignup = () => {
  const [action, setAction] = useState('Sing up');

  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        {action === 'Log in' ? null : (
          <div className='input'>
            <div className='svg'>
              <FaUser />
            </div>
            <input type='text' placeholder='Name' />
          </div>
        )}
        <div className='input'>
          <div className='svg'>
            <MdEmail />
          </div>
          <input type='email' placeholder='Email' />
        </div>
        <div className='input'>
          <div className='svg'>
            <RiLockPasswordFill />
          </div>
          <input type='password' placeholder='Password' />
        </div>
      </div>
      <div className='forgot-password'>Forget Password</div>
      <div className='submit-container'>
        <div
          className={action === 'Log in' ? 'submit gray' : 'submit'}
          onClick={() => {
            setAction('Sing up');
          }}
        >
          Sign up
        </div>
        <div
          className={action === 'Sing up' ? 'submit gray' : 'submit'}
          onClick={() => {
            setAction('Log in');
          }}
        >
          Log In
        </div>
      </div>
    </div>
  );
};

export default Loginsignup;


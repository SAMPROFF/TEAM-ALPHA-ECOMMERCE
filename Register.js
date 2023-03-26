import React from 'react'
import Button from './Button'

const Register = () => {
  return (
    <div className='row'>
      <div className='col-md-4'></div>
    <div className='col-md-4'>
     <form>
      <div className='form-group'>
        <label htmlfor='email'>Email</label>
        <input type='email' className='form-control'/>
      </div>
      <div className='form-group'>
        <label htmlfor='password'>Password</label>
        <input type='password' className='form-control'/>
      </div>

      <div className='form-group'>
        <label htmlfor='password2'>Confirm Password</label>
        <input type='password2' className='form-control'/>
      </div>
      <div className='form-group mt-3'>
        <Button name='Sign up' control='form-control'/>
      </div>
    </form>

    </div>
    <div className='col-md-4'></div>
    </div>
  )
}

export default Register

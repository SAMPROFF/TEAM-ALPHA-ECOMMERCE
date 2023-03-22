import { useRef, useState} from "react";
import {useNavigate} from 'react-router-dom'
import {toast} from 'reaact-toastify'

const signIn = () => {
    const userRef = useRef();

    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email,pwd);
        const loggedUser = JSON.parse(localStorage.getItem('user'));
          console.log(loggedUser)
           if(email===loggedUser.email && pwd===loggedUser.pwd){
             localStorage.setItem('isloggedIn',true)
              navigate('/')
          }else{
             toast.error('Wrong username or password')
         };
    };

    return (
        <div className='forms'>

             <h1>Sign in</h1>

             <form onSubmit={handleSubmit}>

                <div className='form-section'>
                  <label htmlFor="email">Email Address</label>
                     <input 
                       type="text"
                       id="email"
                       ref={userRef}
                       autoComplete="off"
                       onChange={(e) => setEmail(e.target.value)}
                       value={email} 
                       required 
                      />
                    </div>    
                 
                 <div className='form-section'>
                     <label htmlFor="passwword">Password</label>
                       <input 
                         type="password"
                         id="password"
                         onChange={(e) => setPwd(e.target.value)}
                         value={pwd} 
                         required
                       />
                    </div>   
                
                <div className='form-section'>
                    <button className='btn'>Sign in</button>
                </div>

            </form>
      </div>
            
        

    );
};




export default signIn

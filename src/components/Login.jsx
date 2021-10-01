import React from 'react'
import '../login.css'
import {provider , auth}  from '../Firebase/firebase'

import {useStateValue} from './ContextProv'
import { actionTypes } from './Reducer'



export const Login = () => {

    const [state,dispatch] = useStateValue(); 


    const authentication = ()=> {
        auth.signInWithPopup(provider)
        .then(result=>{

            dispatch({
                type: actionTypes.SET_USER,
                user : result.user,
            })
            console.log(result)
        }).catch(error=> alert(error.message))
    }


    return (
        <>
            <div className="log_in">
                <div className="img_login">
                
<img src="https://www.meilleure-innovation.com/wp-content/uploads/2021/05/logo-facebook-png-transparent.jpg" alt="" />
<img src="https://logos-marques.com/wp-content/uploads/2020/04/Facebook-logo.png" alt="" />
</div>
<button onClick={authentication} className="login_btn">Sign In</button>
            </div>
        </>
    )
}

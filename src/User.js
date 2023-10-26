

import React from 'react';
import { MyProvider1 } from './Components/UserContext';
import UserForm from './Components/UserForm';
export default function User()
{
    return(
        <div className='userprovider'>
          <MyProvider1>
                <UserForm/>
          </MyProvider1>
       
        </div>
    )
}
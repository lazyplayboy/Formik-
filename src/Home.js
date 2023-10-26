import MyForm from './Components/Form';
import { MyProvider } from './Components/Context';
import React from 'react';
export default function Home()
{
    return(
        <div>
            <MyProvider>
        <MyForm/>
      </MyProvider>
        </div>
    )
}
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from "../components/Navbar"
import { navbar } from '../utils';

const Root = () => {
    return (
         <Routes>
            <Route element={<Navbar/>}>
            <Route path='/' element={<Navigate to='/home' />} />
                {
                    navbar.map((value)=>{
                        return value?.isPrivate 
                        ?
                         <Route key={value?.id} path={value?.path} element={localStorage.getItem('tokenFoods')  ? value.element : <Navigate to ='/login'/>} /> 
                        :
                         <Route key={value?.id} path={value?.path} element={value?.element}/>
                    })
                }
            </Route>
            <Route path='*' element={<h1>404 NotFound</h1>} />
         </Routes>
        
    )
}

export default Root;
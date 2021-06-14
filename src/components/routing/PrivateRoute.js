import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/auth/AuthContext'
import { Redirect, Route } from 'react-router-dom'

export default function PrivateRoute({ component: Component, ...rest}) {

    const { isAuthenticated, isLoading } = useContext(AuthContext)

    return (
        <Route 
            {...rest } 
            render={ props => 
                !isAuthenticated && !isLoading ? (
                    <Redirect to='/' />
                ) : (
                    <Component {...props} />
                )
            } 
        />
    )
}

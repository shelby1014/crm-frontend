import React, { useState } from 'react'

import { LoginForm } from '../../components/login/Login.comp';

import "./entry.style.css";
import { ResetPassword } from '../../components/password-reset/PasswordReset.comp';

export const Entry = () => {
    const [email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [frmLoad, setFrmLoad] = useState('login');

    const handleOnChange = e => {
        const { name, value } = e.target

        switch (name) {
            case 'email':
                setEmail(value)
                break

            case 'Password':
                setPassword(value)
                break

            default:
                break
        }
    };

    const handleOnSubmit = e => {
        e.preventDefault()
        if (!email || !Password) {
            return alert("Please enter both fields")
        }
        console.log(email, Password);
    };

    const handleOnResetSubmit = e => {
        e.preventDefault()
        if (!email) {
            return alert("Please enter email")
        }
        console.log(email);
    };

    const formSwitcher = (frmType) => {
        setFrmLoad(frmType);
    };

    return (
        <div className='entry-page bg-info'>
            <div className='jumbotron'>
                {frmLoad === 'login' && <LoginForm
                    handleOnChange={handleOnChange}
                    handleOnSubmit={handleOnSubmit}
                    formSwitcher={formSwitcher}
                    email={email}
                    pass={Password}
                />}
                {frmLoad === 'reset' && <ResetPassword
                    handleOnChange={handleOnChange}
                    handleOnResetSubmit={handleOnResetSubmit}
                    formSwitcher={formSwitcher}
                    email={email}
                />}
            </div>
        </div>
    )
}

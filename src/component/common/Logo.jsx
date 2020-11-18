import React from "react";
import { Link } from 'react-router-dom'

export const Logo = () => (
    <div className="logo">
        <Link to="/">
            <img src="/assets/images/logo/logo-light.png" alt="Digital Agency"/>
        </Link>
    </div>
)

